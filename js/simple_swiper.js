(function(e, fn) {
	"use strict";
	if (e.__proto__ === undefined) {
		e.SimSwiper = fn;
		return SimSwiper
	} else {
		if (typeof module !== 'undefined') {
			module.exports = fn
		} else {
			e.__proto__.SimSwiper = fn
		}
	}
})(this, (function() {
	"use strict";
	var con = null,
		data = null,
		g_conf = null,
		slider = null,
		page = null,
		duration = null,
		easing = null;

	function init(el, conf) {
		if (arguments.length !== 2) {
			el = ".simple-swiper-container"
		} else {
			g_conf = conf
		}
		duration = conf.duration || 300;
		easing = conf.easing || 'ease';
		con = document.querySelector(el);
		data = conf.data;
		var f = data[0];
		data.push(f);
		f = null;
		setLayout(con)
	}

	function setLayout(el) {
		var frag = document.createDocumentFragment();
		var wrap = document.createElement("div");
		frag.appendChild(wrap);
		wrap.setAttribute("class", "swiper-wrapper");
		wrap.style.overflow = 'hidden';
		slider = document.createElement("div");
		slider.setAttribute("class", "swiper-slider");
		frag = document.createDocumentFragment();
		var pa = document.querySelector("#" + el.id + ">" + g_conf['pagination'].el);
		var p_frag = document.createDocumentFragment();
		if (!g_conf.lazy) {
			data.forEach(function(item) {
				var slide = document.createElement("div");
				slide.setAttribute("class", "swiper-items");
				setStyle(slide, "float", "left");
				setStyle(slide, "height", "100%");
				setStyle(slide, "width", getStyle(con, "width") + "px");
				var a = document.createElement("a");
				a.setAttribute("href", encodeURI(item.href));
				var img = document.createElement("img");
				img.setAttribute("src", item.src);
				a.appendChild(img);
				slide.appendChild(a);
				frag.appendChild(slide);
				var p_el = document.createElement('span');
				p_el.setAttribute("class", "pagination-items");
				p_frag.appendChild(p_el)
			})
		}
		pa.appendChild(p_frag);
		pa.removeChild(pa.childNodes[0]);
		page = pa;
		slider.appendChild(frag);
		wrap.appendChild(slider);
		el.appendChild(wrap);
		setting.init();
		slider = document.querySelector("#" + el.id + ">.swiper-wrapper>.swiper-slider")
	};
	var th = null,
		now_position = 0,
		percentage = 0,
		isMove = false,
		setting = {
			prev: null,
			next: null,
			index: 0,
			width: 0,
			num: 1,
			duration: undefined,
			time: null,
			curIndex: 0,
			request: null,
			touchX: 0,
			autoplay: function() {
				var time = typeof(g_conf.autoplay) === 'number' ? g_conf.autoplay : 3500;
				th.time = setTimeout(function() {
					th.request = window.requestAnimationFrame(th.autoplay);
					th._next()
				}, time)
			},
			init: function() {
				th = this;
				th.duration = duration;
				this.num = data.length - 1;
				this.width = getStyle(con, "width");
				setStyle(slider, "width", this.width * data.length + "px");
				var _this = this;
				try {
					window.addEventListener("resize", function() {
						slider.style.transition = "all 0s"
					});
					var next = document.querySelector("#" + con.id + ">" + g_conf.button['next']);
					var prev = document.querySelector("#" + con.id + ">" + g_conf.button['prev']);
					next.addEventListener("click", function() {
						_this._next()
					}, false);
					prev.addEventListener("click", function() {
						_this._prev()
					})
				} catch (e) {
					throw new Error('event error');
				};
				if (g_conf.autoplay) {
					th.boot();
					con.addEventListener("mouseover", th.stop, false);
					con.addEventListener("mouseout", th.boot, false)
				}
				_this.touchInit();
				page.childNodes[th.curIndex].classList.add('pagination-items-active')
			},
			stop: function() {
				clearTimeout(th.time);
				cancelAnimationFrame(th.request);
				th.time = null;
				th.request = null
			},
			boot: function() {
				th.autoplay()
			},
			_next: function() {
				var _this = this;
				if (_this.index !== _this.num) {
					_this.index++
				} else {
					_this.index = 0;
					_this.duration = 0;
					var id = setTimeout(function() {
						_this.index = 1;
						_this.duration = duration;
						_this.transform();
						clearTimeout(id)
					}, 0)
				};
				(_this.curIndex < _this.num - 1) ? _this.curIndex++ : _this.curIndex = 0;
				th.play()
			},
			tabIndex: function(b) {
				var index, _this = this;
				var id = null;
				clearTimeout(id);
				id = setTimeout(function() {
					if (b) {
						index = _this.index + 1
					} else {
						index = _this.index
					}; if (g_conf.lazy) {
						if (slider.childElementCount < _this.num + 1) {
							_this.lazy(index)
						}
					}
				}, 10)
			},
			lazy: function(idx) {
				var m = data[idx];
				var slide = document.createElement("div");
				slide.setAttribute("class", "swiper-items");
				setStyle(slide, "float", "left");
				setStyle(slide, "height", "100%");
				setStyle(slide, "width", getStyle(con, "width") + "px");
				var a = document.createElement("a");
				a.setAttribute("href", encodeURI(m.href));
				var img = document.createElement("img");
				img.setAttribute("src", m.src);
				a.appendChild(img);
				slide.appendChild(a);
				slider.appendChild(slide)
			},
			_prev: function() {
				var _this = this;
				if (_this.index === 0) {
					_this.index = _this.num;
					_this.duration = 0;
					var id = setTimeout(function() {
						_this.index = _this.num - 1;
						_this.duration = duration;
						_this.transform();
						clearTimeout(id)
					}, 0)
				} else {
					_this.index--
				}(_this.curIndex === 0) ? _this.curIndex = _this.num - 1 : _this.curIndex--;
				th.play();
				_this.tabIndex(true)
			},
			play: function() {
				th.transform();
				var pc = page.childNodes;
				for (var i = 0; i < pc.length; i++) {
					if (i === th.curIndex) {
						pc[i].classList.add('pagination-items-active')
					} else {
						pc[i].classList.remove('pagination-items-active')
					}
				}
			},
			transform: function() {
				slider.style.transform = "translate3d(-" + this.index * this.width + "px,0px,0px)";
				slider.style.transition = "all " + this.duration + "ms " + easing;
				now_position = this.index * this.width
			},
			transitionend: function() {
				slider.style.transition = "all " + this.duration + "ms" + easing
			},
			touchInit: function() {
				slider.addEventListener("mousedown", th.start, false);
				slider.addEventListener("touchstart", th.start, {
					passive: false
				});
				slider.addEventListener("transitionend", th.transitionend, false)
			},
			start: function(e) {
				e.preventDefault();
				th.touchX = e.clientX || e.touches[0].clientX;
				isMove = th.index === th.num || th.index === 0;
				if (isMove) {
					if (th.index === th.num) {
						now_position = 0;
						th.index = 0
					} else if (th.index === 0) {
						now_position = th.width * th.num;
						th.index = th.num
					}
					th.duration = duration;
					th.transform()
				}
				document.addEventListener("touchmove", th.move, {
					passive: false
				});
				document.addEventListener("touchend", th.end, {
					passive: false
				});
				document.addEventListener("mouseup", th.end, false);
				document.addEventListener("mousemove", th.move)
			},
			move: function(e) {
				try {
					slider.classList.add('no-click');
					e.preventDefault();
					var offX = (e.clientX || e.touches[0].clientX) - th.touchX;
					percentage = offX / th.width;
					var f = offX - now_position;
					slider.style.transform = "translate3d(" + f + "px,0px,0px)";
					slider.style.transition = "all ." + 0 + "s " + easing;
					isMove = !0
				} catch (e) {}
			},
			checked: function(n) {
				return !(Math.floor(n) === -1)
			},
			end: function(e) {
				e.preventDefault();
				if (isMove) {
					var b = th.checked(percentage);
					if (b && th.index !== 0) {
						th._prev()
					} else if (!b && th.index !== th.num) {
						th._next()
					}
				}
				isMove = !1;
				document.removeEventListener("touchmove", th.move);
				document.removeEventListener("touchend", th.end);
				document.removeEventListener("mousemove", th.move, false);
				document.removeEventListener("mouseup", th.end, false);
				slider.classList.remove('no-click')
			}
		};

	function btnEvent() {
		return [prev, next]
	};

	function setStyle(el, prop, value) {
		el.style[prop] = value
	};

	function getStyle(el, prop) {
		return parseFloat(window.getComputedStyle(el)[prop])
	}
	return init
})());