module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/devinzimmerman/Repositories/Portfolio_V4/client/components/Button.js";


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.5rem;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n\n  padding: 1.1rem 3rem;\n  border-radius: 3rem;\n  cursor: pointer;\n\n  ", "\n\n  &:focus {\n    outline: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: ", ";\n    border-color: ", ";\n\n    background-color: rgba(0, 0, 0, 0);\n    transition: all 0.3s;\n\n    &:hover {\n      background-color: ", ";\n      transform: translateY(-3px);\n      box-shadow: ", ";\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: ", ";\n\n    background-color: ", ";\n    transition: all 0.3s;\n\n    &:hover {\n      transform: translateY(-3px);\n      box-shadow: ", ";\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var BUTTON_COLORS = {
  primary: function primary(_ref) {
    var theme = _ref.theme;
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject(), theme.colorWhite, theme.colorPrimary, theme.boxShadow());
  },
  light: function light(_ref2) {
    var theme = _ref2.theme;
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2(), theme.colorWhite, theme.colorWhite, theme.colorPrimary, theme.boxShadow());
  }
};
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button(_templateObject3(), function (props) {
  return BUTTON_COLORS[props.color](props);
});

var Button = function Button(props) {
  var children = props.children,
      color = props.color;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledButton, {
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Chip.js":
/*!****************************!*\
  !*** ./components/Chip.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _themes_portfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../themes/portfolio */ "./themes/portfolio.js");
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Heading */ "./components/Heading.js");
/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Paragraph */ "./components/Paragraph.js");

var _jsxFileName = "/Users/devinzimmerman/Repositories/Portfolio_V4/client/components/Chip.js";


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 20rem;\n  margin-bottom: 2rem;\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var StyledChip = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());
var StyledChipImg = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img(_templateObject2());

var Chip = function Chip(_ref) {
  var details = _ref.details,
      src = _ref.src,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledChip, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledChipImg, {
    src: src,
    alt: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    align: "center",
    size: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, title), details.map(function (deet) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Paragraph__WEBPACK_IMPORTED_MODULE_6__["default"], {
      align: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, deet);
  }));
};

Chip.propTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired,
  src: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Chip);

/***/ }),

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/devinzimmerman/Repositories/Portfolio_V4/client/components/Container.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 auto;\n  max-width: 114rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());

var Container = function Container(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledContainer, {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/Heading.js":
/*!*******************************!*\
  !*** ./components/Heading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _themes_portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../themes/portfolio */ "./themes/portfolio.js");


var _jsxFileName = "/Users/devinzimmerman/Repositories/Portfolio_V4/client/components/Heading.js";


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 1.7rem;\n  letter-spacing: 2px;\n  line-height: 1.15;\n  text-align: ", ";\n  text-transform: uppercase;\n\n  margin-bottom: 1.2rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 4.5rem;\n  font-weight: 700;\n  text-align: ", ";\n\n  margin-bottom: 2rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var HEADING_COLOR = {
  black: _themes_portfolio__WEBPACK_IMPORTED_MODULE_5__["default"].colorBlack,
  white: _themes_portfolio__WEBPACK_IMPORTED_MODULE_5__["default"].colorWhite
};
var StyledHeading1 = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h1(_templateObject(), function (props) {
  return HEADING_COLOR[props.color] || props.theme.colorBlack;
}, function (props) {
  return props.theme.fontFamilyPrimary;
}, function (props) {
  return props.align || 'left';
});
var StyledHeading3 = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h3(_templateObject2(), function (props) {
  return HEADING_COLOR[props.color] || props.theme.colorBlack;
}, function (props) {
  return props.theme.fontFamilyPrimary;
}, function (props) {
  return props.align || 'left';
});
var HeadingObj = {
  1: function _(props) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledHeading1, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }));
  },
  3: function _(props) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledHeading3, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }));
  }
};

var Heading = function Heading(props) {
  var size = props.size;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, HeadingObj[size](props));
};

Heading.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([1, 2, 3, 4, 5]).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "./components/Paragraph.js":
/*!*********************************!*\
  !*** ./components/Paragraph.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _themes_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes/portfolio */ "./themes/portfolio.js");

var _jsxFileName = "/Users/devinzimmerman/Repositories/Portfolio_V4/client/components/Paragraph.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: ", ";\n  font-size: 1.8rem;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var StyledParagraph = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p(_templateObject(), function (props) {
  return props.theme.colorGrey;
}, function (props) {
  return props.align || 'left';
});

var Paragraph = function Paragraph(_ref) {
  var align = _ref.align,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledParagraph, {
    align: align,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Paragraph);

/***/ }),

/***/ "./components/Section.js":
/*!*******************************!*\
  !*** ./components/Section.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/devinzimmerman/Repositories/Portfolio_V4/client/components/Section.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 14rem 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var StyledSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section(_templateObject());

var Section = function Section(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./data/employment.js":
/*!****************************!*\
  !*** ./data/employment.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var employmentData = [{
  src: '/static/gaia.png',
  title: 'Front End Software Engineer',
  details: ['Gaia Inc.', 'November 2018 - April 2019']
}, {
  src: '/static/groovytek-logo.png',
  title: 'Front End Software Engineer',
  details: ['GroovyTek', 'July 2018 - November 2018']
}, {
  src: '/static/ud-logo.png',
  title: 'Teaching Assistant - Web Developement',
  details: ['University of Denver', 'April 2017 - Present']
}, {
  src: '/static/ebpg-logo.png',
  title: 'Internal Business Consultant',
  details: ['Estate and Business Planning Group', 'August 2012 - January 2018']
}];
/* harmony default export */ __webpack_exports__["default"] = (employmentData);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themes_portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../themes/portfolio */ "./themes/portfolio.js");
/* harmony import */ var _themes_globalStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes/globalStyle */ "./themes/globalStyle.js");
/* harmony import */ var _sections_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/Banner */ "./sections/Banner.js");
/* harmony import */ var _sections_Employment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/Employment */ "./sections/Employment.js");
var _jsxFileName = "/Users/devinzimmerman/Repositories/Portfolio_V4/client/pages/index.js";








