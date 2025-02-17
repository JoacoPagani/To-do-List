/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --primary-color: #4a90e2;
    --secondary-color: #f5f5f5;
    --text-color: #333;
    --border-color: #ddd;
    --success-color: #4caf50;
    --danger-color: #f44336;
    --shadow: 0 2px 5px rgba(0,0,0,0.1);
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f2f5;
    color: var(--text-color);
    line-height: 1.6;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: var(--shadow);
}

h1 {
    color: var(--primary-color);
    text-align: center;
    margin-bottom: 30px;
    font-size: 2.5em;
}

h2 {
    color: var(--text-color);
    margin-bottom: 20px;
}

/* Botones */
button {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
    margin: 5px;
}

button:hover {
    background-color: #357abd;
    transform: translateY(-1px);
}

/* Botones de cancelar/eliminar */
button.delete-project-btn,
#cancel-project,
.delete-btn,
button[type="button"].cancel-btn {
    background-color: var(--danger-color);
    color: white;
}

button.delete-project-btn:hover,
#cancel-project:hover,
.delete-btn:hover,
button[type="button"].cancel-btn:hover {
    background-color: #d32f2f;
    transform: translateY(-1px);
}

/* Estilo específico para el botón de eliminar proyecto */
.delete-project-btn .delete-btn {
    background-color: var(--danger-color) !important;
    color: white;
    font-size: 18px;
    padding: 5px 12px;
    border-radius: 4px;
    opacity: 0.9;
}

.delete-project-btn .delete-btn:hover {
    opacity: 1;
    background-color: #d32f2f !important  ;
}

/* Estilos para los botones en el modal */
.modal-buttons {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    margin-top: 20px;
}

.modal-buttons button[type="submit"] {
    background-color: var(--primary-color);
}

.modal-buttons button[type="button"] {
    background-color: var(--danger-color);
}

/* Inputs */
input, select {
    padding: 10px;
    margin: 5px 0;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    font-size: 14px;
}

input:focus, select:focus {
    outline: none;
    border-color: var(--primary-color);
}

/* Listas */
ul {
    list-style: none;
    padding: 0;
    margin: 20px 0;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin: 10px 0;
    background: var(--secondary-color);
    border-radius: 5px;
    transition: transform 0.2s ease;
}

li:hover {
    transform: translateX(5px);
}

/* Secciones */
.project-input, .task-input {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.task-input {
    background: var(--secondary-color);
    padding: 20px;
    border-radius: 5px;
}

/* Checkbox personalizado */
input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

/* Tareas completadas */
.completed {
    text-decoration: line-through;
    opacity: 0.7;
}

/* Estados */
.hidden {
    display: none;
}

/* Responsive */
@media (max-width: 600px) {
    .container {
        padding: 15px;
    }

    .project-input, .task-input {
        flex-direction: column;
    }

    button {
        width: auto;
        padding: 8px 16px;
    }

    li {
        flex-direction: column;
        align-items: stretch;
        gap: 10px;
    }

    .task-controls {
        justify-content: flex-end;
    }

    .delete-btn {
        padding: 6px 12px;
    }

    .modal-buttons {
        flex-direction: row;
    }

    .modal-buttons button {
        flex: 1;
    }
}

/* Animaciones */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.container {
    animation: fadeIn 0.5s ease-in;
}

/* Prioridades */
.priority-high {
    border-left: 4px solid var(--danger-color);
}

.priority-medium {
    border-left: 4px solid #ff9800;
}

.priority-low {
    border-left: 4px solid var(--success-color);
}

/* Tooltips */
[data-tooltip] {
    position: relative;
}

[data-tooltip]:hover::before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 5px 10px;
    background: rgba(0,0,0,0.8);
    color: white;
    border-radius: 3px;
    font-size: 12px;
    white-space: nowrap;
}

/* Modal */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: var(--shadow);
    max-width: 400px;
    width: 90%;
}

.modal.hidden {
    display: none;
}

.modal-content input {
    width: 100%;
    padding: 8px;
    margin-top: 10px;
}

/* Estilos para los proyectos */
.project-item {
    position: relative;
    transition: all 0.3s ease;
    border-radius: 5px;
    margin: 8px 0;
}

.project-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    background-color: var(--secondary-color);
    border-radius: 5px;
    width: 100%;
    transition: all 0.3s ease;
}

.project-content:hover {
    background-color: #e8e8e8;
    transform: translateX(5px);
    
}

.project-name {
    flex-grow: 1;
    cursor: pointer;
    padding: 5px;
}

.delete-project-btn {
    background-color: transparent;
    color: var(--danger-color);
    border: none;
    font-size: 20px;
    padding: 0 8px;
    margin: 0;
    cursor: pointer;
    opacity: 0.7;
    transition: all 0.3s ease;
}

.delete-project-btn:hover {
    opacity: 1;
    background-color: transparent;
    transform: scale(1.2);
}

.delete-project-btn:active {
    transform: scale(0.8);
}

/* Tooltip mejorado */
[data-tooltip] {
    position: relative;
}

[data-tooltip]:hover::before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 5px 10px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 3px;
    font-size: 12px;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateX(-50%) translateY(-5px);
    }
}

/* Estilos para las tareas */
.task-info {
    flex-grow: 1;
    margin-right: 15px;
}

.task-controls {
    display: flex;
    align-items: center;
    gap: 10px;
}

/* Botones de eliminar */
.delete-btn, 
.delete-project-btn {
    background-color: var(--danger-color);
    color: white;
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 4px;
    opacity: 0.9;
    transition: all 0.3s ease;
}

.delete-btn:hover, 
.delete-project-btn:hover {
    opacity: 1;
    background-color: #d32f2f;
    transform: translateY(-1px);
}

