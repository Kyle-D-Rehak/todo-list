/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --dark-gray: #334155;\n    --med-gray: #acbbd1;\n    --light-gray: #e2e8f0;\n    --light-text: #f4f4f5;\n    --dark-text: #1e1e22;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: inherit;\n}\n\n#content {\n    font-family: sans-serif;\n    display: grid;\n    grid-template-areas: \n    \"header header\"\n    \"sidebar main\";\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto 1fr;\n    height: 100vh;\n}\n\n#header {\n    grid-area: header;\n    padding: 1rem;\n    background-color: var(--dark-gray);\n    color: var(--light-gray);\n}\n\n#sidebar {\n    grid-area: sidebar;\n    width: 15rem;\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n    gap: .5rem;\n    background-color: var(--med-gray);\n    color: var(--dark-text);\n}\n\n#sidebar > button {\n    text-align: left;\n    padding: .5rem;\n    border-style: none;\n    border-radius: .35rem;\n    font-size: 1.25rem;\n    font-weight: 500;\n    background-color: transparent;\n    color: var(--dark-text);\n}\n\n#sidebar > button:hover {\n    cursor: pointer;\n    background-color: rgba(255, 255, 255, 0.199);\n}\n\n\n#mainContainer {\n    grid-area: main;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n    padding: 1rem;\n    background-color: var(--light-gray);\n    color: var(--dark-text);\n}\n\n#mainContainer > button {\n    padding: .5rem;\n    font-weight: 600;\n    font-size: 1.2rem;\n    border-radius: .5rem;\n    border-style: none;\n}\n\n#mainContainer > button:hover {\n    cursor: pointer;\n    background-color: #5498ff37;\n}\n\n.task {\n    padding: .5rem;\n    border-style: none;\n    border-radius: .5rem;\n    background-color: var(--light-text);\n    display: flex;\n    flex-direction: column;\n}\n\n.task  h3 {\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.titleContainer p {\n    font-size: .85rem;\n}\n\n.task  button {\n    padding: .5rem;\n    border-style: none;\n    border-radius: .25rem;\n}\n\n.task  button:hover {\n    background-color:  rgba(255, 127, 127, 0.346);\n    cursor: pointer;\n}\n\n.completed {\n    text-decoration: line-through;\n    color: #bababa !important;\n}\n\n#mainContainer > form {\n    padding: .5rem;\n    border-style: none;\n    border-radius: .5rem;\n    background-color: var(--light-text);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#mainContainer input {\n    padding: .5rem;\n    border-style: none;\n    border-radius: .25rem;\n}\n\n#mainContainer label {\n    font-size: .85rem;\n}\n\n#mainContainer h3:hover {\n    cursor: pointer;\n}\n\n#taskForm {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start !important;\n    gap: 1rem;\n}\n\n#taskForm li {\n    list-style: none;\n    margin: .5rem;\n}\n\n#taskTitleInput {\n    width: 25rem;\n}\n\n#taskForm textArea {\n    height: 5rem;\n    width: 25rem;\n    padding: .5rem;\n}\n\n.flexContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: .5rem;\n}\n\n.titleContainer {\n    display: flex;\n    align-items: baseline;\n    gap: .5rem;\n}\n\n.buttonContainer {\n    display: flex;\n    gap: .5rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,qBAAqB;IACrB,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb;;kBAEc;IACd,+BAA+B;IAC/B,4BAA4B;IAC5B,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,kCAAkC;IAClC,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,UAAU;IACV,iCAAiC;IACjC,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;IAChB,6BAA6B;IAC7B,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,4CAA4C;AAChD;;;AAGA;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,aAAa;IACb,mCAAmC;IACnC,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,oBAAoB;IACpB,mCAAmC;IACnC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,6CAA6C;IAC7C,eAAe;AACnB;;AAEA;IACI,6BAA6B;IAC7B,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,oBAAoB;IACpB,mCAAmC;IACnC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kCAAkC;IAClC,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,UAAU;AACd","sourcesContent":[":root {\n    --dark-gray: #334155;\n    --med-gray: #acbbd1;\n    --light-gray: #e2e8f0;\n    --light-text: #f4f4f5;\n    --dark-text: #1e1e22;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: inherit;\n}\n\n#content {\n    font-family: sans-serif;\n    display: grid;\n    grid-template-areas: \n    \"header header\"\n    \"sidebar main\";\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto 1fr;\n    height: 100vh;\n}\n\n#header {\n    grid-area: header;\n    padding: 1rem;\n    background-color: var(--dark-gray);\n    color: var(--light-gray);\n}\n\n#sidebar {\n    grid-area: sidebar;\n    width: 15rem;\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n    gap: .5rem;\n    background-color: var(--med-gray);\n    color: var(--dark-text);\n}\n\n#sidebar > button {\n    text-align: left;\n    padding: .5rem;\n    border-style: none;\n    border-radius: .35rem;\n    font-size: 1.25rem;\n    font-weight: 500;\n    background-color: transparent;\n    color: var(--dark-text);\n}\n\n#sidebar > button:hover {\n    cursor: pointer;\n    background-color: rgba(255, 255, 255, 0.199);\n}\n\n\n#mainContainer {\n    grid-area: main;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n    padding: 1rem;\n    background-color: var(--light-gray);\n    color: var(--dark-text);\n}\n\n#mainContainer > button {\n    padding: .5rem;\n    font-weight: 600;\n    font-size: 1.2rem;\n    border-radius: .5rem;\n    border-style: none;\n}\n\n#mainContainer > button:hover {\n    cursor: pointer;\n    background-color: #5498ff37;\n}\n\n.task {\n    padding: .5rem;\n    border-style: none;\n    border-radius: .5rem;\n    background-color: var(--light-text);\n    display: flex;\n    flex-direction: column;\n}\n\n.task  h3 {\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.titleContainer p {\n    font-size: .85rem;\n}\n\n.task  button {\n    padding: .5rem;\n    border-style: none;\n    border-radius: .25rem;\n}\n\n.task  button:hover {\n    background-color:  rgba(255, 127, 127, 0.346);\n    cursor: pointer;\n}\n\n.completed {\n    text-decoration: line-through;\n    color: #bababa !important;\n}\n\n#mainContainer > form {\n    padding: .5rem;\n    border-style: none;\n    border-radius: .5rem;\n    background-color: var(--light-text);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#mainContainer input {\n    padding: .5rem;\n    border-style: none;\n    border-radius: .25rem;\n}\n\n#mainContainer label {\n    font-size: .85rem;\n}\n\n#mainContainer h3:hover {\n    cursor: pointer;\n}\n\n#taskForm {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start !important;\n    gap: 1rem;\n}\n\n#taskForm li {\n    list-style: none;\n    margin: .5rem;\n}\n\n#taskTitleInput {\n    width: 25rem;\n}\n\n#taskForm textArea {\n    height: 5rem;\n    width: 25rem;\n    padding: .5rem;\n}\n\n.flexContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: .5rem;\n}\n\n.titleContainer {\n    display: flex;\n    align-items: baseline;\n    gap: .5rem;\n}\n\n.buttonContainer {\n    display: flex;\n    gap: .5rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayController": () => (/* binding */ DisplayController)
/* harmony export */ });
/* harmony import */ var _taskFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFactory */ "./src/taskFactory.js");
/* harmony import */ var _storageInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageInterface */ "./src/storageInterface.js");