var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _themes_portfolio__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_themes_globalStyle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_Banner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_Employment__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./sections/Banner.js":
/*!****************************!*\
  !*** ./sections/Banner.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _themes_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes/portfolio */ "./themes/portfolio.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");

var _jsxFileName = "/Users/devinzimmerman/Repositories/Portfolio_V4/client/sections/Banner.js";


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding-top: 22rem;\n\n  & .title {\n    color: ", ";\n    font-family: ", ";\n    font-size: 7rem;\n    font-weight: 600;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n\n    margin-bottom: 2rem;\n  }\n\n  & .sub-text {\n    color: ", ";\n    font-family: ", ";\n    font-size: 2rem;\n    letter-spacing: 2px;\n\n    margin-bottom: 10rem;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 95vh;\n  background-image: ", ", url('/static/devin-1.jpg');\n  background-size: cover;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var StyledBanner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section(_templateObject(), _themes_portfolio__WEBPACK_IMPORTED_MODULE_3__["default"].backgroundImage());
var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2(), function (props) {
  return props.theme.colorWhite;
}, function (props) {
  return props.theme.fontFamilyPrimary;
}, function (props) {
  return props.theme.colorWhite;
}, function (props) {
  return props.theme.fontFamilyPrimary;
});

var Banner = function Banner() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledBanner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledHeader, {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Devin Zimmerman"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sub-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Full Stack Web Developer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Portfolio"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./sections/Employment.js":
/*!********************************!*\
  !*** ./sections/Employment.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _themes_portfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../themes/portfolio */ "./themes/portfolio.js");
/* harmony import */ var _data_employment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/employment */ "./data/employment.js");
/* harmony import */ var _components_Chip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Chip */ "./components/Chip.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Heading */ "./components/Heading.js");
/* harmony import */ var _components_Paragraph__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Paragraph */ "./components/Paragraph.js");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Section */ "./components/Section.js");


var _jsxFileName = "/Users/devinzimmerman/Repositories/Portfolio_V4/client/sections/Employment.js";


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));\n  grid-column-gap: 5rem;\n  grid-row-gap: 5rem;\n\n  margin-top: 7rem;\n\n  @media only screen and (max-width: 600px) {\n      margin-top: 0;\n    } \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var StyledEmployment = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.section(_templateObject(), _themes_portfolio__WEBPACK_IMPORTED_MODULE_4__["default"].colorGreyLightest);
var StyledEmploymentChips = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2());

var Employment = function Employment() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledEmployment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Section__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    align: "center",
    color: "black",
    size: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Employment History"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Paragraph__WEBPACK_IMPORTED_MODULE_9__["default"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "A Web Developer with Client-Centric Sensibilities."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Paragraph__WEBPACK_IMPORTED_MODULE_9__["default"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Click Image"), " for More Details"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledEmploymentChips, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, _data_employment__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (data) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Chip__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Employment);

/***/ }),

/***/ "./themes/globalStyle.js":
/*!*******************************!*\
  !*** ./themes/globalStyle.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio */ "./themes/portfolio.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,800');\n\n  *, *::after, *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: 62.5%;\n    padding: 2rem;\n\n    @media only screen and (max-width: 1200px) {\n      font-size: 56.25%;\n      padding: 0; \n    } \n\n    @media only screen and (max-width: 900px) {\n      font-size: 50%;\n    } \n\n  }\n\n  body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    border: 0;\n    box-sizing: border-box;\n    font-family: ", ";\n    vertical-align: baseline;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  body {\n    line-height: 1;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), _portfolio__WEBPACK_IMPORTED_MODULE_2__["default"].fontFamilyPrimary);
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./themes/portfolio.js":
/*!*****************************!*\
  !*** ./themes/portfolio.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var portfolioTheme = {
  // Box Shadow Primary
  boxShadow: function boxShadow() {
    return "0 0.8rem 1rem -0.5rem rgba(".concat(this.colorPrimaryDarkerRGB, ", 0.6)");
  },
  // Background Image
  backgroundImage: function backgroundImage() {
    return "linear-gradient(to left bottom, rgba(".concat(this.colorGreyDarkRGB, ", 0.6), rgba(").concat(this.colorGreyDarkRGB, ", 0.6))");
  },
  // Color Primary
  colorPrimary: '#639',
  colorPrimaryDarker: '#2F1846',
  colorPrimaryDarkerRGB: '47, 24, 70',
  // Color Grey
  colorGreyLightest: '#E6E6E6',
  colorGreyLighter: '#C1C2C2',
  colorGrey: '#78797A',
  colorGreyRGB: '120, 121, 122',
  colorGreyDark: '#585959',
  colorGreyDarkRGB: '88, 89, 89',
  // Color Misc
  colorWhite: '#ffffff',
  colorBlack: '#000000',
  // Font Family
  fontFamilyPrimary: '"Raleway", sans-serif'
};
/* harmony default export */ __webpack_exports__["default"] = (portfolioTheme);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/devinzimmerman/Repositories/Portfolio_V4/client/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map