/* Estilo específico para el botón de eliminar proyecto */
.delete-project-btn {
    font-size: 18px;
    padding: 5px 12px;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --primary-color: #4a90e2;\r\n    --secondary-color: #f5f5f5;\r\n    --text-color: #333;\r\n    --border-color: #ddd;\r\n    --success-color: #4caf50;\r\n    --danger-color: #f44336;\r\n    --shadow: 0 2px 5px rgba(0,0,0,0.1);\r\n}\r\n\r\nbody {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    background-color: #f0f2f5;\r\n    color: var(--text-color);\r\n    line-height: 1.6;\r\n    margin: 0;\r\n    padding: 20px;\r\n}\r\n\r\n.container {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n    background: white;\r\n    padding: 30px;\r\n    border-radius: 10px;\r\n    box-shadow: var(--shadow);\r\n}\r\n\r\nh1 {\r\n    color: var(--primary-color);\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n    font-size: 2.5em;\r\n}\r\n\r\nh2 {\r\n    color: var(--text-color);\r\n    margin-bottom: 20px;\r\n}\r\n\r\n/* Botones */\r\nbutton {\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n    border: none;\r\n    padding: 10px 20px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease;\r\n    font-size: 14px;\r\n    margin: 5px;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: #357abd;\r\n    transform: translateY(-1px);\r\n}\r\n\r\n/* Botones de cancelar/eliminar */\r\nbutton.delete-project-btn,\r\n#cancel-project,\r\n.delete-btn,\r\nbutton[type=\"button\"].cancel-btn {\r\n    background-color: var(--danger-color);\r\n    color: white;\r\n}\r\n\r\nbutton.delete-project-btn:hover,\r\n#cancel-project:hover,\r\n.delete-btn:hover,\r\nbutton[type=\"button\"].cancel-btn:hover {\r\n    background-color: #d32f2f;\r\n    transform: translateY(-1px);\r\n}\r\n\r\n/* Estilo específico para el botón de eliminar proyecto */\r\n.delete-project-btn .delete-btn {\r\n    background-color: var(--danger-color) !important;\r\n    color: white;\r\n    font-size: 18px;\r\n    padding: 5px 12px;\r\n    border-radius: 4px;\r\n    opacity: 0.9;\r\n}\r\n\r\n.delete-project-btn .delete-btn:hover {\r\n    opacity: 1;\r\n    background-color: #d32f2f !important  ;\r\n}\r\n\r\n/* Estilos para los botones en el modal */\r\n.modal-buttons {\r\n    display: flex;\r\n    gap: 10px;\r\n    justify-content: flex-end;\r\n    margin-top: 20px;\r\n}\r\n\r\n.modal-buttons button[type=\"submit\"] {\r\n    background-color: var(--primary-color);\r\n}\r\n\r\n.modal-buttons button[type=\"button\"] {\r\n    background-color: var(--danger-color);\r\n}\r\n\r\n/* Inputs */\r\ninput, select {\r\n    padding: 10px;\r\n    margin: 5px 0;\r\n    border: 1px solid var(--border-color);\r\n    border-radius: 5px;\r\n    font-size: 14px;\r\n}\r\n\r\ninput:focus, select:focus {\r\n    outline: none;\r\n    border-color: var(--primary-color);\r\n}\r\n\r\n/* Listas */\r\nul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 20px 0;\r\n}\r\n\r\nli {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 15px;\r\n    margin: 10px 0;\r\n    background: var(--secondary-color);\r\n    border-radius: 5px;\r\n    transition: transform 0.2s ease;\r\n}\r\n\r\nli:hover {\r\n    transform: translateX(5px);\r\n}\r\n\r\n/* Secciones */\r\n.project-input, .task-input {\r\n    display: flex;\r\n    gap: 10px;\r\n    margin-bottom: 20px;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.task-input {\r\n    background: var(--secondary-color);\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n}\r\n\r\n/* Checkbox personalizado */\r\ninput[type=\"checkbox\"] {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Tareas completadas */\r\n.completed {\r\n    text-decoration: line-through;\r\n    opacity: 0.7;\r\n}\r\n\r\n/* Estados */\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n/* Responsive */\r\n@media (max-width: 600px) {\r\n    .container {\r\n        padding: 15px;\r\n    }\r\n\r\n    .project-input, .task-input {\r\n        flex-direction: column;\r\n    }\r\n\r\n    button {\r\n        width: auto;\r\n        padding: 8px 16px;\r\n    }\r\n\r\n    li {\r\n        flex-direction: column;\r\n        align-items: stretch;\r\n        gap: 10px;\r\n    }\r\n\r\n    .task-controls {\r\n        justify-content: flex-end;\r\n    }\r\n\r\n    .delete-btn {\r\n        padding: 6px 12px;\r\n    }\r\n\r\n    .modal-buttons {\r\n        flex-direction: row;\r\n    }\r\n\r\n    .modal-buttons button {\r\n        flex: 1;\r\n    }\r\n}\r\n\r\n/* Animaciones */\r\n@keyframes fadeIn {\r\n    from { opacity: 0; }\r\n    to { opacity: 1; }\r\n}\r\n\r\n.container {\r\n    animation: fadeIn 0.5s ease-in;\r\n}\r\n\r\n/* Prioridades */\r\n.priority-high {\r\n    border-left: 4px solid var(--danger-color);\r\n}\r\n\r\n.priority-medium {\r\n    border-left: 4px solid #ff9800;\r\n}\r\n\r\n.priority-low {\r\n    border-left: 4px solid var(--success-color);\r\n}\r\n\r\n/* Tooltips */\r\n[data-tooltip] {\r\n    position: relative;\r\n}\r\n\r\n[data-tooltip]:hover::before {\r\n    content: attr(data-tooltip);\r\n    position: absolute;\r\n    bottom: 100%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    padding: 5px 10px;\r\n    background: rgba(0,0,0,0.8);\r\n    color: white;\r\n    border-radius: 3px;\r\n    font-size: 12px;\r\n    white-space: nowrap;\r\n}\r\n\r\n/* Modal */\r\n.modal {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 1000;\r\n}\r\n\r\n.modal-content {\r\n    background-color: white;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    box-shadow: var(--shadow);\r\n    max-width: 400px;\r\n    width: 90%;\r\n}\r\n\r\n.modal.hidden {\r\n    display: none;\r\n}\r\n\r\n.modal-content input {\r\n    width: 100%;\r\n    padding: 8px;\r\n    margin-top: 10px;\r\n}\r\n\r\n/* Estilos para los proyectos */\r\n.project-item {\r\n    position: relative;\r\n    transition: all 0.3s ease;\r\n    border-radius: 5px;\r\n    margin: 8px 0;\r\n}\r\n\r\n.project-content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 12px 15px;\r\n    background-color: var(--secondary-color);\r\n    border-radius: 5px;\r\n    width: 100%;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.project-content:hover {\r\n    background-color: #e8e8e8;\r\n    transform: translateX(5px);\r\n    \r\n}\r\n\r\n.project-name {\r\n    flex-grow: 1;\r\n    cursor: pointer;\r\n    padding: 5px;\r\n}\r\n\r\n.delete-project-btn {\r\n    background-color: transparent;\r\n    color: var(--danger-color);\r\n    border: none;\r\n    font-size: 20px;\r\n    padding: 0 8px;\r\n    margin: 0;\r\n    cursor: pointer;\r\n    opacity: 0.7;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.delete-project-btn:hover {\r\n    opacity: 1;\r\n    background-color: transparent;\r\n    transform: scale(1.2);\r\n}\r\n\r\n.delete-project-btn:active {\r\n    transform: scale(0.8);\r\n}\r\n\r\n/* Tooltip mejorado */\r\n[data-tooltip] {\r\n    position: relative;\r\n}\r\n\r\n[data-tooltip]:hover::before {\r\n    content: attr(data-tooltip);\r\n    position: absolute;\r\n    bottom: 100%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    padding: 5px 10px;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    color: white;\r\n    border-radius: 3px;\r\n    font-size: 12px;\r\n    white-space: nowrap;\r\n    pointer-events: none;\r\n    opacity: 0;\r\n    animation: fadeIn 0.3s ease forwards;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    to {\r\n        opacity: 1;\r\n        transform: translateX(-50%) translateY(-5px);\r\n    }\r\n}\r\n\r\n/* Estilos para las tareas */\r\n.task-info {\r\n    flex-grow: 1;\r\n    margin-right: 15px;\r\n}\r\n\r\n.task-controls {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n/* Botones de eliminar */\r\n.delete-btn, \r\n.delete-project-btn {\r\n    background-color: var(--danger-color);\r\n    color: white;\r\n    font-size: 14px;\r\n    padding: 8px 16px;\r\n    border-radius: 4px;\r\n    opacity: 0.9;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.delete-btn:hover, \r\n.delete-project-btn:hover {\r\n    opacity: 1;\r\n    background-color: #d32f2f;\r\n    transform: translateY(-1px);\r\n}\r\n\r\n/* Estilo específico para el botón de eliminar proyecto */\r\n.delete-project-btn {\r\n    font-size: 18px;\r\n    padding: 5px 12px;\r\n}\r\n"],"sourceRoot":""}]);
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/Dom.js":
/*!********************!*\
  !*** ./src/Dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeApp: () => (/* binding */ initializeApp),
/* harmony export */   showTaskSection: () => (/* binding */ showTaskSection)
/* harmony export */ });
/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage.js */ "./src/Storage.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
// Dom.js mejorado



// Variables globales para mantener el estado
let projectsArray = [];
let currentProject = null;

// Mover las referencias del DOM dentro de una función de inicialización
let projectList, taskList, addProjectBtn, addTaskBtn, viewAllTasksBtn, allTasksList, taskSection, allTasksSection;

