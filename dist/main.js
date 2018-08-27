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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_js__ = __webpack_require__(6);


window.onload = function () {
    new __WEBPACK_IMPORTED_MODULE_0__App_js__["a" /* default */]();
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    get: function get(url, success) {
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

        xhr.open('GET', url);
        xhr.onreadystatechange = function () {
            if (xhr.readyState > 3 && xhr.status == 200) success(JSON.parse(xhr.responseText));
        };
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.send();
        return xhr;
    }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_js__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var App = function () {
    function App() {
        _classCallCheck(this, App);

        //Defining the app's model structure
        this.data = {
            item: {},
            recomendation: [],
            widget: { size: 0 }
        };

        this.ready();
    }

    _createClass(App, [{
        key: 'ready',
        value: function ready() {
            this.fetchProducts();
        }
    }, {
        key: 'fetchProducts',
        value: function fetchProducts() {
            var _this = this;

            return __WEBPACK_IMPORTED_MODULE_0__http_js__["a" /* default */].get('/products.json', function (response) {
                if (response.length > 0) {
                    _this.data = response[0].data;
                    _this.renderProducts();
                }
            });
        }
    }, {
        key: 'renderProducts',
        value: function renderProducts() {
            var _this2 = this;

            document.getElementById('js--visited-product').innerHTML = '';
            document.getElementById('js--interested-products').innerHTML = '';

            this.renderProduct(this.data.item, 'js--visited-product');

            if (this.data.widget.size > 0) {
                this.data.recommendation.map(function (item) {
                    return _this2.renderProduct(item, 'js--interested-products');
                });
            }
        }
    }, {
        key: 'renderProduct',
        value: function renderProduct(product, containerSelector) {

            document.getElementById(containerSelector).innerHTML += '\n        <div class="product-card--wrapper">\n            <img src="' + product.imageName.replace('//www.itelios.com.br/arquivos/imagens', '/images') + '" alt="' + product.name + '" class="product-card--image">\n            <p class="product-card--name">' + this.substringText(product.name) + '</p>\n            <h3 class="product-card--price"><small>Por:</small> ' + product.price + '</h3>\n            <p class="product-card--payment-condition">' + product.productInfo.paymentConditions + '</p>\n\n            <a href="#" class="button product-card--add-to-cart">Adicionar ao Carrinho</a>\n        </div>\n        ';
        }
    }, {
        key: 'substringText',
        value: function substringText(str, charLength) {
            var formattedStr = str.replace(/^(.{70}[^\s]*).*/, "$1");

            if (formattedStr.endsWith(',')) {
                formattedStr = formattedStr.substr(0, formattedStr.length - 1);
            }

            if (str.length > 90) {
                formattedStr += '...';
            }

            return formattedStr;
        }
    }]);

    return App;
}();

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ })
/******/ ]);