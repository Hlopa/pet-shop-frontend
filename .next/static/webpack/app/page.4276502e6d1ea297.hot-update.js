"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/feature/filter/CheckboxFiltersGroup.tsx":
/*!*****************************************************!*\
  !*** ./src/feature/filter/CheckboxFiltersGroup.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FilterCheckbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterCheckbox */ \"(app-pages-browser)/./src/feature/filter/FilterCheckbox.tsx\");\n/* harmony import */ var _ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/ui/input */ \"(app-pages-browser)/./src/ui/input.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst CheckboxFiltersGroup = (param)=>{\n    let { title, items, limit = 5, searchInputPlaceholder = \"Поиск...\", onChange, defaultValue, className } = param;\n    var _defaultItems;\n    _s();\n    const [showAll, setShowAll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const onChangeSearchInput = (e)=>{\n        setSearchValue(e.target.value);\n    };\n    const list = showAll ? items === null || items === void 0 ? void 0 : items.filter((item)=>item.text.toLowerCase().includes(searchValue.toLowerCase())) : (_defaultItems = defaultItems) === null || _defaultItems === void 0 ? void 0 : _defaultItems.slice(0, limit);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"font-bold mb-3\",\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\CSS HTML JS\\\\React\\\\next-pizza\\\\my\\\\pet-shop-frontend\\\\src\\\\feature\\\\filter\\\\CheckboxFiltersGroup.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            showAll && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onChange: onChangeSearchInput,\n                    placeholder: searchInputPlaceholder,\n                    className: \"bg-gray-50 border-none\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\CSS HTML JS\\\\React\\\\next-pizza\\\\my\\\\pet-shop-frontend\\\\src\\\\feature\\\\filter\\\\CheckboxFiltersGroup.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\CSS HTML JS\\\\React\\\\next-pizza\\\\my\\\\pet-shop-frontend\\\\src\\\\feature\\\\filter\\\\CheckboxFiltersGroup.tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar\",\n                children: list === null || list === void 0 ? void 0 : list.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterCheckbox__WEBPACK_IMPORTED_MODULE_2__.FilterCheckbox, {\n                        onCheckedChange: (ids)=>console.log(ids),\n                        checked: false,\n                        value: item.value,\n                        text: item.text,\n                        endAdornment: item.endAdornment\n                    }, String(item.value), false, {\n                        fileName: \"D:\\\\CSS HTML JS\\\\React\\\\next-pizza\\\\my\\\\pet-shop-frontend\\\\src\\\\feature\\\\filter\\\\CheckboxFiltersGroup.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\CSS HTML JS\\\\React\\\\next-pizza\\\\my\\\\pet-shop-frontend\\\\src\\\\feature\\\\filter\\\\CheckboxFiltersGroup.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            items && defaultItems.length + items.length > limit && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: showAll ? \"border-t border-t-neutral-100 mt-4\" : \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setShowAll(!showAll),\n                    className: \"text-primary mt-3\",\n                    children: showAll ? \"Hide\" : \"+ Show all\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\CSS HTML JS\\\\React\\\\next-pizza\\\\my\\\\pet-shop-frontend\\\\src\\\\feature\\\\filter\\\\CheckboxFiltersGroup.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\CSS HTML JS\\\\React\\\\next-pizza\\\\my\\\\pet-shop-frontend\\\\src\\\\feature\\\\filter\\\\CheckboxFiltersGroup.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CSS HTML JS\\\\React\\\\next-pizza\\\\my\\\\pet-shop-frontend\\\\src\\\\feature\\\\filter\\\\CheckboxFiltersGroup.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CheckboxFiltersGroup, \"4/Rnel+GmYD5fms/E0H2u8C6+bY=\");\n_c = CheckboxFiltersGroup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckboxFiltersGroup);\nvar _c;\n$RefreshReg$(_c, \"CheckboxFiltersGroup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9mZWF0dXJlL2ZpbHRlci9DaGVja2JveEZpbHRlcnNHcm91cC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFd0M7QUFDK0I7QUFDeEM7QUFjL0IsTUFBTUksdUJBQTREO1FBQUMsRUFDakVDLEtBQUssRUFDTEMsS0FBSyxFQUNMQyxRQUFRLENBQUMsRUFDVEMseUJBQXlCLFVBQVUsRUFDbkNDLFFBQVEsRUFDUkMsWUFBWSxFQUNaQyxTQUFTLEVBQ1Y7UUFVS0M7O0lBVEosTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2MsYUFBYUMsZUFBZSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNZ0Isc0JBQXNCLENBQUNDO1FBQzNCRixlQUFlRSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDL0I7SUFFQSxNQUFNQyxPQUFPUixVQUNUUCxrQkFBQUEsNEJBQUFBLE1BQU9nQixNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsSUFBSSxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ1gsWUFBWVUsV0FBVyxRQUNoRmIsZ0JBQUFBLDBCQUFBQSxvQ0FBQUEsY0FBY2UsS0FBSyxDQUFDLEdBQUdwQjtJQUUzQixxQkFDRSw4REFBQ3FCO1FBQUlqQixXQUFXQTs7MEJBQ2QsOERBQUNrQjtnQkFBRWxCLFdBQVU7MEJBQWtCTjs7Ozs7O1lBRTlCUSx5QkFDQyw4REFBQ2U7Z0JBQUlqQixXQUFVOzBCQUNiLDRFQUFDUixpREFBS0E7b0JBQ0pNLFVBQVVRO29CQUNWYSxhQUFhdEI7b0JBQ2JHLFdBQVU7Ozs7Ozs7Ozs7OzBCQUtoQiw4REFBQ2lCO2dCQUFJakIsV0FBVTswQkFDWlUsaUJBQUFBLDJCQUFBQSxLQUFNVSxHQUFHLENBQUMsQ0FBQ1IsTUFBTVMsc0JBQ2hCLDhEQUFDOUIsMkRBQWNBO3dCQUNiK0IsaUJBQWlCLENBQUNDLE1BQVFDLFFBQVFDLEdBQUcsQ0FBQ0Y7d0JBQ3RDRyxTQUFTO3dCQUVUakIsT0FBT0csS0FBS0gsS0FBSzt3QkFDakJJLE1BQU1ELEtBQUtDLElBQUk7d0JBQ2ZjLGNBQWNmLEtBQUtlLFlBQVk7dUJBSDFCQyxPQUFPaEIsS0FBS0gsS0FBSzs7Ozs7Ozs7OztZQVEzQmQsU0FBVU0sYUFBYTRCLE1BQU0sR0FBR2xDLE1BQU1rQyxNQUFNLEdBQUdqQyx1QkFDOUMsOERBQUNxQjtnQkFBSWpCLFdBQVdFLFVBQVUsdUNBQXVDOzBCQUMvRCw0RUFBQzRCO29CQUFPQyxTQUFTLElBQU01QixXQUFXLENBQUNEO29CQUFVRixXQUFVOzhCQUNwREUsVUFBVSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQztHQXhETVQ7S0FBQUE7QUEwRE4sK0RBQWVBLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZS9maWx0ZXIvQ2hlY2tib3hGaWx0ZXJzR3JvdXAudHN4P2JmMjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmlsdGVyQ2hlY2tib3gsIEZpbHRlckNoZWNrYm94UHJvcHMgfSBmcm9tIFwiLi9GaWx0ZXJDaGVja2JveFwiO1xuaW1wb3J0IElucHV0IGZyb20gXCJAL3VpL2lucHV0XCI7XG5cbnR5cGUgSXRlbSA9IEZpbHRlckNoZWNrYm94UHJvcHM7XG5cbmludGVyZmFjZSBDaGVja2JveEZpbHRlcnNHcm91cFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgaXRlbXM/OiBJdGVtW107XG4gIGxpbWl0PzogbnVtYmVyO1xuICBzZWFyY2hJbnB1dFBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBvbkNoYW5nZT86ICh2YWx1ZXM6IHN0cmluZ1tdKSA9PiB2b2lkO1xuICBkZWZhdWx0VmFsdWU/OiBzdHJpbmdbXTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5jb25zdCBDaGVja2JveEZpbHRlcnNHcm91cDogUmVhY3QuRkM8Q2hlY2tib3hGaWx0ZXJzR3JvdXBQcm9wcz4gPSAoe1xuICB0aXRsZSxcbiAgaXRlbXMsXG4gIGxpbWl0ID0gNSxcbiAgc2VhcmNoSW5wdXRQbGFjZWhvbGRlciA9IFwi0J/QvtC40YHQui4uLlwiLFxuICBvbkNoYW5nZSxcbiAgZGVmYXVsdFZhbHVlLFxuICBjbGFzc05hbWUsXG59KSA9PiB7XG4gIGNvbnN0IFtzaG93QWxsLCBzZXRTaG93QWxsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBvbkNoYW5nZVNlYXJjaElucHV0ID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0U2VhcmNoVmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGxpc3QgPSBzaG93QWxsXG4gICAgPyBpdGVtcz8uZmlsdGVyKChpdGVtKSA9PiBpdGVtLnRleHQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSlcbiAgICA6IGRlZmF1bHRJdGVtcz8uc2xpY2UoMCwgbGltaXQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgbWItM1wiPnt0aXRsZX08L3A+XG5cbiAgICAgIHtzaG93QWxsICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VTZWFyY2hJbnB1dH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtzZWFyY2hJbnB1dFBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXItbm9uZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgbWF4LWgtOTYgcHItMiBvdmVyZmxvdy1hdXRvIHNjcm9sbGJhclwiPlxuICAgICAgICB7bGlzdD8ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxGaWx0ZXJDaGVja2JveFxuICAgICAgICAgICAgb25DaGVja2VkQ2hhbmdlPXsoaWRzKSA9PiBjb25zb2xlLmxvZyhpZHMpfVxuICAgICAgICAgICAgY2hlY2tlZD17ZmFsc2V9XG4gICAgICAgICAgICBrZXk9e1N0cmluZyhpdGVtLnZhbHVlKX1cbiAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgdGV4dD17aXRlbS50ZXh0fVxuICAgICAgICAgICAgZW5kQWRvcm5tZW50PXtpdGVtLmVuZEFkb3JubWVudH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7aXRlbXMgJiYgKGRlZmF1bHRJdGVtcy5sZW5ndGggKyBpdGVtcy5sZW5ndGggPiBsaW1pdCkgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2hvd0FsbCA/IFwiYm9yZGVyLXQgYm9yZGVyLXQtbmV1dHJhbC0xMDAgbXQtNFwiIDogXCJcIn0+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWxsKCFzaG93QWxsKX0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IG10LTNcIj5cbiAgICAgICAgICAgIHtzaG93QWxsID8gXCJIaWRlXCIgOiBcIisgU2hvdyBhbGxcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hGaWx0ZXJzR3JvdXA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZpbHRlckNoZWNrYm94IiwiSW5wdXQiLCJDaGVja2JveEZpbHRlcnNHcm91cCIsInRpdGxlIiwiaXRlbXMiLCJsaW1pdCIsInNlYXJjaElucHV0UGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImRlZmF1bHRWYWx1ZSIsImNsYXNzTmFtZSIsImRlZmF1bHRJdGVtcyIsInNob3dBbGwiLCJzZXRTaG93QWxsIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsIm9uQ2hhbmdlU2VhcmNoSW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJsaXN0IiwiZmlsdGVyIiwiaXRlbSIsInRleHQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2xpY2UiLCJkaXYiLCJwIiwicGxhY2Vob2xkZXIiLCJtYXAiLCJpbmRleCIsIm9uQ2hlY2tlZENoYW5nZSIsImlkcyIsImNvbnNvbGUiLCJsb2ciLCJjaGVja2VkIiwiZW5kQWRvcm5tZW50IiwiU3RyaW5nIiwibGVuZ3RoIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/feature/filter/CheckboxFiltersGroup.tsx\n"));

/***/ })

});