function initializeDOMElements() {
    projectList = document.getElementById("project-list");
    taskList = document.getElementById("task-list");
    addProjectBtn = document.getElementById("add-project");
    addTaskBtn = document.getElementById("add-task");
    viewAllTasksBtn = document.getElementById("view-all-tasks");
    allTasksList = document.getElementById("all-tasks-list");
    taskSection = document.getElementById("task-section");
    allTasksSection = document.getElementById("all-tasks-section");

    console.log('DOM Elements initialized:', {
        projectList,
        taskList,
        addProjectBtn,
        addTaskBtn,
        viewAllTasksBtn,
        allTasksList,
        taskSection,
        allTasksSection
    });
}

const initializeApp = (initialProjects) => {
    // Asegurar que tenemos un array de proyectos
    projectsArray = Array.isArray(initialProjects) ? initialProjects : [];
    console.log('Initial projects:', projectsArray);

    // Inicializar elementos del DOM
    initializeDOMElements();

    // Configurar event listeners
    setupEventListeners();

    // Renderizar proyectos iniciales
    renderProjects(projectsArray);

    // Si hay proyectos, mostrar el primero
    if (projectsArray.length > 0) {
        currentProject = projectsArray[0];
        showTaskSection(currentProject);
        renderTasks(currentProject);
    }
};

function setupEventListeners() {
    const projectModal = document.getElementById("project-modal");
    const projectForm = document.getElementById("project-form");
    const cancelProjectBtn = document.getElementById("cancel-project");
    const createProjectBtn = document.querySelector("#project-form button[type='submit']");

    // Función para cerrar el modal
    const closeModal = () => {
        console.log('Closing modal'); // Debug
        projectModal.classList.add("hidden");
        projectForm.reset();
    };

    if (addProjectBtn) {
        addProjectBtn.addEventListener("click", () => {
            console.log('Opening modal'); // Debug
            projectModal.classList.remove("hidden");
        });
    }

    if (cancelProjectBtn) {
        cancelProjectBtn.addEventListener("click", (e) => {
            console.log('Cancel clicked'); // Debug
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        });
    }

    if (projectForm) {
        projectForm.addEventListener("submit", (e) => {
            console.log('Form submitted'); // Debug
            e.preventDefault();
            const projectName = document.getElementById("new-project-name").value.trim();
            
            if (projectName) {
                try {
                    const newProject = new _Project_js__WEBPACK_IMPORTED_MODULE_1__["default"](projectName);
                    projectsArray.push(newProject);
                    renderProjects(projectsArray);
                    _Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveData(projectsArray);
                    closeModal();
                    console.log('New project added:', newProject);
                } catch (error) {
                    console.error("Error creating project:", error);
                }
            }
        });
    }

    // Cerrar modal al hacer clic fuera
    if (projectModal) {
        projectModal.addEventListener("click", (e) => {
            if (e.target === projectModal) {
                console.log('Clicked outside modal'); // Debug
                closeModal();
            }
        });
    }

    // Prevenir que los clics dentro del modal lo cierren
    const modalContent = document.querySelector(".modal-content");
    if (modalContent) {
        modalContent.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }

    if (addTaskBtn) {
        addTaskBtn.addEventListener("click", addTask);
    }

    if (viewAllTasksBtn) {
        viewAllTasksBtn.addEventListener("click", () => {
            allTasksSection.classList.remove("hidden");
            taskSection.classList.add("hidden");
            renderAllTasks(projectsArray);
        });
    }

    // Añadir event listeners para los botones "Back to Projects"
    const backToProjectsBtn = document.getElementById("back-to-projects");
    const backToProjectsFromAllBtn = document.getElementById("back-to-projects-from-all");

    if (backToProjectsBtn) {
        backToProjectsBtn.addEventListener("click", () => {
            taskSection.classList.add("hidden");
            allTasksSection.classList.add("hidden");
        });
    }

    if (backToProjectsFromAllBtn) {
        backToProjectsFromAllBtn.addEventListener("click", () => {
            allTasksSection.classList.add("hidden");
            taskSection.classList.add("hidden");
        });
    }
}

function addTask() {
    if (!currentProject) {
        alert("Please select a project first");
        return;
    }

    const title = document.getElementById("task").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;

    if (title && dueDate) {
        try {
            currentProject.addTask(title, description, dueDate, priority);
            renderTasks(currentProject);
            _Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveData(projectsArray);

            // Limpiar los campos
            document.getElementById("task").value = "";
            document.getElementById("description").value = "";
            document.getElementById("due-date").value = "";
            document.getElementById("priority").value = "low";

            console.log('Task added:', { title, description, dueDate, priority });
        } catch (error) {
            console.error("Error adding task:", error);
        }
    } else {
        alert("Please complete at least the title and due date");
    }
}

function renderProjects(projects) {
    console.log('Rendering projects:', projects);
    if (!projectList) {
        console.error("Project list element not found");
        return;
    }

    projectList.innerHTML = "";
    projects.forEach((project, index) => {
        const projectItem = document.createElement("li");
        projectItem.classList.add("project-item");

        // Contenedor para el nombre del proyecto y botones
        const projectContent = document.createElement("div");
        projectContent.classList.add("project-content");

        // Nombre del proyecto (ahora es clickeable)
        const projectName = document.createElement("span");
        projectName.textContent = project.name;
        projectName.classList.add("project-name");
        projectName.addEventListener("click", () => {
            currentProject = project;
            showTaskSection(project);
            renderTasks(project);
        });

        // Botón de eliminar
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "×"; // Usar × como símbolo de eliminar
        deleteBtn.classList.add("delete-project-btn");
        deleteBtn.setAttribute("data-tooltip", "Delete Project");

        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (confirm(`Are you sure you want to delete the project "${project.name}"?`)) {
                projectsArray.splice(index, 1);
                renderProjects(projectsArray);
                _Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveData(projectsArray);

                // Si el proyecto eliminado era el actual, ocultar la sección de tareas
                if (currentProject === project) {
                    taskSection.classList.add("hidden");
                    allTasksSection.classList.add("hidden");
                }
            }
        });

        // Añadir elementos al contenedor
        projectContent.appendChild(projectName);
        projectContent.appendChild(deleteBtn);
        projectItem.appendChild(projectContent);
        projectList.appendChild(projectItem);
    });
}

function renderTasks(project) {
    if (!taskList) return;
    
    taskList.innerHTML = "";
    project.tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        
        // Crear contenedor para la información de la tarea
        const taskInfo = document.createElement("div");
        taskInfo.classList.add("task-info");
        taskInfo.textContent = `${task.title} - ${task.description || ''} - Vence: ${task.dueDate} - Prioridad: ${task.priority}`;
        
        // Crear contenedor para los controles (checkbox y botón)
        const taskControls = document.createElement("div");
        taskControls.classList.add("task-controls");

        // Checkbox para marcar como completada
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => {
            task.toggleCompleted();
            renderTasks(project);
            _Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveData(projectsArray);
        });

        // Botón de eliminar
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.classList.add("delete-btn"); // Asegurarnos de añadir la clase
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            project.deleteTask(index);
            renderTasks(project);
            _Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveData(projectsArray);
        });

        // Añadir elementos a sus contenedores
        taskControls.appendChild(checkbox);
        taskControls.appendChild(deleteBtn);
        
        taskItem.appendChild(taskInfo);
        taskItem.appendChild(taskControls);
        
        if (task.completed) {
            taskItem.classList.add("completed");
        }
        
        taskList.appendChild(taskItem);
    });
}

function renderAllTasks(projects) {
    if (!allTasksList) return;
    
    allTasksList.innerHTML = "";
    projects.forEach(project => {
        project.tasks.forEach(task => {
            const taskItem = document.createElement("li");
            taskItem.textContent = `${project.name} - ${task.title} - ${task.dueDate}`;
            allTasksList.appendChild(taskItem);
        });
    });
}

function showTaskSection(project) {
    if (!taskSection || !allTasksSection) return;
    
    taskSection.classList.remove("hidden");
    allTasksSection.classList.add("hidden");
    const projectTitle = document.getElementById("project-title");
    if (projectTitle) {
        projectTitle.textContent = project.name;
    }
}




