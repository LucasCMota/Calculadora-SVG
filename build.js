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
/***/ (function(module, exports, __webpack_require__) {

	var CalcController = __webpack_require__(1);
	window.calculator = new CalcController();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CalcController = function () {
	  function CalcController() {
	    _classCallCheck(this, CalcController);

	    this._displayCalcEl = document.querySelector('#display');
	    this._dateEl = document.querySelector('#data');
	    this._timeEl = document.querySelector('#hora');
	    this._currentDate = 0;
	    this.initializer();
	  }

	  _createClass(CalcController, [{
	    key: 'initializer',
	    value: function initializer() {
	      var _this = this;

	      setInterval(function () {
	        _this.displayDate = _this.currentDate.toLocaleDateString('pt-BR');
	        _this.displayTime = _this.currentDate.toLocaleTimeString('pt-BR');
	      }, 1000);
	    }
	  }, {
	    key: 'displayDate',
	    get: function get() {
	      return this._dateEl.innerHTML;
	    },
	    set: function set(value) {
	      return this._dateEl.innerHTML = new Date().toLocaleString('pt-br');
	    }
	  }, {
	    key: 'displayTime',
	    get: function get() {
	      return this._timeEl.innerHTML;
	    },
	    set: function set(value) {
	      return this._timeEl.innerHTML = value;
	    }
	  }, {
	    key: 'displayCalc',
	    get: function get() {
	      return this._displayCalcEl.innerHTML;
	    },
	    set: function set(value) {
	      this._displayCalcEl.innerHTML = value;
	    }
	  }, {
	    key: 'currrentDate',
	    get: function get() {
	      return new Date();
	    },
	    set: function set(value) {
	      this._currentDate = value;
	    }
	  }]);

	  return CalcController;
	}();

	module.exports = CalcController;

/***/ })
/******/ ]);