"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.jsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_logo_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/logo/logo.svg */ \"./src/assets/images/logo/logo.svg\");\n/* harmony import */ var _UI_MoreButton_MoreButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/MoreButton/MoreButton */ \"./src/components/UI/MoreButton/MoreButton.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst links = [\n    {\n        id: 1,\n        name: 'Для кого?',\n        to: '#target-consumer'\n    },\n    {\n        id: 2,\n        name: 'Программы',\n        to: '#projects'\n    },\n    {\n        id: 3,\n        name: 'Преимущества',\n        to: '#services'\n    },\n    {\n        id: 4,\n        name: 'Стоимость',\n        to: '#versions'\n    }\n];\nconst Header = ()=>{\n    _s();\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleMenu = ()=>{\n        setIsMenuOpen(!isMenuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-mini\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"menu\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"menu__logo\",\n                                href: \"/\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: _assets_images_logo_logo_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                        alt: \"Soft V\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vilka/Desktop/softv/src/components/Header/Header.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Soft V\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vilka/Desktop/softv/src/components/Header/Header.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vilka/Desktop/softv/src/components/Header/Header.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vilka/Desktop/softv/src/components/Header/Header.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"menu__toggle\",\n                            onClick: toggleMenu,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"burger \".concat(isMenuOpen ? 'open' : ''),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bar\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vilka/Desktop/softv/src/components/Header/Header.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bar\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vilka/Desktop/softv/src/components/Header/Header.jsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bar\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vilka/Desktop/softv/src/components/Header/Header.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vilka/Desktop/softv/src/components/Header/Header.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vilka/Desktop/softv/src/components/Header/Header.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"menu__nav \".concat(isMenuOpen ? 'open' : ''),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"nav__list tag\",\n                                children: [\n                                    links.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"nav__link heading-text\",\n                                                href: item.to,\n                                                children: item.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vilka/Desktop/softv/src/components/Header/Header.jsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, item.id, false, {\n                                            fileName: \"/Users/vilka/Desktop/softv/src/components/Header/Header.jsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 19\n                                        }, undefined)),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_MoreButton_MoreButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            text: \"Подробнее\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vilka/Desktop/softv/src/components/Header/Header.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vilka/Desktop/softv/src/components/Header/Header.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vilka/Desktop/softv/src/components/Header/Header.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vilka/Desktop/softv/src/components/Header/Header.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vilka/Desktop/softv/src/components/Header/Header.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/vilka/Desktop/softv/src/components/Header/Header.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/vilka/Desktop/softv/src/components/Header/Header.jsx\",\n            lineNumber: 37,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/vilka/Desktop/softv/src/components/Header/Header.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"vK10R+uCyHfZ4DZVnxbYkMWJB8g=\");\n_c = Header;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNUO0FBQzBCO0FBQ0o7QUFHckQsTUFBTUssUUFBUTtJQUNaO1FBQ0VDLElBQUc7UUFDSEMsTUFBTTtRQUNOQyxJQUFJO0lBQ047SUFDQTtRQUNFRixJQUFHO1FBQ0hDLE1BQU07UUFDTkMsSUFBSTtJQUNOO0lBQ0E7UUFDRUYsSUFBRztRQUNIQyxNQUFNO1FBQ05DLElBQUk7SUFDTjtJQUNBO1FBQ0VGLElBQUc7UUFDSEMsTUFBTTtRQUNOQyxJQUFJO0lBQ047Q0FDRDtBQUVELE1BQU1DLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU1XLGFBQWE7UUFDakJELGNBQWMsQ0FBQ0Q7SUFDakI7SUFDQSxxQkFDRSw4REFBQ0c7a0JBQ0QsNEVBQUNDO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEO3NDQUNDLDRFQUFDRTtnQ0FBRUQsV0FBVTtnQ0FBYUUsTUFBSzs7a0RBQzNCLDhEQUFDZixtREFBS0E7d0NBQUNnQixLQUFLZixvRUFBUUE7d0NBQUVnQixLQUFJOzs7Ozs7a0RBQzFCLDhEQUFDQztrREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR1QsOERBQUNOOzRCQUFJQyxXQUFVOzRCQUFlTSxTQUFTVDtzQ0FDbkMsNEVBQUNFO2dDQUFJQyxXQUFXLFVBQW1DLE9BQXpCTCxhQUFhLFNBQVM7O2tEQUM5Qyw4REFBQ0k7d0NBQUlDLFdBQVU7Ozs7OztrREFDZiw4REFBQ0Q7d0NBQUlDLFdBQVU7Ozs7OztrREFDZiw4REFBQ0Q7d0NBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUduQiw4REFBQ087NEJBQUlQLFdBQVcsYUFBc0MsT0FBekJMLGFBQWEsU0FBUztzQ0FDakQsNEVBQUNhO2dDQUFHUixXQUFVOztvQ0FDWFYsTUFBTW1CLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ0M7c0RBQ0MsNEVBQUNWO2dEQUFFRCxXQUFVO2dEQUF5QkUsTUFBTVEsS0FBS2pCLEVBQUU7MERBQ2hEaUIsS0FBS2xCLElBQUk7Ozs7OzsyQ0FGTGtCLEtBQUtuQixFQUFFOzs7OztrREFNbEIsOERBQUNvQjtrREFDQyw0RUFBQ3RCLGlFQUFVQTs0Q0FBQ3VCLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbkM7R0ExQ01sQjtLQUFBQTtBQTRDTixpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3ZpbGthL0Rlc2t0b3Avc29mdHYvc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExvZ290eXBlIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby9sb2dvLnN2Zyc7XG5pbXBvcnQgTW9yZUJ1dHRvbiBmcm9tICcuLi9VSS9Nb3JlQnV0dG9uL01vcmVCdXR0b24nO1xuXG5cbmNvbnN0IGxpbmtzID0gW1xuICB7XG4gICAgaWQ6MSxcbiAgICBuYW1lOiAn0JTQu9GPINC60L7Qs9C+PycsXG4gICAgdG86ICcjdGFyZ2V0LWNvbnN1bWVyJyxcbiAgfSxcbiAge1xuICAgIGlkOjIsXG4gICAgbmFtZTogJ9Cf0YDQvtCz0YDQsNC80LzRiycsXG4gICAgdG86ICcjcHJvamVjdHMnLFxuICB9LFxuICB7XG4gICAgaWQ6MyxcbiAgICBuYW1lOiAn0J/RgNC10LjQvNGD0YnQtdGB0YLQstCwJyxcbiAgICB0bzogJyNzZXJ2aWNlcycsXG4gIH0sXG4gIHtcbiAgICBpZDo0LFxuICAgIG5hbWU6ICfQodGC0L7QuNC80L7RgdGC0YwnLFxuICAgIHRvOiAnI3ZlcnNpb25zJyxcbiAgfSxcbl1cblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0SXNNZW51T3BlbighaXNNZW51T3Blbik7XG4gIH1cbiAgcmV0dXJuKFxuICAgIDxoZWFkZXI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLW1pbmlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1lbnVfX2xvZ29cIiBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0xvZ290eXBlfSBhbHQ9XCJTb2Z0IFZcIi8+XG4gICAgICAgICAgICAgICAgPHA+U29mdCBWPC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9fdG9nZ2xlXCIgb25DbGljaz17dG9nZ2xlTWVudX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYnVyZ2VyICR7aXNNZW51T3BlbiA/ICdvcGVuJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2BtZW51X19uYXYgJHtpc01lbnVPcGVuID8gJ29wZW4nIDogJyd9YH0+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZfX2xpc3QgdGFnXCI+XG4gICAgICAgICAgICAgICAge2xpbmtzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdl9fbGluayBoZWFkaW5nLXRleHRcIiBocmVmPXtpdGVtLnRvfT5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxNb3JlQnV0dG9uIHRleHQ9XCLQn9C+0LTRgNC+0LHQvdC10LVcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9oZWFkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJMb2dvdHlwZSIsIk1vcmVCdXR0b24iLCJsaW5rcyIsImlkIiwibmFtZSIsInRvIiwiSGVhZGVyIiwiaXNNZW51T3BlbiIsInNldElzTWVudU9wZW4iLCJ0b2dnbGVNZW51IiwiaGVhZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJzcmMiLCJhbHQiLCJwIiwib25DbGljayIsIm5hdiIsInVsIiwibWFwIiwiaXRlbSIsImxpIiwidGV4dCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/Header.jsx\n"));

/***/ })

});