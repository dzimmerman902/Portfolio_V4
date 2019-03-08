webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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
var StyledHeading1 = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1(_templateObject(), function (props) {
  return HEADING_COLOR[props.color] || props.theme.colorBlack;
}, function (props) {
  return props.theme.fontFamilyPrimary;
}, function (props) {
  return props.align || 'left';
});
var StyledHeading3 = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h3(_templateObject2(), function (props) {
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

/***/ })

})
//# sourceMappingURL=index.js.1b433bd97a20c91b9b4c.hot-update.js.map