define(function(require, exports, module) {
	"use strict";
	var toString = Object.prototype.toString,
		EventEmitter = require('./EventEmitter'),
		juicer = require('juicer'),
		slice = Array.prototype.slice,
		defaultOptions = {
			direction: 'horizon',
			/* verical or horizon */
			size: 5,
			setItem: function($view, data) {
				// to be implemented
			},
			itemWidth: 190,
			gap: 10,
			position: {
				x: 0,
				y: 0
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

		$.extend(this, defaultOptions, options);

		this.__defineGetter__('currentIndex', function() {
			return this._currentIndex;
		});

		this.__defineSetter__('currentIndex', function(val) {
			var prev = this._currentIndex;
			this._currentIndex = val;

			if (!this.carouselList) {
				this.getCurrentDataList.forEach(function() {

				});
			}

			if (prev !== val) {
				this.trigger('CurrentIndexChanged', prev, val);
			}
		});

		this.$el.html(juicer('<ul>{@each i in range(0, ' + (this.size + 2) + ')}<li class="carousel_item"></li>{@/each}</ul>', {}));
		this.$viewList = slice.call(this.$('.carousel_item').map(function() {
			return $(this);
		}));
	}

	Carousel.prototype = {
		next: function() {

		},
		prev: function() {

		},
		to: function(index) {},
		show: function(list, index) {
			this.$el.show();
		},
		hide: function() {

		},
		$: function(selector) {
			return this.$el.find(selector)
		},
		_buildPositionList: function() {
			this.itemPostionList = [];
			for (var i = 0; i < (this.size + 2); i++) {
				this.itemPostionList.push(this.direction == 'horizon' ? [this.position.x + (i - 1) * (this.itemWidth + this.gap), 0] : []);
			}
		},
		getCurrentDataList: function() {
			var startIndex = (this.currentIndex - Math.floor(this.size / 2) + this.dataList.length) % this.dataList.length,
				list = [];
			for (var i = 0, i < (this.size + 2); i++) {
				list.push(this.dataList[(startIndex + i) % this.dataList.length]);
			}
			return list;
		}
	};

	Carousel.prototype.__proto__ = EventEmitter.prototype;

	return Carousel;
});