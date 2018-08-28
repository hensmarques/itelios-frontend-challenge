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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Products_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Slider_js__ = __webpack_require__(13);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.products = new __WEBPACK_IMPORTED_MODULE_0__Products_js__["a" /* default */]();
        this.slider = new __WEBPACK_IMPORTED_MODULE_1__Slider_js__["a" /* default */]({ el: '.product-slider', children: '.product-slider--item' });

        this.ready();
    }

    _createClass(App, [{
        key: 'ready',
        value: function ready() {
            var _this = this;

            this.products.fetchProducts().then(function () {
                _this.slider.init();
            });
        }
    }]);

    return App;
}();

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_js__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Products = function () {
    function Products() {
        _classCallCheck(this, Products);

        //Defining the app's model structure
        this.data = {
            item: {},
            recomendation: [],
            widget: { size: 0 }
        };
    }

    _createClass(Products, [{
        key: 'fetchProducts',
        value: function fetchProducts() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_0__http_js__["a" /* default */].get('/products.json', function (response) {
                    if (response.length > 0) {
                        _this.data = response[0].data;
                        _this.renderProducts();

                        resolve();
                    }
                });
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

            document.getElementById(containerSelector).innerHTML += '\n        <div class="product-card--wrapper product-slider--item">\n            <img src="' + product.imageName.replace('//www.itelios.com.br/arquivos/imagens', '/images') + '" alt="' + product.name + '" class="product-card--image">\n            <p class="product-card--name">' + this.substringText(product.name) + '</p>\n            <h3 class="product-card--price"><small>Por:</small> ' + product.price + '</h3>\n            <p class="product-card--payment-condition">' + product.productInfo.paymentConditions + '</p>\n\n            <a href="#" class="button product-card--add-to-cart">Adicionar ao Carrinho</a>\n        </div>\n        ';
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

    return Products;
}();

/* harmony default export */ __webpack_exports__["a"] = (Products);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
    function Slider(params) {
        _classCallCheck(this, Slider);

        this.params = {
            el: (typeof params === 'undefined' ? 'undefined' : _typeof(params)) == 'object' ? params.el : params,
            children: (typeof params === 'undefined' ? 'undefined' : _typeof(params)) == 'object' ? params.children : el + ' > *'
        };

        this.data = {
            el: '',
            childre: [],
            childrenLength: 0,
            currentIndex: 0,
            itens_per_page: 3
        };
    }

    _createClass(Slider, [{
        key: 'init',
        value: function init() {
            this.data.el = document.querySelector(this.params.el);
            this.data.children = document.querySelectorAll(this.params.el + ' ' + this.params.children);
            this.data.childrenLength = this.data.children.length;
            this.data.pagination = document.querySelector(this.params.el + ' + .product-slider--pagination');

            this.renderPagination();
            this.setItensPerPage();
            this.addScrollEvent();
        }
    }, {
        key: 'renderPagination',
        value: function renderPagination() {
            var dotsQtd = Math.round(this.data.childrenLength / this.data.itens_per_page) + this.data.childrenLength % this.data.itens_per_page;

            this.data.pagination.innerHTML = '';

            for (var i = 0; i < dotsQtd; i++) {
                this.data.pagination.innerHTML += '<li class="' + (i == 0 ? 'active' : '') + '"></li>';
            }

            this.data.pagination_children = document.querySelectorAll(this.params.el + ' + .product-slider--pagination li');
            this.addPaginationEvent();
        }
    }, {
        key: 'addPaginationEvent',
        value: function addPaginationEvent() {
            var _this = this;

            this.data.pagination_children.forEach(function (li) {

                li.addEventListener("click", function (event) {
                    var dots_nodes = Array.prototype.slice.call(_this.data.pagination_children);
                    _this.data.currentIndex = dots_nodes.indexOf(event.target);
                    _this.setChildrenStyle();

                    _this.data.pagination_children.forEach(function (pag_child) {
                        return pag_child.classList = '';
                    });
                    event.target.className = 'active';
                });
            });
        }
    }, {
        key: 'addScrollEvent',
        value: function addScrollEvent() {
            var _this2 = this;

            window.addEventListener("resize", function (event) {
                _this2.setItensPerPage();
            });
        }
    }, {
        key: 'setChildrenStyle',
        value: function setChildrenStyle() {
            var _this3 = this;

            this.data.children.forEach(function (child) {
                child.style = 'transform: translateX(' + -100 * _this3.data.currentIndex * _this3.data.itens_per_page + '%)';
            });
        }
    }, {
        key: 'setItensPerPage',
        value: function setItensPerPage() {
            if (window.innerWidth >= 1025) {
                this.data.itens_per_page = 3;
            }

            if (window.innerWidth > 640 && window.innerWidth <= 1024) {
                this.data.itens_per_page = 2;
            }

            if (window.innerWidth <= 640) {
                this.data.itens_per_page = 1;
            }

            this.renderPagination();
        }
    }]);

    return Slider;
}();

/* harmony default export */ __webpack_exports__["a"] = (Slider);

/***/ })
/******/ ]);