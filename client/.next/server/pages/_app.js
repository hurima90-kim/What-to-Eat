"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/createEmotionCache.js":
/*!***********************************!*\
  !*** ./src/createEmotionCache.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction createEmotionCache() {\n  return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({\n    key: 'css',\n    prepend: true\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3JlYXRlRW1vdGlvbkNhY2hlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRWUsU0FBU0Msa0JBQVQsR0FBOEI7QUFDM0MsU0FBT0QscURBQVcsQ0FBQztBQUFFRSxJQUFBQSxHQUFHLEVBQUUsS0FBUDtBQUFjQyxJQUFBQSxPQUFPLEVBQUU7QUFBdkIsR0FBRCxDQUFsQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2hhdC10by1lYXQvLi9zcmMvY3JlYXRlRW1vdGlvbkNhY2hlLmpzP2NjMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRW1vdGlvbkNhY2hlKCkge1xuICByZXR1cm4gY3JlYXRlQ2FjaGUoeyBrZXk6ICdjc3MnLCBwcmVwZW5kOiB0cnVlIH0pO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNhY2hlIiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwia2V5IiwicHJlcGVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/createEmotionCache.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/theme */ \"./src/theme/theme.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _createEmotionCache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../createEmotionCache */ \"./src/createEmotionCache.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/jason_kim/Desktop/Dev/what-to-eat/client/src/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nconst clientSideEmotionCache = (0,_createEmotionCache__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\nfunction App(props) {\n  const {\n    Component,\n    emotionCache = clientSideEmotionCache,\n    pageProps\n  } = props;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_5__.CacheProvider, {\n    value: emotionCache,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"meta\", {\n        charSet: \"utf-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        rel: \"shortcut icon\",\n        href: \"/images/favicon.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"title\", {\n        children: \"WhatToEat\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n      theme: _theme_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CssBaseline, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n\nApp.propTypes = {\n  Component: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().elementType.isRequired),\n  emotionCache: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),\n  pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1RLHNCQUFzQixHQUFHRCwrREFBa0IsRUFBakQ7O0FBRUEsU0FBU0UsR0FBVCxDQUFhQyxLQUFiLEVBQW9CO0FBQ2xCLFFBQU07QUFBRUMsSUFBQUEsU0FBRjtBQUFhQyxJQUFBQSxZQUFZLEdBQUdKLHNCQUE1QjtBQUFvREssSUFBQUE7QUFBcEQsTUFBa0VILEtBQXhFO0FBRUEsc0JBQ0UsOERBQUMseURBQUQ7QUFBZSxTQUFLLEVBQUVFLFlBQXRCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFNLGVBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sV0FBRyxFQUFDLGVBQVY7QUFBMEIsWUFBSSxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFPRSw4REFBQyx3REFBRDtBQUFlLFdBQUssRUFBRVAsb0RBQXRCO0FBQUEsOEJBQ0UsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsU0FBRCxvQkFBZVEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDs7QUFFREosR0FBRyxDQUFDSyxTQUFKLEdBQWdCO0FBQ2RILEVBQUFBLFNBQVMsRUFBRVYsMEVBREc7QUFFZFcsRUFBQUEsWUFBWSxFQUFFWCwwREFGQTtBQUdkWSxFQUFBQSxTQUFTLEVBQUVaLHFFQUEyQmU7QUFIeEIsQ0FBaEI7QUFNQSxpRUFBZVAsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3doYXQtdG8tZWF0Ly4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBDc3NCYXNlbGluZSwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lL3RoZW1lJztcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgY3JlYXRlRW1vdGlvbkNhY2hlIGZyb20gJy4uL2NyZWF0ZUVtb3Rpb25DYWNoZSc7XG5cbmNvbnN0IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKTtcblxuZnVuY3Rpb24gQXBwKHByb3BzKSB7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBlbW90aW9uQ2FjaGUgPSBjbGllbnRTaWRlRW1vdGlvbkNhY2hlLCBwYWdlUHJvcHMgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPENhY2hlUHJvdmlkZXIgdmFsdWU9e2Vtb3Rpb25DYWNoZX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvaW1hZ2VzL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgICAgPHRpdGxlPldoYXRUb0VhdDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvQ2FjaGVQcm92aWRlcj5cbiAgKTtcbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcbiAgZW1vdGlvbkNhY2hlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkhlYWQiLCJDc3NCYXNlbGluZSIsIlRoZW1lUHJvdmlkZXIiLCJ0aGVtZSIsIkNhY2hlUHJvdmlkZXIiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJjbGllbnRTaWRlRW1vdGlvbkNhY2hlIiwiQXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJlbW90aW9uQ2FjaGUiLCJwYWdlUHJvcHMiLCJwcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/theme/theme.js":