/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
 // Importar la clase Task 

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(title, description, dueDate, priority) {
    const task = new _task__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, priority);
    this.tasks.push(task);
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
  }
}



/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const STORAGE_KEY = 'todoListData';

const Storage = {
    saveData(projectsArray) {
        try {
            const data = {
                projects: projectsArray.map(project => ({
                    name: project.name,
                    tasks: project.tasks.map(task => ({
                        title: task.title,
                        description: task.description,
                        dueDate: task.dueDate,
                        priority: task.priority,
                        completed: task.completed
                    }))
                }))
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving data:', error);
            return false;
        }
    },

    loadData() {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            if (!data) return { projects: [] };
            
            return JSON.parse(data);
        } catch (error) {
            console.error('Error loading data:', error);
            return { projects: [] };
        }
    },

    clearData() {
        localStorage.removeItem(STORAGE_KEY);
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  getTaskDetails() {
    return {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      completed: this.completed
    };
  }
}

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage */ "./src/Storage.js");
/* harmony import */ var _Dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dom.js */ "./src/Dom.js");
// index.js - Inicializa la app
 // Si tienes estilos





document.addEventListener("DOMContentLoaded", () => {
    // Cargar proyectos guardados o crear uno por defecto
    const savedData = _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].loadData();
    let initialProjects = [];

    if (savedData && savedData.projects && savedData.projects.length > 0) {
        initialProjects = savedData.projects.map(projectData => {
            const project = new _Project__WEBPACK_IMPORTED_MODULE_1__["default"](projectData.name);
            if (projectData.tasks) {
                projectData.tasks.forEach(taskData => {
                    project.addTask(
                        taskData.title,
                        taskData.description,
                        taskData.dueDate,
                        taskData.priority
                    );
                });
            }
            return project;
        });
    } else {
        initialProjects = [new _Project__WEBPACK_IMPORTED_MODULE_1__["default"]("Mi Primer Proyecto")];
    }

    console.log('Initial projects:', initialProjects);
    console.log('Is array?', Array.isArray(initialProjects));

    (0,_Dom_js__WEBPACK_IMPORTED_MODULE_3__.initializeApp)(initialProjects);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLFNBQVMsWUFBWSxXQUFXLE9BQU8sUUFBUSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLE9BQU8sVUFBVSxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxZQUFZLE1BQU0sb0JBQW9CLHFCQUFxQixPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE9BQU8sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGlDQUFpQyxpQ0FBaUMsbUNBQW1DLDJCQUEyQiw2QkFBNkIsaUNBQWlDLGdDQUFnQyw0Q0FBNEMsS0FBSyxjQUFjLHFFQUFxRSxrQ0FBa0MsaUNBQWlDLHlCQUF5QixrQkFBa0Isc0JBQXNCLEtBQUssb0JBQW9CLHlCQUF5Qix1QkFBdUIsMEJBQTBCLHNCQUFzQiw0QkFBNEIsa0NBQWtDLEtBQUssWUFBWSxvQ0FBb0MsMkJBQTJCLDRCQUE0Qix5QkFBeUIsS0FBSyxZQUFZLGlDQUFpQyw0QkFBNEIsS0FBSyxpQ0FBaUMsK0NBQStDLHFCQUFxQixxQkFBcUIsMkJBQTJCLDJCQUEyQix3QkFBd0Isa0NBQWtDLHdCQUF3QixvQkFBb0IsS0FBSyxzQkFBc0Isa0NBQWtDLG9DQUFvQyxLQUFLLG9KQUFvSiw4Q0FBOEMscUJBQXFCLEtBQUssc0lBQXNJLGtDQUFrQyxvQ0FBb0MsS0FBSyx1R0FBdUcseURBQXlELHFCQUFxQix3QkFBd0IsMEJBQTBCLDJCQUEyQixxQkFBcUIsS0FBSywrQ0FBK0MsbUJBQW1CLCtDQUErQyxLQUFLLHNFQUFzRSxzQkFBc0Isa0JBQWtCLGtDQUFrQyx5QkFBeUIsS0FBSyxnREFBZ0QsK0NBQStDLEtBQUssZ0RBQWdELDhDQUE4QyxLQUFLLHVDQUF1QyxzQkFBc0Isc0JBQXNCLDhDQUE4QywyQkFBMkIsd0JBQXdCLEtBQUssbUNBQW1DLHNCQUFzQiwyQ0FBMkMsS0FBSyw0QkFBNEIseUJBQXlCLG1CQUFtQix1QkFBdUIsS0FBSyxZQUFZLHNCQUFzQix1Q0FBdUMsNEJBQTRCLHNCQUFzQix1QkFBdUIsMkNBQTJDLDJCQUEyQix3Q0FBd0MsS0FBSyxrQkFBa0IsbUNBQW1DLEtBQUssd0RBQXdELHNCQUFzQixrQkFBa0IsNEJBQTRCLHdCQUF3QixLQUFLLHFCQUFxQiwyQ0FBMkMsc0JBQXNCLDJCQUEyQixLQUFLLGtFQUFrRSxvQkFBb0IscUJBQXFCLDJCQUEyQixLQUFLLGdEQUFnRCxzQ0FBc0MscUJBQXFCLEtBQUssa0NBQWtDLHNCQUFzQixLQUFLLHVEQUF1RCxvQkFBb0IsMEJBQTBCLFNBQVMseUNBQXlDLG1DQUFtQyxTQUFTLG9CQUFvQix3QkFBd0IsOEJBQThCLFNBQVMsZ0JBQWdCLG1DQUFtQyxpQ0FBaUMsc0JBQXNCLFNBQVMsNEJBQTRCLHNDQUFzQyxTQUFTLHlCQUF5Qiw4QkFBOEIsU0FBUyw0QkFBNEIsZ0NBQWdDLFNBQVMsbUNBQW1DLG9CQUFvQixTQUFTLEtBQUssZ0RBQWdELGVBQWUsYUFBYSxhQUFhLGFBQWEsS0FBSyxvQkFBb0IsdUNBQXVDLEtBQUssNkNBQTZDLG1EQUFtRCxLQUFLLDBCQUEwQix1Q0FBdUMsS0FBSyx1QkFBdUIsb0RBQW9ELEtBQUssMENBQTBDLDJCQUEyQixLQUFLLHNDQUFzQyxvQ0FBb0MsMkJBQTJCLHFCQUFxQixrQkFBa0Isb0NBQW9DLDBCQUEwQixvQ0FBb0MscUJBQXFCLDJCQUEyQix3QkFBd0IsNEJBQTRCLEtBQUssK0JBQStCLHdCQUF3QixlQUFlLGdCQUFnQixvQkFBb0IscUJBQXFCLDZDQUE2QyxzQkFBc0IsZ0NBQWdDLDRCQUE0QixzQkFBc0IsS0FBSyx3QkFBd0IsZ0NBQWdDLHNCQUFzQiw0QkFBNEIsa0NBQWtDLHlCQUF5QixtQkFBbUIsS0FBSyx1QkFBdUIsc0JBQXNCLEtBQUssOEJBQThCLG9CQUFvQixxQkFBcUIseUJBQXlCLEtBQUssMkRBQTJELDJCQUEyQixrQ0FBa0MsMkJBQTJCLHNCQUFzQixLQUFLLDBCQUEwQixzQkFBc0IsdUNBQXVDLDRCQUE0QiwyQkFBMkIsaURBQWlELDJCQUEyQixvQkFBb0Isa0NBQWtDLEtBQUssZ0NBQWdDLGtDQUFrQyxtQ0FBbUMsYUFBYSx1QkFBdUIscUJBQXFCLHdCQUF3QixxQkFBcUIsS0FBSyw2QkFBNkIsc0NBQXNDLG1DQUFtQyxxQkFBcUIsd0JBQXdCLHVCQUF1QixrQkFBa0Isd0JBQXdCLHFCQUFxQixrQ0FBa0MsS0FBSyxtQ0FBbUMsbUJBQW1CLHNDQUFzQyw4QkFBOEIsS0FBSyxvQ0FBb0MsOEJBQThCLEtBQUssa0RBQWtELDJCQUEyQixLQUFLLHNDQUFzQyxvQ0FBb0MsMkJBQTJCLHFCQUFxQixrQkFBa0Isb0NBQW9DLDBCQUEwQix1Q0FBdUMscUJBQXFCLDJCQUEyQix3QkFBd0IsNEJBQTRCLDZCQUE2QixtQkFBbUIsNkNBQTZDLEtBQUssMkJBQTJCLFlBQVksdUJBQXVCLHlEQUF5RCxTQUFTLEtBQUsscURBQXFELHFCQUFxQiwyQkFBMkIsS0FBSyx3QkFBd0Isc0JBQXNCLDRCQUE0QixrQkFBa0IsS0FBSywyRUFBMkUsOENBQThDLHFCQUFxQix3QkFBd0IsMEJBQTBCLDJCQUEyQixxQkFBcUIsa0NBQWtDLEtBQUssMERBQTBELG1CQUFtQixrQ0FBa0Msb0NBQW9DLEtBQUssMkZBQTJGLHdCQUF3QiwwQkFBMEIsS0FBSyx1QkFBdUI7QUFDeGpYO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDNVoxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDZmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ21DO0FBQ0E7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1EQUFPO0FBQ2xEO0FBQ0E7QUFDQSxvQkFBb0IsbURBQU87QUFDM0I7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx1Q0FBdUM7QUFDaEYsVUFBVTtBQUNWO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsYUFBYTtBQUNyRjtBQUNBO0FBQ0EsZ0JBQWdCLG1EQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsWUFBWSxJQUFJLHdCQUF3QixXQUFXLGNBQWMsZUFBZSxjQUFjO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQU87QUFDbkIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBTztBQUNuQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGNBQWMsSUFBSSxZQUFZLElBQUksYUFBYTtBQUNyRjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3VEQsQ0FBQztBQUMzQjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZDQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDdEIsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDeEI5RDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN0QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3NCLENBQUM7QUFDUztBQUNoQztBQUNnQztBQUNTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnREFBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnREFBTztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOLCtCQUErQixnREFBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBYTtBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvRG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzRhOTBlMjtcclxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgLS10ZXh0LWNvbG9yOiAjMzMzO1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNkZGQ7XHJcbiAgICAtLXN1Y2Nlc3MtY29sb3I6ICM0Y2FmNTA7XHJcbiAgICAtLWRhbmdlci1jb2xvcjogI2Y0NDMzNjtcclxuICAgIC0tc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjU7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi8qIEJvdG9uZXMgKi9cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1N2FiZDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLyogQm90b25lcyBkZSBjYW5jZWxhci9lbGltaW5hciAqL1xyXG5idXR0b24uZGVsZXRlLXByb2plY3QtYnRuLFxyXG4jY2FuY2VsLXByb2plY3QsXHJcbi5kZWxldGUtYnRuLFxyXG5idXR0b25bdHlwZT1cImJ1dHRvblwiXS5jYW5jZWwtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlci1jb2xvcik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmJ1dHRvbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXIsXHJcbiNjYW5jZWwtcHJvamVjdDpob3ZlcixcclxuLmRlbGV0ZS1idG46aG92ZXIsXHJcbmJ1dHRvblt0eXBlPVwiYnV0dG9uXCJdLmNhbmNlbC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzMmYyZjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLyogRXN0aWxvIGVzcGVjw61maWNvIHBhcmEgZWwgYm90w7NuIGRlIGVsaW1pbmFyIHByb3llY3RvICovXHJcbi5kZWxldGUtcHJvamVjdC1idG4gLmRlbGV0ZS1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5kZWxldGUtcHJvamVjdC1idG4gLmRlbGV0ZS1idG46aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzJmMmYgIWltcG9ydGFudCAgO1xyXG59XHJcblxyXG4vKiBFc3RpbG9zIHBhcmEgbG9zIGJvdG9uZXMgZW4gZWwgbW9kYWwgKi9cclxuLm1vZGFsLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubW9kYWwtYnV0dG9ucyBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLm1vZGFsLWJ1dHRvbnMgYnV0dG9uW3R5cGU9XCJidXR0b25cIl0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyLWNvbG9yKTtcclxufVxyXG5cclxuLyogSW5wdXRzICovXHJcbmlucHV0LCBzZWxlY3Qge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG4vKiBMaXN0YXMgKi9cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxubGkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxufVxyXG5cclxubGk6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbn1cclxuXHJcbi8qIFNlY2Npb25lcyAqL1xyXG4ucHJvamVjdC1pbnB1dCwgLnRhc2staW5wdXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi50YXNrLWlucHV0IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4vKiBDaGVja2JveCBwZXJzb25hbGl6YWRvICovXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLyogVGFyZWFzIGNvbXBsZXRhZGFzICovXHJcbi5jb21wbGV0ZWQge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi8qIEVzdGFkb3MgKi9cclxuLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdC1pbnB1dCwgLnRhc2staW5wdXQge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIH1cclxuXHJcbiAgICBsaSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhc2stY29udHJvbHMge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlbGV0ZS1idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1idXR0b25zIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1idXR0b25zIGJ1dHRvbiB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgIH1cclxufVxyXG5cclxuLyogQW5pbWFjaW9uZXMgKi9cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1pbjtcclxufVxyXG5cclxuLyogUHJpb3JpZGFkZXMgKi9cclxuLnByaW9yaXR5LWhpZ2gge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1kYW5nZXItY29sb3IpO1xyXG59XHJcblxyXG4ucHJpb3JpdHktbWVkaXVtIHtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2ZmOTgwMDtcclxufVxyXG5cclxuLnByaW9yaXR5LWxvdyB7XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xyXG59XHJcblxyXG4vKiBUb29sdGlwcyAqL1xyXG5bZGF0YS10b29sdGlwXSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbltkYXRhLXRvb2x0aXBdOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXRvb2x0aXApO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vKiBNb2RhbCAqL1xyXG4ubW9kYWwge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5tb2RhbC5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4vKiBFc3RpbG9zIHBhcmEgbG9zIHByb3llY3RvcyAqL1xyXG4ucHJvamVjdC1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG4ucHJvamVjdC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnByb2plY3QtY29udGVudDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbiAgICBcclxufVxyXG5cclxuLnByb2plY3QtbmFtZSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5kZWxldGUtcHJvamVjdC1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tZGFuZ2VyLWNvbG9yKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuXHJcbi5kZWxldGUtcHJvamVjdC1idG46YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxufVxyXG5cclxuLyogVG9vbHRpcCBtZWpvcmFkbyAqL1xyXG5bZGF0YS10b29sdGlwXSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbltkYXRhLXRvb2x0aXBdOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXRvb2x0aXApO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlIGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgIH1cclxufVxyXG5cclxuLyogRXN0aWxvcyBwYXJhIGxhcyB0YXJlYXMgKi9cclxuLnRhc2staW5mbyB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi50YXNrLWNvbnRyb2xzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4vKiBCb3RvbmVzIGRlIGVsaW1pbmFyICovXHJcbi5kZWxldGUtYnRuLCBcclxuLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXItY29sb3IpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uZGVsZXRlLWJ0bjpob3ZlciwgXHJcbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzJmMmY7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi8qIEVzdGlsbyBlc3BlY8OtZmljbyBwYXJhIGVsIGJvdMOzbiBkZSBlbGltaW5hciBwcm95ZWN0byAqL1xyXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNs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Q0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLDRDQUE0QztJQUNoRDtBQUNKOztBQUVBLDRCQUE0QjtBQUM1QjtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQSx3QkFBd0I7QUFDeEI7O0lBRUkscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsMkJBQTJCO0FBQy9COztBQUVBLHlEQUF5RDtBQUN6RDtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLXByaW1hcnktY29sb3I6ICM0YTkwZTI7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZjVmNWY1O1xcclxcbiAgICAtLXRleHQtY29sb3I6ICMzMzM7XFxyXFxuICAgIC0tYm9yZGVyLWNvbG9yOiAjZGRkO1xcclxcbiAgICAtLXN1Y2Nlc3MtY29sb3I6ICM0Y2FmNTA7XFxyXFxuICAgIC0tZGFuZ2VyLWNvbG9yOiAjZjQ0MzM2O1xcclxcbiAgICAtLXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjJmNTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41ZW07XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCb3RvbmVzICovXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU3YWJkO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxyXFxufVxcclxcblxcclxcbi8qIEJvdG9uZXMgZGUgY2FuY2VsYXIvZWxpbWluYXIgKi9cXHJcXG5idXR0b24uZGVsZXRlLXByb2plY3QtYnRuLFxcclxcbiNjYW5jZWwtcHJvamVjdCxcXHJcXG4uZGVsZXRlLWJ0bixcXHJcXG5idXR0b25bdHlwZT1cXFwiYnV0dG9uXFxcIl0uY2FuY2VsLWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlci1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlcixcXHJcXG4jY2FuY2VsLXByb2plY3Q6aG92ZXIsXFxyXFxuLmRlbGV0ZS1idG46aG92ZXIsXFxyXFxuYnV0dG9uW3R5cGU9XFxcImJ1dHRvblxcXCJdLmNhbmNlbC1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyZjJmO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxyXFxufVxcclxcblxcclxcbi8qIEVzdGlsbyBlc3BlY8OtZmljbyBwYXJhIGVsIGJvdMOzbiBkZSBlbGltaW5hciBwcm95ZWN0byAqL1xcclxcbi5kZWxldGUtcHJvamVjdC1idG4gLmRlbGV0ZS1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXItY29sb3IpICFpbXBvcnRhbnQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBvcGFjaXR5OiAwLjk7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtcHJvamVjdC1idG4gLmRlbGV0ZS1idG46aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyZjJmICFpbXBvcnRhbnQgIDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRXN0aWxvcyBwYXJhIGxvcyBib3RvbmVzIGVuIGVsIG1vZGFsICovXFxyXFxuLm1vZGFsLWJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1idXR0b25zIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtYnV0dG9ucyBidXR0b25bdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbnB1dHMgKi9cXHJcXG5pbnB1dCwgc2VsZWN0IHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luOiA1cHggMDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3VzLCBzZWxlY3Q6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMaXN0YXMgKi9cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxubGk6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2VjY2lvbmVzICovXFxyXFxuLnByb2plY3QtaW5wdXQsIC50YXNrLWlucHV0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWlucHV0IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDaGVja2JveCBwZXJzb25hbGl6YWRvICovXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGFyZWFzIGNvbXBsZXRhZGFzICovXFxyXFxuLmNvbXBsZXRlZCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcblxcclxcbi8qIEVzdGFkb3MgKi9cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUmVzcG9uc2l2ZSAqL1xcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtaW5wdXQsIC50YXNrLWlucHV0IHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbGkge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50YXNrLWNvbnRyb2xzIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRlbGV0ZS1idG4ge1xcclxcbiAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1vZGFsLWJ1dHRvbnMge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubW9kYWwtYnV0dG9ucyBidXR0b24ge1xcclxcbiAgICAgICAgZmxleDogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBBbmltYWNpb25lcyAqL1xcclxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXHJcXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cXHJcXG4gICAgdG8geyBvcGFjaXR5OiAxOyB9XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi8qIFByaW9yaWRhZGVzICovXFxyXFxuLnByaW9yaXR5LWhpZ2gge1xcclxcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLWRhbmdlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1tZWRpdW0ge1xcclxcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNmZjk4MDA7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1sb3cge1xcclxcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUb29sdGlwcyAqL1xcclxcbltkYXRhLXRvb2x0aXBdIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS10b29sdGlwXTpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogYXR0cihkYXRhLXRvb2x0aXApO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMTAwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi8qIE1vZGFsICovXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIEVzdGlsb3MgcGFyYSBsb3MgcHJveWVjdG9zICovXFxyXFxuLnByb2plY3QtaXRlbSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW46IDhweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRlbnQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hbWUge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYW5nZXItY29sb3IpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMCA4cHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXByb2plY3QtYnRuOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVG9vbHRpcCBtZWpvcmFkbyAqL1xcclxcbltkYXRhLXRvb2x0aXBdIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS10b29sdGlwXTpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogYXR0cihkYXRhLXRvb2x0aXApO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMTAwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2UgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01cHgpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qIEVzdGlsb3MgcGFyYSBsYXMgdGFyZWFzICovXFxyXFxuLnRhc2staW5mbyB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250cm9scyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQm90b25lcyBkZSBlbGltaW5hciAqL1xcclxcbi5kZWxldGUtYnRuLCBcXHJcXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIG9wYWNpdHk6IDAuOTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idG46aG92ZXIsIFxcclxcbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyZjJmO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxyXFxufVxcclxcblxcclxcbi8qIEVzdGlsbyBlc3BlY8OtZmljbyBwYXJhIGVsIGJvdMOzbiBkZSBlbGltaW5hciBwcm95ZWN0byAqL1xcclxcbi5kZWxldGUtcHJvamVjdC1idG4ge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gRG9tLmpzIG1lam9yYWRvXHJcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL1N0b3JhZ2UuanNcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdC5qc1wiO1xyXG5cclxuLy8gVmFyaWFibGVzIGdsb2JhbGVzIHBhcmEgbWFudGVuZXIgZWwgZXN0YWRvXHJcbmxldCBwcm9qZWN0c0FycmF5ID0gW107XHJcbmxldCBjdXJyZW50UHJvamVjdCA9IG51bGw7XHJcblxyXG4vLyBNb3ZlciBsYXMgcmVmZXJlbmNpYXMgZGVsIERPTSBkZW50cm8gZGUgdW5hIGZ1bmNpw7NuIGRlIGluaWNpYWxpemFjacOzblxyXG5sZXQgcHJvamVjdExpc3QsIHRhc2tMaXN0LCBhZGRQcm9qZWN0QnRuLCBhZGRUYXNrQnRuLCB2aWV3QWxsVGFza3NCdG4sIGFsbFRhc2tzTGlzdCwgdGFza1NlY3Rpb24sIGFsbFRhc2tzU2VjdGlvbjtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVET01FbGVtZW50cygpIHtcclxuICAgIHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWxpc3RcIik7XHJcbiAgICB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1saXN0XCIpO1xyXG4gICAgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3RcIik7XHJcbiAgICBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFza1wiKTtcclxuICAgIHZpZXdBbGxUYXNrc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlldy1hbGwtdGFza3NcIik7XHJcbiAgICBhbGxUYXNrc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC10YXNrcy1saXN0XCIpO1xyXG4gICAgdGFza1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stc2VjdGlvblwiKTtcclxuICAgIGFsbFRhc2tzU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLXRhc2tzLXNlY3Rpb25cIik7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0RPTSBFbGVtZW50cyBpbml0aWFsaXplZDonLCB7XHJcbiAgICAgICAgcHJvamVjdExpc3QsXHJcbiAgICAgICAgdGFza0xpc3QsXHJcbiAgICAgICAgYWRkUHJvamVjdEJ0bixcclxuICAgICAgICBhZGRUYXNrQnRuLFxyXG4gICAgICAgIHZpZXdBbGxUYXNrc0J0bixcclxuICAgICAgICBhbGxUYXNrc0xpc3QsXHJcbiAgICAgICAgdGFza1NlY3Rpb24sXHJcbiAgICAgICAgYWxsVGFza3NTZWN0aW9uXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVBcHAgPSAoaW5pdGlhbFByb2plY3RzKSA9PiB7XHJcbiAgICAvLyBBc2VndXJhciBxdWUgdGVuZW1vcyB1biBhcnJheSBkZSBwcm95ZWN0b3NcclxuICAgIHByb2plY3RzQXJyYXkgPSBBcnJheS5pc0FycmF5KGluaXRpYWxQcm9qZWN0cykgPyBpbml0aWFsUHJvamVjdHMgOiBbXTtcclxuICAgIGNvbnNvbGUubG9nKCdJbml0aWFsIHByb2plY3RzOicsIHByb2plY3RzQXJyYXkpO1xyXG5cclxuICAgIC8vIEluaWNpYWxpemFyIGVsZW1lbnRvcyBkZWwgRE9NXHJcbiAgICBpbml0aWFsaXplRE9NRWxlbWVudHMoKTtcclxuXHJcbiAgICAvLyBDb25maWd1cmFyIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIC8vIFJlbmRlcml6YXIgcHJveWVjdG9zIGluaWNpYWxlc1xyXG4gICAgcmVuZGVyUHJvamVjdHMocHJvamVjdHNBcnJheSk7XHJcblxyXG4gICAgLy8gU2kgaGF5IHByb3llY3RvcywgbW9zdHJhciBlbCBwcmltZXJvXHJcbiAgICBpZiAocHJvamVjdHNBcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c0FycmF5WzBdO1xyXG4gICAgICAgIHNob3dUYXNrU2VjdGlvbihjdXJyZW50UHJvamVjdCk7XHJcbiAgICAgICAgcmVuZGVyVGFza3MoY3VycmVudFByb2plY3QpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2V0dXBFdmVudExpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1tb2RhbFwiKTtcclxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWZvcm1cIik7XHJcbiAgICBjb25zdCBjYW5jZWxQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWwtcHJvamVjdFwiKTtcclxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZm9ybSBidXR0b25bdHlwZT0nc3VibWl0J11cIik7XHJcblxyXG4gICAgLy8gRnVuY2nDs24gcGFyYSBjZXJyYXIgZWwgbW9kYWxcclxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Nsb3NpbmcgbW9kYWwnKTsgLy8gRGVidWdcclxuICAgICAgICBwcm9qZWN0TW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoYWRkUHJvamVjdEJ0bikge1xyXG4gICAgICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ09wZW5pbmcgbW9kYWwnKTsgLy8gRGVidWdcclxuICAgICAgICAgICAgcHJvamVjdE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNhbmNlbFByb2plY3RCdG4pIHtcclxuICAgICAgICBjYW5jZWxQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FuY2VsIGNsaWNrZWQnKTsgLy8gRGVidWdcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb2plY3RGb3JtKSB7XHJcbiAgICAgICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRm9ybSBzdWJtaXR0ZWQnKTsgLy8gRGVidWdcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtbmFtZVwiKS52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocHJvamVjdE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0FycmF5LnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUHJvamVjdHMocHJvamVjdHNBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgU3RvcmFnZS5zYXZlRGF0YShwcm9qZWN0c0FycmF5KTtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05ldyBwcm9qZWN0IGFkZGVkOicsIG5ld1Byb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgcHJvamVjdDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2VycmFyIG1vZGFsIGFsIGhhY2VyIGNsaWMgZnVlcmFcclxuICAgIGlmIChwcm9qZWN0TW9kYWwpIHtcclxuICAgICAgICBwcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gcHJvamVjdE1vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2xpY2tlZCBvdXRzaWRlIG1vZGFsJyk7IC8vIERlYnVnXHJcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcmV2ZW5pciBxdWUgbG9zIGNsaWNzIGRlbnRybyBkZWwgbW9kYWwgbG8gY2llcnJlblxyXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xyXG4gICAgaWYgKG1vZGFsQ29udGVudCkge1xyXG4gICAgICAgIG1vZGFsQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWRkVGFza0J0bikge1xyXG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2aWV3QWxsVGFza3NCdG4pIHtcclxuICAgICAgICB2aWV3QWxsVGFza3NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgYWxsVGFza3NTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIHRhc2tTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIHJlbmRlckFsbFRhc2tzKHByb2plY3RzQXJyYXkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEHDsWFkaXIgZXZlbnQgbGlzdGVuZXJzIHBhcmEgbG9zIGJvdG9uZXMgXCJCYWNrIHRvIFByb2plY3RzXCJcclxuICAgIGNvbnN0IGJhY2tUb1Byb2plY3RzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrLXRvLXByb2plY3RzXCIpO1xyXG4gICAgY29uc3QgYmFja1RvUHJvamVjdHNGcm9tQWxsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrLXRvLXByb2plY3RzLWZyb20tYWxsXCIpO1xyXG5cclxuICAgIGlmIChiYWNrVG9Qcm9qZWN0c0J0bikge1xyXG4gICAgICAgIGJhY2tUb1Byb2plY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRhc2tTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGFsbFRhc2tzU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChiYWNrVG9Qcm9qZWN0c0Zyb21BbGxCdG4pIHtcclxuICAgICAgICBiYWNrVG9Qcm9qZWN0c0Zyb21BbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgYWxsVGFza3NTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIHRhc2tTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2soKSB7XHJcbiAgICBpZiAoIWN1cnJlbnRQcm9qZWN0KSB7XHJcbiAgICAgICAgYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgcHJvamVjdCBmaXJzdFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tcIikudmFsdWU7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XHJcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZTtcclxuXHJcbiAgICBpZiAodGl0bGUgJiYgZHVlRGF0ZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKGN1cnJlbnRQcm9qZWN0KTtcclxuICAgICAgICAgICAgU3RvcmFnZS5zYXZlRGF0YShwcm9qZWN0c0FycmF5KTtcclxuXHJcbiAgICAgICAgICAgIC8vIExpbXBpYXIgbG9zIGNhbXBvc1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWUgPSBcImxvd1wiO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Rhc2sgYWRkZWQ6JywgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgdGFzazpcIiwgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgY29tcGxldGUgYXQgbGVhc3QgdGhlIHRpdGxlIGFuZCBkdWUgZGF0ZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMocHJvamVjdHMpIHtcclxuICAgIGNvbnNvbGUubG9nKCdSZW5kZXJpbmcgcHJvamVjdHM6JywgcHJvamVjdHMpO1xyXG4gICAgaWYgKCFwcm9qZWN0TGlzdCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQcm9qZWN0IGxpc3QgZWxlbWVudCBub3QgZm91bmRcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2plY3RMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XHJcblxyXG4gICAgICAgIC8vIENvbnRlbmVkb3IgcGFyYSBlbCBub21icmUgZGVsIHByb3llY3RvIHkgYm90b25lc1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwcm9qZWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250ZW50XCIpO1xyXG5cclxuICAgICAgICAvLyBOb21icmUgZGVsIHByb3llY3RvIChhaG9yYSBlcyBjbGlja2VhYmxlKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcclxuICAgICAgICBwcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgICAgIHNob3dUYXNrU2VjdGlvbihwcm9qZWN0KTtcclxuICAgICAgICAgICAgcmVuZGVyVGFza3MocHJvamVjdCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEJvdMOzbiBkZSBlbGltaW5hclxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCLDl1wiOyAvLyBVc2FyIMOXIGNvbW8gc8OtbWJvbG8gZGUgZWxpbWluYXJcclxuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0LWJ0blwiKTtcclxuICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS10b29sdGlwXCIsIFwiRGVsZXRlIFByb2plY3RcIik7XHJcblxyXG4gICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIHByb2plY3QgXCIke3Byb2plY3QubmFtZX1cIj9gKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdHNBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyUHJvamVjdHMocHJvamVjdHNBcnJheSk7XHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlLnNhdmVEYXRhKHByb2plY3RzQXJyYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNpIGVsIHByb3llY3RvIGVsaW1pbmFkbyBlcmEgZWwgYWN0dWFsLCBvY3VsdGFyIGxhIHNlY2Npw7NuIGRlIHRhcmVhc1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0ID09PSBwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza1NlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGxUYXNrc1NlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBBw7FhZGlyIGVsZW1lbnRvcyBhbCBjb250ZW5lZG9yXHJcbiAgICAgICAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcbiAgICAgICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdENvbnRlbnQpO1xyXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJUYXNrcyhwcm9qZWN0KSB7XHJcbiAgICBpZiAoIXRhc2tMaXN0KSByZXR1cm47XHJcbiAgICBcclxuICAgIHRhc2tMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ3JlYXIgY29udGVuZWRvciBwYXJhIGxhIGluZm9ybWFjacOzbiBkZSBsYSB0YXJlYVxyXG4gICAgICAgIGNvbnN0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0YXNrSW5mby5jbGFzc0xpc3QuYWRkKFwidGFzay1pbmZvXCIpO1xyXG4gICAgICAgIHRhc2tJbmZvLnRleHRDb250ZW50ID0gYCR7dGFzay50aXRsZX0gLSAke3Rhc2suZGVzY3JpcHRpb24gfHwgJyd9IC0gVmVuY2U6ICR7dGFzay5kdWVEYXRlfSAtIFByaW9yaWRhZDogJHt0YXNrLnByaW9yaXR5fWA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ3JlYXIgY29udGVuZWRvciBwYXJhIGxvcyBjb250cm9sZXMgKGNoZWNrYm94IHkgYm90w7NuKVxyXG4gICAgICAgIGNvbnN0IHRhc2tDb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGFza0NvbnRyb2xzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRyb2xzXCIpO1xyXG5cclxuICAgICAgICAvLyBDaGVja2JveCBwYXJhIG1hcmNhciBjb21vIGNvbXBsZXRhZGFcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlZDtcclxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGFzay50b2dnbGVDb21wbGV0ZWQoKTtcclxuICAgICAgICAgICAgcmVuZGVyVGFza3MocHJvamVjdCk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2Uuc2F2ZURhdGEocHJvamVjdHNBcnJheSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEJvdMOzbiBkZSBlbGltaW5hclxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJFbGltaW5hclwiO1xyXG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiKTsgLy8gQXNlZ3VyYXJub3MgZGUgYcOxYWRpciBsYSBjbGFzZVxyXG4gICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcHJvamVjdC5kZWxldGVUYXNrKGluZGV4KTtcclxuICAgICAgICAgICAgcmVuZGVyVGFza3MocHJvamVjdCk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2Uuc2F2ZURhdGEocHJvamVjdHNBcnJheSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEHDsWFkaXIgZWxlbWVudG9zIGEgc3VzIGNvbnRlbmVkb3Jlc1xyXG4gICAgICAgIHRhc2tDb250cm9scy5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICAgICAgdGFza0NvbnRyb2xzLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza0luZm8pO1xyXG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tDb250cm9scyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRhc2suY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJBbGxUYXNrcyhwcm9qZWN0cykge1xyXG4gICAgaWYgKCFhbGxUYXNrc0xpc3QpIHJldHVybjtcclxuICAgIFxyXG4gICAgYWxsVGFza3NMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgIHRhc2tJdGVtLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC5uYW1lfSAtICR7dGFzay50aXRsZX0gLSAke3Rhc2suZHVlRGF0ZX1gO1xyXG4gICAgICAgICAgICBhbGxUYXNrc0xpc3QuYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dUYXNrU2VjdGlvbihwcm9qZWN0KSB7XHJcbiAgICBpZiAoIXRhc2tTZWN0aW9uIHx8ICFhbGxUYXNrc1NlY3Rpb24pIHJldHVybjtcclxuICAgIFxyXG4gICAgdGFza1NlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIGFsbFRhc2tzU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlXCIpO1xyXG4gICAgaWYgKHByb2plY3RUaXRsZSkge1xyXG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgc2hvd1Rhc2tTZWN0aW9uIH07XHJcbiIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7IC8vIEltcG9ydGFyIGxhIGNsYXNlIFRhc2sgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVUYXNrKGluZGV4KSB7XHJcbiAgICB0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJjb25zdCBTVE9SQUdFX0tFWSA9ICd0b2RvTGlzdERhdGEnO1xyXG5cclxuY29uc3QgU3RvcmFnZSA9IHtcclxuICAgIHNhdmVEYXRhKHByb2plY3RzQXJyYXkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdHM6IHByb2plY3RzQXJyYXkubWFwKHByb2plY3QgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFza3M6IHByb2plY3QudGFza3MubWFwKHRhc2sgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRhc2sudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0YXNrLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiB0YXNrLmR1ZURhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiB0YXNrLnByaW9yaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ6IHRhc2suY29tcGxldGVkXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkRGF0YSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9LRVkpO1xyXG4gICAgICAgICAgICBpZiAoIWRhdGEpIHJldHVybiB7IHByb2plY3RzOiBbXSB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgcHJvamVjdHM6IFtdIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjbGVhckRhdGEoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oU1RPUkFHRV9LRVkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUNvbXBsZXRlZCgpIHtcclxuICAgIHRoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFza0RldGFpbHMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXHJcbiAgICAgIGR1ZURhdGU6IHRoaXMuZHVlRGF0ZSxcclxuICAgICAgcHJpb3JpdHk6IHRoaXMucHJpb3JpdHksXHJcbiAgICAgIGNvbXBsZXRlZDogdGhpcy5jb21wbGV0ZWRcclxuICAgIH07XHJcbiAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW5kZXguanMgLSBJbmljaWFsaXphIGxhIGFwcFxyXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7IC8vIFNpIHRpZW5lcyBlc3RpbG9zXHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XHJcblxyXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL1N0b3JhZ2UnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcIi4vRG9tLmpzXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICAvLyBDYXJnYXIgcHJveWVjdG9zIGd1YXJkYWRvcyBvIGNyZWFyIHVubyBwb3IgZGVmZWN0b1xyXG4gICAgY29uc3Qgc2F2ZWREYXRhID0gU3RvcmFnZS5sb2FkRGF0YSgpO1xyXG4gICAgbGV0IGluaXRpYWxQcm9qZWN0cyA9IFtdO1xyXG5cclxuICAgIGlmIChzYXZlZERhdGEgJiYgc2F2ZWREYXRhLnByb2plY3RzICYmIHNhdmVkRGF0YS5wcm9qZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaW5pdGlhbFByb2plY3RzID0gc2F2ZWREYXRhLnByb2plY3RzLm1hcChwcm9qZWN0RGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0RGF0YS5uYW1lKTtcclxuICAgICAgICAgICAgaWYgKHByb2plY3REYXRhLnRhc2tzKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGF0YS50YXNrcy5mb3JFYWNoKHRhc2tEYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmFkZFRhc2soXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrRGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0RhdGEuZHVlRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0RhdGEucHJpb3JpdHlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGluaXRpYWxQcm9qZWN0cyA9IFtuZXcgUHJvamVjdChcIk1pIFByaW1lciBQcm95ZWN0b1wiKV07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0luaXRpYWwgcHJvamVjdHM6JywgaW5pdGlhbFByb2plY3RzKTtcclxuICAgIGNvbnNvbGUubG9nKCdJcyBhcnJheT8nLCBBcnJheS5pc0FycmF5KGluaXRpYWxQcm9qZWN0cykpO1xyXG5cclxuICAgIGluaXRpYWxpemVBcHAoaW5pdGlhbFByb2plY3RzKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==