/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5Cdev%5Csidepjt%5Cmy-next-todo%5Cpages%5Cindex.tsx!":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5Cdev%5Csidepjt%5Cmy-next-todo%5Cpages%5Cindex.tsx! ***!
  \*********************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.tsx */ \"./pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkYmYWJzb2x1dGVQYWdlUGF0aD1DJTNBJTVDZGV2JTVDc2lkZXBqdCU1Q215LW5leHQtdG9kbyU1Q3BhZ2VzJTVDaW5kZXgudHN4IS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDRDQUFtQjtBQUMxQztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/NWRkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5Cdev%5Csidepjt%5Cmy-next-todo%5Cpages%5Cindex.tsx!\n");

/***/ }),

/***/ "./components/TodoList.tsx":
/*!*********************************!*\
  !*** ./components/TodoList.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\dev\\\\sidepjt\\\\my-next-todo\\\\components\\\\TodoList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* eslint-disable @typescript-eslint/no-empty-function */\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"TodoList__Container\",\n  componentId: \"sc-19yelzw-0\"\n})([\"width:100%;.todo-list-header{padding:12px;border-bottom:1px solid \", \";.todo-list-last-todo{font-size:14px;span{margin-left:8px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}}.bg-blue{background-color:\", \";}.bg-green{background-color:\", \";}.bg-navy{background-color:\", \";}.bg-orange{background-color:\", \";}.bg-red{background-color:\", \";}.bg-yellow{background-color:\", \";}.todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid \", \";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:\", \";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;margin-right:12px;svg{&:first-child{margin-right:16px;}}.todo-trash-can{width:16px;path{fill:\", \";}}.todo-check-mark{path{fill:\", \";}}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid \", \";background-color:transparent;outline:none;}}}}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gray);\n/** TodoList가 props로 todos를 받기 위해 타입을 설정해주어야 함 */\n\n/** interface도 type과 동일하게 타입을 지정할 수 있다\n *  export를 하지 않는 타입은 interface를 사용하는 걸 선호한다고 함. 책에서는 */\n\n/** TodoList 컴포넌트는 props로 IProps를 전달받기로 타입이 지정돼 있다는 의미 */\n\n_c = Container;\n\n// eslint-disable-next-line react/function-component-definition\nvar TodoList = function TodoList(_ref) {\n  _s();\n\n  var todos = _ref.todos;\n\n  /** todos의 타입이 IProps를 따름 !!!!! */\n\n  /** React.FC의 타입은 '<>'은 제네릭이라고 읽으며\n   * 여기서는 P(props)라는 타입(기본 값은 {} 객체?)을 제네릭을 사용하여\n   * React.FunctionComponent에 전달해주고 있음 */\n  //* 색깔 객체 구하기 2 switch 버전\n\n  /** 컴포넌트가 리렌더(전달받은 props가 변경시)될 때마다 재계산되는데 이를 방지해야 함 */\n  //useCallback은 함수에 종속성을 줄 수 있음\n  var getTodoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    var red = 0;\n    var orange = 0;\n    var yellow = 0;\n    var green = 0;\n    var blue = 0;\n    var navy = 0;\n    todos.forEach(function (todo) {\n      //하나의 값에 대한 조건문은 switch 사용 편리\n      switch (todo.color) {\n        case \"red\":\n          red += 1;\n          break;\n\n        case \"orange\":\n          orange += 1;\n          break;\n\n        case \"yellow\":\n          yellow += 1;\n          break;\n\n        case \"green\":\n          green += 1;\n          break;\n\n        case \"blue\":\n          blue += 1;\n          break;\n\n        case \"navy\":\n          navy += 1;\n          break;\n\n        default:\n          break;\n      }\n    });\n    return {\n      red: red,\n      orange: orange,\n      yellow: yellow,\n      green: green,\n      blue: blue,\n      navy: navy\n    };\n  }, [todos]); //useMemo는 변수에 종속성을 주어 함수의 재연산을 방지할 수 있는 hooks\n\n  var todoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(getTodoColorNums, [todos]);\n  console.log(todoColorNums);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"todo-list-header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        className: \"todo-list-last-todo\",\n        children: [\"\\uB0A8\\uC740 TODO\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n          children: [todos.length, \"\\uAC1C\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 183,\n          columnNumber: 18\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 182,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"todo-list-header-colors\",\n        children: Object.keys(todoColorNums).map(function (color, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"todo-list-header-color-num\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"todo-list-header-round-color bg-\".concat(color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 188,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n              children: [todoColorNums[color], \"\\uAC1C\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 189,\n              columnNumber: 15\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 187,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 185,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 181,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"ul\", {\n      className: \"todo-list\",\n      children: todos.map(function (todo) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n          className: \"todo-item\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"todo-left-side\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"todo-color-block bg-\".concat(todo.color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 198,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n              className: \"todo-text \".concat(todo.checked ? \"checked-todo-text\" : \"\"),\n              children: todo.text\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 199,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 197,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"todo-right-side\",\n            children: !todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n              type: \"button\",\n              className: \"todo-button\",\n              onClick: function onClick() {}\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 218,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 207,\n            columnNumber: 13\n          }, _this)]\n        }, todo.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 196,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 194,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 180,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TodoList, \"lbu9IE0+D5iX+9TYNfAYXp8wH1M=\");\n\n_c2 = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"TodoList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztNQUFBQTtBQXFHTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeD8xYzhjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvbiAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uL3N0eWxlcy9wYWxldHRlXCI7XG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gXCIuLi90eXBlcy90b2RvXCI7XG5cbmltcG9ydCBUcmFzaENhbkljb24gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWNzL3N2Zy90cmFzaGNhbi5zdmdcIjtcbmltcG9ydCBDaGVja01hcmtJY29uIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljcy9zdmcvY2hlY2ttYXJrLnN2Z1wiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgLnRvZG8tbGlzdC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcbiAgICAudG9kby1saXN0LWxhc3QtdG9kbyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnRvZG8tbGlzdC1oZWFkZXItY29sb3JzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAudG9kby1saXN0LWhlYWRlci1jb2xvci1udW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICB9XG4gICAgICAgIC50b2RvLWxpc3QtaGVhZGVyLXJvdW5kLWNvbG9yIHtcbiAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5iZy1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuYmx1ZX07XG4gIH1cbiAgLmJnLWdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZ3JlZW59O1xuICB9XG4gIC5iZy1uYXZ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUubmF2eX07XG4gIH1cbiAgLmJnLW9yYW5nZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLm9yYW5nZX07XG4gIH1cbiAgLmJnLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnJlZH07XG4gIH1cbiAgLmJnLXllbGxvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnllbGxvd307XG4gIH1cblxuICAudG9kby1saXN0IHtcbiAgICAudG9kby1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXl9O1xuXG4gICAgICAudG9kby1sZWZ0LXNpZGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAudG9kby1jb2xvci1ibG9jayB7XG4gICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5jaGVja2VkLXRvZG8tdGV4dCB7XG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5fTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgfVxuICAgICAgICAudG9kby10ZXh0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC50b2RvLXJpZ2h0LXNpZGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudG9kby10cmFzaC1jYW4ge1xuICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgIHBhdGgge1xuICAgICAgICAgICAgZmlsbDogJHtwYWxldHRlLmRlZXBfcmVkfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRvZG8tY2hlY2stbWFyayB7XG4gICAgICAgICAgcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiAke3BhbGV0dGUuZGVlcF9ncmVlbn07XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qIGZpbGw6ICR7cGFsZXR0ZS5kZWVwX2dyZWVufTsgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIC50b2RvLWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuLyoqIFRvZG9MaXN06rCAIHByb3Bz66GcIHRvZG9z66W8IOuwm+q4sCDsnITtlbQg7YOA7J6F7J2EIOyEpOygle2VtOyjvOyWtOyVvCDtlaggKi9cbi8qKiBpbnRlcmZhY2Xrj4QgdHlwZeqzvCDrj5nsnbztlZjqsowg7YOA7J6F7J2EIOyngOygle2VoCDsiJgg7J6I64ukXG4gKiAgZXhwb3J066W8IO2VmOyngCDslYrripQg7YOA7J6F7J2AIGludGVyZmFjZeulvCDsgqzsmqntlZjripQg6rG4IOyEoO2YuO2VnOuLpOqzoCDtlaguIOyxheyXkOyEnOuKlCAqL1xuLyoqIFRvZG9MaXN0IOy7tO2PrOuEjO2KuOuKlCBwcm9wc+uhnCBJUHJvcHPrpbwg7KCE64us67Cb6riw66GcIO2DgOyeheydtCDsp4DsoJXrj7wg7J6I64uk64qUIOydmOuvuCAqL1xuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRvZG9zOiBUb2RvVHlwZVtdO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZnVuY3Rpb24tY29tcG9uZW50LWRlZmluaXRpb25cbmNvbnN0IFRvZG9MaXN0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgdG9kb3MgfSkgPT4ge1xuICAvKiogdG9kb3PsnZgg7YOA7J6F7J20IElQcm9wc+ulvCDrlLDrpoQgISEhISEgKi9cbiAgLyoqIFJlYWN0LkZD7J2YIO2DgOyeheydgCAnPD4n7J2AIOygnOuEpOumreydtOudvOqzoCDsnb3snLzrqbBcbiAgICog7Jes6riw7ISc64qUIFAocHJvcHMp652864qUIO2DgOyehSjquLDrs7gg6rCS7J2AIHt9IOqwneyytD8p7J2EIOygnOuEpOumreydhCDsgqzsmqntlZjsl6xcbiAgICogUmVhY3QuRnVuY3Rpb25Db21wb25lbnTsl5Ag7KCE64us7ZW07KO86rOgIOyeiOydjCAqL1xuXG4gIC8vKiDsg4nquZQg6rCd7LK0IOq1rO2VmOq4sCAyIHN3aXRjaCDrsoTsoIRcbiAgLyoqIOy7tO2PrOuEjO2KuOqwgCDrpqzroIzrjZQo7KCE64us67Cb7J2AIHByb3Bz6rCAIOuzgOqyveyLnCnrkKAg65WM66eI64ukIOyerOqzhOyCsOuQmOuKlOuNsCDsnbTrpbwg67Cp7KeA7ZW07JW8IO2VqCAqL1xuICAvL3VzZUNhbGxiYWNr7J2AIO2VqOyImOyXkCDsooXsho3shLHsnYQg7KSEIOyImCDsnojsnYxcbiAgY29uc3QgZ2V0VG9kb0NvbG9yTnVtcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBsZXQgcmVkID0gMDtcbiAgICBsZXQgb3JhbmdlID0gMDtcbiAgICBsZXQgeWVsbG93ID0gMDtcbiAgICBsZXQgZ3JlZW4gPSAwO1xuICAgIGxldCBibHVlID0gMDtcbiAgICBsZXQgbmF2eSA9IDA7XG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgLy/tlZjrgpjsnZgg6rCS7JeQIOuMgO2VnCDsobDqsbTrrLjsnYAgc3dpdGNoIOyCrOyaqSDtjrjrpqxcbiAgICAgIHN3aXRjaCAodG9kby5jb2xvcikge1xuICAgICAgICBjYXNlIFwicmVkXCI6XG4gICAgICAgICAgcmVkICs9IDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJvcmFuZ2VcIjpcbiAgICAgICAgICBvcmFuZ2UgKz0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInllbGxvd1wiOlxuICAgICAgICAgIHllbGxvdyArPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZ3JlZW5cIjpcbiAgICAgICAgICBncmVlbiArPSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYmx1ZVwiOlxuICAgICAgICAgIGJsdWUgKz0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm5hdnlcIjpcbiAgICAgICAgICBuYXZ5ICs9IDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgcmVkLCBvcmFuZ2UsIHllbGxvdywgZ3JlZW4sIGJsdWUsIG5hdnkgfTtcbiAgfSwgW3RvZG9zXSk7XG5cbiAgLy91c2VNZW1v64qUIOuzgOyImOyXkCDsooXsho3shLHsnYQg7KO87Ja0IO2VqOyImOydmCDsnqzsl7DsgrDsnYQg67Cp7KeA7ZWgIOyImCDsnojripQgaG9va3NcbiAgY29uc3QgdG9kb0NvbG9yTnVtcyA9IHVzZU1lbW8oZ2V0VG9kb0NvbG9yTnVtcywgW3RvZG9zXSk7XG4gIGNvbnNvbGUubG9nKHRvZG9Db2xvck51bXMpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvLWxpc3QtaGVhZGVyJz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0b2RvLWxpc3QtbGFzdC10b2RvJz5cbiAgICAgICAgICDrgqjsnYAgVE9ETzxzcGFuPnt0b2Rvcy5sZW5ndGh96rCcPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvLWxpc3QtaGVhZGVyLWNvbG9ycyc+XG4gICAgICAgICAge09iamVjdC5rZXlzKHRvZG9Db2xvck51bXMpLm1hcCgoY29sb3IsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9kby1saXN0LWhlYWRlci1jb2xvci1udW0nIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvZG8tbGlzdC1oZWFkZXItcm91bmQtY29sb3IgYmctJHtjb2xvcn1gfSAvPlxuICAgICAgICAgICAgICA8cD57dG9kb0NvbG9yTnVtc1tjb2xvcl196rCcPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPSd0b2RvLWxpc3QnPlxuICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndG9kby1pdGVtJyBrZXk9e3RvZG8uaWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8tbGVmdC1zaWRlJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0b2RvLWNvbG9yLWJsb2NrIGJnLSR7dG9kby5jb2xvcn1gfSAvPlxuICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRvZG8tdGV4dCAke1xuICAgICAgICAgICAgICAgICAgdG9kby5jaGVja2VkID8gXCJjaGVja2VkLXRvZG8tdGV4dFwiIDogXCJcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RvZG8udGV4dH1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9kby1yaWdodC1zaWRlJz5cbiAgICAgICAgICAgICAgey8qIHt0b2RvLmNoZWNrZWQgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8VHJhc2hDYW5JY29uIGNsYXNzTmFtZT0ndG9kby10cmFzaC1jYW4nIG9uQ2xpY2s9eygpID0+IHt9fSAvPlxuICAgICAgICAgICAgICAgICAgPENoZWNrTWFya0ljb25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0b2RvLWNoZWNrLW1hcmsnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX0gKi99XG4gICAgICAgICAgICAgIHshdG9kby5jaGVja2VkICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RvZG8tYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwic3R5bGVkIiwicGFsZXR0ZSIsIkNvbnRhaW5lciIsImRpdiIsImdyYXkiLCJibHVlIiwiZ3JlZW4iLCJuYXZ5Iiwib3JhbmdlIiwicmVkIiwieWVsbG93IiwiZGVlcF9yZWQiLCJkZWVwX2dyZWVuIiwiVG9kb0xpc3QiLCJ0b2RvcyIsImdldFRvZG9Db2xvck51bXMiLCJmb3JFYWNoIiwidG9kbyIsImNvbG9yIiwidG9kb0NvbG9yTnVtcyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaW5kZXgiLCJjaGVja2VkIiwidGV4dCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TodoList */ \"./components/TodoList.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\dev\\\\sidepjt\\\\my-next-todo\\\\pages\\\\index.tsx\",\n    _this = undefined;\n\n\n\nvar todos = [{\n  id: 1,\n  text: \"마커 이동하기\",\n  color: \"red\",\n  checked: true\n}, {\n  id: 2,\n  text: \"인원 컴포넌트\",\n  color: \"navy\",\n  checked: false\n}, {\n  id: 3,\n  text: \"400에러 원인\",\n  color: \"yellow\",\n  checked: false\n}]; //pages 폴더에서 사용하는 컴포넌트의 타입은 NextPage\n//NextPage는 리액트 컴포넌트의 확장으로 getInitialProps라는 함수를 가지고 있음\n\nvar index = function index() {\n  /** TodoList가 props로 todos를 받기로 되어있음 */\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_TodoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    todos: todos\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 10\n  }, _this);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7QUFHQSxJQUFNQyxLQUFpQixHQUFHLENBQ3hCO0FBQUVDLEVBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNDLEVBQUFBLElBQUksRUFBRSxTQUFmO0FBQTBCQyxFQUFBQSxLQUFLLEVBQUUsS0FBakM7QUFBd0NDLEVBQUFBLE9BQU8sRUFBRTtBQUFqRCxDQUR3QixFQUV4QjtBQUFFSCxFQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxFQUFBQSxJQUFJLEVBQUUsU0FBZjtBQUEwQkMsRUFBQUEsS0FBSyxFQUFFLE1BQWpDO0FBQXlDQyxFQUFBQSxPQUFPLEVBQUU7QUFBbEQsQ0FGd0IsRUFHeEI7QUFBRUgsRUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0MsRUFBQUEsSUFBSSxFQUFFLFVBQWY7QUFBMkJDLEVBQUFBLEtBQUssRUFBRSxRQUFsQztBQUE0Q0MsRUFBQUEsT0FBTyxFQUFFO0FBQXJELENBSHdCLENBQTFCLEVBTUE7QUFDQTs7QUFDQSxJQUFNQyxLQUFlLEdBQUcsU0FBbEJBLEtBQWtCLEdBQU07QUFDNUI7QUFDQSxzQkFBTyw4REFBQyw0REFBRDtBQUFVLFNBQUssRUFBRUw7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FIRDs7QUFLQSwrREFBZUssS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9kb0xpc3RcIjtcbmltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSBcIi4uL3R5cGVzL3RvZG9cIjtcblxuY29uc3QgdG9kb3M6IFRvZG9UeXBlW10gPSBbXG4gIHsgaWQ6IDEsIHRleHQ6IFwi66eI7LukIOydtOuPme2VmOq4sFwiLCBjb2xvcjogXCJyZWRcIiwgY2hlY2tlZDogdHJ1ZSB9LFxuICB7IGlkOiAyLCB0ZXh0OiBcIuyduOybkCDsu7Ttj6zrhIztirhcIiwgY29sb3I6IFwibmF2eVwiLCBjaGVja2VkOiBmYWxzZSB9LFxuICB7IGlkOiAzLCB0ZXh0OiBcIjQwMOyXkOufrCDsm5DsnbhcIiwgY29sb3I6IFwieWVsbG93XCIsIGNoZWNrZWQ6IGZhbHNlIH0sXG5dO1xuXG4vL3BhZ2VzIO2PtOuNlOyXkOyEnCDsgqzsmqntlZjripQg7Lu07Y+s64SM7Yq47J2YIO2DgOyeheydgCBOZXh0UGFnZVxuLy9OZXh0UGFnZeuKlCDrpqzslaHtirgg7Lu07Y+s64SM7Yq47J2YIO2ZleyepeycvOuhnCBnZXRJbml0aWFsUHJvcHPrnbzripQg7ZWo7IiY66W8IOqwgOyngOqzoCDsnojsnYxcbmNvbnN0IGluZGV4OiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgLyoqIFRvZG9MaXN06rCAIHByb3Bz66GcIHRvZG9z66W8IOuwm+q4sOuhnCDrkJjslrTsnojsnYwgKi9cbiAgcmV0dXJuIDxUb2RvTGlzdCB0b2Rvcz17dG9kb3N9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwibmFtZXMiOlsiVG9kb0xpc3QiLCJ0b2RvcyIsImlkIiwidGV4dCIsImNvbG9yIiwiY2hlY2tlZCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5Cdev%5Csidepjt%5Cmy-next-todo%5Cpages%5Cindex.tsx!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);