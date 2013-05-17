define(function(require, exports, module) {
	"use strict";
	var toString = Object.prototype.toString,
		EventEmitter = require('./EventEmitter'),
		juicer = require('juicer'),
		defaultOptions = {
			direction: 'horizon',
			/* verical or horizon */
			size: 5,
			setItem: function($view, data) {
				// to be implemented
			}
		};

	function Carousel(el, options) {
		if (!(this instanceof Carousel)) {
			return new Carousel(el, options);
		}

		if (toString.call(el) == '[object String]') {
			this.$el = $('#' + el);
		} else {
			this.$el = $(el);
		}

		this.options = $.extend({}, defaultOptions, options);

		this.__defineGetter__('currentIndex', function() {
			return this._currentIndex;
		});

		this.__defineSetter__('currentIndex', function(val) {
			var prev = this._currentIndex;
			this._currentIndex = val;

			if (prev !== val) {
				this.trigger('CurrentIndexChanged', prev, val);
			}
		});
	}

	Carousel.prototype = {
		next: function() {

		},
		prev: function() {

		},
		to: function(index) {},
		show: function(list, index) {
			this.$el.html(juicer('<ul>{@each i in range(0, ' + list.length + ')}<li></li>{@/each}</ul>', {}));
			this.$el.show();
		},
		hide: function() {

		}
	};

	Carousel.prototype.__proto__ = EventEmitter.prototype;

	return Carousel;
});