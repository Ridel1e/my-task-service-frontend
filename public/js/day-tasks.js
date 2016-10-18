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

		__webpack_require__(8);

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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _DOMElementDecorator = __webpack_require__(3);

	var _DOMElementDecorator2 = _interopRequireDefault(_DOMElementDecorator);

	var _constants = __webpack_require__(9);

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
/* 9 */
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LXRhc2tzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGQzNWNkMThkYjQwNmQ5ZGFmMTcxIiwid2VicGFjazovLy9qcy9wYWdlcy9kYXktdGFza3MuanMiLCJ3ZWJwYWNrOi8vL2pzL2NvbXBvbmVudHMvaGVhZGVyL3dpZGdldC5qcyIsIndlYnBhY2s6Ly8vanMvY29tcG9uZW50cy9idXR0b24tcGFuZWwvd2lkZ2V0LmpzIiwid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vL2pzL3NlcnZpY2VzL0RPTUVsZW1lbnREZWNvcmF0b3IuanMiLCJ3ZWJwYWNrOi8vL2pzL2NvbXBvbmVudHMvc2VhcmNoL3dpZGdldC5qcyIsIndlYnBhY2s6Ly8vanMvY29tcG9uZW50cy90YXNrLWxpc3Qvd2lkZ2V0LmpzIiwid2VicGFjazovLy9qcy9jb21wb25lbnRzL3Rhc2stbGlzdC9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkMzVjZDE4ZGI0MDZkOWRhZjE3MVxuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSByaWRlbDFlIG9uIDE4LzEwLzIwMTYuXG4gKi9cblxuaW1wb3J0ICcuLi9jb21wb25lbnRzL2hlYWRlci93aWRnZXQnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL3Rhc2stbGlzdC93aWRnZXQnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKioganMvcGFnZXMvZGF5LXRhc2tzLmpzXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHJpZGVsMWUgb24gMDQvMTAvMjAxNi5cbiAqL1xuXG5pbXBvcnQgJy4uL2J1dHRvbi1wYW5lbC93aWRnZXQnO1xuaW1wb3J0ICcuLi9zZWFyY2gvd2lkZ2V0JztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBqcy9jb21wb25lbnRzL2hlYWRlci93aWRnZXQuanNcbiAqKi8iLCIvKipcbiAqIENyZWF0ZWQgYnkgcmlkZWwxZSBvbiAwNC8xMC8yMDE2LlxuICovXG5cbmltcG9ydCBET01FbGVtZW50RGVjb3JhdG9yIGZyb20gJy4uLy4uL3NlcnZpY2VzL0RPTUVsZW1lbnREZWNvcmF0b3InO1xuXG5jb25zdCBTTElERVJfQUNUSVZFX0NMQVNTID0gJ3NsaWRlcl9hY3RpdmUnO1xuXG5jb25zdCBjcmVhdGVUYXNrQnV0dG9uID1cbiAgbmV3IERPTUVsZW1lbnREZWNvcmF0b3IoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY3JlYXRlLXRhc2stYnV0dG9uJykpO1xuY29uc29sZS5sb2coY3JlYXRlVGFza0J1dHRvbik7XG5cbmNvbnN0IG1vZGFsV2luZG93ID1cbiAgbmV3IERPTUVsZW1lbnREZWNvcmF0b3IoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcicpKTtcblxuY3JlYXRlVGFza0J1dHRvbi5jbGljaygoKSA9PiB7XG4gIGlmKG1vZGFsV2luZG93Lmhhc0NsYXNzKFNMSURFUl9BQ1RJVkVfQ0xBU1MpKSB7XG4gICAgbW9kYWxXaW5kb3cucmVtb3ZlQ2xhc3MoU0xJREVSX0FDVElWRV9DTEFTUyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgbW9kYWxXaW5kb3cuYWRkQ2xhc3MoU0xJREVSX0FDVElWRV9DTEFTUyk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGpzL2NvbXBvbmVudHMvYnV0dG9uLXBhbmVsL3dpZGdldC5qc1xuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSByaWRlbDFlIG9uIDAzLzEwLzIwMTYuXG4gKi9cblxuY2xhc3MgRE9NRWxlbWVudERlY29yYXRvciB7XG4gIGNvbnN0cnVjdG9yIChET01FbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IERPTUVsZW1lbnQ7XG4gIH1cblxuICAvKiBjbGFzcyBtYW5pcHVsYXRvcnMgKi9cblxuICAvKipcbiAgICogQWRkIGNsYXNzIHRvIERPTSBlbGVtZW50XG4gICAqIEBwYXJhbSBjbGFzc05hbWVcbiAgICovXG4gIGFkZENsYXNzIChjbGFzc05hbWUpIHtcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTmFtZSArPSBgICR7Y2xhc3NOYW1lfWA7XG4gIH1cblxuICAvKipcbiAgICogQ2xhc3MgaW4gYSBlbGVtZW50IGNsYXNzIGxpc3QgY2hlY2tcbiAgICogQHBhcmFtIGNsYXNzTmFtZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzIChjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZihgICR7Y2xhc3NOYW1lfWApICE9PSAtMVxuICB9XG5cblxuICAvKipcbiAgICogUmVtb3ZlIGNsYXNzIGZyb20gRE9NIGVsZW1lbnRcbiAgICogQHBhcmFtIGNsYXNzTmFtZVxuICAgKi9cbiAgcmVtb3ZlQ2xhc3MgKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NOYW1lID0gdGhpcy5fZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShgICR7Y2xhc3NOYW1lfWAsICcnKTtcbiAgfVxuXG4gIC8qIGV2ZW50cyAqL1xuXG4gIC8qKlxuICAgKiBBZGQgaGFuZGxlciB0byBtb3VzZWVudGVyIGV2ZW50XG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKi9cbiAgbW91c2VFbnRlciAoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBjYWxsYmFjayk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGhhbmRsZXIgdG8gbW91c2VsZWF2ZSBldmVudFxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICovXG4gIG1vdXNlTGVhdmUgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgY2FsbGJhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBoYW5kbGVycyB0byBtb3VzZWVudGVyIGFuZCBtb3VzZWxlYXZlIGV2ZW50c1xuICAgKiBAcGFyYW0gbW91c2VFbnRlckNhbGxiYWNrXG4gICAqIEBwYXJhbSBtb3VzZUxlYXZlQ2FsbGJhY2tcbiAgICovXG4gIGhvdmVyIChtb3VzZUVudGVyQ2FsbGJhY2ssIG1vdXNlTGVhdmVDYWxsYmFjaykge1xuICAgIHRoaXMubW91c2VFbnRlcihtb3VzZUVudGVyQ2FsbGJhY2spO1xuICAgIHRoaXMubW91c2VMZWF2ZShtb3VzZUxlYXZlQ2FsbGJhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBoYW5kbGVyIHRvIGZvY3VzIGV2ZW50XG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKi9cbiAgZm9jdXMgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGNhbGxiYWNrKVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBoYW5kbGVyIHRvIGZvY3Vzb3V0IGV2ZW50XG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKi9cbiAgdW5mb2N1cyAoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgY2FsbGJhY2spXG4gIH1cblxuICAvKipcbiAgICogQWRkIGhhbmRsZXIgdG8gY2xpY2sgZXZlbnRcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqL1xuICBjbGljayAoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBjdXN0b20gZXZlbnQgbGlzdGVuZXIgdG8gRE9NIGVsZW1lbnRcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKi9cbiAgb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICB9XG5cbiAgLyogYXR0cmlidXRlIG1hbmlwdWxhdGlvbnMgKi9cblxuICAvKipcbiAgICogUmV0dXJucyBlbGVtZW50IGF0dHJpYnV0ZSBieSBuYW1lXG4gICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lXG4gICAqIEByZXR1cm5zIHsqfHN0cmluZ31cbiAgICovXG4gIGdldEF0dHJpYnV0ZSAoYXR0cmlidXRlTmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTUVsZW1lbnREZWNvcmF0b3I7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKioganMvc2VydmljZXMvRE9NRWxlbWVudERlY29yYXRvci5qc1xuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSByaWRlbDFlIG9uIDA0LzEwLzIwMTYuXG4gKi9cblxuaW1wb3J0IERPTUVsZW1lbnREZWNvcmF0b3IgZnJvbSAnLi4vLi4vc2VydmljZXMvRE9NRWxlbWVudERlY29yYXRvcic7XG5cbmNvbnN0IEhFQURFUl9TRUFSQ0hfRk9DVVNFRF9DTEFTUyA9ICdoZWFkZXJfX3NlYXJjaF9mb2N1c2VkJztcblxuY29uc3Qgc2VhcmNoID1cbiAgbmV3IERPTUVsZW1lbnREZWNvcmF0b3IoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoJykpO1xuXG5zZWFyY2guZm9jdXMoKCkgPT4gc2VhcmNoLmFkZENsYXNzKEhFQURFUl9TRUFSQ0hfRk9DVVNFRF9DTEFTUykpO1xuc2VhcmNoLnVuZm9jdXMoKCkgPT4gc2VhcmNoLnJlbW92ZUNsYXNzKEhFQURFUl9TRUFSQ0hfRk9DVVNFRF9DTEFTUykpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKioganMvY29tcG9uZW50cy9zZWFyY2gvd2lkZ2V0LmpzXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHJpZGVsMWUgb24gMTgvMTAvMjAxNi5cbiAqL1xuXG5pbXBvcnQgRE9NRWxlbWVudERlY29yYXRvciBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ET01FbGVtZW50RGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IHRhc2tzID0gQXJyYXlcbiAgLnByb3RvdHlwZVxuICAubWFwLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKSwgKHRhc2spID0+XG4gICAgbmV3IERPTUVsZW1lbnREZWNvcmF0b3IodGFzaykpO1xuXG5jb25zdCBlZGl0aW9uRm9ybSA9IFxuICBuZXcgRE9NRWxlbWVudERlY29yYXRvcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdGlvbi1mb3JtLWNvbnRhaW5lcicpKTtcblxudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICB0YXNrLmhvdmVyKFxuICAgICgpID0+IHRhc2suYWRkQ2xhc3MoY29uc3RhbnRzLlRBU0tfSE9WRVJFRF9DTEFTUyksXG4gICAgKCkgPT4gdGFzay5yZW1vdmVDbGFzcyhjb25zdGFudHMuVEFTS19IT1ZFUkVEX0NMQVNTKVxuICApO1xuICBcbiAgdGFzay5jbGljaygoKSA9PiB7XG4gICAgaWYoIWVkaXRpb25Gb3JtLmhhc0NsYXNzKGNvbnN0YW50cy5FRElUSU9OX0ZPUk1fVklTSUJMRV9DTEFTUykpIHtcbiAgICAgIGVkaXRpb25Gb3JtLmFkZENsYXNzKGNvbnN0YW50cy5FRElUSU9OX0ZPUk1fVklTSUJMRV9DTEFTUylcbiAgICB9XG5cbiAgICBkb2N1bWVudC5mb3Jtcy5lZGl0aW9uRm9ybS50aXRsZS52YWx1ZSA9IHRhc2suZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuICAgIGRvY3VtZW50LmZvcm1zLmVkaXRpb25Gb3JtLmRlc2NyaXB0aW9uLnZhbHVlID0gdGFzay5nZXRBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZG9jdW1lbnQuZm9ybXMuZWRpdGlvbkZvcm0ubm90aWZpY2F0aW9uVGltZS52YWx1ZSA9IHRhc2suZ2V0QXR0cmlidXRlKCdub3RpZmljYXRpb24tdGltZScpO1xuICAgIGRvY3VtZW50LmZvcm1zLmVkaXRpb25Gb3JtLmNvbXBsZXRlRGF0ZS52YWx1ZSA9IHRhc2suZ2V0QXR0cmlidXRlKCdjb21wbGV0ZS1kYXRlJyk7XG4gIH0pO1xufSk7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGpzL2NvbXBvbmVudHMvdGFzay1saXN0L3dpZGdldC5qc1xuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSByaWRlbDFlIG9uIDE4LzEwLzIwMTYuXG4gKi9cblxuZXhwb3J0IGNvbnN0IFRBU0tfSE9WRVJFRF9DTEFTUyA9ICd0YXNrX2hvdmVyZWQnO1xuZXhwb3J0IGNvbnN0IEVESVRJT05fRk9STV9WSVNJQkxFX0NMQVNTID0gJ2VkaXRpb24tZm9ybS1jb250YWluZXJfdmlzaWJsZSc7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKioganMvY29tcG9uZW50cy90YXNrLWxpc3QvY29uc3RhbnRzLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUFBOzs7Ozs7OztBQ0RBO0FBQ0E7QUFBQTs7Ozs7Ozs7QUNEQTtBQUNBOzs7OztBQUNBOzs7O0FBRUE7QUNFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QURDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVyQkE7Ozs7QUFJQTtBQUNBO0FEQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7Ozs7OztBQUlBOzs7Ozs7OztBRTNHQTtBQUNBOzs7OztBQUNBOzs7O0FBRUE7QUFDQTtBRkVBO0FBQUE7QUVBQTtBQUNBO0FGQUE7QUVBQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBOzs7QUFBQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFOQTs7OztBQU9BO0FIRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBSTlCQTs7OztBQUlBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==