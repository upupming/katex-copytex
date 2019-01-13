/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/katex-copytex.webpack.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/katex-copytex.css":
/*!*******************************!*\
  !*** ./src/katex-copytex.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/katex-copytex.js":
/*!******************************!*\
  !*** ./src/katex-copytex.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _katex2tex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./katex2tex */ "./src/katex2tex.js");
 // Global copy handler to modify behavior on .katex elements.

document.addEventListener('copy', function (event) {
  const selection = window.getSelection();

  if (selection.isCollapsed) {
    return; // default action OK if selection is empty
  }

  const fragment = selection.getRangeAt(0).cloneContents();

  if (!fragment.querySelector('.katex-mathml')) {
    return; // default action OK if no .katex-mathml elements
  } // Preserve usual HTML copy/paste behavior.


  const html = [];

  for (let i = 0; i < fragment.childNodes.length; i++) {
    html.push(fragment.childNodes[i].outerHTML);
  }

  event.clipboardData.setData('text/html', html.join('')); // Rewrite plain-text version.

  event.clipboardData.setData('text/plain', Object(_katex2tex__WEBPACK_IMPORTED_MODULE_0__["default"])(fragment).textContent); // Prevent normal copy handling.

  event.preventDefault();
});

/***/ }),

/***/ "./src/katex-copytex.webpack.js":
/*!**************************************!*\
  !*** ./src/katex-copytex.webpack.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _katex_copytex_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./katex-copytex.css */ "./src/katex-copytex.css");
/* harmony import */ var _katex_copytex_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_katex_copytex_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _katex_copytex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./katex-copytex.js */ "./src/katex-copytex.js");
/**
 * This is the webpack entry point for KaTeX. As ECMAScript doesn't support
 * CSS modules natively, a separate entry point is used.
 */



/***/ }),

/***/ "./src/katex2tex.js":
/*!**************************!*\
  !*** ./src/katex2tex.js ***!
  \**************************/
/*! exports provided: defaultCopyDelimiters, katexReplaceWithTex, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCopyDelimiters", function() { return defaultCopyDelimiters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "katexReplaceWithTex", function() { return katexReplaceWithTex; });
// Set these to how you want inline and display math to be delimited.
const defaultCopyDelimiters = {
  inline: ['$', '$'],
  // alternative: ['\(', '\)']
  display: ['$$', '$$'] // alternative: ['\[', '\]']

}; // Replace .katex elements with their TeX source (<annotation> element).
// Modifies fragment in-place.  Useful for writing your own 'copy' handler,
// as in copy-tex.js.

const katexReplaceWithTex = function (fragment, copyDelimiters = defaultCopyDelimiters) {
  // Remove .katex-html blocks that are preceded by .katex-mathml blocks
  // (which will get replaced below).
  const katexHtml = fragment.querySelectorAll('.katex-mathml + .katex-html');

  for (let i = 0; i < katexHtml.length; i++) {
    const element = katexHtml[i];

    if (element.remove) {
      element.remove(null);
    } else {
      element.parentNode.removeChild(element);
    }
  } // Replace .katex-mathml elements with their annotation (TeX source)
  // descendant, with inline delimiters.


  const katexMathml = fragment.querySelectorAll('.katex-mathml');

  for (let i = 0; i < katexMathml.length; i++) {
    const element = katexMathml[i];
    const texSource = element.querySelector('annotation');

    if (texSource) {
      if (element.replaceWith) {
        element.replaceWith(texSource);
      } else {
        element.parentNode.replaceChild(texSource, element);
      }

      texSource.innerHTML = copyDelimiters.inline[0] + texSource.innerHTML.trim() + copyDelimiters.inline[1];
    }
  } // Switch display math to display delimiters.


  const displays = fragment.querySelectorAll('.katex-display annotation');

  for (let i = 0; i < displays.length; i++) {
    const element = displays[i];
    element.innerHTML = copyDelimiters.display[0] + '\n' + element.innerHTML.substr(copyDelimiters.inline[0].length, element.innerHTML.length - copyDelimiters.inline[0].length - copyDelimiters.inline[1].length) + '\n' + copyDelimiters.display[1];
  }

  return fragment;
};
/* harmony default export */ __webpack_exports__["default"] = (katexReplaceWithTex);

/***/ })

/******/ });