/*!****************************!*\
  !*** ./src/theme/theme.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n  palette: {\n    primary: {\n      light: '#69696a',\n      main: '#28282a',\n      dark: '#1e1e1f'\n    },\n    secondary: {\n      light: '#fff5f8',\n      main: '#ff3366',\n      dark: '#e62958'\n    },\n    warning: {\n      main: '#ffc071',\n      dark: '#ffb25e'\n    },\n    error: {\n      light: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red[50],\n      main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red[500],\n      dark: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red[700]\n    },\n    success: {\n      light: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.green[50],\n      main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.green[500],\n      dark: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.green[700]\n    }\n  },\n  typography: {\n    fontFamily: \"'Work Sans', sans-serif\",\n    fontSize: 14,\n    fontWeightLight: 300,\n    fontWeightRegular: 400,\n    fontWeightMedium: 500,\n    fontWeightBold: 700\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUcsS0FBSyxHQUFHSCwwREFBVyxDQUFDO0FBQ3hCSSxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLEtBQUssRUFBRSxTQURBO0FBRVBDLE1BQUFBLElBQUksRUFBRSxTQUZDO0FBR1BDLE1BQUFBLElBQUksRUFBRTtBQUhDLEtBREY7QUFNUEMsSUFBQUEsU0FBUyxFQUFFO0FBQ1RILE1BQUFBLEtBQUssRUFBRSxTQURFO0FBRVRDLE1BQUFBLElBQUksRUFBRSxTQUZHO0FBR1RDLE1BQUFBLElBQUksRUFBRTtBQUhHLEtBTko7QUFXUEUsSUFBQUEsT0FBTyxFQUFFO0FBQ1BILE1BQUFBLElBQUksRUFBRSxTQURDO0FBRVBDLE1BQUFBLElBQUksRUFBRTtBQUZDLEtBWEY7QUFlUEcsSUFBQUEsS0FBSyxFQUFFO0FBQ0xMLE1BQUFBLEtBQUssRUFBRUoseURBREY7QUFFTEssTUFBQUEsSUFBSSxFQUFFTCwwREFGRDtBQUdMTSxNQUFBQSxJQUFJLEVBQUVOLDBEQUFHO0FBSEosS0FmQTtBQW9CUFUsSUFBQUEsT0FBTyxFQUFFO0FBQ1BOLE1BQUFBLEtBQUssRUFBRUwsMkRBREE7QUFFUE0sTUFBQUEsSUFBSSxFQUFFTiw0REFGQztBQUdQTyxNQUFBQSxJQUFJLEVBQUVQLDREQUFLO0FBSEo7QUFwQkYsR0FEZTtBQTJCeEJZLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxVQUFVLEVBQUUseUJBREY7QUFFVkMsSUFBQUEsUUFBUSxFQUFFLEVBRkE7QUFHVkMsSUFBQUEsZUFBZSxFQUFFLEdBSFA7QUFJVkMsSUFBQUEsaUJBQWlCLEVBQUUsR0FKVDtBQUtWQyxJQUFBQSxnQkFBZ0IsRUFBRSxHQUxSO0FBTVZDLElBQUFBLGNBQWMsRUFBRTtBQU5OO0FBM0JZLENBQUQsQ0FBekI7QUFxQ0EsaUVBQWVoQixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2hhdC10by1lYXQvLi9zcmMvdGhlbWUvdGhlbWUuanM/NzA4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgZ3JlZW4sIHJlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvY29sb3JzJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBsaWdodDogJyM2OTY5NmEnLFxuICAgICAgbWFpbjogJyMyODI4MmEnLFxuICAgICAgZGFyazogJyMxZTFlMWYnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBsaWdodDogJyNmZmY1ZjgnLFxuICAgICAgbWFpbjogJyNmZjMzNjYnLFxuICAgICAgZGFyazogJyNlNjI5NTgnLFxuICAgIH0sXG4gICAgd2FybmluZzoge1xuICAgICAgbWFpbjogJyNmZmMwNzEnLFxuICAgICAgZGFyazogJyNmZmIyNWUnLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIGxpZ2h0OiByZWRbNTBdLFxuICAgICAgbWFpbjogcmVkWzUwMF0sXG4gICAgICBkYXJrOiByZWRbNzAwXSxcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IHtcbiAgICAgIGxpZ2h0OiBncmVlbls1MF0sXG4gICAgICBtYWluOiBncmVlbls1MDBdLFxuICAgICAgZGFyazogZ3JlZW5bNzAwXSxcbiAgICB9LFxuICB9LFxuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseTogXCInV29yayBTYW5zJywgc2Fucy1zZXJpZlwiLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250V2VpZ2h0TGlnaHQ6IDMwMCxcbiAgICBmb250V2VpZ2h0UmVndWxhcjogNDAwLFxuICAgIGZvbnRXZWlnaHRNZWRpdW06IDUwMCxcbiAgICBmb250V2VpZ2h0Qm9sZDogNzAwLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVRoZW1lIiwiZ3JlZW4iLCJyZWQiLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibGlnaHQiLCJtYWluIiwiZGFyayIsInNlY29uZGFyeSIsIndhcm5pbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZm9udFdlaWdodExpZ2h0IiwiZm9udFdlaWdodFJlZ3VsYXIiLCJmb250V2VpZ2h0TWVkaXVtIiwiZm9udFdlaWdodEJvbGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/theme/theme.js\n");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();