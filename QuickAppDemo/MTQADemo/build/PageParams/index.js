(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(13)
	var $app_style$ = __webpack_require__(14)
	var $app_script$ = __webpack_require__(15)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },

/***/ 13:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "tutorial-page"
	  ],
	  "children": [
	    {
	      "type": "a",
	      "attr": {
	        "href": "tel:10086",
	        "value": "调起电话"
	      }
	    },
	    {
	      "type": "a",
	      "attr": {
	        "href": "sms:10086",
	        "value": "调起短信"
	      }
	    },
	    {
	      "type": "a",
	      "attr": {
	        "href": "mailto:example@xx.com",
	        "value": "调起邮件"
	      }
	    },
	    {
	      "type": "a",
	      "attr": {
	        "href": "http://www.baidu.com/",
	        "value": "调起网页"
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return '接收到的参数:key-' + (this.key) + ',key1-' + (this.key1)}
	      },
	      "classList": [
	        "key"
	      ]
	    }
	  ]
	}

/***/ },

/***/ 14:
/***/ function(module, exports) {

	module.exports = {
	  ".tutorial-page": {
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "a": {
	    "marginTop": "75px",
	    "fontSize": "30px",
	    "color": "#09BA07",
	    "textDecoration": "underline"
	  },
	  ".key": {
	    "marginTop": "75px",
	    "fontSize": "30px",
	    "textDecoration": "underline"
	  }
	}

/***/ },

/***/ 15:
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = {
	  data: {
	    key: 'vaule',
	    key1: 'vaule1',
	    msg: ''
	  },
	  onInit: function onInit() {
	    this.$page.setTitleBar({ text: '接受参数' });
	  },
	  onHide: function onHide() {
	    this.$app.$data.PageParams = {
	      gotoPage: 'Demo',
	      params: {
	        msg: this.key
	      }
	    };
	  }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ }

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map