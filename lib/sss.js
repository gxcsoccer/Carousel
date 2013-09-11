(function() {
	function g() {
		I = !1;
		for (Z = t; Z--;) {
			q = h[Z];
			if (!q) break;
			q.isCss || (q.cycle() ? I = !0 : q.stop(!1, q.complete, !1, !0))
		}
		y ? I ? y(g) : (J(g), q = z = null) : I ? A || ($ = setInterval(g, ma)) : (clearInterval($), q = z = null);
		A = I
	}

	function K(a) {
		a.cjFadeIn ? (delete a.cjFadeIn, a.style.opacity = 1, a.style.visibility = "visible") : a.cjFadeOut && (delete a.cjFadeOut, a.style.display = "none")
	}

	function L() {
		A || g()
	}

	function E(a, b, c, d) {
		h.splice(h.indexOf(a), 1);
		t = h.length;
		c && c(b, d)
	}

	function R(a) {
		a.stopPropagation();
		(a = this.cj) && a.stop(a.complete)
	}

	function S(a, b, c) {
		var d = {}, u, b = b.to;
		for (u in b) d[u] = b[u];
		Jacked.tween(a, d, c)
	}

	function T(a, b) {
		return this["webkit" + a + b] || this["moz" + a + b] || this["o" + a + b] || this[a + b] || null
	}

	function U(a) {
		var b;
		if (b = na.exec(a)) return [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16), 1];
		if (b = oa.exec(a)) return [17 * parseInt(b[1], 16), 17 * parseInt(b[2], 16), 17 * parseInt(b[3], 16), 1]
	}

	function M() {
		for (var a in V)
			if (a === F) {
				aa = V[a];
				break
			}
	}

	function f() {
		if ("ontouchend" in document) {
			if (-1 !== r.search("iphone") || -1 !== r.search("ipad")) return "ios";
			if (-1 !== r.search("android") || -1 !== r.search("applewebkit")) return "android";
			if (-1 !== r.search("msie")) return "winMobile"
		}
		return null
	}
	var v = window.getComputedStyle ? document.defaultView.getComputedStyle : null,
		y = T("Request", "AnimationFrame"),
		J = T("Cancel", "AnimationFrame"),
		k = document.createElement("span").style,
		r = navigator.userAgent.toLowerCase(),
		N = "Quint.easeOut",
		O = 500,
		i;
	i = r.search("msie"); - 1 === i ? i = [33.3, 0] : (i = parseInt(r.substr(i + 4, i + 5)), i = [9 <= i ? 16.6 : 33.3, i]);
	var h = [],
		p = "WebkitTransition" in k ? ["webkitTransitionEnd", "-webkit-transition", -1 !== r.search("chrome") ? "chrome" : "safari"] : "MozTransition" in k ? ["transitionend", "-moz-transition", "firefox"] : "OTransition" in k ? ["oTransitionEnd", "-o-transition", "opera"] : "MSTransition" in k ? ["msTransitionEnd", "-ms-transition", "ie"] : "transition" in k ? ["transitionEnd", "transition", null] : null,
		A, P, t = 0,
		ia, F, aa, ba, $, z, I, Z, ca, q, da, W, X, ea, ja, ka, pa = /,/g,
		qa = /[A-Z]/g,
		ra = /{props}/,
		sa = /{easing}/,
		ta = / cj-tween/g,
		ua = /{duration}/,
		va = /^\s+|\s+$/g,
		la = /(right|bottom|center)/,
		oa = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/,
		na = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/,
		V = {
			ios: !1,
			android: !1,
			winMobile: !1,
			firefox: !1,
			chrome: !1,
			safari: !1,
			opera: !1,
			ie: !1
		}, ma = i[0];
	i = i[1];
	var D = 0 !== i && 9 > i;
	if (!y || !J) y = J = null;
	if (p) {
		var Y = p[1],
			fa = document.createElement("style");
		P = "WebkitTransform" in k ? "WebkitTransform" : "MozTransform" in k ? "MozTransform" : "OTransform" in k ? "OTransform" : "msTransform" in k ? "msTransform" : "transform" in k ? "transform" : null;
		W = f();
		fa.type = "text/css";
		fa.innerHTML = ".cj-tween{" + Y + "-property:none !important;}";
		document.getElementsByTagName("head")[0].appendChild(fa);
		ia = Y + "-property:{props};" + Y + "-duration:{duration}s;" + Y + "-timing-function:cubic-bezier({easing});";
		F = !W ? p[2] : W;
		ja = /(chrome|opera)/.test(F);
		ka = "safari" === F || "ios" === F;
		p = p[0];
		M()
	}
	if (D)
		if (8 === i) k = Element, da = /(#|rgb|red|blue|green|black|white|yellow|pink|gray|grey|orange|purple)/, X = /(auto|inherit|rgb|%|#|red|blue|green|black|white|yellow|pink|gray|grey|orange|purple)/, ea = {
			red: "#F00",
			blue: "#00F",
			green: "#0F0",
			black: "#000",
			white: "#FFF",
			yellow: "#FF0",
			pink: "#FFC0CB",
			gray: "#808080",
			grey: "#808080",
			orange: "#FFA500",
			purple: "#800080"
		};
		else return;
		else k = HTMLElement, da = /(#|rgb)/, X = /(auto|inherit|rgb|%|#)/;
	k.prototype.jacked = function(a, b) {
		Jacked.tween(this, a, b)
	};
	k.prototype.fadeInJacked = function(a) {
		Jacked.fadeIn(this, a)
	};
	k.prototype.fadeOutJacked = function(a) {
		Jacked.fadeOut(this, a)
	};
	k.prototype.transformJacked = function(a, b, c) {
		Jacked.transform(this, a, b, c)
	};
	k.prototype.percentageJacked = function(a, b) {
		Jacked.percentage(this, a, b)
	};
	k.prototype.stopJacked = function(a, b) {
		Jacked.stopTween(this, a, b)
	};
	Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
		for (var b = this.length; b--;)
			if (this[b] === a) return b;
		return -1
	});
	Date.now || (Date.now = function() {
		return +new Date
	});
	this.Jacked = {
		ready: function(a) {
			window.onload = a
		},
		setEngines: function(a) {
			for (var b in a) V.hasOwnProperty(b) && (V[b] = a[b]);
			M()
		},
		tween: function(a, b, c) {
			a.cj && a.cj.stop();
			c || (c = {});
			c.mode ? c.mode === "timeline" || !p ? new CJ(a, b, c) : new CJcss(a, b, c) : !p || !aa ? new CJ(a, b, c) : new CJcss(a, b, c)
		},
		fadeIn: function(a, b) {
			b || (b = {});
			b.fadeIn = true;
			Jacked.tween(a, {
				opacity: 1
			}, b)
		},
		fadeOut: function(a, b) {
			b || (b = {});
			b.fadeOut = true;
			Jacked.tween(a, {
				opacity: 0
			}, b)
		},
		percentage: function(a, b, c) {
			a.cj && a.cj.stop();
			if ("from" in b && "to" in b) {
				c || (c = {});
				var d = c.mode;
				d ? d === "css3" && p ? S(a, b, c) : new CJpercentage(a, b, c) : p && aa ? S(a, b, c) : new CJpercentage(a, b, c)
			}
		},
		special: function(a, b) {
			a.cj && a.cj.stop();
			new CJspecial(a, b)
		},
		transform: function(a, b, c, d) {
			a.cj && a.cj.stop();
			if (p && P) {
				c || (c = {});
				c.mode = "css3";
				if ("transform" in b) {
					b[P] = b.transform;
					delete b.transform
				}
				new Jacked.tween(a, b, c)
			} else d && new Jacked.tween(a, d, c)
		},
		stopTween: function(a, b, c) {
			(a = a.cj) && (a.isCSS ? a.stop(c) : a.stop(b, c))
		},
		stopAll: function(a) {
			J ? J(g) : clearInterval($);
			var b = h.length,
				c;
			for (t = 0; b--;) {
				c = h[b];
				c.isCSS ? c.stop(false, true) : c.stop(a, false, true, true)
			}
			h = [];
			A = false;
			z = null
		},
		setEase: function(a) {
			var b = a.toLowerCase().split(".");
			b.length < 2 || Q[b[0]] && Q[b[0]][b[1]] && (N = a)
		},
		setDuration: function(a) {
			isNaN(a) || (O = a)
		},
		getMobile: function() {
			return W
		},
		getIE: function() {
			return D
		},
		getBrowser: function() {
			return F
		},
		getEngine: function() {
			return A
		},
		getTransform: function() {
			return P
		}
	};
	this.CJ = function(a, b, c) {
		t = h.length;
		var d = a.cj = h[t++] = this;
		this.runner = function(u) {
			d.obj = a;
			d.complete = c.callback;
			d.completeParams = c.callbackParams;
			if (u === true) d.transitions = [];
			else {
				var o, u = 0,
					l = [],
					e = a.style;
				duration = c.duration || O;
				easing = (c.ease || N).toLowerCase().split(".");
				easing = Q[easing[0]][easing[1]];
				e.visibility = "visible";
				if (c.fadeIn) {
					e.display = c.display || "block";
					e.opacity = 0
				}
				if (D && "opacity" in b) e.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + (c.fadeIn ? 0 : 100) + ")";
				if (b.borderColor && !ja) {
					e = b.borderColor;
					b.borderTopColor = e;
					b.borderRightColor = e;
					b.borderBottomColor = e;
					b.borderLeftColor = e;
					delete b.borderColor
				}
				for (o in b) o !== "backgroundPosition" ? l[u++] = d.animate(a, o, b[o], duration, easing) : l[u++] = d.bgPosition(a, o, b[o], duration, easing);
				d.transitions = l;
				A ? setTimeout(L, 10) : g()
			}
		};
		if (c.fadeOut) a.cjFadeOut = true;
		else if (c.fadeIn) a.cjFadeIn = true;
		if (c.duration === 0) {
			this.runner(true);
			this.stop()
		} else c.delay ? this.delayed = setTimeout(this.runner, c.delay) : this.runner()
	};
	CJ.prototype.cycle = function() {
		z = this.transitions;
		if (!z) return true;
		ca = z.length;
		for (ba = false; ca--;) z[ca]() && (ba = true);
		return ba
	};
	CJ.prototype.animate = function(a, b, c, d, u) {
		function o() {
			p = Date.now();
			G = G + (p - g);
			e = u(G, i, k, d);
			g = p;
			e = !m || D ? n ? e + 0.5 | 0 : e - 0.5 | 0 : e.toFixed(2);
			if (e === h) return true;
			if (n) {
				if (e >= c) {
					f[b] = s;
					return false
				}
			} else if (e <= c) {
				f[b] = s;
				return false
			}
			h = e;
			f[b] = e + H;
			return true
		}

		function l() {
			return false
		}
		var e, f, ha, m = b === "opacity",
			j = true;
		if (!m || !D) {
			f = a.style;
			ha = f[b];
			e = ha !== "" ? ha : v ? v(a, null)[b] : a.currentStyle[b]
		} else {
			f = a.filters.item("DXImageTransform.Microsoft.Alpha");
			b = "Opacity";
			e = f[b];
			c = c * 100
		} if (X.test(e))
			if (da.test(e)) {
				if (c.search("rgb") === -1) {
					D && e in ea && (e = ea[e]);
					return this.color(a, b, e, c, d, u)
				}
				j = false
			} else e = 0;
			else e = parseFloat(e);
		var H = !m ? "px" : 0,
			k = c - e,
			n = e < c,
			g = Date.now(),
			i = e,
			G = 0,
			s, h, p;
		s = c + H;
		!m || D ? n ? c = c - 0.25 : c = c + 0.25 : n ? c = c - 0.025 : c = c + 0.025;
		if (j) {
			o.stored = [b, s];
			return o
		}
		l.stored = [b, s];
		return l
	};
	CJ.prototype.color = function(a, b, c, d, u, f) {
		function l() {
			v = Date.now();
			g = g + (v - k);
			k = v;
			c = f(g, 0, 1, u);
			if (c < 0.99) {
				n = -1;
				for (i = "rgb("; ++n < 3;) {
					h = j[n];
					i = i + (h + c * (H[n] - h) | 0);
					n < 2 && (i = i + ",")
				}
				m[b] = i + ")";
				return true
			}
			m[b] = ga;
			return false
		}

		function e() {
			return false
		}
		var ga = (d.search("#") !== -1 ? "" : "#") + d,
			k = Date.now(),
			m = a.style,
			a = false,
			j = [],
			H = [],
			g = 0,
			n = -1,
			v, h, i;
		if (c.search("rgb") !== -1) {
			n = -1;
			for (j = c.split("(")[1].split(")")[0].split(","); ++n < 3;) j[n] = parseInt(j[n])
		} else j = U(c);
		H = U(d);
		for (n = -1; ++n < 3;) j[n] !== H[n] && (a = true);
		if (a) {
			l.stored = [b, ga];
			return l
		}
		e.stored = [b, ga];
		return e
	};
	CJ.prototype.bgPosition = function(a, b, c, d, f) {
		function o() {
			z = Date.now();
			i = i + (z - k);
			k = z;
			r = f(i, 0, 1, d);
			if (r < 0.99) {
				s && (B = w + y * r + 0.5 | 0);
				q && (C = x + A * r + 0.5 | 0);
				if (B === t && C === G) return true;
				t = B;
				G = C;
				if (j) {
					e.backgroundPositionX = B + "px";
					e.backgroundPositionY = C + "px"
				} else e.backgroundPosition = B + "px " + C + "px";
				return true
			}
			if (j) {
				e.backgroundPositionX = h;
				e.backgroundPositionY = n
			} else e[b] = p;
			return false
		}

		function l() {
			return false
		}
		var e = a.style,
			g = e[b],
			k = Date.now(),
			m = true,
			j = D,
			i = 0,
			h, n, p, t, G, s, q, y, A, r, z, B, C, w, x;
		if (j) {
			w = a.currentStyle.backgroundPositionX;
			x = a.currentStyle.backgroundPositionY;
			if (la.test(w) || la.test(x)) m = false;
			w === "left" && (w = 0);
			x === "top" && (x = 0)
		} else {
			r = g !== "" ? g.split(" ") : v(a, null).backgroundPosition.split(" ");
			w = r[0];
			x = r[1]
		}
		w.search("%") !== -1 && w !== "0%" && (m = false);
		x.search("%") !== -1 && x !== "0%" && (m = false);
		w = parseInt(w);
		x = parseInt(x);
		if (c.hasOwnProperty("x")) {
			B = c.x;
			s = true
		} else {
			B = w;
			s = false
		} if (c.hasOwnProperty("y")) {
			C = c.y;
			q = true
		} else {
			C = x;
			q = false
		}
		s = s && w !== B;
		q = q && x !== C;
		!s && !q && (m = false);
		y = B - w;
		A = C - x;
		h = B + "px";
		n = C + "px";
		p = !j ? h + " " + n : [h, n];
		if (m) {
			o.stored = [b, p];
			return o
		}
		l.stored = [b, p];
		return l
	};
	CJ.prototype.stop = function(a, b, c) {
		var d = this.obj;
		if (d) {
			delete d.cj;
			if (a)
				for (var a = this.transitions, f = a.length, o, l; f--;) {
					o = a[f].stored;
					l = o[0];
					if (D) switch (l) {
						case "Opacity":
							d.filters.item("DXImageTransform.Microsoft.Alpha").Opacity = o[1] * 100;
							break;
						case "backgroundPosition":
							l = d.style;
							l.backgroundPositionX = o[1][0];
							l.backgroundPositionY = o[1][1];
							break;
						default:
							d.style[l] = o[1]
					} else d.style[l] = o[1]
				}
			K(d);
			if (b) b = this.complete;
			c || E(this, d, b, this.completeParams)
		} else {
			clearTimeout(this.delayed);
			this.runner(true);
			this.stop(a, b)
		}
	};
	this.CJcss = function(a, b, c) {
		t = h.length;
		var d = a.cj = h[t++] = this,
			f = a.style,
			o = P in b;
		this.isCss = true;
		this.storage = a;
		this.complete = c.callback;
		this.completeParams = c.callbackParams;
		this.runner = function() {
			if (c.cssStep) {
				f.visibility = "visible";
				d.stepped = setTimeout(d.step, 30)
			} else d.step()
		};
		this.step = function(l) {
			d.obj = a;
			if (l === true) d.moves = "";
			else {
				var e, i, g, m, j, k = 0,
					h;
				h = [];
				var n = [],
					l = a.getAttribute("style") || "",
					r = c.duration || O,
					q = (c.ease || N).toLowerCase().split(".");
				for (i in b) {
					g = i;
					if (j = g.match(qa))
						for (e = j.length; e--;) {
							m = j[e];
							g = g.replace(RegExp(m, "g"), "-" + m.toLowerCase())
						}
					m = e = b[i];
					j = i === "backgroundPosition";
					if (!X.test(m) && i !== "opacity" && !j && !o) m = m + "px;";
					else if (j) {
						m = e.x;
						e = e.y;
						j = isNaN(m);
						var t = isNaN(e);
						if (!j && !t) {
							m = m + "px";
							e = e + "px"
						} else {
							var s = f.backgroundPosition,
								s = s !== "" ? s.split(" ") : v(a, null).backgroundPosition.split(" ");
							!j ? m = m + "px" : m = s[0];
							!t ? e = e + "px" : e = s[1]
						}
						m = m + " " + e + ";"
					} else m = m + ";";
					h[k] = g + ":" + m;
					n[k++] = g;
					if (l) {
						j = l.search(g);
						if (j !== -1) {
							total = l.length - 1;
							for (e = j - 1; ++e < total;)
								if (l[e] === ";") break;
							l = l.split(l.substring(j, e + 1)).join("")
						}
					}
				}
				d.moves = i = ia.replace(ra, n.toString()).replace(ua, (r * 0.001).toFixed(2)).replace(sa, wa[q[0]][q[1]]);
				h = h.toString();
				o || (h = h.replace(pa, ""));
				a.className = a.className.replace(ta, "");
				a.addEventListener(p, R, false);
				a.setAttribute("style", l.replace(va, "") + i + h)
			}
		};
		if (c.fadeIn) {
			a.cjFadeIn = true;
			f.display = c.display || "block";
			f.opacity = 0
		} else if (c.fadeOut) a.cjFadeOut = true;
		if (c.duration === 0) {
			this.runner(true);
			this.stop()
		} else {
			if (!c.cssStep) f.visibility = "visible";
			if (ka && !o) {
				f.webkitTransform = "translate3d(0, 0, 0)";
				f.webkitBackfaceVisibility = "hidden";
				f.webkitPerspective = 1E3
			}
			this.delayed = c.delay ? setTimeout(this.runner, c.delay > 30 ? c.delay : 30) : setTimeout(this.runner, 30)
		}
	};
	CJcss.prototype.stop = function(a, b) {
		var c = this.obj;
		if (a) a = this.complete;
		if (c) {
			delete c.cj;
			c.removeEventListener(p, R, false);
			c.className = c.className + " cj-tween";
			c.setAttribute("style", c.getAttribute("style").split(this.moves).join(";").split(";;").join(";"));
			K(c)
		} else {
			clearTimeout(this.delayed);
			clearTimeout(this.stepped);
			K(this.storage)
		}
		b || E(this, c, a, this.completeParams)
	};
	this.CJpercentage = function(a, b, c) {
		t = h.length;
		var d = a.cj = h[t++] = this;
		this.obj = a;
		this.complete = c.callback;
		this.completeParams = c.callbackParams;
		this.runner = function() {
			var f = 0,
				i = [],
				l, e, h, k = b.to,
				m = b.from,
				j = c.duration || O,
				v = (c.ease || N).toLowerCase().split("."),
				v = Q[v[0]][v[1]];
			for (l in m) {
				h = parseInt(k[l], 10);
				e = parseInt(m[l], 10);
				i[f++] = [h > e, l, h, e]
			}
			a.style.visibility = "visible";
			d.transitions = d.animate(a, i, j, v);
			A ? setTimeout(L, 10) : g()
		};
		c.duration === 0 ? this.stop() : c.delay ? this.delayed = setTimeout(this.runner, c.delay) : this.runner()
	};
	CJpercentage.prototype.cycle = function() {
		return this.transitions()
	};
	CJpercentage.prototype.animate = function(a, b, c, d) {
		var f, i = 0,
			l = Date.now(),
			e, h, g = a.style,
			m = b.length,
			j, k;
		return function(a) {
			e = Date.now();
			i = i + (e - l);
			l = e;
			f = d(i, 0, 1, c);
			h = m;
			if (f < 0.99 && !a) {
				for (; h--;) {
					j = b[h];
					k = j[3];
					g[j[1]] = j[0] ? k + (j[2] - k) * f + "%" : k - (k - j[2]) * f + "%"
				}
				return true
			}
			for (; h--;) {
				j = b[h];
				g[j[1]] = j[2] + "%"
			}
			return false
		}
	};
	CJpercentage.prototype.stop = function(a, b, c) {
		"delayed" in this && clearTimeout(this.delayed);
		var d = this.obj;
		delete d.cj;
		a && this.transitions && this.transitions(true);
		if (b) b = this.complete;
		c || E(this, d, b, this.completeParams)
	};
	this.CJspecial = function(a, b) {
		if (b && b.callback) {
			t = h.length;
			h[t++] = a.cj = this;
			var c = this.complete = b.callback,
				d = b.ease || N,
				d = d.toLowerCase().split("."),
				d = Q[d[0]][d[1]];
			this.obj = a;
			this.transitions = this.numbers(a, b.duration || O, d, c);
			A ? setTimeout(L, 10) : g()
		}
	};
	CJspecial.prototype.cycle = function() {
		return this.transitions()
	};
	CJspecial.prototype.numbers = function(a, b, c, d) {
		var f, h = 0,
			i = Date.now(),
			e;
		return function() {
			e = Date.now();
			h = h + (e - i);
			i = e;
			f = c(h, 0, 1, b);
			if (f < 0.99) {
				d(a, f);
				return true
			}
			return false
		}
	};
	CJspecial.prototype.stop = function(a, b, c, d) {
		var f = this.obj;
		if (f) {
			delete f.cj;
			c || E(this);
			(a || d) && this.complete(f, 1, b)
		}
	};
	var Q = {
		linear: {
			easenone: function(a, b, c, d) {
				return c * a / d + b
			},
			easein: function(a, b, c, d) {
				return c * a / d + b
			},
			easeout: function(a, b, c, d) {
				return c * a / d + b
			},
			easeinout: function(a, b, c, d) {
				return c * a / d + b
			}
		},
		quint: {
			easeout: function(a, b, c, d) {
				return c * ((a = a / d - 1) * a * a * a * a + 1) + b
			},
			easein: function(a, b, c, d) {
				return c * (a = a / d) * a * a * a * a + b
			},
			easeinout: function(a, b, c, d) {
				return (a = a / (d / 2)) < 1 ? c / 2 * a * a * a * a * a + b : c / 2 * ((a = a - 2) * a * a * a * a + 2) + b
			}
		},
		quad: {
			easein: function(a, b, c, d) {
				return c * (a = a / d) * a + b
			},
			easeout: function(a, b, c, d) {
				return -c * (a = a / d) * (a - 2) + b
			},
			easeinout: function(a, b, c, d) {
				return (a = a / (d / 2)) < 1 ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b
			}
		},
		quart: {
			easein: function(a, b, c, d) {
				return c * (a = a / d) * a * a * a + b
			},
			easeout: function(a, b, c, d) {
				return -c * ((a = a / d - 1) * a * a * a - 1) + b
			},
			easeinout: function(a, b, c, d) {
				return (a = a / (d / 2)) < 1 ? c / 2 * a * a * a * a + b : -c / 2 * ((a = a - 2) * a * a * a - 2) + b
			}
		},
		cubic: {
			easein: function(a, b, c, d) {
				return c * (a = a / d) * a * a + b
			},
			easeout: function(a, b, c, d) {
				return c * ((a = a / d - 1) * a * a + 1) + b
			},
			easeinout: function(a, b, c, d) {
				return (a = a / (d / 2)) < 1 ? c / 2 * a * a * a + b : c / 2 * ((a = a - 2) * a * a + 2) + b
			}
		},
		circ: {
			easein: function(a, b, c, d) {
				return -c * (Math.sqrt(1 - (a = a / d) * a) - 1) + b
			},
			easeout: function(a, b, c, d) {
				return c * Math.sqrt(1 - (a = a / d - 1) * a) + b
			},
			easeinout: function(a, b, c, d) {
				return (a = a / (d / 2)) < 1 ? -c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a = a - 2) * a) + 1) + b
			}
		},
		sine: {
			easein: function(a, b, c, d) {
				return -c * Math.cos(a / d * (Math.PI / 2)) + c + b
			},
			easeout: function(a, b, c, d) {
				return c * Math.sin(a / d * (Math.PI / 2)) + b
			},
			easeinout: function(a, b, c, d) {
				return -c / 2 * (Math.cos(Math.PI * a / d) - 1) + b
			}
		},
		expo: {
			easein: function(a, b, c, d) {
				return a === 0 ? b : c * Math.pow(2, 10 * (a / d - 1)) + b
			},
			easeout: function(a, b, c, d) {
				return a === d ? b + c : c * (-Math.pow(2, -10 * a / d) + 1) + b
			},
			easeinout: function(a, b, c, d) {
				return a === 0 ? b : a === d ? b + c : (a = a / (d / 2)) < 1 ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b
			}
		}
	}, wa = {
			linear: {
				easenone: "0.250, 0.250, 0.750, 0.750",
				easein: "0.420, 0.000, 1.000, 1.000",
				easeout: "0.000, 0.000, 0.580, 1.000",
				easeinout: "0.420, 0.000, 0.580, 1.000"
			},
			quint: {
				easein: "0.755, 0.050, 0.855, 0.060",
				easeout: "0.230, 1.000, 0.320, 1.000",
				easeinout: "0.860, 0.000, 0.070, 1.000"
			},
			quad: {
				easein: "0.550, 0.085, 0.680, 0.530",
				easeout: "0.250, 0.460, 0.450, 0.940",
				easeinout: "0.455, 0.030, 0.515, 0.955"
			},
			quart: {
				easein: "0.895, 0.030, 0.685, 0.220",
				easeout: "0.165, 0.840, 0.440, 1.000",
				easeinout: "0.770, 0.000, 0.175, 1.000"
			},
			cubic: {
				easein: "0.550, 0.055, 0.675, 0.190",
				easeout: "0.215, 0.610, 0.355, 1.000",
				easeinout: "0.645, 0.045, 0.355, 1.000"
			},
			circ: {
				easein: "0.600, 0.040, 0.980, 0.335",
				easeout: "0.075, 0.820, 0.165, 1.000",
				easeinout: "0.785, 0.135, 0.150, 0.860"
			},
			sine: {
				easein: "0.470, 0.000, 0.745, 0.715",
				easeout: "0.390, 0.575, 0.565, 1.000",
				easeinout: "0.445, 0.050, 0.550, 0.950"
			},
			expo: {
				easein: "0.950, 0.050, 0.795, 0.035",
				easeout: "0.190, 1.000, 0.220, 1.000",
				easeinout: "1.000, 0.000, 0.000, 1.000"
			}
		}, k = i = k = null
})(window);
"undefined" !== typeof jQuery && function(g) {
	function K(f, g) {
		Jacked.tween(this, f, g)
	}

	function L(f) {
		Jacked.fadeIn(this, f)
	}

	function E(f) {
		Jacked.fadeOut(this, f)
	}

	function R(f, g, y) {
		Jacked.transform(this, f, g, y)
	}

	function S(f, g) {
		Jacked.percentage(this, f, g)
	}

	function T(f, g) {
		Jacked.stopTween(this, f, g)
	}

	function U(f) {
		g(this).children().each(M, [f])
	}

	function M(f) {
		Jacked.stopTween(this, f);
		g(this).children().each(M, [f])
	}
	g.fn.jacked = function(f, g) {
		return this.each(K, [f, g])
	};
	g.fn.fadeInJacked = function(f) {
		return this.each(L, [f])
	};
	g.fn.fadeOutJacked = function(f) {
		return this.each(E, [f])
	};
	g.fn.transformJacked = function(f, g, y) {
		return this.each(R, [f, g, y])
	};
	g.fn.percentageJacked = function(f, g) {
		return this.each(S, [f, g])
	};
	g.fn.stopJacked = function(f, g) {
		return this.each(T, [f, g])
	};
	g.fn.stopJackedSet = function(f) {
		return this.each(U, [f])
	}
}(jQuery);
(function(e) {
	function N(a) {
		this.itm = a
	}

	function R(a) {
		this.style[p] = this.style[p].split("translateZ")[0] + "translateZ(" + a + "px)"
	}

	function S(a) {
		var b = e(this),
			a = e("<img />").attr({
				width: b.attr("width"),
				height: b.attr("height")
			}).data("parent", a).one("load.cj", T).insertAfter(b);
		b.remove();
		a.attr("src", b.attr("data-src"))
	}

	function T(a) {
		a.stopPropagation();
		var a = e(this).data("parent"),
			b = a.data();
		if (b.count < b.len) b.count++;
		else {
			var c = b.cont,
				d = c.children(),
				j = b.len + 1,
				k = 360 / j,
				h, f, g, m, l, i, B, t, n, s, x, r, u, v, J = 0;
			f = 0;
			var o = e(b.imagery[0]),
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
				if (h = d[L], h.style[p] = "rotateY(" + J + "deg) translateZ(" + K + "px)", J += k, t = e(h).removeData().css("width", o + 3), h = t.children(".cj-thumb"), h.length) {
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
					B = e("<canvas />").attr({
						width: y,
						height: D
					}).appendTo(m);
					g = B[0];
					i.remove();
					i = M(g, f, o, q);
					i.restore();
					if (H && !E && (g = B.clone().addClass("cj-hover").appendTo(m), g = g[0], i = M(g, f, o, q), v = i.getImageData(0, 0, y, D), Q(v), i.putImageData(v, 0, 0), i.restore(), h.data("shine", g), r)) h.on("mouseenter.cj", P);
					g = e("<div />").addClass("cj-absolute").appendTo(h);
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
		var d = e(a).data();
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
		a = e(this);
		"_blank" !== a.attr("data-target") ? window.location = a.attr("data-url") : window.open(a.attr("data-url"))
	}

	function P() {
		var a = e(this).data(),
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
		var a = e(this).data(),
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
		var a = e(this),
			b = a.data(),
			c = b.container;
		c.data("auto") || z(c[0], !1, !0);
		b.offsetX = a.on("mousemove.cj", $).offset().left
	}

	function $(a) {
		var b = e(this),
			c = b.data("container"),
			d = c.data(),
			j = d.halfWidth,
			a = a.pageX - b.data("offsetX"),
			c = c[0];
		a < j ? (c.speed = -((j - a) * d.threshold), c.direction = 0) : (c.speed = (a - j) * d.threshold, c.direction = 1)
	}

	function Z() {
		var a = e(this).off("mousemove.cj").data("container");
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
		var b = e(this),
			c = b.data("container"),
			d = c.data(),
			c = c[0];
		clearTimeout(c.timed.timer);
		Jacked.stopTween(c);
		d.prevX = d.pageX = !a.originalEvent.touches ? a.pageX : a.originalEvent.touches[0].pageX;
		b.on("touchmove.cj", ba)
	}

	function ba(a) {
		var b = e(this).data("container"),
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
		var b = e(this).off("touchmove.cj").data("container"),
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
		var b = e(this),
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
		var a = e(this).data(),
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
		var a = e(this).data();
		Jacked.tween(a.content, {
			bottom: a.contentH
		})
	}

	function ea() {
		e(".cj-carousel").cjCarousel("init")
	}
	var fa = ["Patua+One"],
		A, v, u, n, p, E, H, I, w = document,
		r = 1.5,
		s = 30,
		ga = {
			init: function() {
				var a, b, c = e(this),
					d = c.parent(),
					j = c.children(".cj-container"),
					k = 600 > e(window).width() && "true" === c.attr("data-smartphonesUseFallback"),
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
							e("body").addClass("cj-grid");
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
							for (c = 0; c < a; c++) new F(e(b[c]), d.data(), k);
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
				e(this).data("container")[0].translateZ = a + "px"
			},
			updateX: function(a) {
				e(this).data("container")[0].rotateX = a + "deg"
			},
			rotateZ: function(a) {
				e(this).data("container")[0].rotateZ = a + "deg"
			},
			updateSpacing: function(a) {
				var b = e(this).data("container"),
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
	e.fn.cjCarousel = function(a, b) {
		return this.each(ga[a], [b])
	};
	N.prototype.timing = function() {
		var a = this.itm;
		this.timer = setTimeout(function() {
			z(a)
		}, 3E3)
	};
	F.prototype.imageLoaded = function() {
		var a = e(this),
			b = a.data("instance");
		if (b.shine && v) {
			var c = b.newHeight + 1,
				d = b.newWidth + 1,
				j, k = e("<canvas />").attr({
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
		}) : e(this).css("opacity", 1);
		a.removeData();
		delete b.parent;
		delete b.shine;
		delete b.newWidth;
		delete b.newHeight;
		delete b.hasHover
	};
	e(w).ready(function() {
		A = Jacked.getIE();
		u = Jacked.getBrowser();
		E = Jacked.getMobile();
		p = Jacked.getTransform();
		s = (s - 128) * r + 128;
		var a = w.body.style;
		H = "WebkitPerspective" in a ? "WebkitPerspective" : "MozPerspective" in a ? "MozPerspective" : "OPerspective" in a ? "OPerspective" : "msPerspective" in a ? "msPerspective" : "perspective" in a ? "perspective" : null;
		I = "WebkitTransformStyle" in a ? "WebkitTransformStyle" : "MozTransformStyle" in a ? "MozTransformStyle" : "OTransformStyle" in a ? "OTransformStyle" : "msTransformStyle" in a ? "msTransformStyle" : "transformStyle" in a ? "transformStyle" : null;
		v = "getContext" in e("<canvas />")[0];
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

	function p() {
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
		$(".slidebar").each(p);
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