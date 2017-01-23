webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(3);
	
	__webpack_require__(7);
	
	__webpack_require__(9);
	
	__webpack_require__(17);
	
	__webpack_require__(19);
	
	var _core = __webpack_require__(21);
	
	var _core2 = _interopRequireDefault(_core);
	
	var _dependencies = __webpack_require__(135);
	
	var _dependencies2 = _interopRequireDefault(_dependencies);
	
	var _layout = __webpack_require__(154);
	
	var _layout2 = _interopRequireDefault(_layout);
	
	var _modules = __webpack_require__(159);
	
	var _modules2 = _interopRequireDefault(_modules);
	
	var _resource = __webpack_require__(183);
	
	var _resource2 = _interopRequireDefault(_resource);
	
	var _services = __webpack_require__(186);
	
	var _services2 = _interopRequireDefault(_services);
	
	var _app = __webpack_require__(194);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Main SCSS file for application
	
	
	// Necessary CSS files from vendors
	var app = _angular2.default.module('app', [_dependencies2.default, _core2.default, _layout2.default, _modules2.default, _resource2.default, _services2.default]);
	
	// Application modules
	
	
	(0, _app2.default)(app);
	
	_angular2.default.bootstrap(document.documentElement, ['app']);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _exception = __webpack_require__(22);
	
	var _exception2 = _interopRequireDefault(_exception);
	
	var _logger = __webpack_require__(23);
	
	var _logger2 = _interopRequireDefault(_logger);
	
	var _router = __webpack_require__(107);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _auth = __webpack_require__(109);
	
	var _auth2 = _interopRequireDefault(_auth);
	
	var _interceptors = __webpack_require__(128);
	
	var _interceptors2 = _interopRequireDefault(_interceptors);
	
	var _services = __webpack_require__(130);
	
	var _services2 = _interopRequireDefault(_services);
	
	var _core = __webpack_require__(132);
	
	var _core2 = _interopRequireDefault(_core);
	
	var _core3 = __webpack_require__(133);
	
	var _core4 = _interopRequireDefault(_core3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  Module initialize.
	 *
	 * @ngInject
	 */
	exports.default = _angular2.default.module('app.core', [_exception2.default, _logger2.default, _router2.default, _auth2.default, _interceptors2.default, _services2.default]).config(_core2.default).run(_core4.default).name; // Imports

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _logger = __webpack_require__(23);
	
	var _logger2 = _interopRequireDefault(_logger);
	
	var _exception = __webpack_require__(104);
	
	var _exception2 = _interopRequireDefault(_exception);
	
	var _exceptionHanler = __webpack_require__(105);
	
	var _exceptionHanler2 = _interopRequireDefault(_exceptionHanler);
	
	var _exceptionHandler = __webpack_require__(106);
	
	var _exceptionHandler2 = _interopRequireDefault(_exceptionHandler);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  Module initialize.
	 *
	 * @ngInject
	 */
	exports.default = _angular2.default.module('blocks.exception', [_logger2.default]).factory('ExceptionFactory', _exception2.default).provider('ExceptionHandler', _exceptionHanler2.default).config(function ($provide) {
	  $provide.decorator('$exceptionHandler', _exceptionHandler2.default);
	}).name; // Imports

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _logger = __webpack_require__(24);
	
	var _logger2 = _interopRequireDefault(_logger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  Module initialize.
	 *
	 * @ngInject
	 */
	// Imports
	exports.default = _angular2.default.module('blocks.logger', []).service('LoggerService', _logger2.default).name;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(25);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _typeof2 = __webpack_require__(28);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _keys = __webpack_require__(95);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(100);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  LoggerService class.
	 *
	 * @ngInject
	 */
	var LoggerService = function () {
	  /**
	   * Constructor of the class.
	   *
	   * @param {$log}      $log
	   * @param {$injector} $injector
	   */
	  function LoggerService($log, $injector) {
	    (0, _classCallCheck3.default)(this, LoggerService);
	
	    this.$log = $log;
	    this.$injector = $injector;
	  }
	
	  /**
	   * Method to create error message.
	   *
	   * @param {string}  message
	   * @param {Object}  [data]
	   * @param {string}  [title]
	   */
	
	
	  (0, _createClass3.default)(LoggerService, [{
	    key: 'error',
	    value: function error(message) {
	      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	
	      if (!(typeof message === 'string')) {
	        throw new TypeError('Value of argument "message" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(message));
	      }
	
	      if (!(data instanceof Object)) {
	        throw new TypeError('Value of argument "data" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(data));
	      }
	
	      if (!(typeof title === 'string')) {
	        throw new TypeError('Value of argument "title" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(title));
	      }
	
	      this.showToast(message, data, title);
	
	      // noinspection JSUnresolvedFunction
	      this.$log.error(['Error:', message].join(' '), data, title);
	    }
	
	    /**
	     * Method to create info message.
	     *
	     * @param {string}  message
	     * @param {Object}  [data]
	     * @param {string}  [title]
	     */
	
	  }, {
	    key: 'info',
	    value: function info(message) {
	      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	
	      if (!(typeof message === 'string')) {
	        throw new TypeError('Value of argument "message" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(message));
	      }
	
	      if (!(data instanceof Object)) {
	        throw new TypeError('Value of argument "data" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(data));
	      }
	
	      if (!(typeof title === 'string')) {
	        throw new TypeError('Value of argument "title" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(title));
	      }
	
	      this.showToast(message, data, title);
	
	      // noinspection JSUnresolvedFunction
	      this.$log.info(['Info:', message].join(' '), data, title);
	    }
	
	    /**
	     * Method to create success message.
	     *
	     * @param {string}  message
	     * @param {Object}  [data]
	     * @param {string}  [title]
	     */
	
	  }, {
	    key: 'success',
	    value: function success(message) {
	      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	
	      if (!(typeof message === 'string')) {
	        throw new TypeError('Value of argument "message" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(message));
	      }
	
	      if (!(data instanceof Object)) {
	        throw new TypeError('Value of argument "data" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(data));
	      }
	
	      if (!(typeof title === 'string')) {
	        throw new TypeError('Value of argument "title" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(title));
	      }
	
	      this.showToast(message, data, title);
	
	      // noinspection JSUnresolvedFunction
	      this.$log.log(['Success:', message].join(' '), data, title);
	    }
	
	    /**
	     * Method to create warning message.
	     *
	     * @param {string}  message
	     * @param {Object}  [data]
	     * @param {string}  [title]
	     */
	
	  }, {
	    key: 'warning',
	    value: function warning(message) {
	      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	
	      if (!(typeof message === 'string')) {
	        throw new TypeError('Value of argument "message" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(message));
	      }
	
	      if (!(data instanceof Object)) {
	        throw new TypeError('Value of argument "data" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(data));
	      }
	
	      if (!(typeof title === 'string')) {
	        throw new TypeError('Value of argument "title" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(title));
	      }
	
	      this.showToast(message, data, title);
	
	      // noinspection JSUnresolvedFunction
	      this.$log.warn(['Warning:', message].join(' '), data, title);
	    }
	
	    // noinspection JSUnusedGlobalSymbols
	    /**
	     * Generic logger method.
	     *
	     * @param {*} args
	     */
	
	  }, {
	    key: 'log',
	    value: function log() {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      // noinspection JSUnresolvedFunction
	      this.$log.log(args);
	    }
	
	    /**
	     * Method to show toast.
	     *
	     * @param {string}  message
	     * @param {Object}  [data]
	     * @param {string}  [title]
	     */
	
	  }, {
	    key: 'showToast',
	    value: function showToast(message) {
	      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	
	      if (!(typeof message === 'string')) {
	        throw new TypeError('Value of argument "message" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(message));
	      }
	
	      if (!(data instanceof Object)) {
	        throw new TypeError('Value of argument "data" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(data));
	      }
	
	      if (!(typeof title === 'string')) {
	        throw new TypeError('Value of argument "title" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(title));
	      }
	
	      // noinspection JSUnresolvedFunction
	      this.$injector.get('$mdToast').showSimple([title, message, (0, _keys2.default)(data).length ? data : ''].join(' '));
	    }
	  }]);
	  return LoggerService;
	}();
	
	exports.default = LoggerService;
	
	function _inspect(input, depth) {
	  var maxDepth = 4;
	  var maxKeys = 15;

	  if (depth === undefined) {
	    depth = 0;
	  }

	  depth += 1;

	  if (input === null) {
	    return 'null';
	  } else if (input === undefined) {
	    return 'void';
	  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
	  } else if (Array.isArray(input)) {
	    if (input.length > 0) {
	      var _ret = function () {
	        if (depth > maxDepth) return {
	            v: '[...]'
	          };

	        var first = _inspect(input[0], depth);

	        if (input.every(function (item) {
	          return _inspect(item, depth) === first;
	        })) {
	          return {
	            v: first.trim() + '[]'
	          };
	        } else {
	          return {
	            v: '[' + input.slice(0, maxKeys).map(function (item) {
	              return _inspect(item, depth);
	            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	          };
	        }
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	    } else {
	      return 'Array';
	    }
	  } else {
	    var keys = (0, _keys2.default)(input);

	    if (!keys.length) {
	      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	        return input.constructor.name;
	      } else {
	        return 'Object';
	      }
	    }

	    if (depth > maxDepth) return '{...}';
	    var indent = '  '.repeat(depth - 1);
	    var entries = keys.slice(0, maxKeys).map(function (key) {
	      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
	    }).join('\n  ' + indent);

	    if (keys.length >= maxKeys) {
	      entries += '\n  ' + indent + '...';
	    }

	    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	    } else {
	      return '{\n  ' + indent + entries + '\n' + indent + '}';
	    }
	  }
	}

/***/ },
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(25);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _keys = __webpack_require__(95);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(28);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(100);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  ExceptionFactory class.
	 *
	 * @ngInject
	 */
	var ExceptionFactory = function () {
	  /**
	   * Constructor of the class.
	   *
	   * @param {LoggerService} LoggerService
	   */
	  function ExceptionFactory(LoggerService) {
	    (0, _classCallCheck3.default)(this, ExceptionFactory);
	
	    this.logger = LoggerService;
	  }
	
	  /**
	   * Catcher method.
	   *
	   * @param message
	   * @returns {function(*=)}
	   */
	
	
	  (0, _createClass3.default)(ExceptionFactory, [{
	    key: "catcher",
	    value: function catcher(message) {
	      var _this = this;
	
	      if (!(typeof message === 'string')) {
	        throw new TypeError("Value of argument \"message\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(message));
	      }
	
	      return function (reason) {
	        _this.logger.error(message, reason);
	      };
	    }
	  }]);
	  return ExceptionFactory;
	}();
	
	exports.default = ExceptionFactory;
	
	function _inspect(input, depth) {
	  var maxDepth = 4;
	  var maxKeys = 15;

	  if (depth === undefined) {
	    depth = 0;
	  }

	  depth += 1;

	  if (input === null) {
	    return 'null';
	  } else if (input === undefined) {
	    return 'void';
	  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	    return typeof input === "undefined" ? "undefined" : (0, _typeof3.default)(input);
	  } else if (Array.isArray(input)) {
	    if (input.length > 0) {
	      var _ret = function () {
	        if (depth > maxDepth) return {
	            v: '[...]'
	          };

	        var first = _inspect(input[0], depth);

	        if (input.every(function (item) {
	          return _inspect(item, depth) === first;
	        })) {
	          return {
	            v: first.trim() + '[]'
	          };
	        } else {
	          return {
	            v: '[' + input.slice(0, maxKeys).map(function (item) {
	              return _inspect(item, depth);
	            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	          };
	        }
	      }();

	      if ((typeof _ret === "undefined" ? "undefined" : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	    } else {
	      return 'Array';
	    }
	  } else {
	    var keys = (0, _keys2.default)(input);

	    if (!keys.length) {
	      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	        return input.constructor.name;
	      } else {
	        return 'Object';
	      }
	    }

	    if (depth > maxDepth) return '{...}';
	    var indent = '  '.repeat(depth - 1);
	    var entries = keys.slice(0, maxKeys).map(function (key) {
	      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
	    }).join('\n  ' + indent);

	    if (keys.length >= maxKeys) {
	      entries += '\n  ' + indent + '...';
	    }

	    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	    } else {
	      return '{\n  ' + indent + entries + '\n' + indent + '}';
	    }
	  }
	}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(25);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _keys = __webpack_require__(95);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(28);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(100);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  ExceptionHandler provider.
	 *
	 * @ngInject
	 */
	var ExceptionHandler = function () {
	
	  // Constructor of the class.
	  function ExceptionHandler() {
	    (0, _classCallCheck3.default)(this, ExceptionHandler);
	
	    this.config = {
	      appErrorPrefix: ''
	    };
	  }
	
	  /**
	   * Configure method for the class.
	   *
	   * @param {string}  appErrorPrefix
	   */
	
	
	  (0, _createClass3.default)(ExceptionHandler, [{
	    key: 'configure',
	    value: function configure(appErrorPrefix) {
	      if (!(typeof appErrorPrefix === 'string')) {
	        throw new TypeError('Value of argument "appErrorPrefix" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(appErrorPrefix));
	      }
	
	      this.config.appErrorPrefix = appErrorPrefix;
	    }
	
	    // noinspection JSUnusedGlobalSymbols
	
	  }, {
	    key: '$get',
	    value: function $get() {
	      return {
	        config: this.config
	      };
	    }
	  }]);
	  return ExceptionHandler;
	}();
	
	exports.default = ExceptionHandler;
	
	function _inspect(input, depth) {
	  var maxDepth = 4;
	  var maxKeys = 15;

	  if (depth === undefined) {
	    depth = 0;
	  }

	  depth += 1;

	  if (input === null) {
	    return 'null';
	  } else if (input === undefined) {
	    return 'void';
	  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
	  } else if (Array.isArray(input)) {
	    if (input.length > 0) {
	      var _ret = function () {
	        if (depth > maxDepth) return {
	            v: '[...]'
	          };

	        var first = _inspect(input[0], depth);

	        if (input.every(function (item) {
	          return _inspect(item, depth) === first;
	        })) {
	          return {
	            v: first.trim() + '[]'
	          };
	        } else {
	          return {
	            v: '[' + input.slice(0, maxKeys).map(function (item) {
	              return _inspect(item, depth);
	            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	          };
	        }
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	    } else {
	      return 'Array';
	    }
	  } else {
	    var keys = (0, _keys2.default)(input);

	    if (!keys.length) {
	      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	        return input.constructor.name;
	      } else {
	        return 'Object';
	      }
	    }

	    if (depth > maxDepth) return '{...}';
	    var indent = '  '.repeat(depth - 1);
	    var entries = keys.slice(0, maxKeys).map(function (key) {
	      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
	    }).join('\n  ' + indent);

	    if (keys.length >= maxKeys) {
	      entries += '\n  ' + indent + '...';
	    }

	    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	    } else {
	      return '{\n  ' + indent + entries + '\n' + indent + '}';
	    }
	  }
	}

/***/ },
/* 106 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($delegate, ExceptionHandler, LoggerService) {
	  return function decorator(exception, cause) {
	    var appErrorPrefix = ExceptionHandler.config.appErrorPrefix || '';
	    var errorData = {
	      exception: exception,
	      cause: cause
	    };
	
	    // Create exception message
	    exception.message = [appErrorPrefix, exception.message].join(': ');
	
	    // Delegate exception
	    $delegate(exception, cause);
	
	    /**
	     * Could add the error to a service's collection, add errors to $rootScope, log errors to remote web server,
	     * or log locally. Or throw hard. It is entirely up to you. throw exception;
	     *
	     * @example
	     *  throw { message: 'error message we added' };
	     */
	    LoggerService.error(exception.message, errorData);
	  };
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _routerHelper = __webpack_require__(108);
	
	var _routerHelper2 = _interopRequireDefault(_routerHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  Module initialize.
	 *
	 * @ngInject
	 */
	// Imports
	exports.default = _angular2.default.module('blocks.router', []).provider('RouterHelper', _routerHelper2.default).name;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(25);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _keys = __webpack_require__(95);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(28);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(100);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc RouterHelper provider.
	 *
	 * @ngInject
	 */
	var RouterHelper = function () {
	
	  /**
	   * Constructor for the class.
	   *
	   * @param {$locationProvider}   $locationProvider
	   * @param {$stateProvider}      $stateProvider
	   * @param {$urlRouterProvider}  $urlRouterProvider
	   */
	  function RouterHelper($locationProvider, $stateProvider, $urlRouterProvider) {
	    (0, _classCallCheck3.default)(this, RouterHelper);
	
	    this.$locationProvider = $locationProvider;
	    this.$stateProvider = $stateProvider;
	    this.$urlRouterProvider = $urlRouterProvider;
	
	    // We want to use HTML5 mode with routing
	    // noinspection JSUnresolvedFunction
	    this.$locationProvider.html5Mode(true);
	
	    // Default config for routerHelper
	    this.config = {
	      docTitle: undefined,
	      resolveAlways: {}
	    };
	  }
	
	  /**
	   * Method to override default config values.
	   *
	   * @param {Object} configOverride
	   */
	
	
	  (0, _createClass3.default)(RouterHelper, [{
	    key: 'configure',
	    value: function configure(configOverride) {
	      if (!(configOverride instanceof Object)) {
	        throw new TypeError('Value of argument "configOverride" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(configOverride));
	      }
	
	      _angular2.default.extend(this.config, configOverride);
	    }
	
	    // noinspection JSUnusedGlobalSymbols
	    /**
	     * @ngInject
	     *
	     * @param {*}             $rootScope
	     * @param {$location}     $location
	     * @param {$state}        $state
	     * @param {LoggerService} LoggerService
	     * @returns {{
	     *    configureStates: configureStates,
	     *    getStates: getStates,
	     *    stateCounts: {
	     *      errors: number,
	     *      changes: number,
	     *    }
	     *  }}
	     */
	
	  }, {
	    key: '$get',
	    value: function $get($rootScope, $location, $state, LoggerService) {
	      var $urlRouterProvider = this.$urlRouterProvider;
	      var $stateProvider = this.$stateProvider;
	      var config = this.config;
	      var stateCounts = {
	        errors: 0,
	        changes: 0
	      };
	
	      // Initialize used default variables
	      var handlingStateChangeError = false;
	      var hasOtherwise = false;
	
	      /**
	       * @name  configureStates
	       * @desc  Implementation for configureStates method.
	       *
	       * @param {Object[]}  states
	       * @param {string}    [otherwisePath]
	       */
	      function configureStates(states) {
	        var otherwisePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	        if (!(Array.isArray(states) && states.every(function (item) {
	          return item instanceof Object;
	        }))) {
	          throw new TypeError('Value of argument "states" violates contract.\n\nExpected:\nObject[]\n\nGot:\n' + _inspect(states));
	        }
	
	        if (!(typeof otherwisePath === 'string')) {
	          throw new TypeError('Value of argument "otherwisePath" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(otherwisePath));
	        }
	
	        // Iterate specified states, add resolves to each one and attach state to router
	        states.forEach(function (state) {
	          $stateProvider.state(state.state, state.config);
	        });
	
	        // Set otherwise path
	        if (otherwisePath && !hasOtherwise) {
	          hasOtherwise = true;
	
	          $urlRouterProvider.otherwise(otherwisePath);
	        }
	      }
	
	      /**
	       * @name  getStates
	       * @desc  Implementation for getStates method.
	       *
	       * @returns {Object[]}
	       */
	      function getStates() {
	        // noinspection JSUnresolvedFunction
	        return $state.get();
	      }
	
	      // Private functions for service
	
	      /**
	       * Method to get toState destination name.
	       *
	       * @param   {Object}  toState
	       * @returns {boolean|string}
	       * @private
	       */
	      function _getDestination(toState) {
	        if (!(toState instanceof Object)) {
	          throw new TypeError('Value of argument "toState" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(toState));
	        }
	
	        return toState && (toState.title || toState.name) || 'unknown target';
	      }
	
	      /**
	       * Method to determine error message that is shown to user if router error happens.
	       *
	       * @param   {Object}  error
	       * @param   {Object}  toState
	       * @returns {string}
	       * @private
	       */
	      function _getErrorMessage(error, toState) {
	        if (!(error instanceof Object)) {
	          throw new TypeError('Value of argument "error" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(error));
	        }
	
	        if (!(toState instanceof Object)) {
	          throw new TypeError('Value of argument "toState" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(toState));
	        }
	
	        return 'Error routing to ' + _getDestination(toState) + '. ' + (error.data || '') + ' <br /> \n              ' + (error.statusText || '') + ': ' + (error.status || '');
	      }
	
	      /**
	       * Route cancellation:
	       *  1) On routing error, go to the default location (/).
	       *  2) Provide an exit clause if it tries to do it twice.
	       *
	       * @private
	       */
	      function _handleRoutingErrors() {
	        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
	          // Oh noes error is already activated
	          if (handlingStateChangeError) {
	            return;
	          }
	
	          stateCounts.errors += 1;
	          handlingStateChangeError = true;
	
	          // State requires authenticated user.
	          if (error === 'AUTH_REQUIRED') {
	            $state.go('auth.login');
	
	            LoggerService.error('Login required');
	          } else {
	            // Otherwise show error message and redirect user to root (/)
	            LoggerService.warning(_getErrorMessage(error, toState), toState);
	
	            $location.path('/');
	          }
	        });
	      }
	
	      /**
	       * Method that will update current document title to match with state specification.
	       *
	       * @private
	       */
	      function _updateDocumentTitle() {
	        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
	          stateCounts.changes += 1;
	          handlingStateChangeError = false;
	
	          // data bind to <title>
	          $rootScope.title = [config.docTitle, toState.title || ''].join(' ');
	        });
	      }
	
	      /**
	       * Service initialize method. This will activate state change error listener and updates current page title to
	       * match with state.
	       *
	       * @private
	       */
	      function _init() {
	        _handleRoutingErrors();
	        _updateDocumentTitle();
	      }
	
	      // Specify service methods
	      var service = {
	        configureStates: configureStates,
	        getStates: getStates,
	        stateCounts: stateCounts
	      };
	
	      // Initialize service
	      _init();
	
	      return service;
	    }
	  }]);
	  return RouterHelper;
	}(); // Imports
	
	
	exports.default = RouterHelper;
	
	function _inspect(input, depth) {
	  var maxDepth = 4;
	  var maxKeys = 15;

	  if (depth === undefined) {
	    depth = 0;
	  }

	  depth += 1;

	  if (input === null) {
	    return 'null';
	  } else if (input === undefined) {
	    return 'void';
	  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
	  } else if (Array.isArray(input)) {
	    if (input.length > 0) {
	      var _ret = function () {
	        if (depth > maxDepth) return {
	            v: '[...]'
	          };

	        var first = _inspect(input[0], depth);

	        if (input.every(function (item) {
	          return _inspect(item, depth) === first;
	        })) {
	          return {
	            v: first.trim() + '[]'
	          };
	        } else {
	          return {
	            v: '[' + input.slice(0, maxKeys).map(function (item) {
	              return _inspect(item, depth);
	            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	          };
	        }
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	    } else {
	      return 'Array';
	    }
	  } else {
	    var keys = (0, _keys2.default)(input);

	    if (!keys.length) {
	      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	        return input.constructor.name;
	      } else {
	        return 'Object';
	      }
	    }

	    if (depth > maxDepth) return '{...}';
	    var indent = '  '.repeat(depth - 1);
	    var entries = keys.slice(0, maxKeys).map(function (key) {
	      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
	    }).join('\n  ' + indent);

	    if (keys.length >= maxKeys) {
	      entries += '\n  ' + indent + '...';
	    }

	    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	    } else {
	      return '{\n  ' + indent + entries + '\n' + indent + '}';
	    }
	  }
	}

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _auth = __webpack_require__(110);
	
	var _auth2 = _interopRequireDefault(_auth);
	
	var _constants = __webpack_require__(112);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _login = __webpack_require__(113);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _profile = __webpack_require__(120);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	var _services = __webpack_require__(125);
	
	var _services2 = _interopRequireDefault(_services);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  Module initialize.
	 *
	 * @ngInject
	 */
	// Imports
	exports.default = _angular2.default.module('app.core.auth', [_constants2.default, _login2.default, _profile2.default, _services2.default]).run(_auth2.default).name;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = routing;
	
	var _userRoles = __webpack_require__(111);
	
	var _userRoles2 = _interopRequireDefault(_userRoles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @ngInject
	 * @param RouterHelper
	 */
	function routing(RouterHelper) {
	  var states = [{
	    state: 'auth',
	    config: {
	      abstract: true,
	      url: '/auth',
	      parent: 'layout',
	      data: {
	        access: _userRoles2.default.ROLE_ANON
	      }
	    }
	  }];
	
	  RouterHelper.configureStates(states);
	} // Imports

/***/ },
/* 111 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @desc  This file contains used user roles within application. These are used to authorize user access to application
	 *        routes - for more information see one of those ***.routes.js files on sources.
	 * @name  UserRoles
	 *
	 * @type {{
	 *    ROLE_ANON: string,
	 *    ROLE_LOGGED: string,
	 *    ROLE_USER: string,
	 *    ROLE_ADMIN: string,
	 *    ROLE_ROOT: string
	 *  }}
	 */
	var UserRoles = {
	  ROLE_ANON: 'ROLE_ANON',
	  ROLE_LOGGED: 'ROLE_LOGGED',
	  ROLE_USER: 'ROLE_USER',
	  ROLE_ADMIN: 'ROLE_ADMIN',
	  ROLE_ROOT: 'ROLE_ROOT'
	};
	
	exports.default = UserRoles;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _userRoles = __webpack_require__(111);
	
	var _userRoles2 = _interopRequireDefault(_userRoles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  Module initialize.
	 *
	 * @ngInject
	 */
	// Imports
	exports.default = _angular2.default.module('app.core.auth.constants', []).constant('UserRoles', _userRoles2.default).name;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _login = __webpack_require__(114);
	
	var _login2 = _interopRequireDefault(_login);
	
	__webpack_require__(118);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  Module initialize.
	 *
	 * @ngInject
	 */
	exports.default = _angular2.default.module('app.core.auth.login', []).run(_login2.default).name;
	
	// CSS styles for login
	// Imports

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = routing;
	
	var _login = __webpack_require__(115);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _userRoles = __webpack_require__(111);
	
	var _userRoles2 = _interopRequireDefault(_userRoles);
	
	var _login3 = __webpack_require__(116);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @ngInject
	 * @param RouterHelper
	 */
	function routing(RouterHelper) {
	  var states = [{
	    state: 'auth.login',
	    config: {
	      url: '/login',
	      parent: 'auth',
	      title: 'Login',
	      data: {
	        access: _userRoles2.default.ROLE_ANON
	      },
	      views: {
	        'content@': {
	          template: __webpack_require__(117),
	          controller: _login2.default,
	          controllerAs: 'vm'
	        }
	      }
	    }
	  }, {
	    state: 'auth.logout',
	    config: {
	      url: '/logout',
	      parent: 'auth',
	      title: 'Logout',
	      data: {
	        access: _userRoles2.default.ROLE_LOGGED
	      },
	      views: {
	        'content@': {
	          resolve: {
	            logout: _login3.logout
	          }
	        }
	      }
	    }
	  }];
	
	  RouterHelper.configureStates(states);
	} // Imports

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(100);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @ngInject
	 */
	var LoginController = function () {
	  /**
	   * Constructor of the class.
	   *
	   * @param {ui.router.state.$state}  $state
	   * @param {AuthService}             AuthService
	   */
	  function LoginController($state, AuthService) {
	    (0, _classCallCheck3.default)(this, LoginController);
	
	    this.$state = $state;
	    this.authService = AuthService;
	    this.loading = false;
	
	    if (AuthService.isAuthenticated()) {
	      this.$state.go('auth.profile');
	    }
	
	    this.reset();
	  }
	
	  // Method to make login request to specified backend.
	
	
	  (0, _createClass3.default)(LoginController, [{
	    key: 'login',
	    value: function login() {
	      var _this = this;
	
	      this.loading = true;
	
	      this.authService.authenticate(this.credentials).then(function () {
	        _this.$state.go('auth.profile');
	      }).catch(function () {
	        _this.reset();
	      }).finally(function () {
	        _this.loading = false;
	      });
	    }
	
	    // Method to "reset" used credentials object.
	
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.credentials = {
	        username: '',
	        password: ''
	      };
	    }
	  }]);
	  return LoginController;
	}();
	
	exports.default = LoginController;

/***/ },
/* 116 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.logout = logout;
	
	exports.default = function () {};
	
	/**
	 * @ngInject
	 * @param {AuthService} AuthService
	 * @returns {Promise.<TResult>|*}
	 */
	
	
	function logout(AuthService) {
	  return AuthService.logout();
	}

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "<md-content class=\"md-padding\" flex layout=\"column\">\n  <div flex></div>\n\n  <div layout=\"row\">\n    <div flex></div>\n\n    <div class=\"login md-padding md-whiteframe-z3\">\n      <md-progress-circular ng-if=\"vm.loading\" md-mode=\"indeterminate\"></md-progress-circular>\n\n      <form name=\"loginForm\" method=\"post\" novalidate=\"novalidate\" autocomplete=\"off\" layout=\"column\"\n        data-ng-submit=\"vm.login()\"\n        data-ng-class=\"vm.loading ? 'opacity-50' : ''\"\n      >\n        <h3 class=\"md-title text-center\">Login</h3>\n\n        <md-input-container class=\" md-block\">\n          <label>Username or email</label>\n\n          <md-icon data-ng-class=\"{'md-warn': loginForm.username.$invalid && loginForm.password.$touched}\">person</md-icon>\n\n          <input type=\"text\" required=\"required\" name=\"username\"\n            data-ng-model=\"vm.credentials.username\"\n            data-ng-disabled=\"vm.loading\"\n          />\n        </md-input-container>\n\n        <md-input-container class=\"md-icon-float md-block\">\n          <label>Password</label>\n\n          <md-icon data-ng-class=\"{'md-warn': loginForm.password.$invalid && loginForm.password.$touched}\">security</md-icon>\n\n          <input type=\"password\" required=\"required\" name=\"password\"\n            data-ng-model=\"vm.credentials.password\"\n            data-ng-disabled=\"vm.loading\"\n          />\n        </md-input-container>\n\n        <md-button class=\"md-raised md-primary\" type=\"submit\"\n          data-ng-disabled=\"!loginForm.$valid || vm.loading\"\n        >Login</md-button>\n      </form>\n    </div>\n\n    <div flex></div>\n  </div>\n\n  <div flex></div>\n</md-content>";

/***/ },
/* 118 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 119 */,
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _profile = __webpack_require__(121);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  Module initialize.
	 *
	 * @ngInject
	 */
	// Imports
	exports.default = _angular2.default.module('app.core.auth.profile', []).run(_profile2.default).name;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = routing;
	
	var _profile = __webpack_require__(122);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	var _userRoles = __webpack_require__(111);
	
	var _userRoles2 = _interopRequireDefault(_userRoles);
	
	var _profile3 = __webpack_require__(123);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @ngInject
	 * @param RouterHelper
	 */
	function routing(RouterHelper) {
	  var states = [{
	    state: 'auth.profile',
	    config: {
	      url: '/profile',
	      parent: 'auth',
	      title: 'Profile',
	      data: {
	        access: _userRoles2.default.ROLE_LOGGED
	      },
	      views: {
	        'content@': {
	          template: __webpack_require__(124),
	          controller: _profile2.default,
	          controllerAs: 'vm',
	          resolve: {
	            _profileData: _profile3.profileData
	          }
	        }
	      }
	    }
	  }];
	
	  RouterHelper.configureStates(states);
	} // Imports

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(25);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _keys = __webpack_require__(95);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(28);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @ngInject
	 */
	var ProfileController =
	/**
	 * Constructor of the class.
	 *
	 * @param {UserService} UserService
	 * @param {Object}      _profileData
	 */
	function ProfileController(UserService, _profileData) {
	  (0, _classCallCheck3.default)(this, ProfileController);
	
	  if (!(_profileData instanceof Object)) {
	    throw new TypeError("Value of argument \"_profileData\" violates contract.\n\nExpected:\nObject\n\nGot:\n" + _inspect(_profileData));
	  }
	
	  this.user = UserService.getProfile();
	  this.profile = _profileData;
	};
	
	exports.default = ProfileController;
	
	function _inspect(input, depth) {
	  var maxDepth = 4;
	  var maxKeys = 15;

	  if (depth === undefined) {
	    depth = 0;
	  }

	  depth += 1;

	  if (input === null) {
	    return 'null';
	  } else if (input === undefined) {
	    return 'void';
	  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	    return typeof input === "undefined" ? "undefined" : (0, _typeof3.default)(input);
	  } else if (Array.isArray(input)) {
	    if (input.length > 0) {
	      var _ret = function () {
	        if (depth > maxDepth) return {
	            v: '[...]'
	          };

	        var first = _inspect(input[0], depth);

	        if (input.every(function (item) {
	          return _inspect(item, depth) === first;
	        })) {
	          return {
	            v: first.trim() + '[]'
	          };
	        } else {
	          return {
	            v: '[' + input.slice(0, maxKeys).map(function (item) {
	              return _inspect(item, depth);
	            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	          };
	        }
	      }();

	      if ((typeof _ret === "undefined" ? "undefined" : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	    } else {
	      return 'Array';
	    }
	  } else {
	    var keys = (0, _keys2.default)(input);

	    if (!keys.length) {
	      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	        return input.constructor.name;
	      } else {
	        return 'Object';
	      }
	    }

	    if (depth > maxDepth) return '{...}';
	    var indent = '  '.repeat(depth - 1);
	    var entries = keys.slice(0, maxKeys).map(function (key) {
	      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
	    }).join('\n  ' + indent);

	    if (keys.length >= maxKeys) {
	      entries += '\n  ' + indent + '...';
	    }

	    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	    } else {
	      return '{\n  ' + indent + entries + '\n' + indent + '}';
	    }
	  }
	}

/***/ },
/* 123 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.profileData = profileData;
	
	exports.default = function () {};
	
	/**
	 * @ngInject
	 * @param {UserService} UserService
	 * @returns {Promise.<TResult>|*}
	 */
	
	
	function profileData(UserService) {
	  return UserService.fetchProfile().then(function (response) {
	    return response.data;
	  });
	}

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = "<md-content class=\"md-padding\">\n\n  <h1 class=\"md-title no-margin-top\">\n    implement user profile page\n  </h1>\n\n  <h1 class=\"md-subheader\">Token data (from JWT)</h1>\n  <pre>{{vm.user | json}}</pre>\n\n  <h1 class=\"md-subheader\">Profile data (from server)</h1>\n  <pre>{{vm.profile | json}}</pre>\n\n</md-content>\n";

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _auth = __webpack_require__(126);
	
	var _auth2 = _interopRequireDefault(_auth);
	
	var _user = __webpack_require__(127);
	
	var _user2 = _interopRequireDefault(_user);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  Module initialize.
	 *
	 * @ngInject
	 */
	exports.default = _angular2.default.module('app.core.auth.services', []).service('AuthService', _auth2.default).service('UserService', _user2.default).name; // Imports

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(25);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _keys = __webpack_require__(95);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(28);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(100);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @ngInject
	 */
	var AuthService = function () {
	  /**
	   * Constructor of the AuthService.
	   *
	   * @param {$http}                   $http
	   * @param {ui.router.state.$state}  $state
	   * @param {$localStorage}           $localStorage
	   * @param {authManager}             authManager
	   * @param {UserService}             UserService
	   * @param {LoggerService}           LoggerService
	   * @param {UserRoles}               UserRoles
	   * @param {config}                  config
	   */
	  function AuthService($http, $state, $localStorage, authManager, UserService, LoggerService, UserRoles, config) {
	    (0, _classCallCheck3.default)(this, AuthService);
	
	    this.$http = $http;
	    this.$state = $state;
	    this.$localStorage = $localStorage;
	    this.authManager = authManager;
	    this.userService = UserService;
	    this.logger = LoggerService;
	    this.roles = UserRoles;
	    this.config = config;
	  }
	
	  /**
	   * Method to authenticate given credentials against backend server.
	   *
	   * @param {Object}  credentials
	   * @returns {*|Promise.<TResult>}
	   */
	
	
	  (0, _createClass3.default)(AuthService, [{
	    key: 'authenticate',
	    value: function authenticate(credentials) {
	      var _this = this;
	
	      if (!(credentials instanceof Object)) {
	        throw new TypeError('Value of argument "credentials" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(credentials));
	      }
	
	      return this.$http.post(this.config.API_URL + 'auth/getToken', credentials).then(function (response) {
	        _this.storeTokenData(response.data);
	
	        // Show successfully message to user
	        _this.logger.success('Logged in successfully.');
	
	        return response;
	      });
	    }
	
	    /**
	     * Method to refresh expired JWT token.
	     *
	     * @param {string} refreshToken
	     * @returns {*|Promise.<TResult>}
	     */
	
	  }, {
	    key: 'refreshToken',
	    value: function refreshToken(_refreshToken) {
	      var _this2 = this;
	
	      if (!(typeof _refreshToken === 'string')) {
	        throw new TypeError('Value of argument "refreshToken" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(_refreshToken));
	      }
	
	      return this.$http.post(this.config.API_URL + 'auth/refreshToken', { refresh_token: _refreshToken }, { skipAuthorization: true, skipErrorMessage: true }).then(function (response) {
	        _this2.storeTokenData(response.data, true);
	
	        return response;
	      });
	    }
	
	    /**
	     * Method to store token data to local storage.
	     *
	     * @param {Object}  data
	     * @param {boolean} [skipRefreshToken]
	     */
	
	  }, {
	    key: 'storeTokenData',
	    value: function storeTokenData(data) {
	      var skipRefreshToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      if (!(data instanceof Object)) {
	        throw new TypeError('Value of argument "data" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(data));
	      }
	
	      if (!(typeof skipRefreshToken === 'boolean')) {
	        throw new TypeError('Value of argument "skipRefreshToken" violates contract.\n\nExpected:\nboolean\n\nGot:\n' + _inspect(skipRefreshToken));
	      }
	
	      // Store JWT data
	      this.$localStorage.token = data.token;
	
	      if (!skipRefreshToken) {
	        this.$localStorage.refreshToken = data.refresh_token;
	      }
	
	      // Store authenticate state to authManager
	      this.authManager.authenticate();
	    }
	
	    /**
	     * Method to check if current user has specified role or not.
	     *
	     * @param {string} role
	     * @returns {boolean}
	     */
	
	  }, {
	    key: 'authorize',
	    value: function authorize(role) {
	      if (!(typeof role === 'string')) {
	        throw new TypeError('Value of argument "role" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(role));
	      }
	
	      // Anon routes are available for everyone
	      if (role === this.roles.ROLE_ANON) {
	        return true;
	      } else if (this.userService.getProfile()) {
	        // Otherwise if user is authenticated check if he/she has that role
	        return this.userService.getRoles().indexOf(role) !== -1;
	      }
	
	      // And otherwise always return false - fail safe
	      return false;
	    }
	
	    /**
	     * Method to check if current user is authenticated or not.
	     *
	     * @param {boolean} [suppress]
	     */
	
	  }, {
	    key: 'isAuthenticated',
	    value: function isAuthenticated() {
	      var suppress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	      if (!(typeof suppress === 'boolean')) {
	        throw new TypeError('Value of argument "suppress" violates contract.\n\nExpected:\nboolean\n\nGot:\n' + _inspect(suppress));
	      }
	
	      if (!this.userService.getProfile() && !suppress) {
	        this.logger.error('Auth error!');
	      }
	
	      return !!this.userService.getProfile();
	    }
	
	    /**
	     * Method to logout current user.
	     *
	     * @param {boolean} [suppress]
	     * @returns {*|Promise.<TResult>}
	     */
	
	  }, {
	    key: 'logout',
	    value: function logout() {
	      var suppress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      if (!(typeof suppress === 'boolean')) {
	        throw new TypeError('Value of argument "suppress" violates contract.\n\nExpected:\nboolean\n\nGot:\n' + _inspect(suppress));
	      }
	
	      if (!suppress) {
	        this.logger.success('Logged out successfully.');
	      }
	
	      // Reset local storage + un-authenticate current user
	      this.$localStorage.$reset();
	      this.authManager.unauthenticate();
	
	      // And redirect user back to login page
	      return this.$state.go('auth.login');
	    }
	  }]);
	  return AuthService;
	}();
	
	exports.default = AuthService;
	
	function _inspect(input, depth) {
	  var maxDepth = 4;
	  var maxKeys = 15;

	  if (depth === undefined) {
	    depth = 0;
	  }

	  depth += 1;

	  if (input === null) {
	    return 'null';
	  } else if (input === undefined) {
	    return 'void';
	  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
	  } else if (Array.isArray(input)) {
	    if (input.length > 0) {
	      var _ret = function () {
	        if (depth > maxDepth) return {
	            v: '[...]'
	          };

	        var first = _inspect(input[0], depth);

	        if (input.every(function (item) {
	          return _inspect(item, depth) === first;
	        })) {
	          return {
	            v: first.trim() + '[]'
	          };
	        } else {
	          return {
	            v: '[' + input.slice(0, maxKeys).map(function (item) {
	              return _inspect(item, depth);
	            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	          };
	        }
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	    } else {
	      return 'Array';
	    }
	  } else {
	    var keys = (0, _keys2.default)(input);

	    if (!keys.length) {
	      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	        return input.constructor.name;
	      } else {
	        return 'Object';
	      }
	    }

	    if (depth > maxDepth) return '{...}';
	    var indent = '  '.repeat(depth - 1);
	    var entries = keys.slice(0, maxKeys).map(function (key) {
	      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
	    }).join('\n  ' + indent);

	    if (keys.length >= maxKeys) {
	      entries += '\n  ' + indent + '...';
	    }

	    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	    } else {
	      return '{\n  ' + indent + entries + '\n' + indent + '}';
	    }
	  }
	}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(100);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @ngInject
	 */
	var UserService = function () {
	  /**
	   * Constructor of the class.
	   *
	   * @param {$rootScope}    $rootScope
	   * @param {$http}         $http
	   * @param {$localStorage} $localStorage
	   * @param {jwtHelper}     jwtHelper
	   * @param {config}        config
	   */
	  function UserService($rootScope, $http, $localStorage, jwtHelper, config) {
	    (0, _classCallCheck3.default)(this, UserService);
	
	    this.$rootScope = $rootScope;
	    this.$http = $http;
	    this.$localStorage = $localStorage;
	    this.jwtHelper = jwtHelper;
	    this.config = config;
	  }
	
	  /**
	   * Method returns user profile data from Json Web Token or boolean false, if user isn't authenticated at all.
	   *
	   * @returns {boolean|object}
	   */
	
	
	  (0, _createClass3.default)(UserService, [{
	    key: "getProfile",
	    value: function getProfile() {
	      return this.$rootScope.isAuthenticated ? this.jwtHelper.decodeToken(this.$localStorage.token) : false;
	    }
	
	    /**
	     * Getter method for current user roles. If user isn't authenticated method returns empty array.
	     *
	     * @returns {string[]}
	     */
	
	  }, {
	    key: "getRoles",
	    value: function getRoles() {
	      return this.getProfile() ? this.getProfile().roles : [];
	    }
	
	    /**
	     * Method to fetch user profile data from backend server.
	     *
	     * @returns {HttpPromise}
	     */
	
	  }, {
	    key: "fetchProfile",
	    value: function fetchProfile() {
	      return this.$http.get(this.config.API_URL + "auth/profile");
	    }
	  }]);
	  return UserService;
	}();
	
	exports.default = UserService;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _errorInterceptor = __webpack_require__(129);
	
	var _errorInterceptor2 = _interopRequireDefault(_errorInterceptor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  Module initialize.
	 *
	 * @ngInject
	 */
	// Imports
	exports.default = _angular2.default.module('app.core.interceptors', []).service('ErrorInterceptor', _errorInterceptor2.default).name;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @ngInject
	 */
	var ErrorInterceptor =
	/**
	 * Constructor of the class.
	 *
	 * @param {$q}        $q
	 * @param {$injector} $injector
	 */
	function ErrorInterceptor($q, $injector) {
	  var _this = this;
	
	  (0, _classCallCheck3.default)(this, ErrorInterceptor);
	
	  this.responseError = function (response) {
	    var skipErrorMessage = !response.config.skipErrorMessage;
	
	    var message = '';
	    var subTitle = '';
	
	    if (response.data && response.data.error) {
	      message = response.data.error;
	    } else if (response.data && response.data.message) {
	      message = response.data.message;
	    } else if (typeof response.data === 'string') {
	      message = response.data;
	    } else if (response.statusText) {
	      message = response.statusText;
	    } else if (response.status === 0) {
	      message = 'CORS error with url \'' + response.config.url + '\'';
	    } else {
	      message = _this.$injector.get('HttpStatusService').getStatusCodeText(response.status);
	    }
	
	    if (response.status !== 0) {
	      subTitle = ['HTTP status', response.status].join(' ');
	    }
	
	    if (message && skipErrorMessage) {
	      _this.$injector.get('LoggerService').error(message, response, subTitle);
	    }
	
	    return _this.$q.reject(response);
	  };
	
	  this.$q = $q;
	  this.$injector = $injector;
	};
	
	exports.default = ErrorInterceptor;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _httpStatus = __webpack_require__(131);
	
	var _httpStatus2 = _interopRequireDefault(_httpStatus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  Module initialize.
	 *
	 * @ngInject
	 */
	// Imports
	exports.default = _angular2.default.module('app.core.services', []).service('HttpStatusService', _httpStatus2.default).name;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(25);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _keys = __webpack_require__(95);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(28);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(100);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @ngInject
	 */
	var HttpStatusService = function () {
	  // Constructor
	  function HttpStatusService() {
	    (0, _classCallCheck3.default)(this, HttpStatusService);
	
	    this.messages = {
	      // 1xx Informational
	      100: 'continue',
	      101: 'Switching Protocols',
	      102: 'Processing (WebDAV; RFC 2518)',
	      // 2xx Success
	      200: 'OK',
	      201: 'Created',
	      202: 'Accepted',
	      203: 'Non-Authoritative Information (since HTTP/1.1)',
	      204: 'No Content',
	      205: 'Reset Content',
	      206: 'Partial Content',
	      207: 'Multi-Status (WebDAV; RFC 4918)',
	      208: 'Already Reported (WebDAV; RFC 5842)',
	      226: 'IM Used (RFC 3229)',
	      // 3xx Redirection
	      300: 'Multiple Choices',
	      301: 'Moved Permanently',
	      302: 'Found',
	      303: 'See Other',
	      304: 'Not Modified',
	      305: 'Use Proxy',
	      306: 'Switch Proxy',
	      307: 'Temporary Redirect',
	      308: 'Permanent Redirect (Experimental RFC; RFC 7238)',
	      // 4xx Client Error
	      400: 'Bad Request',
	      401: 'Unauthorized',
	      402: 'Payment Required',
	      403: 'Forbidden',
	      404: 'Not Found',
	      405: 'Method Not Allowed',
	      406: 'Not Acceptable',
	      407: 'Proxy Authentication Required',
	      408: 'Request Timeout',
	      409: 'Conflict',
	      410: 'Gone',
	      411: 'Length Required',
	      412: 'Precondition Failed',
	      413: 'Request Entity Too Large',
	      414: 'Request-URI Too Long',
	      415: 'Unsupported Media Type',
	      416: 'Requested Range Not Satisfiable',
	      417: 'Expectation Failed',
	      418: 'I\'m a teapot (RFC 2324)',
	      419: 'Authentication Timeout (not in RFC 2616)',
	      420: 'Method Failure (Spring Framework) / Enhance Your Calm (Twitter)',
	      422: 'Unprocessable Entity (WebDAV; RFC 4918)',
	      423: 'Locked (WebDAV; RFC 4918)',
	      424: 'Failed Dependency (WebDAV; RFC 4918)',
	      426: 'Upgrade Required',
	      428: 'Precondition Required (RFC 6585)',
	      429: 'Too Many Requests (RFC 6585)',
	      431: 'Request Header Fields Too Large (RFC 6585)',
	      440: 'Login Timeout (Microsoft)',
	      444: 'No Response (Nginx)',
	      449: 'Retry With (Microsoft)',
	      450: 'Blocked by Windows Parental Controls (Microsoft)',
	      451: 'Unavailable For Legal Reasons (Internet draft) / Redirect (Microsoft)',
	      494: 'Request Header Too Large (Nginx)',
	      495: 'Cert Error (Nginx)',
	      496: 'No Cert (Nginx)',
	      497: 'HTTP to HTTPS (Nginx)',
	      498: 'Token expired/invalid (Esri)',
	      499: 'Client Closed Request (Nginx) / Token required (Esri)',
	      // 5xx Server Error
	      500: 'Internal Server Error',
	      501: 'Not Implemented',
	      502: 'Bad Gateway',
	      503: 'Service Unavailable',
	      504: 'Gateway Timeout',
	      505: 'HTTP Version Not Supported',
	      506: 'Variant Also Negotiates (RFC 2295)',
	      507: 'Insufficient Storage (WebDAV; RFC 4918)',
	      508: 'Loop Detected (WebDAV; RFC 5842)',
	      509: 'Bandwidth Limit Exceeded (Apache bw/limited extension)',
	      510: 'Not Extended (RFC 2774)',
	      511: 'Network Authentication Required (RFC 6585)',
	      520: 'Origin Error (Cloudflare)',
	      521: 'Web server is down (Cloudflare)',
	      522: 'Connection timed out (Cloudflare)',
	      523: 'Proxy Declined Request (Cloudflare)',
	      524: 'A timeout occurred (Cloudflare)',
	      598: 'Network read timeout error (Unknown)',
	      599: 'Network connect timeout error (Unknown)'
	    };
	  }
	
	  /**
	   * Getter method for HTTP status code text.
	   *
	   * @param {number} statusCode
	   * @returns {string}
	   */
	
	
	  (0, _createClass3.default)(HttpStatusService, [{
	    key: 'getStatusCodeText',
	    value: function getStatusCodeText(statusCode) {
	      if (!(typeof statusCode === 'number')) {
	        throw new TypeError('Value of argument "statusCode" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(statusCode));
	      }
	
	      var output = 'Unknown HTTP status \'' + statusCode + '\' what is this?';
	
	      if ({}.hasOwnProperty.call(this.messages, statusCode)) {
	        output = this.messages[statusCode];
	      }
	
	      return output;
	    }
	  }]);
	  return HttpStatusService;
	}();
	
	exports.default = HttpStatusService;
	
	function _inspect(input, depth) {
	  var maxDepth = 4;
	  var maxKeys = 15;

	  if (depth === undefined) {
	    depth = 0;
	  }

	  depth += 1;

	  if (input === null) {
	    return 'null';
	  } else if (input === undefined) {
	    return 'void';
	  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
	  } else if (Array.isArray(input)) {
	    if (input.length > 0) {
	      var _ret = function () {
	        if (depth > maxDepth) return {
	            v: '[...]'
	          };

	        var first = _inspect(input[0], depth);

	        if (input.every(function (item) {
	          return _inspect(item, depth) === first;
	        })) {
	          return {
	            v: first.trim() + '[]'
	          };
	        } else {
	          return {
	            v: '[' + input.slice(0, maxKeys).map(function (item) {
	              return _inspect(item, depth);
	            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	          };
	        }
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	    } else {
	      return 'Array';
	    }
	  } else {
	    var keys = (0, _keys2.default)(input);

	    if (!keys.length) {
	      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	        return input.constructor.name;
	      } else {
	        return 'Object';
	      }
	    }

	    if (depth > maxDepth) return '{...}';
	    var indent = '  '.repeat(depth - 1);
	    var entries = keys.slice(0, maxKeys).map(function (key) {
	      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
	    }).join('\n  ' + indent);

	    if (keys.length >= maxKeys) {
	      entries += '\n  ' + indent + '...';
	    }

	    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	    } else {
	      return '{\n  ' + indent + entries + '\n' + indent + '}';
	    }
	  }
	}

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @ngInject
	 *
	 * @param {$provide}          $provide
	 * @param {$httpProvider}     $httpProvider
	 * @param {$logProvider}      $logProvider
	 * @param {RouterHelper}      RouterHelperProvider
	 * @param {ExceptionHandler}  ExceptionHandlerProvider
	 */
	exports.default = function ($provide, $httpProvider, $logProvider, RouterHelperProvider, ExceptionHandlerProvider) {
	  /**
	   * $log decorator function, this is needed to add filename and line number to each $log command.
	   *
	   * @param   {function}  func
	   * @returns {function}
	   */
	  function logDecorator(func) {
	    return function anon() {
	      for (var _len = arguments.length, input = Array(_len), _key = 0; _key < _len; _key++) {
	        input[_key] = arguments[_key];
	      }
	
	      var args = [].slice.call(input);
	
	      // Insert a separator between the existing log message(s) and what we're adding.
	      args.push(' - ');
	
	      // Use (instance of Error)'s stack to get the current line.
	      var stack = new Error().stack.split('\n').slice(1);
	
	      // Throw away the first item because it is the `$log.fn()` function,
	      // but we want the code that called `$log.fn()`.
	      stack.shift();
	
	      // We only want the top line, thanks.
	      stack = stack.slice(1, 2);
	
	      // Put it on the args stack.
	      args.push(stack);
	
	      // Call the original function with the new args.
	      func.apply(func, args);
	    };
	  }
	
	  // Add filename + line number feature to $log component
	  $provide.decorator('$log', function ($delegate) {
	    var originalFunctions = {};
	
	    // Store the original log functions
	    _angular2.default.forEach($delegate, function (originalFunction, functionName) {
	      originalFunctions[functionName] = originalFunction;
	    });
	
	    var functionsToDecorate = ['log', 'info', 'warn', 'error', 'debug'];
	
	    // Apply the decorations
	    _angular2.default.forEach(functionsToDecorate, function (functionName) {
	      $delegate[functionName] = logDecorator(originalFunctions[functionName]);
	    });
	
	    return $delegate;
	  });
	
	  // Attach needed interceptors
	  $httpProvider.interceptors.push('ErrorInterceptor');
	
	  if ($logProvider.debugEnabled) {
	    $logProvider.debugEnabled(true);
	  }
	
	  var config = {
	    APP_TITLE: 'angular-material-webpack-seed',
	    APP_ERROR_PREFIX: 'angular-material-webpack-seed - Error'
	  };
	
	  // Configure router helper provider
	  RouterHelperProvider.configure({ docTitle: [config.APP_TITLE, ': '].join('') });
	
	  // Configure exception handler provider
	  ExceptionHandlerProvider.configure(config.APP_ERROR_PREFIX);
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @desc  This file contains core route + state change event handling.
	 * @ngInject
	 *
	 * @param {*}                       $rootScope
	 * @param {ui.router.state.$state}  $state
	 * @param {$localStorage}           $localStorage
	 * @param {jwtHelper}               jwtHelper
	 * @param {RouterHelper}            RouterHelper
	 * @param {AuthService}             AuthService
	 * @param {UserService}             UserService
	 * @param {LoggerService}           LoggerService
	 */
	exports.default = function ($rootScope, $state, $localStorage, jwtHelper, RouterHelper, AuthService, UserService, LoggerService) {
	  var states = [{
	    state: '404',
	    config: {
	      url: '/404',
	      title: '404',
	      parent: 'layout',
	      views: {
	        'content@': {
	          template: __webpack_require__(134)
	        }
	      }
	    }
	  }];
	
	  // Configure default routes + otherwise route
	  RouterHelper.configureStates(states, '/404');
	
	  var bypass = void 0;
	
	  // Check user role for requested state + fetch new JWT if current one is expired
	  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
	    if (bypass) {
	      bypass = false;
	
	      return;
	    }
	
	    event.preventDefault();
	
	    var token = $localStorage.token;
	    var refreshToken = $localStorage.refreshToken;
	
	    var checkState = function checkState() {
	      bypass = true;
	
	      // User don't have access to this state,
	      if ({}.hasOwnProperty.call(toState.data || {}, 'access') && !AuthService.authorize(toState.data.access)) {
	        LoggerService.error('You don\'t have access to \'' + toState.title + '\' page.');
	
	        return fromState.abstract ? $state.go('auth.login') : $state.reload();
	      }
	
	      return $state.go(toState, toParams);
	    };
	
	    if (token) {
	      if (!jwtHelper.isTokenExpired(token)) {
	        checkState();
	      } else {
	        AuthService.refreshToken(refreshToken).then(checkState).catch(function () {
	          bypass = true;
	
	          LoggerService.success('Please login.');
	
	          AuthService.logout(true);
	        });
	      }
	    } else {
	      checkState();
	    }
	  });
	
	  // Add success handler for route change
	  $rootScope.$on('$stateChangeSuccess', function (event, toState) {
	    $rootScope.containerClass = toState.containerClass;
	  });
	
	  // Watcher for user authentication status
	  $rootScope.$watch('isAuthenticated', function () {
	    $rootScope.user = UserService.getProfile();
	  });
	};

/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports = "<md-content class=\"md-padding\">\n  <h3 class=\"no-margin-top\">404 - page not found</h3>\n\n  <md-subheader>\n    Damn gerbils have stopped running again! Someone has been dispatched to poke them with a sharp stick.\n  </md-subheader>\n</md-content>\n";

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularAnimate = __webpack_require__(136);
	
	var _angularAnimate2 = _interopRequireDefault(_angularAnimate);
	
	var _angularAria = __webpack_require__(138);
	
	var _angularAria2 = _interopRequireDefault(_angularAria);
	
	var _angularJwt = __webpack_require__(140);
	
	var _angularJwt2 = _interopRequireDefault(_angularJwt);
	
	var _angularLoadingBar = __webpack_require__(142);
	
	var _angularLoadingBar2 = _interopRequireDefault(_angularLoadingBar);
	
	var _angularMaterial = __webpack_require__(144);
	
	var _angularMaterial2 = _interopRequireDefault(_angularMaterial);
	
	var _angularSanitize = __webpack_require__(146);
	
	var _angularSanitize2 = _interopRequireDefault(_angularSanitize);
	
	var _angularResource = __webpack_require__(148);
	
	var _angularResource2 = _interopRequireDefault(_angularResource);
	
	var _ngstorage = __webpack_require__(150);
	
	var _ngstorage2 = _interopRequireDefault(_ngstorage);
	
	var _angularUiRouter = __webpack_require__(151);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _dependencies = __webpack_require__(152);
	
	var _dependencies2 = _interopRequireDefault(_dependencies);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @ngInject
	 */
	exports.default = _angular2.default.module('app.dependencies', [_angularAnimate2.default, _angularAria2.default, _angularJwt2.default, _angularLoadingBar2.default, _angularMaterial2.default, _angularSanitize2.default, _angularResource2.default, _ngstorage2.default.name, // see https://github.com/gsklee/ngStorage/pull/159
	_angularUiRouter2.default]).config(_dependencies2.default).run(function (authManager) {
	  authManager.checkAuthOnRefresh();
	}).name; // Imports

/***/ },
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// Get configuration values
	var config = __webpack_require__(153);
	
	/**
	 * Add all 3rd party library config stuff to this file.
	 *
	 * @ngInject
	 *
	 * @param {$httpProvider}       $httpProvider
	 * @param {$mdThemingProvider}  $mdThemingProvider
	 * @param {jwtOptions}          jwtOptionsProvider
	 */
	
	exports.default = function ($httpProvider, $mdThemingProvider, jwtOptionsProvider) {
	  // Attach JWT interceptor
	  $httpProvider.interceptors.push('jwtInterceptor');
	
	  // Configure angular-material theme
	  $mdThemingProvider.theme('default').primaryPalette('blue-grey').accentPalette('blue');
	
	  // Configure JWT options for tokenGetter and white listed domains
	  jwtOptionsProvider.config({
	    tokenGetter: ['$localStorage', function ($localStorage) {
	      return $localStorage.token;
	    }],
	    whiteListedDomains: config.WHITELIST_DOMAINS
	  });
	};

/***/ },
/* 153 */
/***/ function(module, exports) {

	module.exports = {
		"API_URL": "http://tle-develphp70.protacon.com/app_dev.php/",
		"WHITELIST_DOMAINS": [
			"localhost",
			"tle-develphp70.protacon.com"
		]
	};

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _header = __webpack_require__(155);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _layout = __webpack_require__(156);
	
	var _layout2 = _interopRequireDefault(_layout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @ngInject
	 */
	exports.default = _angular2.default.module('app.layout', [_header2.default]).run(_layout2.default).name; // Imports

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  Module initialize.
	 *
	 * @ngInject
	 */
	exports.default = _angular2.default.module('app.layout.header', []).name; // Imports

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = routing;
	
	var _header = __webpack_require__(157);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @ngInject
	 * @param RouterHelper
	 */
	function routing(RouterHelper) {
	  var states = [{
	    state: 'layout',
	    config: {
	      abstract: true,
	      views: {
	        header: {
	          template: __webpack_require__(158),
	          controller: _header2.default,
	          controllerAs: 'vm'
	        }
	      }
	    }
	  }];
	
	  RouterHelper.configureStates(states);
	} // Imports

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @ngInject
	 */
	var HeaderController =
	/**
	 * Constructor of the class
	 *
	 * @param {ui.router.state.$state}  $state
	 */
	function HeaderController($state) {
	  (0, _classCallCheck3.default)(this, HeaderController);
	
	  this.$state = $state;
	};
	
	exports.default = HeaderController;

/***/ },
/* 158 */
/***/ function(module, exports) {

	module.exports = "<md-toolbar class=\"md-whiteframe-z3\">\n  <div class=\"md-toolbar-tools\">\n    <span>KORJAAMO.NYT</span>\n  </div>\n</md-toolbar>\n";

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _about = __webpack_require__(160);
	
	var _about2 = _interopRequireDefault(_about);
	
	var _home = __webpack_require__(177);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _modules = __webpack_require__(182);
	
	var _modules2 = _interopRequireDefault(_modules);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  Module initialize.
	 *
	 * @ngInject
	 */
	// Imports
	exports.default = _angular2.default.module('app.modules', [_about2.default, _home2.default]).run(_modules2.default).name;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _about = __webpack_require__(161);
	
	var _about2 = _interopRequireDefault(_about);
	
	__webpack_require__(175);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  Module initialize.
	 *
	 * @ngInject
	 */
	exports.default = _angular2.default.module('app.modules.about', []).run(_about2.default).name;
	
	// CSS styles for 'about' page
	// Imports

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = routing;
	
	var _about = __webpack_require__(162);
	
	var _about2 = _interopRequireDefault(_about);
	
	var _userRoles = __webpack_require__(111);
	
	var _userRoles2 = _interopRequireDefault(_userRoles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @ngInject
	 * @param RouterHelper
	 */
	// Imports
	function routing(RouterHelper) {
	  var states = [{
	    state: 'modules.about',
	    config: {
	      url: '/about',
	      title: 'About',
	      data: {
	        access: _userRoles2.default.ROLE_ANON
	      },
	      views: {
	        'content@': {
	          template: __webpack_require__(174),
	          controller: _about2.default,
	          controllerAs: 'vm'
	        }
	      }
	    }
	  }];
	
	  RouterHelper.configureStates(states);
	}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(25);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _keys = __webpack_require__(95);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(28);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(100);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _aboutItem = __webpack_require__(163);
	
	var _aboutItem2 = _interopRequireDefault(_aboutItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @ngInject
	 */
	var AboutController = function () {
	  /**
	   * Constructor of the class.
	   *
	   * @param {Window} $window
	   */
	  function AboutController($window) {
	    (0, _classCallCheck3.default)(this, AboutController);
	
	    this.$window = $window;
	
	    /**
	     * List of AboutItem objects which is shown on about page
	     *
	     * @type {AboutItem[]}
	     */
	    this.items = [{
	      title: 'Angular.js',
	      image: __webpack_require__(168),
	      url: 'https://angularjs.org/'
	    }, {
	      title: 'Angular Material',
	      image: __webpack_require__(169),
	      url: 'https://material.angularjs.org'
	    }, {
	      title: 'Webpack',
	      image: __webpack_require__(170),
	      url: 'https://webpack.github.io/'
	    }, {
	      title: 'Babel',
	      image: __webpack_require__(171),
	      url: 'https://babeljs.io/'
	    }, {
	      title: 'Node Sass',
	      image: __webpack_require__(172),
	      url: 'https://www.npmjs.com/package/node-sass'
	    }, {
	      title: 'Json Web Token',
	      image: __webpack_require__(173),
	      url: 'https://jwt.io/'
	    }].map(function (item) {
	      return new _aboutItem2.default(item);
	    });
	  }
	
	  /**
	   * Method to open selected item URL to new tab.
	   *
	   * @param {AboutItem} item
	   */
	
	
	  (0, _createClass3.default)(AboutController, [{
	    key: 'open',
	    value: function open(item) {
	      if (!(item instanceof _aboutItem2.default)) {
	        throw new TypeError('Value of argument "item" violates contract.\n\nExpected:\nAboutItem\n\nGot:\n' + _inspect(item));
	      }
	
	      this.$window.open(item.url, '_blank');
	    }
	  }]);
	  return AboutController;
	}(); // Imports
	
	
	exports.default = AboutController;
	
	function _inspect(input, depth) {
	  var maxDepth = 4;
	  var maxKeys = 15;

	  if (depth === undefined) {
	    depth = 0;
	  }

	  depth += 1;

	  if (input === null) {
	    return 'null';
	  } else if (input === undefined) {
	    return 'void';
	  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
	  } else if (Array.isArray(input)) {
	    if (input.length > 0) {
	      var _ret = function () {
	        if (depth > maxDepth) return {
	            v: '[...]'
	          };

	        var first = _inspect(input[0], depth);

	        if (input.every(function (item) {
	          return _inspect(item, depth) === first;
	        })) {
	          return {
	            v: first.trim() + '[]'
	          };
	        } else {
	          return {
	            v: '[' + input.slice(0, maxKeys).map(function (item) {
	              return _inspect(item, depth);
	            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	          };
	        }
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	    } else {
	      return 'Array';
	    }
	  } else {
	    var keys = (0, _keys2.default)(input);

	    if (!keys.length) {
	      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	        return input.constructor.name;
	      } else {
	        return 'Object';
	      }
	    }

	    if (depth > maxDepth) return '{...}';
	    var indent = '  '.repeat(depth - 1);
	    var entries = keys.slice(0, maxKeys).map(function (key) {
	      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
	    }).join('\n  ' + indent);

	    if (keys.length >= maxKeys) {
	      entries += '\n  ' + indent + '...';
	    }

	    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	    } else {
	      return '{\n  ' + indent + entries + '\n' + indent + '}';
	    }
	  }
	}

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _aboutItem = __webpack_require__(164);
	
	var _aboutItem2 = _interopRequireDefault(_aboutItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * AboutItem class.
	 */
	var AboutItem =
	/**
	 * Constructor of the class
	 *
	 * @param {AboutItemInterface}  item
	 */
	function AboutItem(item) {
	  (0, _classCallCheck3.default)(this, AboutItem);
	
	  this.title = item.title;
	  this.url = item.url;
	  this.image = item.image;
	}; // Interface for the class
	
	
	exports.default = AboutItem;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _hasInstance = __webpack_require__(165);
	
	var _hasInstance2 = _interopRequireDefault(_hasInstance);
	
	var _defineProperty = __webpack_require__(101);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {};
	
	// Interface declaration for AboutItem
	
	
	var AboutItemInterface = function () {
	  function AboutItemInterface(input) {
	    return input != null && typeof input.title === 'string' && typeof input.url === 'string';
	  }
	
	  ;
	  (0, _defineProperty2.default)(AboutItemInterface, _hasInstance2.default, {
	    value: function value(input) {
	      return AboutItemInterface(input);
	    }
	  });
	  return AboutItemInterface;
	}();

/***/ },
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "cb79c26baebdbf7cdc71dc3ce69b73a1.png";

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e20cb949c1f5bcf52fc173d390ddb376.png";

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8f29e53fcb774de5f113ee2206b328fe.png";

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9d3f624715e9ce6a00ba6c3756027a14.png";

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8c239efd2e25800bcca0fbab79373c1c.png";

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f9c59754db386c641beed369a3bc003c.jpg";

/***/ },
/* 174 */
/***/ function(module, exports) {

	module.exports = "<md-content class=\"md-padding no-padding-top\" flex>\n  <p>\n    This is seed application built using following.\n  </p>\n\n  <md-grid-list layout-fill\n    md-cols-xs=\"2\" md-cols-sm=\"3\" md-cols-md=\"4\" md-cols-gt-md=\"5\"\n    md-row-height=\"1:1\"\n    md-gutter=\"12px\"\n  >\n    <md-grid-tile class=\"md-whiteframe-z3 cursor-pointer\"\n      ng-repeat=\"item in vm.items\"\n      ng-click=\"vm.open(item)\"\n    >\n      <md-grid-tile-header>\n        <h3>{{item.title}}</h3>\n      </md-grid-tile-header>\n\n      <img ng-src=\"{{item.image}}\" alt=\"{{item.title}}\" />\n\n      <md-grid-tile-footer>\n        <h3>{{item.url}}</h3>\n      </md-grid-tile-footer>\n    </md-grid-tile>\n  </md-grid-list>\n\n</md-content>\n";

/***/ },
/* 175 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 176 */,
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _home = __webpack_require__(178);
	
	var _home2 = _interopRequireDefault(_home);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  Module initialize.
	 *
	 * @ngInject
	 */
	// Imports
	exports.default = _angular2.default.module('app.modules.home', []).run(_home2.default).name;

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = routing;
	
	var _home = __webpack_require__(179);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _userRoles = __webpack_require__(111);
	
	var _userRoles2 = _interopRequireDefault(_userRoles);
	
	var _home3 = __webpack_require__(180);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @ngInject
	 * @param RouterHelper
	 */
	function routing(RouterHelper) {
	  var states = [{
	    state: 'modules.home',
	    config: {
	      url: '/',
	      title: 'Palvelut',
	      data: {
	        access: _userRoles2.default.ROLE_ANON
	      },
	      views: {
	        'content@': {
	          template: __webpack_require__(181),
	          controller: _home2.default,
	          controllerAs: 'vm',
	          resolve: {
	            _serviceTypes: _home3.serviceTypes
	          }
	        }
	      }
	    }
	  }];
	
	  RouterHelper.configureStates(states);
	} // Imports

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @ngInject
	 */
	var HomeController =
	/**
	 * Constructor of the class.
	 *
	 * @param {ServiceType[]} _serviceTypes
	 */
	function HomeController(_serviceTypes) {
	  (0, _classCallCheck3.default)(this, HomeController);
	
	  this.serviceType = null;
	  this.carBrand = null;
	  this.location = '';
	
	  this.serviceTypes = _serviceTypes;
	
	  // TODO Get car brands
	  this.carBrands = [{ id: 1, name: 'Audi' }, { id: 2, name: 'Mazda' }];
	};
	
	exports.default = HomeController;

/***/ },
/* 180 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.serviceTypes = serviceTypes;
	
	exports.default = function () {};
	
	/**
	 * @ngInject
	 * @param {ServiceTypeResource} ServiceTypeResource
	 * @returns {Promise.<ServiceType>|*}
	 */
	
	
	function serviceTypes(ServiceTypeResource) {
	  return ServiceTypeResource.query().$promise;
	}

/***/ },
/* 181 */
/***/ function(module, exports) {

	module.exports = "<md-content class=\"md-padding no-padding-top\" flex>\n  <md-input-container class=\"md-block\" flex>\n    <label>\n      Valitse palvelu\n    </label>\n\n    <md-select data-ng-model=\"vm.serviceType\">\n      <md-option data-ng-value=\"serviceType.id\" data-ng-repeat=\"serviceType in vm.serviceTypes\">\n        {{::serviceType.name}}\n      </md-option>\n    </md-select>\n  </md-input-container>\n\n  <md-input-container class=\"md-block\" flex>\n    <label>\n      Valitse merkki\n    </label>\n\n    <md-select data-ng-model=\"vm.serviceType\">\n      <md-option data-ng-value=\"carBrand.id\" data-ng-repeat=\"carBrand in vm.carBrands\">\n        {{::carBrand.name}}\n      </md-option>\n    </md-select>\n  </md-input-container>\n\n  <md-input-container class=\"md-block\" flex>\n    <label>\n      Sijainti\n    </label>\n\n    <input type=\"text\" placeholder=\"\"\n      data-ng-model=\"vm.location\"\n      data-ng-model-options=\"{ debounce: { 'default': 500, 'blur': 0 } }\"\n    />\n  </md-input-container>\n\n  <md-button>ETSI</md-button>\n</md-content>\n";

/***/ },
/* 182 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = routing;
	/**
	 * @ngInject
	 * @param RouterHelper
	 */
	function routing(RouterHelper) {
	  var states = [{
	    state: 'modules',
	    config: {
	      abstract: true,
	      parent: 'layout'
	    }
	  }];
	
	  RouterHelper.configureStates(states);
	}

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _car_brand = __webpack_require__(184);
	
	var _car_brand2 = _interopRequireDefault(_car_brand);
	
	var _service_type = __webpack_require__(185);
	
	var _service_type2 = _interopRequireDefault(_service_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  Module initialize.
	 *
	 * @ngInject
	 */
	exports.default = _angular2.default.module('app.resources', []).service('CarBrandResource', _car_brand2.default).service('ServiceTypeResource', _service_type2.default).name; // Imports

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  Car brand resource.
	 *
	 * @ngInject
	 */
	var CarBrandResource =
	/**
	 * Constructor of the class.
	 *
	 * @param {*}       $resource
	 * @param {config}  config
	 * @returns {*}
	 */
	function CarBrandResource($resource, config) {
	  (0, _classCallCheck3.default)(this, CarBrandResource);
	
	  return $resource(config.API_URL + 'car_brand/:id', {
	    id: '@id'
	  }, {
	    count: {
	      method: 'GET',
	      params: {
	        id: 'count'
	      }
	    },
	    ids: {
	      method: 'GET',
	      params: {
	        id: 'ids'
	      },
	      isArray: true
	    },
	    update: {
	      method: 'PUT'
	    }
	  }, {
	    cancellable: true
	  });
	};
	
	exports.default = CarBrandResource;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  Service type resource.
	 *
	 * @ngInject
	 */
	var ServiceTypeResource =
	/**
	 * Constructor of the class.
	 *
	 * @param {*}       $resource
	 * @param {config}  config
	 * @returns {*}
	 */
	function ServiceTypeResource($resource, config) {
	  (0, _classCallCheck3.default)(this, ServiceTypeResource);
	
	  return $resource(config.API_URL + 'service_type/:id', {
	    id: '@id'
	  }, {
	    count: {
	      method: 'GET',
	      params: {
	        id: 'count'
	      }
	    },
	    ids: {
	      method: 'GET',
	      params: {
	        id: 'ids'
	      },
	      isArray: true
	    },
	    update: {
	      method: 'PUT'
	    }
	  }, {
	    cancellable: true
	  });
	};
	
	exports.default = ServiceTypeResource;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _menuItem = __webpack_require__(187);
	
	var _menuItem2 = _interopRequireDefault(_menuItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  Module initialize.
	 *
	 * @ngInject
	 */
	// Imports
	exports.default = _angular2.default.module('app.services', []).service('MenuItemService', _menuItem2.default).name;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(25);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _keys = __webpack_require__(95);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(28);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _is = __webpack_require__(188);
	
	var _is2 = _interopRequireDefault(_is);
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(100);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _menuItem = __webpack_require__(192);
	
	var _menuItem2 = _interopRequireDefault(_menuItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @desc  MenuItemService class.
	 * @ngInject
	 */
	var MenuItemService = function () {
	  /**
	   * Constructor of the class.
	   *
	   * @param {ui.router.state.$state}  $state
	   * @param {$mdSidenav}              $mdSidenav
	   * @param {AuthService}             AuthService
	   * @param {UserService}             UserService
	   * @param {UserRoles}               UserRoles
	   */
	  function MenuItemService($state, $mdSidenav, AuthService, UserService, UserRoles) {
	    (0, _classCallCheck3.default)(this, MenuItemService);
	
	    this.$state = $state;
	    this.$mdSidenav = $mdSidenav;
	    this.authService = AuthService;
	    this.userService = UserService;
	
	    // Actual menu items
	    this.items = [{
	      title: 'About',
	      state: 'modules.about',
	      access: UserRoles.ROLE_ANON
	    }, {
	      title: 'Profile',
	      state: 'auth.profile',
	      access: UserRoles.ROLE_LOGGED
	    }, {
	      title: 'Examples',
	      state: 'modules.examples',
	      access: UserRoles.ROLE_USER,
	      items: [{
	        title: 'Authors',
	        state: false,
	        access: UserRoles.ROLE_USER
	      }, {
	        title: 'Books',
	        state: false,
	        access: UserRoles.ROLE_USER
	      }]
	    }, {
	      title: 'Login',
	      state: 'auth.login',
	      access: UserRoles.ROLE_ANON,
	      hideLogged: true
	    }, {
	      title: 'Logout',
	      state: 'auth.logout',
	      access: UserRoles.ROLE_LOGGED
	    }].map(function (item) {
	      return new _menuItem2.default(item);
	    });
	  }
	
	  /**
	   * Getter method for all menu items.
	   *
	   * @returns {MenuItem[]}
	   */
	
	
	  (0, _createClass3.default)(MenuItemService, [{
	    key: 'getItems',
	    value: function getItems() {
	      var _this = this;
	
	      var iterator = function iterator(item) {
	        if (!(item instanceof _menuItem2.default)) {
	          throw new TypeError('Value of argument "item" violates contract.\n\nExpected:\nMenuItem\n\nGot:\n' + _inspect(item));
	        }
	
	        if (item.items.length) {
	          item.items.filter(iterator);
	
	          if (item.items.length === 0) {
	            return false;
	          }
	        }
	
	        var hasAccess = _this.authService.authorize(item.access);
	
	        if (hasAccess && item.hideLogged) {
	          hasAccess = !_this.userService.getProfile();
	        }
	
	        return hasAccess;
	      };
	
	      return this.items.filter(iterator);
	    }
	
	    /**
	     * Method to change application state to another one.
	     *
	     * @param {MenuItem}  item
	     * @param {Object}    [params]
	     * @returns {promise}
	     */
	
	  }, {
	    key: 'goToPage',
	    value: function goToPage(item) {
	      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	      if (!(item instanceof _menuItem2.default)) {
	        throw new TypeError('Value of argument "item" violates contract.\n\nExpected:\nMenuItem\n\nGot:\n' + _inspect(item));
	      }
	
	      if (!(params instanceof Object)) {
	        throw new TypeError('Value of argument "params" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(params));
	      }
	
	      var parameters = (0, _is2.default)({}, params) && !(0, _is2.default)({}, item.params) ? item.params : params;
	
	      this.$mdSidenav('left').close();
	
	      return this.$state.current.name === item.state ? this.$state.reload() : this.$state.go(item.state, parameters);
	    }
	  }]);
	  return MenuItemService;
	}(); // Imports
	
	
	exports.default = MenuItemService;
	
	function _inspect(input, depth) {
	  var maxDepth = 4;
	  var maxKeys = 15;

	  if (depth === undefined) {
	    depth = 0;
	  }

	  depth += 1;

	  if (input === null) {
	    return 'null';
	  } else if (input === undefined) {
	    return 'void';
	  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
	  } else if (Array.isArray(input)) {
	    if (input.length > 0) {
	      var _ret = function () {
	        if (depth > maxDepth) return {
	            v: '[...]'
	          };

	        var first = _inspect(input[0], depth);

	        if (input.every(function (item) {
	          return _inspect(item, depth) === first;
	        })) {
	          return {
	            v: first.trim() + '[]'
	          };
	        } else {
	          return {
	            v: '[' + input.slice(0, maxKeys).map(function (item) {
	              return _inspect(item, depth);
	            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	          };
	        }
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	    } else {
	      return 'Array';
	    }
	  } else {
	    var keys = (0, _keys2.default)(input);

	    if (!keys.length) {
	      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	        return input.constructor.name;
	      } else {
	        return 'Object';
	      }
	    }

	    if (depth > maxDepth) return '{...}';
	    var indent = '  '.repeat(depth - 1);
	    var entries = keys.slice(0, maxKeys).map(function (key) {
	      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
	    }).join('\n  ' + indent);

	    if (keys.length >= maxKeys) {
	      entries += '\n  ' + indent + '...';
	    }

	    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	    } else {
	      return '{\n  ' + indent + entries + '\n' + indent + '}';
	    }
	  }
	}

/***/ },
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(25);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _keys = __webpack_require__(95);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(28);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _classCallCheck2 = __webpack_require__(99);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _menuItem = __webpack_require__(193);
	
	var _menuItem2 = _interopRequireDefault(_menuItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * MenuItem class.
	 *
	 * @ngInject
	 */
	var MenuItem =
	/**
	 * Constructor of the class
	 *
	 * @param {MenuItemInterface}  item
	 */
	function MenuItem(item) {
	  (0, _classCallCheck3.default)(this, MenuItem);
	
	  if (!(item instanceof Object)) {
	    throw new TypeError('Value of argument "item" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(item));
	  }
	
	  this.title = item.title;
	  this.state = item.state;
	  this.access = item.access;
	  this.hideLogged = !!item.hideLogged;
	  this.params = item.params || {};
	  this.items = (item.items || []).map(function (subItem) {
	    return new MenuItem(subItem);
	  });
	  this.open = !!item.open;
	}; // Imports
	
	
	exports.default = MenuItem;
	
	function _inspect(input, depth) {
	  var maxDepth = 4;
	  var maxKeys = 15;

	  if (depth === undefined) {
	    depth = 0;
	  }

	  depth += 1;

	  if (input === null) {
	    return 'null';
	  } else if (input === undefined) {
	    return 'void';
	  } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
	    return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
	  } else if (Array.isArray(input)) {
	    if (input.length > 0) {
	      var _ret = function () {
	        if (depth > maxDepth) return {
	            v: '[...]'
	          };

	        var first = _inspect(input[0], depth);

	        if (input.every(function (item) {
	          return _inspect(item, depth) === first;
	        })) {
	          return {
	            v: first.trim() + '[]'
	          };
	        } else {
	          return {
	            v: '[' + input.slice(0, maxKeys).map(function (item) {
	              return _inspect(item, depth);
	            }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
	          };
	        }
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	    } else {
	      return 'Array';
	    }
	  } else {
	    var keys = (0, _keys2.default)(input);

	    if (!keys.length) {
	      if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	        return input.constructor.name;
	      } else {
	        return 'Object';
	      }
	    }

	    if (depth > maxDepth) return '{...}';
	    var indent = '  '.repeat(depth - 1);
	    var entries = keys.slice(0, maxKeys).map(function (key) {
	      return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
	    }).join('\n  ' + indent);

	    if (keys.length >= maxKeys) {
	      entries += '\n  ' + indent + '...';
	    }

	    if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
	      return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
	    } else {
	      return '{\n  ' + indent + entries + '\n' + indent + '}';
	    }
	  }
	}

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _hasInstance = __webpack_require__(165);
	
	var _hasInstance2 = _interopRequireDefault(_hasInstance);
	
	var _defineProperty = __webpack_require__(101);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {};
	
	// Interface declaration for AboutItem
	
	
	var MenuItemInterface = function () {
	  function MenuItemInterface(input) {
	    return input != null && typeof input.title === 'string' && typeof input.state === 'string' && typeof input.access === 'string' && typeof input.hideLogged === 'boolean' && Array.isArray(input.items) && input.items.every(function (item) {
	      return MenuItemInterface(item);
	    }) && typeof input.open === 'boolean';
	  }
	
	  ;
	  (0, _defineProperty2.default)(MenuItemInterface, _hasInstance2.default, {
	    value: function value(input) {
	      return MenuItemInterface(input);
	    }
	  });
	  return MenuItemInterface;
	}();

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/* global API_URL, VERSION */
	exports.default = function (app) {
	  app.constant('config', {
	    API_URL: ("http://poc-01.protacon.fi//"),
	    VERSION: ("0.0.0")
	  });
	};

/***/ }
]);
//# sourceMappingURL=debugging/main.js.map
