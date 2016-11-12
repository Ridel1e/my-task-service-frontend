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

		__webpack_require__(7);

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

	var _DOMElementDecorator = __webpack_require__(3);

	var _DOMElementDecorator2 = _interopRequireDefault(_DOMElementDecorator);

	var _constants = __webpack_require__(6);

	var constants = _interopRequireWildcard(_constants);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by ridel1e on 18/10/2016.
	 */

	var tasks = Array.prototype.map.call(document.querySelectorAll('.task'), function (task) {
	  return new _DOMElementDecorator2.default(task);
	});

	var editionForm = new _DOMElementDecorator2.default(document.querySelector('.edition-form-container'));

	tasks.forEach(function (task) {
	  task.hover(function () {
	    return task.addClass(constants.TASK_HOVERED_CLASS);
	  }, function () {
	    return task.removeClass(constants.TASK_HOVERED_CLASS);
	  });

	  task.click(function () {
	    if (!editionForm.hasClass(constants.EDITION_FORM_VISIBLE_CLASS)) {
	      editionForm.addClass(constants.EDITION_FORM_VISIBLE_CLASS);
	    }

	    document.forms.editionForm.title.value = task.getAttribute('title');
	    document.forms.editionForm.description.value = task.getAttribute('description');
	    document.forms.editionForm.notificationTime.value = task.getAttribute('notification-time');
	    document.forms.editionForm.completeDate.value = task.getAttribute('complete-date');
	  });
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by ridel1e on 18/10/2016.
	 */

	var TASK_HOVERED_CLASS = exports.TASK_HOVERED_CLASS = 'task_hovered';
	var EDITION_FORM_VISIBLE_CLASS = exports.EDITION_FORM_VISIBLE_CLASS = 'edition-form-container_visible';

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _constants = __webpack_require__(8);

	var constants = _interopRequireWildcard(_constants);

	var _DOMElementDecorator = __webpack_require__(3);

	var _DOMElementDecorator2 = _interopRequireDefault(_DOMElementDecorator);

	var _calendarDate = __webpack_require__(9);

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
/* 8 */
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
/* 9 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDYzODc4ZTlkYWIwZWUxMGMxZGRjIiwid2VicGFjazovLy9qcy9wYWdlcy9tYWluLmpzIiwid2VicGFjazovLy9qcy9jb21wb25lbnRzL2hlYWRlci93aWRnZXQuanMiLCJ3ZWJwYWNrOi8vL2pzL2NvbXBvbmVudHMvYnV0dG9uLXBhbmVsL3dpZGdldC5qcyIsIndlYnBhY2s6Ly8vIiwid2VicGFjazovLy9qcy9zZXJ2aWNlcy9ET01FbGVtZW50RGVjb3JhdG9yLmpzIiwid2VicGFjazovLy9qcy9jb21wb25lbnRzL3NlYXJjaC93aWRnZXQuanMiLCJ3ZWJwYWNrOi8vL2pzL2NvbXBvbmVudHMvdGFzay1saXN0L3dpZGdldC5qcyIsIndlYnBhY2s6Ly8vanMvY29tcG9uZW50cy90YXNrLWxpc3QvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy9qcy9jb21wb25lbnRzL2RheS1saXN0L3dpZGdldC5qcyIsIndlYnBhY2s6Ly8vanMvY29tcG9uZW50cy9kYXktbGlzdC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vL2pzL3NlcnZpY2VzL2NhbGVuZGFyLWRhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA2Mzg3OGU5ZGFiMGVlMTBjMWRkY1xuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSByaWRlbDFlIG9uIDAzLzEwLzIwMTYuXG4gKi9cblxuaW1wb3J0ICcuLi9jb21wb25lbnRzL2hlYWRlci93aWRnZXQnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL3Rhc2stbGlzdC93aWRnZXQnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL2RheS1saXN0L3dpZGdldCc7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKioganMvcGFnZXMvbWFpbi5qc1xuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSByaWRlbDFlIG9uIDA0LzEwLzIwMTYuXG4gKi9cblxuaW1wb3J0ICcuLi9idXR0b24tcGFuZWwvd2lkZ2V0JztcbmltcG9ydCAnLi4vc2VhcmNoL3dpZGdldCc7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKioganMvY29tcG9uZW50cy9oZWFkZXIvd2lkZ2V0LmpzXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHJpZGVsMWUgb24gMDQvMTAvMjAxNi5cbiAqL1xuXG5pbXBvcnQgRE9NRWxlbWVudERlY29yYXRvciBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ET01FbGVtZW50RGVjb3JhdG9yJztcblxuY29uc3QgU0xJREVSX0FDVElWRV9DTEFTUyA9ICdzbGlkZXJfYWN0aXZlJztcblxuY29uc3QgY3JlYXRlVGFza0J1dHRvbiA9XG4gIG5ldyBET01FbGVtZW50RGVjb3JhdG9yKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NyZWF0ZS10YXNrLWJ1dHRvbicpKTtcbmNvbnNvbGUubG9nKGNyZWF0ZVRhc2tCdXR0b24pO1xuXG5jb25zdCBtb2RhbFdpbmRvdyA9XG4gIG5ldyBET01FbGVtZW50RGVjb3JhdG9yKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXInKSk7XG5cbmNyZWF0ZVRhc2tCdXR0b24uY2xpY2soKCkgPT4ge1xuICBpZihtb2RhbFdpbmRvdy5oYXNDbGFzcyhTTElERVJfQUNUSVZFX0NMQVNTKSkge1xuICAgIG1vZGFsV2luZG93LnJlbW92ZUNsYXNzKFNMSURFUl9BQ1RJVkVfQ0xBU1MpO1xuICB9XG4gIGVsc2Uge1xuICAgIG1vZGFsV2luZG93LmFkZENsYXNzKFNMSURFUl9BQ1RJVkVfQ0xBU1MpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBqcy9jb21wb25lbnRzL2J1dHRvbi1wYW5lbC93aWRnZXQuanNcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iLCIvKipcbiAqIENyZWF0ZWQgYnkgcmlkZWwxZSBvbiAwMy8xMC8yMDE2LlxuICovXG5cbmNsYXNzIERPTUVsZW1lbnREZWNvcmF0b3Ige1xuICBjb25zdHJ1Y3RvciAoRE9NRWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBET01FbGVtZW50O1xuICB9XG5cbiAgLyogY2xhc3MgbWFuaXB1bGF0b3JzICovXG5cbiAgLyoqXG4gICAqIEFkZCBjbGFzcyB0byBET00gZWxlbWVudFxuICAgKiBAcGFyYW0gY2xhc3NOYW1lXG4gICAqL1xuICBhZGRDbGFzcyAoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc05hbWUgKz0gYCAke2NsYXNzTmFtZX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIENsYXNzIGluIGEgZWxlbWVudCBjbGFzcyBsaXN0IGNoZWNrXG4gICAqIEBwYXJhbSBjbGFzc05hbWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBoYXNDbGFzcyAoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoYCAke2NsYXNzTmFtZX1gKSAhPT0gLTFcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjbGFzcyBmcm9tIERPTSBlbGVtZW50XG4gICAqIEBwYXJhbSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzIChjbGFzc05hbWUpIHtcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTmFtZSA9IHRoaXMuX2VsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UoYCAke2NsYXNzTmFtZX1gLCAnJyk7XG4gIH1cblxuICAvKiBldmVudHMgKi9cblxuICAvKipcbiAgICogQWRkIGhhbmRsZXIgdG8gbW91c2VlbnRlciBldmVudFxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICovXG4gIG1vdXNlRW50ZXIgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgY2FsbGJhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBoYW5kbGVyIHRvIG1vdXNlbGVhdmUgZXZlbnRcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqL1xuICBtb3VzZUxlYXZlIChjYWxsYmFjaykge1xuICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgaGFuZGxlcnMgdG8gbW91c2VlbnRlciBhbmQgbW91c2VsZWF2ZSBldmVudHNcbiAgICogQHBhcmFtIG1vdXNlRW50ZXJDYWxsYmFja1xuICAgKiBAcGFyYW0gbW91c2VMZWF2ZUNhbGxiYWNrXG4gICAqL1xuICBob3ZlciAobW91c2VFbnRlckNhbGxiYWNrLCBtb3VzZUxlYXZlQ2FsbGJhY2spIHtcbiAgICB0aGlzLm1vdXNlRW50ZXIobW91c2VFbnRlckNhbGxiYWNrKTtcbiAgICB0aGlzLm1vdXNlTGVhdmUobW91c2VMZWF2ZUNhbGxiYWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgaGFuZGxlciB0byBmb2N1cyBldmVudFxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICovXG4gIGZvY3VzIChjYWxsYmFjaykge1xuICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBjYWxsYmFjaylcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgaGFuZGxlciB0byBmb2N1c291dCBldmVudFxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICovXG4gIHVuZm9jdXMgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGNhbGxiYWNrKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBoYW5kbGVyIHRvIGNsaWNrIGV2ZW50XG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKi9cbiAgY2xpY2sgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgY3VzdG9tIGV2ZW50IGxpc3RlbmVyIHRvIERPTSBlbGVtZW50XG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICovXG4gIG9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8qIGF0dHJpYnV0ZSBtYW5pcHVsYXRpb25zICovXG5cbiAgLyoqXG4gICAqIFJldHVybnMgZWxlbWVudCBhdHRyaWJ1dGUgYnkgbmFtZVxuICAgKiBAcGFyYW0gYXR0cmlidXRlTmFtZVxuICAgKiBAcmV0dXJucyB7KnxzdHJpbmd9XG4gICAqL1xuICBnZXRBdHRyaWJ1dGUgKGF0dHJpYnV0ZU5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBET01FbGVtZW50RGVjb3JhdG9yO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGpzL3NlcnZpY2VzL0RPTUVsZW1lbnREZWNvcmF0b3IuanNcbiAqKi8iLCIvKipcbiAqIENyZWF0ZWQgYnkgcmlkZWwxZSBvbiAwNC8xMC8yMDE2LlxuICovXG5cbmltcG9ydCBET01FbGVtZW50RGVjb3JhdG9yIGZyb20gJy4uLy4uL3NlcnZpY2VzL0RPTUVsZW1lbnREZWNvcmF0b3InO1xuXG5jb25zdCBIRUFERVJfU0VBUkNIX0ZPQ1VTRURfQ0xBU1MgPSAnaGVhZGVyX19zZWFyY2hfZm9jdXNlZCc7XG5cbmNvbnN0IHNlYXJjaCA9XG4gIG5ldyBET01FbGVtZW50RGVjb3JhdG9yKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3NlYXJjaCcpKTtcblxuc2VhcmNoLmZvY3VzKCgpID0+IHNlYXJjaC5hZGRDbGFzcyhIRUFERVJfU0VBUkNIX0ZPQ1VTRURfQ0xBU1MpKTtcbnNlYXJjaC51bmZvY3VzKCgpID0+IHNlYXJjaC5yZW1vdmVDbGFzcyhIRUFERVJfU0VBUkNIX0ZPQ1VTRURfQ0xBU1MpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGpzL2NvbXBvbmVudHMvc2VhcmNoL3dpZGdldC5qc1xuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSByaWRlbDFlIG9uIDE4LzEwLzIwMTYuXG4gKi9cblxuaW1wb3J0IERPTUVsZW1lbnREZWNvcmF0b3IgZnJvbSAnLi4vLi4vc2VydmljZXMvRE9NRWxlbWVudERlY29yYXRvcic7XG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCB0YXNrcyA9IEFycmF5XG4gIC5wcm90b3R5cGVcbiAgLm1hcC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyksICh0YXNrKSA9PlxuICAgIG5ldyBET01FbGVtZW50RGVjb3JhdG9yKHRhc2spKTtcblxuY29uc3QgZWRpdGlvbkZvcm0gPSBcbiAgbmV3IERPTUVsZW1lbnREZWNvcmF0b3IoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRpb24tZm9ybS1jb250YWluZXInKSk7XG5cbnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgdGFzay5ob3ZlcihcbiAgICAoKSA9PiB0YXNrLmFkZENsYXNzKGNvbnN0YW50cy5UQVNLX0hPVkVSRURfQ0xBU1MpLFxuICAgICgpID0+IHRhc2sucmVtb3ZlQ2xhc3MoY29uc3RhbnRzLlRBU0tfSE9WRVJFRF9DTEFTUylcbiAgKTtcbiAgXG4gIHRhc2suY2xpY2soKCkgPT4ge1xuICAgIGlmKCFlZGl0aW9uRm9ybS5oYXNDbGFzcyhjb25zdGFudHMuRURJVElPTl9GT1JNX1ZJU0lCTEVfQ0xBU1MpKSB7XG4gICAgICBlZGl0aW9uRm9ybS5hZGRDbGFzcyhjb25zdGFudHMuRURJVElPTl9GT1JNX1ZJU0lCTEVfQ0xBU1MpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZm9ybXMuZWRpdGlvbkZvcm0udGl0bGUudmFsdWUgPSB0YXNrLmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcbiAgICBkb2N1bWVudC5mb3Jtcy5lZGl0aW9uRm9ybS5kZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZ2V0QXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICAgIGRvY3VtZW50LmZvcm1zLmVkaXRpb25Gb3JtLm5vdGlmaWNhdGlvblRpbWUudmFsdWUgPSB0YXNrLmdldEF0dHJpYnV0ZSgnbm90aWZpY2F0aW9uLXRpbWUnKTtcbiAgICBkb2N1bWVudC5mb3Jtcy5lZGl0aW9uRm9ybS5jb21wbGV0ZURhdGUudmFsdWUgPSB0YXNrLmdldEF0dHJpYnV0ZSgnY29tcGxldGUtZGF0ZScpO1xuICB9KTtcbn0pO1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBqcy9jb21wb25lbnRzL3Rhc2stbGlzdC93aWRnZXQuanNcbiAqKi8iLCIvKipcbiAqIENyZWF0ZWQgYnkgcmlkZWwxZSBvbiAxOC8xMC8yMDE2LlxuICovXG5cbmV4cG9ydCBjb25zdCBUQVNLX0hPVkVSRURfQ0xBU1MgPSAndGFza19ob3ZlcmVkJztcbmV4cG9ydCBjb25zdCBFRElUSU9OX0ZPUk1fVklTSUJMRV9DTEFTUyA9ICdlZGl0aW9uLWZvcm0tY29udGFpbmVyX3Zpc2libGUnO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGpzL2NvbXBvbmVudHMvdGFzay1saXN0L2NvbnN0YW50cy5qc1xuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSByaWRlbDFlIG9uIDA0LzEwLzIwMTYuXG4gKi9cblxuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBET01FbGVtZW50RGVjb3JhdG9yIGZyb20gJy4uLy4uL3NlcnZpY2VzL0RPTUVsZW1lbnREZWNvcmF0b3InO1xuaW1wb3J0IENhbGVuZGFyRGF0ZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYWxlbmRhci1kYXRlJztcblxuY29uc3QgZGF5Q2FyZHMgPSBBcnJheS5wcm90b3R5cGVcbiAgLm1hcC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXktY2FyZCcpLFxuICAgIChkYXlDYXJkKSA9PiBuZXcgRE9NRWxlbWVudERlY29yYXRvcihkYXlDYXJkKSk7XG5cbmRheUNhcmRzXG4gIC5mb3JFYWNoKChkYXlDYXJkKSA9PiB7XG5cbiAgICBjb25zdCBkYXRlID0gZGF5Q2FyZC5nZXRBdHRyaWJ1dGUoY29uc3RhbnRzLkNBTEVOREFSX0RBVEVfQVRUUklCVVRFKTtcbiAgICBjb25zdCB5ZWFyU2Vhc29uID0gZ2V0WWVhclNlYXNvbihkYXRlKTtcbiAgICBcbiAgICBkYXlDYXJkLmFkZENsYXNzKGNvbnN0YW50cy5ZRUFSX1NFQVNPTlNfQ0xBU1NFU1t5ZWFyU2Vhc29uXSk7XG4gICAgZGF5Q2FyZC5ob3ZlcihcbiAgICAgICgpID0+IGRheUNhcmQuYWRkQ2xhc3MoY29uc3RhbnRzLkRBWV9DQVJEX0hPVkVSRURfQ0xBU1MpLFxuICAgICAgKCkgPT4gZGF5Q2FyZC5yZW1vdmVDbGFzcyhjb25zdGFudHMuREFZX0NBUkRfSE9WRVJFRF9DTEFTUylcbiAgICApO1xuICB9KTtcblxuXG5mdW5jdGlvbiBnZXRZZWFyU2Vhc29uKGRhdGVTdHJpbmcpIHtcbiAgY29uc3QgZGF0ZUFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdCgnLScpO1xuXG4gIGNvbnN0IGNhbGVuZGFyRGF0ZSA9IG5ldyBDYWxlbmRhckRhdGUoe1xuICAgIHllYXI6IGRhdGVBcnJheVswXSxcbiAgICBtb250aDogZGF0ZUFycmF5WzFdLFxuICAgIGRheTogZGF0ZUFycmF5WzJdXG4gIH0pO1xuXG4gIHJldHVybiBjYWxlbmRhckRhdGUuZ2V0WWVhclNlYXNvbigpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGpzL2NvbXBvbmVudHMvZGF5LWxpc3Qvd2lkZ2V0LmpzXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHJpZGVsMWUgb24gMDQvMTAvMjAxNi5cbiAqL1xuXG5leHBvcnQgY29uc3QgREFZX0NBUkRfSE9WRVJFRF9DTEFTUyA9ICdkYXktY2FyZF9ob3ZlcmVkJztcblxuZXhwb3J0IGNvbnN0IENBTEVOREFSX0RBVEVfQVRUUklCVVRFID0gJ2NhbGVuZGFyLWRhdGUnO1xuXG5leHBvcnQgY29uc3QgWUVBUl9TRUFTT05TX0NMQVNTRVMgPSB7XG4gIGZhbGw6ICdkYXktY2FyZF90aGVtZV9mYWxsJyxcbiAgd2ludGVyOiAnZGF5LWNhcmRfdGhlbWVfd2ludGVyJyxcbiAgc3ByaW5nOiAnZGF5LWNhcmRfdGhlbWVfc3ByaW5nJyxcbiAgc3VtbWVyOiAnZGF5LWNhcmRfdGhlbWVfc3VtbWVyJ1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBqcy9jb21wb25lbnRzL2RheS1saXN0L2NvbnN0YW50cy5qc1xuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSByaWRlbDFlIG9uIDAzLzEwLzIwMTYuXG4gKi9cblxuY29uc3QgeWVhclNlYXNvbnMgPSB7XG4gIDA6ICd3aW50ZXInLFxuICAxOiAnd2ludGVyJyxcbiAgMjogJ3NwcmluZycsXG4gIDM6ICdzcHJpbmcnLFxuICA0OiAnc3ByaW5nJyxcbiAgNTogJ3N1bW1lcicsXG4gIDY6ICdzdW1tZXInLFxuICA3OiAnc3VtbWVyJyxcbiAgODogJ2ZhbGwnLFxuICA5OiAnZmFsbCcsXG4gIDEwOiAnZmFsbCcsXG4gIDExOiAnd2ludGVyJ1xufTtcblxuY2xhc3MgQ2FsZW5kYXJEYXRlIHtcbiAgY29uc3RydWN0b3IgKGRhdGUpIHtcbiAgICB0aGlzLl9kYXRlID0gbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgZGF0ZS5kYXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgeWVhciBzZWFzb24gbmFtZVxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKi9cbiAgZ2V0WWVhclNlYXNvbiAoKSB7XG4gICAgcmV0dXJuIHllYXJTZWFzb25zW3RoaXMuX2RhdGUuZ2V0TW9udGgoKV07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXJEYXRlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGpzL3NlcnZpY2VzL2NhbGVuZGFyLWRhdGUuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQUE7QUFDQTtBQUFBOzs7Ozs7OztBQ0ZBO0FBQ0E7QUFBQTs7Ozs7Ozs7QUNEQTtBQUNBOzs7OztBQUNBOzs7O0FBRUE7QUNFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QURDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVyQkE7Ozs7QUFJQTtBQUNBO0FEQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7Ozs7OztBQUlBOzs7Ozs7OztBRTNHQTtBQUNBOzs7OztBQUNBOzs7O0FBRUE7QUFDQTtBRkVBO0FBQUE7QUVBQTtBQUNBO0FGQUE7QUVBQTs7Ozs7Ozs7QUNSQTtBQUNBOzs7QUFBQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFOQTs7OztBQU9BO0FIRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBSTlCQTs7OztBQUlBOzs7Ozs7Ozs7QUNBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBTEVBO0FBQUE7Ozs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7QU1uQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBTkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7Ozs7Ozs7Ozs7Ozs7OztBT1JBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUNBO0FBY0E7QVBDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7Iiwic291cmNlUm9vdCI6IiJ9