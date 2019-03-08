webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Chip.js":
/*!****************************!*\
  !*** ./components/Chip.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _themes_portfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../themes/portfolio */ "./themes/portfolio.js");
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Heading */ "./components/Heading.js");
/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Paragraph */ "./components/Paragraph.js");

var _jsxFileName = "/Users/devinzimmerman/Repositories/Portfolio_V4/client/components/Chip.js";


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 20rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var StyledChip = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var StyledChipImg = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img(_templateObject2());

var Chip = function Chip(_ref) {
  var details = _ref.details,
      src = _ref.src,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledChip, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledChipImg, {
    src: src,
    alt: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    align: "center",
    size: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, title), details.map(function (deet) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Paragraph__WEBPACK_IMPORTED_MODULE_6__["default"], {
      align: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
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

/***/ })

})
//# sourceMappingURL=index.js.fe0d50d7e817348177f5.hot-update.js.map