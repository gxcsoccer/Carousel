/**
 * @author g00201348
 */
define(function(require, exports, module) {
    "use strict";
    var eventSplitter = /\s+/;

    function EventEmitter() {}

    var on = EventEmitter.prototype.on = function(events, callback, context) {
            var cache, event, list;
            if (!callback) {
                return this;
            }

            cache = this.__events || (this.__events = {});
            events = events.split(eventSplitter);

            while (event = events.shift()) {
                list = cache[event] || (cache[event] = []);
                list.push(callback, context);
            }
        };

    var off = EventEmitter.prototype.off = function(events, callback, context) {
            var cache, event, list, i, len;

            // No events, or removing *all* events.
            if (!(cache = this.__events)) {
                return this;
            }
            if (!(events || callback || context)) {
                delete this.__events;
                return this;
            }

            events = events ? events.split(eventSplitter) : _.keys(cache);

            // Loop through the callback list, splicing where appropriate.
            while (event = events.shift()) {
                list = cache[event];
                if (!list) {
                    continue;
                }

                if (!(callback || context)) {
                    delete cache[event];
                    continue;
                }

                for (i = list.length - 2; i >= 0; i -= 2) {
                    if (!(callback && list[i] !== callback || context && list[i + 1] !== context)) {
                        list.splice(i, 2);
                    }
                }
            }

            return this;
        };

    var once = EventEmitter.prototype.once = function(events, callback, context) {
            var origFn = callback;
            var self = this;
            callback = function() {
                off.call(self, events, callback, context);
                origFn.apply(this, arguments);
            };
            return on.call(this, events, callback, context);
        };

    var trigger = EventEmitter.prototype.trigger = function(events /* , arg1, arg2 */ ) {
            var cache, event, all, list, i, len, rest = [],
                args;
            if (!(cache = this.__events)) {
                return this;
            }

            events = events.split(eventSplitter);

            // Using loop is more efficient than `slice.call(arguments, 1)`
            for (i = 1, len = arguments.length; i < len; i++) {
                rest[i - 1] = arguments[i];
            }

            var dfdArr = [];
            // For each event, walk through the list of callbacks twice, first to
            // trigger the event, then to trigger any `"all"` callbacks.
            while (event = events.shift()) {
                // Copy callback lists to prevent modification.
                if (all = cache.all) {
                    all = all.slice();
                }
                if (list = cache[event]) {
                    list = list.slice();
                }

                // Execute event callbacks.
                var ret;
                if (list) {
                    for (i = 0, len = list.length; i < len; i += 2) {
                        ret = list[i].apply(list[i + 1] || this, rest);
                        dfdArr.push(ret);
                    }
                }

                // Execute "all" callbacks.
                if (all) {
                    args = [event].concat(rest);
                    for (i = 0, len = all.length; i < len; i += 2) {
                        ret = all[i].apply(all[i + 1] || this, args);
                        dfdArr.push(ret);
                    }
                }
            }

            return $.when.apply($, dfdArr);
        };

    return EventEmitter;
});