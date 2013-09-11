(function($) {
	function N(a) {
		this.itm = a
	}

	function R(a) {
		this.style[p] = this.style[p].split("translateZ")[0] + "translateZ(" + a + "px)"
	}

	function S(a) {
		var b = $(this),
			a = $("<img />").attr({
				width: b.attr("width"),
				height: b.attr("height")
			}).data("parent", a).one("load.cj", T).insertAfter(b);
		b.remove();
		a.attr("src", b.attr("data-src"))
	}

	function T(a) {
		a.stopPropagation();
		var a = $(this).data("parent"),
			b = a.data();
		if (b.count < b.len) b.count++;
		else {
			var c = b.cont,
				d = c.children(),
				j = b.len + 1,
				k = 360 / j,
				h, f, g, m, l, i, B, t, n, s, x, r, u, v, J = 0;
			f = 0;
			var o = $(b.imagery[0]),
				b = "true" === a.attr("data-captionsAlwaysVisible"),
				F = parseFloat(a.attr("data-reflectAlpha")) || 0.5,
				q = parseInt(o.attr("height"), 0) || o.height(),
				o = parseInt(o.attr("width"), 0) || o.width(),
				K = parseInt(a.attr("data-spacing"), 10) || 60,
				G = "true" === a.attr("data-reflection"),
				A = "true" === a.attr("data-animateIn"),
				H = "true" === a.attr("data-hoverShine"),
				C = a.data("wrapper");
			n = C.width() || 640;
			var y = o + 6,
				D = q + 6,
				I = q >> 1,
				K = (o + K) / 2 / Math.tan(Math.PI / j) + 0.5 | 0;
			c.data({
				wide: o,
				length: j,
				parent: C,
				halfWidth: n >> 1,
				auto: "true" === a.attr("data-autoplay"),
				threshold: parseFloat(a.attr("data-threshold")) || 0.0025
			});
			C.data("container", c);
			a.removeData().data("container", c);
			c = c[0];
			c.speed = parseFloat(a.attr("data-speed"));
			c.rotateX = n = parseInt(a.attr("data-rotateX"), 10) + "deg";
			c.rotateZ = s = parseInt(a.attr("data-rotateZ"), 10) + "deg";
			c.translateZ = u = parseInt(a.attr("data-translateZ"), 10) + "px";
			c.counter = 0;
			E && (c.timed = new N(c));
			for (var L = 0; L < j; L++)
				if (h = d[L], h.style[p] = "rotateY(" + J + "deg) translateZ(" + K + "px)", J += k, t = $(h).removeData().css("width", o + 3), h = t.children(".cj-thumb"), h.length) {
					if (h.attr("data-url")) h.addClass("cj-mouse").on("click.cj", O);
					g = t.find(".cj-caption");
					(l = g.length) ? (x = g.height(), b ? (r = !0, f = x, g.addClass("cj-border")) : (f = 0, r = !1, h.data({
						content: g,
						contentH: x
					}).on("mouseenter.cj", P).on("mouseleave.cj", U)), g.css({
						height: f,
						width: g.width(),
						visibility: "visible"
					})) : (x = 0, r = !0);
					i = h.children("img");
					f = i[0];
					m = w.createDocumentFragment();
					B = $("<canvas />").attr({
						width: y,
						height: D
					}).appendTo(m);
					g = B[0];
					i.remove();
					i = M(g, f, o, q);
					i.restore();
					if (H && !E && (g = B.clone().addClass("cj-hover").appendTo(m), g = g[0], i = M(g, f, o, q), v = i.getImageData(0, 0, y, D), Q(v), i.putImageData(v, 0, 0), i.restore(), h.data("shine", g), r)) h.on("mouseenter.cj", P);
					g = $("<div />").addClass("cj-absolute").appendTo(h);
					g[0].appendChild(m);
					G && (g = B.clone().addClass("cj-reflection").attr({
						width: y,
						height: D
					}).css("top", q).appendTo(t), t = x + q, l && b && g.css("top", t), g = g[0], i = g.getContext("2d"), i.save(), i.translate(3, q + 3), i.scale(1, -1), i.drawImage(f, 0, 0, o, q), i.restore(), i.globalCompositeOperation = "destination-out", l = i.createLinearGradient(0, 0, 0, I), l.addColorStop(0, "rgba(0, 0, 0, " + (1 - F) + ")"), l.addColorStop(1, "rgba(0, 0, 0, 1.0)"), i.fillStyle = l, i.rect(0, 0, y, D), i.fill(), h.data({
						high: q,
						reflect: g,
						rHeight: t
					}))
				}
			C.css("background-image", "none");
			a.css({
				width: y,
				visibility: "visible"
			});
			c.style[p] = "translateZ(" + (A ? "-5000px" : u) + ") rotateX(" + n + ") rotateZ(" + s + ") rotateY(0deg)";
			A ? Jacked.transform(c, {
				transform: "translateZ(" + u + ") rotateX(" + n + ") rotateZ(" + s + ") rotateY(-360deg)"
			}, {
				duration: 1E3,
				ease: "Quint.easeInOut",
				callback: z,
				callbackParams: !0
			}) : z(c, !0)
		}
	}

	function z(a, b, c) {
		var d = $(a).data();
		(d.auto || c) && Jacked.special(a, {
			duration: 2E4,
			ease: "Linear.easeNone",
			callback: V
		});
		if (b) {
			if (E) d.parent.on("touchstart.cj", W).on("touchend.cj", X);
			else d.parent.on("mouseenter.cj", Y).on("mouseleave.cj", Z);
			n && n.trigger("cjReady")
		}
	}

	function V(a, b, c) {
		a.counter -= a.speed;
		a.style[p] = "translateZ(" + a.translateZ + ") rotateX(" + a.rotateX + ") rotateY(" + a.counter + "deg) rotateZ(" + a.rotateZ + ")";
		c && z(a)
	}

	function Q(a) {
		for (var a = a.data, b = a.length, c = 4 * b, d, e, k, h, f; b--;) c -= 4, d = c + 1, e = d + 1, k = a[c] * r + s, h = a[d] * r + s, f = a[e] * r + s, a[c] = 255 < k ? 255 : 0 > k ? 0 : k, a[d] = 255 < h ? 255 : 0 > h ? 0 : h, a[e] = 255 < f ? 255 : 0 > f ? 0 : f
	}

	function O(a) {
		a.stopPropagation();
		a = $(this);
		"_blank" !== a.attr("data-target") ? window.location = a.attr("data-url") : window.open(a.attr("data-url"))
	}

	function P() {
		var a = $(this).data(),
			b = a.content,
			c = a.shine,
			d = a.reflect;
		c && (Jacked.stopTween(c), c.style.opacity = 1, Jacked.tween(c, {
			opacity: 0
		}, {
			ease: "Quint.easeInOut"
		}));
		b && (b.addClass("cj-border"), Jacked.tween(b[0], {
			height: a.contentH
		}), d && Jacked.tween(a.reflect, {
			top: a.rHeight
		}))
	}

	function U() {
		var a = $(this).data(),
			b = a.content,
			c = a.reflect;
		b && (b.removeClass("cj-border"), Jacked.tween(b[0], {
			height: 0
		}), c && Jacked.tween(a.reflect, {
			top: a.high
		}))
	}

	function M(a, b, c, d) {
		a = a.getContext("2d");
		a.save();
		a.translate(3, 3);
		a.drawImage(b, 0, 0, c, d);
		a.strokeStyle = "transparent";
		a.lineWidth = 3;
		a.stroke();
		return a
	}

	function Y() {
		var a = $(this),
			b = a.data(),
			c = b.container;
		c.data("auto") || z(c[0], !1, !0);
		b.offsetX = a.on("mousemove.cj", $).offset().left
	}

	function $(a) {
		var b = $(this),
			c = b.data("container"),
			d = c.data(),
			j = d.halfWidth,
			a = a.pageX - b.data("offsetX"),
			c = c[0];
		a < j ? (c.speed = -((j - a) * d.threshold), c.direction = 0) : (c.speed = (a - j) * d.threshold, c.direction = 1)
	}

	function Z() {
		var a = $(this).off("mousemove.cj").data("container");
		a.data("auto") || (a = a[0], a.throttle = a.speed, Jacked.special(a, {
			duration: 3E3,
			ease: "Linear.easeNone",
			callback: aa
		}))
	}

	function aa(a) {
		a.direction ? (a.throttle -= 0.01, 0 >= a.throttle && Jacked.stopTween(a)) : (a.throttle += 0.01, 0 <= a.throttle && Jacked.stopTween(a));
		a.counter -= a.throttle;
		a.style[p] = "translateZ(" + a.translateZ + ") rotateX(" + a.rotateX + ") rotateY(" + a.counter + "deg) rotateZ(" + a.rotateZ + ")"
	}

	function W(a) {
		var b = $(this),
			c = b.data("container"),
			d = c.data(),
			c = c[0];
		clearTimeout(c.timed.timer);
		Jacked.stopTween(c);
		d.prevX = d.pageX = !a.originalEvent.touches ? a.pageX : a.originalEvent.touches[0].pageX;
		b.on("touchmove.cj", ba)
	}

	function ba(a) {
		var b = $(this).data("container"),
			c = b.data(),
			d, j = c.prevX;
		d = !a.originalEvent || !a.originalEvent.touches ? c.pageX = a.pageX : c.pageX = a.originalEvent.touches[0].pageX;
		10 < Math.abs(j - d) && a.preventDefault();
		a = (d - j) * 2 * c.threshold;
		b = b[0];
		b.counter += a;
		b.style[p] = "translateZ(" + b.translateZ + ") rotateX(" + b.rotateX + ") rotateY(" + b.counter + "deg) rotateZ(" + b.rotateZ + ")"
	}

	function X(a) {
		var b = $(this).off("touchmove.cj").data("container"),
			c = b.data(),
			d = c.prevX,
			a = !a.originalEvent.touches ? a.pageX : c.pageX,
			j = Math.abs(a - d),
			b = b[0];
		b.timed.timing();
		10 > j || 200 < j || (b.counter = a < d ? b.counter - 360 / c.length : b.counter + 360 / c.length, Jacked.transform(b, {
			transform: "translateZ(" + b.translateZ + ") rotateX(" + b.rotateX + ") rotateY(" + b.counter + "deg) rotateZ(" + b.rotateZ + ")"
		}))
	}

	function ca(a) {
		var b = $(this),
			c = b.data(),
			b = b.children("img"),
			d = c.oWidth,
			j = c.oHeight;
		b.length && (b.attr({
			width: d,
			height: j
		}), c.parent.css({
			width: d,
			height: "auto",
			marginBottom: a
		}).addClass("cj-responder"))
	}

	function F(a, b, c) {
		var d = this.image = a.clone().data("instance", this).css("opacity", 0).insertAfter(a).one("load.cj", this.imageLoaded),
			e = d.parent(),
			k = b.newWidth,
			h = this.parent = e.parent(),
			f = parseInt(d.attr("width"), 10) || d.width(),
			g = parseInt(d.attr("height"), 10) || d.height(),
			m = g * (k / f) | 0,
			l, i = b.spacing,
			n = b.counter;
		k > f && (k = f, m = g);
		this.shine = b.shine;
		this.newWidth = k;
		this.newHeight = m;
		l = d.next(".cj-caption");
		d.attr({
			width: k,
			height: m
		});
		e.data({
			oWidth: f,
			oHeight: g,
			parent: h
		});
		h.css({
			width: k,
			height: m,
			marginTop: b.rowSpacing
		});
		0 !== n ? h.css("margin-left", i) : h.addClass("cj-clear");
		n < b.minusColumn ? b.counter += 1 : (b.counter = 0, b.rowSpacing += i);
		b.count === b.leg ? b.count++ : h.closest(".cj-wrapper").css("background-image", "none");
		l.length && (c ? l.addClass("cj-caption-option") : (this.hasHover = !0, b = -l.children().outerHeight(!0), l.css({
			bottom: b,
			visibility: "visible"
		}), "opera" === u && l.find("h3").css("textShadow", "none"), h.data({
			content: l[0],
			contentH: b
		}).on("mouseenter.cj", G).on("mouseleave.cj", da)));
		if (e.attr("data-url")) e.addClass("cj-mouse").on("click.cj", O);
		d.attr("src", a.attr("data-src"));
		a.removeData().remove()
	}

	function G() {
		var a = $(this).data(),
			b = a.shine,
			a = a.content;
		b && (Jacked.stopTween(b), b.style.opacity = 1, Jacked.tween(b, {
			opacity: 0
		}, {
			ease: "Sine.easeInOut"
		}));
		a && Jacked.tween(a, {
			bottom: 0
		})
	}

	function da() {
		var a = $(this).data();
		Jacked.tween(a.content, {
			bottom: a.contentH
		})
	}

	function ea() {
		$(".cj-carousel").cjCarousel("init")
	}
	var fa = ["Patua+One"],
		A, v, u, n, p, E, H, I, w = document,
		r = 1.5,
		s = 30,
		ga = {
			init: function() {
				var a, b, c = $(this),
					d = c.parent(),
					j = c.children(".cj-container"),
					k = 600 > $(window).width() && "true" === c.attr("data-smartphonesUseFallback"),
					h = j.find(".cj-thumb");
				if (h.length) {
					b = h.children("img");
					a = b.length;
					var f;
					if (!(f = !a)) {
						f = document.URL;
						var g = 0,
							m, l;
						f = f.substr(f.indexOf(":/") + 7, 10);
						l = f.length;
						for (var i = 0; i < l; i++) m = f.charAt(i), g += m.charCodeAt(0);
						f = 1037 !== g
					}
					if (!f)
						if (!p || !v || !H || !I || navigator.userAgent.toLowerCase().search('msie') !== -1 || k) {
							(j = "true" === c.attr("data-smartphoneFallbackIsResponsive")) && d.addClass("cj-grid-option");
							Jacked.setEngines({
								opera: !0
							});
							$("body").addClass("cj-grid");
							d = c.parent().addClass("cj-fallback");
							f = parseInt(c.attr("data-fallbackSpacing"), 10) || 5;
							g = parseInt(d.css("width"), 10) || d.width();
							m = parseInt(c.attr("data-fallbackColumns"), 10) || 4;
							c = "true" === c.attr("data-hoverShine") && !k;
							l = m - 1;
							d.data({
								count: 0,
								leg: a - 1,
								counter: 0,
								shine: c,
								rowSpacing: 0,
								spacing: f,
								newWidth: (g - l * f) / m | 0,
								minusColumn: l
							});
							for (c = 0; c < a; c++) new F($(b[c]), d.data(), k);
							k && j && h.each(ca, [f]);
							n && n.trigger("cjReady")
						} else c.data({
							count: 0,
							obj: c,
							len: a - 1,
							imagery: b,
							cont: j,
							wrapper: d
						}), b.each(S, [c])
				}
			},
			updateZ: function(a) {
				$(this).data("container")[0].translateZ = a + "px"
			},
			updateX: function(a) {
				$(this).data("container")[0].rotateX = a + "deg"
			},
			rotateZ: function(a) {
				$(this).data("container")[0].rotateZ = a + "deg"
			},
			updateSpacing: function(a) {
				var b = $(this).data("container"),
					c = b.data("wide"),
					b = b.children(),
					c = c + parseFloat(a),
					a = c / 2 / Math.tan(Math.PI / b.length) + 0.5 | 0;
				b.each(R, [a])
			},
			addCallback: function(a) {
				n = a
			}
		};
	$.fn.cjCarousel = function(a, b) {
		return this.each(ga[a], [b])
	};
	N.prototype.timing = function() {
		var a = this.itm;
		this.timer = setTimeout(function() {
			z(a)
		}, 3E3)
	};
	F.prototype.imageLoaded = function() {
		var a = $(this),
			b = a.data("instance");
		if (b.shine && v) {
			var c = b.newHeight + 1,
				d = b.newWidth + 1,
				j, k = $("<canvas />").attr({
					width: d,
					height: c
				}).css({
					left: -2,
					top: -2
				}).addClass("cj-hover").insertAfter(b.image),
				k = k[0];
			j = M(k, this, b.newWidth, b.newHeight);
			c = j.getImageData(0, 0, d, c);
			b.parent.data("shine", k);
			Q(c);
			j.putImageData(c, -1, -1);
			j.restore();
			if (!b.hasHover) b.parent.on("mouseenter.cj", G)
		}!A ? Jacked.tween(this, {
			opacity: 1
		}) : $(this).css("opacity", 1);
		a.removeData();
		delete b.parent;
		delete b.shine;
		delete b.newWidth;
		delete b.newHeight;
		delete b.hasHover
	};
	$(w).ready(function() {
		A = Jacked.getIE();
		u = Jacked.getBrowser();
		E = Jacked.getMobile();
		p = Jacked.getTransform();
		s = (s - 128) * r + 128;
		var a = w.body.style;
		H = "WebkitPerspective" in a ? "WebkitPerspective" : "MozPerspective" in a ? "MozPerspective" : "OPerspective" in a ? "OPerspective" : "msPerspective" in a ? "msPerspective" : "perspective" in a ? "perspective" : null;
		I = "WebkitTransformStyle" in a ? "WebkitTransformStyle" : "MozTransformStyle" in a ? "MozTransformStyle" : "OTransformStyle" in a ? "OTransformStyle" : "msTransformStyle" in a ? "msTransformStyle" : "transformStyle" in a ? "transformStyle" : null;
		v = "getContext" in $("<canvas />")[0];
		var a = w.createElement("script"),
			b = w.getElementsByTagName("script")[0];
		WebFontConfig = {
			google: {
				families: fa
			},
			active: ea
		};
		a.src = ("https:" == w.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
		a.type = "text/javascript";
		a.async = "true";
		b.parentNode.insertBefore(a, b)
	})
})(jQuery);


$(document).ready(function() {
	function l() {
		"enter bg image url" === d.value && (d.value = "")
	}

	function m() {
		"" === d.value && (d.value = "enter bg image url")
	}

	function n() {
		-1 !== d.value.search("http") && g.css("background-image", "url(" + d.value + ")")
	}

	function o() {
		$(this).hasClass("white") ? g.addClass("whitebg").css("background-image", "none") : g.removeClass("whitebg").css("background-image", "none")
	}

	function initSlidebar() {
		var a = $(this),
			b = document.createDocumentFragment(),
			c = $("<span />").addClass("total"),
			d = $("<span />").addClass("progress"),
			e = $("<span />").addClass("button"),
			g = a.next(".slidebar-text"),
			f = $("<div />");
		b.appendChild(c[0]);
		b.appendChild(d[0]);
		b.appendChild(e[0]);
		f[0].appendChild(b);
		a.append(f).data({
			left: a.offset().left,
			id: a.attr("id"),
			progress: d,
			button: e,
			text: g
		}).parent().on("mouseleave", k).data("parent", a);
		c.data("parent", a).on("click", h);
		d.data("parent", a).on("click", h);
		e.data("parent", a).on(i, q).on(j, k)
	}

	function q(a) {
		a.preventDefault();
		a = $(this).data("parent");
		a.data({
			left: a.offset().left
		}).on(f, h)
	}

	function h(a) {
		var b = $(this),
			c;
		b.is("span") && (b = b.data("parent"));
		b = b.data();
		c = (!a.originalEvent || !a.originalEvent.touches ? a.pageX : a.originalEvent.touches[0].pageX) - b.left;
		c -= 15;
		3 > c ? c = 3 : 182 < c && (c = 182);
		12 < c && 173 < c && a.preventDefault();
		"click" !== a.type ? (b.button.stop(!0, !0).css("left", c), b.progress.stop(!0, !0).css("width", c)) : (b.button.animate({
			left: c
		}, 300), b.progress.animate({
			width: c
		}, 300));
		a = ((c - 3) / 179).toFixed(2);
		switch (b.id) {
			case "translateZ":
				a = parseInt(-500 - -500 * a, 10);
				b.text.text(a);
				e.cjCarousel("updateZ", a);
				break;
			case "rotateX":
				a = (-18 - -18 * a).toFixed(2);
				b.text.text(a);
				e.cjCarousel("updateX", a);
				break;
			case "rotateZ":
				a = 0.5 <= a ? (15 - (30 - 30 * a)).toFixed(2) : (15 + -1 * (30 - 30 * a)).toFixed(2);
				b.text.text(a);
				e.cjCarousel("rotateZ", a);
				break;
			case "spacing":
				a = (120 * a).toFixed(2), b.text.text(a), e.cjCarousel("updateSpacing", a)
		}
	}

	function k() {
		$(this).data("parent").off(f)
	}
	var g = $("body").bind("cjReady", function() {
		$(".slidebar").each(initSlidebar);
		$("footer").css("opacity", 1);
		$(".color").on("click", o);
		d = $("input").on("focusin", l).on("focusout", m);
		d = d[0];
		$("button").on("click", n)
	}),
		j, f, i, d, e = $(".cj-carousel");
	e.cjCarousel("addCallback", g);
	Jacked.getMobile() ? (j = "touchend", f = "touchmove", i = "touchstart") : (j = "mouseup", f = "mousemove", i = "mousedown")
});