(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("node-blocks"));
	else if (typeof define === 'function' && define.amd)
		define(["nodeBlocks"], factory);
	else if (typeof exports === 'object')
		exports["example"] = factory(require("node-blocks"));
	else
		root["example"] = factory(root["nodeBlocks"]);
})(this, function (__WEBPACK_EXTERNAL_MODULE_1__) {
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

			var _nodeBlocks = __webpack_require__(1);

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}
				return call && (typeof call === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
				}
				subClass.prototype = Object.create(superClass && superClass.prototype,
						{constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
				if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) :
						subClass.__proto__ = superClass;
			}

			var doubler = new _nodeBlocks.Block({
				in: ["x"],
				out: ["d"]
			}, function (inp, out) {
				out.d.write(inp.x.read() * 2);
			});

			var AdderBlock = function (_Block) {
				_inherits(AdderBlock, _Block);

				function AdderBlock() {
					_classCallCheck(this, AdderBlock);

					return _possibleConstructorReturn(this, Object.getPrototypeOf(AdderBlock).call(this));
				}

				_createClass(AdderBlock, [{
					key: "getConfig",
					value: function getConfig() {
						return {
							in: ["x", "y"],
							out: ["sum"]
						};
					}
				}, {
					key: "run",
					value: function run(inp, out) {
						var sum = inp.x.read() + inp.y.read();
						out.sum.write(sum);
					}
				}]);

				return AdderBlock;
			}(_nodeBlocks.Block);

			var adder = new AdderBlock();

			adder.out.sum.connect(doubler.in.x);

			doubler.out.d.listen(function () {
				console.log("Double of Sum is ", doubler.out.d.read());
			});

			adder.in.x.write(10);
			adder.in.y.write(20);
			adder.in.x.write(30);
			adder.in.y.write(50);

			/***/
		},
		/* 1 */
		/***/ function (module, exports) {

			module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

			/***/
		}
		/******/])
});
;