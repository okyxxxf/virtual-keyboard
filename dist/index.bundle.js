/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_generateKeyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/generateKeyboard */ \"./modules/generateKeyboard.js\");\n/* harmony import */ var _modules_generateHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/generateHtml */ \"./modules/generateHtml.js\");\n\n\n\nwindow.onload = () => {\n  (0,_modules_generateHtml__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_modules_generateKeyboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n\n//# sourceURL=webpack://virtual-keyboard/./index.js?");

/***/ }),

/***/ "./modules/Button.js":
/*!***************************!*\
  !*** ./modules/Button.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\nclass Button {\n  constructor(height, width, value, color, secondValue = null) {\n    this.height = height;\n    this.width = width;\n    this.value = value;\n    this.color = color;\n    this.secondValue = secondValue;\n  }\n\n  createButton() {\n    const button = document.createElement('div');\n    button.style.height = this.height;\n    button.style.width = this.width;\n    button.style.backgroundColor = this.color;\n    button.className = \"button\";\n    button.innerText = this.value;\n    \n    return button;\n  }\n}\n\n\n//# sourceURL=webpack://virtual-keyboard/./modules/Button.js?");

/***/ }),

/***/ "./modules/generateHtml.js":
/*!*********************************!*\
  !*** ./modules/generateHtml.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateHtml)\n/* harmony export */ });\nfunction generateHtml() {\n  const body = document.querySelector('body');\n\n  const main = document.createElement('main');\n  main.className = 'main-page';\n\n  const sectionTextarea = document.createElement('section');\n  sectionTextarea.className = 'textarea';\n\n  const header = document.createElement('h1');\n  header.className = 'header';\n  header.innerText = 'Виртуальная клавиатура windows';\n\n  const textarea = document.createElement('textarea');\n  textarea.rows = 16;\n  textarea.cols = 80;\n\n  const sectionKeyboard = document.createElement('section');\n  sectionKeyboard.className = 'keyboard';\n\n  main.append(sectionTextarea);\n\n  sectionTextarea.append(header);\n  sectionTextarea.append(textarea);\n\n  main.append(sectionKeyboard);\n  body.append(main);\n}\n\n\n//# sourceURL=webpack://virtual-keyboard/./modules/generateHtml.js?");

/***/ }),

/***/ "./modules/generateKeyboard.js":
/*!*************************************!*\
  !*** ./modules/generateKeyboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateKeyboard)\n/* harmony export */ });\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./modules/Button.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ \"./modules/keys.js\");\n\r\n\r\n\r\nfunction generateKeyboard(){\r\n    let selectors = [\".firstStroke\", \".secondStroke\", \".thirdStroke\", \".fourthStroke\", \".fifthStroke\"];\r\n    const board = document.querySelector('.keyboard');\r\n\r\n    const firstStroke = document.createElement('div');\r\n    firstStroke.className = \"firstStroke\";\r\n\r\n    const secondStroke = document.createElement('div');\r\n    secondStroke.className = \"secondStroke\";\r\n\r\n    const thirdStroke = document.createElement('div');\r\n    thirdStroke.className = \"thirdStroke\";\r\n\r\n    const fourthStroke = document.createElement('div');\r\n    fourthStroke.className = \"fourthStroke\";\r\n\r\n    const fifthStroke = document.createElement('div');\r\n    fifthStroke.className = \"fifthStroke\";\r\n\r\n    board.append(firstStroke);\r\n    board.append(secondStroke);\r\n    board.append(thirdStroke);\r\n    board.append(fourthStroke);\r\n    board.append(fifthStroke);\r\n\r\n    for(let i = 0; i < _keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length; i++){\r\n        for(let j = 0; j < _keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].length; j++){\r\n            let button = new _Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"50px\", \"50px\", _keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i][j], \"gray\");\r\n            board.querySelector(selectors[i]).append(button.createButton());\r\n        }\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://virtual-keyboard/./modules/generateKeyboard.js?");

/***/ }),

/***/ "./modules/keys.js":
/*!*************************!*\
  !*** ./modules/keys.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst keys = [\r\n    [\"`\", \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"0\", \"-\", \"=\", \"Backspace\"],\r\n    [\"Tab\", \"q\", \"w\", \"e\", \"r\", \"t\", \"y\", \"u\", \"i\", \"o\", \"p\", \"[\", \"]\", \"\\\\\", \"Del\"],\r\n    [\"CapsLock\", \"a\", \"s\", \"d\", \"f\", \"g\", \"h\", \"j\", \"k\", \"l\", \";\", \"'\", \"Enter\"],\r\n    [\"Shift\", \"z\", \"x\", \"c\", \"v\", \"b\", \"n\", \"m\", \",\", \".\", \"/\", \"^\", \"Shift\"],\r\n    [\"Ctr\", \"Win\", \"Alt\", \"Space\", \"Alt\", \"<\", \"↓\", \">\", \"Ctrl\"]\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keys);\n\n//# sourceURL=webpack://virtual-keyboard/./modules/keys.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;