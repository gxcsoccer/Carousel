(function($) {
	var pre = '-webkit-transition',
		accelerate = true,
		defaultDuration = 500,
		defaultEase = "Quint.easeOut",
		skeleton = pre + "-property:{props};" + pre + "-duration:{duration}s;" + pre + "-timing-function:cubic-bezier({easing});";

	// Regular Expression
	var trim = /^\s+|\s+$/g,
		reg = /[A-Z]/g,
		regP = new RegExp("{props}"),
		regE = new RegExp("{easing}"),
		regD = new RegExp("{duration}"),
		regTransit = /(-webkit-|)transtion:.*?;/g;

	var sheet = document.createElement("style");
	sheet.type = "text/css";
	sheet.innerHTML = ".ui-no-transition {" + pre + "-property:none !important;}";
	document.getElementsByTagName("head")[0].appendChild(sheet);

	// credit: http://matthewlein.com/ceaser/
	var CeaserEasing = {
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
	};

	/**
	 * Using css3 transition
	 */
	$.fn.transit = function(to, duration, easing) {
		duration = duration || defaultDuration;
		easing = easing || defaultEase;
		if (!Array.isArray(easing)) {
			easing = easing.toLowerCase().split(".");
		}

		var element = this.get(0),
			values = [],
			tweens = [],
			moves, replaced, key, cssProperty, cssValue, type, current, finder, total, i;

		if (element.moves) {
			this.stopTransit();
			element.offsetLeft;
		}

		current = element.getAttribute('style') || '';

		for (key in to) {
			if (!to.hasOwnProperty(key)) continue;

			cssProperty = normalize(key);
			cssValue = to[key];
			type = typeof cssValue;

			if (type === 'number' && !$.cssNumber[$.camelCase(key)]) {
				cur += 'px;';
			} else {
				cur += ';';
			}

			values.push(cssProperty + ':' + cssValue);
			tweens.push(cssProperty);

			if (!current) continue;

			finder = current.search(cssProperty + ':');
			if (finder !== -1) {
				total = current.length - 1;
				i = finder - 1;

				while (++i < total) {
					if (current[i] === ";") break;
				}

				current = current.split(current.substring(finder, i + 1)).join("");
			}
		}

		element.moves = moves = skeleton.replace(regP, tweens.toString()).replace(regD, (duration * 0.001).toFixed(2)).replace(regE, CeaserEasing[easing[0]][easing[1]]);
		replaced = values.join('');

		this.removeClass('ui-no-transition');
		element.addEventListener('webkitTransitionEnd', cssEnded, false);
		element.setAttribute("style", current.replace(trim, "") + moves + replaced);
	};

	/**
	 * Stop the css3 transtion
	 */
	$.fn.stopTransit = function() {
		var element = this.get(0),
			style = element.getAttribute("style").split(element.moves).join(";").split(";;").join(";").replace(regTransit, '');
		this.addClass('ui-no-transition');
		element.removeEventListener('webkitTransitionEnd', cssEnded, false);
		element.setAttribute("style", style);
		element.moves = null;
	};

	function cssEnded(event) {
		event.stopPropagation();
		var style = this.getAttribute("style").split(this.moves).join(";").split(";;").join(";").replace(regTransit, '');
		this.removeEventListener('webkitTransitionEnd', cssEnded, false);
		this.setAttribute("style", style);
		this.moves = null;
	}

	// Helper
	// ------------

	function normalize(cssProperty) {
		var finder = cssProperty.match(reg),
			i, cur;

		if (finder) {
			i = finder.length;
			while (i--) {
				cur = finder[i];
				cssProperty = cssProperty.replace(new RegExp(cur, "g"), "-" + cur.toLowerCase());
			}
		}
		return cssProperty;
	}

})(jQuery)