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

			var _nodeBlocks = __webpack_require__(1);

			var a1 = new _nodeBlocks.Node();
			a1.listen(function () {
				console.log("a1 changed", a1.read());
			});

			var b1 = a1.transform(function (v) {
				return 2 * v;
			});
			b1.listen(function () {
				console.log("b1 changed", b1.read());
			});

			a1.write(10);
			a1.write(50);

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