const DisplayController = (() => {
    const pageLoad = () => {
        const page = document.getElementById('content');

        const header = document.createElement('div');
        header.id = 'header';
        page.appendChild(header);
        header.innerHTML = '<h1>Todo List</h1>'

        const sidebar = document.createElement('div');
        sidebar.id = 'sidebar';
        page.appendChild(sidebar);

        const day = document.createElement('button');
        day.id = 'day';
        sidebar.appendChild(day);
        day.textContent = 'Today';

        const all = document.createElement('button');
        all.id = 'all';
        sidebar.appendChild(all);
        all.textContent = 'All tasks';

        const projects = document.createElement('h2');
        sidebar.appendChild(projects);
        projects.textContent = 'Projects';

        renderProjectButtons();

        const addProjectButton = document.createElement('button');
        addProjectButton.id = 'addProjectButton';
        sidebar.appendChild(addProjectButton);
        addProjectButton.textContent = '+ add project';

        const mainContainer = document.createElement('div');
        mainContainer.id = 'mainContainer';
        page.appendChild(mainContainer);
    };

    const renderTask = (task, project = 'default') => {
        if (task !== null) {
            const element = document.createElement('div');
            element.id = task.id;
            element.classList.add('task');

            const flexContainer = document.createElement('div');
            flexContainer.classList.add('flexContainer');

            const titleContainer = document.createElement('div');
            titleContainer.classList.add('titleContainer');
            
            const title = document.createElement('h3');
            title.textContent = task.title;
            title.addEventListener('click', () => toggleDescription(task));

            const dueDate = document.createElement('p');
            dueDate.textContent = `Due date: ${task.dueDate}`;

            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('buttonContainer');
            
            const complete = document.createElement('button');
            complete.textContent = 'Mark Complete';
            complete.addEventListener('click', () => {
                _storageInterface__WEBPACK_IMPORTED_MODULE_1__.StorageInterface.toggleComplete(task.id, project);

                if (_storageInterface__WEBPACK_IMPORTED_MODULE_1__.StorageInterface.checkCompleted(task.id, project)) {
                    title.classList.add('completed');
                    dueDate.classList.add('completed');
                    complete.classList.add('completed');
                } else {
                    title.classList.remove('completed');
                    dueDate.classList.remove('completed');
                    complete.classList.remove('completed');
                };
            
            });
            
            const remove = document.createElement('button');
            remove.textContent = 'X';
            remove.addEventListener('click', () => {
                const id = task.id;
                _storageInterface__WEBPACK_IMPORTED_MODULE_1__.StorageInterface.removeTask(id, project);
                document.getElementById(task.id).remove();
            })

            if (task.completed) {
                title.classList.add('completed');
                dueDate.classList.add('completed');
                complete.classList.add('completed');
            }
            
            document.getElementById('mainContainer').appendChild(element);
            element.appendChild(flexContainer);
            flexContainer.appendChild(titleContainer);
            titleContainer.appendChild(title);
            titleContainer.appendChild(dueDate);
            flexContainer.appendChild(buttonContainer);
            buttonContainer.appendChild(complete);
            buttonContainer.appendChild(remove);
        };
    };

    const removeTask = () => {

    };

    const toggleDescription = (task) => {
        const taskDiv = document.getElementById(task.id);
        const disc = document.getElementById(`${task.id}Disc`);

        if (disc !== null) {
            disc.remove();
        } else {
            const element = document.createElement('p');
            element.id = `${task.id}Disc`;
            element.textContent = task.description;
            taskDiv.appendChild(element);
        }

    }

    const renderDay = () => {
        const container = document.getElementById('mainContainer');
        container.innerHTML = '';

        const heading = document.createElement('h2');
        heading.textContent = 'Today';
        container.appendChild(heading);

        const date = new Date();
        const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

        Object.keys(localStorage).forEach(project => {
            if (localStorage.getItem(project) !== '' && localStorage.getItem(project) !== undefined && project !== 'count') {
                let temp = JSON.parse(localStorage.getItem(project));
                Object.keys(temp).forEach( key => {
                    if (temp[key].dueDate === today) {
                        renderTask(temp[key], project);
                    };
                });
             };
        });

        createAddTaskButton();
    };

    const renderAll = () => {
        const container = document.getElementById('mainContainer');
        container.innerHTML = '';

        const heading = document.createElement('h2');
        heading.textContent = 'All Tasks';
        container.appendChild(heading);

        Object.keys(localStorage).forEach(project => {
            if (localStorage.getItem(project) !== '' && localStorage.getItem(project) !== undefined && localStorage.getItem(project) !== 'count') {
                let temp = JSON.parse(localStorage.getItem(project));
                Object.keys(temp).forEach( key => {
                    renderTask(temp[key], project);
                });
             };
        });

        createAddTaskButton();
    };

    const renderProject = (project) => {
        const container = document.getElementById('mainContainer');
        container.innerHTML = '';

        const heading = document.createElement('h2');
        heading.textContent = project;
        container.appendChild(heading);

        if (localStorage.getItem(project) !== '') {
            let temp = JSON.parse(localStorage.getItem(project));
            Object.keys(temp).forEach( key => {
                renderTask(temp[key], project);
            });
        };

        createAddTaskButton(project);
    };

    const removeProject = () => {

    };

    const createAddTaskButton = (project = 'default') => {
        const button = document.createElement('button');
        button.id = 'addTask';
        document.getElementById('mainContainer').appendChild(button);
        button.innerHTML = '+ add task';
        button.addEventListener('click', () => taskForm(project));
    }

    const renderProjectButtons = () => {
        const sidebar = document.getElementById('sidebar');

        Object.keys(localStorage).forEach(project => {
            if (project !== 'default' && project !== 'count') {
                const element = document.createElement('button');
                element.id = project;
                element.textContent = project;
                element.addEventListener('click', () => renderProject(project));
                sidebar.appendChild(element);
             };
        });
    };

    const taskForm = (project) => {
        const container = document.getElementById('mainContainer');
        const form = document.createElement('form');
        form.id = 'taskForm';

        const title = document.createElement('input');
        title.id = 'taskTitleInput';
        title.setAttribute('type', 'text');
        title.setAttribute('size', 50 );
        title.required = true;
        title.setAttribute('name', 'title');
        title.setAttribute('placeholder', 'Title');

        const list = document.createElement('ul');
        const item1 = document.createElement('li');
        const item2 = document.createElement('li');
        const item3 = document.createElement('li');

        const submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('value', 'Create task');

        const dateLabel = document.createElement('label');
        dateLabel.setAttribute('for', 'dateInput');
        dateLabel.textContent = 'Due date: ';

        const date = document.createElement('input');
        date.id = 'dateInput';
        date.setAttribute('type', 'date');
        title.required = true;
        title.setAttribute('name', 'date');

        const description = document.createElement('textarea');
        description.setAttribute('placeholder', 'Description...');

        submit.addEventListener('click', (e) => {
            e.preventDefault();
            if (title.value !== '' && date.value.length !== 0) {
                const temp = (0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(title.value, description.value , date.value);
                _storageInterface__WEBPACK_IMPORTED_MODULE_1__.StorageInterface.addTask(temp, project);
                container.removeChild(form);
                renderTask(temp, project);
                createAddTaskButton();
            };
        });

        form.appendChild(list);
        list.appendChild(item1);
        item1.appendChild(title);
        list.appendChild(item2);
        item2.appendChild(description);
        list.appendChild(item3);
        item3.appendChild(dateLabel);
        item3.appendChild(date);
        form.appendChild(submit);

        container.removeChild(document.getElementById('addTask'));
        container.appendChild(form);
        title.focus();
    };

    const projectForm = () => {
        const sidebar = document.getElementById('sidebar');
        const addButton = document.getElementById('addProjectButton');

        const form = document.createElement('form');

        const project = document.createElement('input');
        project.setAttribute('type', 'text');
        project.required = true;
        project.setAttribute('name', 'project');
        project.setAttribute('placeholder', 'Project name');

        const submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('value', 'Create');

        submit.addEventListener('click', (e) => {
            if (project.value !== '') {
                e.preventDefault();
                _storageInterface__WEBPACK_IMPORTED_MODULE_1__.StorageInterface.addProject(project.value.trim());

                const element = document.createElement('button');
                element.id = project.value.trim();
                element.textContent = project.value.trim();
                element.addEventListener('click', () => renderProject(project.value.trim()));
                form.remove();
                sidebar.insertBefore(element, addButton);
            };
        });

        form.appendChild(project);
        form.appendChild(submit);
        sidebar.insertBefore(form, addButton);
        project.focus();



    };

    return {
        pageLoad,
        renderTask,
        removeTask,
        renderDay,
        renderAll,
        renderProject,
        removeProject,
        taskForm,
        projectForm
    };

})();

/***/ }),

