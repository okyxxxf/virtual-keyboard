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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\nclass Button {\n  constructor(\n    height,\n    width,\n    caseDownRu,\n    caseUpRu,\n    capsRu,\n    shiftCapsRu,\n    caseDownEng,\n    caseUpEng,\n    capsEng,\n    shiftCapsEng,\n  ) {\n    this.height = height;\n    this.width = width;\n    this.caseDownRu = caseDownRu;\n    this.caseUpRu = caseUpRu;\n    this.capsRu = capsRu;\n    this.shiftCapsRu = shiftCapsRu;\n    this.caseDownEng = caseDownEng;\n    this.caseUpEng = caseUpEng;\n    this.capsEng = capsEng;\n    this.shiftCapsEng = shiftCapsEng;\n  }\n\n  createButton() {\n    const button = document.createElement('div');\n    button.style.height = this.height;\n    button.style.width = this.width;\n    button.className = 'button';\n\n    const ru = document.createElement('span');\n    const eng = document.createElement('span');\n\n    const caseDownRu = document.createElement('span');\n    caseDownRu.className = 'caseDownRu';\n    caseDownRu.innerText = this.caseDownRu;\n    caseDownRu.classList.add('hidden');\n\n    const caseUpRu = document.createElement('span');\n    caseUpRu.className = 'caseUpRu';\n    caseUpRu.innerText = this.caseUpRu;\n    caseUpRu.classList.add('hidden');\n\n    const capsRu = document.createElement('span');\n    capsRu.className = 'capsRu';\n    capsRu.innerText = this.capsRu;\n    capsRu.classList.add('hidden');\n\n    const shiftCapsRu = document.createElement('span');\n    shiftCapsRu.className = 'shiftCapsRu';\n    shiftCapsRu.innerText = this.shiftCapsRu;\n    shiftCapsRu.classList.add('hidden');\n\n    const caseDownEng = document.createElement('span');\n    caseDownEng.className = 'caseDownEng';\n    caseDownEng.innerText = this.caseDownEng;\n    caseDownEng.classList.add('hidden');\n\n    const caseUpEng = document.createElement('span');\n    caseUpEng.className = 'caseUpEng';\n    caseUpEng.innerText = this.caseUpEng;\n    caseUpEng.classList.add('hidden');\n\n    const capsEng = document.createElement('span');\n    capsEng.className = 'capsEng';\n    capsEng.innerText = this.capsEng;\n    capsEng.classList.add('hidden');\n\n    const shiftCapsEng = document.createElement('span');\n    shiftCapsEng.className = 'shiftCapsEng';\n    shiftCapsEng.innerText = this.shiftCapsEng;\n    shiftCapsEng.classList.add('hidden');\n\n    ru.append(caseDownRu);\n    ru.append(caseUpRu);\n    ru.append(capsRu);\n    ru.append(shiftCapsRu);\n\n    eng.append(caseDownEng);\n    eng.append(caseUpEng);\n    eng.append(capsEng);\n    eng.append(shiftCapsEng);\n\n    button.append(ru);\n    button.append(eng);\n\n    return button;\n  }\n}\n\n\n//# sourceURL=webpack://virtual-keyboard/./modules/Button.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateKeyboard)\n/* harmony export */ });\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./modules/Button.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ \"./modules/keys.js\");\n\n\n\nfunction generateKeyboard() {\n  const selectors = ['.firstStroke', '.secondStroke', '.thirdStroke', '.fourthStroke', '.fifthStroke'];\n  const board = document.querySelector('.keyboard');\n\n  const firstStroke = document.createElement('div');\n  firstStroke.className = 'firstStroke';\n\n  const secondStroke = document.createElement('div');\n  secondStroke.className = 'secondStroke';\n\n  const thirdStroke = document.createElement('div');\n  thirdStroke.className = 'thirdStroke';\n\n  const fourthStroke = document.createElement('div');\n  fourthStroke.className = 'fourthStroke';\n\n  const fifthStroke = document.createElement('div');\n  fifthStroke.className = 'fifthStroke';\n\n  board.append(firstStroke);\n  board.append(secondStroke);\n  board.append(thirdStroke);\n  board.append(fourthStroke);\n  board.append(fifthStroke);\n\n  for (let i = 0; i < _keys__WEBPACK_IMPORTED_MODULE_1__.caseDownEng.length; i += 1) {\n    for (let j = 0; j < _keys__WEBPACK_IMPORTED_MODULE_1__.caseDownEng[i].length; j += 1) {\n      const button = new _Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('50px', '50px', _keys__WEBPACK_IMPORTED_MODULE_1__.caseDownRu[i][j], _keys__WEBPACK_IMPORTED_MODULE_1__.caseUpRu[i][j], _keys__WEBPACK_IMPORTED_MODULE_1__.capsRu[i][j], _keys__WEBPACK_IMPORTED_MODULE_1__.shiftCapsRu[i][j], _keys__WEBPACK_IMPORTED_MODULE_1__.caseDownEng[i][j], _keys__WEBPACK_IMPORTED_MODULE_1__.caseUpEng[i][j], _keys__WEBPACK_IMPORTED_MODULE_1__.capsEng[i][j], _keys__WEBPACK_IMPORTED_MODULE_1__.shiftCapsEng[i][j]);\n      const newButton = button.createButton();\n\n      board.querySelector(selectors[i]).append(newButton);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://virtual-keyboard/./modules/generateKeyboard.js?");

