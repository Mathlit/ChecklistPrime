/**!

 @license
 handlebars v4.0.10

Copyright (C) 2011-2016 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["Handlebars"] = factory();else root["Handlebars"] = factory();
})(this, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};

			/******/ // The require function
			/******/function __webpack_require__(moduleId) {

				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;

				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };

				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

				/******/ // Flag the module as loaded
				/******/module.loaded = true;

				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}

			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;

			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;

			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";

			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireWildcard = __webpack_require__(1)['default'];

			var _interopRequireDefault = __webpack_require__(2)['default'];

			exports.__esModule = true;

			var _handlebarsBase = __webpack_require__(3);

			var base = _interopRequireWildcard(_handlebarsBase);

			// Each of these augment the Handlebars object. No need to setup here.
			// (This is done to easily share code between commonjs and browse envs)

			var _handlebarsSafeString = __webpack_require__(20);

			var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

			var _handlebarsException = __webpack_require__(5);

			var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

			var _handlebarsUtils = __webpack_require__(4);

			var Utils = _interopRequireWildcard(_handlebarsUtils);

			var _handlebarsRuntime = __webpack_require__(21);

			var runtime = _interopRequireWildcard(_handlebarsRuntime);

			var _handlebarsNoConflict = __webpack_require__(33);

			var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

			// For compatibility and usage outside of module systems, make the Handlebars object a namespace
			function create() {
				var hb = new base.HandlebarsEnvironment();

				Utils.extend(hb, base);
				hb.SafeString = _handlebarsSafeString2['default'];
				hb.Exception = _handlebarsException2['default'];
				hb.Utils = Utils;
				hb.escapeExpression = Utils.escapeExpression;

				hb.VM = runtime;
				hb.template = function (spec) {
					return runtime.template(spec, hb);
				};

				return hb;
			}

			var inst = create();
			inst.create = create;

			_handlebarsNoConflict2['default'](inst);

			inst['default'] = inst;

			exports['default'] = inst;
			module.exports = exports['default'];

			/***/
		},
		/* 1 */
		/***/function (module, exports) {

			"use strict";

			exports["default"] = function (obj) {
				if (obj && obj.__esModule) {
					return obj;
				} else {
					var newObj = {};

					if (obj != null) {
						for (var key in obj) {
							if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
						}
					}

					newObj["default"] = obj;
					return newObj;
				}
			};

			exports.__esModule = true;

			/***/
		},
		/* 2 */
		/***/function (module, exports) {

			"use strict";

			exports["default"] = function (obj) {
				return obj && obj.__esModule ? obj : {
					"default": obj
				};
			};

			exports.__esModule = true;

			/***/
		},
		/* 3 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(2)['default'];

			exports.__esModule = true;
			exports.HandlebarsEnvironment = HandlebarsEnvironment;

			var _utils = __webpack_require__(4);

			var _exception = __webpack_require__(5);

			var _exception2 = _interopRequireDefault(_exception);

			var _helpers = __webpack_require__(9);

			var _decorators = __webpack_require__(17);

			var _logger = __webpack_require__(19);

			var _logger2 = _interopRequireDefault(_logger);

			var VERSION = '4.0.10';
			exports.VERSION = VERSION;
			var COMPILER_REVISION = 7;

			exports.COMPILER_REVISION = COMPILER_REVISION;
			var REVISION_CHANGES = {
				1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
				2: '== 1.0.0-rc.3',
				3: '== 1.0.0-rc.4',
				4: '== 1.x.x',
				5: '== 2.0.0-alpha.x',
				6: '>= 2.0.0-beta.1',
				7: '>= 4.0.0'
			};

			exports.REVISION_CHANGES = REVISION_CHANGES;
			var objectType = '[object Object]';

			function HandlebarsEnvironment(helpers, partials, decorators) {
				this.helpers = helpers || {};
				this.partials = partials || {};
				this.decorators = decorators || {};

				_helpers.registerDefaultHelpers(this);
				_decorators.registerDefaultDecorators(this);
			}

			HandlebarsEnvironment.prototype = {
				constructor: HandlebarsEnvironment,

				logger: _logger2['default'],
				log: _logger2['default'].log,

				registerHelper: function registerHelper(name, fn) {
					if (_utils.toString.call(name) === objectType) {
						if (fn) {
							throw new _exception2['default']('Arg not supported with multiple helpers');
						}
						_utils.extend(this.helpers, name);
					} else {
						this.helpers[name] = fn;
					}
				},
				unregisterHelper: function unregisterHelper(name) {
					delete this.helpers[name];
				},

				registerPartial: function registerPartial(name, partial) {
					if (_utils.toString.call(name) === objectType) {
						_utils.extend(this.partials, name);
					} else {
						if (typeof partial === 'undefined') {
							throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
						}
						this.partials[name] = partial;
					}
				},
				unregisterPartial: function unregisterPartial(name) {
					delete this.partials[name];
				},

				registerDecorator: function registerDecorator(name, fn) {
					if (_utils.toString.call(name) === objectType) {
						if (fn) {
							throw new _exception2['default']('Arg not supported with multiple decorators');
						}
						_utils.extend(this.decorators, name);
					} else {
						this.decorators[name] = fn;
					}
				},
				unregisterDecorator: function unregisterDecorator(name) {
					delete this.decorators[name];
				}
			};

			var log = _logger2['default'].log;

			exports.log = log;
			exports.createFrame = _utils.createFrame;
			exports.logger = _logger2['default'];

			/***/
		},
		/* 4 */
		/***/function (module, exports) {

			'use strict';

			exports.__esModule = true;
			exports.extend = extend;
			exports.indexOf = indexOf;
			exports.escapeExpression = escapeExpression;
			exports.isEmpty = isEmpty;
			exports.createFrame = createFrame;
			exports.blockParams = blockParams;
			exports.appendContextPath = appendContextPath;
			var escape = {
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;',
				"'": '&#x27;',
				'`': '&#x60;',
				'=': '&#x3D;'
			};

			var badChars = /[&<>"'`=]/g,
			    possible = /[&<>"'`=]/;

			function escapeChar(chr) {
				return escape[chr];
			}

			function extend(obj /* , ...source */) {
				for (var i = 1; i < arguments.length; i++) {
					for (var key in arguments[i]) {
						if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
							obj[key] = arguments[i][key];
						}
					}
				}

				return obj;
			}

			var toString = Object.prototype.toString;

			exports.toString = toString;
			// Sourced from lodash
			// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
			/* eslint-disable func-style */
			var isFunction = function isFunction(value) {
				return typeof value === 'function';
			};
			// fallback for older versions of Chrome and Safari
			/* istanbul ignore next */
			if (isFunction(/x/)) {
				exports.isFunction = isFunction = function (value) {
					return typeof value === 'function' && toString.call(value) === '[object Function]';
				};
			}
			exports.isFunction = isFunction;

			/* eslint-enable func-style */

			/* istanbul ignore next */
			var isArray = Array.isArray || function (value) {
				return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
			};

			exports.isArray = isArray;
			// Older IE versions do not directly support indexOf so we must implement our own, sadly.

			function indexOf(array, value) {
				for (var i = 0, len = array.length; i < len; i++) {
					if (array[i] === value) {
						return i;
					}
				}
				return -1;
			}

			function escapeExpression(string) {
				if (typeof string !== 'string') {
					// don't escape SafeStrings, since they're already safe
					if (string && string.toHTML) {
						return string.toHTML();
					} else if (string == null) {
						return '';
					} else if (!string) {
						return string + '';
					}

					// Force a string conversion as this will be done by the append regardless and
					// the regex test will do this transparently behind the scenes, causing issues if
					// an object's to string has escaped characters in it.
					string = '' + string;
				}

				if (!possible.test(string)) {
					return string;
				}
				return string.replace(badChars, escapeChar);
			}

			function isEmpty(value) {
				if (!value && value !== 0) {
					return true;
				} else if (isArray(value) && value.length === 0) {
					return true;
				} else {
					return false;
				}
			}

			function createFrame(object) {
				var frame = extend({}, object);
				frame._parent = object;
				return frame;
			}

			function blockParams(params, ids) {
				params.path = ids;
				return params;
			}

			function appendContextPath(contextPath, id) {
				return (contextPath ? contextPath + '.' : '') + id;
			}

			/***/
		},
		/* 5 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _Object$defineProperty = __webpack_require__(6)['default'];

			exports.__esModule = true;

			var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

			function Exception(message, node) {
				var loc = node && node.loc,
				    line = undefined,
				    column = undefined;
				if (loc) {
					line = loc.start.line;
					column = loc.start.column;

					message += ' - ' + line + ':' + column;
				}

				var tmp = Error.prototype.constructor.call(this, message);

				// Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
				for (var idx = 0; idx < errorProps.length; idx++) {
					this[errorProps[idx]] = tmp[errorProps[idx]];
				}

				/* istanbul ignore else */
				if (Error.captureStackTrace) {
					Error.captureStackTrace(this, Exception);
				}

				try {
					if (loc) {
						this.lineNumber = line;

						// Work around issue under safari where we can't directly set the column value
						/* istanbul ignore next */
						if (_Object$defineProperty) {
							Object.defineProperty(this, 'column', {
								value: column,
								enumerable: true
							});
						} else {
							this.column = column;
						}
					}
				} catch (nop) {
					/* Ignore if the browser is very particular */
				}
			}

			Exception.prototype = new Error();

			exports['default'] = Exception;
			module.exports = exports['default'];

			/***/
		},
		/* 6 */
		/***/function (module, exports, __webpack_require__) {

			module.exports = { "default": __webpack_require__(7), __esModule: true };

			/***/
		},
		/* 7 */
		/***/function (module, exports, __webpack_require__) {

			var $ = __webpack_require__(8);
			module.exports = function defineProperty(it, key, desc) {
				return $.setDesc(it, key, desc);
			};

			/***/
		},
		/* 8 */
		/***/function (module, exports) {

			var $Object = Object;
			module.exports = {
				create: $Object.create,
				getProto: $Object.getPrototypeOf,
				isEnum: {}.propertyIsEnumerable,
				getDesc: $Object.getOwnPropertyDescriptor,
				setDesc: $Object.defineProperty,
				setDescs: $Object.defineProperties,
				getKeys: $Object.keys,
				getNames: $Object.getOwnPropertyNames,
				getSymbols: $Object.getOwnPropertySymbols,
				each: [].forEach
			};

			/***/
		},
		/* 9 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(2)['default'];

			exports.__esModule = true;
			exports.registerDefaultHelpers = registerDefaultHelpers;

			var _helpersBlockHelperMissing = __webpack_require__(10);

			var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

			var _helpersEach = __webpack_require__(11);

			var _helpersEach2 = _interopRequireDefault(_helpersEach);

			var _helpersHelperMissing = __webpack_require__(12);

			var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

			var _helpersIf = __webpack_require__(13);

			var _helpersIf2 = _interopRequireDefault(_helpersIf);

			var _helpersLog = __webpack_require__(14);

			var _helpersLog2 = _interopRequireDefault(_helpersLog);

			var _helpersLookup = __webpack_require__(15);

			var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

			var _helpersWith = __webpack_require__(16);

			var _helpersWith2 = _interopRequireDefault(_helpersWith);

			function registerDefaultHelpers(instance) {
				_helpersBlockHelperMissing2['default'](instance);
				_helpersEach2['default'](instance);
				_helpersHelperMissing2['default'](instance);
				_helpersIf2['default'](instance);
				_helpersLog2['default'](instance);
				_helpersLookup2['default'](instance);
				_helpersWith2['default'](instance);
			}

			/***/
		},
		/* 10 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _utils = __webpack_require__(4);

			exports['default'] = function (instance) {
				instance.registerHelper('blockHelperMissing', function (context, options) {
					var inverse = options.inverse,
					    fn = options.fn;

					if (context === true) {
						return fn(this);
					} else if (context === false || context == null) {
						return inverse(this);
					} else if (_utils.isArray(context)) {
						if (context.length > 0) {
							if (options.ids) {
								options.ids = [options.name];
							}

							return instance.helpers.each(context, options);
						} else {
							return inverse(this);
						}
					} else {
						if (options.data && options.ids) {
							var data = _utils.createFrame(options.data);
							data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
							options = { data: data };
						}

						return fn(context, options);
					}
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 11 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(2)['default'];

			exports.__esModule = true;

			var _utils = __webpack_require__(4);

			var _exception = __webpack_require__(5);

			var _exception2 = _interopRequireDefault(_exception);

			exports['default'] = function (instance) {
				instance.registerHelper('each', function (context, options) {
					if (!options) {
						throw new _exception2['default']('Must pass iterator to #each');
					}

					var fn = options.fn,
					    inverse = options.inverse,
					    i = 0,
					    ret = '',
					    data = undefined,
					    contextPath = undefined;

					if (options.data && options.ids) {
						contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
					}

					if (_utils.isFunction(context)) {
						context = context.call(this);
					}

					if (options.data) {
						data = _utils.createFrame(options.data);
					}

					function execIteration(field, index, last) {
						if (data) {
							data.key = field;
							data.index = index;
							data.first = index === 0;
							data.last = !!last;

							if (contextPath) {
								data.contextPath = contextPath + field;
							}
						}

						ret = ret + fn(context[field], {
							data: data,
							blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
						});
					}

					if (context && typeof context === 'object') {
						if (_utils.isArray(context)) {
							for (var j = context.length; i < j; i++) {
								if (i in context) {
									execIteration(i, i, i === context.length - 1);
								}
							}
						} else {
							var priorKey = undefined;

							for (var key in context) {
								if (context.hasOwnProperty(key)) {
									// We're running the iterations one step out of sync so we can detect
									// the last iteration without have to scan the object twice and create
									// an itermediate keys array.
									if (priorKey !== undefined) {
										execIteration(priorKey, i - 1);
									}
									priorKey = key;
									i++;
								}
							}
							if (priorKey !== undefined) {
								execIteration(priorKey, i - 1, true);
							}
						}
					}

					if (i === 0) {
						ret = inverse(this);
					}

					return ret;
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 12 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(2)['default'];

			exports.__esModule = true;

			var _exception = __webpack_require__(5);

			var _exception2 = _interopRequireDefault(_exception);

			exports['default'] = function (instance) {
				instance.registerHelper('helperMissing', function () /* [args, ]options */{
					if (arguments.length === 1) {
						// A missing field in a {{foo}} construct.
						return undefined;
					} else {
						// Someone is actually trying to call something, blow up.
						throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
					}
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 13 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _utils = __webpack_require__(4);

			exports['default'] = function (instance) {
				instance.registerHelper('if', function (conditional, options) {
					if (_utils.isFunction(conditional)) {
						conditional = conditional.call(this);
					}

					// Default behavior is to render the positive path if the value is truthy and not empty.
					// The `includeZero` option may be set to treat the condtional as purely not empty based on the
					// behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
					if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
						return options.inverse(this);
					} else {
						return options.fn(this);
					}
				});

				instance.registerHelper('unless', function (conditional, options) {
					return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 14 */
		/***/function (module, exports) {

			'use strict';

			exports.__esModule = true;

			exports['default'] = function (instance) {
				instance.registerHelper('log', function () /* message, options */{
					var args = [undefined],
					    options = arguments[arguments.length - 1];
					for (var i = 0; i < arguments.length - 1; i++) {
						args.push(arguments[i]);
					}

					var level = 1;
					if (options.hash.level != null) {
						level = options.hash.level;
					} else if (options.data && options.data.level != null) {
						level = options.data.level;
					}
					args[0] = level;

					instance.log.apply(instance, args);
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 15 */
		/***/function (module, exports) {

			'use strict';

			exports.__esModule = true;

			exports['default'] = function (instance) {
				instance.registerHelper('lookup', function (obj, field) {
					return obj && obj[field];
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 16 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _utils = __webpack_require__(4);

			exports['default'] = function (instance) {
				instance.registerHelper('with', function (context, options) {
					if (_utils.isFunction(context)) {
						context = context.call(this);
					}

					var fn = options.fn;

					if (!_utils.isEmpty(context)) {
						var data = options.data;
						if (options.data && options.ids) {
							data = _utils.createFrame(options.data);
							data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
						}

						return fn(context, {
							data: data,
							blockParams: _utils.blockParams([context], [data && data.contextPath])
						});
					} else {
						return options.inverse(this);
					}
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 17 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _interopRequireDefault = __webpack_require__(2)['default'];

			exports.__esModule = true;
			exports.registerDefaultDecorators = registerDefaultDecorators;

			var _decoratorsInline = __webpack_require__(18);

			var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

			function registerDefaultDecorators(instance) {
				_decoratorsInline2['default'](instance);
			}

			/***/
		},
		/* 18 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _utils = __webpack_require__(4);

			exports['default'] = function (instance) {
				instance.registerDecorator('inline', function (fn, props, container, options) {
					var ret = fn;
					if (!props.partials) {
						props.partials = {};
						ret = function (context, options) {
							// Create a new partials stack frame prior to exec.
							var original = container.partials;
							container.partials = _utils.extend({}, original, props.partials);
							var ret = fn(context, options);
							container.partials = original;
							return ret;
						};
					}

					props.partials[options.args[0]] = options.fn;

					return ret;
				});
			};

			module.exports = exports['default'];

			/***/
		},
		/* 19 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			exports.__esModule = true;

			var _utils = __webpack_require__(4);

			var logger = {
				methodMap: ['debug', 'info', 'warn', 'error'],
				level: 'info',

				// Maps a given level value to the `methodMap` indexes above.
				lookupLevel: function lookupLevel(level) {
					if (typeof level === 'string') {
						var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
						if (levelMap >= 0) {
							level = levelMap;
						} else {
							level = parseInt(level, 10);
						}
					}

					return level;
				},

				// Can be overridden in the host environment
				log: function log(level) {
					level = logger.lookupLevel(level);

					if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
						var method = logger.methodMap[level];
						if (!console[method]) {
							// eslint-disable-line no-console
							method = 'log';
						}

						for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
							message[_key - 1] = arguments[_key];
						}

						console[method].apply(console, message); // eslint-disable-line no-console
					}
				}
			};

			exports['default'] = logger;
			module.exports = exports['default'];

			/***/
		},
		/* 20 */
		/***/function (module, exports) {

			// Build out our basic SafeString type
			'use strict';

			exports.__esModule = true;
			function SafeString(string) {
				this.string = string;
			}

			SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
				return '' + this.string;
			};

			exports['default'] = SafeString;
			module.exports = exports['default'];

			/***/
		},
		/* 21 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var _Object$seal = __webpack_require__(22)['default'];

			var _interopRequireWildcard = __webpack_require__(1)['default'];

			var _interopRequireDefault = __webpack_require__(2)['default'];

			exports.__esModule = true;
			exports.checkRevision = checkRevision;
			exports.template = template;
			exports.wrapProgram = wrapProgram;
			exports.resolvePartial = resolvePartial;
			exports.invokePartial = invokePartial;
			exports.noop = noop;

			var _utils = __webpack_require__(4);

			var Utils = _interopRequireWildcard(_utils);

			var _exception = __webpack_require__(5);

			var _exception2 = _interopRequireDefault(_exception);

			var _base = __webpack_require__(3);

			function checkRevision(compilerInfo) {
				var compilerRevision = compilerInfo && compilerInfo[0] || 1,
				    currentRevision = _base.COMPILER_REVISION;

				if (compilerRevision !== currentRevision) {
					if (compilerRevision < currentRevision) {
						var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
						    compilerVersions = _base.REVISION_CHANGES[compilerRevision];
						throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
					} else {
						// Use the embedded version info since the runtime doesn't know about this revision yet
						throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
					}
				}
			}

			function template(templateSpec, env) {
				/* istanbul ignore next */
				if (!env) {
					throw new _exception2['default']('No environment passed to template');
				}
				if (!templateSpec || !templateSpec.main) {
					throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
				}

				templateSpec.main.decorator = templateSpec.main_d;

				// Note: Using env.VM references rather than local var references throughout this section to allow
				// for external users to override these as psuedo-supported APIs.
				env.VM.checkRevision(templateSpec.compiler);

				function invokePartialWrapper(partial, context, options) {
					if (options.hash) {
						context = Utils.extend({}, context, options.hash);
						if (options.ids) {
							options.ids[0] = true;
						}
					}

					partial = env.VM.resolvePartial.call(this, partial, context, options);
					var result = env.VM.invokePartial.call(this, partial, context, options);

					if (result == null && env.compile) {
						options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
						result = options.partials[options.name](context, options);
					}
					if (result != null) {
						if (options.indent) {
							var lines = result.split('\n');
							for (var i = 0, l = lines.length; i < l; i++) {
								if (!lines[i] && i + 1 === l) {
									break;
								}

								lines[i] = options.indent + lines[i];
							}
							result = lines.join('\n');
						}
						return result;
					} else {
						throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
					}
				}

				// Just add water
				var container = {
					strict: function strict(obj, name) {
						if (!(name in obj)) {
							throw new _exception2['default']('"' + name + '" not defined in ' + obj);
						}
						return obj[name];
					},
					lookup: function lookup(depths, name) {
						var len = depths.length;
						for (var i = 0; i < len; i++) {
							if (depths[i] && depths[i][name] != null) {
								return depths[i][name];
							}
						}
					},
					lambda: function lambda(current, context) {
						return typeof current === 'function' ? current.call(context) : current;
					},

					escapeExpression: Utils.escapeExpression,
					invokePartial: invokePartialWrapper,

					fn: function fn(i) {
						var ret = templateSpec[i];
						ret.decorator = templateSpec[i + '_d'];
						return ret;
					},

					programs: [],
					program: function program(i, data, declaredBlockParams, blockParams, depths) {
						var programWrapper = this.programs[i],
						    fn = this.fn(i);
						if (data || depths || blockParams || declaredBlockParams) {
							programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
						} else if (!programWrapper) {
							programWrapper = this.programs[i] = wrapProgram(this, i, fn);
						}
						return programWrapper;
					},

					data: function data(value, depth) {
						while (value && depth--) {
							value = value._parent;
						}
						return value;
					},
					merge: function merge(param, common) {
						var obj = param || common;

						if (param && common && param !== common) {
							obj = Utils.extend({}, common, param);
						}

						return obj;
					},
					// An empty object to use as replacement for null-contexts
					nullContext: _Object$seal({}),

					noop: env.VM.noop,
					compilerInfo: templateSpec.compiler
				};

				function ret(context) {
					var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

					var data = options.data;

					ret._setup(options);
					if (!options.partial && templateSpec.useData) {
						data = initData(context, data);
					}
					var depths = undefined,
					    blockParams = templateSpec.useBlockParams ? [] : undefined;
					if (templateSpec.useDepths) {
						if (options.depths) {
							depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
						} else {
							depths = [context];
						}
					}

					function main(context /*, options*/) {
						return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
					}
					main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
					return main(context, options);
				}
				ret.isTop = true;

				ret._setup = function (options) {
					if (!options.partial) {
						container.helpers = container.merge(options.helpers, env.helpers);

						if (templateSpec.usePartial) {
							container.partials = container.merge(options.partials, env.partials);
						}
						if (templateSpec.usePartial || templateSpec.useDecorators) {
							container.decorators = container.merge(options.decorators, env.decorators);
						}
					} else {
						container.helpers = options.helpers;
						container.partials = options.partials;
						container.decorators = options.decorators;
					}
				};

				ret._child = function (i, data, blockParams, depths) {
					if (templateSpec.useBlockParams && !blockParams) {
						throw new _exception2['default']('must pass block params');
					}
					if (templateSpec.useDepths && !depths) {
						throw new _exception2['default']('must pass parent depths');
					}

					return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
				};
				return ret;
			}

			function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
				function prog(context) {
					var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

					var currentDepths = depths;
					if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
						currentDepths = [context].concat(depths);
					}

					return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
				}

				prog = executeDecorators(fn, prog, container, depths, data, blockParams);

				prog.program = i;
				prog.depth = depths ? depths.length : 0;
				prog.blockParams = declaredBlockParams || 0;
				return prog;
			}

			function resolvePartial(partial, context, options) {
				if (!partial) {
					if (options.name === '@partial-block') {
						partial = options.data['partial-block'];
					} else {
						partial = options.partials[options.name];
					}
				} else if (!partial.call && !options.name) {
					// This is a dynamic partial that returned a string
					options.name = partial;
					partial = options.partials[partial];
				}
				return partial;
			}

			function invokePartial(partial, context, options) {
				// Use the current closure context to save the partial-block if this partial
				var currentPartialBlock = options.data && options.data['partial-block'];
				options.partial = true;
				if (options.ids) {
					options.data.contextPath = options.ids[0] || options.data.contextPath;
				}

				var partialBlock = undefined;
				if (options.fn && options.fn !== noop) {
					(function () {
						options.data = _base.createFrame(options.data);
						// Wrapper function to get access to currentPartialBlock from the closure
						var fn = options.fn;
						partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
							var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

							// Restore the partial-block from the closure for the execution of the block
							// i.e. the part inside the block of the partial call.
							options.data = _base.createFrame(options.data);
							options.data['partial-block'] = currentPartialBlock;
							return fn(context, options);
						};
						if (fn.partials) {
							options.partials = Utils.extend({}, options.partials, fn.partials);
						}
					})();
				}

				if (partial === undefined && partialBlock) {
					partial = partialBlock;
				}

				if (partial === undefined) {
					throw new _exception2['default']('The partial ' + options.name + ' could not be found');
				} else if (partial instanceof Function) {
					return partial(context, options);
				}
			}

			function noop() {
				return '';
			}

			function initData(context, data) {
				if (!data || !('root' in data)) {
					data = data ? _base.createFrame(data) : {};
					data.root = context;
				}
				return data;
			}

			function executeDecorators(fn, prog, container, depths, data, blockParams) {
				if (fn.decorator) {
					var props = {};
					prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
					Utils.extend(prog, props);
				}
				return prog;
			}

			/***/
		},
		/* 22 */
		/***/function (module, exports, __webpack_require__) {

			module.exports = { "default": __webpack_require__(23), __esModule: true };

			/***/
		},
		/* 23 */
		/***/function (module, exports, __webpack_require__) {

			__webpack_require__(24);
			module.exports = __webpack_require__(29).Object.seal;

			/***/
		},
		/* 24 */
		/***/function (module, exports, __webpack_require__) {

			// 19.1.2.17 Object.seal(O)
			var isObject = __webpack_require__(25);

			__webpack_require__(26)('seal', function ($seal) {
				return function seal(it) {
					return $seal && isObject(it) ? $seal(it) : it;
				};
			});

			/***/
		},
		/* 25 */
		/***/function (module, exports) {

			module.exports = function (it) {
				return typeof it === 'object' ? it !== null : typeof it === 'function';
			};

			/***/
		},
		/* 26 */
		/***/function (module, exports, __webpack_require__) {

			// most Object methods by ES6 should accept primitives
			var $export = __webpack_require__(27),
			    core = __webpack_require__(29),
			    fails = __webpack_require__(32);
			module.exports = function (KEY, exec) {
				var fn = (core.Object || {})[KEY] || Object[KEY],
				    exp = {};
				exp[KEY] = exec(fn);
				$export($export.S + $export.F * fails(function () {
					fn(1);
				}), 'Object', exp);
			};

			/***/
		},
		/* 27 */
		/***/function (module, exports, __webpack_require__) {

			var global = __webpack_require__(28),
			    core = __webpack_require__(29),
			    ctx = __webpack_require__(30),
			    PROTOTYPE = 'prototype';

			var $export = function (type, name, source) {
				var IS_FORCED = type & $export.F,
				    IS_GLOBAL = type & $export.G,
				    IS_STATIC = type & $export.S,
				    IS_PROTO = type & $export.P,
				    IS_BIND = type & $export.B,
				    IS_WRAP = type & $export.W,
				    exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
				    target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
				    key,
				    own,
				    out;
				if (IS_GLOBAL) source = name;
				for (key in source) {
					// contains in native
					own = !IS_FORCED && target && key in target;
					if (own && key in exports) continue;
					// export native or passed
					out = own ? target[key] : source[key];
					// prevent global pollution for namespaces
					exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
					// bind timers to global for call from export context
					: IS_BIND && own ? ctx(out, global)
					// wrap global constructors for prevent change them in library
					: IS_WRAP && target[key] == out ? function (C) {
						var F = function (param) {
							return this instanceof C ? new C(param) : C(param);
						};
						F[PROTOTYPE] = C[PROTOTYPE];
						return F;
						// make static versions for prototype methods
					}(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
					if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
				}
			};
			// type bitmap
			$export.F = 1; // forced
			$export.G = 2; // global
			$export.S = 4; // static
			$export.P = 8; // proto
			$export.B = 16; // bind
			$export.W = 32; // wrap
			module.exports = $export;

			/***/
		},
		/* 28 */
		/***/function (module, exports) {

			// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
			var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
			if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

			/***/
		},
		/* 29 */
		/***/function (module, exports) {

			var core = module.exports = { version: '1.2.6' };
			if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

			/***/
		},
		/* 30 */
		/***/function (module, exports, __webpack_require__) {

			// optional / simple context binding
			var aFunction = __webpack_require__(31);
			module.exports = function (fn, that, length) {
				aFunction(fn);
				if (that === undefined) return fn;
				switch (length) {
					case 1:
						return function (a) {
							return fn.call(that, a);
						};
					case 2:
						return function (a, b) {
							return fn.call(that, a, b);
						};
					case 3:
						return function (a, b, c) {
							return fn.call(that, a, b, c);
						};
				}
				return function () /* ...args */{
					return fn.apply(that, arguments);
				};
			};

			/***/
		},
		/* 31 */
		/***/function (module, exports) {

			module.exports = function (it) {
				if (typeof it != 'function') throw TypeError(it + ' is not a function!');
				return it;
			};

			/***/
		},
		/* 32 */
		/***/function (module, exports) {

			module.exports = function (exec) {
				try {
					return !!exec();
				} catch (e) {
					return true;
				}
			};

			/***/
		},
		/* 33 */
		/***/function (module, exports) {

			/* WEBPACK VAR INJECTION */(function (global) {
				/* global window */
				'use strict';

				exports.__esModule = true;

				exports['default'] = function (Handlebars) {
					/* istanbul ignore next */
					var root = typeof global !== 'undefined' ? global : window,
					    $Handlebars = root.Handlebars;
					/* istanbul ignore next */
					Handlebars.noConflict = function () {
						if (root.Handlebars === Handlebars) {
							root.Handlebars = $Handlebars;
						}
						return Handlebars;
					};
				};

				module.exports = exports['default'];
				/* WEBPACK VAR INJECTION */
			}).call(exports, function () {
				return this;
			}());

			/***/
		}]
		/******/)
	);
});
;
!function () {
  var a = Handlebars.template,
      n = Handlebars.templates = Handlebars.templates || {};n.filter = a({ 1: function (a, n, e, l, t) {
      var i,
          r = a.lambda,
          s = a.escapeExpression;return '            <div class="filter itemType">\r\n                <div class="titleContainer">\r\n                    <label for="' + s(r(null != n ? n.typeId : n, n)) + '">' + (null != (i = r(null != n ? n.typeName : n, n)) ? i : "") + '</label>\r\n                </div>\r\n                <div class="checkbox">\r\n                    <input type="checkbox" ' + s(r(null != n ? n.checked : n, n)) + ' name="' + s(r(null != n ? n.typeId : n, n)) + '">\r\n                    <div class="checkboxOverlay">\r\n                        <span class="i-checkbox-unchecked"></span>\r\n                        <span class="i-checkbox-checked"></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n';
    }, compiler: [7, ">= 4.0.0"], main: function (a, n, e, l, t) {
      var i,
          r,
          s = null != n ? n : a.nullContext || {};return '<div id="filterContainer">\r\n    <div class="typesContainer">\r\n' + (null != (i = e.each.call(s, null != n ? n.items : n, { name: "each", hash: {}, fn: a.program(1, t, 0), inverse: a.noop, data: t })) ? i : "") + '        <div class="filter">\r\n            <div class="titleContainer">\r\n                <label for="completed">Show completed items</label>\r\n            </div>\r\n            <div class="checkbox">\r\n                <input type="checkbox" ' + a.escapeExpression((r = null != (r = e.completedChecked || (null != n ? n.completedChecked : n)) ? r : e.helperMissing, "function" == typeof r ? r.call(s, { name: "completedChecked", hash: {}, data: t }) : r)) + ' name="completed">\r\n                <div class="checkboxOverlay">\r\n                    <span class="i-checkbox-unchecked"></span>\r\n                    <span class="i-checkbox-checked"></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="saveContainer">\r\n        <span class="save">Apply</span>\r\n    </div>\r\n</div>';
    }, useData: !0 }), n.itemContainer = a({ compiler: [7, ">= 4.0.0"], main: function (a, n, e, l, t) {
      var i,
          r,
          s = null != n ? n : a.nullContext || {},
          c = e.helperMissing,
          d = "function",
          o = a.escapeExpression;return '<div class="itemContainer" data-itemid="' + o((r = null != (r = e.itemId || (null != n ? n.itemId : n)) ? r : c, typeof r === d ? r.call(s, { name: "itemId", hash: {}, data: t }) : r)) + '" data-typeid="' + o((r = null != (r = e.typeId || (null != n ? n.typeId : n)) ? r : c, typeof r === d ? r.call(s, { name: "typeId", hash: {}, data: t }) : r)) + '">\r\n    <div class="infoContainer">\r\n        <div class="titleContainer">\r\n            <span>' + (null != (r = null != (r = e.itemName || (null != n ? n.itemName : n)) ? r : c, i = typeof r === d ? r.call(s, { name: "itemName", hash: {}, data: t }) : r) ? i : "") + '</span>\r\n        </div>\r\n        <div class="countContainer">\r\n            <span class="itemCountObtained">' + o((r = null != (r = e.obtainedParts || (null != n ? n.obtainedParts : n)) ? r : c, typeof r === d ? r.call(s, { name: "obtainedParts", hash: {}, data: t }) : r)) + '</span> / <span class="itemCountTotal">' + o((r = null != (r = e.totalParts || (null != n ? n.totalParts : n)) ? r : c, typeof r === d ? r.call(s, { name: "totalParts", hash: {}, data: t }) : r)) + '</span>\r\n        </div>\r\n    </div>\r\n    <div class="imageContainer">\r\n        <div class="image ' + o((r = null != (r = e.typeName || (null != n ? n.typeName : n)) ? r : c, typeof r === d ? r.call(s, { name: "typeName", hash: {}, data: t }) : r)) + '"></div>\r\n    </div>\r\n    <div class="loader">\r\n        \r\n    </div>\r\n</div>';
    }, useData: !0 }), n.partContainer = a({ compiler: [7, ">= 4.0.0"], main: function (a, n, e, l, t) {
      var i,
          r,
          s = null != n ? n : a.nullContext || {},
          c = e.helperMissing,
          d = "function",
          o = a.escapeExpression;return '<div class="partContainer active" data-partid="' + o((r = null != (r = e.partId || (null != n ? n.partId : n)) ? r : c, typeof r === d ? r.call(s, { name: "partId", hash: {}, data: t }) : r)) + '" data-itemid="' + o((r = null != (r = e.itemId || (null != n ? n.itemId : n)) ? r : c, typeof r === d ? r.call(s, { name: "itemId", hash: {}, data: t }) : r)) + '">\r\n    <div class="infoContainer">\r\n        <div class="titleContainer">\r\n            <span>' + (null != (r = null != (r = e.partName || (null != n ? n.partName : n)) ? r : c, i = typeof r === d ? r.call(s, { name: "partName", hash: {}, data: t }) : r) ? i : "") + '</span>\r\n        </div>\r\n    </div>\r\n    <div class="imageContainer">\r\n        <div class="image ' + o((r = null != (r = e.typeName || (null != n ? n.typeName : n)) ? r : c, typeof r === d ? r.call(s, { name: "typeName", hash: {}, data: t }) : r)) + '"></div>\r\n    </div>\r\n    <div class="obtainedContainer">\r\n        <div class="checkbox">\r\n            <input type="checkbox" ' + o((r = null != (r = e.checked || (null != n ? n.checked : n)) ? r : c, typeof r === d ? r.call(s, { name: "checked", hash: {}, data: t }) : r)) + '>\r\n            <div class="checkboxOverlay">\r\n                <span class="i-checkbox-unchecked"></span>\r\n                <span class="i-checkbox-checked"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="loader">\r\n\r\n    </div>\r\n</div>';
    }, useData: !0 }), n.relicContainer = a({ compiler: [7, ">= 4.0.0"], main: function (a, n, e, l, t) {
      var i,
          r,
          s = null != n ? n : a.nullContext || {},
          c = e.helperMissing,
          d = a.escapeExpression;return '<div class="relicContainer active" data-relicid="' + d((r = null != (r = e.relicId || (null != n ? n.relicId : n)) ? r : c, "function" == typeof r ? r.call(s, { name: "relicId", hash: {}, data: t }) : r)) + '" data-partid="' + d((r = null != (r = e.partId || (null != n ? n.partId : n)) ? r : c, "function" == typeof r ? r.call(s, { name: "partId", hash: {}, data: t }) : r)) + '">\r\n    <div class="infoContainer">\r\n        <div class="titleContainer">\r\n            <span>' + (null != (r = null != (r = e.relicName || (null != n ? n.relicName : n)) ? r : c, i = "function" == typeof r ? r.call(s, { name: "relicName", hash: {}, data: t }) : r) ? i : "") + "</span>\r\n        </div>\r\n    </div>\r\n</div>";
    }, useData: !0 });
}();
/*!
    localForage -- Offline Storage, Improved
    Version 1.5.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
!function (a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();else if ("function" == typeof define && define.amd) define([], a);else {
        var b;b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.localforage = a();
    }
}(function () {
    return function a(b, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!b[g]) {
                    var i = "function" == typeof require && require;if (!h && i) return i(g, !0);if (f) return f(g, !0);var j = new Error("Cannot find module '" + g + "'");throw j.code = "MODULE_NOT_FOUND", j;
                }var k = c[g] = { exports: {} };b[g][0].call(k.exports, function (a) {
                    var c = b[g][1][a];return e(c ? c : a);
                }, k, k.exports, a, b, c, d);
            }return c[g].exports;
        }for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);return e;
    }({ 1: [function (a, b, c) {
            (function (a) {
                "use strict";
                function c() {
                    k = !0;for (var a, b, c = l.length; c;) {
                        for (b = l, l = [], a = -1; ++a < c;) b[a]();c = l.length;
                    }k = !1;
                }function d(a) {
                    1 !== l.push(a) || k || e();
                }var e,
                    f = a.MutationObserver || a.WebKitMutationObserver;if (f) {
                    var g = 0,
                        h = new f(c),
                        i = a.document.createTextNode("");h.observe(i, { characterData: !0 }), e = function () {
                        i.data = g = ++g % 2;
                    };
                } else if (a.setImmediate || "undefined" == typeof a.MessageChannel) e = "document" in a && "onreadystatechange" in a.document.createElement("script") ? function () {
                    var b = a.document.createElement("script");b.onreadystatechange = function () {
                        c(), b.onreadystatechange = null, b.parentNode.removeChild(b), b = null;
                    }, a.document.documentElement.appendChild(b);
                } : function () {
                    setTimeout(c, 0);
                };else {
                    var j = new a.MessageChannel();j.port1.onmessage = c, e = function () {
                        j.port2.postMessage(0);
                    };
                }var k,
                    l = [];b.exports = d;
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {}], 2: [function (a, b, c) {
            "use strict";
            function d() {}function e(a) {
                if ("function" != typeof a) throw new TypeError("resolver must be a function");this.state = s, this.queue = [], this.outcome = void 0, a !== d && i(this, a);
            }function f(a, b, c) {
                this.promise = a, "function" == typeof b && (this.onFulfilled = b, this.callFulfilled = this.otherCallFulfilled), "function" == typeof c && (this.onRejected = c, this.callRejected = this.otherCallRejected);
            }function g(a, b, c) {
                o(function () {
                    var d;try {
                        d = b(c);
                    } catch (e) {
                        return p.reject(a, e);
                    }d === a ? p.reject(a, new TypeError("Cannot resolve promise with itself")) : p.resolve(a, d);
                });
            }function h(a) {
                var b = a && a.then;return a && "object" == typeof a && "function" == typeof b ? function () {
                    b.apply(a, arguments);
                } : void 0;
            }function i(a, b) {
                function c(b) {
                    f || (f = !0, p.reject(a, b));
                }function d(b) {
                    f || (f = !0, p.resolve(a, b));
                }function e() {
                    b(d, c);
                }var f = !1,
                    g = j(e);"error" === g.status && c(g.value);
            }function j(a, b) {
                var c = {};try {
                    c.value = a(b), c.status = "success";
                } catch (d) {
                    c.status = "error", c.value = d;
                }return c;
            }function k(a) {
                return a instanceof this ? a : p.resolve(new this(d), a);
            }function l(a) {
                var b = new this(d);return p.reject(b, a);
            }function m(a) {
                function b(a, b) {
                    function d(a) {
                        g[b] = a, ++h !== e || f || (f = !0, p.resolve(j, g));
                    }c.resolve(a).then(d, function (a) {
                        f || (f = !0, p.reject(j, a));
                    });
                }var c = this;if ("[object Array]" !== Object.prototype.toString.call(a)) return this.reject(new TypeError("must be an array"));var e = a.length,
                    f = !1;if (!e) return this.resolve([]);for (var g = new Array(e), h = 0, i = -1, j = new this(d); ++i < e;) b(a[i], i);return j;
            }function n(a) {
                function b(a) {
                    c.resolve(a).then(function (a) {
                        f || (f = !0, p.resolve(h, a));
                    }, function (a) {
                        f || (f = !0, p.reject(h, a));
                    });
                }var c = this;if ("[object Array]" !== Object.prototype.toString.call(a)) return this.reject(new TypeError("must be an array"));var e = a.length,
                    f = !1;if (!e) return this.resolve([]);for (var g = -1, h = new this(d); ++g < e;) b(a[g]);return h;
            }var o = a(1),
                p = {},
                q = ["REJECTED"],
                r = ["FULFILLED"],
                s = ["PENDING"];b.exports = c = e, e.prototype["catch"] = function (a) {
                return this.then(null, a);
            }, e.prototype.then = function (a, b) {
                if ("function" != typeof a && this.state === r || "function" != typeof b && this.state === q) return this;var c = new this.constructor(d);if (this.state !== s) {
                    var e = this.state === r ? a : b;g(c, e, this.outcome);
                } else this.queue.push(new f(c, a, b));return c;
            }, f.prototype.callFulfilled = function (a) {
                p.resolve(this.promise, a);
            }, f.prototype.otherCallFulfilled = function (a) {
                g(this.promise, this.onFulfilled, a);
            }, f.prototype.callRejected = function (a) {
                p.reject(this.promise, a);
            }, f.prototype.otherCallRejected = function (a) {
                g(this.promise, this.onRejected, a);
            }, p.resolve = function (a, b) {
                var c = j(h, b);if ("error" === c.status) return p.reject(a, c.value);var d = c.value;if (d) i(a, d);else {
                    a.state = r, a.outcome = b;for (var e = -1, f = a.queue.length; ++e < f;) a.queue[e].callFulfilled(b);
                }return a;
            }, p.reject = function (a, b) {
                a.state = q, a.outcome = b;for (var c = -1, d = a.queue.length; ++c < d;) a.queue[c].callRejected(b);return a;
            }, c.resolve = k, c.reject = l, c.all = m, c.race = n;
        }, { 1: 1 }], 3: [function (a, b, c) {
            (function (b) {
                "use strict";
                "function" != typeof b.Promise && (b.Promise = a(2));
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, { 2: 2 }], 4: [function (a, b, c) {
            "use strict";
            function d(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
            }function e() {
                try {
                    if ("undefined" != typeof indexedDB) return indexedDB;if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;if ("undefined" != typeof OIndexedDB) return OIndexedDB;if ("undefined" != typeof msIndexedDB) return msIndexedDB;
                } catch (a) {}
            }function f() {
                try {
                    if (!ga) return !1;var a = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                        b = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");return (!a || b) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange;
                } catch (c) {
                    return !1;
                }
            }function g() {
                return "function" == typeof openDatabase;
            }function h() {
                try {
                    return "undefined" != typeof localStorage && "setItem" in localStorage && localStorage.setItem;
                } catch (a) {
                    return !1;
                }
            }function i(a, b) {
                a = a || [], b = b || {};try {
                    return new Blob(a, b);
                } catch (c) {
                    if ("TypeError" !== c.name) throw c;for (var d = "undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder, e = new d(), f = 0; f < a.length; f += 1) e.append(a[f]);return e.getBlob(b.type);
                }
            }function j(a, b) {
                b && a.then(function (a) {
                    b(null, a);
                }, function (a) {
                    b(a);
                });
            }function k(a, b, c) {
                "function" == typeof b && a.then(b), "function" == typeof c && a["catch"](c);
            }function l(a) {
                for (var b = a.length, c = new ArrayBuffer(b), d = new Uint8Array(c), e = 0; b > e; e++) d[e] = a.charCodeAt(e);return c;
            }function m(a) {
                return new ja(function (b) {
                    var c = a.transaction(ka, "readwrite"),
                        d = i([""]);c.objectStore(ka).put(d, "key"), c.onabort = function (a) {
                        a.preventDefault(), a.stopPropagation(), b(!1);
                    }, c.oncomplete = function () {
                        var a = navigator.userAgent.match(/Chrome\/(\d+)/),
                            c = navigator.userAgent.match(/Edge\//);b(c || !a || parseInt(a[1], 10) >= 43);
                    };
                })["catch"](function () {
                    return !1;
                });
            }function n(a) {
                return "boolean" == typeof ha ? ja.resolve(ha) : m(a).then(function (a) {
                    return ha = a;
                });
            }function o(a) {
                var b = ia[a.name],
                    c = {};c.promise = new ja(function (a) {
                    c.resolve = a;
                }), b.deferredOperations.push(c), b.dbReady ? b.dbReady = b.dbReady.then(function () {
                    return c.promise;
                }) : b.dbReady = c.promise;
            }function p(a) {
                var b = ia[a.name],
                    c = b.deferredOperations.pop();c && c.resolve();
            }function q(a, b) {
                return new ja(function (c, d) {
                    if (a.db) {
                        if (!b) return c(a.db);o(a), a.db.close();
                    }var e = [a.name];b && e.push(a.version);var f = ga.open.apply(ga, e);b && (f.onupgradeneeded = function (b) {
                        var c = f.result;try {
                            c.createObjectStore(a.storeName), b.oldVersion <= 1 && c.createObjectStore(ka);
                        } catch (d) {
                            if ("ConstraintError" !== d.name) throw d;console.warn('The database "' + a.name + '" has been upgraded from version ' + b.oldVersion + " to version " + b.newVersion + ', but the storage "' + a.storeName + '" already exists.');
                        }
                    }), f.onerror = function (a) {
                        a.preventDefault(), d(f.error);
                    }, f.onsuccess = function () {
                        c(f.result), p(a);
                    };
                });
            }function r(a) {
                return q(a, !1);
            }function s(a) {
                return q(a, !0);
            }function t(a, b) {
                if (!a.db) return !0;var c = !a.db.objectStoreNames.contains(a.storeName),
                    d = a.version < a.db.version,
                    e = a.version > a.db.version;if (d && (a.version !== b && console.warn('The database "' + a.name + "\" can't be downgraded from version " + a.db.version + " to version " + a.version + "."), a.version = a.db.version), e || c) {
                    if (c) {
                        var f = a.db.version + 1;f > a.version && (a.version = f);
                    }return !0;
                }return !1;
            }function u(a) {
                return new ja(function (b, c) {
                    var d = new FileReader();d.onerror = c, d.onloadend = function (c) {
                        var d = btoa(c.target.result || "");b({ __local_forage_encoded_blob: !0, data: d, type: a.type });
                    }, d.readAsBinaryString(a);
                });
            }function v(a) {
                var b = l(atob(a.data));return i([b], { type: a.type });
            }function w(a) {
                return a && a.__local_forage_encoded_blob;
            }function x(a) {
                var b = this,
                    c = b._initReady().then(function () {
                    var a = ia[b._dbInfo.name];return a && a.dbReady ? a.dbReady : void 0;
                });return k(c, a, a), c;
            }function y(a) {
                function b() {
                    return ja.resolve();
                }var c = this,
                    d = { db: null };if (a) for (var e in a) d[e] = a[e];ia || (ia = {});var f = ia[d.name];f || (f = { forages: [], db: null, dbReady: null, deferredOperations: [] }, ia[d.name] = f), f.forages.push(c), c._initReady || (c._initReady = c.ready, c.ready = x);for (var g = [], h = 0; h < f.forages.length; h++) {
                    var i = f.forages[h];i !== c && g.push(i._initReady()["catch"](b));
                }var j = f.forages.slice(0);return ja.all(g).then(function () {
                    return d.db = f.db, r(d);
                }).then(function (a) {
                    return d.db = a, t(d, c._defaultConfig.version) ? s(d) : a;
                }).then(function (a) {
                    d.db = f.db = a, c._dbInfo = d;for (var b = 0; b < j.length; b++) {
                        var e = j[b];e !== c && (e._dbInfo.db = d.db, e._dbInfo.version = d.version);
                    }
                });
            }function z(a, b) {
                var c = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var d = new ja(function (b, d) {
                    c.ready().then(function () {
                        var e = c._dbInfo,
                            f = e.db.transaction(e.storeName, "readonly").objectStore(e.storeName),
                            g = f.get(a);g.onsuccess = function () {
                            var a = g.result;void 0 === a && (a = null), w(a) && (a = v(a)), b(a);
                        }, g.onerror = function () {
                            d(g.error);
                        };
                    })["catch"](d);
                });return j(d, b), d;
            }function A(a, b) {
                var c = this,
                    d = new ja(function (b, d) {
                    c.ready().then(function () {
                        var e = c._dbInfo,
                            f = e.db.transaction(e.storeName, "readonly").objectStore(e.storeName),
                            g = f.openCursor(),
                            h = 1;g.onsuccess = function () {
                            var c = g.result;if (c) {
                                var d = c.value;w(d) && (d = v(d));var e = a(d, c.key, h++);void 0 !== e ? b(e) : c["continue"]();
                            } else b();
                        }, g.onerror = function () {
                            d(g.error);
                        };
                    })["catch"](d);
                });return j(d, b), d;
            }function B(a, b, c) {
                var d = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var e = new ja(function (c, e) {
                    var f;d.ready().then(function () {
                        return f = d._dbInfo, "[object Blob]" === la.call(b) ? n(f.db).then(function (a) {
                            return a ? b : u(b);
                        }) : b;
                    }).then(function (b) {
                        var d = f.db.transaction(f.storeName, "readwrite"),
                            g = d.objectStore(f.storeName),
                            h = g.put(b, a);null === b && (b = void 0), d.oncomplete = function () {
                            void 0 === b && (b = null), c(b);
                        }, d.onabort = d.onerror = function () {
                            var a = h.error ? h.error : h.transaction.error;e(a);
                        };
                    })["catch"](e);
                });return j(e, c), e;
            }function C(a, b) {
                var c = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var d = new ja(function (b, d) {
                    c.ready().then(function () {
                        var e = c._dbInfo,
                            f = e.db.transaction(e.storeName, "readwrite"),
                            g = f.objectStore(e.storeName),
                            h = g["delete"](a);f.oncomplete = function () {
                            b();
                        }, f.onerror = function () {
                            d(h.error);
                        }, f.onabort = function () {
                            var a = h.error ? h.error : h.transaction.error;d(a);
                        };
                    })["catch"](d);
                });return j(d, b), d;
            }function D(a) {
                var b = this,
                    c = new ja(function (a, c) {
                    b.ready().then(function () {
                        var d = b._dbInfo,
                            e = d.db.transaction(d.storeName, "readwrite"),
                            f = e.objectStore(d.storeName),
                            g = f.clear();e.oncomplete = function () {
                            a();
                        }, e.onabort = e.onerror = function () {
                            var a = g.error ? g.error : g.transaction.error;c(a);
                        };
                    })["catch"](c);
                });return j(c, a), c;
            }function E(a) {
                var b = this,
                    c = new ja(function (a, c) {
                    b.ready().then(function () {
                        var d = b._dbInfo,
                            e = d.db.transaction(d.storeName, "readonly").objectStore(d.storeName),
                            f = e.count();f.onsuccess = function () {
                            a(f.result);
                        }, f.onerror = function () {
                            c(f.error);
                        };
                    })["catch"](c);
                });return j(c, a), c;
            }function F(a, b) {
                var c = this,
                    d = new ja(function (b, d) {
                    return 0 > a ? void b(null) : void c.ready().then(function () {
                        var e = c._dbInfo,
                            f = e.db.transaction(e.storeName, "readonly").objectStore(e.storeName),
                            g = !1,
                            h = f.openCursor();h.onsuccess = function () {
                            var c = h.result;return c ? void (0 === a ? b(c.key) : g ? b(c.key) : (g = !0, c.advance(a))) : void b(null);
                        }, h.onerror = function () {
                            d(h.error);
                        };
                    })["catch"](d);
                });return j(d, b), d;
            }function G(a) {
                var b = this,
                    c = new ja(function (a, c) {
                    b.ready().then(function () {
                        var d = b._dbInfo,
                            e = d.db.transaction(d.storeName, "readonly").objectStore(d.storeName),
                            f = e.openCursor(),
                            g = [];f.onsuccess = function () {
                            var b = f.result;return b ? (g.push(b.key), void b["continue"]()) : void a(g);
                        }, f.onerror = function () {
                            c(f.error);
                        };
                    })["catch"](c);
                });return j(c, a), c;
            }function H(a) {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g = .75 * a.length,
                    h = a.length,
                    i = 0;"=" === a[a.length - 1] && (g--, "=" === a[a.length - 2] && g--);var j = new ArrayBuffer(g),
                    k = new Uint8Array(j);for (b = 0; h > b; b += 4) c = na.indexOf(a[b]), d = na.indexOf(a[b + 1]), e = na.indexOf(a[b + 2]), f = na.indexOf(a[b + 3]), k[i++] = c << 2 | d >> 4, k[i++] = (15 & d) << 4 | e >> 2, k[i++] = (3 & e) << 6 | 63 & f;return j;
            }function I(a) {
                var b,
                    c = new Uint8Array(a),
                    d = "";for (b = 0; b < c.length; b += 3) d += na[c[b] >> 2], d += na[(3 & c[b]) << 4 | c[b + 1] >> 4], d += na[(15 & c[b + 1]) << 2 | c[b + 2] >> 6], d += na[63 & c[b + 2]];return c.length % 3 === 2 ? d = d.substring(0, d.length - 1) + "=" : c.length % 3 === 1 && (d = d.substring(0, d.length - 2) + "=="), d;
            }function J(a, b) {
                var c = "";if (a && (c = Ea.call(a)), a && ("[object ArrayBuffer]" === c || a.buffer && "[object ArrayBuffer]" === Ea.call(a.buffer))) {
                    var d,
                        e = qa;a instanceof ArrayBuffer ? (d = a, e += sa) : (d = a.buffer, "[object Int8Array]" === c ? e += ua : "[object Uint8Array]" === c ? e += va : "[object Uint8ClampedArray]" === c ? e += wa : "[object Int16Array]" === c ? e += xa : "[object Uint16Array]" === c ? e += za : "[object Int32Array]" === c ? e += ya : "[object Uint32Array]" === c ? e += Aa : "[object Float32Array]" === c ? e += Ba : "[object Float64Array]" === c ? e += Ca : b(new Error("Failed to get type for BinaryArray"))), b(e + I(d));
                } else if ("[object Blob]" === c) {
                    var f = new FileReader();f.onload = function () {
                        var c = oa + a.type + "~" + I(this.result);b(qa + ta + c);
                    }, f.readAsArrayBuffer(a);
                } else try {
                    b(JSON.stringify(a));
                } catch (g) {
                    console.error("Couldn't convert value into a JSON string: ", a), b(null, g);
                }
            }function K(a) {
                if (a.substring(0, ra) !== qa) return JSON.parse(a);var b,
                    c = a.substring(Da),
                    d = a.substring(ra, Da);if (d === ta && pa.test(c)) {
                    var e = c.match(pa);b = e[1], c = c.substring(e[0].length);
                }var f = H(c);switch (d) {case sa:
                        return f;case ta:
                        return i([f], { type: b });case ua:
                        return new Int8Array(f);case va:
                        return new Uint8Array(f);case wa:
                        return new Uint8ClampedArray(f);case xa:
                        return new Int16Array(f);case za:
                        return new Uint16Array(f);case ya:
                        return new Int32Array(f);case Aa:
                        return new Uint32Array(f);case Ba:
                        return new Float32Array(f);case Ca:
                        return new Float64Array(f);default:
                        throw new Error("Unkown type: " + d);}
            }function L(a) {
                var b = this,
                    c = { db: null };if (a) for (var d in a) c[d] = "string" != typeof a[d] ? a[d].toString() : a[d];var e = new ja(function (a, d) {
                    try {
                        c.db = openDatabase(c.name, String(c.version), c.description, c.size);
                    } catch (e) {
                        return d(e);
                    }c.db.transaction(function (e) {
                        e.executeSql("CREATE TABLE IF NOT EXISTS " + c.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], function () {
                            b._dbInfo = c, a();
                        }, function (a, b) {
                            d(b);
                        });
                    });
                });return c.serializer = Fa, e;
            }function M(a, b) {
                var c = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var d = new ja(function (b, d) {
                    c.ready().then(function () {
                        var e = c._dbInfo;e.db.transaction(function (c) {
                            c.executeSql("SELECT * FROM " + e.storeName + " WHERE key = ? LIMIT 1", [a], function (a, c) {
                                var d = c.rows.length ? c.rows.item(0).value : null;d && (d = e.serializer.deserialize(d)), b(d);
                            }, function (a, b) {
                                d(b);
                            });
                        });
                    })["catch"](d);
                });return j(d, b), d;
            }function N(a, b) {
                var c = this,
                    d = new ja(function (b, d) {
                    c.ready().then(function () {
                        var e = c._dbInfo;e.db.transaction(function (c) {
                            c.executeSql("SELECT * FROM " + e.storeName, [], function (c, d) {
                                for (var f = d.rows, g = f.length, h = 0; g > h; h++) {
                                    var i = f.item(h),
                                        j = i.value;if (j && (j = e.serializer.deserialize(j)), j = a(j, i.key, h + 1), void 0 !== j) return void b(j);
                                }b();
                            }, function (a, b) {
                                d(b);
                            });
                        });
                    })["catch"](d);
                });return j(d, b), d;
            }function O(a, b, c, d) {
                var e = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var f = new ja(function (f, g) {
                    e.ready().then(function () {
                        void 0 === b && (b = null);var h = b,
                            i = e._dbInfo;i.serializer.serialize(b, function (b, j) {
                            j ? g(j) : i.db.transaction(function (c) {
                                c.executeSql("INSERT OR REPLACE INTO " + i.storeName + " (key, value) VALUES (?, ?)", [a, b], function () {
                                    f(h);
                                }, function (a, b) {
                                    g(b);
                                });
                            }, function (b) {
                                if (b.code === b.QUOTA_ERR) {
                                    if (d > 0) return void f(O.apply(e, [a, h, c, d - 1]));g(b);
                                }
                            });
                        });
                    })["catch"](g);
                });return j(f, c), f;
            }function P(a, b, c) {
                return O.apply(this, [a, b, c, 1]);
            }function Q(a, b) {
                var c = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var d = new ja(function (b, d) {
                    c.ready().then(function () {
                        var e = c._dbInfo;e.db.transaction(function (c) {
                            c.executeSql("DELETE FROM " + e.storeName + " WHERE key = ?", [a], function () {
                                b();
                            }, function (a, b) {
                                d(b);
                            });
                        });
                    })["catch"](d);
                });return j(d, b), d;
            }function R(a) {
                var b = this,
                    c = new ja(function (a, c) {
                    b.ready().then(function () {
                        var d = b._dbInfo;d.db.transaction(function (b) {
                            b.executeSql("DELETE FROM " + d.storeName, [], function () {
                                a();
                            }, function (a, b) {
                                c(b);
                            });
                        });
                    })["catch"](c);
                });return j(c, a), c;
            }function S(a) {
                var b = this,
                    c = new ja(function (a, c) {
                    b.ready().then(function () {
                        var d = b._dbInfo;d.db.transaction(function (b) {
                            b.executeSql("SELECT COUNT(key) as c FROM " + d.storeName, [], function (b, c) {
                                var d = c.rows.item(0).c;a(d);
                            }, function (a, b) {
                                c(b);
                            });
                        });
                    })["catch"](c);
                });return j(c, a), c;
            }function T(a, b) {
                var c = this,
                    d = new ja(function (b, d) {
                    c.ready().then(function () {
                        var e = c._dbInfo;e.db.transaction(function (c) {
                            c.executeSql("SELECT key FROM " + e.storeName + " WHERE id = ? LIMIT 1", [a + 1], function (a, c) {
                                var d = c.rows.length ? c.rows.item(0).key : null;b(d);
                            }, function (a, b) {
                                d(b);
                            });
                        });
                    })["catch"](d);
                });return j(d, b), d;
            }function U(a) {
                var b = this,
                    c = new ja(function (a, c) {
                    b.ready().then(function () {
                        var d = b._dbInfo;d.db.transaction(function (b) {
                            b.executeSql("SELECT key FROM " + d.storeName, [], function (b, c) {
                                for (var d = [], e = 0; e < c.rows.length; e++) d.push(c.rows.item(e).key);a(d);
                            }, function (a, b) {
                                c(b);
                            });
                        });
                    })["catch"](c);
                });return j(c, a), c;
            }function V(a) {
                var b = this,
                    c = {};if (a) for (var d in a) c[d] = a[d];return c.keyPrefix = c.name + "/", c.storeName !== b._defaultConfig.storeName && (c.keyPrefix += c.storeName + "/"), b._dbInfo = c, c.serializer = Fa, ja.resolve();
            }function W(a) {
                var b = this,
                    c = b.ready().then(function () {
                    for (var a = b._dbInfo.keyPrefix, c = localStorage.length - 1; c >= 0; c--) {
                        var d = localStorage.key(c);0 === d.indexOf(a) && localStorage.removeItem(d);
                    }
                });return j(c, a), c;
            }function X(a, b) {
                var c = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var d = c.ready().then(function () {
                    var b = c._dbInfo,
                        d = localStorage.getItem(b.keyPrefix + a);return d && (d = b.serializer.deserialize(d)), d;
                });return j(d, b), d;
            }function Y(a, b) {
                var c = this,
                    d = c.ready().then(function () {
                    for (var b = c._dbInfo, d = b.keyPrefix, e = d.length, f = localStorage.length, g = 1, h = 0; f > h; h++) {
                        var i = localStorage.key(h);if (0 === i.indexOf(d)) {
                            var j = localStorage.getItem(i);if (j && (j = b.serializer.deserialize(j)), j = a(j, i.substring(e), g++), void 0 !== j) return j;
                        }
                    }
                });return j(d, b), d;
            }function Z(a, b) {
                var c = this,
                    d = c.ready().then(function () {
                    var b,
                        d = c._dbInfo;try {
                        b = localStorage.key(a);
                    } catch (e) {
                        b = null;
                    }return b && (b = b.substring(d.keyPrefix.length)), b;
                });return j(d, b), d;
            }function $(a) {
                var b = this,
                    c = b.ready().then(function () {
                    for (var a = b._dbInfo, c = localStorage.length, d = [], e = 0; c > e; e++) 0 === localStorage.key(e).indexOf(a.keyPrefix) && d.push(localStorage.key(e).substring(a.keyPrefix.length));return d;
                });return j(c, a), c;
            }function _(a) {
                var b = this,
                    c = b.keys().then(function (a) {
                    return a.length;
                });return j(c, a), c;
            }function aa(a, b) {
                var c = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var d = c.ready().then(function () {
                    var b = c._dbInfo;localStorage.removeItem(b.keyPrefix + a);
                });return j(d, b), d;
            }function ba(a, b, c) {
                var d = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var e = d.ready().then(function () {
                    void 0 === b && (b = null);var c = b;return new ja(function (e, f) {
                        var g = d._dbInfo;g.serializer.serialize(b, function (b, d) {
                            if (d) f(d);else try {
                                localStorage.setItem(g.keyPrefix + a, b), e(c);
                            } catch (h) {
                                "QuotaExceededError" !== h.name && "NS_ERROR_DOM_QUOTA_REACHED" !== h.name || f(h), f(h);
                            }
                        });
                    });
                });return j(e, c), e;
            }function ca(a, b) {
                a[b] = function () {
                    var c = arguments;return a.ready().then(function () {
                        return a[b].apply(a, c);
                    });
                };
            }function da() {
                for (var a = 1; a < arguments.length; a++) {
                    var b = arguments[a];if (b) for (var c in b) b.hasOwnProperty(c) && (Oa(b[c]) ? arguments[0][c] = b[c].slice() : arguments[0][c] = b[c]);
                }return arguments[0];
            }function ea(a) {
                for (var b in Ja) if (Ja.hasOwnProperty(b) && Ja[b] === a) return !0;return !1;
            }var fa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
                return typeof a;
            } : function (a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a;
            },
                ga = e();"undefined" == typeof Promise && a(3);var ha,
                ia,
                ja = Promise,
                ka = "local-forage-detect-blob-support",
                la = Object.prototype.toString,
                ma = { _driver: "asyncStorage", _initStorage: y, iterate: A, getItem: z, setItem: B, removeItem: C, clear: D, length: E, key: F, keys: G },
                na = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                oa = "~~local_forage_type~",
                pa = /^~~local_forage_type~([^~]+)~/,
                qa = "__lfsc__:",
                ra = qa.length,
                sa = "arbf",
                ta = "blob",
                ua = "si08",
                va = "ui08",
                wa = "uic8",
                xa = "si16",
                ya = "si32",
                za = "ur16",
                Aa = "ui32",
                Ba = "fl32",
                Ca = "fl64",
                Da = ra + sa.length,
                Ea = Object.prototype.toString,
                Fa = { serialize: J, deserialize: K, stringToBuffer: H, bufferToString: I },
                Ga = { _driver: "webSQLStorage", _initStorage: L, iterate: N, getItem: M, setItem: P, removeItem: Q, clear: R, length: S, key: T, keys: U },
                Ha = { _driver: "localStorageWrapper", _initStorage: V, iterate: Y, getItem: X, setItem: ba, removeItem: aa, clear: W, length: _, key: Z, keys: $ },
                Ia = {},
                Ja = { INDEXEDDB: "asyncStorage", LOCALSTORAGE: "localStorageWrapper", WEBSQL: "webSQLStorage" },
                Ka = [Ja.INDEXEDDB, Ja.WEBSQL, Ja.LOCALSTORAGE],
                La = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"],
                Ma = { description: "", driver: Ka.slice(), name: "localforage", size: 4980736, storeName: "keyvaluepairs", version: 1 },
                Na = {};Na[Ja.INDEXEDDB] = f(), Na[Ja.WEBSQL] = g(), Na[Ja.LOCALSTORAGE] = h();var Oa = Array.isArray || function (a) {
                return "[object Array]" === Object.prototype.toString.call(a);
            },
                Pa = function () {
                function a(b) {
                    d(this, a), this.INDEXEDDB = Ja.INDEXEDDB, this.LOCALSTORAGE = Ja.LOCALSTORAGE, this.WEBSQL = Ja.WEBSQL, this._defaultConfig = da({}, Ma), this._config = da({}, this._defaultConfig, b), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver)["catch"](function () {});
                }return a.prototype.config = function (a) {
                    if ("object" === ("undefined" == typeof a ? "undefined" : fa(a))) {
                        if (this._ready) return new Error("Can't call config() after localforage has been used.");for (var b in a) {
                            if ("storeName" === b && (a[b] = a[b].replace(/\W/g, "_")), "version" === b && "number" != typeof a[b]) return new Error("Database version must be a number.");this._config[b] = a[b];
                        }return "driver" in a && a.driver ? this.setDriver(this._config.driver) : !0;
                    }return "string" == typeof a ? this._config[a] : this._config;
                }, a.prototype.defineDriver = function (a, b, c) {
                    var d = new ja(function (b, c) {
                        try {
                            var d = a._driver,
                                e = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),
                                f = new Error("Custom driver name already in use: " + a._driver);if (!a._driver) return void c(e);if (ea(a._driver)) return void c(f);for (var g = La.concat("_initStorage"), h = 0; h < g.length; h++) {
                                var i = g[h];if (!i || !a[i] || "function" != typeof a[i]) return void c(e);
                            }var j = ja.resolve(!0);"_support" in a && (j = a._support && "function" == typeof a._support ? a._support() : ja.resolve(!!a._support)), j.then(function (c) {
                                Na[d] = c, Ia[d] = a, b();
                            }, c);
                        } catch (k) {
                            c(k);
                        }
                    });return k(d, b, c), d;
                }, a.prototype.driver = function () {
                    return this._driver || null;
                }, a.prototype.getDriver = function (a, b, c) {
                    var d = this,
                        e = ja.resolve().then(function () {
                        if (!ea(a)) {
                            if (Ia[a]) return Ia[a];throw new Error("Driver not found.");
                        }switch (a) {case d.INDEXEDDB:
                                return ma;case d.LOCALSTORAGE:
                                return Ha;case d.WEBSQL:
                                return Ga;}
                    });return k(e, b, c), e;
                }, a.prototype.getSerializer = function (a) {
                    var b = ja.resolve(Fa);return k(b, a), b;
                }, a.prototype.ready = function (a) {
                    var b = this,
                        c = b._driverSet.then(function () {
                        return null === b._ready && (b._ready = b._initDriver()), b._ready;
                    });return k(c, a, a), c;
                }, a.prototype.setDriver = function (a, b, c) {
                    function d() {
                        g._config.driver = g.driver();
                    }function e(a) {
                        return g._extend(a), d(), g._ready = g._initStorage(g._config), g._ready;
                    }function f(a) {
                        return function () {
                            function b() {
                                for (; c < a.length;) {
                                    var f = a[c];return c++, g._dbInfo = null, g._ready = null, g.getDriver(f).then(e)["catch"](b);
                                }d();var h = new Error("No available storage method found.");return g._driverSet = ja.reject(h), g._driverSet;
                            }var c = 0;return b();
                        };
                    }var g = this;Oa(a) || (a = [a]);var h = this._getSupportedDrivers(a),
                        i = null !== this._driverSet ? this._driverSet["catch"](function () {
                        return ja.resolve();
                    }) : ja.resolve();return this._driverSet = i.then(function () {
                        var a = h[0];return g._dbInfo = null, g._ready = null, g.getDriver(a).then(function (a) {
                            g._driver = a._driver, d(), g._wrapLibraryMethodsWithReady(), g._initDriver = f(h);
                        });
                    })["catch"](function () {
                        d();var a = new Error("No available storage method found.");return g._driverSet = ja.reject(a), g._driverSet;
                    }), k(this._driverSet, b, c), this._driverSet;
                }, a.prototype.supports = function (a) {
                    return !!Na[a];
                }, a.prototype._extend = function (a) {
                    da(this, a);
                }, a.prototype._getSupportedDrivers = function (a) {
                    for (var b = [], c = 0, d = a.length; d > c; c++) {
                        var e = a[c];this.supports(e) && b.push(e);
                    }return b;
                }, a.prototype._wrapLibraryMethodsWithReady = function () {
                    for (var a = 0; a < La.length; a++) ca(this, La[a]);
                }, a.prototype.createInstance = function (b) {
                    return new a(b);
                }, a;
            }(),
                Qa = new Pa();b.exports = Qa;
        }, { 3: 3 }] }, {}, [4])(4);
});
class App {
    constructor() {
        this.api = 'https://projects.mathijslitjens.nl/checklistPrime/api/?action=';
        this.mainContainer = document.querySelector('#mainContainer');
        this.obtainedParts = {};
        this.itemTypes = {};
        this.partTypes = {};
        this.showCompleted = true;
        this.typeFilter = {};
    }

    init() {
        this.fetchTypes().then(() => {
            this.setTypeFilter().then(() => {
                this.setShowCompleted().then(() => {
                    this.getObtainedParts().then(() => {
                        this.insertItems();
                        this.initFilterWindow();
                    });
                });
            });
        });
    }

    initFilterWindow() {
        let items = [];
        let typeIds = Object.keys(this.itemTypes);
        typeIds.splice('0', 1); // The "unknown" type
        typeIds.forEach(id => {
            let item = {};
            item.typeId = id;
            item.typeName = this.itemTypes[id].replace('_', ' ');
            item.typeName = item.typeName.charAt(0).toUpperCase() + item.typeName.slice(1);
            item.checked = 'checked';

            if (!this.typeFilter[id]) {
                item.checked = '';
            }

            items.push(item);
        });

        let completedChecked = 'checked';
        if (!this.showCompleted) {
            completedChecked = '';
        }

        let html = Handlebars.templates.filter({
            items: items,
            completedChecked: completedChecked
        });

        let tempEl = document.createElement('div');
        tempEl.innerHTML = html;

        let filterContainer = tempEl.firstChild;

        this.mainContainer.prepend(filterContainer);

        document.querySelector('.action.filter').addEventListener('click', () => {
            filterContainer.classList.toggle('active');
        });

        filterContainer.querySelector('.save').addEventListener('click', () => {
            this.saveFilters().then(() => {
                filterContainer.classList.remove('active');
            });
        });
    }

    saveFilters() {
        return new Promise(resolve => {
            let typeFilters = document.querySelectorAll('#filterContainer .typesContainer .filter.itemType input[type="checkbox"]');
            let showCompleted = document.querySelector('#filterContainer .typesContainer .filter input[name="completed"]');

            typeFilters.forEach(input => {
                if (input.checked) {
                    this.typeFilter[input.name] = true;
                } else {
                    this.typeFilter[input.name] = false;
                }
            });

            this.showCompleted = showCompleted.checked;

            Promise.all([this.saveTypeFilter(), this.saveShowCompleted()]).then(() => {
                if (this.showCompleted) {
                    this.mainContainer.classList.remove('hideCompleted');
                } else {
                    this.mainContainer.classList.add('hideCompleted');
                }

                this.mainContainer.querySelectorAll('.itemContainer, .partContainer, .relicContainer').forEach(container => {
                    container.classList.remove('active');
                });

                this.mainContainer.querySelectorAll('.itemContainer').forEach(itemContainer => {
                    let typeId = parseInt(itemContainer.getAttribute('data-typeid'));
                    if (this.typeFilter[typeId]) {
                        itemContainer.classList.remove('hidden');
                    } else {
                        itemContainer.classList.add('hidden');
                    }
                });

                resolve();
            });
        });
    }

    setTypeFilter() {
        return new Promise(resolve => {
            let typeIdsCurrent = Object.keys(this.itemTypes);

            localforage.getItem('typeFilter').then(typeFilter => {
                if (typeFilter === null) {
                    typeIdsCurrent.forEach(id => {
                        this.typeFilter[id] = true;
                    });
                    this.saveTypeFilter().then(() => {
                        resolve();
                    });
                } else {
                    let typeIdsDB = Object.keys(typeFilter);
                    typeIdsCurrent.forEach(id => {
                        if (!typeIdsDB.includes(id)) {
                            typeFilter[id] = true;
                        }
                    });
                    typeIdsDB.forEach(id => {
                        if (!typeIdsCurrent.includes(id)) {
                            delete typeFilter[id];
                        }
                    });
                    this.typeFilter = typeFilter;
                    this.saveTypeFilter().then(() => {
                        resolve();
                    });
                }
            });
        });
    }

    setShowCompleted() {
        return new Promise(resolve => {
            localforage.getItem('showCompleted').then(showCompleted => {
                if (showCompleted === null) {
                    this.saveShowCompleted().then(() => {
                        resolve();
                    });
                } else {
                    this.showCompleted = showCompleted;
                    if (!showCompleted) {
                        this.mainContainer.classList.add('hideCompleted');
                    }
                    resolve();
                }
            });
        });
    }

    saveShowCompleted() {
        return localforage.setItem('showCompleted', this.showCompleted);
    }

    saveTypeFilter() {
        return localforage.setItem('typeFilter', this.typeFilter);
    }

    fetchTypes() {
        return Promise.all([new Promise(resolve => {
            fetch(this.api + 'itemTypes').then(response => {
                return response.json();
            }).then(json => {
                json.forEach(type => {
                    let id = parseInt(type.id);
                    this.itemTypes[id] = type.name;
                });
                resolve();
            });
        })], [new Promise(resolve => {
            fetch(this.api + 'partTypes').then(response => {
                return response.json();
            }).then(json => {
                json.forEach(type => {
                    let id = parseInt(type.id);
                    this.partTypes[id] = type.name;
                });
                resolve();
            });
        })]);
    }

    getObtainedParts() {
        return new Promise((resolve, reject) => {
            localforage.getItem('obtainedParts').then(obtainedParts => {
                if (obtainedParts === null) {
                    localforage.setItem('obtainedParts', this.obtainedParts).then(() => {
                        resolve();
                    }, () => {
                        reject();
                    });
                } else {
                    localforage.getItem('obtainedParts').then(obtainedParts => {
                        this.obtainedParts = obtainedParts;
                        resolve();
                    }, () => {
                        reject();
                    });
                }
            });
        });
    }

    saveObtainedParts() {
        return localforage.setItem('obtainedParts', this.obtainedParts);
    }

    insertItems() {
        fetch(this.api + 'items').then(response => {
            return response.json();
        }).then(json => {
            json.forEach(item => {
                let itemContainer = this.createItemContainer(item);
                this.mainContainer.append(itemContainer);
            });
        });
    }

    createItemContainer(item) {
        if (this.obtainedParts[item.itemId] === undefined) {
            item.obtainedParts = 0;
        } else {
            item.obtainedParts = this.obtainedParts[item.itemId].length;
        }

        let html = Handlebars.templates.itemContainer({
            itemId: item.itemId,
            itemName: item.itemName,
            typeId: item.typeId,
            typeName: this.itemTypes[parseInt(item.typeId)],
            obtainedParts: item.obtainedParts,
            totalParts: item.totalParts
        });

        let tempEl = document.createElement('div');
        tempEl.innerHTML = html;

        let itemContainer = tempEl.firstChild;

        if (item.obtainedParts == item.totalParts) {
            itemContainer.classList.add('completed');
        }

        if (!this.typeFilter[parseInt(item.typeId)]) {
            itemContainer.classList.add('hidden');
        }

        itemContainer.addEventListener('click', e => {
            if (!e.target.classList.contains('loader')) {
                this.togglePartsFromItem(item.itemId, itemContainer);
            }
        });

        return itemContainer;
    }

    togglePartsFromItem(itemId, element) {
        let itemContainer = element;

        if (document.querySelectorAll('.partContainer[data-itemid="' + itemId + '"]').length > 0) {
            document.querySelectorAll('.partContainer[data-itemid="' + itemId + '"]').forEach(partContainer => {
                partContainer.classList.toggle('active');

                if (!partContainer.classList.contains('active')) {
                    document.querySelectorAll('.relicContainer[data-partid="' + partContainer.getAttribute('data-partid') + '"]').forEach(relicContainer => {
                        relicContainer.classList.remove('active');
                    });
                }
            });
        } else {
            itemContainer.classList.add('loading');
            fetch(this.api + 'parts&item=' + itemId).then(response => {
                return response.json();
            }).then(json => {
                json.reverse();
                json.forEach(part => {
                    let partContainer = this.createPartContainer(part);

                    itemContainer.parentNode.insertBefore(partContainer, itemContainer.nextSibling);
                });

                itemContainer.classList.remove('loading');
            });
        }
    }

    addObtainedPart(item, part) {
        item = parseInt(item);
        part = parseInt(part);

        if (this.obtainedParts[item] === undefined) {
            this.obtainedParts[item] = new Array();
        }

        if (!this.obtainedParts[item].includes(part)) {
            this.obtainedParts[item].push(part);
        }

        this.saveObtainedParts().then(() => {
            this.updateItemContainer(item);
        });
    }

    removeObtainedPart(item, part) {
        item = parseInt(item);
        part = parseInt(part);

        if (this.obtainedParts[item] === undefined) {
            this.obtainedParts[item] = new Array();
        }

        if (this.obtainedParts[item].indexOf(part) > -1) {
            this.obtainedParts[item].splice(this.obtainedParts[item].indexOf(part), 1);
        }

        this.saveObtainedParts().then(() => {
            this.updateItemContainer(item);
        });
    }

    updateItemContainer(item) {
        let itemContainer = document.querySelector('.itemContainer[data-itemid="' + item + '"]');
        if (itemContainer !== null) {
            itemContainer.querySelector('.itemCountObtained').innerHTML = this.obtainedParts[item].length;

            if (itemContainer.querySelector('.itemCountObtained').innerHTML == itemContainer.querySelector('.itemCountTotal').innerHTML) {
                itemContainer.classList.add('completed');
                if (!this.showCompleted) {
                    this.togglePartsFromItem(item, itemContainer);
                }
            } else {
                itemContainer.classList.remove('completed');
            }
        }
    }

    createPartContainer(part) {
        part.checked = '';
        if (this.obtainedParts[parseInt(part.itemId)] !== undefined) {
            if (this.obtainedParts[parseInt(part.itemId)].includes(parseInt(part.partId))) {
                part.checked = 'checked';
            }
        }

        let html = Handlebars.templates.partContainer({
            partId: part.partId,
            partName: this.partTypes[parseInt(part.typeId)],
            typeId: part.typeId,
            itemId: part.itemId,
            checked: part.checked
        });

        let tempEl = document.createElement('div');
        tempEl.innerHTML = html;

        let partContainer = tempEl.firstChild;

        partContainer.addEventListener('click', e => {
            if (!e.target.classList.contains('loader')) {
                if (e.target.tagName.toLowerCase() === 'input') {
                    if (e.target.checked) {
                        this.addObtainedPart(part.itemId, part.partId);
                    } else {
                        this.removeObtainedPart(part.itemId, part.partId);
                    }
                } else {
                    this.toggleRelicsFromPart(part.partId, partContainer);
                }
            }
        });

        return partContainer;
    }

    toggleRelicsFromPart(partId, element) {
        let partContainer = element;

        if (document.querySelectorAll('.relicContainer[data-partid="' + partId + '"]').length > 0) {
            document.querySelectorAll('.relicContainer[data-partid="' + partId + '"]').forEach(relicContainer => {
                relicContainer.classList.toggle('active');
            });
        } else {
            partContainer.classList.add('loading');
            fetch(this.api + 'relicsForPart&part=' + partId).then(response => {
                return response.json();
            }).then(json => {
                json.reverse();
                json.forEach(relic => {
                    let relicContainer = this.createRelicContainer(relic);

                    partContainer.parentNode.insertBefore(relicContainer, partContainer.nextSibling);
                });

                partContainer.classList.remove('loading');
            });
        }
    }

    createRelicContainer(relic) {
        let html = Handlebars.templates.relicContainer({
            relicId: relic.relicId,
            relicName: relic.relicName,
            partId: relic.partId
        });

        let tempEl = document.createElement('div');
        tempEl.innerHTML = html;

        let partContainer = tempEl.firstChild;

        return partContainer;
    }
}
window.addEventListener('load', function () {
    let app = new App();

    app.init();
});