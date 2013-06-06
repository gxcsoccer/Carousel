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
			itemHeight: 190,
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
			var prev = this._currentIndex,
				len = this.dataList.length,
				that = this;
			this._currentIndex = val;

			if (!this.carouselList) {
				this.carouselList = this.getCurrentDataList();
				this.$viewList.forEach(function($el, index) {
					that.setItem($el, that.carouselList[index]);
					$.data($el, 'index', index);
					$el.css({
						'-webkit-transform': that.itemPostionList[index],
						width: that.itemWidth,
						height: that.itemHeight
					});
				});
			} else if ((prev + 1) % len == val) {
				this.carouselList = this.getCurrentDataList();
				this.$viewList.forEach(function($el) {
					var index = $.data($el, 'index');
					$el.removeClass('moveable');
					$el[0].offsetLeft;
					if (index == 0) {
						that.setItem($el, that.carouselList[that.size + 1]);
						index = that.size + 1;
					} else {
						$el.addClass('moveable');
						index = index - 1;
					}
					$el.css({
						'-webkit-transform': that.itemPostionList[index]
					});
					$.data($el, 'index', index);
				});
			} else {
				this.carouselList = this.getCurrentDataList();
				this.$viewList.forEach(function($el) {
					var index = $.data($el, 'index');
					$el.removeClass('moveable');
					$el[0].offsetLeft;
					if (index == that.size + 1) {
						that.setItem($el, that.carouselList[0]);
						index = 0;
					} else {
						$el.addClass('moveable');
						index = index + 1;
					}
					$el.css({
						'-webkit-transform': that.itemPostionList[index]
					});
					$.data($el, 'index', index);
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
		this.$el.css({
			width: this.direction == 'horizon' ? ((this.itemWidth + this.gap) * this.size - this.gap) : this.itemWidth,
			height: this.direction == 'horizon' ? this.itemHeight : ((this.itemHeight + this.gap) * this.size - this.gap)
		})
		this._buildPositionList();
		this.hide();
	}

	Carousel.prototype = {
		next: function() {
			this.currentIndex = this.currentIndex == (this.dataList.length - 1) ? 0 : (this.currentIndex + 1);
		},
		prev: function() {
			this.currentIndex = this.currentIndex == 0 ? (this.dataList.length - 1) : (this.currentIndex - 1);
		},
		to: function(index) {},
		show: function(list, index) {
			this.$el.show();
			this.dataList = list;
			this.currentIndex = index || 0;
		},
		hide: function() {
			this.$el.hide();
		},
		$: function(selector) {
			return this.$el.find(selector)
		},
		_buildPositionList: function() {
			this.itemPostionList = [];
			for (var i = 0; i < (this.size + 2); i++) {
				this.itemPostionList.push(this.direction == 'horizon' ? ('translate3d(' + (this.position.x + (i - 1) * (this.itemWidth + this.gap)) + 'px,0,0)') : ('translate3d(0,' + (this.position.y + (i - 1) * (this.itemHeight + this.gap)) + 'px,0)'));
			}
		},
		getCurrentDataList: function() {
			var startIndex = (this.currentIndex - Math.floor((this.size + 2) / 2) + this.dataList.length) % this.dataList.length,
				list = [];
			for (var i = 0; i < (this.size + 2); i++) {
				list.push(this.dataList[(startIndex + i) % this.dataList.length]);
			}
			return list;
		}
	};

	Carousel.prototype.__proto__ = EventEmitter.prototype;

	return Carousel;
});