/***/ }),

/***/ "./modules/keys.js":
/*!*************************!*\
  !*** ./modules/keys.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capsEng\": () => (/* binding */ capsEng),\n/* harmony export */   \"capsRu\": () => (/* binding */ capsRu),\n/* harmony export */   \"caseDownEng\": () => (/* binding */ caseDownEng),\n/* harmony export */   \"caseDownRu\": () => (/* binding */ caseDownRu),\n/* harmony export */   \"caseUpEng\": () => (/* binding */ caseUpEng),\n/* harmony export */   \"caseUpRu\": () => (/* binding */ caseUpRu),\n/* harmony export */   \"shiftCapsEng\": () => (/* binding */ shiftCapsEng),\n/* harmony export */   \"shiftCapsRu\": () => (/* binding */ shiftCapsRu)\n/* harmony export */ });\nconst caseDownEng = [\n  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],\n  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\\\', 'Del'],\n  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', \"'\", 'Enter'],\n  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],\n  ['Ctr', 'Win', 'Alt', 'Space', '←', '↓', '→', 'Alt', 'Ctrl'],\n];\n\nconst caseDownRu = [\n  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],\n  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\\\', 'Del'],\n  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],\n  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift'],\n  ['Ctr', 'Win', 'Alt', 'Space', '←', '↓', '→', 'Alt', 'Ctrl'],\n];\n\nconst caseUpEng = [\n  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],\n  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],\n  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '\"', 'Enter'],\n  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift'],\n  ['Ctr', 'Win', 'Alt', 'Space', '←', '↓', '→', 'Alt', 'Ctrl'],\n];\n\nconst caseUpRu = [\n  ['Ё', '!', '\"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],\n  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],\n  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],\n  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift'],\n  ['Ctr', 'Win', 'Alt', 'Space', '←', '↓', '→', 'Alt', 'Ctrl'],\n];\n\nconst capsEng = [\n  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],\n  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\\\', 'Del'],\n  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', \"'\", 'Enter'],\n  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift'],\n  ['Ctr', 'Win', 'Alt', 'Space', '←', '↓', '→', 'Alt', 'Ctrl'],\n];\n\nconst capsRu = [\n  ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],\n  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\\\', 'Del'],\n  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],\n  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '↑', 'Shift'],\n  ['Ctr', 'Win', 'Alt', 'Space', '←', '↓', '→', 'Alt', 'Ctrl'],\n];\n\nconst shiftCapsEng = [\n  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],\n  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del'],\n  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '\"', 'Enter'],\n  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '↑', 'Shift'],\n  ['Ctr', 'Win', 'Alt', 'Space', '←', '↓', '→', 'Alt', 'Ctrl'],\n];\n\nconst shiftCapsRu = [\n  ['ё', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],\n  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del'],\n  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],\n  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '↑', 'Shift'],\n  ['Ctr', 'Win', 'Alt', 'Space', '←', '↓', '→', 'Alt', 'Ctrl'],\n];\n\n\n\n\n//# sourceURL=webpack://virtual-keyboard/./modules/keys.js?");

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