/***/ "./src/storageInterface.js":
/*!*********************************!*\
  !*** ./src/storageInterface.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageInterface": () => (/* binding */ StorageInterface)
/* harmony export */ });
const StorageInterface = (() => {

    const initStorage = () => {
        if (localStorage.getItem('default') === null) {
            localStorage.setItem('default', '');
            localStorage.setItem('count', '0');
        } else {
            console.log('Error: localStorage has already been initialized');
        };
    };
    
    const clearStorage = () => {
        localStorage.clear();
    };
    
    const addTask = (task, project = 'default') => {
        let temp = {};
        if (localStorage.getItem(project) !== '') {
            temp = JSON.parse(localStorage.getItem(project));
        };
        temp[task.id] = task;
        temp = JSON.stringify(temp);
        localStorage.setItem(project, temp);
    };
    
    const updateTask = (task, project = 'default') => {
        let temp = {};
        if (localStorage.getItem(project) !== '') {
            temp = JSON.parse(localStorage.getItem(project));
        };
        temp[task.id] = task;
        temp = JSON.stringify(temp);
        localStorage.setItem(project, temp);
    };
    
    const removeTask = (id, project = 'default') => {
        let temp = JSON.parse(localStorage.getItem(project));
        delete temp[id];
        temp = JSON.stringify(temp);
        localStorage.setItem(project, temp);
    };
    
    const getTask = (id, project = 'default') => {
        let temp = JSON.parse(localStorage.getItem(project));
        return temp.id;
    };
    
    const addProject = (project) => {
        if (localStorage.getItem(project) === null) {
            localStorage.setItem(project, '');
            return 'success';
        } else {
            console.log(`Error: a project named ${project} already exists`);
            return 'error';
        }
    };
    
    const removeProject = (project) => {
        localStorage.removeItem(project);
    };
    
    const getProject = (project = 'default') => {
        return JSON.parse(localStorage.getItem(project));
    };

    const toggleComplete = (id, project = 'default') => {
        let temp = JSON.parse(localStorage.getItem(project));

        if (temp[id].completed) {
            temp[id].completed = false;
        } else {
            temp[id].completed = true;
        };
        temp = JSON.stringify(temp);
        localStorage.setItem(project, temp);
    };

    const checkCompleted = (id, project = 'default') => {
        let temp = JSON.parse(localStorage.getItem(project));

        return temp[id].completed
    };


    return {
        initStorage, 
        clearStorage, 
        addTask, 
        updateTask, 
        removeTask, 
        getTask, 
        addProject, 
        removeProject, 
        getProject,
        toggleComplete,
        checkCompleted
    };
})();



