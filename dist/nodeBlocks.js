(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if (typeof define === 'function' && define.amd)
		define([], factory);
	else if (typeof exports === 'object')
		exports["nodeBlocks"] = factory();
	else
		root["nodeBlocks"] = factory();
})(this, function () {
	return /******/ (function (modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/
		var installedModules = {};

		/******/ 	// The require function
		/******/
		function __webpack_require__(moduleId) {

			/******/ 		// Check if module is in cache
			/******/
			if (installedModules[moduleId])
			/******/      return installedModules[moduleId].exports;

			/******/ 		// Create a new module (and put it into the cache)
			/******/
			var module = installedModules[moduleId] = {
				/******/      exports: {},
				/******/      id: moduleId,
				/******/      loaded: false
				/******/
			};

			/******/ 		// Execute the module function
			/******/
			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ 		// Flag the module as loaded
			/******/
			module.loaded = true;

			/******/ 		// Return the exports of the module
			/******/
			return module.exports;
			/******/
		}


		/******/ 	// expose the modules object (__webpack_modules__)
		/******/
		__webpack_require__.m = modules;

		/******/ 	// expose the module cache
		/******/
		__webpack_require__.c = installedModules;

		/******/ 	// __webpack_public_path__
		/******/
		__webpack_require__.p = "";

		/******/ 	// Load entry module and return exports
		/******/
		return __webpack_require__(0);
		/******/
	})
	/************************************************************************/
	/******/([
		/* 0 */
		/***/ function (module, exports, __webpack_require__) {

			'use strict';

			var _EventBus = __webpack_require__(2);

			var _EventBus2 = _interopRequireDefault(_EventBus);

			var _Node = __webpack_require__(3);

			var _Node2 = _interopRequireDefault(_Node);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : {default: obj};
			}

			module.exports = {
				Node: _Node2.default
			};

			/***/
		},
		/* 1 */,
		/* 2 */
		/***/ function (module, exports) {

			"use strict";

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor;
				};
			}();

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			var EventBus = function () {
				function EventBus() {
					_classCallCheck(this, EventBus);

					this._topicList = {};
					this._globalCallbackList = [];
				}

				_createClass(EventBus, [{
					key: "subscribe",
					value: function subscribe(topic, callback) {
						var _this = this;

						if (typeof topic !== "string" || typeof callback !== "function") {
							throw "EventBus Unable to subscribe - topic is not string or callback is not a function";
				}
						if (this._topicList[topic] === undefined) {
							this._topicList[topic] = [];
						}

						var i = this._topicList[topic].push(callback) - 1;

						//UnSub function !!
						return function () {
							//Setting Callback as null;
							_this._topicList[topic][i] = null;
						};
					}
				}, {
					key: "subscribeAll",
					value: function subscribeAll(callback) {
						var _this2 = this;

						var i = this._globalCallbackList.push(callback) - 1;
						return function () {
							_this2._globalCallbackList[i] = null;
						};
					}
				}, {
					key: "publish",
					value: function publish(topic) {
						for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
							args[_key - 1] = arguments[_key];
						}

						if (this._topicList[topic] !== undefined) {
							this._topicList[topic].map(function (callback) {
								if (callback !== null) {
									//SKIP the unsubscribed callback !
									callback.apply(null, args);
						}
							});
						}
						this._globalCallbackList.map(function (callback) {
							if (callback !== null) {
								//SKIP the unsubscribed callback !
								callback.apply(null, [topic].concat(args));
					}
						});
					}
				}]);

				return EventBus;
			}();

			exports.default = EventBus;

			/***/
		},
		/* 3 */
		/***/ function (module, exports, __webpack_require__) {

			'use strict';

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor;
				};
			}();
			/**
			 * Created by narendrasisodiya on 09/01/16.
			 */

				//Base Node Class Define very simple Basic Node
				//  You can read/write on a Node
				//  You can listen changes on a Node
				//  Node act as variable container

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _EventBus = __webpack_require__(2);

			var _EventBus2 = _interopRequireDefault(_EventBus);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : {default: obj};
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			var changeEvtName = 'onChange';

			var Node = function () {
				function Node(value) {
					_classCallCheck(this, Node);

					this._value = value;
					this._ebus = new _EventBus2.default();
				}

				_createClass(Node, [{
					key: 'listen',
					value: function listen(callback) {
						return this._ebus.subscribe(changeEvtName, callback);
					}
				}, {
					key: 'write',
					value: function write(value) {
						this._value = value;
						this._ebus.publish(changeEvtName);
					}
				}, {
					key: 'read',
					value: function read(value) {
						return this._value;
					}
				}, {
					key: 'transform',
					value: function transform(callback) {
						var _this = this;

						var a = new Node();
						this.listen(function () {
							a.write(callback(_this.read()));
						});
						return a;
					}
				}]);

				return Node;
			}();

			exports.default = Node;

			/***/
		}
		/******/])
});
;