(function($) {
	var pre = '-webkit-transition',
		transformProp = 'WebkitTransform',
		accelerate = true,
		skeleton = pre + "-property:{props};" + pre + "-duration:{duration}s;" + pre + "-timing-function:cubic-bezier({easing});";

	// Regular Expression
	var trim = /^\s+|\s+$/g;

	var sheet = document.createElement("style");
	sheet.type = "text/css";
	sheet.innerHTML = ".cj-tween{" + pre + "-property:none !important;}";
	document.getElementsByTagName("head")[0].appendChild(sheet);


	$.fn.transit = function(to, speed, easing) {
		var element = this.get(0);

		if (element.isTransiting) {
			this.stopTransit();
		}

		this.removeClass('cj-tween');
		element.isTransiting = true;
		element.addEventListener('webkitTransitionEnd', cssEnded, false);

		var values = [],
			key;

		for (key in to) {
			if (!to.hasOwnProperty(key)) continue;

			str = key;
			finder = str.match(reg);

			if (finder) {
				j = finder.length;
				while (j--) {
					cur = finder[j];
					str = str.replace(new RegExp(cur, "g"), "-" + cur.toLowerCase());
				}
			}

			cur = orig = to[key];
			bgPos = key === "backgroundPosition";

			if (!gotcha.test(cur) && key !== "opacity" && key.search(transformProp) === -1 && !bgPos) {
				cur += "px;";
			} else if (!bgPos) {
				cur += ";";
			} else {
				var x = orig.x,
					y = orig.y,
					isX = isNaN(x),
					isY = isNaN(y);

				if (!isX && !isY) {
					x += "px";
					y += "px";
				} else {
					var val = style.backgroundPosition,
						tick = (val !== "") ? val.split(" ") : compute(obj, null).backgroundPosition.split(" ");

					(!isX) ? x += "px" : x = tick[0];
					(!isY) ? y += "px" : y = tick[1];
				}

				cur = x + " " + y + ";";
			}

			values[i] = str + ":" + cur;
			tweens[i++] = str;

			if (!current) continue;
			finder = current.search(str);

			if (finder !== -1) {
				total = current.length - 1;
				j = finder - 1;

				while (++j < total) {
					if (current[j] === ";") break;
				}

				current = current.split(current.substring(finder, j + 1)).join("");
			}
		}

		$this.moves = moving = skeleton.replace(regP, tweens.toString()).replace(regD, (duration * 0.001).toFixed(2)).replace(regE, CeaserEasing[easing[0]][easing[1]]);

		replaced = values.toString();
		replaced = replaced.replace(comma, "");

		obj.className = obj.className.replace(regT, "");
		obj.addEventListener(css, cssEnded, false);
		obj.setAttribute("style", current.replace(trim, "") + moving + replaced);
	};

	$.fn.stopTransit = function() {
		var element = this.get(0);
		this.addClass('cj-tween');
		element.isTransiting = false;
		element.removeEventListener('webkitTransitionEnd', cssEnded, false);
	};

	function cssEnded(event) {
		event.stopPropagation();
		this.isTransiting = false;
		this.addEventListener('webkitTransitionEnd', cssEnded, false);
	}

})(JQuery)