/***/ }),

/***/ "./src/taskFactory.js":
/*!****************************!*\
  !*** ./src/taskFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTask)
/* harmony export */ });
const createCounter = () => {
    return () => {
        let count = localStorage.getItem('count');
        count ++;
        localStorage.setItem('count', count);
        return count;
    };
};

const counter = createCounter();

function createTask(title, description = '', dueDate = '', priority = '', completed = false) {
    return {id: counter(), title, description, dueDate, priority, completed};
};



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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _storageInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageInterface */ "./src/storageInterface.js");
/* harmony import */ var _taskFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskFactory */ "./src/taskFactory.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");





_storageInterface__WEBPACK_IMPORTED_MODULE_1__.StorageInterface.initStorage();
_displayController__WEBPACK_IMPORTED_MODULE_3__.DisplayController.pageLoad();
_displayController__WEBPACK_IMPORTED_MODULE_3__.DisplayController.renderDay();


const today = document.getElementById('day');
const all = document.getElementById('all');
const addProjectButton = document.getElementById('addProjectButton');


today.addEventListener('click', () => _displayController__WEBPACK_IMPORTED_MODULE_3__.DisplayController.renderDay());

all.addEventListener('click', () => _displayController__WEBPACK_IMPORTED_MODULE_3__.DisplayController.renderAll());

