/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

		__webpack_require__(5);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

		__webpack_require__(4);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _DOMElementDecorator = __webpack_require__(3);

	var _DOMElementDecorator2 = _interopRequireDefault(_DOMElementDecorator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SLIDER_ACTIVE_CLASS = 'slider_active'; /**
	                                            * Created by ridel1e on 04/10/2016.
	                                            */

	var createTaskButton = new _DOMElementDecorator2.default(document.querySelector('.header__create-task-button'));
	console.log(createTaskButton);

	var modalWindow = new _DOMElementDecorator2.default(document.querySelector('.slider'));

	createTaskButton.click(function () {
	  if (modalWindow.hasClass(SLIDER_ACTIVE_CLASS)) {
	    modalWindow.removeClass(SLIDER_ACTIVE_CLASS);
	  } else {
	    modalWindow.addClass(SLIDER_ACTIVE_CLASS);
	  }
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by ridel1e on 03/10/2016.
	 */

	var DOMElementDecorator = function () {
	  function DOMElementDecorator(DOMElement) {
	    _classCallCheck(this, DOMElementDecorator);

	    this._element = DOMElement;
	  }

	  /* class manipulators */

	  /**
	   * Add class to DOM element
	   * @param className
	   */


	  _createClass(DOMElementDecorator, [{
	    key: 'addClass',
	    value: function addClass(className) {
	      this._element.className += ' ' + className;
	    }

	    /**
	     * Class in a element class list check
	     * @param className
	     * @returns {boolean}
	     */

	  }, {
	    key: 'hasClass',
	    value: function hasClass(className) {
	      return this._element.className.indexOf(' ' + className) !== -1;
	    }

	    /**
	     * Remove class from DOM element
	     * @param className
	     */

	  }, {
	    key: 'removeClass',
	    value: function removeClass(className) {
	      this._element.className = this._element.className.replace(' ' + className, '');
	    }

	    /* events */

	    /**
	     * Add handler to mouseenter event
	     * @param callback
	     */

	  }, {
	    key: 'mouseEnter',
	    value: function mouseEnter(callback) {
	      this._element.addEventListener('mouseenter', callback);
	    }

	    /**
	     * Add handler to mouseleave event
	     * @param callback
	     */

	  }, {
	    key: 'mouseLeave',
	    value: function mouseLeave(callback) {
	      this._element.addEventListener('mouseleave', callback);
	    }

	    /**
	     * Add handlers to mouseenter and mouseleave events
	     * @param mouseEnterCallback
	     * @param mouseLeaveCallback
	     */

	  }, {
	    key: 'hover',
	    value: function hover(mouseEnterCallback, mouseLeaveCallback) {
	      this.mouseEnter(mouseEnterCallback);
	      this.mouseLeave(mouseLeaveCallback);
	    }

	    /**
	     * Add handler to focus event
	     * @param callback
	     */

	  }, {
	    key: 'focus',
	    value: function focus(callback) {
	      this._element.addEventListener('focus', callback);
	    }

	    /**
	     * Add handler to focusout event
	     * @param callback
	     */

	  }, {
	    key: 'unfocus',
	    value: function unfocus(callback) {
	      this._element.addEventListener('focusout', callback);
	    }

	    /**
	     * Add handler to click event
	     * @param callback
	     */

	  }, {
	    key: 'click',
	    value: function click(callback) {
	      this._element.addEventListener('click', callback);
	    }

	    /**
	     * Add custom event listener to DOM element
	     * @param event
	     * @param callback
	     */

	  }, {
	    key: 'on',
	    value: function on(event, callback) {
	      this._element.addEventListener(event, callback);
	    }

	    /* attribute manipulations */

	    /**
	     * Returns element attribute by name
	     * @param attributeName
	     * @returns {*|string}
	     */

	  }, {
	    key: 'getAttribute',
	    value: function getAttribute(attributeName) {
	      return this._element.getAttribute(attributeName);
	    }
	  }]);

	  return DOMElementDecorator;
	}();

		exports.default = DOMElementDecorator;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _DOMElementDecorator = __webpack_require__(3);

	var _DOMElementDecorator2 = _interopRequireDefault(_DOMElementDecorator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HEADER_SEARCH_FOCUSED_CLASS = 'header__search_focused'; /**
	                                                             * Created by ridel1e on 04/10/2016.
	                                                             */

	var search = new _DOMElementDecorator2.default(document.querySelector('.header__search'));

	search.focus(function () {
	  return search.addClass(HEADER_SEARCH_FOCUSED_CLASS);
	});
	search.unfocus(function () {
	  return search.removeClass(HEADER_SEARCH_FOCUSED_CLASS);
		});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _constants = __webpack_require__(6);

	var constants = _interopRequireWildcard(_constants);

	var _DOMElementDecorator = __webpack_require__(3);

	var _DOMElementDecorator2 = _interopRequireDefault(_DOMElementDecorator);

	var _calendarDate = __webpack_require__(7);

	var _calendarDate2 = _interopRequireDefault(_calendarDate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var dayCards = Array.prototype.map.call(document.querySelectorAll('.day-card'), function (dayCard) {
	  return new _DOMElementDecorator2.default(dayCard);
	}); /**
	     * Created by ridel1e on 04/10/2016.
	     */

	dayCards.forEach(function (dayCard) {

	  var date = dayCard.getAttribute(constants.CALENDAR_DATE_ATTRIBUTE);
	  var yearSeason = getYearSeason(date);

	  dayCard.addClass(constants.YEAR_SEASONS_CLASSES[yearSeason]);
	  dayCard.hover(function () {
	    return dayCard.addClass(constants.DAY_CARD_HOVERED_CLASS);
	  }, function () {
	    return dayCard.removeClass(constants.DAY_CARD_HOVERED_CLASS);
	  });
	});

	function getYearSeason(dateString) {
	  var dateArray = dateString.split('-');

	  var calendarDate = new _calendarDate2.default({
	    year: dateArray[0],
	    month: dateArray[1],
	    day: dateArray[2]
	  });

	  return calendarDate.getYearSeason();
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by ridel1e on 04/10/2016.
	 */

	var DAY_CARD_HOVERED_CLASS = exports.DAY_CARD_HOVERED_CLASS = 'day-card_hovered';

	var CALENDAR_DATE_ATTRIBUTE = exports.CALENDAR_DATE_ATTRIBUTE = 'calendar-date';

	var YEAR_SEASONS_CLASSES = exports.YEAR_SEASONS_CLASSES = {
	  fall: 'day-card_theme_fall',
	  winter: 'day-card_theme_winter',
	  spring: 'day-card_theme_spring',
	  summer: 'day-card_theme_summer'
		};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by ridel1e on 03/10/2016.
	 */

	var yearSeasons = {
	  0: 'winter',
	  1: 'winter',
	  2: 'spring',
	  3: 'spring',
	  4: 'spring',
	  5: 'summer',
	  6: 'summer',
	  7: 'summer',
	  8: 'fall',
	  9: 'fall',
	  10: 'fall',
	  11: 'winter'
	};

	var CalendarDate = function () {
	  function CalendarDate(date) {
	    _classCallCheck(this, CalendarDate);

	    this._date = new Date(date.year, date.month - 1, date.day);
	  }

	  /**
	   * Returns year season name
	   * @returns {String}
	   */


	  _createClass(CalendarDate, [{
	    key: 'getYearSeason',
	    value: function getYearSeason() {
	      return yearSeasons[this._date.getMonth()];
	    }
	  }]);

	  return CalendarDate;
	}();

		exports.default = CalendarDate;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhZDAwNjE4YWVlNzQyZGZlMzA4NiIsIndlYnBhY2s6Ly8vanMvcGFnZXMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vanMvY29tcG9uZW50cy9oZWFkZXIvd2lkZ2V0LmpzIiwid2VicGFjazovLy9qcy9jb21wb25lbnRzL2J1dHRvbi1wYW5lbC93aWRnZXQuanMiLCJ3ZWJwYWNrOi8vLyIsIndlYnBhY2s6Ly8vanMvc2VydmljZXMvRE9NRWxlbWVudERlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vanMvY29tcG9uZW50cy9zZWFyY2gvd2lkZ2V0LmpzIiwid2VicGFjazovLy9qcy9jb21wb25lbnRzL2RheS1saXN0L3dpZGdldC5qcyIsIndlYnBhY2s6Ly8vanMvY29tcG9uZW50cy9kYXktbGlzdC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vL2pzL3NlcnZpY2VzL2NhbGVuZGFyLWRhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBhZDAwNjE4YWVlNzQyZGZlMzA4NlxuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSByaWRlbDFlIG9uIDAzLzEwLzIwMTYuXG4gKi9cblxuaW1wb3J0ICcuLi9jb21wb25lbnRzL2hlYWRlci93aWRnZXQnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL2RheS1saXN0L3dpZGdldCc7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKioganMvcGFnZXMvbWFpbi5qc1xuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSByaWRlbDFlIG9uIDA0LzEwLzIwMTYuXG4gKi9cblxuaW1wb3J0ICcuLi9idXR0b24tcGFuZWwvd2lkZ2V0JztcbmltcG9ydCAnLi4vc2VhcmNoL3dpZGdldCc7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKioganMvY29tcG9uZW50cy9oZWFkZXIvd2lkZ2V0LmpzXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHJpZGVsMWUgb24gMDQvMTAvMjAxNi5cbiAqL1xuXG5pbXBvcnQgRE9NRWxlbWVudERlY29yYXRvciBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ET01FbGVtZW50RGVjb3JhdG9yJztcblxuY29uc3QgU0xJREVSX0FDVElWRV9DTEFTUyA9ICdzbGlkZXJfYWN0aXZlJztcblxuY29uc3QgY3JlYXRlVGFza0J1dHRvbiA9XG4gIG5ldyBET01FbGVtZW50RGVjb3JhdG9yKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NyZWF0ZS10YXNrLWJ1dHRvbicpKTtcbmNvbnNvbGUubG9nKGNyZWF0ZVRhc2tCdXR0b24pO1xuXG5jb25zdCBtb2RhbFdpbmRvdyA9XG4gIG5ldyBET01FbGVtZW50RGVjb3JhdG9yKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXInKSk7XG5cbmNyZWF0ZVRhc2tCdXR0b24uY2xpY2soKCkgPT4ge1xuICBpZihtb2RhbFdpbmRvdy5oYXNDbGFzcyhTTElERVJfQUNUSVZFX0NMQVNTKSkge1xuICAgIG1vZGFsV2luZG93LnJlbW92ZUNsYXNzKFNMSURFUl9BQ1RJVkVfQ0xBU1MpXG4gIH1cbiAgZWxzZSB7XG4gICAgbW9kYWxXaW5kb3cuYWRkQ2xhc3MoU0xJREVSX0FDVElWRV9DTEFTUylcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKioganMvY29tcG9uZW50cy9idXR0b24tcGFuZWwvd2lkZ2V0LmpzXG4gKiovIiwidW5kZWZpbmVkXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHJpZGVsMWUgb24gMDMvMTAvMjAxNi5cbiAqL1xuXG5jbGFzcyBET01FbGVtZW50RGVjb3JhdG9yIHtcbiAgY29uc3RydWN0b3IgKERPTUVsZW1lbnQpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gRE9NRWxlbWVudDtcbiAgfVxuXG4gIC8qIGNsYXNzIG1hbmlwdWxhdG9ycyAqL1xuXG4gIC8qKlxuICAgKiBBZGQgY2xhc3MgdG8gRE9NIGVsZW1lbnRcbiAgICogQHBhcmFtIGNsYXNzTmFtZVxuICAgKi9cbiAgYWRkQ2xhc3MgKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NOYW1lICs9IGAgJHtjbGFzc05hbWV9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGFzcyBpbiBhIGVsZW1lbnQgY2xhc3MgbGlzdCBjaGVja1xuICAgKiBAcGFyYW0gY2xhc3NOYW1lXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaGFzQ2xhc3MgKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKGAgJHtjbGFzc05hbWV9YCkgIT09IC0xXG4gIH1cblxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY2xhc3MgZnJvbSBET00gZWxlbWVudFxuICAgKiBAcGFyYW0gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVDbGFzcyAoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc05hbWUgPSB0aGlzLl9lbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKGAgJHtjbGFzc05hbWV9YCwgJycpO1xuICB9XG5cbiAgLyogZXZlbnRzICovXG5cbiAgLyoqXG4gICAqIEFkZCBoYW5kbGVyIHRvIG1vdXNlZW50ZXIgZXZlbnRcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqL1xuICBtb3VzZUVudGVyIChjYWxsYmFjaykge1xuICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgaGFuZGxlciB0byBtb3VzZWxlYXZlIGV2ZW50XG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKi9cbiAgbW91c2VMZWF2ZSAoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBjYWxsYmFjayk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGhhbmRsZXJzIHRvIG1vdXNlZW50ZXIgYW5kIG1vdXNlbGVhdmUgZXZlbnRzXG4gICAqIEBwYXJhbSBtb3VzZUVudGVyQ2FsbGJhY2tcbiAgICogQHBhcmFtIG1vdXNlTGVhdmVDYWxsYmFja1xuICAgKi9cbiAgaG92ZXIgKG1vdXNlRW50ZXJDYWxsYmFjaywgbW91c2VMZWF2ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5tb3VzZUVudGVyKG1vdXNlRW50ZXJDYWxsYmFjayk7XG4gICAgdGhpcy5tb3VzZUxlYXZlKG1vdXNlTGVhdmVDYWxsYmFjayk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGhhbmRsZXIgdG8gZm9jdXMgZXZlbnRcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqL1xuICBmb2N1cyAoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgY2FsbGJhY2spXG4gIH1cblxuICAvKipcbiAgICogQWRkIGhhbmRsZXIgdG8gZm9jdXNvdXQgZXZlbnRcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqL1xuICB1bmZvY3VzIChjYWxsYmFjaykge1xuICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBjYWxsYmFjaylcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgaGFuZGxlciB0byBjbGljayBldmVudFxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICovXG4gIGNsaWNrIChjYWxsYmFjaykge1xuICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjayk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGN1c3RvbSBldmVudCBsaXN0ZW5lciB0byBET00gZWxlbWVudFxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqL1xuICBvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gIH1cblxuICAvKiBhdHRyaWJ1dGUgbWFuaXB1bGF0aW9ucyAqL1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGVsZW1lbnQgYXR0cmlidXRlIGJ5IG5hbWVcbiAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWVcbiAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgKi9cbiAgZ2V0QXR0cmlidXRlIChhdHRyaWJ1dGVOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRE9NRWxlbWVudERlY29yYXRvcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBqcy9zZXJ2aWNlcy9ET01FbGVtZW50RGVjb3JhdG9yLmpzXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHJpZGVsMWUgb24gMDQvMTAvMjAxNi5cbiAqL1xuXG5pbXBvcnQgRE9NRWxlbWVudERlY29yYXRvciBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ET01FbGVtZW50RGVjb3JhdG9yJztcblxuY29uc3QgSEVBREVSX1NFQVJDSF9GT0NVU0VEX0NMQVNTID0gJ2hlYWRlcl9fc2VhcmNoX2ZvY3VzZWQnO1xuXG5jb25zdCBzZWFyY2ggPVxuICBuZXcgRE9NRWxlbWVudERlY29yYXRvcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19zZWFyY2gnKSk7XG5cbnNlYXJjaC5mb2N1cygoKSA9PiBzZWFyY2guYWRkQ2xhc3MoSEVBREVSX1NFQVJDSF9GT0NVU0VEX0NMQVNTKSk7XG5zZWFyY2gudW5mb2N1cygoKSA9PiBzZWFyY2gucmVtb3ZlQ2xhc3MoSEVBREVSX1NFQVJDSF9GT0NVU0VEX0NMQVNTKSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBqcy9jb21wb25lbnRzL3NlYXJjaC93aWRnZXQuanNcbiAqKi8iLCIvKipcbiAqIENyZWF0ZWQgYnkgcmlkZWwxZSBvbiAwNC8xMC8yMDE2LlxuICovXG5cbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgRE9NRWxlbWVudERlY29yYXRvciBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ET01FbGVtZW50RGVjb3JhdG9yJztcbmltcG9ydCBDYWxlbmRhckRhdGUgZnJvbSAnLi4vLi4vc2VydmljZXMvY2FsZW5kYXItZGF0ZSc7XG5cbmNvbnN0IGRheUNhcmRzID0gQXJyYXkucHJvdG90eXBlXG4gIC5tYXAuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF5LWNhcmQnKSxcbiAgICAoZGF5Q2FyZCkgPT4gbmV3IERPTUVsZW1lbnREZWNvcmF0b3IoZGF5Q2FyZCkpO1xuXG5kYXlDYXJkc1xuICAuZm9yRWFjaCgoZGF5Q2FyZCkgPT4ge1xuXG4gICAgY29uc3QgZGF0ZSA9IGRheUNhcmQuZ2V0QXR0cmlidXRlKGNvbnN0YW50cy5DQUxFTkRBUl9EQVRFX0FUVFJJQlVURSk7XG4gICAgY29uc3QgeWVhclNlYXNvbiA9IGdldFllYXJTZWFzb24oZGF0ZSk7XG4gICAgXG4gICAgZGF5Q2FyZC5hZGRDbGFzcyhjb25zdGFudHMuWUVBUl9TRUFTT05TX0NMQVNTRVNbeWVhclNlYXNvbl0pO1xuICAgIGRheUNhcmQuaG92ZXIoXG4gICAgICAoKSA9PiBkYXlDYXJkLmFkZENsYXNzKGNvbnN0YW50cy5EQVlfQ0FSRF9IT1ZFUkVEX0NMQVNTKSxcbiAgICAgICgpID0+IGRheUNhcmQucmVtb3ZlQ2xhc3MoY29uc3RhbnRzLkRBWV9DQVJEX0hPVkVSRURfQ0xBU1MpXG4gICAgKTtcbiAgfSk7XG5cblxuZnVuY3Rpb24gZ2V0WWVhclNlYXNvbihkYXRlU3RyaW5nKSB7XG4gIGNvbnN0IGRhdGVBcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQoJy0nKTtcblxuICBjb25zdCBjYWxlbmRhckRhdGUgPSBuZXcgQ2FsZW5kYXJEYXRlKHtcbiAgICB5ZWFyOiBkYXRlQXJyYXlbMF0sXG4gICAgbW9udGg6IGRhdGVBcnJheVsxXSxcbiAgICBkYXk6IGRhdGVBcnJheVsyXVxuICB9KTtcblxuICByZXR1cm4gY2FsZW5kYXJEYXRlLmdldFllYXJTZWFzb24oKTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBqcy9jb21wb25lbnRzL2RheS1saXN0L3dpZGdldC5qc1xuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSByaWRlbDFlIG9uIDA0LzEwLzIwMTYuXG4gKi9cblxuZXhwb3J0IGNvbnN0IERBWV9DQVJEX0hPVkVSRURfQ0xBU1MgPSAnZGF5LWNhcmRfaG92ZXJlZCc7XG5cbmV4cG9ydCBjb25zdCBDQUxFTkRBUl9EQVRFX0FUVFJJQlVURSA9ICdjYWxlbmRhci1kYXRlJztcblxuZXhwb3J0IGNvbnN0IFlFQVJfU0VBU09OU19DTEFTU0VTID0ge1xuICBmYWxsOiAnZGF5LWNhcmRfdGhlbWVfZmFsbCcsXG4gIHdpbnRlcjogJ2RheS1jYXJkX3RoZW1lX3dpbnRlcicsXG4gIHNwcmluZzogJ2RheS1jYXJkX3RoZW1lX3NwcmluZycsXG4gIHN1bW1lcjogJ2RheS1jYXJkX3RoZW1lX3N1bW1lcidcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKioganMvY29tcG9uZW50cy9kYXktbGlzdC9jb25zdGFudHMuanNcbiAqKi8iLCIvKipcbiAqIENyZWF0ZWQgYnkgcmlkZWwxZSBvbiAwMy8xMC8yMDE2LlxuICovXG5cbmNvbnN0IHllYXJTZWFzb25zID0ge1xuICAwOiAnd2ludGVyJyxcbiAgMTogJ3dpbnRlcicsXG4gIDI6ICdzcHJpbmcnLFxuICAzOiAnc3ByaW5nJyxcbiAgNDogJ3NwcmluZycsXG4gIDU6ICdzdW1tZXInLFxuICA2OiAnc3VtbWVyJyxcbiAgNzogJ3N1bW1lcicsXG4gIDg6ICdmYWxsJyxcbiAgOTogJ2ZhbGwnLFxuICAxMDogJ2ZhbGwnLFxuICAxMTogJ3dpbnRlcidcbn07XG5cbmNsYXNzIENhbGVuZGFyRGF0ZSB7XG4gIGNvbnN0cnVjdG9yIChkYXRlKSB7XG4gICAgdGhpcy5fZGF0ZSA9IG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHllYXIgc2Vhc29uIG5hbWVcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICovXG4gIGdldFllYXJTZWFzb24gKCkge1xuICAgIHJldHVybiB5ZWFyU2Vhc29uc1t0aGlzLl9kYXRlLmdldE1vbnRoKCldO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyRGF0ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBqcy9zZXJ2aWNlcy9jYWxlbmRhci1kYXRlLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUFBOzs7Ozs7OztBQ0RBO0FBQ0E7QUFBQTs7Ozs7Ozs7QUNEQTtBQUNBOzs7OztBQUNBOzs7O0FBRUE7QUNFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QURDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVyQkE7Ozs7QUFJQTtBQUNBO0FEQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7Ozs7OztBQUlBOzs7Ozs7OztBRTNHQTtBQUNBOzs7OztBQUNBOzs7O0FBRUE7QUFDQTtBRkVBO0FBQUE7QUVBQTtBQUNBO0FGQUE7QUVBQTs7Ozs7Ozs7QUNSQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBSEVBO0FBQUE7Ozs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7QUluQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBSkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7Ozs7Ozs7Ozs7Ozs7OztBS1JBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUNBO0FBY0E7QUxDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Iiwic291cmNlUm9vdCI6IiJ9