addProjectButton.addEventListener('click', () => {
    _displayController__WEBPACK_IMPORTED_MODULE_3__.DisplayController.projectForm();
    console.log('project form triggered');
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsd0RBQVU7QUFDdkMsZ0JBQWdCLHVFQUF3QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMEVBQTJCOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDdFVNOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysa0RBQWtELFNBQVM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlO0FBQ2YsWUFBWTtBQUNaOzs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDaUM7QUFDZjtBQUNpQjs7QUFFeEQsMkVBQTRCO0FBQzVCLDBFQUEwQjtBQUMxQiwyRUFBMkI7OztBQUczQjtBQUNBO0FBQ0E7OztBQUdBLHNDQUFzQywyRUFBMkI7O0FBRWpFLG9DQUFvQywyRUFBMkI7O0FBRS9EO0FBQ0EsSUFBSSw2RUFBNkI7QUFDakM7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlSW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tZGFyay1ncmF5OiAjMzM0MTU1O1xcbiAgICAtLW1lZC1ncmF5OiAjYWNiYmQxO1xcbiAgICAtLWxpZ2h0LWdyYXk6ICNlMmU4ZjA7XFxuICAgIC0tbGlnaHQtdGV4dDogI2Y0ZjRmNTtcXG4gICAgLS1kYXJrLXRleHQ6ICMxZTFlMjI7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJzaWRlYmFyIG1haW5cXFwiO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZ2FwOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkLWdyYXkpO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay10ZXh0KTtcXG59XFxuXFxuI3NpZGViYXIgPiBidXR0b24ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMzVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLXRleHQpO1xcbn1cXG5cXG4jc2lkZWJhciA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE5OSk7XFxufVxcblxcblxcbiNtYWluQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay10ZXh0KTtcXG59XFxuXFxuI21haW5Db250YWluZXIgPiBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbiNtYWluQ29udGFpbmVyID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ5OGZmMzc7XFxufVxcblxcbi50YXNrIHtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXRleHQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzayAgaDMge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnRpdGxlQ29udGFpbmVyIHAge1xcbiAgICBmb250LXNpemU6IC44NXJlbTtcXG59XFxuXFxuLnRhc2sgIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG59XFxuXFxuLnRhc2sgIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDI1NSwgMTI3LCAxMjcsIDAuMzQ2KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOiAjYmFiYWJhICFpbXBvcnRhbnQ7XFxufVxcblxcbiNtYWluQ29udGFpbmVyID4gZm9ybSB7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC10ZXh0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWFpbkNvbnRhaW5lciBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG59XFxuXFxuI21haW5Db250YWluZXIgbGFiZWwge1xcbiAgICBmb250LXNpemU6IC44NXJlbTtcXG59XFxuXFxuI21haW5Db250YWluZXIgaDM6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0YXNrRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuI3Rhc2tGb3JtIGxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luOiAuNXJlbTtcXG59XFxuXFxuI3Rhc2tUaXRsZUlucHV0IHtcXG4gICAgd2lkdGg6IDI1cmVtO1xcbn1cXG5cXG4jdGFza0Zvcm0gdGV4dEFyZWEge1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIHdpZHRoOiAyNXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi5mbGV4Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4udGl0bGVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi5idXR0b25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2I7O2tCQUVjO0lBQ2QsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixVQUFVO0lBQ1YsaUNBQWlDO0lBQ2pDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNENBQTRDO0FBQ2hEOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1kYXJrLWdyYXk6ICMzMzQxNTU7XFxuICAgIC0tbWVkLWdyYXk6ICNhY2JiZDE7XFxuICAgIC0tbGlnaHQtZ3JheTogI2UyZThmMDtcXG4gICAgLS1saWdodC10ZXh0OiAjZjRmNGY1O1xcbiAgICAtLWRhcmstdGV4dDogIzFlMWUyMjtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcInNpZGViYXIgbWFpblxcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgd2lkdGg6IDE1cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBnYXA6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWQtZ3JheSk7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLXRleHQpO1xcbn1cXG5cXG4jc2lkZWJhciA+IGJ1dHRvbiB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IC4zNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstdGV4dCk7XFxufVxcblxcbiNzaWRlYmFyID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTk5KTtcXG59XFxuXFxuXFxuI21haW5Db250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAuNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLXRleHQpO1xcbn1cXG5cXG4jbWFpbkNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuI21haW5Db250YWluZXIgPiBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDk4ZmYzNztcXG59XFxuXFxuLnRhc2sge1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrICBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udGl0bGVDb250YWluZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogLjg1cmVtO1xcbn1cXG5cXG4udGFzayAgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcbn1cXG5cXG4udGFzayAgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMjU1LCAxMjcsIDEyNywgMC4zNDYpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6ICNiYWJhYmEgIWltcG9ydGFudDtcXG59XFxuXFxuI21haW5Db250YWluZXIgPiBmb3JtIHtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXRleHQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtYWluQ29udGFpbmVyIGlucHV0IHtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcbn1cXG5cXG4jbWFpbkNvbnRhaW5lciBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogLjg1cmVtO1xcbn1cXG5cXG4jbWFpbkNvbnRhaW5lciBoMzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Rhc2tGb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jdGFza0Zvcm0gbGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IC41cmVtO1xcbn1cXG5cXG4jdGFza1RpdGxlSW5wdXQge1xcbiAgICB3aWR0aDogMjVyZW07XFxufVxcblxcbiN0YXNrRm9ybSB0ZXh0QXJlYSB7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgd2lkdGg6IDI1cmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLmZsZXhDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi50aXRsZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLmJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuL3Rhc2tGYWN0b3J5XCI7XG5pbXBvcnQgeyBTdG9yYWdlSW50ZXJmYWNlIH0gZnJvbSBcIi4vc3RvcmFnZUludGVyZmFjZVwiO1xuXG5leHBvcnQgY29uc3QgRGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2VMb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XG4gICAgICAgIHBhZ2UuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgaGVhZGVyLmlubmVySFRNTCA9ICc8aDE+VG9kbyBMaXN0PC9oMT4nXG5cbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaWRlYmFyLmlkID0gJ3NpZGViYXInO1xuICAgICAgICBwYWdlLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG4gICAgICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkYXkuaWQgPSAnZGF5JztcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChkYXkpO1xuICAgICAgICBkYXkudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuXG4gICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhbGwuaWQgPSAnYWxsJztcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChhbGwpO1xuICAgICAgICBhbGwudGV4dENvbnRlbnQgPSAnQWxsIHRhc2tzJztcblxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICAgICAgICBwcm9qZWN0cy50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgICAgICAgcmVuZGVyUHJvamVjdEJ1dHRvbnMoKTtcblxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uaWQgPSAnYWRkUHJvamVjdEJ1dHRvbic7XG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnKyBhZGQgcHJvamVjdCc7XG5cbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmlkID0gJ21haW5Db250YWluZXInO1xuICAgICAgICBwYWdlLmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJUYXNrID0gKHRhc2ssIHByb2plY3QgPSAnZGVmYXVsdCcpID0+IHtcbiAgICAgICAgaWYgKHRhc2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSB0YXNrLmlkO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZsZXhDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmxleENvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGl0bGVDb250YWluZXInKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVEZXNjcmlwdGlvbih0YXNrKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZSBkYXRlOiAke3Rhc2suZHVlRGF0ZX1gO1xuXG4gICAgICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25Db250YWluZXInKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbXBsZXRlLnRleHRDb250ZW50ID0gJ01hcmsgQ29tcGxldGUnO1xuICAgICAgICAgICAgY29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgU3RvcmFnZUludGVyZmFjZS50b2dnbGVDb21wbGV0ZSh0YXNrLmlkLCBwcm9qZWN0KTtcblxuICAgICAgICAgICAgICAgIGlmIChTdG9yYWdlSW50ZXJmYWNlLmNoZWNrQ29tcGxldGVkKHRhc2suaWQsIHByb2plY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGUuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcmVtb3ZlLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGFzay5pZDtcbiAgICAgICAgICAgICAgICBTdG9yYWdlSW50ZXJmYWNlLnJlbW92ZVRhc2soaWQsIHByb2plY3QpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2suaWQpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKHRhc2suY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZmxleENvbnRhaW5lcik7XG4gICAgICAgICAgICBmbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICAgICAgZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVUYXNrID0gKCkgPT4ge1xuXG4gICAgfTtcblxuICAgIGNvbnN0IHRvZ2dsZURlc2NyaXB0aW9uID0gKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2suaWQpO1xuICAgICAgICBjb25zdCBkaXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFzay5pZH1EaXNjYCk7XG5cbiAgICAgICAgaWYgKGRpc2MgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRpc2MucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZWxlbWVudC5pZCA9IGAke3Rhc2suaWR9RGlzY2A7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckRheSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB0b2RheSA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtkYXRlLmdldE1vbnRoKCkrMX0tJHtkYXRlLmdldERhdGUoKX1gO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0KSAhPT0gJycgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdCkgIT09IHVuZGVmaW5lZCAmJiBwcm9qZWN0ICE9PSAnY291bnQnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3QpKTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0ZW1wKS5mb3JFYWNoKCBrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVtcFtrZXldLmR1ZURhdGUgPT09IHRvZGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJUYXNrKHRlbXBba2V5XSwgcHJvamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3JlYXRlQWRkVGFza0J1dHRvbigpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJBbGwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdBbGwgVGFza3MnO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3QpICE9PSAnJyAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0KSAhPT0gdW5kZWZpbmVkICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3QpICE9PSAnY291bnQnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3QpKTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0ZW1wKS5mb3JFYWNoKCBrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJUYXNrKHRlbXBba2V5XSwgcHJvamVjdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3JlYXRlQWRkVGFza0J1dHRvbigpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0KSAhPT0gJycpIHtcbiAgICAgICAgICAgIGxldCB0ZW1wID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0KSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0ZW1wKS5mb3JFYWNoKCBrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbmRlclRhc2sodGVtcFtrZXldLCBwcm9qZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNyZWF0ZUFkZFRhc2tCdXR0b24ocHJvamVjdCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoKSA9PiB7XG5cbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlQWRkVGFza0J1dHRvbiA9IChwcm9qZWN0ID0gJ2RlZmF1bHQnKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uaWQgPSAnYWRkVGFzayc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJykuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICcrIGFkZCB0YXNrJztcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGFza0Zvcm0ocHJvamVjdCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclByb2plY3RCdXR0b25zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdCAhPT0gJ2RlZmF1bHQnICYmIHByb2plY3QgIT09ICdjb3VudCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5pZCA9IHByb2plY3Q7XG4gICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlclByb2plY3QocHJvamVjdCkpO1xuICAgICAgICAgICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRhc2tGb3JtID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5pZCA9ICd0YXNrRm9ybSc7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aXRsZS5pZCA9ICd0YXNrVGl0bGVJbnB1dCc7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnc2l6ZScsIDUwICk7XG4gICAgICAgIHRpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcblxuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb25zdCBpdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IGl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdDcmVhdGUgdGFzaycpO1xuXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkYXRlSW5wdXQnKTtcbiAgICAgICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBkYXRlOiAnO1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlLmlkID0gJ2RhdGVJbnB1dCc7XG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgdGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZScpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbi4uLicpO1xuXG4gICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAodGl0bGUudmFsdWUgIT09ICcnICYmIGRhdGUudmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IGNyZWF0ZVRhc2sodGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlICwgZGF0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgU3RvcmFnZUludGVyZmFjZS5hZGRUYXNrKHRlbXAsIHByb2plY3QpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChmb3JtKTtcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrKHRlbXAsIHByb2plY3QpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFkZFRhc2tCdXR0b24oKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbTEpO1xuICAgICAgICBpdGVtMS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbTIpO1xuICAgICAgICBpdGVtMi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbTMpO1xuICAgICAgICBpdGVtMy5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgICAgICBpdGVtMy5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFzaycpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICB0aXRsZS5mb2N1cygpO1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJyk7XG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnV0dG9uJyk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBwcm9qZWN0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdCcpO1xuICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBuYW1lJyk7XG5cbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQ3JlYXRlJyk7XG5cbiAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBTdG9yYWdlSW50ZXJmYWNlLmFkZFByb2plY3QocHJvamVjdC52YWx1ZS50cmltKCkpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBwcm9qZWN0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdC52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlclByb2plY3QocHJvamVjdC52YWx1ZS50cmltKCkpKTtcbiAgICAgICAgICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHNpZGViYXIuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGFkZEJ1dHRvbik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgICAgIHNpZGViYXIuaW5zZXJ0QmVmb3JlKGZvcm0sIGFkZEJ1dHRvbik7XG4gICAgICAgIHByb2plY3QuZm9jdXMoKTtcblxuXG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZUxvYWQsXG4gICAgICAgIHJlbmRlclRhc2ssXG4gICAgICAgIHJlbW92ZVRhc2ssXG4gICAgICAgIHJlbmRlckRheSxcbiAgICAgICAgcmVuZGVyQWxsLFxuICAgICAgICByZW5kZXJQcm9qZWN0LFxuICAgICAgICByZW1vdmVQcm9qZWN0LFxuICAgICAgICB0YXNrRm9ybSxcbiAgICAgICAgcHJvamVjdEZvcm1cbiAgICB9O1xuXG59KSgpOyIsImV4cG9ydCBjb25zdCBTdG9yYWdlSW50ZXJmYWNlID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGluaXRTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RlZmF1bHQnKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlZmF1bHQnLCAnJyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY291bnQnLCAnMCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBsb2NhbFN0b3JhZ2UgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZCcpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgY2xlYXJTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaywgcHJvamVjdCA9ICdkZWZhdWx0JykgPT4ge1xuICAgICAgICBsZXQgdGVtcCA9IHt9O1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdCkgIT09ICcnKSB7XG4gICAgICAgICAgICB0ZW1wID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0KSk7XG4gICAgICAgIH07XG4gICAgICAgIHRlbXBbdGFzay5pZF0gPSB0YXNrO1xuICAgICAgICB0ZW1wID0gSlNPTi5zdHJpbmdpZnkodGVtcCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3QsIHRlbXApO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgdXBkYXRlVGFzayA9ICh0YXNrLCBwcm9qZWN0ID0gJ2RlZmF1bHQnKSA9PiB7XG4gICAgICAgIGxldCB0ZW1wID0ge307XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0KSAhPT0gJycpIHtcbiAgICAgICAgICAgIHRlbXAgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3QpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGVtcFt0YXNrLmlkXSA9IHRhc2s7XG4gICAgICAgIHRlbXAgPSBKU09OLnN0cmluZ2lmeSh0ZW1wKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdCwgdGVtcCk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCByZW1vdmVUYXNrID0gKGlkLCBwcm9qZWN0ID0gJ2RlZmF1bHQnKSA9PiB7XG4gICAgICAgIGxldCB0ZW1wID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0KSk7XG4gICAgICAgIGRlbGV0ZSB0ZW1wW2lkXTtcbiAgICAgICAgdGVtcCA9IEpTT04uc3RyaW5naWZ5KHRlbXApO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0LCB0ZW1wKTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGdldFRhc2sgPSAoaWQsIHByb2plY3QgPSAnZGVmYXVsdCcpID0+IHtcbiAgICAgICAgbGV0IHRlbXAgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3QpKTtcbiAgICAgICAgcmV0dXJuIHRlbXAuaWQ7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3QpID09PSBudWxsKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0LCAnJyk7XG4gICAgICAgICAgICByZXR1cm4gJ3N1Y2Nlc3MnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiBhIHByb2plY3QgbmFtZWQgJHtwcm9qZWN0fSBhbHJlYWR5IGV4aXN0c2ApO1xuICAgICAgICAgICAgcmV0dXJuICdlcnJvcic7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0KTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdCA9ICdkZWZhdWx0JykgPT4ge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0KSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZ2dsZUNvbXBsZXRlID0gKGlkLCBwcm9qZWN0ID0gJ2RlZmF1bHQnKSA9PiB7XG4gICAgICAgIGxldCB0ZW1wID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0KSk7XG5cbiAgICAgICAgaWYgKHRlbXBbaWRdLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgdGVtcFtpZF0uY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZW1wW2lkXS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0ZW1wID0gSlNPTi5zdHJpbmdpZnkodGVtcCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3QsIHRlbXApO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGVja0NvbXBsZXRlZCA9IChpZCwgcHJvamVjdCA9ICdkZWZhdWx0JykgPT4ge1xuICAgICAgICBsZXQgdGVtcCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdCkpO1xuXG4gICAgICAgIHJldHVybiB0ZW1wW2lkXS5jb21wbGV0ZWRcbiAgICB9O1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0U3RvcmFnZSwgXG4gICAgICAgIGNsZWFyU3RvcmFnZSwgXG4gICAgICAgIGFkZFRhc2ssIFxuICAgICAgICB1cGRhdGVUYXNrLCBcbiAgICAgICAgcmVtb3ZlVGFzaywgXG4gICAgICAgIGdldFRhc2ssIFxuICAgICAgICBhZGRQcm9qZWN0LCBcbiAgICAgICAgcmVtb3ZlUHJvamVjdCwgXG4gICAgICAgIGdldFByb2plY3QsXG4gICAgICAgIHRvZ2dsZUNvbXBsZXRlLFxuICAgICAgICBjaGVja0NvbXBsZXRlZFxuICAgIH07XG59KSgpO1xuXG4iLCJjb25zdCBjcmVhdGVDb3VudGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGxldCBjb3VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb3VudCcpO1xuICAgICAgICBjb3VudCArKztcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvdW50JywgY291bnQpO1xuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgfTtcbn07XG5cbmNvbnN0IGNvdW50ZXIgPSBjcmVhdGVDb3VudGVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uID0gJycsIGR1ZURhdGUgPSAnJywgcHJpb3JpdHkgPSAnJywgY29tcGxldGVkID0gZmFsc2UpIHtcbiAgICByZXR1cm4ge2lkOiBjb3VudGVyKCksIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZH07XG59O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFN0b3JhZ2VJbnRlcmZhY2UgfSBmcm9tIFwiLi9zdG9yYWdlSW50ZXJmYWNlXCI7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi90YXNrRmFjdG9yeVwiO1xuaW1wb3J0IHsgRGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbGxlclwiO1xuXG5TdG9yYWdlSW50ZXJmYWNlLmluaXRTdG9yYWdlKCk7XG5EaXNwbGF5Q29udHJvbGxlci5wYWdlTG9hZCgpO1xuRGlzcGxheUNvbnRyb2xsZXIucmVuZGVyRGF5KCk7XG5cblxuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5Jyk7XG5jb25zdCBhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsJyk7XG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdXR0b24nKTtcblxuXG50b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IERpc3BsYXlDb250cm9sbGVyLnJlbmRlckRheSgpKTtcblxuYWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gRGlzcGxheUNvbnRyb2xsZXIucmVuZGVyQWxsKCkpO1xuXG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIERpc3BsYXlDb250cm9sbGVyLnByb2plY3RGb3JtKCk7XG4gICAgY29uc29sZS5sb2coJ3Byb2plY3QgZm9ybSB0cmlnZ2VyZWQnKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==