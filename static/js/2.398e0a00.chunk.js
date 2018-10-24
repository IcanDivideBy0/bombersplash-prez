webpackJsonp([2],Array(214).concat([
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mdx_deck__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mdx_deck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mdx_deck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_deck_index_mdx__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_deck_theme__ = __webpack_require__(294);
var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Slides=function(_React$Component){_inherits(Slides,_React$Component);function Slides(){var _ref;for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_classCallCheck(this,Slides);var _this=_possibleConstructorReturn(this,(_ref=Slides.__proto__||Object.getPrototypeOf(Slides)).call.apply(_ref,[this].concat(args)));_this.deckRef=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef();_this.handleHashChange=function(){var hash=window.location.hash;var _hash$replace$split=hash.replace(/^#/,"").split("."),_hash$replace$split2=_slicedToArray(_hash$replace$split,2),index_=_hash$replace$split2[0],step_=_hash$replace$split2[1];var index=parseInt(index_,10);var step=parseInt(step_,10);if(isNaN(index))return;var _this$props$onSlideCh=_this.props.onSlideChange,onSlideChange=_this$props$onSlideCh===undefined?function(){}:_this$props$onSlideCh;onSlideChange(index,step);};var orig=window.history.pushState;var callback=function callback(){return _this.handleHashChange.apply(_this,arguments);};_this.orig=orig;window.history.pushState=function(){var ret=orig.apply(this,arguments);callback();return ret;};return _this;}_createClass(Slides,[{key:"componentWillUnmount",value:function componentWillUnmount(){window.history.pushState=this.orig;}},{key:"updateSlidesIndex",value:function updateSlidesIndex(index,step){this.deckRef.current.setState({index:index,step:step});}},{key:"render",value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_mdx_deck__["SlideDeck"],{ref:this.deckRef,slides:__WEBPACK_IMPORTED_MODULE_2_deck_index_mdx__["a" /* default */],theme:__WEBPACK_IMPORTED_MODULE_3_deck_theme__["a" /* default */],width:"100vw",height:"100vh"});}}]);return Slides;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (Slides);

/***/ }),
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  font: 'system-ui, sans-serif',
  monospace: 'Menlo, monospace',
  fontSizes: ['0.75em', '1em', '1.5em', '2em', '3em'],
  colors: {
    text: '#000',
    background: 'white',
    link: '#07c',
    pre: '#f0f',
    preBackground: '#333',
    code: '#f0f'
  },
  css: {
    fontSize: '16px',
    textAlign: 'center',
    '@media screen and (min-width:64em)': {
      fontSize: '32px'
    }
  },
  ol: {
    textAlign: 'left'
  },
  ul: {
    textAlign: 'left'
  }
};

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = all

var trim = __webpack_require__(223)
var one = __webpack_require__(289)

/* Transform the children of `parent`. */
function all(h, parent) {
  var nodes = parent.children || []
  var length = nodes.length
  var values = []
  var index = -1
  var result
  var head

  while (++index < length) {
    result = one(h, nodes[index], parent)

    if (result) {
      if (index && nodes[index - 1].type === 'break') {
        if (result.value) {
          result.value = trim.left(result.value)
        }

        head = result.children && result.children[0]

        if (head && head.value) {
          head.value = trim.left(head.value)
        }
      }

      values = values.concat(result)
    }
  }

  return values
}


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = whitespace

var fromCode = String.fromCharCode
var re = /\s/

/* Check if the given character code, or the character
 * code at the first character, is a whitespace character. */
function whitespace(character) {
  return re.test(
    typeof character === 'number' ? fromCode(character) : character.charAt(0)
  )
}


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(33)

module.exports = u

function u(type, props, value) {
  var node

  if (
    (value === null || value === undefined) &&
    (typeof props !== 'object' || Array.isArray(props))
  ) {
    value = props
    props = {}
  }

  node = assign({type: String(type)}, props)

  if (Array.isArray(value)) {
    node.children = value
  } else if (value !== null && value !== undefined) {
    node.value = String(value)
  }

  return node
}


/***/ }),
/* 223 */
/***/ (function(module, exports) {


exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/laptop.85fd1164.svg";

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.complexStyle = exports.responsiveStyle = exports.mixed = exports.variant = exports.buttonStyle = exports.colorStyle = exports.textStyle = exports.left = exports.bottom = exports.right = exports.top = exports.zIndex = exports.position = exports.backgroundRepeat = exports.backgroundPosition = exports.backgroundSize = exports.backgroundImage = exports.background = exports.overflow = exports.opacity = exports.boxShadow = exports.borderRadius = exports.borderColor = exports.borders = exports.borderLeft = exports.borderBottom = exports.borderRight = exports.borderTop = exports.border = exports.gridArea = exports.gridTemplateAreas = exports.gridTemplateRows = exports.gridTemplateColumns = exports.gridAutoRows = exports.gridAutoColumns = exports.gridAutoFlow = exports.gridRow = exports.gridColumn = exports.gridRowGap = exports.gridColumnGap = exports.gridGap = exports.order = exports.alignSelf = exports.justifySelf = exports.flexBasis = exports.flex = exports.flexDirection = exports.flexWrap = exports.justifyContent = exports.justifyItems = exports.alignContent = exports.alignItems = exports.verticalAlign = exports.ratio = exports.size = exports.minHeight = exports.maxHeight = exports.height = exports.minWidth = exports.maxWidth = exports.display = exports.letterSpacing = exports.fontStyle = exports.fontWeight = exports.lineHeight = exports.textAlign = exports.fontFamily = exports.color = exports.bgColor = exports.textColor = exports.fontSize = exports.width = exports.space = exports.compose = exports.merge = exports.themeGet = exports.style = exports.styles = exports.util = undefined;

var _util2 = __webpack_require__(229);

Object.defineProperty(exports, "style", {
  enumerable: true,
  get: function get() {
    return _util2.style;
  }
});
Object.defineProperty(exports, "themeGet", {
  enumerable: true,
  get: function get() {
    return _util2.themeGet;
  }
});
Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function get() {
    return _util2.merge;
  }
});
Object.defineProperty(exports, "compose", {
  enumerable: true,
  get: function get() {
    return _util2.compose;
  }
});

var _styles2 = __webpack_require__(264);

Object.defineProperty(exports, "space", {
  enumerable: true,
  get: function get() {
    return _styles2.space;
  }
});
Object.defineProperty(exports, "width", {
  enumerable: true,
  get: function get() {
    return _styles2.width;
  }
});
Object.defineProperty(exports, "fontSize", {
  enumerable: true,
  get: function get() {
    return _styles2.fontSize;
  }
});
Object.defineProperty(exports, "textColor", {
  enumerable: true,
  get: function get() {
    return _styles2.textColor;
  }
});
Object.defineProperty(exports, "bgColor", {
  enumerable: true,
  get: function get() {
    return _styles2.bgColor;
  }
});
Object.defineProperty(exports, "color", {
  enumerable: true,
  get: function get() {
    return _styles2.color;
  }
});
Object.defineProperty(exports, "fontFamily", {
  enumerable: true,
  get: function get() {
    return _styles2.fontFamily;
  }
});
Object.defineProperty(exports, "textAlign", {
  enumerable: true,
  get: function get() {
    return _styles2.textAlign;
  }
});
Object.defineProperty(exports, "lineHeight", {
  enumerable: true,
  get: function get() {
    return _styles2.lineHeight;
  }
});
Object.defineProperty(exports, "fontWeight", {
  enumerable: true,
  get: function get() {
    return _styles2.fontWeight;
  }
});
Object.defineProperty(exports, "fontStyle", {
  enumerable: true,
  get: function get() {
    return _styles2.fontStyle;
  }
});
Object.defineProperty(exports, "letterSpacing", {
  enumerable: true,
  get: function get() {
    return _styles2.letterSpacing;
  }
});
Object.defineProperty(exports, "display", {
  enumerable: true,
  get: function get() {
    return _styles2.display;
  }
});
Object.defineProperty(exports, "maxWidth", {
  enumerable: true,
  get: function get() {
    return _styles2.maxWidth;
  }
});
Object.defineProperty(exports, "minWidth", {
  enumerable: true,
  get: function get() {
    return _styles2.minWidth;
  }
});
Object.defineProperty(exports, "height", {
  enumerable: true,
  get: function get() {
    return _styles2.height;
  }
});
Object.defineProperty(exports, "maxHeight", {
  enumerable: true,
  get: function get() {
    return _styles2.maxHeight;
  }
});
Object.defineProperty(exports, "minHeight", {
  enumerable: true,
  get: function get() {
    return _styles2.minHeight;
  }
});
Object.defineProperty(exports, "size", {
  enumerable: true,
  get: function get() {
    return _styles2.size;
  }
});
Object.defineProperty(exports, "ratio", {
  enumerable: true,
  get: function get() {
    return _styles2.ratio;
  }
});
Object.defineProperty(exports, "verticalAlign", {
  enumerable: true,
  get: function get() {
    return _styles2.verticalAlign;
  }
});
Object.defineProperty(exports, "alignItems", {
  enumerable: true,
  get: function get() {
    return _styles2.alignItems;
  }
});
Object.defineProperty(exports, "alignContent", {
  enumerable: true,
  get: function get() {
    return _styles2.alignContent;
  }
});
Object.defineProperty(exports, "justifyItems", {
  enumerable: true,
  get: function get() {
    return _styles2.justifyItems;
  }
});
Object.defineProperty(exports, "justifyContent", {
  enumerable: true,
  get: function get() {
    return _styles2.justifyContent;
  }
});
Object.defineProperty(exports, "flexWrap", {
  enumerable: true,
  get: function get() {
    return _styles2.flexWrap;
  }
});
Object.defineProperty(exports, "flexDirection", {
  enumerable: true,
  get: function get() {
    return _styles2.flexDirection;
  }
});
Object.defineProperty(exports, "flex", {
  enumerable: true,
  get: function get() {
    return _styles2.flex;
  }
});
Object.defineProperty(exports, "flexBasis", {
  enumerable: true,
  get: function get() {
    return _styles2.flexBasis;
  }
});
Object.defineProperty(exports, "justifySelf", {
  enumerable: true,
  get: function get() {
    return _styles2.justifySelf;
  }
});
Object.defineProperty(exports, "alignSelf", {
  enumerable: true,
  get: function get() {
    return _styles2.alignSelf;
  }
});
Object.defineProperty(exports, "order", {
  enumerable: true,
  get: function get() {
    return _styles2.order;
  }
});
Object.defineProperty(exports, "gridGap", {
  enumerable: true,
  get: function get() {
    return _styles2.gridGap;
  }
});
Object.defineProperty(exports, "gridColumnGap", {
  enumerable: true,
  get: function get() {
    return _styles2.gridColumnGap;
  }
});
Object.defineProperty(exports, "gridRowGap", {
  enumerable: true,
  get: function get() {
    return _styles2.gridRowGap;
  }
});
Object.defineProperty(exports, "gridColumn", {
  enumerable: true,
  get: function get() {
    return _styles2.gridColumn;
  }
});
Object.defineProperty(exports, "gridRow", {
  enumerable: true,
  get: function get() {
    return _styles2.gridRow;
  }
});
Object.defineProperty(exports, "gridAutoFlow", {
  enumerable: true,
  get: function get() {
    return _styles2.gridAutoFlow;
  }
});
Object.defineProperty(exports, "gridAutoColumns", {
  enumerable: true,
  get: function get() {
    return _styles2.gridAutoColumns;
  }
});
Object.defineProperty(exports, "gridAutoRows", {
  enumerable: true,
  get: function get() {
    return _styles2.gridAutoRows;
  }
});
Object.defineProperty(exports, "gridTemplateColumns", {
  enumerable: true,
  get: function get() {
    return _styles2.gridTemplateColumns;
  }
});
Object.defineProperty(exports, "gridTemplateRows", {
  enumerable: true,
  get: function get() {
    return _styles2.gridTemplateRows;
  }
});
Object.defineProperty(exports, "gridTemplateAreas", {
  enumerable: true,
  get: function get() {
    return _styles2.gridTemplateAreas;
  }
});
Object.defineProperty(exports, "gridArea", {
  enumerable: true,
  get: function get() {
    return _styles2.gridArea;
  }
});
Object.defineProperty(exports, "border", {
  enumerable: true,
  get: function get() {
    return _styles2.border;
  }
});
Object.defineProperty(exports, "borderTop", {
  enumerable: true,
  get: function get() {
    return _styles2.borderTop;
  }
});
Object.defineProperty(exports, "borderRight", {
  enumerable: true,
  get: function get() {
    return _styles2.borderRight;
  }
});
Object.defineProperty(exports, "borderBottom", {
  enumerable: true,
  get: function get() {
    return _styles2.borderBottom;
  }
});
Object.defineProperty(exports, "borderLeft", {
  enumerable: true,
  get: function get() {
    return _styles2.borderLeft;
  }
});
Object.defineProperty(exports, "borders", {
  enumerable: true,
  get: function get() {
    return _styles2.borders;
  }
});
Object.defineProperty(exports, "borderColor", {
  enumerable: true,
  get: function get() {
    return _styles2.borderColor;
  }
});
Object.defineProperty(exports, "borderRadius", {
  enumerable: true,
  get: function get() {
    return _styles2.borderRadius;
  }
});
Object.defineProperty(exports, "boxShadow", {
  enumerable: true,
  get: function get() {
    return _styles2.boxShadow;
  }
});
Object.defineProperty(exports, "opacity", {
  enumerable: true,
  get: function get() {
    return _styles2.opacity;
  }
});
Object.defineProperty(exports, "overflow", {
  enumerable: true,
  get: function get() {
    return _styles2.overflow;
  }
});
Object.defineProperty(exports, "background", {
  enumerable: true,
  get: function get() {
    return _styles2.background;
  }
});
Object.defineProperty(exports, "backgroundImage", {
  enumerable: true,
  get: function get() {
    return _styles2.backgroundImage;
  }
});
Object.defineProperty(exports, "backgroundSize", {
  enumerable: true,
  get: function get() {
    return _styles2.backgroundSize;
  }
});
Object.defineProperty(exports, "backgroundPosition", {
  enumerable: true,
  get: function get() {
    return _styles2.backgroundPosition;
  }
});
Object.defineProperty(exports, "backgroundRepeat", {
  enumerable: true,
  get: function get() {
    return _styles2.backgroundRepeat;
  }
});
Object.defineProperty(exports, "position", {
  enumerable: true,
  get: function get() {
    return _styles2.position;
  }
});
Object.defineProperty(exports, "zIndex", {
  enumerable: true,
  get: function get() {
    return _styles2.zIndex;
  }
});
Object.defineProperty(exports, "top", {
  enumerable: true,
  get: function get() {
    return _styles2.top;
  }
});
Object.defineProperty(exports, "right", {
  enumerable: true,
  get: function get() {
    return _styles2.right;
  }
});
Object.defineProperty(exports, "bottom", {
  enumerable: true,
  get: function get() {
    return _styles2.bottom;
  }
});
Object.defineProperty(exports, "left", {
  enumerable: true,
  get: function get() {
    return _styles2.left;
  }
});
Object.defineProperty(exports, "textStyle", {
  enumerable: true,
  get: function get() {
    return _styles2.textStyle;
  }
});
Object.defineProperty(exports, "colorStyle", {
  enumerable: true,
  get: function get() {
    return _styles2.colorStyle;
  }
});
Object.defineProperty(exports, "buttonStyle", {
  enumerable: true,
  get: function get() {
    return _styles2.buttonStyle;
  }
});

var _variant = __webpack_require__(265);

Object.defineProperty(exports, "variant", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_variant).default;
  }
});

var _mixed = __webpack_require__(313);

Object.defineProperty(exports, "mixed", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mixed).default;
  }
});
Object.defineProperty(exports, "responsiveStyle", {
  enumerable: true,
  get: function get() {
    return _util2.style;
  }
});
Object.defineProperty(exports, "complexStyle", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_variant).default;
  }
});

var _util = _interopRequireWildcard(_util2);

var _styles = _interopRequireWildcard(_styles2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.util = _util;
exports.styles = _styles;

/***/ }),
/* 226 */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var modes = exports.modes = {
  normal: 'NORMAL',
  presenter: 'PRESENTER',
  overview: 'OVERVIEW',
  grid: 'GRID'
};
var MDX_SLIDE_INDEX = exports.MDX_SLIDE_INDEX = 'mdx-slide-index';
var MDX_SLIDE_STEP = exports.MDX_SLIDE_STEP = 'mdx-slide-step';

var keys = exports.keys = {
  'right': 39,
  'left': 37,
  'space': 32,
  'p': 80,
  'o': 79,
  'g': 71,
  'up': 38,
  'down': 40
};

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = wrap

var u = __webpack_require__(222)

/* Wrap `nodes` with newlines between each entry.
 * Optionally adds newlines at the start and end. */
function wrap(nodes, loose) {
  var result = []
  var index = -1
  var length = nodes.length

  if (loose) {
    result.push(u('text', '\n'))
  }

  while (++index < length) {
    if (index) {
      result.push(u('text', '\n'))
    }

    result.push(nodes[index])
  }

  if (loose && nodes.length !== 0) {
    result.push(u('text', '\n'))
  }

  return result
}


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.style = exports.createMediaQuery = exports.compose = exports.merge = exports.cloneFunc = exports.themeGet = exports.get = exports.px = exports.num = exports.is = exports.defaultBreakpoints = exports.propTypes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop(n) {
  return n;
};

var propTypes = exports.propTypes = {
  numberOrString: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  responsive: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array])
};

var defaultBreakpoints = exports.defaultBreakpoints = [40, 52, 64].map(function (n) {
  return n + 'em';
});
var is = exports.is = function is(n) {
  return n !== undefined && n !== null;
};
var num = exports.num = function num(n) {
  return typeof n === 'number' && !isNaN(n);
};
var px = exports.px = function px(n) {
  return num(n) ? n + 'px' : n;
};

var get = exports.get = function get(obj) {
  for (var _len = arguments.length, paths = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    paths[_key - 1] = arguments[_key];
  }

  return paths.join('.').split('.').reduce(function (a, b) {
    return a && a[b] ? a[b] : null;
  }, obj);
};

var themeGet = exports.themeGet = function themeGet(paths, fallback) {
  return function (props) {
    return get(props.theme, paths) || fallback;
  };
};

var cloneFunc = exports.cloneFunc = function cloneFunc(fn) {
  return function () {
    return fn.apply(undefined, arguments);
  };
};

var merge = exports.merge = function merge(a, b) {
  return Object.assign({}, a, b, Object.keys(b || {}).reduce(function (obj, key) {
    var _Object$assign;

    return Object.assign(obj, (_Object$assign = {}, _Object$assign[key] = a[key] !== null && _typeof(a[key]) === 'object' ? merge(a[key], b[key]) : b[key], _Object$assign));
  }, {}));
};

var compose = exports.compose = function compose() {
  for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    funcs[_key2] = arguments[_key2];
  }

  var fn = function fn(props) {
    return funcs.map(function (fn) {
      return fn(props);
    }).filter(Boolean).reduce(merge, {});
  };

  fn.propTypes = funcs.map(function (fn) {
    return fn.propTypes;
  }).reduce(merge, {});
  return fn;
};

var createMediaQuery = exports.createMediaQuery = function createMediaQuery(n) {
  return '@media screen and (min-width: ' + n + ')';
};

var style = exports.style = function style(_ref) {
  var _fn$propTypes;

  var prop = _ref.prop,
      cssProperty = _ref.cssProperty,
      key = _ref.key,
      getter = _ref.getter,
      transformValue = _ref.transformValue,
      _ref$scale = _ref.scale,
      defaultScale = _ref$scale === undefined ? {} : _ref$scale;

  var css = cssProperty || prop;
  var transform = transformValue || getter || noop;
  var fn = function fn(props) {
    var val = props[prop];
    if (!is(val)) return null;

    var scale = get(props.theme, key) || defaultScale;
    var style = function style(n) {
      var _ref2;

      return is(n) ? (_ref2 = {}, _ref2[css] = transform(get(scale, n) || n), _ref2) : null;
    };

    if (!Array.isArray(val)) {
      return style(val);
    }

    // how to hoist this up??
    var breakpoints = [null].concat((get(props.theme, 'breakpoints') || defaultBreakpoints).map(createMediaQuery));

    var styles = {};

    for (var i = 0; i < val.length; i++) {
      var media = breakpoints[i];
      if (!media) {
        styles = style(val[i]);
        continue;
      }
      var rule = style(val[i]);
      if (!rule) continue;
      styles[media] = rule;
    }

    return styles;
  };

  fn.propTypes = (_fn$propTypes = {}, _fn$propTypes[prop] = cloneFunc(propTypes.responsive), _fn$propTypes);

  fn.propTypes[prop].meta = {
    prop: prop,
    themeKey: key,
    styleType: 'responsive'
  };

  return fn;
};

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styledComponents = __webpack_require__(95);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledSystem = __webpack_require__(225);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flex = _styledComponents2.default.div([], {
  display: 'flex',
  justifyContent: 'center',
  '@media print': {
    display: 'none'
  }
}, function (props) {
  return props.css;
}, _styledSystem.space, _styledSystem.width, _styledSystem.color);

Flex.propTypes = _extends({
  css: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string])
}, _styledSystem.space.propTypes, _styledSystem.width.propTypes, _styledSystem.color.propTypes);

exports.default = Flex;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dec = exports.inc = exports.setSteps = exports.setNotes = exports.setMetadata = exports.toggleMode = exports.incrementStep = exports.decrementStep = exports.incrementIndex = exports.decrementIndex = exports.next = exports.previous = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = __webpack_require__(235);

var _lodash2 = _interopRequireDefault(_lodash);

var _constants = __webpack_require__(227);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var previous = exports.previous = function previous(state) {
  var steps = (0, _lodash2.default)(state, 'metadata[' + state.index + '].steps', 0);
  if (steps && state.step > 0) {
    return decrementStep(state);
  }
  return decrementIndex(state);
};

var next = exports.next = function next(state) {
  var steps = (0, _lodash2.default)(state, 'metadata[' + state.index + '].steps', 0);
  if (steps && state.step < steps) {
    return incrementStep(state);
  }
  return incrementIndex(state);
};

var decrementIndex = exports.decrementIndex = function decrementIndex(state) {
  return state.index > 0 ? {
    index: (state.index - 1) % state.length,
    step: (0, _lodash2.default)(state, 'metadata[' + (state.index - 1) + '].steps', 0)
  } : null;
};

var incrementIndex = exports.incrementIndex = function incrementIndex(state) {
  return state.index < state.length - 1 ? {
    index: (state.index + 1) % state.length,
    step: 0
  } : null;
};

var decrementStep = exports.decrementStep = function decrementStep(state) {
  return state.step > 0 ? {
    step: state.step - 1
  } : null;
};

var incrementStep = exports.incrementStep = function incrementStep(state) {
  return state.step < (0, _lodash2.default)(state, 'metadata[' + state.index + '].steps') ? { step: state.step + 1 } : null;
};

var toggleMode = exports.toggleMode = function toggleMode(key) {
  return function (state) {
    return {
      mode: state.mode === _constants.modes[key] ? _constants.modes.normal : _constants.modes[key]
    };
  };
};

var setMetadata = exports.setMetadata = function setMetadata(i, metadata) {
  return function (state) {
    return {
      metadata: _extends({}, state.metadata, _defineProperty({}, i, _extends({}, state.metadata[i] || {}, metadata)))
    };
  };
};

var setNotes = exports.setNotes = function setNotes(i, notes) {
  return setMetadata(i, { notes: notes });
};
var setSteps = exports.setSteps = function setSteps(i, steps) {
  return setMetadata(i, { steps: steps });
};

// shims
var inc = exports.inc = incrementIndex;
var dec = exports.dec = decrementIndex;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(95);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = __webpack_require__(225);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = _styledComponents2.default.div([], {
  flex: 'none'
}, function (props) {
  return props.css;
}, _styledSystem.width, _styledSystem.space, _styledSystem.color);

exports.default = Box;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var normalize = __webpack_require__(252)
var Schema = __webpack_require__(274)
var DefinedInfo = __webpack_require__(275)

module.exports = create

function create(definition) {
  var space = definition.space
  var mustUseProperty = definition.mustUseProperty || []
  var attributes = definition.attributes || {}
  var props = definition.properties
  var transform = definition.transform
  var property = {}
  var normal = {}
  var prop
  var info

  for (prop in props) {
    info = new DefinedInfo(
      prop,
      transform(attributes, prop),
      props[prop],
      space
    )

    if (mustUseProperty.indexOf(prop) !== -1) {
      info.mustUseProperty = true
    }

    property[prop] = info

    normal[normalize(prop)] = prop
    normal[normalize(info.attribute)] = prop
  }

  return new Schema(property, normal, space)
}


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSlide = exports.withDeck = exports.Consumer = exports.Provider = exports.Context = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Context = exports.Context = _react2.default.createContext(null);
var Provider = Context.Provider,
    Consumer = Context.Consumer;
exports.Provider = Provider;
exports.Consumer = Consumer;
var withDeck = exports.withDeck = function withDeck(Component) {
  return function (props) {
    return _react2.default.createElement(
      Consumer,
      null,
      function (deck) {
        return _react2.default.createElement(Component, _extends({}, props, {
          deck: deck,
          slide: deck
        }));
      }
    );
  };
};

// alias for backwards compatibility
var withSlide = exports.withSlide = withDeck;

exports.default = Context;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(95);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = __webpack_require__(225);

var _context = __webpack_require__(234);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Root = _styledComponents2.default.div([], {
  flex: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  '@media print': {
    width: '100vw',
    height: '100vh',
    pageBreakAfter: 'always',
    pageBreakInside: 'avoid',
    WebkitPrintColorAdjust: 'exact'
  }
}, _styledSystem.space, _styledSystem.color);

var Slide = function (_React$Component) {
  _inherits(Slide, _React$Component);

  function Slide() {
    _classCallCheck(this, Slide);

    return _possibleConstructorReturn(this, (Slide.__proto__ || Object.getPrototypeOf(Slide)).apply(this, arguments));
  }

  _createClass(Slide, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          index = _props.index,
          color = _props.color,
          bg = _props.bg,
          props = _objectWithoutProperties(_props, ['index', 'color', 'bg']);

      return _react2.default.createElement(
        _context.Context.Provider,
        { value: this.props },
        _react2.default.createElement(
          Root,
          {
            color: color,
            bg: bg,
            px: [4, 5, 6] },
          props.children
        )
      );
    }
  }]);

  return Slide;
}(_react2.default.Component);

Slide.defaultProps = {
  addNotes: function addNotes() {},
  update: function update() {}
};


Slide.propTypes = _extends({
  index: _propTypes2.default.number
}, _styledSystem.space.propTypes, _styledSystem.color.propTypes);

exports.default = Slide;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Root = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styledComponents = __webpack_require__(95);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = __webpack_require__(225);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = exports.Root = _styledComponents2.default.div([], {
  '@media print': {
    fontSize: '24px',
    height: 'auto'
  }
}, function (props) {
  return props.theme.font ? {
    fontFamily: props.theme.font
  } : null;
}, function (props) {
  return props.theme.css;
}, _styledSystem.width, _styledSystem.height, _styledSystem.color);

Root.propTypes = _extends({}, _styledSystem.width.propTypes, _styledSystem.height.propTypes, _styledSystem.color.propTypess);

Root.defaultProps = {
  color: 'text',
  bg: 'background'
};

exports.default = Root;

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Box = __webpack_require__(232);

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_Box2.default, _extends({}, props, {
    css: {
      fontFamily: 'Menlo, monospace',
      whiteSpace: 'pre-wrap'
    }
  }));
};

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var characterEntities = __webpack_require__(385)
var legacy = __webpack_require__(386)
var invalid = __webpack_require__(387)
var decimal = __webpack_require__(240)
var hexadecimal = __webpack_require__(388)
var alphanumerical = __webpack_require__(389)

module.exports = parseEntities

var own = {}.hasOwnProperty
var fromCharCode = String.fromCharCode
var noop = Function.prototype

/* Default settings. */
var defaults = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: false,
  nonTerminated: true
}

/* Reference types. */
var NAMED = 'named'
var HEXADECIMAL = 'hexadecimal'
var DECIMAL = 'decimal'

/* Map of bases. */
var BASE = {}

BASE[HEXADECIMAL] = 16
BASE[DECIMAL] = 10

/* Map of types to tests. Each type of character reference
 * accepts different characters. This test is used to
 * detect whether a reference has ended (as the semicolon
 * is not strictly needed). */
var TESTS = {}

TESTS[NAMED] = alphanumerical
TESTS[DECIMAL] = decimal
TESTS[HEXADECIMAL] = hexadecimal

/* Warning messages. */
var NAMED_NOT_TERMINATED = 1
var NUMERIC_NOT_TERMINATED = 2
var NAMED_EMPTY = 3
var NUMERIC_EMPTY = 4
var NAMED_UNKNOWN = 5
var NUMERIC_DISALLOWED = 6
var NUMERIC_PROHIBITED = 7

var MESSAGES = {}

MESSAGES[NAMED_NOT_TERMINATED] =
  'Named character references must be terminated by a semicolon'
MESSAGES[NUMERIC_NOT_TERMINATED] =
  'Numeric character references must be terminated by a semicolon'
MESSAGES[NAMED_EMPTY] = 'Named character references cannot be empty'
MESSAGES[NUMERIC_EMPTY] = 'Numeric character references cannot be empty'
MESSAGES[NAMED_UNKNOWN] = 'Named character references must be known'
MESSAGES[NUMERIC_DISALLOWED] =
  'Numeric character references cannot be disallowed'
MESSAGES[NUMERIC_PROHIBITED] =
  'Numeric character references cannot be outside the permissible Unicode range'

/* Wrap to ensure clean parameters are given to `parse`. */
function parseEntities(value, options) {
  var settings = {}
  var option
  var key

  if (!options) {
    options = {}
  }

  for (key in defaults) {
    option = options[key]
    settings[key] =
      option === null || option === undefined ? defaults[key] : option
  }

  if (settings.position.indent || settings.position.start) {
    settings.indent = settings.position.indent || []
    settings.position = settings.position.start
  }

  return parse(value, settings)
}

/* Parse entities. */
function parse(value, settings) {
  var additional = settings.additional
  var nonTerminated = settings.nonTerminated
  var handleText = settings.text
  var handleReference = settings.reference
  var handleWarning = settings.warning
  var textContext = settings.textContext
  var referenceContext = settings.referenceContext
  var warningContext = settings.warningContext
  var pos = settings.position
  var indent = settings.indent || []
  var length = value.length
  var index = 0
  var lines = -1
  var column = pos.column || 1
  var line = pos.line || 1
  var queue = ''
  var result = []
  var entityCharacters
  var terminated
  var characters
  var character
  var reference
  var following
  var warning
  var reason
  var output
  var entity
  var begin
  var start
  var type
  var test
  var prev
  var next
  var diff
  var end

  /* Cache the current point. */
  prev = now()

  /* Wrap `handleWarning`. */
  warning = handleWarning ? parseError : noop

  /* Ensure the algorithm walks over the first character
   * and the end (inclusive). */
  index--
  length++

  while (++index < length) {
    /* If the previous character was a newline. */
    if (character === '\n') {
      column = indent[lines] || 1
    }

    character = at(index)

    /* Handle anything other than an ampersand,
     * including newlines and EOF. */
    if (character !== '&') {
      if (character === '\n') {
        line++
        lines++
        column = 0
      }

      if (character) {
        queue += character
        column++
      } else {
        flush()
      }
    } else {
      following = at(index + 1)

      /* The behaviour depends on the identity of the next
       * character. */
      if (
        following === '\t' /* Tab */ ||
        following === '\n' /* Newline */ ||
        following === '\f' /* Form feed */ ||
        following === ' ' /* Space */ ||
        following === '<' /* Less-than */ ||
        following === '&' /* Ampersand */ ||
        following === '' ||
        (additional && following === additional)
      ) {
        /* Not a character reference. No characters
         * are consumed, and nothing is returned.
         * This is not an error, either. */
        queue += character
        column++

        continue
      }

      start = index + 1
      begin = start
      end = start

      /* Numerical entity. */
      if (following !== '#') {
        type = NAMED
      } else {
        end = ++begin

        /* The behaviour further depends on the
         * character after the U+0023 NUMBER SIGN. */
        following = at(end)

        if (following === 'x' || following === 'X') {
          /* ASCII hex digits. */
          type = HEXADECIMAL
          end = ++begin
        } else {
          /* ASCII digits. */
          type = DECIMAL
        }
      }

      entityCharacters = ''
      entity = ''
      characters = ''
      test = TESTS[type]
      end--

      while (++end < length) {
        following = at(end)

        if (!test(following)) {
          break
        }

        characters += following

        /* Check if we can match a legacy named
         * reference.  If so, we cache that as the
         * last viable named reference.  This
         * ensures we do not need to walk backwards
         * later. */
        if (type === NAMED && own.call(legacy, characters)) {
          entityCharacters = characters
          entity = legacy[characters]
        }
      }

      terminated = at(end) === ';'

      if (terminated) {
        end++

        if (type === NAMED && own.call(characterEntities, characters)) {
          entityCharacters = characters
          entity = characterEntities[characters]
        }
      }

      diff = 1 + end - start

      if (!terminated && !nonTerminated) {
        /* Empty. */
      } else if (!characters) {
        /* An empty (possible) entity is valid, unless
         * its numeric (thus an ampersand followed by
         * an octothorp). */
        if (type !== NAMED) {
          warning(NUMERIC_EMPTY, diff)
        }
      } else if (type === NAMED) {
        /* An ampersand followed by anything
         * unknown, and not terminated, is invalid. */
        if (terminated && !entity) {
          warning(NAMED_UNKNOWN, 1)
        } else {
          /* If theres something after an entity
           * name which is not known, cap the
           * reference. */
          if (entityCharacters !== characters) {
            end = begin + entityCharacters.length
            diff = 1 + end - begin
            terminated = false
          }

          /* If the reference is not terminated,
           * warn. */
          if (!terminated) {
            reason = entityCharacters ? NAMED_NOT_TERMINATED : NAMED_EMPTY

            if (!settings.attribute) {
              warning(reason, diff)
            } else {
              following = at(end)

              if (following === '=') {
                warning(reason, diff)
                entity = null
              } else if (alphanumerical(following)) {
                entity = null
              } else {
                warning(reason, diff)
              }
            }
          }
        }

        reference = entity
      } else {
        if (!terminated) {
          /* All non-terminated numeric entities are
           * not rendered, and trigger a warning. */
          warning(NUMERIC_NOT_TERMINATED, diff)
        }

        /* When terminated and number, parse as
         * either hexadecimal or decimal. */
        reference = parseInt(characters, BASE[type])

        /* Trigger a warning when the parsed number
         * is prohibited, and replace with
         * replacement character. */
        if (prohibited(reference)) {
          warning(NUMERIC_PROHIBITED, diff)
          reference = '\uFFFD'
        } else if (reference in invalid) {
          /* Trigger a warning when the parsed number
           * is disallowed, and replace by an
           * alternative. */
          warning(NUMERIC_DISALLOWED, diff)
          reference = invalid[reference]
        } else {
          /* Parse the number. */
          output = ''

          /* Trigger a warning when the parsed
           * number should not be used. */
          if (disallowed(reference)) {
            warning(NUMERIC_DISALLOWED, diff)
          }

          /* Stringify the number. */
          if (reference > 0xffff) {
            reference -= 0x10000
            output += fromCharCode((reference >>> (10 & 0x3ff)) | 0xd800)
            reference = 0xdc00 | (reference & 0x3ff)
          }

          reference = output + fromCharCode(reference)
        }
      }

      /* If we could not find a reference, queue the
       * checked characters (as normal characters),
       * and move the pointer to their end. This is
       * possible because we can be certain neither
       * newlines nor ampersands are included. */
      if (!reference) {
        characters = value.slice(start - 1, end)
        queue += characters
        column += characters.length
        index = end - 1
      } else {
        /* Found it! First eat the queued
         * characters as normal text, then eat
         * an entity. */
        flush()

        prev = now()
        index = end - 1
        column += end - start + 1
        result.push(reference)
        next = now()
        next.offset++

        if (handleReference) {
          handleReference.call(
            referenceContext,
            reference,
            {start: prev, end: next},
            value.slice(start - 1, end)
          )
        }

        prev = next
      }
    }
  }

  /* Return the reduced nodes, and any possible warnings. */
  return result.join('')

  /* Get current position. */
  function now() {
    return {
      line: line,
      column: column,
      offset: index + (pos.offset || 0)
    }
  }

  /* “Throw” a parse-error: a warning. */
  function parseError(code, offset) {
    var position = now()

    position.column += offset
    position.offset += offset

    handleWarning.call(warningContext, MESSAGES[code], position, code)
  }

  /* Get character at position. */
  function at(position) {
    return value.charAt(position)
  }

  /* Flush `queue` (normal text). Macro invoked before
   * each entity and at the end of `value`.
   * Does nothing when `queue` is empty. */
  function flush() {
    if (queue) {
      result.push(queue)

      if (handleText) {
        handleText.call(textContext, queue, {start: prev, end: now()})
      }

      queue = ''
    }
  }
}

/* Check if `character` is outside the permissible unicode range. */
function prohibited(code) {
  return (code >= 0xd800 && code <= 0xdfff) || code > 0x10ffff
}

/* Check if `character` is disallowed. */
function disallowed(code) {
  return (
    (code >= 0x0001 && code <= 0x0008) ||
    code === 0x000b ||
    (code >= 0x000d && code <= 0x001f) ||
    (code >= 0x007f && code <= 0x009f) ||
    (code >= 0xfdd0 && code <= 0xfdef) ||
    (code & 0xffff) === 0xffff ||
    (code & 0xffff) === 0xfffe
  )
}


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = decimal

/* Check if the given character code, or the character
 * code at the first character, is decimal. */
function decimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return code >= 48 && code <= 57 /* 0-9 */
}


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visit

var visitParents = __webpack_require__(433)

var CONTINUE = visitParents.CONTINUE
var SKIP = visitParents.SKIP
var EXIT = visitParents.EXIT

visit.CONTINUE = CONTINUE
visit.SKIP = SKIP
visit.EXIT = EXIT

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  visitParents(tree, test, overload, reverse)

  function overload(node, parents) {
    var parent = parents[parents.length - 1]
    var index = parent ? parent.children.indexOf(node) : null
    return visitor(node, index, parent)
  }
}


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";




var encodeCache = {};


// Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//
function getEncodeCache(exclude) {
  var i, ch, cache = encodeCache[exclude];
  if (cache) { return cache; }

  cache = encodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);

    if (/^[0-9a-z]$/i.test(ch)) {
      // always allow unencoded alphanumeric characters
      cache.push(ch);
    } else {
      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
    }
  }

  for (i = 0; i < exclude.length; i++) {
    cache[exclude.charCodeAt(i)] = exclude[i];
  }

  return cache;
}


// Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//
function encode(string, exclude, keepEscaped) {
  var i, l, code, nextCode, cache,
      result = '';

  if (typeof exclude !== 'string') {
    // encode(string, keepEscaped)
    keepEscaped  = exclude;
    exclude = encode.defaultChars;
  }

  if (typeof keepEscaped === 'undefined') {
    keepEscaped = true;
  }

  cache = getEncodeCache(exclude);

  for (i = 0, l = string.length; i < l; i++) {
    code = string.charCodeAt(i);

    if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
        result += string.slice(i, i + 3);
        i += 2;
        continue;
      }
    }

    if (code < 128) {
      result += cache[code];
      continue;
    }

    if (code >= 0xD800 && code <= 0xDFFF) {
      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
        nextCode = string.charCodeAt(i + 1);
        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
          result += encodeURIComponent(string[i] + string[i + 1]);
          i++;
          continue;
        }
      }
      result += '%EF%BF%BD';
      continue;
    }

    result += encodeURIComponent(string[i]);
  }

  return result;
}

encode.defaultChars   = ";/?:@&=+$,-_.!~*'()#";
encode.componentChars = "-_.!~*'()";


module.exports = encode;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(95);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ZoomRoot = _styledComponents2.default.div([], {
  backgroundColor: 'white'
}, function (props) {
  return {
    width: 100 * props.zoom + 'vw',
    height: 100 * props.zoom + 'vh'
  };
});

ZoomRoot.propTypes = {
  zoom: _propTypes2.default.number.isRequired
};

var ZoomInner = _styledComponents2.default.div([], function (props) {
  return {
    transformOrigin: '0 0',
    transform: 'scale(' + props.zoom + ')'
  };
});

ZoomInner.propTypes = {
  zoom: _propTypes2.default.number.isRequired
};

var Zoom = function Zoom(_ref) {
  var zoom = _ref.zoom,
      props = _objectWithoutProperties(_ref, ['zoom']);

  return _react2.default.createElement(
    ZoomRoot,
    { zoom: zoom },
    _react2.default.createElement(ZoomInner, _extends({ zoom: zoom }, props))
  );
};

Zoom.propTypes = {
  zoom: _propTypes2.default.number
};

Zoom.defaultProps = {
  zoom: 1
};

exports.default = Zoom;

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = __webpack_require__(219);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_base).default;
  }
});

var _dark = __webpack_require__(323);

Object.defineProperty(exports, 'dark', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dark).default;
  }
});

var _future = __webpack_require__(324);

Object.defineProperty(exports, 'future', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_future).default;
  }
});

var _condensed = __webpack_require__(325);

Object.defineProperty(exports, 'condensed', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_condensed).default;
  }
});

var _yellow = __webpack_require__(326);

Object.defineProperty(exports, 'yellow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_yellow).default;
  }
});

var _swiss = __webpack_require__(327);

Object.defineProperty(exports, 'swiss', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_swiss).default;
  }
});

var _book = __webpack_require__(328);

Object.defineProperty(exports, 'book', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_book).default;
  }
});

var _script = __webpack_require__(329);

Object.defineProperty(exports, 'script', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_script).default;
  }
});

var _comic = __webpack_require__(330);

Object.defineProperty(exports, 'comic', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_comic).default;
  }
});

var _notes = __webpack_require__(331);

Object.defineProperty(exports, 'notes', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_notes).default;
  }
});

var _code = __webpack_require__(332);

Object.defineProperty(exports, 'code', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_code).default;
  }
});

var _lobster = __webpack_require__(333);

Object.defineProperty(exports, 'lobster', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lobster).default;
  }
});

var _hack = __webpack_require__(334);

Object.defineProperty(exports, 'hack', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hack).default;
  }
});

var _rye = __webpack_require__(335);

Object.defineProperty(exports, 'rye', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_rye).default;
  }
});

var _big = __webpack_require__(336);

Object.defineProperty(exports, 'big', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_big).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(340), __esModule: true };

/***/ }),
/* 247 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 248 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(251)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 251 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = normalize

function normalize(value) {
  return value.toLowerCase().replace(/\b[:-]\b/g, '')
}


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var powers = 0

exports.boolean = increment()
exports.booleanish = increment()
exports.overloadedBoolean = increment()
exports.number = increment()
exports.spaceSeparated = increment()
exports.commaSeparated = increment()
exports.commaOrSpaceSeparated = increment()

function increment() {
  return Math.pow(2, ++powers)
}


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/server.506b1985.svg";

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = trimTrailingLines

var line = '\n'

/* Remove final newline characters from `value`. */
function trimTrailingLines(value) {
  var val = String(value)
  var index = val.length

  while (val.charAt(--index) === line) {
    /* Empty */
  }

  return val.slice(0, index + 1)
}


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = interrupt;

function interrupt(interruptors, tokenizers, ctx, params) {
  var bools = ['pedantic', 'commonmark'];
  var count = bools.length;
  var length = interruptors.length;
  var index = -1;
  var interruptor;
  var config;
  var fn;
  var offset;
  var bool;
  var ignore;

  while (++index < length) {
    interruptor = interruptors[index];
    config = interruptor[1] || {};
    fn = interruptor[0];
    offset = -1;
    ignore = false;

    while (++offset < count) {
      bool = bools[offset];

      if (config[bool] !== undefined && config[bool] !== ctx.options[bool]) {
        ignore = true;
        break;
      }
    }

    if (ignore) {
      continue;
    }

    if (tokenizers[fn].apply(ctx, params)) {
      return true;
    }
  }

  return false;
}


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var collapseWhiteSpace = __webpack_require__(285);

module.exports = normalize;

/* Normalize an identifier.  Collapses multiple white space
 * characters into a single space, and removes casing. */
function normalize(value) {
  return collapseWhiteSpace(value).toLowerCase();
}


/***/ }),
/* 258 */,
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constants = exports.updaters = exports.themes = exports.theme = exports.components = exports.Code = exports.Appear = exports.Notes = exports.Image = exports.SlideDeck = exports.Head = exports.withSlide = exports.withDeck = undefined;

var _context = __webpack_require__(234);

Object.defineProperty(exports, 'withDeck', {
  enumerable: true,
  get: function get() {
    return _context.withDeck;
  }
});
Object.defineProperty(exports, 'withSlide', {
  enumerable: true,
  get: function get() {
    return _context.withSlide;
  }
});

var _Head = __webpack_require__(260);

Object.defineProperty(exports, 'Head', {
  enumerable: true,
  get: function get() {
    return _Head.Head;
  }
});

var _SlideDeck = __webpack_require__(298);

Object.defineProperty(exports, 'SlideDeck', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SlideDeck).default;
  }
});

var _Image = __webpack_require__(398);

Object.defineProperty(exports, 'Image', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Image).default;
  }
});

var _Notes = __webpack_require__(267);

Object.defineProperty(exports, 'Notes', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Notes).default;
  }
});

var _Appear = __webpack_require__(399);

Object.defineProperty(exports, 'Appear', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Appear).default;
  }
});

var _Code = __webpack_require__(268);

Object.defineProperty(exports, 'Code', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Code).default;
  }
});

var _components = __webpack_require__(266);

Object.defineProperty(exports, 'components', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_components).default;
  }
});

var _themes2 = __webpack_require__(245);

Object.defineProperty(exports, 'theme', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_themes2).default;
  }
});

var _themes = _interopRequireWildcard(_themes2);

var _updaters2 = __webpack_require__(231);

var _updaters = _interopRequireWildcard(_updaters2);

var _constants2 = __webpack_require__(227);

var _constants = _interopRequireWildcard(_constants2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.themes = _themes;

// internals for third-party components

exports.updaters = _updaters;
exports.constants = _constants;

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Head = exports.HeadProvider = exports.Context = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(97);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {
  console.warn('Missing HeadProvider');
};

var Context = exports.Context = _react2.default.createContext({
  tags: [],
  push: noop
});

var HeadProvider = exports.HeadProvider = function (_React$Component) {
  _inherits(HeadProvider, _React$Component);

  function HeadProvider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HeadProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeadProvider.__proto__ || Object.getPrototypeOf(HeadProvider)).call.apply(_ref, [this].concat(args))), _this), _this.push = function (elements) {
      var _this$props$tags;

      (_this$props$tags = _this.props.tags).push.apply(_this$props$tags, _toConsumableArray(elements));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeadProvider, [{
    key: 'render',
    value: function render() {
      var context = _extends({}, this.props, {
        push: this.push
      });

      return _react2.default.createElement(
        Context.Provider,
        { value: context },
        this.props.children
      );
    }
  }]);

  return HeadProvider;
}(_react2.default.Component);

HeadProvider.defaultProps = {
  tags: []
};

var Head = exports.Head = function (_React$Component2) {
  _inherits(Head, _React$Component2);

  function Head() {
    var _ref2;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, Head);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = Head.__proto__ || Object.getPrototypeOf(Head)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
      didMount: false
    }, _this2.rehydrate = function () {
      var children = _react2.default.Children.toArray(_this2.props.children);
      var nodes = [].concat(_toConsumableArray(document.head.querySelectorAll('[data-head]')));

      nodes.forEach(function (node) {
        node.remove();
      });
      children.forEach(function (child) {
        if (child.type === 'title') {
          var title = document.head.querySelector('title');
          if (title) title.remove();
        }
        if (child.type === 'meta') {
          var name = child.props.name;

          var meta = void 0;
          if (name) meta = document.head.querySelector('meta[name="' + name + '"]');
          if (meta) meta.remove();
        }
      });

      _this2.setState({
        didMount: true
      });
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(Head, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.rehydrate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _children = _react2.default.Children.toArray(this.props.children).map(function (child) {
        return _react2.default.cloneElement(child, {
          'data-head': true
        });
      });

      var didMount = this.state.didMount;


      if (!didMount) {
        return _react2.default.createElement(Context.Consumer, {
          children: function children(_ref3) {
            var push = _ref3.push;

            push(_children);
            return false;
          }
        });
      }

      return (0, _reactDom.createPortal)(_children, document.head);
    }
  }]);

  return Head;
}(_react2.default.Component);

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mdxTag = __webpack_require__(299);

Object.defineProperty(exports, 'MDXTag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mdxTag).default;
  }
});

var _mdxProvider = __webpack_require__(262);

Object.defineProperty(exports, 'MDXProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mdxProvider).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMDXComponents = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createReactContext2 = __webpack_require__(301);

var _createReactContext3 = _interopRequireDefault(_createReactContext2);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _createReactContext = (0, _createReactContext3.default)({}),
    Provider = _createReactContext.Provider,
    Consumer = _createReactContext.Consumer;

var withMDXComponents = function withMDXComponents(Component) {
  return function (_ref) {
    var components = _ref.components,
        props = _objectWithoutProperties(_ref, ['components']);

    return _react2.default.createElement(
      Consumer,
      null,
      function (contextComponents) {
        return _react2.default.createElement(Component, _extends({ components: components || contextComponents }, props));
      }
    );
  };
};

exports.withMDXComponents = withMDXComponents;
var MDXProvider = function MDXProvider(_ref2) {
  var components = _ref2.components,
      children = _ref2.children;
  return _react2.default.createElement(
    Provider,
    { value: components },
    children
  );
};

MDXProvider.propTypes = {
  components: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.element.isRequired
};

exports.default = MDXProvider;

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dots = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(95);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = __webpack_require__(225);

var _Flex = __webpack_require__(230);

var _Flex2 = _interopRequireDefault(_Flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Dot = _styledComponents2.default.button([], {
  appearance: 'none',
  border: '4px solid transparent',
  backgroundClip: 'padding-box',
  borderRadius: '9999px',
  width: '8px',
  height: '8px',
  color: 'inherit',
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 1px'
  }
}, function (props) {
  return {
    opacity: props.active ? 0.5 : 0.125
  };
}, _styledSystem.space, _styledSystem.color);
Dot.propTypes = _extends({}, _styledSystem.space.propTypes, _styledSystem.color.propTypes);
Dot.defaultProps = {
  m: 0,
  p: 1,
  color: 'text',
  bg: 'text'
};

var Dots = function Dots(_ref) {
  var index = _ref.index,
      length = _ref.length,
      _onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ['index', 'length', 'onClick']);

  return _react2.default.createElement(
    _Flex2.default,
    props,
    Array.from({ length: length }).map(function (n, i) {
      return _react2.default.createElement(Dot, {
        key: i,
        active: i <= index,
        title: 'go to: ' + i,
        onClick: function onClick(e) {
          _onClick(i);
        }
      });
    })
  );
};

exports.Dots = Dots;
Dots.propTypes = {
  index: _propTypes2.default.number.isRequired,
  length: _propTypes2.default.number.isRequired,
  onClick: _propTypes2.default.func
};

exports.default = Dots;

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.buttonStyle = exports.colorStyle = exports.textStyle = exports.left = exports.bottom = exports.right = exports.top = exports.zIndex = exports.position = exports.backgroundRepeat = exports.backgroundPosition = exports.backgroundSize = exports.backgroundImage = exports.background = exports.overflow = exports.opacity = exports.boxShadow = exports.borderRadius = exports.borderColor = exports.borders = exports.borderLeft = exports.borderBottom = exports.borderRight = exports.borderTop = exports.border = exports.gridArea = exports.gridTemplateAreas = exports.gridTemplateRows = exports.gridTemplateColumns = exports.gridAutoRows = exports.gridAutoColumns = exports.gridAutoFlow = exports.gridRow = exports.gridColumn = exports.gridRowGap = exports.gridColumnGap = exports.gridGap = exports.order = exports.alignSelf = exports.justifySelf = exports.flex = exports.flexDirection = exports.flexBasis = exports.flexWrap = exports.justifyContent = exports.justifyItems = exports.alignContent = exports.alignItems = exports.verticalAlign = exports.ratio = exports.ratioPadding = exports.size = exports.sizeHeight = exports.sizeWidth = exports.minHeight = exports.maxHeight = exports.height = exports.minWidth = exports.maxWidth = exports.display = exports.letterSpacing = exports.fontStyle = exports.fontWeight = exports.lineHeight = exports.textAlign = exports.fontFamily = exports.color = exports.bgColor = exports.textColor = exports.fontSize = exports.width = exports.space = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _space = __webpack_require__(312);

Object.defineProperty(exports, 'space', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_space).default;
  }
});

var _util = __webpack_require__(229);

var _variant = __webpack_require__(265);

var _variant2 = _interopRequireDefault(_variant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getWidth = function getWidth(n) {
  return !(0, _util.num)(n) || n > 1 ? (0, _util.px)(n) : n * 100 + '%';
};

var width = exports.width = (0, _util.style)({
  prop: 'width',
  transformValue: getWidth
});

var fontSize = exports.fontSize = (0, _util.style)({
  prop: 'fontSize',
  key: 'fontSizes',
  transformValue: _util.px,
  scale: [12, 14, 16, 20, 24, 32, 48, 64, 72]
});

var textColor = exports.textColor = (0, _util.style)({
  prop: 'color',
  key: 'colors'
});

var bgColor = exports.bgColor = (0, _util.style)({
  prop: 'bg',
  cssProperty: 'backgroundColor',
  key: 'colors'
});

var color = exports.color = (0, _util.compose)(textColor, bgColor);

// typography
var fontFamily = exports.fontFamily = (0, _util.style)({
  prop: 'fontFamily',
  key: 'fonts'
});

var textAlign = exports.textAlign = (0, _util.style)({
  prop: 'textAlign'
});

var lineHeight = exports.lineHeight = (0, _util.style)({
  prop: 'lineHeight',
  key: 'lineHeights'
});

var fontWeight = exports.fontWeight = (0, _util.style)({
  prop: 'fontWeight',
  key: 'fontWeights'
});

var fontStyle = exports.fontStyle = (0, _util.style)({
  prop: 'fontStyle'
});

var letterSpacing = exports.letterSpacing = (0, _util.style)({
  prop: 'letterSpacing',
  key: 'letterSpacings',
  transformValue: _util.px
});

// layout
var display = exports.display = (0, _util.style)({
  prop: 'display'
});

var maxWidth = exports.maxWidth = (0, _util.style)({
  prop: 'maxWidth',
  key: 'maxWidths',
  transformValue: _util.px
});

var minWidth = exports.minWidth = (0, _util.style)({
  prop: 'minWidth',
  key: 'minWidths',
  transformValue: _util.px
});

var height = exports.height = (0, _util.style)({
  prop: 'height',
  key: 'heights',
  transformValue: _util.px
});

var maxHeight = exports.maxHeight = (0, _util.style)({
  prop: 'maxHeight',
  key: 'maxHeights',
  transformValue: _util.px
});

var minHeight = exports.minHeight = (0, _util.style)({
  prop: 'minHeight',
  key: 'minHeights',
  transformValue: _util.px
});

var sizeWidth = exports.sizeWidth = (0, _util.style)({
  prop: 'size',
  cssProperty: 'width',
  transformValue: _util.px
});

var sizeHeight = exports.sizeHeight = (0, _util.style)({
  prop: 'size',
  cssProperty: 'height',
  transformValue: _util.px
});

var size = exports.size = (0, _util.compose)(sizeHeight, sizeWidth);

var ratioPadding = exports.ratioPadding = (0, _util.style)({
  prop: 'ratio',
  cssProperty: 'paddingBottom',
  transformValue: function transformValue(n) {
    return n * 100 + '%';
  }
});

var ratio = exports.ratio = function ratio(props) {
  return props.ratio ? _extends({
    height: 0
  }, ratioPadding(props)) : null;
};
ratio.propTypes = _extends({}, ratioPadding.propTypes);

var verticalAlign = exports.verticalAlign = (0, _util.style)({
  prop: 'verticalAlign'
});

// flexbox
var alignItems = exports.alignItems = (0, _util.style)({
  prop: 'alignItems'
});

var alignContent = exports.alignContent = (0, _util.style)({
  prop: 'alignContent'
});

var justifyItems = exports.justifyItems = (0, _util.style)({
  prop: 'justifyItems'
});

var justifyContent = exports.justifyContent = (0, _util.style)({
  prop: 'justifyContent'
});

var flexWrap = exports.flexWrap = (0, _util.style)({
  prop: 'flexWrap'
});

var flexBasis = exports.flexBasis = (0, _util.style)({
  prop: 'flexBasis',
  transformValue: getWidth
});

var flexDirection = exports.flexDirection = (0, _util.style)({
  prop: 'flexDirection'
});

var flex = exports.flex = (0, _util.style)({
  prop: 'flex'
});

var justifySelf = exports.justifySelf = (0, _util.style)({
  prop: 'justifySelf'
});

var alignSelf = exports.alignSelf = (0, _util.style)({
  prop: 'alignSelf'
});

var order = exports.order = (0, _util.style)({
  prop: 'order'
});

// grid
var gridGap = exports.gridGap = (0, _util.style)({
  prop: 'gridGap',
  transformValue: _util.px,
  key: 'space'
});

var gridColumnGap = exports.gridColumnGap = (0, _util.style)({
  prop: 'gridColumnGap',
  transformValue: _util.px,
  key: 'space'
});

var gridRowGap = exports.gridRowGap = (0, _util.style)({
  prop: 'gridRowGap',
  transformValue: _util.px,
  key: 'space'
});

var gridColumn = exports.gridColumn = (0, _util.style)({
  prop: 'gridColumn'
});

var gridRow = exports.gridRow = (0, _util.style)({
  prop: 'gridRow'
});

var gridAutoFlow = exports.gridAutoFlow = (0, _util.style)({
  prop: 'gridAutoFlow'
});

var gridAutoColumns = exports.gridAutoColumns = (0, _util.style)({
  prop: 'gridAutoColumns'
});

var gridAutoRows = exports.gridAutoRows = (0, _util.style)({
  prop: 'gridAutoRows'
});

var gridTemplateColumns = exports.gridTemplateColumns = (0, _util.style)({
  prop: 'gridTemplateColumns'
});

var gridTemplateRows = exports.gridTemplateRows = (0, _util.style)({
  prop: 'gridTemplateRows'
});

var gridTemplateAreas = exports.gridTemplateAreas = (0, _util.style)({
  prop: 'gridTemplateAreas'
});

var gridArea = exports.gridArea = (0, _util.style)({
  prop: 'gridArea'
});

// borders
var getBorder = function getBorder(n) {
  return (0, _util.num)(n) && n > 0 ? n + 'px solid' : n;
};

var border = exports.border = (0, _util.style)({
  prop: 'border',
  key: 'borders',
  transformValue: getBorder
});

var borderTop = exports.borderTop = (0, _util.style)({
  prop: 'borderTop',
  key: 'borders',
  transformValue: getBorder
});

var borderRight = exports.borderRight = (0, _util.style)({
  prop: 'borderRight',
  key: 'borders',
  transformValue: getBorder
});

var borderBottom = exports.borderBottom = (0, _util.style)({
  prop: 'borderBottom',
  key: 'borders',
  transformValue: getBorder
});

var borderLeft = exports.borderLeft = (0, _util.style)({
  prop: 'borderLeft',
  key: 'borders',
  transformValue: getBorder
});

var borders = exports.borders = (0, _util.compose)(border, borderTop, borderRight, borderBottom, borderLeft);

var borderColor = exports.borderColor = (0, _util.style)({
  prop: 'borderColor',
  key: 'colors'
});

var borderRadius = exports.borderRadius = (0, _util.style)({
  prop: 'borderRadius',
  key: 'radii',
  transformValue: _util.px
});

var boxShadow = exports.boxShadow = (0, _util.style)({
  prop: 'boxShadow',
  key: 'shadows'
});

var opacity = exports.opacity = (0, _util.style)({
  prop: 'opacity'
});

var overflow = exports.overflow = (0, _util.style)({
  prop: 'overflow'
});

// backgrounds
var background = exports.background = (0, _util.style)({
  prop: 'background'
});

var backgroundImage = exports.backgroundImage = (0, _util.style)({
  prop: 'backgroundImage'
});

var backgroundSize = exports.backgroundSize = (0, _util.style)({
  prop: 'backgroundSize'
});

var backgroundPosition = exports.backgroundPosition = (0, _util.style)({
  prop: 'backgroundPosition'
});

var backgroundRepeat = exports.backgroundRepeat = (0, _util.style)({
  prop: 'backgroundRepeat'
});

// position
var position = exports.position = (0, _util.style)({
  prop: 'position'
});

var zIndex = exports.zIndex = (0, _util.style)({
  prop: 'zIndex'
});

var top = exports.top = (0, _util.style)({
  prop: 'top',
  transformValue: _util.px
});

var right = exports.right = (0, _util.style)({
  prop: 'right',
  transformValue: _util.px
});

var bottom = exports.bottom = (0, _util.style)({
  prop: 'bottom',
  transformValue: _util.px
});

var left = exports.left = (0, _util.style)({
  prop: 'left',
  transformValue: _util.px
});

var textStyle = exports.textStyle = (0, _variant2.default)({
  prop: 'textStyle',
  key: 'textStyles'
});

var colorStyle = exports.colorStyle = (0, _variant2.default)({
  prop: 'colors',
  key: 'colorStyles'
});

var buttonStyle = exports.buttonStyle = (0, _variant2.default)({
  key: 'buttons'
});

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _util = __webpack_require__(229);

exports.default = function (_ref) {
  var _fn$propTypes;

  var key = _ref.key,
      _ref$prop = _ref.prop,
      prop = _ref$prop === undefined ? 'variant' : _ref$prop;

  var fn = function fn(props) {
    return (0, _util.get)(props.theme, key, props[prop]) || null;
  };
  fn.propTypes = (_fn$propTypes = {}, _fn$propTypes[prop] = _util.propTypes.numberOrString, _fn$propTypes);
  return fn;
};

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(95);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = __webpack_require__(225);

var _Notes = __webpack_require__(267);

var _Notes2 = _interopRequireDefault(_Notes);

var _Mono = __webpack_require__(238);

var _Mono2 = _interopRequireDefault(_Mono);

var _Code = __webpack_require__(268);

var _Code2 = _interopRequireDefault(_Code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = function css(key) {
  return function (props) {
    return props.theme[key];
  };
};

var Heading = _styledComponents2.default.h1([], {
  lineHeight: 1.25
}, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('heading'));
Heading.propTypes = _extends({}, _styledSystem.fontSize.propTypes, _styledSystem.space.propTypes, _styledSystem.color.propTypes);
Heading.defaultProps = {
  color: 'heading',
  mt: 3,
  mb: 3
};

var h1 = (0, _styledComponents2.default)(Heading.withComponent('h1'))([], css('h1'));
h1.defaultProps = {
  fontSize: 4
};

var h2 = (0, _styledComponents2.default)(Heading.withComponent('h2'))([], css('h2'));
h2.defaultProps = {
  fontSize: 3
};

var h3 = (0, _styledComponents2.default)(Heading.withComponent('h3'))([], css('h3'));
h3.defaultProps = {
  fontSize: 2
};
var h4 = (0, _styledComponents2.default)(h3.withComponent('h4'))([], css('h4'));
var h5 = (0, _styledComponents2.default)(h3.withComponent('h5'))([], css('h5'));
var h6 = (0, _styledComponents2.default)(h3.withComponent('h6'))([], css('h6'));

var a = _styledComponents2.default.a([], _styledSystem.color, css('link'), css('a'));
a.propTypes = _extends({}, _styledSystem.color.propTypes);
a.defaultProps = {
  color: 'link'
};

var p = _styledComponents2.default.p([], _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('paragraph'), css('p'));
p.propTypes = _extends({}, _styledSystem.fontSize.propTypes, _styledSystem.space.propTypes, _styledSystem.color.propTypes);
p.defaultProps = {
  fontSize: 2
};

var ul = _styledComponents2.default.ul([], {
  textAlign: 'left'
}, _styledSystem.fontSize, css('ul'));
ul.propTypes = _extends({}, _styledSystem.fontSize.propTypes);
ul.defaultProps = {
  fontSize: 2
};

var ol = _styledComponents2.default.ol([], {
  textAlign: 'left'
}, _styledSystem.fontSize, css('ol'));
ol.propTypes = _extends({}, _styledSystem.fontSize.propTypes);
ol.defaultProps = {
  fontSize: 2
};
var li = _styledComponents2.default.li([], css('li'));

var blockquote = _styledComponents2.default.blockquote([], {
  textAlign: 'left',
  fontWeight: 'bold'
}, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('blockquote'), css('quote'));
blockquote.propTypes = _extends({}, _styledSystem.fontSize.propTypes, _styledSystem.space.propTypes, _styledSystem.color.propTypes);
blockquote.defaultProps = {
  fontSize: 2,
  px: 0,
  mx: 0,
  color: 'quote'
};

var Pre = _styledComponents2.default.pre([], function (props) {
  return {
    fontFamily: props.theme.monospace,
    textAlign: 'left',
    whiteSpace: 'pre-wrap'
  };
}, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('pre'));
Pre.propTypes = _extends({}, _styledSystem.fontSize.propTypes, _styledSystem.space.propTypes, _styledSystem.color.propTypes);
Pre.defaultProps = {
  fontSize: 1,
  m: 0,
  p: 2,
  color: 'pre',
  bg: 'preBackground'
};

var code = (0, _styledComponents.withTheme)(function (props) {
  var theme = props.theme;

  switch (props.className) {
    case 'language-notes':
      return _react2.default.createElement(
        _Notes2.default,
        null,
        _react2.default.createElement(_Mono2.default, _extends({}, props, { color: 'white' }))
      );
    default:
      if (theme.prism && theme.prism.style) {
        return _react2.default.createElement(_Code2.default, props);
      }
      return _react2.default.createElement(Pre, props);
  }
});

var inlineCode = _styledComponents2.default.code([], function (props) {
  return {
    fontFamily: props.theme.monospace
  };
}, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('code'));
inlineCode.propTypes = _extends({}, _styledSystem.fontSize.propTypes, _styledSystem.space.propTypes, _styledSystem.color.propTypes);
inlineCode.defaultProps = {
  color: 'code',
  bg: 'codeBackground'
};

var img = _styledComponents2.default.img([], {
  maxWidth: '100%',
  height: 'auto',
  objectFit: 'cover'
}, css('img'), css('image'));

var TableRoot = _styledComponents2.default.div([], {
  overflowX: 'auto'
});
var Table = _styledComponents2.default.table([], {
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: 0,
  '& td, & th': {
    textAlign: 'left',
    paddingRight: '.5em',
    paddingTop: '.25em',
    paddingBottom: '.25em',
    borderBottom: '1px solid',
    verticalAlign: 'top'
  }
}, css('table'));

var table = function table(props) {
  return _react2.default.createElement(
    TableRoot,
    null,
    _react2.default.createElement(Table, props)
  );
};

exports.default = {
  h1: h1,
  h2: h2,
  h3: h3,
  h4: h4,
  h5: h5,
  h6: h6,
  a: a,
  p: p,
  blockquote: blockquote,
  ul: ul,
  ol: ol,
  li: li,
  pre: function pre(props) {
    return props.children;
  },
  code: code,
  inlineCode: inlineCode,
  img: img,
  table: table
};

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _context = __webpack_require__(234);

var _updaters = __webpack_require__(231);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _context.withDeck)(function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    var deck = props.deck,
        children = props.children;

    if (typeof deck.index === 'undefined') return _possibleConstructorReturn(_this);
    deck.update((0, _updaters.setNotes)(deck.index, children));
    return _this;
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      return false;
    }
  }]);

  return _class;
}(_react2.default.Component));

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(95);

var _prismLight = __webpack_require__(337);

var _prismLight2 = _interopRequireDefault(_prismLight);

var _atomDark = __webpack_require__(394);

var _atomDark2 = _interopRequireDefault(_atomDark);

var _javascript = __webpack_require__(395);

var _javascript2 = _interopRequireDefault(_javascript);

var _jsx = __webpack_require__(396);

var _jsx2 = _interopRequireDefault(_jsx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _styledComponents.withTheme)((_temp = _class = function (_React$Component) {
  _inherits(Code, _React$Component);

  function Code(props) {
    _classCallCheck(this, Code);

    var _this = _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).call(this, props));

    _this.getLangauge = function (lang) {
      return lang ? lang.replace('language-', '') : 'javascripts';
    };

    (0, _prismLight.registerLanguage)('javascript', _javascript2.default);
    (0, _prismLight.registerLanguage)('jsx', _jsx2.default);
    if (props.theme && props.theme.prism && props.theme.prism.languages) {
      var languages = props.theme.prism.languages;
      Object.keys(languages).forEach(function (key) {
        (0, _prismLight.registerLanguage)(key, languages[key]);
      });
    }
    return _this;
  }

  _createClass(Code, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          theme = _props.theme;

      var language = this.getLangauge(className);
      var style = theme.prism && theme.prism.style ? theme.prism.style : _atomDark2.default;
      return _react2.default.createElement(
        _prismLight2.default,
        { language: language, style: style },
        children
      );
    }
  }]);

  return Code;
}(_react2.default.Component), _class.propTypes = {
  children: _propTypes2.default.string,
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object
}, _temp));

/***/ }),
/* 269 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(271);
var defined = __webpack_require__(272);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(355);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 272 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 273 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Schema

var proto = Schema.prototype

proto.space = null
proto.normal = {}
proto.property = {}

function Schema(property, normal, space) {
  this.property = property
  this.normal = normal

  if (space) {
    this.space = space
  }
}


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Info = __webpack_require__(276)
var types = __webpack_require__(253)

module.exports = DefinedInfo

DefinedInfo.prototype = new Info()
DefinedInfo.prototype.defined = true

function DefinedInfo(property, attribute, mask, space) {
  mark(this, 'space', space)
  Info.call(this, property, attribute)
  mark(this, 'boolean', check(mask, types.boolean))
  mark(this, 'booleanish', check(mask, types.booleanish))
  mark(this, 'overloadedBoolean', check(mask, types.overloadedBoolean))
  mark(this, 'number', check(mask, types.number))
  mark(this, 'commaSeparated', check(mask, types.commaSeparated))
  mark(this, 'spaceSeparated', check(mask, types.spaceSeparated))
  mark(this, 'commaOrSpaceSeparated', check(mask, types.commaOrSpaceSeparated))
}

function mark(values, key, value) {
  if (value) {
    values[key] = value
  }
}

function check(value, mask) {
  return (value & mask) === mask
}


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Info

var proto = Info.prototype

proto.space = null
proto.attribute = null
proto.property = null
proto.boolean = false
proto.booleanish = false
proto.overloadedBoolean = false
proto.number = false
proto.commaSeparated = false
proto.spaceSeparated = false
proto.commaOrSpaceSeparated = false
proto.mustUseProperty = false
proto.defined = false

function Info(property, attribute) {
  this.property = property
  this.attribute = attribute
}


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var caseSensitiveTransform = __webpack_require__(377)

module.exports = caseInsensitiveTransform

function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase())
}


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = alphabetical

/* Check if the given character code, or the character
 * code at the first character, is alphabetical. */
function alphabetical(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 && code <= 122) /* a-z */ ||
    (code >= 65 && code <= 90) /* A-Z */
  )
}


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = javascript
javascript.displayName = 'javascript'
javascript.aliases = ['js']
function javascript(Prism) {
  Prism.languages.javascript = Prism.languages.extend('clike', {
    keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
  })
  Prism.languages.insertBefore('javascript', 'keyword', {
    regex: {
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
      lookbehind: true,
      greedy: true
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    'function-variable': {
      pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
      alias: 'function'
    },
    constant: /\b[A-Z][A-Z\d_]*\b/
  })
  Prism.languages.insertBefore('javascript', 'string', {
    'template-string': {
      pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
      greedy: true,
      inside: {
        interpolation: {
          pattern: /\${[^}]+}/,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\${|}$/,
              alias: 'punctuation'
            },
            rest: null // See below
          }
        },
        string: /[\s\S]+/
      }
    }
  })
  Prism.languages.javascript['template-string'].inside[
    'interpolation'
  ].inside.rest =
    Prism.languages.javascript
  if (Prism.languages.markup) {
    Prism.languages.insertBefore('markup', 'tag', {
      script: {
        pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: true,
        inside: Prism.languages.javascript,
        alias: 'language-javascript',
        greedy: true
      }
    })
  }
  Prism.languages.js = Prism.languages.javascript
}


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  position: true,
  gfm: true,
  commonmark: false,
  footnotes: false,
  pedantic: false,
  blocks: __webpack_require__(430)
};


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable max-params */

/* Expose. */
module.exports = is

/* Assert if `test` passes for `node`.
 * When a `parent` node is known the `index` of node */
function is(test, node, index, parent, context) {
  var hasParent = parent !== null && parent !== undefined
  var hasIndex = index !== null && index !== undefined
  var check = convert(test)

  if (
    hasIndex &&
    (typeof index !== 'number' || index < 0 || index === Infinity)
  ) {
    throw new Error('Expected positive finite index or child node')
  }

  if (hasParent && (!is(null, parent) || !parent.children)) {
    throw new Error('Expected parent node')
  }

  if (!node || !node.type || typeof node.type !== 'string') {
    return false
  }

  if (hasParent !== hasIndex) {
    throw new Error('Expected both parent and index')
  }

  return Boolean(check.call(context, node, index, parent))
}

function convert(test) {
  if (typeof test === 'string') {
    return typeFactory(test)
  }

  if (test === null || test === undefined) {
    return ok
  }

  if (typeof test === 'object') {
    return ('length' in test ? anyFactory : matchesFactory)(test)
  }

  if (typeof test === 'function') {
    return test
  }

  throw new Error('Expected function, string, or object as test')
}

function convertAll(tests) {
  var results = []
  var length = tests.length
  var index = -1

  while (++index < length) {
    results[index] = convert(tests[index])
  }

  return results
}

/* Utility assert each property in `test` is represented
 * in `node`, and each values are strictly equal. */
function matchesFactory(test) {
  return matches

  function matches(node) {
    var key

    for (key in test) {
      if (node[key] !== test[key]) {
        return false
      }
    }

    return true
  }
}

function anyFactory(tests) {
  var checks = convertAll(tests)
  var length = checks.length

  return matches

  function matches() {
    var index = -1

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }

    return false
  }
}

/* Utility to convert a string into a function which checks
 * a given node’s type for said string. */
function typeFactory(test) {
  return type

  function type(node) {
    return Boolean(node && node.type === test)
  }
}

/* Utility to return true. */
function ok() {
  return true
}


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = indentation;

/* Map of characters, and their column length,
 * which can be used as indentation. */
var characters = {' ': 1, '\t': 4};

/* Gets indentation information for a line. */
function indentation(value) {
  var index = 0;
  var indent = 0;
  var character = value.charAt(index);
  var stops = {};
  var size;

  while (character in characters) {
    size = characters[character];

    indent += size;

    if (size > 1) {
      indent = Math.floor(indent / size) * size;
    }

    stops[indent] = index;

    character = value.charAt(++index);
  }

  return {indent: indent, stops: stops};
}


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var attributeName = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
var unquoted = '[^"\'=<>`\\u0000-\\u0020]+';
var singleQuoted = '\'[^\']*\'';
var doubleQuoted = '"[^"]*"';
var attributeValue = '(?:' + unquoted + '|' + singleQuoted + '|' + doubleQuoted + ')';
var attribute = '(?:\\s+' + attributeName + '(?:\\s*=\\s*' + attributeValue + ')?)';
var openTag = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';
var closeTag = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
var processing = '<[?].*?[?]>';
var declaration = '<![A-Za-z]+\\s+[^>]*>';
var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';

exports.openCloseTag = new RegExp('^(?:' + openTag + '|' + closeTag + ')');

exports.tag = new RegExp('^(?:' +
  openTag + '|' +
  closeTag + '|' +
  comment + '|' +
  processing + '|' +
  declaration + '|' +
  cdata +
')');


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = collapse

/* collapse(' \t\nbar \nbaz\t'); // ' bar baz ' */
function collapse(value) {
  return String(value).replace(/\s+/g, ' ')
}


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('<', fromIndex);
}


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var link = value.indexOf('[', fromIndex);
  var image = value.indexOf('![', fromIndex);

  if (image === -1) {
    return link;
  }

  /* Link can never be `-1` if an image is found, so we don’t need
   * to check for that :) */
  return link < image ? link : image;
}


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Expose. */
var position = exports

position.start = factory('start')
position.end = factory('end')

/* Factory to get a `type` point in the positional info of a node. */
function factory(type) {
  point.displayName = type

  return point

  /* Get a point in `node.position` at a bound `type`. */
  function point(node) {
    var point = (node && node.position && node.position[type]) || {}

    return {
      line: point.line || null,
      column: point.column || null,
      offset: isNaN(point.offset) ? null : point.offset
    }
  }
}


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = one

var u = __webpack_require__(222)
var all = __webpack_require__(220)

var own = {}.hasOwnProperty

/* Transform an unknown node. */
function unknown(h, node) {
  if (text(node)) {
    return h.augment(node, u('text', node.value))
  }

  return h(node, 'div', all(h, node))
}

/* Visit a node. */
function one(h, node, parent) {
  var type = node && node.type
  var fn = own.call(h.handlers, type) ? h.handlers[type] : null

  /* Fail on non-nodes. */
  if (!type) {
    throw new Error('Expected node, got `' + node + '`')
  }

  return (typeof fn === 'function' ? fn : unknown)(h, node, parent)
}

/* Check if the node should be renderered a text node. */
function text(node) {
  var data = node.data || {}

  if (
    own.call(data, 'hName') ||
    own.call(data, 'hProperties') ||
    own.call(data, 'hChildren')
  ) {
    return false
  }

  return 'value' in node
}


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = thematicBreak

/* Transform a thematic break / horizontal rule. */
function thematicBreak(h, node) {
  return h(node, 'hr')
}


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = list

var wrap = __webpack_require__(228)
var all = __webpack_require__(220)

/* Transform a list. */
function list(h, node) {
  var props = {}
  var name = node.ordered ? 'ol' : 'ul'

  if (typeof node.start === 'number' && node.start !== 1) {
    props.start = node.start
  }

  return h(node, name, props, wrap(all(h, node), true))
}


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = footnoteReference

var u = __webpack_require__(222)

/* Transform a reference to a footnote. */
function footnoteReference(h, node) {
  var identifier = node.identifier

  return h(node.position, 'sup', {id: 'fnref-' + identifier}, [
    h(node, 'a', {href: '#fn-' + identifier, className: ['footnote-ref']}, [
      u('text', identifier)
    ])
  ])
}


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = revert

var u = __webpack_require__(222)
var all = __webpack_require__(220)

/* Return the content of a reference without definition as markdown. */
function revert(h, node) {
  var subtype = node.referenceType
  var suffix = ']'
  var contents
  var head
  var tail

  if (subtype === 'collapsed') {
    suffix += '[]'
  } else if (subtype === 'full') {
    suffix += '[' + node.identifier + ']'
  }

  if (node.type === 'imageReference') {
    return u('text', '![' + node.alt + suffix)
  }

  contents = all(h, node)
  head = contents[0]

  if (head && head.type === 'text') {
    head.value = '[' + head.value
  } else {
    contents.unshift(u('text', '['))
  }

  tail = contents[contents.length - 1]

  if (tail && tail.type === 'text') {
    tail.value += suffix
  } else {
    contents.push(u('text', suffix))
  }

  return contents
}


/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mdx_deck_themes__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mdx_deck_themes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mdx_deck_themes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_syntax_highlighter_styles_prism_okaidia__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_syntax_highlighter_styles_prism_okaidia___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_syntax_highlighter_styles_prism_okaidia__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_syntax_highlighter_languages_prism_glsl__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_syntax_highlighter_languages_prism_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_syntax_highlighter_languages_prism_glsl__);
/* harmony default export */ __webpack_exports__["a"] = (Object.assign({},__WEBPACK_IMPORTED_MODULE_0_mdx_deck_themes__["condensed"],{colors:Object.assign({},__WEBPACK_IMPORTED_MODULE_0_mdx_deck_themes__["condensed"].colors,{background:"#1c1117",link:"#aa3333"}),prism:{style:__WEBPACK_IMPORTED_MODULE_1_react_syntax_highlighter_styles_prism_okaidia___default.a,languages:{glsl:__WEBPACK_IMPORTED_MODULE_2_react_syntax_highlighter_languages_prism_glsl___default.a}}}));

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/result.e82b46e6.png";

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 297 */,
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideDeck = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tag = __webpack_require__(261);

var _styledComponents = __webpack_require__(95);

var _lodash = __webpack_require__(296);

var _lodash2 = _interopRequireDefault(_lodash);

var _querystring = __webpack_require__(306);

var _querystring2 = _interopRequireDefault(_querystring);

var _reactSwipeable = __webpack_require__(309);

var _reactSwipeable2 = _interopRequireDefault(_reactSwipeable);

var _Head = __webpack_require__(260);

var _Provider = __webpack_require__(311);

var _Provider2 = _interopRequireDefault(_Provider);

var _Carousel = __webpack_require__(314);

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Slide = __webpack_require__(236);

var _Slide2 = _interopRequireDefault(_Slide);

var _Dots = __webpack_require__(263);

var _Dots2 = _interopRequireDefault(_Dots);

var _Root = __webpack_require__(237);

var _Root2 = _interopRequireDefault(_Root);

var _Presenter = __webpack_require__(315);

var _Presenter2 = _interopRequireDefault(_Presenter);

var _Overview = __webpack_require__(318);

var _Overview2 = _interopRequireDefault(_Overview);

var _Grid = __webpack_require__(319);

var _Grid2 = _interopRequireDefault(_Grid);

var _GoogleFonts = __webpack_require__(320);

var _GoogleFonts2 = _interopRequireDefault(_GoogleFonts);

var _themes = __webpack_require__(245);

var _themes2 = _interopRequireDefault(_themes);

var _components = __webpack_require__(266);

var _components2 = _interopRequireDefault(_components);

var _updaters = __webpack_require__(231);

var _constants = __webpack_require__(227);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlideDeck = exports.SlideDeck = function (_React$Component) {
  _inherits(SlideDeck, _React$Component);

  function SlideDeck() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SlideDeck);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SlideDeck.__proto__ || Object.getPrototypeOf(SlideDeck)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      length: _this.props.slides.length,
      index: 0,
      mode: _constants.modes.normal,
      // contextual metadata for slides
      metadata: {},
      step: 0
    }, _this.update = function (fn) {
      return _this.setState(fn);
    }, _this.handleKeyDown = function (e) {
      if (document.activeElement.tagName !== 'BODY' || _this.props.ignoreKeyEvents) {
        return;
      }

      if (e.metaKey || e.ctrlKey) return;
      var alt = e.altKey && !e.shiftKey;
      var shift = e.shiftKey && !e.altKey;

      if (alt) {
        switch (e.keyCode) {
          case _constants.keys.p:
            _this.update((0, _updaters.toggleMode)('presenter'));
            break;
          case _constants.keys.o:
            _this.update((0, _updaters.toggleMode)('overview'));
            break;
          case _constants.keys.g:
            _this.update((0, _updaters.toggleMode)('grid'));
            break;
        }
      } else if (shift) {
        switch (e.keyCode) {
          case _constants.keys.right:
            e.preventDefault();
            _this.update(_updaters.incrementIndex);
            break;
          case _constants.keys.left:
            e.preventDefault();
            _this.update(_updaters.decrementIndex);
            break;
        }
      } else if (!alt && !shift) {
        switch (e.keyCode) {
          case _constants.keys.right:
          case _constants.keys.space:
            e.preventDefault();
            _this.update(_updaters.next);
            break;
          case _constants.keys.left:
            e.preventDefault();
            _this.update(_updaters.previous);
            break;
          // shim for old Appear API
          case _constants.keys.up:
            _this.update(_updaters.decrementStep);
            break;
          case _constants.keys.down:
            _this.update(_updaters.incrementStep);
            break;
        }
      }
    }, _this.handleHashChange = function (e) {
      _this.isHashChange = true;
      _this.hashToState();
    }, _this.hashToState = function () {
      var hash = window.location.hash;

      var _hash$replace$split = hash.replace(/^#/, '').split('.'),
          _hash$replace$split2 = _slicedToArray(_hash$replace$split, 2),
          index_ = _hash$replace$split2[0],
          step_ = _hash$replace$split2[1];

      var index = parseInt(index_, 10);
      var step = parseInt(step_, 10);
      if (isNaN(index)) return;
      _this.setState({ index: index, step: isNaN(step) ? 0 : step });
    }, _this.getMode = function () {
      var _querystring$parse = _querystring2.default.parse(window.location.search.replace(/^\?/, '')),
          mode = _querystring$parse.mode;

      _this.setState({
        mode: _constants.modes[mode] || _constants.modes.normal
      });
    }, _this.handleStorageChange = function (e) {
      if (e.key === _constants.MDX_SLIDE_INDEX) {
        var index = parseInt(e.newValue, 10);
        _this.isStorageChange = true;
        _this.setState({ index: index });
      } else if (e.key === _constants.MDX_SLIDE_STEP, 10) {
        var step = parseInt(e.newValue, 10);
        _this.isStorageChange = true;
        _this.setState({ step: step });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SlideDeck, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.addEventListener('keydown', this.handleKeyDown);
      window.addEventListener('hashchange', this.handleHashChange);
      window.addEventListener('storage', this.handleStorageChange);
      this.hashToState();
      this.getMode();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeEventListener('keydown', this.handleKeyDown);
      window.removeEventListener('hashchange', this.handleHashChange);
      window.removeEventListener('storage', this.handleStorageChange);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.isHashChange) {
        this.isHashChange = false;
        return;
      }
      if (this.isStorageChange) {
        this.isStorageChange = false;
        return;
      }
      var _state = this.state,
          index = _state.index,
          mode = _state.mode,
          step = _state.step;

      var query = '';
      if (mode && mode !== _constants.modes.normal) {
        query += '?' + _querystring2.default.stringify({
          mode: (mode || '').toLowerCase()
        });
      } else if (mode === _constants.modes.normal) {
        query += window.location.pathname;
      }
      var step_ = step !== 0 ? '.' + step : '';
      history.pushState(null, null, query + '#' + index + step_);
      localStorage.setItem(_constants.MDX_SLIDE_INDEX, index);
      localStorage.setItem(_constants.MDX_SLIDE_STEP, step);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          slides = _props.slides,
          theme = _props.theme,
          propsComponents = _props.components,
          PropsProvider = _props.Provider,
          width = _props.width,
          height = _props.height,
          headTags = _props.headTags;
      var _state2 = this.state,
          index = _state2.index,
          mode = _state2.mode,
          metadata = _state2.metadata;
      var _theme$components = theme.components,
          components = _theme$components === undefined ? propsComponents : _theme$components,
          _theme$Provider = theme.Provider,
          Provider = _theme$Provider === undefined ? PropsProvider : _theme$Provider;


      var Wrapper = _Root2.default;
      if (mode === _constants.modes.presenter) {
        Wrapper = _Presenter2.default;
      } else if (mode === _constants.modes.overview) {
        Wrapper = _Overview2.default;
      }

      var context = _extends({}, this.state, {
        slides: slides,
        update: this.update
      });

      return _react2.default.createElement(
        _Head.HeadProvider,
        { tags: headTags },
        _react2.default.createElement(
          _styledComponents.ThemeProvider,
          { theme: theme },
          _react2.default.createElement(
            _tag.MDXProvider,
            {
              components: _extends({}, _components2.default, components) },
            _react2.default.createElement(
              Provider,
              _extends({}, this.state, { update: this.update }),
              mode === _constants.modes.grid ? _react2.default.createElement(_Grid2.default, {
                slides: slides,
                update: this.update
              }) : _react2.default.createElement(
                _reactSwipeable2.default,
                {
                  onSwipedLeft: function onSwipedLeft() {
                    return _this2.update(_updaters.next);
                  },
                  onSwipedRight: function onSwipedRight() {
                    return _this2.update(_updaters.previous);
                  } },
                _react2.default.createElement(
                  Wrapper,
                  _extends({}, this.state, {
                    slides: slides,
                    width: width,
                    height: height,
                    update: this.update }),
                  _react2.default.createElement(_GoogleFonts2.default, null),
                  _react2.default.createElement(
                    _Carousel2.default,
                    { index: index },
                    slides.map(function (Component, i) {
                      return _react2.default.createElement(
                        _Slide2.default,
                        _extends({
                          key: i,
                          id: 'slide-' + i
                        }, context, {
                          index: i,
                          className: 'Slide',
                          active: i === index,
                          metadata: metadata[i] }),
                        _react2.default.createElement(Component, null)
                      );
                    })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SlideDeck;
}(_react2.default.Component);

SlideDeck.propTypes = {
  slides: _propTypes2.default.array.isRequired,
  theme: _propTypes2.default.object,
  components: _propTypes2.default.object,
  Provider: _propTypes2.default.func,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  ignoreKeyEvents: _propTypes2.default.bool,
  headTags: _propTypes2.default.array.isRequired
};
SlideDeck.defaultProps = {
  slides: [],
  theme: _themes2.default,
  components: {},
  Provider: _Provider2.default,
  width: '100vw',
  height: '100vh',
  ignoreKeyEvents: false,
  headTags: []
};
exports.default = SlideDeck;

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _hoistNonReactStatics = __webpack_require__(300);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _mdxProvider = __webpack_require__(262);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaults = {
  inlineCode: 'code',
  wrapper: 'div'
};

var MDXTag = function (_Component) {
  _inherits(MDXTag, _Component);

  function MDXTag() {
    _classCallCheck(this, MDXTag);

    return _possibleConstructorReturn(this, (MDXTag.__proto__ || Object.getPrototypeOf(MDXTag)).apply(this, arguments));
  }

  _createClass(MDXTag, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          parentName = _props.parentName,
          _props$props = _props.props,
          childProps = _props$props === undefined ? {} : _props$props,
          children = _props.children,
          _props$components = _props.components,
          components = _props$components === undefined ? {} : _props$components,
          Layout = _props.Layout,
          layoutProps = _props.layoutProps;


      var Component = components[parentName + '.' + name] || components[name] || defaults[name] || name;

      if (Layout) {
        (0, _hoistNonReactStatics2.default)(this, Layout);

        return _react2.default.createElement(
          Layout,
          _extends({ components: components }, layoutProps),
          _react2.default.createElement(
            Component,
            childProps,
            children
          )
        );
      }

      return _react2.default.createElement(
        Component,
        childProps,
        children
      );
    }
  }]);

  return MDXTag;
}(_react.Component);

exports.default = (0, _mdxProvider.withMDXComponents)(MDXTag);

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__(302);

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__(303);

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__(304);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (false) {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(305);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (false) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(307);
exports.encode = exports.stringify = __webpack_require__(308);


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(0);
var PropTypes = __webpack_require__(3);
var DetectPassiveEvents = __webpack_require__(310).default;

function getInitialState() {
  return {
    x: null,
    y: null,
    swiping: false,
    start: 0
  };
}

function getMovingPosition(e) {
  return 'changedTouches' in e ? { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY } : { x: e.clientX, y: e.clientY };
}
function getPosition(e) {
  return 'touches' in e ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: e.clientX, y: e.clientY };
}

function rotateByAngle(pos, angle) {
  if (angle === 0) {
    return pos;
  }

  var x = pos.x,
      y = pos.y;


  var angleInRadians = Math.PI / 180 * angle;
  var rotatedX = x * Math.cos(angleInRadians) + y * Math.sin(angleInRadians);
  var rotatedY = y * Math.cos(angleInRadians) - x * Math.sin(angleInRadians);
  return { x: rotatedX, y: rotatedY };
}

function calculatePos(e, state) {
  var _rotateByAngle = rotateByAngle(getMovingPosition(e), state.rotationAngle),
      x = _rotateByAngle.x,
      y = _rotateByAngle.y;

  var deltaX = state.x - x;
  var deltaY = state.y - y;

  var absX = Math.abs(deltaX);
  var absY = Math.abs(deltaY);

  var time = Date.now() - state.start;
  var velocity = Math.sqrt(absX * absX + absY * absY) / time;

  return { deltaX: deltaX, deltaY: deltaY, absX: absX, absY: absY, velocity: velocity };
}

var Swipeable = function (_React$Component) {
  _inherits(Swipeable, _React$Component);

  function Swipeable(props, context) {
    _classCallCheck(this, Swipeable);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.swipeable = getInitialState();

    _this.eventStart = _this.eventStart.bind(_this);
    _this.eventMove = _this.eventMove.bind(_this);
    _this.eventEnd = _this.eventEnd.bind(_this);
    _this.mouseDown = _this.mouseDown.bind(_this);
    _this.mouseMove = _this.mouseMove.bind(_this);
    _this.mouseUp = _this.mouseUp.bind(_this);
    _this.cleanupMouseListeners = _this.cleanupMouseListeners.bind(_this);
    _this.setupMouseListeners = _this.setupMouseListeners.bind(_this);
    _this.elementRef = _this.elementRef.bind(_this);
    _this.setupTouchmoveEvent = _this.setupTouchmoveEvent.bind(_this);
    _this.cleanupTouchmoveEvent = _this.cleanupTouchmoveEvent.bind(_this);

    _this.hasPassiveSupport = DetectPassiveEvents.hasSupport;
    return _this;
  }

  Swipeable.prototype.componentDidMount = function componentDidMount() {
    if (this.props.preventDefaultTouchmoveEvent) {
      this.setupTouchmoveEvent();
    }
  };

  Swipeable.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.disabled !== this.props.disabled) {
      this.cleanupMouseListeners();

      this.swipeable = getInitialState();
    }

    if (prevProps.preventDefaultTouchmoveEvent && !this.props.preventDefaultTouchmoveEvent) {
      this.cleanupTouchmoveEvent();
    } else if (!prevProps.preventDefaultTouchmoveEvent && this.props.preventDefaultTouchmoveEvent) {
      this.setupTouchmoveEvent();
    }
  };

  Swipeable.prototype.componentWillUnmount = function componentWillUnmount() {
    this.cleanupMouseListeners();
  };

  Swipeable.prototype.setupTouchmoveEvent = function setupTouchmoveEvent() {
    if (this.element && this.hasPassiveSupport) {
      this.element.addEventListener('touchmove', this.eventMove, { passive: false });
    }
  };

  Swipeable.prototype.setupMouseListeners = function setupMouseListeners() {
    document.addEventListener('mousemove', this.mouseMove);
    document.addEventListener('mouseup', this.mouseUp);
  };

  Swipeable.prototype.cleanupTouchmoveEvent = function cleanupTouchmoveEvent() {
    if (this.element && this.hasPassiveSupport) {
      this.element.removeEventListener('touchmove', this.eventMove, { passive: false });
    }
  };

  Swipeable.prototype.cleanupMouseListeners = function cleanupMouseListeners() {
    document.removeEventListener('mousemove', this.mouseMove);
    document.removeEventListener('mouseup', this.mouseUp);
  };

  Swipeable.prototype.mouseDown = function mouseDown(e) {
    if (!this.props.trackMouse || e.type !== 'mousedown') {
      return;
    }

    if (typeof this.props.onMouseDown === 'function') this.props.onMouseDown(e);

    this.setupMouseListeners();

    this.eventStart(e);
  };

  Swipeable.prototype.mouseMove = function mouseMove(e) {
    this.eventMove(e);
  };

  Swipeable.prototype.mouseUp = function mouseUp(e) {
    this.cleanupMouseListeners();
    this.eventEnd(e);
  };

  Swipeable.prototype.eventStart = function eventStart(e) {
    if (e.touches && e.touches.length > 1) return;

    var rotationAngle = this.props.rotationAngle;

    var _rotateByAngle2 = rotateByAngle(getPosition(e), rotationAngle),
        x = _rotateByAngle2.x,
        y = _rotateByAngle2.y;

    if (this.props.stopPropagation) e.stopPropagation();

    this.swipeable = { start: Date.now(), x: x, y: y, swiping: false, rotationAngle: rotationAngle };
  };

  Swipeable.prototype.eventMove = function eventMove(e) {
    var _props = this.props,
        stopPropagation = _props.stopPropagation,
        delta = _props.delta,
        onSwiping = _props.onSwiping,
        onSwiped = _props.onSwiped,
        onSwipingLeft = _props.onSwipingLeft,
        onSwipedLeft = _props.onSwipedLeft,
        onSwipingRight = _props.onSwipingRight,
        onSwipedRight = _props.onSwipedRight,
        onSwipingUp = _props.onSwipingUp,
        onSwipedUp = _props.onSwipedUp,
        onSwipingDown = _props.onSwipingDown,
        onSwipedDown = _props.onSwipedDown,
        preventDefaultTouchmoveEvent = _props.preventDefaultTouchmoveEvent;


    if (!this.swipeable.x || !this.swipeable.y || e.touches && e.touches.length > 1) {
      return;
    }

    var pos = calculatePos(e, this.swipeable);

    if (pos.absX < delta && pos.absY < delta && !this.swipeable.swiping) return;

    if (stopPropagation) e.stopPropagation();

    if (onSwiping) {
      onSwiping(e, pos.deltaX, pos.deltaY, pos.absX, pos.absY, pos.velocity);
    }

    var cancelablePageSwipe = false;
    if (onSwiping || onSwiped) {
      cancelablePageSwipe = true;
    }

    if (pos.absX > pos.absY) {
      if (pos.deltaX > 0) {
        if (onSwipingLeft || onSwipedLeft) {
          onSwipingLeft && onSwipingLeft(e, pos.absX);
          cancelablePageSwipe = true;
        }
      } else if (onSwipingRight || onSwipedRight) {
        onSwipingRight && onSwipingRight(e, pos.absX);
        cancelablePageSwipe = true;
      }
    } else if (pos.deltaY > 0) {
      if (onSwipingUp || onSwipedUp) {
        onSwipingUp && onSwipingUp(e, pos.absY);
        cancelablePageSwipe = true;
      }
    } else if (onSwipingDown || onSwipedDown) {
      onSwipingDown && onSwipingDown(e, pos.absY);
      cancelablePageSwipe = true;
    }

    this.swipeable.swiping = true;

    if (cancelablePageSwipe && preventDefaultTouchmoveEvent) e.preventDefault();
  };

  Swipeable.prototype.eventEnd = function eventEnd(e) {
    var _props2 = this.props,
        stopPropagation = _props2.stopPropagation,
        flickThreshold = _props2.flickThreshold,
        onSwiped = _props2.onSwiped,
        onSwipedLeft = _props2.onSwipedLeft,
        onSwipedRight = _props2.onSwipedRight,
        onSwipedUp = _props2.onSwipedUp,
        onSwipedDown = _props2.onSwipedDown,
        onTap = _props2.onTap;


    if (this.swipeable.swiping) {
      var pos = calculatePos(e, this.swipeable);

      if (stopPropagation) e.stopPropagation();

      var isFlick = pos.velocity > flickThreshold;

      onSwiped && onSwiped(e, pos.deltaX, pos.deltaY, isFlick, pos.velocity);

      if (pos.absX > pos.absY) {
        if (pos.deltaX > 0) {
          onSwipedLeft && onSwipedLeft(e, pos.deltaX, isFlick);
        } else {
          onSwipedRight && onSwipedRight(e, pos.deltaX, isFlick);
        }
      } else if (pos.deltaY > 0) {
        onSwipedUp && onSwipedUp(e, pos.deltaY, isFlick);
      } else {
        onSwipedDown && onSwipedDown(e, pos.deltaY, isFlick);
      }
    } else {
      onTap && onTap(e);
    }

    this.swipeable = getInitialState();
  };

  Swipeable.prototype.elementRef = function elementRef(element) {
    this.element = element;
    this.props.innerRef && this.props.innerRef(element);
  };

  Swipeable.prototype.render = function render() {
    var newProps = _extends({}, this.props);
    if (!this.props.disabled) {
      newProps.onTouchStart = this.eventStart;

      if (!this.props.preventDefaultTouchmoveEvent || !this.hasPassiveSupport) {
        newProps.onTouchMove = this.eventMove;
      }

      newProps.onTouchEnd = this.eventEnd;
      newProps.onMouseDown = this.mouseDown;
    }

    newProps.ref = this.elementRef;

    delete newProps.onSwiped;
    delete newProps.onSwiping;
    delete newProps.onSwipingUp;
    delete newProps.onSwipingRight;
    delete newProps.onSwipingDown;
    delete newProps.onSwipingLeft;
    delete newProps.onSwipedUp;
    delete newProps.onSwipedRight;
    delete newProps.onSwipedDown;
    delete newProps.onSwipedLeft;
    delete newProps.onTap;
    delete newProps.flickThreshold;
    delete newProps.delta;
    delete newProps.preventDefaultTouchmoveEvent;
    delete newProps.stopPropagation;
    delete newProps.nodeName;
    delete newProps.children;
    delete newProps.trackMouse;
    delete newProps.disabled;
    delete newProps.innerRef;
    delete newProps.rotationAngle;

    return React.createElement(this.props.nodeName, newProps, this.props.children);
  };

  return Swipeable;
}(React.Component);

Swipeable.propTypes = {
  onSwiped: PropTypes.func,
  onSwiping: PropTypes.func,
  onSwipingUp: PropTypes.func,
  onSwipingRight: PropTypes.func,
  onSwipingDown: PropTypes.func,
  onSwipingLeft: PropTypes.func,
  onSwipedUp: PropTypes.func,
  onSwipedRight: PropTypes.func,
  onSwipedDown: PropTypes.func,
  onSwipedLeft: PropTypes.func,
  onTap: PropTypes.func,
  flickThreshold: PropTypes.number,
  delta: PropTypes.number,
  preventDefaultTouchmoveEvent: PropTypes.bool,
  stopPropagation: PropTypes.bool,
  nodeName: PropTypes.string,
  trackMouse: PropTypes.bool,
  disabled: PropTypes.bool,
  innerRef: PropTypes.func,
  children: PropTypes.node,
  rotationAngle: PropTypes.number
};

Swipeable.defaultProps = {
  flickThreshold: 0.6,
  delta: 10,
  preventDefaultTouchmoveEvent: false,
  stopPropagation: false,
  nodeName: 'div',
  disabled: false,
  rotationAngle: 0
};

module.exports = Swipeable;

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var detectPassiveEvents = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      var passive = false;
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passive = true;
        }
      });
      // note: have to set and remove a no-op listener instead of null
      // (which was used previously), becasue Edge v15 throws an error
      // when providing a null callback.
      // https://github.com/rafrex/detect-passive-events/pull/3
      var noop = function noop() {};
      window.addEventListener('testPassiveEventSupport', noop, options);
      window.removeEventListener('testPassiveEventSupport', noop, options);
      detectPassiveEvents.hasSupport = passive;
    }
  }
};

detectPassiveEvents.update();
exports.default = detectPassiveEvents;

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(95);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Dots = __webpack_require__(263);

var _Dots2 = _interopRequireDefault(_Dots);

var _updaters = __webpack_require__(231);

var _constants = __webpack_require__(227);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bottom = _styledComponents2.default.div([], {
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0
});

var Button = _styledComponents2.default.div([], {
  cursor: 'pointer',
  width: '64px',
  height: '100vh'
});
var Previous = (0, _styledComponents2.default)(Button)([], {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0
});
var Next = (0, _styledComponents2.default)(Button)([], {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0
});

var Provider = function (_React$Component) {
  _inherits(Provider, _React$Component);

  function Provider() {
    _classCallCheck(this, Provider);

    return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
  }

  _createClass(Provider, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          mode = _props.mode,
          index = _props.index,
          length = _props.length,
          update = _props.update;


      if (mode !== _constants.modes.normal) {
        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          children
        );
      }

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        children,
        _react2.default.createElement(
          Bottom,
          null,
          _react2.default.createElement(_Dots2.default, {
            mx: 'auto',
            mb: 2,
            index: index,
            length: length,
            onClick: function onClick(index) {
              update({ index: index });
            }
          })
        ),
        _react2.default.createElement(Previous, {
          role: 'button',
          title: 'Previous Slide',
          onClick: function onClick(e) {
            update(_updaters.previous);
          }
        }),
        _react2.default.createElement(Next, {
          role: 'button',
          title: 'Next Slide',
          onClick: function onClick(e) {
            update(_updaters.next);
          }
        })
      );
    }
  }]);

  return Provider;
}(_react2.default.Component);

exports.default = Provider;

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _util = __webpack_require__(229);

var isNegative = function isNegative(n) {
  return n < 0;
};

var REG = /^[mp][trblxy]?$/;

var properties = {
  m: 'margin',
  p: 'padding'
};

var directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};

var getProperties = function getProperties(key) {
  var _key$split = key.split(''),
      a = _key$split[0],
      b = _key$split[1];

  var property = properties[a];
  var direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(function (dir) {
    return property + dir;
  }) : [property + direction];
};

var getValue = function getValue(scale) {
  return function (n) {
    if (!(0, _util.num)(n)) {
      return scale[n] || n;
    }
    var abs = Math.abs(n);
    var neg = isNegative(n);
    var value = scale[abs] || abs;
    if (!(0, _util.num)(value)) {
      return neg ? '-' + value : value;
    }
    return (0, _util.px)(value * (neg ? -1 : 1));
  };
};

var defaultScale = [0, 4, 8, 16, 32, 64, 128, 256, 512];

var space = function space(props) {
  var keys = Object.keys(props).filter(function (key) {
    return REG.test(key);
  }).sort();
  var scale = (0, _util.get)(props.theme, 'space') || defaultScale;
  var getStyle = getValue(scale);

  return keys.map(function (key) {
    var value = props[key];
    var properties = getProperties(key);

    var style = function style(n) {
      return (0, _util.is)(n) ? properties.reduce(function (a, prop) {
        var _extends2;

        return _extends({}, a, (_extends2 = {}, _extends2[prop] = getStyle(n), _extends2));
      }, {}) : null;
    };

    if (!Array.isArray(value)) {
      return style(value);
    }

    var breakpoints = [null].concat(((0, _util.get)(props.theme, 'breakpoints') || _util.defaultBreakpoints).map(_util.createMediaQuery));

    var styles = {};

    for (var i = 0; i < value.length; i++) {
      var media = breakpoints[i];
      if (!media) {
        styles = style(value[i]);
        continue;
      }
      var rule = style(value[i]);
      if (!rule) continue;
      styles[media] = rule;
    }

    return styles;
  }).reduce(_util.merge, {});
};

space.propTypes = {
  m: (0, _util.cloneFunc)(_util.propTypes.responsive),
  mt: (0, _util.cloneFunc)(_util.propTypes.responsive),
  mr: (0, _util.cloneFunc)(_util.propTypes.responsive),
  mb: (0, _util.cloneFunc)(_util.propTypes.responsive),
  ml: (0, _util.cloneFunc)(_util.propTypes.responsive),
  mx: (0, _util.cloneFunc)(_util.propTypes.responsive),
  my: (0, _util.cloneFunc)(_util.propTypes.responsive),
  p: (0, _util.cloneFunc)(_util.propTypes.responsive),
  pt: (0, _util.cloneFunc)(_util.propTypes.responsive),
  pr: (0, _util.cloneFunc)(_util.propTypes.responsive),
  pb: (0, _util.cloneFunc)(_util.propTypes.responsive),
  pl: (0, _util.cloneFunc)(_util.propTypes.responsive),
  px: (0, _util.cloneFunc)(_util.propTypes.responsive),
  py: (0, _util.cloneFunc)(_util.propTypes.responsive)
};

var meta = function meta(prop) {
  return {
    prop: prop,
    themeKey: 'space',
    styleType: 'responsive'
  };
};

Object.keys(space.propTypes).forEach(function (prop) {
  space.propTypes[prop].meta = meta(prop);
});

exports.default = space;

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _styles = __webpack_require__(264);

var styles = _interopRequireWildcard(_styles);

var _util = __webpack_require__(229);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var omit = function omit(obj, blacklist) {
  var next = {};
  for (var key in obj) {
    if (blacklist.indexOf(key) > -1) continue;
    next[key] = obj[key];
  }
  return next;
};

var funcs = Object.keys(styles).map(function (key) {
  return styles[key];
}).filter(function (fn) {
  return typeof fn === 'function';
});

var blacklist = funcs.reduce(function (a, fn) {
  return [].concat(a, Object.keys(fn.propTypes || {}));
}, ['theme']);

exports.default = function (props) {
  return funcs.map(function (fn) {
    return fn(props);
  }).reduce(_util.merge, omit(props, blacklist));
};

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carousel = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(95);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = __webpack_require__(235);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var themeable = function themeable(key) {
  return function (props) {
    return _defineProperty({}, key, (0, _lodash2.default)(props.theme, key, props[key]));
  };
};

var CarouselRoot = _styledComponents2.default.div([], {
  overflowX: 'hidden',
  width: '100%',
  height: '100%',
  '@media print': {
    height: 'auto',
    overflowX: 'visible'
  }
});

var CarouselInner = _styledComponents2.default.div([], {
  display: 'flex',
  width: '100%',
  height: '100%',
  '@media print': {
    height: 'auto',
    display: 'block'
  },
  transitionProperty: 'transform'
}, themeable('transitionTimingFunction'), themeable('transitionDuration'), function (props) {
  return {
    transform: 'translateX(' + -100 * props.index + '%)'
  };
});

CarouselInner.propTypes = {
  index: _propTypes2.default.number.isRequired
};

CarouselInner.defaultProps = {
  transitionTimingFunction: 'ease-out',
  transitionDuration: '.3s'
};

var Carousel = exports.Carousel = function Carousel(props) {
  return _react2.default.createElement(
    CarouselRoot,
    null,
    _react2.default.createElement(CarouselInner, props)
  );
};

exports.default = Carousel;

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Presenter = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(235);

var _lodash2 = _interopRequireDefault(_lodash);

var _Box = __webpack_require__(232);

var _Box2 = _interopRequireDefault(_Box);

var _Flex = __webpack_require__(230);

var _Flex2 = _interopRequireDefault(_Flex);

var _Zoom = __webpack_require__(244);

var _Zoom2 = _interopRequireDefault(_Zoom);

var _Slide = __webpack_require__(236);

var _Slide2 = _interopRequireDefault(_Slide);

var _Root = __webpack_require__(237);

var _Root2 = _interopRequireDefault(_Root);

var _Timer = __webpack_require__(316);

var _Timer2 = _interopRequireDefault(_Timer);

var _Mono = __webpack_require__(238);

var _Mono2 = _interopRequireDefault(_Mono);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Presenter = function Presenter(_ref) {
  var index = _ref.index,
      length = _ref.length,
      _ref$slides = _ref.slides,
      slides = _ref$slides === undefined ? [] : _ref$slides,
      mode = _ref.mode,
      _ref$metadata = _ref.metadata,
      metadata = _ref$metadata === undefined ? {} : _ref$metadata,
      update = _ref.update,
      step = _ref.step,
      props = _objectWithoutProperties(_ref, ['index', 'length', 'slides', 'mode', 'metadata', 'update', 'step']);

  var Next = slides[index + 1];
  var notes = (0, _lodash2.default)(metadata, index + '.notes');

  return _react2.default.createElement(
    _Flex2.default,
    {
      color: 'white', bg: 'black',
      css: {
        flexDirection: 'column',
        height: '100vh'
      }
    },
    _react2.default.createElement(
      _Flex2.default,
      { my: 'auto' },
      _react2.default.createElement(
        _Box2.default,
        {
          mx: 'auto',
          width: 5 / 8,
          css: {
            border: '1px solid rgba(128, 128, 128, 0.25)'
          } },
        _react2.default.createElement(
          _Zoom2.default,
          { zoom: 5 / 8 },
          _react2.default.createElement(
            _Root2.default,
            props,
            props.children
          )
        )
      ),
      _react2.default.createElement(
        _Flex2.default,
        {
          width: 1 / 4,
          mx: 'auto',
          css: {
            flex: 'none',
            flexDirection: 'column'
          } },
        _react2.default.createElement(
          _Box2.default,
          {
            mx: 'auto',
            css: {
              border: '1px solid rgba(128, 128, 128, 0.25)'
            } },
          _react2.default.createElement(
            _Zoom2.default,
            { zoom: 1 / 4 },
            _react2.default.createElement(
              _Root2.default,
              props,
              Next && _react2.default.createElement(
                _Slide2.default,
                null,
                _react2.default.createElement(Next, null)
              )
            )
          )
        ),
        _react2.default.createElement(
          _Box2.default,
          {
            py: 3,
            css: {
              flex: 'auto'
            } },
          notes
        )
      )
    ),
    _react2.default.createElement(
      _Flex2.default,
      { mt: 'auto', px: 3, py: 3 },
      _react2.default.createElement(
        _Mono2.default,
        null,
        'Slide ',
        index + 1,
        ' of ',
        length
      ),
      _react2.default.createElement(_Box2.default, { mx: 'auto' }),
      _react2.default.createElement(_Timer2.default, null)
    )
  );
};

exports.Presenter = Presenter;
Presenter.propTypes = {
  index: _propTypes2.default.number.isRequired,
  length: _propTypes2.default.number.isRequired,
  update: _propTypes2.default.func.isRequired,
  step: _propTypes2.default.number.isRequired,
  slides: _propTypes2.default.array,
  mode: _propTypes2.default.string,
  metadata: _propTypes2.default.object
};

exports.default = Presenter;

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _hhmmss = __webpack_require__(317);

var _hhmmss2 = _interopRequireDefault(_hhmmss);

var _styledComponents = __webpack_require__(95);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = __webpack_require__(225);

var _Flex = __webpack_require__(230);

var _Flex2 = _interopRequireDefault(_Flex);

var _Box = __webpack_require__(232);

var _Box2 = _interopRequireDefault(_Box);

var _Mono = __webpack_require__(238);

var _Mono2 = _interopRequireDefault(_Mono);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = _styledComponents2.default.button([], {
  appearance: 'none',
  fontFamily: 'inherit',
  fontSize: '12px',
  fontWeight: 'bold',
  borderRadius: '4px',
  border: 'none'
}, _styledSystem.space, _styledSystem.color);

Button.propTypes = _extends({}, _styledSystem.space.propTypes, _styledSystem.color.propTypes);

Button.defaultProps = {
  m: 0,
  px: 2,
  py: 1,
  color: 'white',
  bg: '#333'
};

var Timer = function (_React$Component) {
  _inherits(Timer, _React$Component);

  function Timer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Timer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Timer.__proto__ || Object.getPrototypeOf(Timer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      on: false,
      time: new Date().toLocaleTimeString(),
      seconds: 0
    }, _this.toggle = function () {
      _this.setState(function (state) {
        return { on: !state.on };
      });
    }, _this.reset = function () {
      _this.setState({ seconds: 0 });
    }, _this.tick = function () {
      var now = new Date();
      _this.setState(function (state) {
        return {
          time: now.toLocaleTimeString(),
          seconds: state.on ? state.seconds + 1 : state.seconds
        };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Timer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.timer = setInterval(this.tick, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!this.timer) return;
      clearInterval(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          time = _state.time,
          seconds = _state.seconds,
          on = _state.on;

      var elapsed = (0, _hhmmss2.default)(seconds);

      return _react2.default.createElement(
        _Flex2.default,
        { css: { alignItems: 'center' } },
        !on && seconds > 0 && _react2.default.createElement(
          Button,
          { mr: 1, onClick: this.reset },
          'reset'
        ),
        _react2.default.createElement(
          Button,
          {
            bg: on ? '#600' : '#060',
            onClick: this.toggle },
          on ? 'stop' : 'start'
        ),
        _react2.default.createElement(
          _Mono2.default,
          { px: 2 },
          elapsed,
          ' |'
        ),
        _react2.default.createElement(
          _Mono2.default,
          null,
          time
        )
      );
    }
  }]);

  return Timer;
}(_react2.default.Component);

exports.default = Timer;

/***/ }),
/* 317 */
/***/ (function(module, exports) {


module.exports = function(n, options) {

  var options = options || {};

  var hours = Math.floor(n / 3600),
    mins = '0' + Math.floor((n % 3600) / 60),
    secs = '0' + Math.floor((n % 60));

  mins = mins.substr(mins.length - 2);
  secs = secs.substr(secs.length - 2);

  if(!isNaN(secs)){
    if (hours){
      return hours+':'+mins+':'+secs;  
    } else {
      return mins+':'+secs;  
    };
  } else {
    return '00:00';
  };

};



/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overview = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(235);

var _lodash2 = _interopRequireDefault(_lodash);

var _Box = __webpack_require__(232);

var _Box2 = _interopRequireDefault(_Box);

var _Flex = __webpack_require__(230);

var _Flex2 = _interopRequireDefault(_Flex);

var _Zoom = __webpack_require__(244);

var _Zoom2 = _interopRequireDefault(_Zoom);

var _Slide = __webpack_require__(236);

var _Slide2 = _interopRequireDefault(_Slide);

var _Root = __webpack_require__(237);

var _Root2 = _interopRequireDefault(_Root);

var _Mono = __webpack_require__(238);

var _Mono2 = _interopRequireDefault(_Mono);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Overview = function Overview(_ref) {
  var index = _ref.index,
      length = _ref.length,
      _ref$slides = _ref.slides,
      slides = _ref$slides === undefined ? [] : _ref$slides,
      mode = _ref.mode,
      _ref$metadata = _ref.metadata,
      metadata = _ref$metadata === undefined ? {} : _ref$metadata,
      update = _ref.update,
      step = _ref.step,
      props = _objectWithoutProperties(_ref, ['index', 'length', 'slides', 'mode', 'metadata', 'update', 'step']);

  var notes = (0, _lodash2.default)(metadata, index + '.notes');

  return _react2.default.createElement(
    _Flex2.default,
    {
      color: 'white',
      bg: 'black',
      css: {
        alignItems: 'flex-start',
        height: '100vh'
      } },
    _react2.default.createElement(
      _Box2.default,
      {
        mr: 'auto',
        px: 2,
        py: 3,
        css: {
          flex: 'none',
          height: '100vh',
          overflowY: 'auto'
        } },
      slides.map(function (Component, i) {
        return _react2.default.createElement(
          _Box2.default,
          {
            key: i,
            role: 'link',
            p: 1,
            style: {
              outline: i === index ? '1px solid #07c' : null
            },
            css: {
              cursor: 'pointer'
            },
            onClick: function onClick(e) {
              update({ index: i });
            } },
          _react2.default.createElement(
            _Zoom2.default,
            { zoom: 1 / 6 },
            _react2.default.createElement(
              _Root2.default,
              props,
              _react2.default.createElement(
                _Slide2.default,
                null,
                _react2.default.createElement(Component, null)
              )
            )
          )
        );
      })
    ),
    _react2.default.createElement(
      _Box2.default,
      { mx: 'auto', py: 4, width: 2 / 3 },
      _react2.default.createElement(
        _Zoom2.default,
        { zoom: 2 / 3 },
        _react2.default.createElement(
          _Root2.default,
          props,
          props.children
        )
      ),
      _react2.default.createElement(
        _Flex2.default,
        null,
        _react2.default.createElement(
          _Box2.default,
          { ml: 'auto', py: 2 },
          index + 1,
          '/',
          length
        )
      ),
      _react2.default.createElement(
        _Box2.default,
        { mt: 3 },
        notes
      )
    )
  );
};

exports.Overview = Overview;
Overview.propTypes = {
  index: _propTypes2.default.number.isRequired,
  length: _propTypes2.default.number.isRequired,
  update: _propTypes2.default.func.isRequired,
  step: _propTypes2.default.number.isRequired,
  slides: _propTypes2.default.array,
  mode: _propTypes2.default.string,
  notes: _propTypes2.default.object
};

exports.default = Overview;

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Flex = __webpack_require__(230);

var _Flex2 = _interopRequireDefault(_Flex);

var _Box = __webpack_require__(232);

var _Box2 = _interopRequireDefault(_Box);

var _Slide = __webpack_require__(236);

var _Slide2 = _interopRequireDefault(_Slide);

var _Zoom = __webpack_require__(244);

var _Zoom2 = _interopRequireDefault(_Zoom);

var _Root = __webpack_require__(237);

var _Root2 = _interopRequireDefault(_Root);

var _constants = __webpack_require__(227);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$slides = _ref.slides,
      slides = _ref$slides === undefined ? [] : _ref$slides,
      update = _ref.update;
  return _react2.default.createElement(
    _Box2.default,
    { bg: 'black', css: { minHeight: '100vh' } },
    _react2.default.createElement(
      _Flex2.default,
      {
        css: {
          justifyContent: 'flex-start',
          flexWrap: 'wrap'
        } },
      slides.map(function (Component, i) {
        return _react2.default.createElement(
          _Box2.default,
          { key: i, css: { cursor: 'pointer' } },
          _react2.default.createElement(
            'div',
            { role: 'link',
              href: '#' + i,
              onClick: function onClick(e) {
                update({
                  index: i,
                  mode: _constants.modes.normal
                });
              } },
            _react2.default.createElement(
              _Zoom2.default,
              { zoom: 1 / 4 },
              _react2.default.createElement(
                _Root2.default,
                { width: '100vw', height: '100vh' },
                _react2.default.createElement(
                  _Slide2.default,
                  { index: i },
                  _react2.default.createElement(Component, null)
                )
              )
            )
          )
        );
      })
    )
  );
};

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleFonts = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _webfont = __webpack_require__(321);

var _webfont2 = _interopRequireDefault(_webfont);

var _styledComponents = __webpack_require__(95);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoogleFonts = exports.GoogleFonts = (0, _styledComponents.withTheme)(function (_ref) {
  var theme = _ref.theme;

  var links = [_webfont2.default.getURL(theme.font || '', theme.weights), _webfont2.default.getURL(theme.monospace || '')].filter(Boolean);
  if (!links.length) return false;
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    links.map(function (href, i) {
      return _react2.default.createElement('link', {
        key: i,
        href: href,
        rel: 'stylesheet'
      });
    })
  );
});

exports.default = GoogleFonts;

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

const fonts = __webpack_require__(322)

const apiURL = 'https://fonts.googleapis.com/css'

const getName = stack => stack.split(',')[0].replace(/["']/g, '')

const plusify = name => name.replace(/\s/g, '+')

const isWebfont = name => fonts.includes(getName(name))

const getURL = (stack, weights = []) => {
  const name = getName(stack)
  if (!isWebfont(name)) return false

  const family = weights.length
    ? [plusify(name), weights.join(',') ].join(':')
    : plusify(name)

  return [apiURL, '?family=', family].join('')
}

const getLinkTag = (stack, weights) => {
  const fontURL = getURL(stack, weights)
  if (!fontURL) return false

  return `<link rel='stylesheet' href='${fontURL}'>`
}

module.exports = {
  fonts,
  apiURL,
  plusify,
  isWebfont,
  getURL,
  getLinkTag
}


/***/ }),
/* 322 */
/***/ (function(module, exports) {

module.exports = ["Roboto","Open Sans","Lato","Montserrat","Roboto Condensed","Oswald","Source Sans Pro","Raleway","Slabo 27px","Merriweather","PT Sans","Roboto Slab","Open Sans Condensed","Ubuntu","Noto Sans","Poppins","Playfair Display","Roboto Mono","Lora","PT Serif","Titillium Web","Muli","Arimo","Fira Sans","PT Sans Narrow","Nunito","Noto Serif","Inconsolata","Nanum Gothic","Indie Flower","Work Sans","Dosis","Crimson Text","Josefin Sans","Quicksand","Anton","Bitter","Oxygen","Libre Baskerville","Arvo","Cabin","Hind","Fjalla One","Rubik","Lobster","Libre Franklin","Exo 2","Karla","Pacifico","Abel","Yanone Kaffeesatz","Shadows Into Light","Varela Round","Merriweather Sans","Dancing Script","Abril Fatface","Bree Serif","Nunito Sans","Hind Siliguri","Asap","Acme","Ubuntu Condensed","Source Serif Pro","Source Code Pro","Questrial","Archivo Narrow","Amatic SC","Play","Exo","Kanit","Merienda","Signika","Gloria Hallelujah","Comfortaa","Maven Pro","Francois One","EB Garamond","Cairo","Teko","Righteous","Crete Round","Encode Sans Condensed","PT Sans Caption","Patua One","Permanent Marker","Ropa Sans","Vollkorn","Rajdhani","Catamaran","Cinzel","Heebo","Cuprum","Rokkitt","Alegreya","Russo One","Pathway Gothic One","Poiret One","Domine","Courgette","Concert One","Satisfy","Great Vibes","Old Standard TT","Cookie","ABeeZee","Kaushan Script","Cardo","Prompt","Fira Sans Condensed","Noticia Text","Monoton","Quattrocento Sans","Orbitron","Archivo Black","Assistant","Philosopher","Arapey","Alegreya Sans","Istok Web","Hind Madurai","Khand","Lobster Two","Yantramanav","Amiri","News Cycle","Caveat","Quattrocento","Fredoka One","Volkhov","Tinos","Monda","Josefin Slab","Cormorant Garamond","Nanum Myeongjo","Passion One","Playfair Display SC","Basic","Jura","Didact Gothic","Economica","Sacramento","Oleo Script","Alfa Slab One","Boogaloo","Tangerine","Pontano Sans","Khula","Handlee","Kalam","Luckiest Guy","Gudea","BenchNine","Bad Script","Bangers","Cabin Condensed","Hammersmith One","Patrick Hand","Neuton","Barlow","Sanchez","Covered By Your Grace","Hind Vadodara","Fira Sans Extra Condensed","Armata","Prosto One","Forum","Amaranth","Cantarell","Audiowide","Ruda","Glegoo","Ultra","Eczar","Vidaloka","Zilla Slab","Unica One","Marck Script","Electrolize","Pragati Narrow","Black Ops One","Gochi Hand","Yellowtail","Gentium Basic","Frank Ruhl Libre","Yrsa","Architects Daughter","Barlow Semi Condensed","Chivo","Signika Negative","Enriqueta","Prata","Sorts Mill Goudy","Overpass","Antic Slab","Changa","Sigmar One","Kreon","Arsenal","Cabin Sketch","Allerta","Special Elite","PT Mono","Julius Sans One","Aldrich","Alice","Barlow Condensed","Rasa","Shadows Into Light Two","Advent Pro","Arbutus Slab","Nobile","Neucha","Damion","Hind Guntur","Rancho","Paytone One","Martel","Molengo","Sintony","Homemade Apple","Bevan","Montserrat Alternates","Gentium Book Basic","Adamina","Scada","Playball","Actor","Varela","Lusitana","Nothing You Could Do","Lalezar","Allura","Shrikhand","Chewy","Jaldi","Fugaz One","Rock Salt","Rambla","Rufina","Parisienne","PT Serif Caption","Sarala","Lustria","Coda","Alex Brush","Space Mono","Share","Caveat Brush","Michroma","Press Start 2P","Carter One","Bungee Inline","Antic","Spinnaker","Alegreya Sans SC","Ovo","Cantata One","Ubuntu Mono","Slabo 13px","Hanuman","Herr Von Muellerhoff","Do Hyeon","Itim","Titan One","Halant","Jockey One","Fredericka the Great","Karma","Tajawal","Coustard","Saira Semi Condensed","Mr Dafoe","Hanalei Fill","Viga","Squada One","Coming Soon","Marcellus","Niconne","Taviraj","Overlock","Cousine","Just Another Hand","Lekton","Quantico","Magra","Oranienbaum","Syncopate","Marcellus SC","Palanquin Dark","Candal","Kameron","IBM Plex Sans","Kelly Slab","Pinyon Script","Leckerli One","Days One","Radley","Contrail One","Nanum Pen Script","Archivo","Corben","Saira","Cormorant","Pridi","Ceviche One","Lateef","Reenie Beanie","Changa One","Berkshire Swash","Voltaire","Fauna One","Freckle Face","Italianno","Skranji","Allan","Knewave","Alef","Marvel","Headland One","VT323","Telex","Baloo","Palanquin","Allerta Stencil","Rochester","El Messiri","Scheherazade","Carrois Gothic","Six Caps","Bungee","Tenor Sans","Love Ya Like A Sister","Anonymous Pro","Grand Hotel","Arima Madurai","Spectral","Carme","Copse","Goudy Bookletter 1911","Saira Extra Condensed","Unna","Abhaya Libre","Nanum Gothic Coding","Cinzel Decorative","Andika","Reem Kufi","Coda Caption","Mitr","Nixie One","Average","Alegreya SC","Bowlby One SC","Asap Condensed","Nanum Brush Script","Mukta","Marmelad","Londrina Solid","Rosario","Annie Use Your Telescope","Mada","Lilita One","Yesteryear","Martel Sans","Aclonica","Average Sans","Homenaje","Preahvihear","Tauri","Petit Formal Script","Wendy One","Limelight","GFS Didot","Racing Sans One","Calligraffitti","Cutive","Buenard","Kurale","Metrophobic","Judson","Faster One","Yatra One","Puritan","Andada","Biryani","Laila","Fanwood Text","Averia Serif Libre","Fira Mono","Pangolin","Caudex","Norican","Cambo","Saira Condensed","Yeseva One","Bubblegum Sans","Share Tech Mono","Raleway Dots","Graduate","Gilda Display","Schoolbell","Balthazar","Inder","Convergence","Doppio One","Mukta Vaani","Gruppo","Arizonia","Chelsea Market","Shojumaru","Delius","Quando","Merienda One","Rammetto One","Oxygen Mono","Give You Glory","Ruslan Display","Vesper Libre","Pompiere","Overpass Mono","Trocchi","Mr De Haviland","Kristi","Mirza","Happy Monkey","Capriola","Sue Ellen Francisco","Trirong","Aladin","MedievalSharp","Oregano","Montez","Proza Libre","David Libre","Frijole","Belleza","Eater","Alike","Sura","Cambay","The Girl Next Door","IM Fell Double Pica","Zeyada","Modern Antiqua","Fontdiner Swanky","Maitree","Cormorant SC","Prociono","Poly","Baumans","Lemonada","Wire One","Strait","Baloo Paaji","Bentham","Mate","Federo","Seaweed Script","Vast Shadow","IM Fell English","Megrim","Baloo Bhaina","Mako","Gabriela","Cutive Mono","Qwigley","Rye","Krona One","Duru Sans","Miriam Libre","Expletus Sans","Fjord One","Rouge Script","Suez One","Encode Sans","Meddon","Walter Turncoat","Secular One","Gravitas One","Mouse Memoirs","Brawler","Battambang","Stardos Stencil","Gurajada","Waiting for the Sunrise","Bilbo Swash Caps","Fondamento","IM Fell DW Pica","Podkova","Lily Script One","La Belle Aurore","Anaheim","Crafty Girls","Pattaya","Carrois Gothic SC","Delius Swash Caps","Imprima","Cherry Swash","Short Stack","Gafata","Emilys Candy","Amiko","Cedarville Cursive","Orienta","Patrick Hand SC","Dawning of a New Day","Port Lligat Slab","Harmattan","Sriracha","Iceland","Oleo Script Swash Caps","Loved by the King","Artifika","Clicker Script","Bowlby One","Dorsa","Rozha One","Sofia","Just Me Again Down Here","Vampiro One","Sunflower","Unkempt","Lemon","NTR","UnifrakturMaguntia","Gothic A1","Sumana","Khmer","Cantora One","Belgrano","Crushed","Holtwood One SC","Salsa","Nova Mono","Spirax","Life Savers","Chonburi","Suranna","Euphoria Script","Londrina Outline","Amethysta","Ledger","Athiti","Sansita","Tienne","Denk One","Bungee Shade","Finger Paint","Condiment","Aguafina Script","Rubik Mono One","Sniglet","IBM Plex Serif","Voces","Wallpoet","Medula One","Creepster","Cherry Cream Soda","Vibur","Engagement","Over the Rainbow","Shanti","Kotta One","Ramabhadra","IM Fell English SC","Markazi Text","Galada","Cormorant Infant","Sarpanch","Slackey","Rakkas","Alike Angular","Katibeh","Nova Square","Share Tech","Fenix","Montserrat Subrayada","Codystar","Flamenco","McLaren","Rationale","Bellefair","Averia Sans Libre","Cagliostro","Almendra","Numans","Dynalight","Elsie","Geo","Amita","Nova Round","Spectral SC","Chau Philomene One","Mukta Malar","Scope One","Habibi","Germania One","Tulpen One","Timmana","Nova Slim","Angkor","IBM Plex Sans Condensed","Nosifer","Mrs Saint Delafield","Coiny","Koulen","Milonga","Chela One","Junge","Dekko","Sail","Stint Ultra Expanded","Mallanna","Faustina","Stalemate","Simonetta","Pirata One","Rosarivo","Antic Didone","Bubbler One","Quintessential","Mate SC","Averia Libre","Baloo Tamma","Baloo Chettan","Poller One","Delius Unicase","Mogra","Sarina","Encode Sans Semi Condensed","Kite One","Bokor","Metamorphous","Kranky","Port Lligat Sans","Kadwa","Princess Sofia","Kavoon","Ranga","Donegal One","Buda","Mystery Quest","Pavanam","Encode Sans Semi Expanded","Asul","Stint Ultra Condensed","League Script","Stoke","Maiden Orange","Rhodium Libre","Mandali","Paprika","Arya","Jim Nightshade","Aref Ruqaa","Ribeye","Amarante","Atma","Overlock SC","Italiana","Sancreek","Text Me One","Peralta","Baloo Bhai","Redressed","IM Fell French Canon","Cormorant Upright","Linden Hill","Esteban","Content","Swanky and Moo Moo","Padauk","Bilbo","Joti One","Mountains of Christmas","Sonsie One","Inika","Sedgwick Ave","Averia Gruesa Libre","Ruluko","Ranchers","Farsan","Baloo Bhaijaan","Mukta Mahee","Trade Winds","Encode Sans Expanded","Fresca","Galindo","Miniver","Baloo Thambi","Lovers Quarrel","Englebert","Cormorant Unicase","Odor Mean Chey","Uncial Antiqua","Revalia","Croissant One","Plaster","Dangrek","Manuale","Modak","Offside","Flavors","BioRhyme","Glass Antiqua","Wellfleet","Julee","IM Fell Great Primer","Sree Krushnadevaraya","Black Han Sans","Smythe","Ruthie","Miltonian Tattoo","Griffy","Irish Grover","Della Respira","Eagle Lake","Galdeano","Henny Penny","Metal","Jua","Monsieur La Doulaise","Marko One","New Rocker","Ewert","Autour One","Chicle","Monofett","Nova Flat","Metal Mania","Inknut Antiqua","Gugi","Zilla Slab Highlight","Purple Purse","Diplomata","Song Myung","IM Fell Double Pica SC","Mina","UnifrakturCook","Kavivanar","IM Fell DW Pica SC","Petrona","Iceberg","Spicy Rice","Fascinate Inline","Snowburst One","IBM Plex Mono","Gaegu","Jomhuria","Elsie Swash Caps","Lancelot","Trykker","Rum Raisin","Snippet","Chango","Asset","Keania One","Akronim","Oldenburg","Sahitya","Bigshot One","Original Surfer","Montaga","Jacques Francois Shadow","Mrs Sheppards","Devonshire","Kirang Haerang","Ribeye Marrow","Piedra","Atomic Age","Tillana","Ravi Prakash","Goblin One","Meie Script","Lakki Reddy","Underdog","Molle","Nokora","Diplomata SC","Suwannaphum","GFS Neohellenic","Asar","Felipa","Hi Melody","Ramaraja","Meera Inimai","IM Fell French Canon SC","Barrio","Siemreap","Combo","Ruge Boogie","Kantumruy","Seymour One","Kumar One","Caesar Dressing","Sunshiney","Stalinist One","Jacques Francois","Kenia","Bayon","Dr Sugiyama","Macondo","Bahiana","IM Fell Great Primer SC","Chathura","Moul","Bungee Outline","Londrina Shadow","Astloch","Geostar Fill","Nova Oval","Margarine","Arbutus","Freehand","Almendra Display","Vollkorn SC","Almendra SC","Smokum","Jolly Lodger","Trochut","Romanesco","Nova Script","Libre Barcode 39 Extended Text","Fruktur","Risque","Sirin Stencil","Fascinate","Sedgwick Ave Display","Nova Cut","Tenali Ramakrishna","Supermercado One","Warnes","Gorditas","Erica One","Bigelow Rules","Kdam Thmor","Baloo Da","Taprom","Passero One","Butterfly Kids","Geostar","Butcherman","Macondo Swash Caps","Bonbon","Miltonian","Miss Fajardose","Sevillana","Bungee Hairline","Federant","Sofadi One","Peddana","Chenla","Londrina Sketch","Mr Bedfort","Aubrey","Unlock","Poor Story","Libre Barcode 39 Text","Baloo Tammudu","Gidugu","Gamja Flower","Emblema One","Dhurjati","Suravaram","Libre Barcode 128","Hanalei","Moulpali","Fasthand","Libre Barcode 39 Extended","East Sea Dokdo","BioRhyme Expanded","Cute Font","Libre Barcode 39","Stylish","Libre Barcode 128 Text","Kumar One Outline","Yeon Sung","Dokdo","Black And White Picture"]

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = __webpack_require__(219);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _base2.default, {
  colors: {
    text: '#fff',
    background: '#000',
    link: '#08f',
    pre: '#f0f',
    preBackground: '#333',
    code: '#f0f'
  }
});

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = __webpack_require__(219);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blue = '#0af';

exports.default = _extends({}, _base2.default, {
  font: '"Avenir Next", system-ui, sans-serif',
  colors: {
    text: '#fff',
    background: '#111',
    blue: blue,
    link: blue,
    pre: blue,
    preBackground: '#000',
    code: blue
  },
  heading: {
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: 600
  },
  quote: {
    fontWeight: 600
  }
});

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = __webpack_require__(219);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blue = '#0af';

exports.default = _extends({}, _base2.default, {
  font: '"Roboto Condensed", system-ui, sans-serif',
  monospace: '"Roboto Mono", monospace',
  colors: {
    text: '#fff',
    background: '#000',
    link: blue,
    pre: blue,
    preBackground: '#111',
    code: blue
  },
  heading: {
    textTransform: 'uppercase',
    fontWeight: 600
  },
  quote: {
    fontWeight: 600
  }
});

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = __webpack_require__(219);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var yellow = '#fd0';

exports.default = _extends({}, _base2.default, {
  font: '"Roboto Condensed", system-ui, sans-serif',
  weights: [400, 700],
  monospace: '"Roboto Mono", monospace',
  colors: {
    text: '#000',
    background: yellow,
    link: '#333',
    pre: yellow,
    preBackground: '#000',
    code: yellow,
    codeBackground: '#000'
  },
  heading: {
    textTransform: 'uppercase',
    fontWeight: 700
  },
  blockquote: {
    fontWeight: 700
  },
  pre: {
    textAlign: 'left'
  }
});

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = __webpack_require__(219);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var white = '#fff';
var black = '#000';
var blue = '#2d5dd7';
var red = '#f00';

exports.default = _extends({}, _base2.default, {
  font: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  colors: {
    text: black,
    background: white,
    link: red
  },
  css: {
    textAlign: 'left',
    fontSize: '16px',
    '@media screen and (min-width:64em)': {
      fontSize: '32px'
    },
    '& .Slide > div': {
      minWidth: '80vw',
      minHeight: '60vh'
    }
  }
});

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = __webpack_require__(219);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var white = '#fffceb';
var black = '#11111f';
var blue = '#2d5dd7';

exports.default = _extends({}, _base2.default, {
  font: '"Crimson Text", serif',
  colors: {
    text: black,
    background: white,
    link: blue
  },
  css: {
    textAlign: 'left',
    fontSize: '16px',
    '@media screen and (min-width:64em)': {
      fontSize: '32px'
    },
    '& .Slide > div': {
      minWidth: '80vw',
      minHeight: '60vh'
    }
  }
});

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = __webpack_require__(219);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cream = '#fe9';
var black = '#320';

exports.default = _extends({}, _base2.default, {
  font: '"Yellowtail", cursive',
  monospace: '"Roboto Mono", Menlo, monospace',
  colors: {
    text: black,
    background: cream,
    link: black
  },
  css: {
    fontSize: '16px',
    textAlign: 'center',
    '@media screen and (min-width:64em)': {
      fontSize: '48px'
    }
  }
});

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = __webpack_require__(219);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var white = '#fffceb';
var black = '#351e38';
var blue = '#2d5dd7';

exports.default = _extends({}, _base2.default, {
  font: '"Gloria Hallelujah", cursive',
  colors: {
    text: black,
    background: white,
    link: blue
  }
});

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = __webpack_require__(219);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _base2.default, {
  font: '"Annie Use Your Telescope", cursive',
  css: {
    fontSize: '16px',
    textAlign: 'center',
    '@media screen and (min-width:64em)': {
      fontSize: '40px'
    }
  }
});

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = __webpack_require__(219);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blue = '#00cdf1';
var black = '#003d48';
var link = '#0800e3';

exports.default = _extends({}, _base2.default, {
  font: '"Source Code Pro", monospace',
  monospace: '"Source Code Pro", monospace',
  colors: {
    text: black,
    background: blue,
    link: link,
    pre: blue,
    preBackground: black
  }
});

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = __webpack_require__(219);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var text = '#220011';

exports.default = _extends({}, _base2.default, {
  font: 'Lobster, cursive',
  monospace: '"Roboto Mono", monospace',
  colors: {
    text: text,
    background: 'tomato',
    link: text
  }
});

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = __webpack_require__(219);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var green = '#42ff71';

exports.default = _extends({}, _base2.default, {
  font: '"IBM Plex Mono", monospace',
  monospace: '"IBM Plex Mono", monospace',
  colors: {
    text: green,
    background: '#000',
    link: green,
    pre: '#000',
    preBackground: green,
    code: '#000',
    codeBackground: green
  },
  css: {
    textAlign: 'left',
    fontSize: '16px',
    '@media screen and (min-width:64em)': {
      fontSize: '32px'
    },
    '& .Slide > div': {
      minWidth: '80vw',
      minHeight: '60vh'
    }
  }
});

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = __webpack_require__(219);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var white = '#ffeec1';

exports.default = _extends({}, _base2.default, {
  font: '"Rye", serif',
  monospace: '"Roboto Mono", monospace',
  colors: {
    text: white,
    background: 'black',
    link: white
  },
  h1: {
    textTransform: 'uppercase'
  }
});

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = __webpack_require__(219);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blue = '#0af';

exports.default = _extends({}, _base2.default, {
  font: '"Bowlby One SC", sans-serif',
  colors: {
    text: '#dff',
    background: '#011',
    blue: blue,
    link: blue,
    pre: blue,
    preBackground: '#000',
    code: blue
  },
  heading: {
    fontWeight: 600
  },
  quote: {
    fontWeight: 600
  }
});

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerLanguage = undefined;

var _highlight = __webpack_require__(338);

var _highlight2 = _interopRequireDefault(_highlight);

var _core = __webpack_require__(369);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerLanguage = exports.registerLanguage = function registerLanguage(_, language) {
  return _core2.default.register(language);
};
exports.default = (0, _highlight2.default)(_core2.default, {});

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(339);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = __webpack_require__(246);

var _assign2 = _interopRequireDefault(_assign);

exports.default = function (astGenerator, defaultStyle) {
  return function SyntaxHighlighter(_ref6) {
    var language = _ref6.language,
        children = _ref6.children,
        _ref6$style = _ref6.style,
        style = _ref6$style === undefined ? defaultStyle : _ref6$style,
        _ref6$customStyle = _ref6.customStyle,
        customStyle = _ref6$customStyle === undefined ? {} : _ref6$customStyle,
        _ref6$codeTagProps = _ref6.codeTagProps,
        codeTagProps = _ref6$codeTagProps === undefined ? { style: style['code[class*=\"language-\"]'] } : _ref6$codeTagProps,
        _ref6$useInlineStyles = _ref6.useInlineStyles,
        useInlineStyles = _ref6$useInlineStyles === undefined ? true : _ref6$useInlineStyles,
        _ref6$showLineNumbers = _ref6.showLineNumbers,
        showLineNumbers = _ref6$showLineNumbers === undefined ? false : _ref6$showLineNumbers,
        _ref6$startingLineNum = _ref6.startingLineNumber,
        startingLineNumber = _ref6$startingLineNum === undefined ? 1 : _ref6$startingLineNum,
        lineNumberContainerStyle = _ref6.lineNumberContainerStyle,
        lineNumberStyle = _ref6.lineNumberStyle,
        wrapLines = _ref6.wrapLines,
        _ref6$lineProps = _ref6.lineProps,
        lineProps = _ref6$lineProps === undefined ? {} : _ref6$lineProps,
        renderer = _ref6.renderer,
        _ref6$PreTag = _ref6.PreTag,
        PreTag = _ref6$PreTag === undefined ? 'pre' : _ref6$PreTag,
        _ref6$CodeTag = _ref6.CodeTag,
        CodeTag = _ref6$CodeTag === undefined ? 'code' : _ref6$CodeTag,
        _ref6$code = _ref6.code,
        code = _ref6$code === undefined ? Array.isArray(children) ? children[0] : children : _ref6$code,
        rest = (0, _objectWithoutProperties3.default)(_ref6, ['language', 'children', 'style', 'customStyle', 'codeTagProps', 'useInlineStyles', 'showLineNumbers', 'startingLineNumber', 'lineNumberContainerStyle', 'lineNumberStyle', 'wrapLines', 'lineProps', 'renderer', 'PreTag', 'CodeTag', 'code']);

    /* 
     * some custom renderers rely on individual row elements so we need to turn wrapLines on 
     * if renderer is provided and wrapLines is undefined
    */
    wrapLines = renderer && wrapLines === undefined ? true : wrapLines;
    renderer = renderer || defaultRenderer;
    var defaultCodeValue = [{ type: 'text', value: code }];
    var codeTree = getCodeTree({ astGenerator: astGenerator, language: language, code: code, defaultCodeValue: defaultCodeValue });
    if (codeTree.language === null) {
      codeTree.value = defaultCodeValue;
    }
    var defaultPreStyle = style.hljs || style['pre[class*=\"language-\"]'] || { backgroundColor: '#fff' };
    var preProps = useInlineStyles ? (0, _assign2.default)({}, rest, { style: (0, _assign2.default)({}, defaultPreStyle, customStyle) }) : (0, _assign2.default)({}, rest, { className: 'hljs' });
    var tree = wrapLines ? wrapLinesInSpan(codeTree, lineProps) : codeTree.value;
    var lineNumbers = showLineNumbers ? _react2.default.createElement(LineNumbers, {
      containerStyle: lineNumberContainerStyle,
      codeStyle: codeTagProps.style || {},
      numberStyle: lineNumberStyle,
      startingLineNumber: startingLineNumber,
      codeString: code
    }) : null;
    return _react2.default.createElement(
      PreTag,
      preProps,
      lineNumbers,
      _react2.default.createElement(
        CodeTag,
        codeTagProps,
        renderer({ rows: tree, stylesheet: style, useInlineStyles: useInlineStyles })
      )
    );
  };
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createElement = __webpack_require__(367);

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newLineRegex = /\n/g;
function getNewLines(str) {
  return str.match(newLineRegex);
}

function getLineNumbers(_ref) {
  var lines = _ref.lines,
      startingLineNumber = _ref.startingLineNumber,
      style = _ref.style;

  return lines.map(function (_, i) {
    var number = i + startingLineNumber;
    return _react2.default.createElement(
      'span',
      {
        key: 'line-' + i,
        className: 'react-syntax-highlighter-line-number',
        style: typeof style === 'function' ? style(number) : style
      },
      number + '\n'
    );
  });
}

function LineNumbers(_ref2) {
  var codeString = _ref2.codeString,
      codeStyle = _ref2.codeStyle,
      _ref2$containerStyle = _ref2.containerStyle,
      containerStyle = _ref2$containerStyle === undefined ? { float: 'left', paddingRight: '10px' } : _ref2$containerStyle,
      _ref2$numberStyle = _ref2.numberStyle,
      numberStyle = _ref2$numberStyle === undefined ? {} : _ref2$numberStyle,
      startingLineNumber = _ref2.startingLineNumber;

  return _react2.default.createElement(
    'code',
    { style: (0, _assign2.default)({}, codeStyle, containerStyle) },
    getLineNumbers({
      lines: codeString.replace(/\n$/, '').split('\n'),
      style: numberStyle,
      startingLineNumber: startingLineNumber
    })
  );
}

function createLineElement(_ref3) {
  var children = _ref3.children,
      lineNumber = _ref3.lineNumber,
      lineProps = _ref3.lineProps,
      _ref3$className = _ref3.className,
      className = _ref3$className === undefined ? [] : _ref3$className;

  var properties = (typeof lineProps === 'function' ? lineProps(lineNumber) : lineProps) || {};
  properties.className = properties.className ? className.concat(properties.className) : className;
  return {
    type: 'element',
    tagName: 'span',
    properties: properties,
    children: children
  };
}

function flattenCodeTree(tree) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var newTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];
    if (node.type === 'text') {
      newTree.push(createLineElement({
        children: [node],
        className: className
      }));
    } else if (node.children) {
      var classNames = className.concat(node.properties.className);
      newTree = newTree.concat(flattenCodeTree(node.children, classNames));
    }
  }
  return newTree;
}

function wrapLinesInSpan(codeTree, lineProps) {
  var tree = flattenCodeTree(codeTree.value);
  var newTree = [];
  var lastLineBreakIndex = -1;
  var index = 0;

  var _loop = function _loop() {
    var node = tree[index];
    var value = node.children[0].value;
    var newLines = getNewLines(value);
    if (newLines) {
      var splitValue = value.split('\n');
      splitValue.forEach(function (text, i) {
        var lineNumber = newTree.length + 1;
        var newChild = { type: 'text', value: text + '\n' };
        if (i === 0) {
          var _children = tree.slice(lastLineBreakIndex + 1, index).concat(createLineElement({ children: [newChild], className: node.properties.className }));
          newTree.push(createLineElement({ children: _children, lineNumber: lineNumber, lineProps: lineProps }));
        } else if (i === splitValue.length - 1) {
          var stringChild = tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0];
          if (stringChild) {
            var lastLineInPreviousSpan = { type: 'text', value: '' + text };
            var newElem = createLineElement({ children: [lastLineInPreviousSpan], className: node.properties.className });
            tree.splice(index + 1, 0, newElem);
          } else {
            newTree.push(createLineElement({ children: [newChild], lineNumber: lineNumber, lineProps: lineProps, className: node.properties.className }));
          }
        } else {
          newTree.push(createLineElement({ children: [newChild], lineNumber: lineNumber, lineProps: lineProps, className: node.properties.className }));
        }
      });
      lastLineBreakIndex = index;
    }
    index++;
  };

  while (index < tree.length) {
    _loop();
  }
  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);
    if (children && children.length) {
      newTree.push(createLineElement({ children: children, lineNumber: newTree.length + 1, lineProps: lineProps }));
    }
  }
  return newTree;
}

function defaultRenderer(_ref4) {
  var rows = _ref4.rows,
      stylesheet = _ref4.stylesheet,
      useInlineStyles = _ref4.useInlineStyles;

  return rows.map(function (node, i) {
    return (0, _createElement2.default)({
      node: node,
      stylesheet: stylesheet,
      useInlineStyles: useInlineStyles,
      key: 'code-segement' + i
    });
  });
}

function getCodeTree(_ref5) {
  var astGenerator = _ref5.astGenerator,
      language = _ref5.language,
      code = _ref5.code,
      defaultCodeValue = _ref5.defaultCodeValue;

  if (astGenerator.getLanguage) {
    var hasLanguage = language && astGenerator.getLanguage(language);
    if (language === 'text') {
      return { value: defaultCodeValue, language: 'text' };
    } else if (hasLanguage) {
      return astGenerator.highlight(language, code);
    } else {
      return astGenerator.highlightAuto(code);
    }
  }
  try {
    return language && language !== 'text' ? { value: astGenerator.highlight(code, language) } : { value: defaultCodeValue };
  } catch (e) {
    return { value: defaultCodeValue };
  }
}

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(341);
module.exports = __webpack_require__(248).Object.assign;


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(342);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(352) });


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(247);
var core = __webpack_require__(248);
var ctx = __webpack_require__(343);
var hide = __webpack_require__(345);
var has = __webpack_require__(269);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(344);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 344 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(346);
var createDesc = __webpack_require__(351);
module.exports = __webpack_require__(250) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(347);
var IE8_DOM_DEFINE = __webpack_require__(348);
var toPrimitive = __webpack_require__(350);
var dP = Object.defineProperty;

exports.f = __webpack_require__(250) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(249);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(250) && !__webpack_require__(251)(function () {
  return Object.defineProperty(__webpack_require__(349)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(249);
var document = __webpack_require__(247).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(249);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 351 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(353);
var gOPS = __webpack_require__(364);
var pIE = __webpack_require__(365);
var toObject = __webpack_require__(366);
var IObject = __webpack_require__(271);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(251)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(354);
var enumBugKeys = __webpack_require__(363);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(269);
var toIObject = __webpack_require__(270);
var arrayIndexOf = __webpack_require__(356)(false);
var IE_PROTO = __webpack_require__(359)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 355 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(270);
var toLength = __webpack_require__(357);
var toAbsoluteIndex = __webpack_require__(358);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(273);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(273);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(360)('keys');
var uid = __webpack_require__(362);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(248);
var global = __webpack_require__(247);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(361) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 361 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 362 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 363 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 364 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 365 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(272);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(246);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(368);

var _extends3 = _interopRequireDefault(_extends2);

exports.createStyleObject = createStyleObject;
exports.createClassNameString = createClassNameString;
exports.createChildren = createChildren;
exports.default = createElement;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var stylesheet = arguments[2];

  return classNames.reduce(function (styleObject, className) {
    return (0, _extends3.default)({}, styleObject, stylesheet[className]);
  }, elementStyle);
}

function createClassNameString(classNames) {
  return classNames.join(' ');
}

function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function (children) {
    childrenCount += 1;
    return children.map(function (child, i) {
      return createElement({
        node: child,
        stylesheet: stylesheet,
        useInlineStyles: useInlineStyles,
        key: 'code-segment-' + childrenCount + '-' + i
      });
    });
  };
}

function createElement(_ref) {
  var node = _ref.node,
      stylesheet = _ref.stylesheet,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      useInlineStyles = _ref.useInlineStyles,
      key = _ref.key;
  var properties = node.properties,
      type = node.type,
      TagName = node.tagName,
      value = node.value;

  if (type === 'text') {
    return value;
  } else if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles);
    var nonStylesheetClassNames = useInlineStyles && properties.className && properties.className.filter(function (className) {
      return !stylesheet[className];
    });
    var className = nonStylesheetClassNames && nonStylesheetClassNames.length ? nonStylesheetClassNames : undefined;
    var props = useInlineStyles ? (0, _extends3.default)({}, properties, { className: className }, {
      style: createStyleObject(properties.className, (0, _assign2.default)({}, properties.style, style), stylesheet)
    }) : (0, _extends3.default)({}, properties, { className: createClassNameString(properties.className) });
    var children = childrenCreator(node.children);
    return _react2.default.createElement(
      TagName,
      (0, _extends3.default)({ key: key }, props),
      children
    );
  }
}

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(246);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/* global window, self */

var restore = capture()

// istanbul ignore next - Don't allow Prism to run on page load in browser or
// to start messaging from workers.
var ctx =
  typeof window === 'undefined'
    ? typeof self === 'undefined'
      ? {}
      : self
    : window

ctx.Prism = {manual: true, disableWorkerMessageHandler: true}

/* Load all stuff in `prism.js` itself, except for
 * `prism-file-highlight.js`.
 * The wrapped non-leaky grammars are loaded instead of
 * Prism’s originals. */
var h = __webpack_require__(370)
var decode = __webpack_require__(239)
var Prism = __webpack_require__(390)
var markup = __webpack_require__(391)
var css = __webpack_require__(392)
var clike = __webpack_require__(393)
var js = __webpack_require__(279)

restore()

var own = {}.hasOwnProperty

/* Inherit. */
function Refractor() {}

Refractor.prototype = Prism

/* Construct. */
var refract = new Refractor()

/* Expose. */
module.exports = refract

/* Create. */
refract.highlight = highlight
refract.register = register
refract.registered = registered

/* Register bundled grammars. */
register(markup)
register(css)
register(clike)
register(js)

refract.util.encode = encode
refract.Token.stringify = stringify

function register(grammar) {
  if (typeof grammar !== 'function' || !grammar.displayName) {
    throw new Error('Expected `function` for `grammar`, got `' + grammar + '`')
  }

  /* Do not duplicate registrations. */
  if (refract.languages[grammar.displayName] === undefined) {
    grammar(refract)
  }
}

function highlight(value, name) {
  var sup = Prism.highlight
  var grammar

  if (typeof value !== 'string') {
    throw new Error('Expected `string` for `value`, got `' + value + '`')
  }

  /* `name` is a grammar object */
  if (refract.util.type(name) === 'Object') {
    grammar = name
    name = null
  } else {
    if (typeof name !== 'string') {
      throw new Error('Expected `string` for `name`, got `' + name + '`')
    }

    if (own.call(refract.languages, name)) {
      grammar = refract.languages[name]
    } else {
      throw new Error('Unknown language: `' + name + '` is not registered')
    }
  }

  return sup.call(this, value, grammar, name)
}

function registered(language) {
  if (typeof language !== 'string') {
    throw new Error('Expected `string` for `language`, got `' + language + '`')
  }

  return own.call(refract.languages, language)
}

function stringify(value, language, parent) {
  var env

  if (typeof value === 'string') {
    return {type: 'text', value: value}
  }

  if (refract.util.type(value) === 'Array') {
    return stringifyAll(value, language)
  }

  env = {
    type: value.type,
    content: refract.Token.stringify(value.content, language, parent),
    tag: 'span',
    classes: ['token', value.type],
    attributes: {},
    language: language,
    parent: parent
  }

  if (value.alias) {
    env.classes = env.classes.concat(value.alias)
  }

  refract.hooks.run('wrap', env)

  return h(
    env.tag + '.' + env.classes.join('.'),
    attributes(env.attributes),
    env.content
  )
}

function stringifyAll(values, language) {
  var result = []
  var length = values.length
  var index = -1
  var value

  while (++index < length) {
    value = values[index]

    if (value !== '' && value !== null && value !== undefined) {
      result.push(value)
    }
  }

  index = -1
  length = result.length

  while (++index < length) {
    value = result[index]
    result[index] = refract.Token.stringify(value, language, result)
  }

  return result
}

function encode(tokens) {
  return tokens
}

function attributes(attrs) {
  var key

  for (key in attrs) {
    attrs[key] = decode(attrs[key])
  }

  return attrs
}

function capture() {
  var defined = 'Prism' in global
  /* istanbul ignore next */
  var current = defined ? global.Prism : undefined

  return restore

  function restore() {
    /* istanbul ignore else - Clean leaks after Prism. */
    if (defined) {
      global.Prism = current
    } else {
      delete global.Prism
    }

    defined = undefined
    current = undefined
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(371)


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var schema = __webpack_require__(372)
var factory = __webpack_require__(380)

var html = factory(schema, 'div')
html.displayName = 'html'

module.exports = html


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(373)
var xlink = __webpack_require__(374)
var xml = __webpack_require__(375)
var xmlns = __webpack_require__(376)
var aria = __webpack_require__(378)
var html = __webpack_require__(379)

module.exports = merge([xml, xlink, xmlns, aria, html])


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(226)
var Schema = __webpack_require__(274)

module.exports = merge

function merge(definitions) {
  var length = definitions.length
  var property = []
  var normal = []
  var index = -1
  var info
  var space

  while (++index < length) {
    info = definitions[index]
    property.push(info.property)
    normal.push(info.normal)
    space = info.space
  }

  return new Schema(
    xtend.apply(null, property),
    xtend.apply(null, normal),
    space
  )
}


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(233)

module.exports = create({
  space: 'xlink',
  transform: xlinkTransform,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
})

function xlinkTransform(_, prop) {
  return 'xlink:' + prop.slice(5).toLowerCase()
}


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(233)

module.exports = create({
  space: 'xml',
  transform: xmlTransform,
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
})

function xmlTransform(_, prop) {
  return 'xml:' + prop.slice(3).toLowerCase()
}


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(233)
var caseInsensitiveTransform = __webpack_require__(277)

module.exports = create({
  space: 'xmlns',
  attributes: {
    xmlnsxlink: 'xmlns:xlink'
  },
  transform: caseInsensitiveTransform,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
})


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = caseSensitiveTransform

function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute
}


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(253)
var create = __webpack_require__(233)

var booleanish = types.booleanish
var number = types.number
var spaceSeparated = types.spaceSeparated

module.exports = create({
  transform: ariaTransform,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
})

function ariaTransform(_, prop) {
  return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase()
}


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(253)
var create = __webpack_require__(233)
var caseInsensitiveTransform = __webpack_require__(277)

var boolean = types.boolean
var overloadedBoolean = types.overloadedBoolean
var booleanish = types.booleanish
var number = types.number
var spaceSeparated = types.spaceSeparated
var commaSeparated = types.commaSeparated

module.exports = create({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: spaceSeparated,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: commaSeparated,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,

    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null, // Several. Use CSS `text-align` instead,
    aLink: null, // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated, // `<object>`. List of URIs to archives
    axis: null, // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null, // `<body>`. Use CSS `background-image` instead
    bgColor: null, // `<body>` and table elements. Use CSS `background-color` instead
    border: number, // `<table>`. Use CSS `border-width` instead,
    borderColor: null, // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number, // `<body>`
    cellPadding: null, // `<table>`
    cellSpacing: null, // `<table>`
    char: null, // Several table elements. When `align=char`, sets the character to align on
    charOff: null, // Several table elements. When `char`, offsets the alignment
    classId: null, // `<object>`
    clear: null, // `<br>`. Use CSS `clear` instead
    code: null, // `<object>`
    codeBase: null, // `<object>`
    codeType: null, // `<object>`
    color: null, // `<font>` and `<hr>`. Use CSS instead
    compact: boolean, // Lists. Use CSS to reduce space between items instead
    declare: boolean, // `<object>`
    event: null, // `<script>`
    face: null, // `<font>`. Use CSS instead
    frame: null, // `<table>`
    frameBorder: null, // `<iframe>`. Use CSS `border` instead
    hSpace: number, // `<img>` and `<object>`
    leftMargin: number, // `<body>`
    link: null, // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null, // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null, // `<img>`. Use a `<picture>`
    marginHeight: number, // `<body>`
    marginWidth: number, // `<body>`
    noResize: boolean, // `<frame>`
    noHref: boolean, // `<area>`. Use no href instead of an explicit `nohref`
    noShade: boolean, // `<hr>`. Use background-color and height instead of borders
    noWrap: boolean, // `<td>` and `<th>`
    object: null, // `<applet>`
    profile: null, // `<head>`
    prompt: null, // `<isindex>`
    rev: null, // `<link>`
    rightMargin: number, // `<body>`
    rules: null, // `<table>`
    scheme: null, // `<meta>`
    scrolling: booleanish, // `<frame>`. Use overflow in the child context
    standby: null, // `<object>`
    summary: null, // `<table>`
    text: null, // `<body>`. Use CSS `color` instead
    topMargin: number, // `<body>`
    valueType: null, // `<param>`
    version: null, // `<html>`. Use a doctype.
    vAlign: null, // Several. Use CSS `vertical-align` instead
    vLink: null, // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number, // `<img>` and `<object>`

    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
})


/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var find = __webpack_require__(381)
var normalize = __webpack_require__(252)
var parseSelector = __webpack_require__(382)
var spaces = __webpack_require__(383).parse
var commas = __webpack_require__(384).parse

module.exports = factory

function factory(schema, defaultTagName) {
  return h

  /* Hyperscript compatible DSL for creating virtual HAST trees. */
  function h(selector, properties, children) {
    var node = parseSelector(selector, defaultTagName)
    var property

    if (!children && properties && isChildren(properties, node)) {
      children = properties
      properties = null
    }

    if (properties) {
      for (property in properties) {
        addProperty(node.properties, property, properties[property])
      }
    }

    addChild(node.children, children)

    if (node.tagName === 'template') {
      node.content = {type: 'root', children: node.children}
      node.children = []
    }

    return node
  }

  function addProperty(properties, key, value) {
    var info
    var property
    var result

    /* Ignore nully and NaN values. */
    if (value === null || value === undefined || value !== value) {
      return
    }

    info = find(schema, key)
    property = info.property
    result = value

    /* Handle list values. */
    if (typeof result === 'string') {
      if (info.spaceSeparated) {
        result = spaces(result)
      } else if (info.commaSeparated) {
        result = commas(result)
      } else if (info.commaOrSpaceSeparated) {
        result = spaces(commas(result).join(' '))
      }
    }

    /* Accept `object` on style. */
    if (property === 'style' && typeof value !== 'string') {
      result = style(result)
    }

    /* Class-names (which can be added both on the `selector` and here). */
    if (property === 'className' && properties.className) {
      result = properties.className.concat(result)
    }

    properties[property] = parsePrimitives(info, property, result)
  }
}

function isChildren(value, node) {
  return (
    typeof value === 'string' ||
    'length' in value ||
    isNode(node.tagName, value)
  )
}

function isNode(tagName, value) {
  var type = value.type

  if (tagName === 'input' || !type || typeof type !== 'string') {
    return false
  }

  if (typeof value.children === 'object' && 'length' in value.children) {
    return true
  }

  type = type.toLowerCase()

  if (tagName === 'button') {
    return (
      type !== 'menu' &&
      type !== 'submit' &&
      type !== 'reset' &&
      type !== 'button'
    )
  }

  return 'value' in value
}

function addChild(nodes, value) {
  var index
  var length

  if (value === null || value === undefined) {
    return
  }

  if (typeof value === 'string' || typeof value === 'number') {
    nodes.push({type: 'text', value: String(value)})
    return
  }

  if (typeof value === 'object' && 'length' in value) {
    index = -1
    length = value.length

    while (++index < length) {
      addChild(nodes, value[index])
    }

    return
  }

  if (typeof value !== 'object' || !('type' in value)) {
    throw new Error('Expected node, nodes, or string, got `' + value + '`')
  }

  nodes.push(value)
}

/* Parse a (list of) primitives. */
function parsePrimitives(info, name, value) {
  var index
  var length
  var result

  if (typeof value !== 'object' || !('length' in value)) {
    return parsePrimitive(info, name, value)
  }

  length = value.length
  index = -1
  result = []

  while (++index < length) {
    result[index] = parsePrimitive(info, name, value[index])
  }

  return result
}

/* Parse a single primitives. */
function parsePrimitive(info, name, value) {
  var result = value

  if (info.number || info.positiveNumber) {
    if (!isNaN(result) && result !== '') {
      result = Number(result)
    }
  } else if (info.boolean || info.overloadedBoolean) {
    /* Accept `boolean` and `string`. */
    if (
      typeof result === 'string' &&
      (result === '' || normalize(value) === normalize(name))
    ) {
      result = true
    }
  }

  return result
}

function style(value) {
  var result = []
  var key

  for (key in value) {
    result.push([key, value[key]].join(': '))
  }

  return result.join('; ')
}


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var normalize = __webpack_require__(252)
var DefinedInfo = __webpack_require__(275)
var Info = __webpack_require__(276)

var data = 'data'

module.exports = find

var valid = /^data[-a-z0-9.:_]+$/i
var dash = /-[a-z]/g
var cap = /[A-Z]/g

function find(schema, value) {
  var normal = normalize(value)
  var prop = value
  var Type = Info

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]]
  }

  if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      prop = datasetToProperty(value)
    } else {
      value = datasetToAttribute(value)
    }

    Type = DefinedInfo
  }

  return new Type(prop, value)
}

function datasetToProperty(attribute) {
  var value = attribute.slice(5).replace(dash, camelcase)
  return data + value.charAt(0).toUpperCase() + value.slice(1)
}

function datasetToAttribute(property) {
  var value = property.slice(4)

  if (dash.test(value)) {
    return property
  }

  value = value.replace(cap, kebab)

  if (value.charAt(0) !== '-') {
    value = '-' + value
  }

  return data + value
}

function kebab($0) {
  return '-' + $0.toLowerCase()
}

function camelcase($0) {
  return $0.charAt(1).toUpperCase()
}


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = parse

var dot = '.'.charCodeAt(0)
var hash = '#'.charCodeAt(0)

/* Parse a simple CSS selector into a HAST node. */
function parse(selector, defaultTagName) {
  var value = selector || ''
  var name = defaultTagName || 'div'
  var props = {}
  var index = -1
  var length = value.length
  var className
  var type
  var code
  var subvalue
  var lastIndex

  while (++index <= length) {
    code = value.charCodeAt(index)

    if (!code || code === dot || code === hash) {
      subvalue = value.slice(lastIndex, index)

      if (subvalue) {
        if (type === dot) {
          if (className) {
            className.push(subvalue)
          } else {
            className = [subvalue]
            props.className = className
          }
        } else if (type === hash) {
          props.id = subvalue
        } else {
          name = subvalue
        }
      }

      lastIndex = index + 1
      type = code
    }
  }

  return {
    type: 'element',
    tagName: name,
    properties: props,
    children: []
  }
}


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(223)

exports.parse = parse
exports.stringify = stringify

var empty = ''
var space = ' '
var whiteSpace = /[ \t\n\r\f]+/g

function parse(value) {
  var input = trim(String(value || empty))
  return input === empty ? [] : input.split(whiteSpace)
}

function stringify(values) {
  return trim(values.join(space))
}


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.parse = parse
exports.stringify = stringify

var trim = __webpack_require__(223)

var comma = ','
var space = ' '
var empty = ''

/* Parse comma-separated tokens to an array. */
function parse(value) {
  var values = []
  var input = String(value || empty)
  var index = input.indexOf(comma)
  var lastIndex = 0
  var end = false
  var val

  while (!end) {
    if (index === -1) {
      index = input.length
      end = true
    }

    val = trim(input.slice(lastIndex, index))

    if (val || !end) {
      values.push(val)
    }

    lastIndex = index + 1
    index = input.indexOf(comma, lastIndex)
  }

  return values
}

/* Compile an array to comma-separated tokens.
 * `options.padLeft` (default: `true`) pads a space left of each
 * token, and `options.padRight` (default: `false`) pads a space
 * to the right of each token. */
function stringify(values, options) {
  var settings = options || {}
  var left = settings.padLeft === false ? empty : space
  var right = settings.padRight ? space : empty

  /* Ensure the last empty entry is seen. */
  if (values[values.length - 1] === empty) {
    values = values.concat(empty)
  }

  return trim(values.join(right + comma + left))
}


/***/ }),
/* 385 */
/***/ (function(module, exports) {

module.exports = {"AEli":"Æ","AElig":"Æ","AM":"&","AMP":"&","Aacut":"Á","Aacute":"Á","Abreve":"Ă","Acir":"Â","Acirc":"Â","Acy":"А","Afr":"𝔄","Agrav":"À","Agrave":"À","Alpha":"Α","Amacr":"Ā","And":"⩓","Aogon":"Ą","Aopf":"𝔸","ApplyFunction":"⁡","Arin":"Å","Aring":"Å","Ascr":"𝒜","Assign":"≔","Atild":"Ã","Atilde":"Ã","Aum":"Ä","Auml":"Ä","Backslash":"∖","Barv":"⫧","Barwed":"⌆","Bcy":"Б","Because":"∵","Bernoullis":"ℬ","Beta":"Β","Bfr":"𝔅","Bopf":"𝔹","Breve":"˘","Bscr":"ℬ","Bumpeq":"≎","CHcy":"Ч","COP":"©","COPY":"©","Cacute":"Ć","Cap":"⋒","CapitalDifferentialD":"ⅅ","Cayleys":"ℭ","Ccaron":"Č","Ccedi":"Ç","Ccedil":"Ç","Ccirc":"Ĉ","Cconint":"∰","Cdot":"Ċ","Cedilla":"¸","CenterDot":"·","Cfr":"ℭ","Chi":"Χ","CircleDot":"⊙","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","Colon":"∷","Colone":"⩴","Congruent":"≡","Conint":"∯","ContourIntegral":"∮","Copf":"ℂ","Coproduct":"∐","CounterClockwiseContourIntegral":"∳","Cross":"⨯","Cscr":"𝒞","Cup":"⋓","CupCap":"≍","DD":"ⅅ","DDotrahd":"⤑","DJcy":"Ђ","DScy":"Ѕ","DZcy":"Џ","Dagger":"‡","Darr":"↡","Dashv":"⫤","Dcaron":"Ď","Dcy":"Д","Del":"∇","Delta":"Δ","Dfr":"𝔇","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","Diamond":"⋄","DifferentialD":"ⅆ","Dopf":"𝔻","Dot":"¨","DotDot":"⃜","DotEqual":"≐","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrow":"↓","DownArrowBar":"⤓","DownArrowUpArrow":"⇵","DownBreve":"̑","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVector":"↽","DownLeftVectorBar":"⥖","DownRightTeeVector":"⥟","DownRightVector":"⇁","DownRightVectorBar":"⥗","DownTee":"⊤","DownTeeArrow":"↧","Downarrow":"⇓","Dscr":"𝒟","Dstrok":"Đ","ENG":"Ŋ","ET":"Ð","ETH":"Ð","Eacut":"É","Eacute":"É","Ecaron":"Ě","Ecir":"Ê","Ecirc":"Ê","Ecy":"Э","Edot":"Ė","Efr":"𝔈","Egrav":"È","Egrave":"È","Element":"∈","Emacr":"Ē","EmptySmallSquare":"◻","EmptyVerySmallSquare":"▫","Eogon":"Ę","Eopf":"𝔼","Epsilon":"Ε","Equal":"⩵","EqualTilde":"≂","Equilibrium":"⇌","Escr":"ℰ","Esim":"⩳","Eta":"Η","Eum":"Ë","Euml":"Ë","Exists":"∃","ExponentialE":"ⅇ","Fcy":"Ф","Ffr":"𝔉","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","Fopf":"𝔽","ForAll":"∀","Fouriertrf":"ℱ","Fscr":"ℱ","GJcy":"Ѓ","G":">","GT":">","Gamma":"Γ","Gammad":"Ϝ","Gbreve":"Ğ","Gcedil":"Ģ","Gcirc":"Ĝ","Gcy":"Г","Gdot":"Ġ","Gfr":"𝔊","Gg":"⋙","Gopf":"𝔾","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","Gt":"≫","HARDcy":"Ъ","Hacek":"ˇ","Hat":"^","Hcirc":"Ĥ","Hfr":"ℌ","HilbertSpace":"ℋ","Hopf":"ℍ","HorizontalLine":"─","Hscr":"ℋ","Hstrok":"Ħ","HumpDownHump":"≎","HumpEqual":"≏","IEcy":"Е","IJlig":"Ĳ","IOcy":"Ё","Iacut":"Í","Iacute":"Í","Icir":"Î","Icirc":"Î","Icy":"И","Idot":"İ","Ifr":"ℑ","Igrav":"Ì","Igrave":"Ì","Im":"ℑ","Imacr":"Ī","ImaginaryI":"ⅈ","Implies":"⇒","Int":"∬","Integral":"∫","Intersection":"⋂","InvisibleComma":"⁣","InvisibleTimes":"⁢","Iogon":"Į","Iopf":"𝕀","Iota":"Ι","Iscr":"ℐ","Itilde":"Ĩ","Iukcy":"І","Ium":"Ï","Iuml":"Ï","Jcirc":"Ĵ","Jcy":"Й","Jfr":"𝔍","Jopf":"𝕁","Jscr":"𝒥","Jsercy":"Ј","Jukcy":"Є","KHcy":"Х","KJcy":"Ќ","Kappa":"Κ","Kcedil":"Ķ","Kcy":"К","Kfr":"𝔎","Kopf":"𝕂","Kscr":"𝒦","LJcy":"Љ","L":"<","LT":"<","Lacute":"Ĺ","Lambda":"Λ","Lang":"⟪","Laplacetrf":"ℒ","Larr":"↞","Lcaron":"Ľ","Lcedil":"Ļ","Lcy":"Л","LeftAngleBracket":"⟨","LeftArrow":"←","LeftArrowBar":"⇤","LeftArrowRightArrow":"⇆","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVector":"⇃","LeftDownVectorBar":"⥙","LeftFloor":"⌊","LeftRightArrow":"↔","LeftRightVector":"⥎","LeftTee":"⊣","LeftTeeArrow":"↤","LeftTeeVector":"⥚","LeftTriangle":"⊲","LeftTriangleBar":"⧏","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVector":"↿","LeftUpVectorBar":"⥘","LeftVector":"↼","LeftVectorBar":"⥒","Leftarrow":"⇐","Leftrightarrow":"⇔","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","LessLess":"⪡","LessSlantEqual":"⩽","LessTilde":"≲","Lfr":"𝔏","Ll":"⋘","Lleftarrow":"⇚","Lmidot":"Ŀ","LongLeftArrow":"⟵","LongLeftRightArrow":"⟷","LongRightArrow":"⟶","Longleftarrow":"⟸","Longleftrightarrow":"⟺","Longrightarrow":"⟹","Lopf":"𝕃","LowerLeftArrow":"↙","LowerRightArrow":"↘","Lscr":"ℒ","Lsh":"↰","Lstrok":"Ł","Lt":"≪","Map":"⤅","Mcy":"М","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","MinusPlus":"∓","Mopf":"𝕄","Mscr":"ℳ","Mu":"Μ","NJcy":"Њ","Nacute":"Ń","Ncaron":"Ň","Ncedil":"Ņ","Ncy":"Н","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\n","Nfr":"𝔑","NoBreak":"⁠","NonBreakingSpace":" ","Nopf":"ℕ","Not":"⫬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","NotLeftTriangle":"⋪","NotLeftTriangleBar":"⧏̸","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangle":"⋫","NotRightTriangleBar":"⧐̸","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","Nscr":"𝒩","Ntild":"Ñ","Ntilde":"Ñ","Nu":"Ν","OElig":"Œ","Oacut":"Ó","Oacute":"Ó","Ocir":"Ô","Ocirc":"Ô","Ocy":"О","Odblac":"Ő","Ofr":"𝔒","Ograv":"Ò","Ograve":"Ò","Omacr":"Ō","Omega":"Ω","Omicron":"Ο","Oopf":"𝕆","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","Or":"⩔","Oscr":"𝒪","Oslas":"Ø","Oslash":"Ø","Otild":"Õ","Otilde":"Õ","Otimes":"⨷","Oum":"Ö","Ouml":"Ö","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","PartialD":"∂","Pcy":"П","Pfr":"𝔓","Phi":"Φ","Pi":"Π","PlusMinus":"±","Poincareplane":"ℌ","Popf":"ℙ","Pr":"⪻","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","Prime":"″","Product":"∏","Proportion":"∷","Proportional":"∝","Pscr":"𝒫","Psi":"Ψ","QUO":"\"","QUOT":"\"","Qfr":"𝔔","Qopf":"ℚ","Qscr":"𝒬","RBarr":"⤐","RE":"®","REG":"®","Racute":"Ŕ","Rang":"⟫","Rarr":"↠","Rarrtl":"⤖","Rcaron":"Ř","Rcedil":"Ŗ","Rcy":"Р","Re":"ℜ","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","Rfr":"ℜ","Rho":"Ρ","RightAngleBracket":"⟩","RightArrow":"→","RightArrowBar":"⇥","RightArrowLeftArrow":"⇄","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVector":"⇂","RightDownVectorBar":"⥕","RightFloor":"⌋","RightTee":"⊢","RightTeeArrow":"↦","RightTeeVector":"⥛","RightTriangle":"⊳","RightTriangleBar":"⧐","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVector":"↾","RightUpVectorBar":"⥔","RightVector":"⇀","RightVectorBar":"⥓","Rightarrow":"⇒","Ropf":"ℝ","RoundImplies":"⥰","Rrightarrow":"⇛","Rscr":"ℛ","Rsh":"↱","RuleDelayed":"⧴","SHCHcy":"Щ","SHcy":"Ш","SOFTcy":"Ь","Sacute":"Ś","Sc":"⪼","Scaron":"Š","Scedil":"Ş","Scirc":"Ŝ","Scy":"С","Sfr":"𝔖","ShortDownArrow":"↓","ShortLeftArrow":"←","ShortRightArrow":"→","ShortUpArrow":"↑","Sigma":"Σ","SmallCircle":"∘","Sopf":"𝕊","Sqrt":"√","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","Sscr":"𝒮","Star":"⋆","Sub":"⋐","Subset":"⋐","SubsetEqual":"⊆","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","SuchThat":"∋","Sum":"∑","Sup":"⋑","Superset":"⊃","SupersetEqual":"⊇","Supset":"⋑","THOR":"Þ","THORN":"Þ","TRADE":"™","TSHcy":"Ћ","TScy":"Ц","Tab":"\t","Tau":"Τ","Tcaron":"Ť","Tcedil":"Ţ","Tcy":"Т","Tfr":"𝔗","Therefore":"∴","Theta":"Θ","ThickSpace":"  ","ThinSpace":" ","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","Topf":"𝕋","TripleDot":"⃛","Tscr":"𝒯","Tstrok":"Ŧ","Uacut":"Ú","Uacute":"Ú","Uarr":"↟","Uarrocir":"⥉","Ubrcy":"Ў","Ubreve":"Ŭ","Ucir":"Û","Ucirc":"Û","Ucy":"У","Udblac":"Ű","Ufr":"𝔘","Ugrav":"Ù","Ugrave":"Ù","Umacr":"Ū","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","Uopf":"𝕌","UpArrow":"↑","UpArrowBar":"⤒","UpArrowDownArrow":"⇅","UpDownArrow":"↕","UpEquilibrium":"⥮","UpTee":"⊥","UpTeeArrow":"↥","Uparrow":"⇑","Updownarrow":"⇕","UpperLeftArrow":"↖","UpperRightArrow":"↗","Upsi":"ϒ","Upsilon":"Υ","Uring":"Ů","Uscr":"𝒰","Utilde":"Ũ","Uum":"Ü","Uuml":"Ü","VDash":"⊫","Vbar":"⫫","Vcy":"В","Vdash":"⊩","Vdashl":"⫦","Vee":"⋁","Verbar":"‖","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","Vopf":"𝕍","Vscr":"𝒱","Vvdash":"⊪","Wcirc":"Ŵ","Wedge":"⋀","Wfr":"𝔚","Wopf":"𝕎","Wscr":"𝒲","Xfr":"𝔛","Xi":"Ξ","Xopf":"𝕏","Xscr":"𝒳","YAcy":"Я","YIcy":"Ї","YUcy":"Ю","Yacut":"Ý","Yacute":"Ý","Ycirc":"Ŷ","Ycy":"Ы","Yfr":"𝔜","Yopf":"𝕐","Yscr":"𝒴","Yuml":"Ÿ","ZHcy":"Ж","Zacute":"Ź","Zcaron":"Ž","Zcy":"З","Zdot":"Ż","ZeroWidthSpace":"​","Zeta":"Ζ","Zfr":"ℨ","Zopf":"ℤ","Zscr":"𝒵","aacut":"á","aacute":"á","abreve":"ă","ac":"∾","acE":"∾̳","acd":"∿","acir":"â","acirc":"â","acut":"´","acute":"´","acy":"а","aeli":"æ","aelig":"æ","af":"⁡","afr":"𝔞","agrav":"à","agrave":"à","alefsym":"ℵ","aleph":"ℵ","alpha":"α","amacr":"ā","amalg":"⨿","am":"&","amp":"&","and":"∧","andand":"⩕","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsd":"∡","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","aogon":"ą","aopf":"𝕒","ap":"≈","apE":"⩰","apacir":"⩯","ape":"≊","apid":"≋","apos":"'","approx":"≈","approxeq":"≊","arin":"å","aring":"å","ascr":"𝒶","ast":"*","asymp":"≈","asympeq":"≍","atild":"ã","atilde":"ã","aum":"ä","auml":"ä","awconint":"∳","awint":"⨑","bNot":"⫭","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","barvee":"⊽","barwed":"⌅","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","beta":"β","beth":"ℶ","between":"≬","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bnot":"⌐","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxDL":"╗","boxDR":"╔","boxDl":"╖","boxDr":"╓","boxH":"═","boxHD":"╦","boxHU":"╩","boxHd":"╤","boxHu":"╧","boxUL":"╝","boxUR":"╚","boxUl":"╜","boxUr":"╙","boxV":"║","boxVH":"╬","boxVL":"╣","boxVR":"╠","boxVh":"╫","boxVl":"╢","boxVr":"╟","boxbox":"⧉","boxdL":"╕","boxdR":"╒","boxdl":"┐","boxdr":"┌","boxh":"─","boxhD":"╥","boxhU":"╨","boxhd":"┬","boxhu":"┴","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxuL":"╛","boxuR":"╘","boxul":"┘","boxur":"└","boxv":"│","boxvH":"╪","boxvL":"╡","boxvR":"╞","boxvh":"┼","boxvl":"┤","boxvr":"├","bprime":"‵","breve":"˘","brvba":"¦","brvbar":"¦","bscr":"𝒷","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsol":"\\","bsolb":"⧅","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","bumpeq":"≏","cacute":"ć","cap":"∩","capand":"⩄","capbrcup":"⩉","capcap":"⩋","capcup":"⩇","capdot":"⩀","caps":"∩︀","caret":"⁁","caron":"ˇ","ccaps":"⩍","ccaron":"č","ccedi":"ç","ccedil":"ç","ccirc":"ĉ","ccups":"⩌","ccupssm":"⩐","cdot":"ċ","cedi":"¸","cedil":"¸","cemptyv":"⦲","cen":"¢","cent":"¢","centerdot":"·","cfr":"𝔠","chcy":"ч","check":"✓","checkmark":"✓","chi":"χ","cir":"○","cirE":"⧃","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledR":"®","circledS":"Ⓢ","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","clubs":"♣","clubsuit":"♣","colon":":","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","conint":"∮","copf":"𝕔","coprod":"∐","cop":"©","copy":"©","copysr":"℗","crarr":"↵","cross":"✗","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cup":"∪","cupbrcap":"⩈","cupcap":"⩆","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curre":"¤","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dArr":"⇓","dHar":"⥥","dagger":"†","daleth":"ℸ","darr":"↓","dash":"‐","dashv":"⊣","dbkarow":"⤏","dblac":"˝","dcaron":"ď","dcy":"д","dd":"ⅆ","ddagger":"‡","ddarr":"⇊","ddotseq":"⩷","de":"°","deg":"°","delta":"δ","demptyv":"⦱","dfisht":"⥿","dfr":"𝔡","dharl":"⇃","dharr":"⇂","diam":"⋄","diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","digamma":"ϝ","disin":"⋲","div":"÷","divid":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","dopf":"𝕕","dot":"˙","doteq":"≐","doteqdot":"≑","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","downarrow":"↓","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","dscr":"𝒹","dscy":"ѕ","dsol":"⧶","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","dzcy":"џ","dzigrarr":"⟿","eDDot":"⩷","eDot":"≑","eacut":"é","eacute":"é","easter":"⩮","ecaron":"ě","ecir":"ê","ecirc":"ê","ecolon":"≕","ecy":"э","edot":"ė","ee":"ⅇ","efDot":"≒","efr":"𝔢","eg":"⪚","egrav":"è","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","emacr":"ē","empty":"∅","emptyset":"∅","emptyv":"∅","emsp13":" ","emsp14":" ","emsp":" ","eng":"ŋ","ensp":" ","eogon":"ę","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","equals":"=","equest":"≟","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erDot":"≓","erarr":"⥱","escr":"ℯ","esdot":"≐","esim":"≂","eta":"η","et":"ð","eth":"ð","eum":"ë","euml":"ë","euro":"€","excl":"!","exist":"∃","expectation":"ℰ","exponentiale":"ⅇ","fallingdotseq":"≒","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","ffr":"𝔣","filig":"ﬁ","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","fopf":"𝕗","forall":"∀","fork":"⋔","forkv":"⫙","fpartint":"⨍","frac1":"¼","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac3":"¾","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","gE":"≧","gEl":"⪌","gacute":"ǵ","gamma":"γ","gammad":"ϝ","gap":"⪆","gbreve":"ğ","gcirc":"ĝ","gcy":"г","gdot":"ġ","ge":"≥","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","ges":"⩾","gescc":"⪩","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","gfr":"𝔤","gg":"≫","ggg":"⋙","gimel":"ℷ","gjcy":"ѓ","gl":"≷","glE":"⪒","gla":"⪥","glj":"⪤","gnE":"≩","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gneq":"⪈","gneqq":"≩","gnsim":"⋧","gopf":"𝕘","grave":"`","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","g":">","gt":">","gtcc":"⪧","gtcir":"⩺","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","hArr":"⇔","hairsp":" ","half":"½","hamilt":"ℋ","hardcy":"ъ","harr":"↔","harrcir":"⥈","harrw":"↭","hbar":"ℏ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","horbar":"―","hscr":"𝒽","hslash":"ℏ","hstrok":"ħ","hybull":"⁃","hyphen":"‐","iacut":"í","iacute":"í","ic":"⁣","icir":"î","icirc":"î","icy":"и","iecy":"е","iexc":"¡","iexcl":"¡","iff":"⇔","ifr":"𝔦","igrav":"ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","ijlig":"ĳ","imacr":"ī","image":"ℑ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","imof":"⊷","imped":"Ƶ","in":"∈","incare":"℅","infin":"∞","infintie":"⧝","inodot":"ı","int":"∫","intcal":"⊺","integers":"ℤ","intercal":"⊺","intlarhk":"⨗","intprod":"⨼","iocy":"ё","iogon":"į","iopf":"𝕚","iota":"ι","iprod":"⨼","iques":"¿","iquest":"¿","iscr":"𝒾","isin":"∈","isinE":"⋹","isindot":"⋵","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","itilde":"ĩ","iukcy":"і","ium":"ï","iuml":"ï","jcirc":"ĵ","jcy":"й","jfr":"𝔧","jmath":"ȷ","jopf":"𝕛","jscr":"𝒿","jsercy":"ј","jukcy":"є","kappa":"κ","kappav":"ϰ","kcedil":"ķ","kcy":"к","kfr":"𝔨","kgreen":"ĸ","khcy":"х","kjcy":"ќ","kopf":"𝕜","kscr":"𝓀","lAarr":"⇚","lArr":"⇐","lAtail":"⤛","lBarr":"⤎","lE":"≦","lEg":"⪋","lHar":"⥢","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","lambda":"λ","lang":"⟨","langd":"⦑","langle":"⟨","lap":"⪅","laqu":"«","laquo":"«","larr":"←","larrb":"⇤","larrbfs":"⤟","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","lat":"⪫","latail":"⤙","late":"⪭","lates":"⪭︀","lbarr":"⤌","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","lcaron":"ľ","lcedil":"ļ","lceil":"⌈","lcub":"{","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","leftarrow":"←","leftarrowtail":"↢","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","leftthreetimes":"⋋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","les":"⩽","lescc":"⪨","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","lessgtr":"≶","lesssim":"≲","lfisht":"⥼","lfloor":"⌊","lfr":"𝔩","lg":"≶","lgE":"⪑","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","ljcy":"љ","ll":"≪","llarr":"⇇","llcorner":"⌞","llhard":"⥫","lltri":"◺","lmidot":"ŀ","lmoust":"⎰","lmoustache":"⎰","lnE":"≨","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","longleftrightarrow":"⟷","longmapsto":"⟼","longrightarrow":"⟶","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","lstrok":"ł","l":"<","lt":"<","ltcc":"⪦","ltcir":"⩹","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltrPar":"⦖","ltri":"◃","ltrie":"⊴","ltrif":"◂","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","mDDot":"∺","mac":"¯","macr":"¯","male":"♂","malt":"✠","maltese":"✠","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","mcy":"м","mdash":"—","measuredangle":"∡","mfr":"𝔪","mho":"℧","micr":"µ","micro":"µ","mid":"∣","midast":"*","midcir":"⫰","middo":"·","middot":"·","minus":"−","minusb":"⊟","minusd":"∸","minusdu":"⨪","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","mopf":"𝕞","mp":"∓","mscr":"𝓂","mstpos":"∾","mu":"μ","multimap":"⊸","mumap":"⊸","nGg":"⋙̸","nGt":"≫⃒","nGtv":"≫̸","nLeftarrow":"⇍","nLeftrightarrow":"⇎","nLl":"⋘̸","nLt":"≪⃒","nLtv":"≪̸","nRightarrow":"⇏","nVDash":"⊯","nVdash":"⊮","nabla":"∇","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natur":"♮","natural":"♮","naturals":"ℕ","nbs":" ","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","ncaron":"ň","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","ncy":"н","ndash":"–","ne":"≠","neArr":"⇗","nearhk":"⤤","nearr":"↗","nearrow":"↗","nedot":"≐̸","nequiv":"≢","nesear":"⤨","nesim":"≂̸","nexist":"∄","nexists":"∄","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","ngsim":"≵","ngt":"≯","ngtr":"≯","nhArr":"⇎","nharr":"↮","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","njcy":"њ","nlArr":"⇍","nlE":"≦̸","nlarr":"↚","nldr":"‥","nle":"≰","nleftarrow":"↚","nleftrightarrow":"↮","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nlsim":"≴","nlt":"≮","nltri":"⋪","nltrie":"⋬","nmid":"∤","nopf":"𝕟","no":"¬","not":"¬","notin":"∉","notinE":"⋹̸","notindot":"⋵̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","npar":"∦","nparallel":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","npre":"⪯̸","nprec":"⊀","npreceq":"⪯̸","nrArr":"⇏","nrarr":"↛","nrarrc":"⤳̸","nrarrw":"↝̸","nrightarrow":"↛","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","ntild":"ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","nu":"ν","num":"#","numero":"№","numsp":" ","nvDash":"⊭","nvHarr":"⤄","nvap":"≍⃒","nvdash":"⊬","nvge":"≥⃒","nvgt":">⃒","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwArr":"⇖","nwarhk":"⤣","nwarr":"↖","nwarrow":"↖","nwnear":"⤧","oS":"Ⓢ","oacut":"ó","oacute":"ó","oast":"⊛","ocir":"ô","ocirc":"ô","ocy":"о","odash":"⊝","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","oelig":"œ","ofcir":"⦿","ofr":"𝔬","ogon":"˛","ograv":"ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","omacr":"ō","omega":"ω","omicron":"ο","omid":"⦶","ominus":"⊖","oopf":"𝕠","opar":"⦷","operp":"⦹","oplus":"⊕","or":"∨","orarr":"↻","ord":"º","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oscr":"ℴ","oslas":"ø","oslash":"ø","osol":"⊘","otild":"õ","otilde":"õ","otimes":"⊗","otimesas":"⨶","oum":"ö","ouml":"ö","ovbar":"⌽","par":"¶","para":"¶","parallel":"∥","parsim":"⫳","parsl":"⫽","part":"∂","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","pfr":"𝔭","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plus":"+","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plusdo":"∔","plusdu":"⨥","pluse":"⩲","plusm":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","pointint":"⨕","popf":"𝕡","poun":"£","pound":"£","pr":"≺","prE":"⪳","prap":"⪷","prcue":"≼","pre":"⪯","prec":"≺","precapprox":"⪷","preccurlyeq":"≼","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","precsim":"≾","prime":"′","primes":"ℙ","prnE":"⪵","prnap":"⪹","prnsim":"⋨","prod":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","propto":"∝","prsim":"≾","prurel":"⊰","pscr":"𝓅","psi":"ψ","puncsp":" ","qfr":"𝔮","qint":"⨌","qopf":"𝕢","qprime":"⁗","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quo":"\"","quot":"\"","rAarr":"⇛","rArr":"⇒","rAtail":"⤜","rBarr":"⤏","rHar":"⥤","race":"∽̱","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","rangd":"⦒","range":"⦥","rangle":"⟩","raqu":"»","raquo":"»","rarr":"→","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","rarrtl":"↣","rarrw":"↝","ratail":"⤚","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","rcaron":"ř","rcedil":"ŗ","rceil":"⌉","rcub":"}","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","rect":"▭","re":"®","reg":"®","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","rhard":"⇁","rharu":"⇀","rharul":"⥬","rho":"ρ","rhov":"ϱ","rightarrow":"→","rightarrowtail":"↣","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","rightthreetimes":"⋌","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoust":"⎱","rmoustache":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","roplus":"⨮","rotimes":"⨵","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","rsaquo":"›","rscr":"𝓇","rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","ruluhar":"⥨","rx":"℞","sacute":"ś","sbquo":"‚","sc":"≻","scE":"⪴","scap":"⪸","scaron":"š","sccue":"≽","sce":"⪰","scedil":"ş","scirc":"ŝ","scnE":"⪶","scnap":"⪺","scnsim":"⋩","scpolint":"⨓","scsim":"≿","scy":"с","sdot":"⋅","sdotb":"⊡","sdote":"⩦","seArr":"⇘","searhk":"⤥","searr":"↘","searrow":"↘","sec":"§","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","sfr":"𝔰","sfrown":"⌢","sharp":"♯","shchcy":"щ","shcy":"ш","shortmid":"∣","shortparallel":"∥","sh":"­","shy":"­","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","softcy":"ь","sol":"/","solb":"⧄","solbar":"⌿","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","squ":"□","square":"□","squarf":"▪","squf":"▪","srarr":"→","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","subE":"⫅","subdot":"⪽","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","subseteq":"⊆","subseteqq":"⫅","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succ":"≻","succapprox":"⪸","succcurlyeq":"≽","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","sum":"∑","sung":"♪","sup":"⊃","sup1":"¹","sup2":"²","sup3":"³","supE":"⫆","supdot":"⪾","supdsub":"⫘","supe":"⊇","supedot":"⫄","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swArr":"⇙","swarhk":"⤦","swarr":"↙","swarrow":"↙","swnwar":"⤪","szli":"ß","szlig":"ß","target":"⌖","tau":"τ","tbrk":"⎴","tcaron":"ť","tcedil":"ţ","tcy":"т","tdot":"⃛","telrec":"⌕","tfr":"𝔱","there4":"∴","therefore":"∴","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","thinsp":" ","thkap":"≈","thksim":"∼","thor":"þ","thorn":"þ","tilde":"˜","time":"×","times":"×","timesb":"⊠","timesbar":"⨱","timesd":"⨰","tint":"∭","toea":"⤨","top":"⊤","topbot":"⌶","topcir":"⫱","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","tscr":"𝓉","tscy":"ц","tshcy":"ћ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","uArr":"⇑","uHar":"⥣","uacut":"ú","uacute":"ú","uarr":"↑","ubrcy":"ў","ubreve":"ŭ","ucir":"û","ucirc":"û","ucy":"у","udarr":"⇅","udblac":"ű","udhar":"⥮","ufisht":"⥾","ufr":"𝔲","ugrav":"ù","ugrave":"ù","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","umacr":"ū","um":"¨","uml":"¨","uogon":"ų","uopf":"𝕦","uparrow":"↑","updownarrow":"↕","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","upsi":"υ","upsih":"ϒ","upsilon":"υ","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","uring":"ů","urtri":"◹","uscr":"𝓊","utdot":"⋰","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","uum":"ü","uuml":"ü","uwangle":"⦧","vArr":"⇕","vBar":"⫨","vBarv":"⫩","vDash":"⊨","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vcy":"в","vdash":"⊢","vee":"∨","veebar":"⊻","veeeq":"≚","vellip":"⋮","verbar":"|","vert":"|","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","vopf":"𝕧","vprop":"∝","vrtri":"⊳","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","vzigzag":"⦚","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","wedgeq":"≙","weierp":"℘","wfr":"𝔴","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","xfr":"𝔵","xhArr":"⟺","xharr":"⟷","xi":"ξ","xlArr":"⟸","xlarr":"⟵","xmap":"⟼","xnis":"⋻","xodot":"⨀","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrArr":"⟹","xrarr":"⟶","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","yacut":"ý","yacute":"ý","yacy":"я","ycirc":"ŷ","ycy":"ы","ye":"¥","yen":"¥","yfr":"𝔶","yicy":"ї","yopf":"𝕪","yscr":"𝓎","yucy":"ю","yum":"ÿ","yuml":"ÿ","zacute":"ź","zcaron":"ž","zcy":"з","zdot":"ż","zeetrf":"ℨ","zeta":"ζ","zfr":"𝔷","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","zscr":"𝓏","zwj":"‍","zwnj":"‌"}

/***/ }),
/* 386 */
/***/ (function(module, exports) {

module.exports = {"AElig":"Æ","AMP":"&","Aacute":"Á","Acirc":"Â","Agrave":"À","Aring":"Å","Atilde":"Ã","Auml":"Ä","COPY":"©","Ccedil":"Ç","ETH":"Ð","Eacute":"É","Ecirc":"Ê","Egrave":"È","Euml":"Ë","GT":">","Iacute":"Í","Icirc":"Î","Igrave":"Ì","Iuml":"Ï","LT":"<","Ntilde":"Ñ","Oacute":"Ó","Ocirc":"Ô","Ograve":"Ò","Oslash":"Ø","Otilde":"Õ","Ouml":"Ö","QUOT":"\"","REG":"®","THORN":"Þ","Uacute":"Ú","Ucirc":"Û","Ugrave":"Ù","Uuml":"Ü","Yacute":"Ý","aacute":"á","acirc":"â","acute":"´","aelig":"æ","agrave":"à","amp":"&","aring":"å","atilde":"ã","auml":"ä","brvbar":"¦","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","curren":"¤","deg":"°","divide":"÷","eacute":"é","ecirc":"ê","egrave":"è","eth":"ð","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","iacute":"í","icirc":"î","iexcl":"¡","igrave":"ì","iquest":"¿","iuml":"ï","laquo":"«","lt":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","ntilde":"ñ","oacute":"ó","ocirc":"ô","ograve":"ò","ordf":"ª","ordm":"º","oslash":"ø","otilde":"õ","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\"","raquo":"»","reg":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","thorn":"þ","times":"×","uacute":"ú","ucirc":"û","ugrave":"ù","uml":"¨","uuml":"ü","yacute":"ý","yen":"¥","yuml":"ÿ"}

/***/ }),
/* 387 */
/***/ (function(module, exports) {

module.exports = {"0":"�","128":"€","130":"‚","131":"ƒ","132":"„","133":"…","134":"†","135":"‡","136":"ˆ","137":"‰","138":"Š","139":"‹","140":"Œ","142":"Ž","145":"‘","146":"’","147":"“","148":"”","149":"•","150":"–","151":"—","152":"˜","153":"™","154":"š","155":"›","156":"œ","158":"ž","159":"Ÿ"}

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = hexadecimal

/* Check if the given character code, or the character
 * code at the first character, is hexadecimal. */
function hexadecimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 /* a */ && code <= 102) /* z */ ||
    (code >= 65 /* A */ && code <= 70) /* Z */ ||
    (code >= 48 /* A */ && code <= 57) /* Z */
  )
}


/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabetical = __webpack_require__(278)
var decimal = __webpack_require__(240)

module.exports = alphanumerical

/* Check if the given character code, or the character
 * code at the first character, is alphanumerical. */
function alphanumerical(character) {
  return alphabetical(character) || decimal(character)
}


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;

var _ = _self.Prism = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function (o, visited) {
			var type = _.util.type(o);
			visited = visited || {};

			switch (type) {
				case 'Object':
					if (visited[_.util.objId(o)]) {
						return visited[_.util.objId(o)];
					}
					var clone = {};
					visited[_.util.objId(o)] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key], visited);
						}
					}

					return clone;

				case 'Array':
					if (visited[_.util.objId(o)]) {
						return visited[_.util.objId(o)];
					}
					var clone = [];
					visited[_.util.objId(o)] = clone;

					o.forEach(function (v, i) {
						clone[i] = _.util.clone(v, visited);
					});

					return clone;
			}

			return o;
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];

			if (arguments.length == 2) {
				insert = arguments[1];

				for (var newToken in insert) {
					if (insert.hasOwnProperty(newToken)) {
						grammar[newToken] = insert[newToken];
					}
				}

				return grammar;
			}

			var ret = {};

			for (var token in grammar) {

				if (grammar.hasOwnProperty(token)) {

					if (token == before) {

						for (var newToken in insert) {

							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					ret[token] = grammar[token];
				}
			}

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === root[inside] && key != inside) {
					this[key] = ret;
				}
			});

			return root[inside] = ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function(o, callback, type, visited) {
			visited = visited || {};
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, null, visited);
					}
					else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || container.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		if (element.parentNode) {
			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		_.hooks.run('before-sanity-check', env);

		if (!env.code || !env.grammar) {
			if (env.code) {
				_.hooks.run('before-highlight', env);
				env.element.textContent = env.code;
				_.hooks.run('after-highlight', env);
			}
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				env.highlightedCode = evt.data;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(env.element);
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
		}
	},

	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
		var Token = _.Token;

		for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			if (token == target) {
				return;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					if (greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						var match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						// If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						if (strarr[i] instanceof Token) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						pattern.lastIndex = 0;

						var match = pattern.exec(str),
							delNum = 1;
					}

					if (!match) {
						if (oneshot) {
							break;
						}

						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1] ? match[1].length : 0;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						++i;
						pos += before.length;
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);

					if (delNum != 1)
						_.matchGrammar(text, strarr, grammar, i, pos, true, token);

					if (oneshot)
						break;
				}
			}
		}
	},

	tokenize: function(text, grammar, language) {
		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		_.matchGrammar(text, strarr, grammar, 0, 0, false);

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	}
};

var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
};

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (_.util.type(o) === 'Array') {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (o.alias) {
		var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';

};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _self.Prism;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _self.Prism;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (!_.manual && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _self.Prism;

})();

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = markup
markup.displayName = 'markup'
markup.aliases = ['xml', 'html', 'mathml', 'svg']
function markup(Prism) {
  Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
      greedy: true,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/i,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        'attr-value': {
          pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
          inside: {
            punctuation: [
              /^=/,
              {
                pattern: /(^|[^\\])["']/,
                lookbehind: true
              }
            ]
          }
        },
        punctuation: /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: /&#?[\da-z]{1,8};/i
  }
  Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
    Prism.languages.markup['entity']
  // Plugin to make entity title show the real entity, idea by Roman Komarov
  Prism.hooks.add('wrap', function(env) {
    if (env.type === 'entity') {
      env.attributes['title'] = env.content.value.replace(/&amp;/, '&')
    }
  })
  Prism.languages.xml = Prism.languages.markup
  Prism.languages.html = Prism.languages.markup
  Prism.languages.mathml = Prism.languages.markup
  Prism.languages.svg = Prism.languages.markup
}


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = css
css.displayName = 'css'
css.aliases = []
function css(Prism) {
  Prism.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
      inside: {
        rule: /@[\w-]+/
        // See rest below
      }
    },
    url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^{}\s][^{};]*?(?=\s*\{)/,
    string: {
      pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    important: /\B!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
  }
  Prism.languages.css['atrule'].inside.rest = Prism.languages.css
  if (Prism.languages.markup) {
    Prism.languages.insertBefore('markup', 'tag', {
      style: {
        pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
        lookbehind: true,
        inside: Prism.languages.css,
        alias: 'language-css',
        greedy: true
      }
    })
    Prism.languages.insertBefore(
      'inside',
      'attr-value',
      {
        'style-attr': {
          pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
          inside: {
            'attr-name': {
              pattern: /^\s*style/i,
              inside: Prism.languages.markup.tag.inside
            },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            'attr-value': {
              pattern: /.+/i,
              inside: Prism.languages.css
            }
          },
          alias: 'language-css'
        }
      },
      Prism.languages.markup.tag
    )
  }
}


/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = clike
clike.displayName = 'clike'
clike.aliases = []
function clike(Prism) {
  Prism.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'class-name': {
      pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
      lookbehind: true,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /[a-z0-9_]+(?=\()/i,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "color": "#c5c8c6",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#c5c8c6",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em",
        "background": "#1d1f21"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#1d1f21",
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#7C7C7C"
    },
    "prolog": {
        "color": "#7C7C7C"
    },
    "doctype": {
        "color": "#7C7C7C"
    },
    "cdata": {
        "color": "#7C7C7C"
    },
    "punctuation": {
        "color": "#c5c8c6"
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "#96CBFE"
    },
    "keyword": {
        "color": "#96CBFE"
    },
    "tag": {
        "color": "#96CBFE"
    },
    "class-name": {
        "color": "#FFFFB6",
        "textDecoration": "underline"
    },
    "boolean": {
        "color": "#99CC99"
    },
    "constant": {
        "color": "#99CC99"
    },
    "symbol": {
        "color": "#f92672"
    },
    "deleted": {
        "color": "#f92672"
    },
    "number": {
        "color": "#FF73FD"
    },
    "selector": {
        "color": "#A8FF60"
    },
    "attr-name": {
        "color": "#A8FF60"
    },
    "string": {
        "color": "#A8FF60"
    },
    "char": {
        "color": "#A8FF60"
    },
    "builtin": {
        "color": "#A8FF60"
    },
    "inserted": {
        "color": "#A8FF60"
    },
    "variable": {
        "color": "#C6C5FE"
    },
    "operator": {
        "color": "#EDEDED"
    },
    "entity": {
        "color": "#FFFFB6",
        "cursor": "help"
    },
    "url": {
        "color": "#96CBFE"
    },
    ".language-css .token.string": {
        "color": "#87C38A"
    },
    ".style .token.string": {
        "color": "#87C38A"
    },
    "atrule": {
        "color": "#F9EE98"
    },
    "attr-value": {
        "color": "#F9EE98"
    },
    "function": {
        "color": "#DAD085"
    },
    "regex": {
        "color": "#E9C062"
    },
    "important": {
        "color": "#fd971f",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _javascript = __webpack_require__(279);

var _javascript2 = _interopRequireDefault(_javascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;
exports.default = _javascript2.default;

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = __webpack_require__(397);

var _jsx2 = _interopRequireDefault(_jsx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;
exports.default = _jsx2.default;

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = jsx
jsx.displayName = 'jsx'
jsx.aliases = []
function jsx(Prism) {
  ;(function(Prism) {
    var javascript = Prism.util.clone(Prism.languages.javascript)
    Prism.languages.jsx = Prism.languages.extend('markup', javascript)
    Prism.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i
    Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i
    Prism.languages.jsx.tag.inside[
      'attr-value'
    ].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i
    Prism.languages.insertBefore(
      'inside',
      'attr-name',
      {
        spread: {
          pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
          inside: {
            punctuation: /\.{3}|[{}.]/,
            'attr-value': /\w+/
          }
        }
      },
      Prism.languages.jsx.tag
    )
    Prism.languages.insertBefore(
      'inside',
      'attr-value',
      {
        script: {
          // Allow for two levels of nesting
          pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
          inside: {
            'script-punctuation': {
              pattern: /^=(?={)/,
              alias: 'punctuation'
            },
            rest: Prism.languages.jsx
          },
          alias: 'language-javascript'
        }
      },
      Prism.languages.jsx.tag
    )
    // The following will handle plain text inside tags
    var stringifyToken = function(token) {
      if (!token) {
        return ''
      }
      if (typeof token === 'string') {
        return token
      }
      if (typeof token.content === 'string') {
        return token.content
      }
      return token.content.map(stringifyToken).join('')
    }
    var walkTokens = function(tokens) {
      var openedTags = []
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i]
        var notTagNorBrace = false
        if (typeof token !== 'string') {
          if (
            token.type === 'tag' &&
            token.content[0] &&
            token.content[0].type === 'tag'
          ) {
            // We found a tag, now find its kind
            if (token.content[0].content[0].content === '</') {
              // Closing tag
              if (
                openedTags.length > 0 &&
                openedTags[openedTags.length - 1].tagName ===
                  stringifyToken(token.content[0].content[1])
              ) {
                // Pop matching opening tag
                openedTags.pop()
              }
            } else {
              if (token.content[token.content.length - 1].content === '/>') {
                // Autoclosed tag, ignore
              } else {
                // Opening tag
                openedTags.push({
                  tagName: stringifyToken(token.content[0].content[1]),
                  openedBraces: 0
                })
              }
            }
          } else if (
            openedTags.length > 0 &&
            token.type === 'punctuation' &&
            token.content === '{'
          ) {
            // Here we might have entered a JSX context inside a tag
            openedTags[openedTags.length - 1].openedBraces++
          } else if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces > 0 &&
            token.type === 'punctuation' &&
            token.content === '}'
          ) {
            // Here we might have left a JSX context inside a tag
            openedTags[openedTags.length - 1].openedBraces--
          } else {
            notTagNorBrace = true
          }
        }
        if (notTagNorBrace || typeof token === 'string') {
          if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces === 0
          ) {
            // Here we are inside a tag, and not inside a JSX context.
            // That's plain text: drop any tokens matched.
            var plainText = stringifyToken(token)
            // And merge text with adjacent text
            if (
              i < tokens.length - 1 &&
              (typeof tokens[i + 1] === 'string' ||
                tokens[i + 1].type === 'plain-text')
            ) {
              plainText += stringifyToken(tokens[i + 1])
              tokens.splice(i + 1, 1)
            }
            if (
              i > 0 &&
              (typeof tokens[i - 1] === 'string' ||
                tokens[i - 1].type === 'plain-text')
            ) {
              plainText = stringifyToken(tokens[i - 1]) + plainText
              tokens.splice(i - 1, 1)
              i--
            }
            tokens[i] = new Prism.Token(
              'plain-text',
              plainText,
              null,
              plainText
            )
          }
        }
        if (token.content && typeof token.content !== 'string') {
          walkTokens(token.content)
        }
      }
    }
    Prism.hooks.add('after-tokenize', function(env) {
      if (env.language !== 'jsx' && env.language !== 'tsx') {
        return
      }
      walkTokens(env.tokens)
    })
  })(Prism)
}


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(95);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = __webpack_require__(225);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = _styledComponents2.default.div([], {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}, function (props) {
  return {
    backgroundSize: props.size || 'cover',
    backgroundImage: 'url(' + props.src + ')'
  };
}, _styledSystem.width, _styledSystem.height, function (props) {
  return props.css;
});

Image.propTypes = _extends({}, _styledSystem.width.propTypes, _styledSystem.height.propTypes);

Image.defaultProps = {
  width: '100vw',
  height: '100vh'
};

exports.default = Image;

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(234);

var _updaters = __webpack_require__(231);

var _constants = __webpack_require__(227);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _context.withDeck)((_temp = _class = function (_React$Component) {
  _inherits(Appear, _React$Component);

  function Appear(props) {
    _classCallCheck(this, Appear);

    var _this = _possibleConstructorReturn(this, (Appear.__proto__ || Object.getPrototypeOf(Appear)).call(this, props));

    var _props$deck = props.deck,
        update = _props$deck.update,
        index = _props$deck.index;

    var steps = _react2.default.Children.toArray(props.children).length;
    update((0, _updaters.setSteps)(index, steps));
    return _this;
  }

  _createClass(Appear, [{
    key: 'render',
    value: function render() {
      var children = _react2.default.Children.toArray(this.props.children).map(function (child) {
        return typeof child === 'string' ? _react2.default.createElement(
          'div',
          null,
          child
        ) : child;
      });
      var _props$deck2 = this.props.deck,
          step = _props$deck2.step,
          mode = _props$deck2.mode;


      if (mode === _constants.modes.grid) {
        return children;
      }

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        children.map(function (child, i) {
          return _react2.default.cloneElement(child, {
            key: i,
            style: {
              visibility: step >= i + 1 ? 'visible' : 'hidden'
            }
          });
        })
      );
    }
  }]);

  return Appear;
}(_react2.default.Component), _class.propTypes = {
  children: _propTypes2.default.array.isRequired,
  deck: _propTypes2.default.object.isRequired
}, _temp));

/***/ }),
/* 400 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export meta */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdx_js_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Flexbox__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_NetworkTopology__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_NetworkPackets__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Lag__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdx_js_mdx__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdx_js_mdx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__mdx_js_mdx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_tweet_embed__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mdx_deck__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mdx_deck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_mdx_deck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__theme__ = __webpack_require__(294);
/* unused harmony reexport theme */
function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}var meta={};/* harmony default export */ __webpack_exports__["a"] = ([function(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'Multiplayer online games with JavaScript'));},function(_ref2){var components=_ref2.components,props=_objectWithoutProperties(_ref2,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{alignItems:'center',justifyContent:'space-around'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(507),style:{maxWidth:"25vw"}})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:{margin:"0 2em"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h1',null,'About Me'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'Samuel Hurel'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'\uD83D\uDDA5 SYOS',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br',null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('small',null,'Shape Your Own Sound')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(508),style:{height:"1em",margin:"0 .4em -.2em 0"}}),'@IcanDivideBy0')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(509),style:{maxWidth:"25vw"}}))));},function(_ref3){var components=_ref3.components,props=_objectWithoutProperties(_ref3,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'Faire du neuf avec du vieux'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(510),style:{maxWidth:"80%"}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'pre',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'code',components:components,parentName:'pre',props:{"className":"language-notes"}},'20 juillet 18h00 - 23 juillet 06h00 - 60h\n')));},function(_ref4){var components=_ref4.components,props=_objectWithoutProperties(_ref4,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'ul',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Multiplayer'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Browser based'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Short game'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Fast-paced action')));},function(_ref5){var components=_ref5.components,props=_objectWithoutProperties(_ref5,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{alignItems:'center',justifyContent:'space-around'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(511),style:{flex:1,maxWidth:"40%"}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{style:{fontFamily:"Roboto",fontWeight:700,fontSize:"3rem"}},'+'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(512),style:{flex:1,maxWidth:"40%"}})));},function(_ref6){var components=_ref6.components,props=_objectWithoutProperties(_ref6,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'Bombersplash'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(513),style:{maxWidth:"80%"}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'p',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'a',components:components,parentName:'p',props:{"href":"https://bombersplash.online"}},'bombersplash.online')));},function(_ref7){var components=_ref7.components,props=_objectWithoutProperties(_ref7,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'Multi-player'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'p',components:components},'It\'s all about data-syncing'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{alignItems:'center',justifyContent:'space-between',style:{maxHeight:"60vh"}},[0,1,2].map(function(idx){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{key:idx,style:{flex:1,margin:"0 .5em",textAlign:"center"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(224),alt:'',style:{width:"100%"}}));})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'pre',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'code',components:components,parentName:'pre',props:{"className":"language-js"}},'{ data: ... }\n')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'pre',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'code',components:components,parentName:'pre',props:{"className":"language-notes"}},'Sync world state across network\n')));},function(_ref8){var components=_ref8.components,props=_objectWithoutProperties(_ref8,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'Network architectures'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h2',components:components},'Player as host'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{alignItems:'center',justifyContent:'space-between',style:{maxHeight:"60vh"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:{flex:1.5,marginRight:".5em"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_NetworkTopology__["a" /* default */],null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{flexDirection:'column',style:{flex:1,marginLeft:".5em",maxHeight:"60vh"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(514),alt:'',style:{flex:1,marginBottom:".5em",maxWidth:"100%",maxHeight:'calc(30vh - .5em)'}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(515),alt:'',style:{flex:1,marginTop:".5em",maxWidth:"100%",maxHeight:'calc(30vh - .5em)'}}))));},function(_ref9){var components=_ref9.components,props=_objectWithoutProperties(_ref9,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'Problems'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'ul',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Host disconnect'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Uneven lag'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Public IP'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Cheat'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Pirating')));},function(_ref10){var components=_ref10.components,props=_objectWithoutProperties(_ref10,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'Network architectures'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h2',components:components},'Server as host'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{alignItems:'center',justifyContent:'space-between',style:{maxHeight:"60vh"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:{flex:1.5,marginRight:".5em"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_NetworkTopology__["a" /* default */],{withServer:true})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{flexDirection:'column',style:{flex:1,marginLeft:".5em",maxHeight:"60vh"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(516),alt:'',style:{marginBottom:".5em",maxWidth:"100%",maxHeight:'calc(30vh - .5em)'}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(517),alt:'',style:{marginTop:".5em",maxWidth:"100%",maxHeight:'calc(30vh - .5em)'}}))));},function(_ref11){var components=_ref11.components,props=_objectWithoutProperties(_ref11,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'Problems'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'ul',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Game instance on the server'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Cheat')));},function(_ref12){var components=_ref12.components,props=_objectWithoutProperties(_ref12,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'Network'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h2',components:components},'Data packets content'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_NetworkPackets__["a" /* default */],{symetrical:true,outLabel:'inputs',inLabel:'world state',style:{margin:"3em 0"}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'p',components:components},'~30 packets/sec',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br',null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('small',null,'symetrical?')));},function(_ref13){var components=_ref13.components,props=_objectWithoutProperties(_ref13,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'Network'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{justifyContent:'space-between'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:{flex:1}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h2',null,'TCP'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{style:{textAlign:'left'}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',null,'Reliable'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',null,'Ordered'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',null,'Head of line blocking'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',null,'Easily secured'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',null,'Browsers use pool of connections'))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:{flex:1}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h2',null,'UDP'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',{style:{textAlign:'left'}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',null,'No connection required, just send the data!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',null,'Unreliable'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',null,'Unordered'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',null,'Vulnerable'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',null,'Not present in browsers')))));},function(_ref14){var components=_ref14.components,props=_objectWithoutProperties(_ref14,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'WebRTC to the rescue!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'ul',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'p2p architecture'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Mostly used for media sreaming'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'The only avaliable option left for UDP'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Good for connecting clients, harder to use on your server'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Encrypted')));},function(_ref15){var components=_ref15.components,props=_objectWithoutProperties(_ref15,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'WebRTC DataChannels'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(518),style:{maxWidth:"100%"}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr',null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,'JSON.stringify / Protobuf?')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'pre',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'code',components:components,parentName:'pre',props:{"className":"language-notes"}},'ICE for discovering public IP & NAT trasversal\n')));},function(_ref16){var components=_ref16.components,props=_objectWithoutProperties(_ref16,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'Reducing lag'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Lag__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'pre',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'code',components:components,parentName:'pre',props:{"className":"language-notes"}},'PERCEIVED lag\n')));},function(_ref17){var components=_ref17.components,props=_objectWithoutProperties(_ref17,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'Demo'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'p',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'a',components:components,parentName:'p',props:{"href":"https://prez.bombersplash.online/#16"}},'https://prez.bombersplash.online/#16')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(519),style:{maxWidth:"100%"}}));},function(_ref18){var components=_ref18.components,props=_objectWithoutProperties(_ref18,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'Running out of time!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('iframe',{type:'text/html',width:'640',height:'360',src:'https://www.youtube.com/embed/ptzGjvvUNE8?&autoplay=0&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=1wUgMEaUUrM',frameBorder:'0',allowFullScreen:true}));},function(_ref19){var components=_ref19.components,props=_objectWithoutProperties(_ref19,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'Votes!'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(520),style:{maxWidth:"100%"}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'ul',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Awesome community'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Tons of new ideas')));},function(_ref20){var components=_ref20.components,props=_objectWithoutProperties(_ref20,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'Let\u2019s push it a bit'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'ul',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Rework the graphic engine'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Add physics')));},function(_ref21){var components=_ref21.components,props=_objectWithoutProperties(_ref21,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'Tiles sprite'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(521),style:{width:"50vw"// imageRendering: "pixelated"
}}));},function(_ref22){var components=_ref22.components,props=_objectWithoutProperties(_ref22,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'DOM \u2192 Canvas'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(522),style:{width:"50vw"// imageRendering: "pixelated"
}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'pre',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'code',components:components,parentName:'pre',props:{"className":"language-notes"}},'Each square is a div!\nDOM fast enouth, for now\nReact tree reconciliation is slow but PureComponents makes it OK\nBomb splash particles ?\nCanvas still slow\n')));},function(_ref23){var components=_ref23.components,props=_objectWithoutProperties(_ref23,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'Canvas \u2192 n ','*',' Canvas'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{flexDirection:'column',alignItems:'center',style:{maxHeight:"50vh",maxWidth:"80vw"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{style:{flex:1},flexDirection:'row'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{style:{flex:"1 1 33.33%",margin:8,padding:8,outline:"1px solid rgba(255, 0, 0, .5)"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(523),style:{objectFit:"contain",maxWidth:"calc(80vw / 3)"}})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{style:{flex:"1 1 33.33%",objectFit:"contain",margin:8,padding:8,outline:"1px solid rgba(255, 0, 0, .5)"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(524),style:{objectFit:"contain",maxWidth:"calc(80vw / 3)"}})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{style:{flex:"1 1 33.33%",margin:8,padding:8,outline:"1px solid rgba(255, 0, 0, .5)"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(525),style:{objectFit:"contain",maxWidth:"calc(80vw / 3)"}}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{style:{flex:1,objectFit:"contain",margin:8,padding:8,outline:"1px solid rgba(255, 0, 0, .5)"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(526),style:{objectFit:"contain",maxWidth:"calc(80vw / 3)"}}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'pre',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'code',components:components,parentName:'pre',props:{"className":"language-notes"}},'Offscreen canvas\nNot in DOM\nRender rate MUCH lower\n')));},function(_ref24){var components=_ref24.components,props=_objectWithoutProperties(_ref24,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'The splashes case'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{flexDirection:'column',alignItems:'center',style:{maxHeight:"50vh",maxWidth:"80vw"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{style:{flex:1,objectFit:"contain",margin:8,padding:8}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(527),style:{objectFit:"contain"}})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{alignItems:'stretch',justifyContent:'center',style:{flex:1,objectFit:"contain",margin:8,padding:8,maxWidth:"100%"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{style:{flex:"1 1 40%",objectFit:"contain",margin:8,padding:8,maxWidth:"40%"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(528),style:{objectFit:"contain",maxWidth:"100%"}})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:{margin:16,alignSelf:"center"}},'\u2192'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{style:{flex:"1 1 40%",objectFit:"contain",margin:8,padding:8,maxWidth:"40%"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(295),style:{objectFit:"contain",maxWidth:"100%"}})))));},function(_ref25){var components=_ref25.components,props=_objectWithoutProperties(_ref25,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'Canvas compositing'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('iframe',{src:'https://mdn.mozillademos.org/en-US/docs/Web/API/Canvas_API/Tutorial/Compositing/Example$samples/Compositing_example?revision=1330821',style:{height:"50vh",width:"60vw",background:"#fff",paddingLeft:16},frameBorder:'0'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'pre',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'code',components:components,parentName:'pre',props:{"className":"language-notes"}},'26 composite operations\n')));},function(_ref26){var components=_ref26.components,props=_objectWithoutProperties(_ref26,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'pre',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'code',components:components,parentName:'pre',props:{"className":"language-js"}},'const ctx = canvas.getContext("2d");\nctx.globalCompositeOperation = "destination-out";\n')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{flexDirection:'column',alignItems:'center',style:{flex:1,objectFit:"contain",maxHeight:"50vh",maxWidth:"80vw",margin:"16px 0"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{alignItems:'stretch',style:{flex:1,objectFit:"contain",margin:8,padding:8,maxWidth:"100%"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{style:{flex:"1 1 25%",objectFit:"contain",margin:8,padding:8,outline:"1px solid rgba(255, 0, 0, .5)"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(529),style:{objectFit:"contain",maxWidth:"100%"}})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:{margin:16,alignSelf:"center"}},'+'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{style:{flex:"1 1 25%",objectFit:"contain",margin:8,padding:8,outline:"1px solid rgba(255, 0, 0, .5)"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(530),style:{objectFit:"contain",maxWidth:"100%"}})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:{margin:16,alignSelf:"center"}},'='),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{style:{flex:"1 1 25%",objectFit:"contain",margin:8,padding:8,outline:"1px solid rgba(255, 0, 0, .5)"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(531),style:{objectFit:"contain",maxWidth:"100%"}}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{alignItems:'stretch',style:{flex:1,objectFit:"contain",margin:8,padding:8}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(295),style:{objectFit:"contain",maxWidth:"100%"}}))));},function(_ref27){var components=_ref27.components,props=_objectWithoutProperties(_ref27,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'From AAbb to Physics engine'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'ul',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Computationally intensive'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'A good fit for trying WebAssembly')));},function(_ref28){var components=_ref28.components,props=_objectWithoutProperties(_ref28,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'WebAssembly'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'ul',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Binary code in browser'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'No garbage collection','*'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'No exceptions','*')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(532)}));},function(_ref29){var components=_ref29.components,props=_objectWithoutProperties(_ref29,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:{zoom:1.2}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_tweet_embed__["a" /* default */],{id:'1021532074153394176'})));},function(_ref30){var components=_ref30.components,props=_objectWithoutProperties(_ref30,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{justifyContent:'center'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{src:__webpack_require__(533),style:{float:"left"}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h1',{style:{lineHeight:"1.25",fontSize:"3em",marginBottom:"16px",marginTop:"16px",color:"heading",textTransform:"uppercase",fontWeight:"600"}},'ust?')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'ul',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Made to replace C/C++'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'No garbage collection / exceptions'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Young, yet rich ecosystem'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'a',components:components,parentName:'li',props:{"href":"http://arewegameyet.com/#eco"}},'AreWeGameYet.com')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'a',components:components,parentName:'li',props:{"href":"https://www.nphysics.org/"}},'nphysics'))));},function(_ref31){var components=_ref31.components,props=_objectWithoutProperties(_ref31,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'WebAssembly + Rust'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'pre',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'code',components:components,parentName:'pre',props:{"className":"language-sh"}},'cargo +nightly build --target wasm32-unknown-unknown\nwasm-bindgen --browser ./target/.../physics.wasm\n')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'pre',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'code',components:components,parentName:'pre',props:{"className":"language-js"}},'fetch("./physics.wasm")\n  .then(response =>\n    WebAssembly.instantiateStreaming(response, {\n      ...dependencies,\n    })\n  )\n  .then(({ instance }) => {\n    instance.myWasmFunction(); // YAY!\n  });\n')));},function(_ref32){var components=_ref32.components,props=_objectWithoutProperties(_ref32,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('video',{controls:'1',loop:'1',name:'media'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source',{src:__webpack_require__(534),type:'video/mp4'})));},function(_ref33){var components=_ref33.components,props=_objectWithoutProperties(_ref33,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'What\u2019s next?'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'ul',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'Music & Sounds'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'li',components:components,parentName:'ul'},'WebGL2')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_mdx_deck__["Appear"],null,[__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{key:'whatever'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Flexbox__["a" /* default */],{style:{maxWidth:"80vw"},justifyContent:'center',alignItems:'center'},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:{margin:16}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_mdx_deck__["Code"],{className:'glsl'},["#version 300 es","","void main() {","  gl_Position =","    projectionMatrix *","    modelViewMatrix *","    vertexPosition;","}"].join("\n"))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:{margin:16}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_mdx_deck__["Code"],{className:'css'},["#my-presentation {","  /* height / 2 / tan(FOVY / 2) */","  perspective: ...px;","  /* modelViewMatrix */","  transform: maxrix3d(...);","}"].join("\n")))))]),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'pre',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'code',components:components,parentName:'pre',props:{"className":"language-notes"}},'lag is about perception, and ... 3D as well\n')));},function(_ref34){var components=_ref34.components,props=_objectWithoutProperties(_ref34,['components']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'wrapper',components:components},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__mdx_js_tag__["MDXTag"],{name:'h1',components:components},'Thank you!'));}]);

/***/ }),
/* 401 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(95);
var _templateObject=_taggedTemplateLiteral(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"],["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}// The number `0` with no unit is a valid CSS length, see:
//   https://www.w3.org/TR/CSS2/syndata.html#length-units
// Though it might be inappropriate/avoidable in certain contexts, if it is
// valid CSS, we should allow it.
var isTruthyOrZero=function isTruthyOrZero(value){return value||value===0;};var Flexbox=Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["default"])(function(_ref){var alignContent=_ref.alignContent,alignItems=_ref.alignItems,alignSelf=_ref.alignSelf,children=_ref.children,display=_ref.display,element=_ref.element,flex=_ref.flex,flexBasis=_ref.flexBasis,flexDirection=_ref.flexDirection,flexGrow=_ref.flexGrow,flexShrink=_ref.flexShrink,flexWrap=_ref.flexWrap,height=_ref.height,justifyContent=_ref.justifyContent,margin=_ref.margin,marginBottom=_ref.marginBottom,marginLeft=_ref.marginLeft,marginRight=_ref.marginRight,marginTop=_ref.marginTop,maxHeight=_ref.maxHeight,maxWidth=_ref.maxWidth,minHeight=_ref.minHeight,minWidth=_ref.minWidth,order=_ref.order,padding=_ref.padding,paddingBottom=_ref.paddingBottom,paddingLeft=_ref.paddingLeft,paddingRight=_ref.paddingRight,paddingTop=_ref.paddingTop,width=_ref.width,props=_objectWithoutProperties(_ref,["alignContent","alignItems","alignSelf","children","display","element","flex","flexBasis","flexDirection","flexGrow","flexShrink","flexWrap","height","justifyContent","margin","marginBottom","marginLeft","marginRight","marginTop","maxHeight","maxWidth","minHeight","minWidth","order","padding","paddingBottom","paddingLeft","paddingRight","paddingTop","width"]);return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(element,props,children);})(_templateObject,function(props){return props.alignContent?"align-content: "+props.alignContent+";":"";},function(props){return props.alignSelf?"align-self: "+props.alignSelf+";":"";},function(props){return props.alignItems?"align-items: "+props.alignItems+";":"";},function(props){return props.display?"display: "+props.display+";":"";},function(props){return isTruthyOrZero(props.flex)?"flex: "+props.flex+";":"";},function(props){return isTruthyOrZero(props.flexBasis)?"flex-basis: "+props.flexBasis+";":"";},function(props){return props.flexDirection?"flex-direction: "+props.flexDirection+";":"";},function(props){return isTruthyOrZero(props.flexGrow)?"flex-grow: "+props.flexGrow+";":"";},function(props){return isTruthyOrZero(props.flexShrink)?"flex-shrink: "+props.flexShrink+";":"";},function(props){return props.flexWrap?"flex-wrap: "+props.flexWrap+";":"";},function(props){return isTruthyOrZero(props.height)?"height: "+props.height+";":"";},function(props){return props.justifyContent?"justify-content: "+props.justifyContent+";":"";},function(props){return isTruthyOrZero(props.margin)?"margin: "+props.margin+";":"";},function(props){return isTruthyOrZero(props.marginBottom)?"margin-bottom: "+props.marginBottom+";":"";},function(props){return isTruthyOrZero(props.marginLeft)?"margin-left: "+props.marginLeft+";":"";},function(props){return isTruthyOrZero(props.marginRight)?"margin-right: "+props.marginRight+";":"";},function(props){return isTruthyOrZero(props.marginTop)?"margin-top: "+props.marginTop+";":"";},function(props){return isTruthyOrZero(props.maxHeight)?"max-height: "+props.maxHeight+";":"";},function(props){return isTruthyOrZero(props.maxWidth)?"max-width: "+props.maxWidth+";":"";},function(props){return isTruthyOrZero(props.minHeight)?"min-height: "+props.minHeight+";":"";},function(props){return isTruthyOrZero(props.minWidth)?"min-width: "+props.minWidth+";":"";},function(props){return isTruthyOrZero(props.order)?"order: "+props.order+";":"";},function(props){return isTruthyOrZero(props.padding)?"padding: "+props.padding+";":"";},function(props){return isTruthyOrZero(props.paddingBottom)?"padding-bottom: "+props.paddingBottom+";":"";},function(props){return isTruthyOrZero(props.paddingLeft)?"padding-left: "+props.paddingLeft+";":"";},function(props){return isTruthyOrZero(props.paddingRight)?"padding-right: "+props.paddingRight+";":"";},function(props){return isTruthyOrZero(props.paddingTop)?"padding-top: "+props.paddingTop+";":"";},function(props){return isTruthyOrZero(props.width)?"width: "+props.width+";":"";});Flexbox.propTypes={alignContent:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(["center","flex-end","flex-start","space-around","space-between","stretch"]),alignItems:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(["baseline","center","flex-end","flex-start","stretch"]),alignSelf:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(["baseline","center","flex-end","flex-start","stretch"]),children:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.node,display:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(["flex","inline-flex"]),element:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(["article","aside","div","figure","footer","header","main","nav","section"]),flex:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),flexBasis:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),flexDirection:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(["column-reverse","column","row-reverse","row"]),flexGrow:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),flexShrink:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),flexWrap:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(["nowrap","wrap-reverse","wrap"]),height:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),inline:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,justifyContent:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(["center","flex-end","flex-start","space-around","space-between"]),margin:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),marginBottom:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),marginLeft:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),marginRight:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),marginTop:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),maxHeight:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),maxWidth:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),minHeight:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),minWidth:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),order:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,padding:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),paddingBottom:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),paddingLeft:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),paddingRight:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),paddingTop:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),style:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,width:__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number])};Flexbox.defaultProps={display:"flex",element:"div"};/* harmony default export */ __webpack_exports__["a"] = (Flexbox);

/***/ }),
/* 402 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(95);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n  width: 100%;\n  height: 0;\n  padding-bottom: 60%;\n  position: relative;\n"],["\n  width: 100%;\n  height: 0;\n  padding-bottom: 60%;\n  position: relative;\n"]),_templateObject2=_taggedTemplateLiteral(["\n  z-index: 10;\n  position: absolute;\n  width: 20%;\n  height: 0;\n  padding-bottom: 20%;\n  transform: translate(-50%, -50%);\n\n  img {\n    width: 100%;\n  }\n"],["\n  z-index: 10;\n  position: absolute;\n  width: 20%;\n  height: 0;\n  padding-bottom: 20%;\n  transform: translate(-50%, -50%);\n\n  img {\n    width: 100%;\n  }\n"]),_templateObject3=_taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"],["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Wrapper=__WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject);var Image=Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["default"])(function(_ref){var src=_ref.src,_ref$alt=_ref.alt,alt=_ref$alt===undefined?"":_ref$alt,children=_ref.children,props=_objectWithoutProperties(_ref,["src","alt","children"]);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",props,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img",{src:src,alt:alt}),children);})(_templateObject2);var Svg=__WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].svg(_templateObject3);var NetworkTopology=function(_React$Component){_inherits(NetworkTopology,_React$Component);function NetworkTopology(){_classCallCheck(this,NetworkTopology);return _possibleConstructorReturn(this,(NetworkTopology.__proto__||Object.getPrototypeOf(NetworkTopology)).apply(this,arguments));}_createClass(NetworkTopology,[{key:"render",value:function render(){var withServer=this.props.withServer;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image,{src:withServer?__webpack_require__(254):__webpack_require__(224),style:{top:"20%",left:"50%"}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image,{src:__webpack_require__(224),style:{top:"50%",left:"10%"}}),withServer?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image,{src:__webpack_require__(224),style:{top:"80%",left:"35%"}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image,{src:__webpack_require__(224),style:{top:"80%",left:"65%"}})):__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image,{src:__webpack_require__(224),style:{top:"80%",left:"50%"}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image,{src:__webpack_require__(224),style:{top:"50%",left:"90%"}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Svg,{viewBox:"0 0 100 60"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path",{d:"M10 30 L 50 15",fill:"transparent",stroke:"#fff",strokeWidth:"1"}),withServer?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path",{d:"M35 50 L 50 15",fill:"transparent",stroke:"#fff",strokeWidth:"1"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path",{d:"M65 50 L 50 15",fill:"transparent",stroke:"#fff",strokeWidth:"1"})):__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path",{d:"M50 50 L 50 15",fill:"transparent",stroke:"#fff",strokeWidth:"1"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path",{d:"M90 30 L 50 15",fill:"transparent",stroke:"#fff",strokeWidth:"1"})));}}]);return NetworkTopology;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (NetworkTopology);

/***/ }),
/* 403 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n"],["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n"]),_templateObject2=_taggedTemplateLiteral(["\n  z-index: 10;\n  flex: 1;\n  text-align: center;\n\n  img {\n    width: 40%;\n    height: 40%;\n  }\n"],["\n  z-index: 10;\n  flex: 1;\n  text-align: center;\n\n  img {\n    width: 40%;\n    height: 40%;\n  }\n"]),_templateObject3=_taggedTemplateLiteral(["\n  from {\n    transform: translate(-80px, 20px);\n  }\n  to {\n    transform: translate(0px, 20px);\n  }\n"],["\n  from {\n    transform: translate(-80px, 20px);\n  }\n  to {\n    transform: translate(0px, 20px);\n  }\n"]),_templateObject4=_taggedTemplateLiteral(["\n  from {\n    transform: translate(0px, 80px);\n  }\n  to {\n    transform: translate(-80px, 80px);\n  }\n"],["\n  from {\n    transform: translate(0px, 80px);\n  }\n  to {\n    transform: translate(-80px, 80px);\n  }\n"]),_templateObject5=_taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  height: 100%;\n\n  svg {\n    width: 100%;\n    transform: translate(-50%, -50%);\n\n    .packetsOut {\n      animation: "," 1s linear infinite;\n    }\n    .packetsIn {\n      animation: "," 1s linear infinite;\n    }\n  }\n"],["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  height: 100%;\n\n  svg {\n    width: 100%;\n    transform: translate(-50%, -50%);\n\n    .packetsOut {\n      animation: "," 1s linear infinite;\n    }\n    .packetsIn {\n      animation: "," 1s linear infinite;\n    }\n  }\n"]);function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Wrapper=__WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject);var Image=__WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject2);var packetsOut=Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["keyframes"])(_templateObject3);var packetsIn=Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["keyframes"])(_templateObject4);var Anim=__WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject5,packetsOut,packetsIn);var NetworkPackets=function(_React$Component){_inherits(NetworkPackets,_React$Component);function NetworkPackets(){_classCallCheck(this,NetworkPackets);return _possibleConstructorReturn(this,(NetworkPackets.__proto__||Object.getPrototypeOf(NetworkPackets)).apply(this,arguments));}_createClass(NetworkPackets,[{key:"render",value:function render(){var _props=this.props,outLabel=_props.outLabel,inLabel=_props.inLabel,symetrical=_props.symetrical,props=_objectWithoutProperties(_props,["outLabel","inLabel","symetrical"]);var baseRatioOut=40;var baseRatioIn=baseRatioOut*(symetrical?1:2);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper,props,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img",{src:__webpack_require__(224),alt:""})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Anim,{className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()({symetrical:symetrical})},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg",{viewBox:"0 0 400 200"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g",null,outLabel&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("text",{x:"200",y:"40",fontSize:"40",textAnchor:"middle",fill:"#fff"},outLabel),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path",{d:"M0 70 H 400",fill:"transparent",stroke:"#aa6622",strokeWidth:"5"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g",{className:"packetsOut"},Array.from({length:12},function(_,idx){return idx*baseRatioOut;}).map(function(v){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle",{key:v,cx:v,cy:"50",r:"10",fill:"#dbc244",stroke:"#aa6622",strokeWidth:"5"});}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path",{d:"M0 130 H 400",fill:"transparent",stroke:"#245269",strokeWidth:"5"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g",{className:"packetsIn"},Array.from({length:symetrical?12:6},function(_,idx){return idx*baseRatioIn;}).map(function(v){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle",{key:v,cx:v,cy:"50",r:"10",fill:"#5ba3c7",stroke:"#245269",strokeWidth:"5"});})),inLabel&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("text",{x:"200",y:"180",fontSize:"40",textAnchor:"middle",fill:"#fff"},inLabel)))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img",{src:__webpack_require__(254),alt:""})));}}]);return NetworkPackets;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (NetworkPackets);

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 405 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(95);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n  font-size: 32px;\n  color: #fff;\n  background: transparent;\n  border: 0.1em solid rgb(170, 51, 51);\n  transition: color: .2s linear;\n  cursor: pointer;\n\n  &:hover {\n    color: rgb(170, 51, 51);\n  }\n"],["\n  font-size: 32px;\n  color: #fff;\n  background: transparent;\n  border: 0.1em solid rgb(170, 51, 51);\n  transition: color: .2s linear;\n  cursor: pointer;\n\n  &:hover {\n    color: rgb(170, 51, 51);\n  }\n"]),_templateObject2=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n"],["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n"]),_templateObject3=_taggedTemplateLiteral(["\n  font-size: 80%;\n  color: rgb(248, 248, 242);\n  background: rgb(39, 40, 34);\n  text-shadow: rgba(0, 0, 0, 0.3) 0px 1px;\n  font-family: Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;\n  text-align: left;\n  line-height: 1.5;\n  padding: 0.2em;\n  margin: 0.2em 0px;\n  border-radius: 0.3em;\n  font-size: 60%;\n"],["\n  font-size: 80%;\n  color: rgb(248, 248, 242);\n  background: rgb(39, 40, 34);\n  text-shadow: rgba(0, 0, 0, 0.3) 0px 1px;\n  font-family: Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace;\n  text-align: left;\n  line-height: 1.5;\n  padding: 0.2em;\n  margin: 0.2em 0px;\n  border-radius: 0.3em;\n  font-size: 60%;\n"]),_templateObject4=_taggedTemplateLiteral(["\n  z-index: 10;\n  flex: 1;\n  text-align: center;\n\n  img {\n    width: 40%;\n    height: 40%;\n  }\n"],["\n  z-index: 10;\n  flex: 1;\n  text-align: center;\n\n  img {\n    width: 40%;\n    height: 40%;\n  }\n"]),_templateObject5=_taggedTemplateLiteral(["\n  0% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n  99% {\n    transform: translateX(400px);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(400px);\n    opacity: 0;\n  }\n"],["\n  0% {\n    transform: translateX(0px);\n    opacity: 1;\n  }\n  99% {\n    transform: translateX(400px);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(400px);\n    opacity: 0;\n  }\n"]),_templateObject6=_taggedTemplateLiteral(["\n  from {\n    transform: translateX(400px);\n  }\n  to {\n    transform: translateX(0px);\n  }\n"],["\n  from {\n    transform: translateX(400px);\n  }\n  to {\n    transform: translateX(0px);\n  }\n"]),_templateObject7=_taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  height: 100%;\n\n  svg {\n    width: 100%;\n    transform: translate(-50%, -50%);\n\n    .packetOut {\n      animation: "," 5s linear forwards;\n      animation-iteration-count: 1;\n    }\n    .packetIn {\n      animation: "," 5s linear forwards;\n      animation-iteration-count: 1;\n    }\n  }\n"],["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  height: 100%;\n\n  svg {\n    width: 100%;\n    transform: translate(-50%, -50%);\n\n    .packetOut {\n      animation: "," 5s linear forwards;\n      animation-iteration-count: 1;\n    }\n    .packetIn {\n      animation: "," 5s linear forwards;\n      animation-iteration-count: 1;\n    }\n  }\n"]);function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Button=__WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].button(_templateObject);var Wrapper=__WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject2);var GraphicWrapper=__WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject2);var Code=__WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].pre(_templateObject3);var Image=__WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject4);var packetOut=Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["keyframes"])(_templateObject5);var packetIn=Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["keyframes"])(_templateObject6);var AnimOut=__WEBPACK_IMPORTED_MODULE_1_styled_components__["default"].div(_templateObject7,packetOut,packetIn);var Lag=function(_React$Component){_inherits(Lag,_React$Component);function Lag(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Lag);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Lag.__proto__||Object.getPrototypeOf(Lag)).call.apply(_ref,[this].concat(args))),_this),_this.state={playing:false,clientPackets:[],serverPackets:[],serverLastReceivedPacketId:0},_this.lastClientPacketId=0,_this.lastServerPacketId=0,_this.handlePlay=function(){_this.serverSendInterval=setInterval(_this.serverSend,2000);_this.clientSendInterval=setInterval(_this.clientSend,1000);_this.setState({playing:true});},_this.clientSend=function(){var packetId=++_this.lastClientPacketId;_this.setState({clientPackets:[].concat(_toConsumableArray(_this.state.clientPackets),[{id:packetId}])});setTimeout(function(){_this.setState({// clientPackets: this.state.clientPackets.filter(p => p.id !== packetId),
serverLastReceivedPacketId:packetId});},5000);},_this.serverSend=function(){var packetId=++_this.lastServerPacketId;var ackId=_this.state.serverLastReceivedPacketId;_this.setState({serverPackets:[].concat(_toConsumableArray(_this.state.serverPackets),[{id:packetId,ackId:ackId}])});setTimeout(function(){_this.setState({serverPackets:_this.state.serverPackets.filter(function(p){return p.id!==packetId;}),clientPackets:_this.state.clientPackets.filter(function(p){return p.id>(ackId===0?0:ackId+1);})});},5000);},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Lag,[{key:"componentDidMount",value:function componentDidMount(){this.handlePlay();}},{key:"componentWillUnmount",value:function componentWillUnmount(){clearInterval(this.serverSendInterval);clearInterval(this.clientSendInterval);}},{key:"render",value:function render(){var props=_objectWithoutProperties(this.props,[]);if(!this.state.playing)return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Button,{onClick:this.handlePlay},"Play");return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper,props,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{style:{height:"calc(1.6em * 10 + .4em)",flex:1,display:"flex",flexDirection:"column",alignItems:"flex-end",position:"relative",borderRight:".1em solid #fff",paddingRight:".2em",marginTop:"calc(-1.6em * 3 + .4em)"}},this.state.clientPackets.map(function(p){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Code,{key:p.id},"{ id: ",__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{style:{color:"red"}},p.id),", inputs }");}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{style:{position:"absolute",left:"100%",bottom:"-.5em",width:"200%",textAlign:"left",paddingLeft:"1em"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{style:{position:"absolute",display:"inline-block",border:".5em solid transparent",borderLeftColor:"#fff",bottom:0,left:0}}),"Apply to remote world state")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(GraphicWrapper,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img",{style:{transform:"translateX(-25%)"},src:__webpack_require__(224),alt:""})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AnimOut,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg",{viewBox:"0 0 400 200"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path",{d:"M0 70 H 400",fill:"transparent",stroke:"#aa6622",strokeWidth:"5"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g",{className:"packetsOut"},this.state.clientPackets.map(function(p){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g",{key:p.id,className:"packetOut"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle",{cx:"0",cy:"70",r:"20",fill:"#dbc244",stroke:"#aa6622",strokeWidth:"5"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("text",{x:"0",y:"70",fontSize:"20",textAnchor:"middle",alignmentBaseline:"middle",fill:"#000"},p.id));}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path",{d:"M0 130 H 400",fill:"transparent",stroke:"#245269",strokeWidth:"5"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g",{className:"packetsIn"},this.state.serverPackets.map(function(p){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g",{key:p.id,className:"packetIn"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle",{cx:"0",cy:"130",r:"20",fill:"#5ba3c7",stroke:"#245269",strokeWidth:"5"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("text",{x:"0",y:"120",fontSize:"10",textAnchor:"middle",alignmentBaseline:"middle",fill:"#000"},"ACK"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("text",{x:"0",y:"135",fontSize:"20",textAnchor:"middle",alignmentBaseline:"middle",fill:"#000"},p.ackId===0?0:p.ackId+1));}))))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img",{style:{transform:"translateX(25%)"},src:__webpack_require__(254),alt:""}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{style:{flex:1}},"Last received packet ID:",__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br",null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Code,{style:{fontSize:"100%",display:"inline-block",margin:".3em",padding:".2em .5em"}},this.state.serverLastReceivedPacketId)));}}]);return Lag;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (Lag);

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

const unified = __webpack_require__(407)
const toMDAST = __webpack_require__(420)
const squeeze = __webpack_require__(468)
const toMDXAST = __webpack_require__(471)
const mdxAstToMdxHast = __webpack_require__(472)
const mdxHastToJsx = __webpack_require__(500)

const {
  isImport,
  isExport,
  isExportDefault,
  BLOCKS_REGEX,
  EMPTY_NEWLINE
} = __webpack_require__(501)

const DEFAULT_OPTIONS = {
  footnotes: true,
  mdPlugins: [],
  hastPlugins: [],
  compilers: [],
  blocks: [BLOCKS_REGEX]
}

const tokenizeEsSyntax = (eat, value) => {
  const index = value.indexOf(EMPTY_NEWLINE)
  const subvalue = value.slice(0, index)

  if (isExport(subvalue) || isImport(subvalue)) {
    return eat(subvalue)({
      type: isExport(subvalue) ? 'export' : 'import',
      default: isExportDefault(subvalue),
      value: subvalue
    })
  }
}

tokenizeEsSyntax.locator = (value, fromIndex) => {
  return isExport(value) || isImport(value) ? -1 : 1
}

function esSyntax() {
  var Parser = this.Parser
  var tokenizers = Parser.prototype.blockTokenizers
  var methods = Parser.prototype.blockMethods

  tokenizers.esSyntax = tokenizeEsSyntax

  methods.splice(methods.indexOf('paragraph'), 0, 'esSyntax')
}

function createMdxAstCompiler(options) {
  const mdPlugins = options.mdPlugins

  const fn = unified()
    .use(toMDAST, options)
    .use(esSyntax)
    .use(squeeze, options)

  mdPlugins.forEach(plugin => {
    // handle [plugin, pluginOptions] syntax
    if (Array.isArray(plugin) && plugin.length > 1) {
      fn.use(plugin[0], plugin[1])
    } else {
      fn.use(plugin, options)
    }
  })

  fn.use(toMDXAST, options).use(mdxAstToMdxHast, options)

  return fn
}

function applyHastPluginsAndCompilers(compiler, options) {
  const hastPlugins = options.hastPlugins
  const compilers = options.compilers

  hastPlugins.forEach(plugin => {
    // handle [plugin, pluginOptions] syntax
    if (Array.isArray(plugin) && plugin.length > 1) {
      compiler.use(plugin[0], plugin[1])
    } else {
      compiler.use(plugin, options)
    }
  })

  compiler.use(mdxHastToJsx, options)

  for (const compilerPlugin of compilers) {
    compiler.use(compilerPlugin, options)
  }

  return compiler
}

function createCompiler(options) {
  const compiler = createMdxAstCompiler(options)
  const compilerWithPlugins = applyHastPluginsAndCompilers(compiler, options)

  return compilerWithPlugins
}

function sync(mdx, options) {
  const opts = Object.assign({}, DEFAULT_OPTIONS, options)
  const compiler = createCompiler(opts)

  const { contents } = compiler.processSync(mdx)

  return contents
}

async function compile(mdx, options = {}) {
  const opts = Object.assign({}, DEFAULT_OPTIONS, options)
  const compiler = createCompiler(opts)

  const { contents } = await compiler.process(mdx)

  return contents
}

compile.sync = sync

module.exports = compile
exports = compile
exports.sync = sync
exports.createMdxAstCompiler = createMdxAstCompiler
exports.default = compile


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Dependencies. */
var extend = __webpack_require__(408)
var bail = __webpack_require__(409)
var vfile = __webpack_require__(410)
var trough = __webpack_require__(416)
var string = __webpack_require__(418)
var plain = __webpack_require__(419)

/* Expose a frozen processor. */
module.exports = unified().freeze()

var slice = [].slice
var own = {}.hasOwnProperty

/* Process pipeline. */
var pipeline = trough()
  .use(pipelineParse)
  .use(pipelineRun)
  .use(pipelineStringify)

function pipelineParse(p, ctx) {
  ctx.tree = p.parse(ctx.file)
}

function pipelineRun(p, ctx, next) {
  p.run(ctx.tree, ctx.file, done)

  function done(err, tree, file) {
    if (err) {
      next(err)
    } else {
      ctx.tree = tree
      ctx.file = file
      next()
    }
  }
}

function pipelineStringify(p, ctx) {
  ctx.file.contents = p.stringify(ctx.tree, ctx.file)
}

/* Function to create the first processor. */
function unified() {
  var attachers = []
  var transformers = trough()
  var namespace = {}
  var frozen = false
  var freezeIndex = -1

  /* Data management. */
  processor.data = data

  /* Lock. */
  processor.freeze = freeze

  /* Plug-ins. */
  processor.attachers = attachers
  processor.use = use

  /* API. */
  processor.parse = parse
  processor.stringify = stringify
  processor.run = run
  processor.runSync = runSync
  processor.process = process
  processor.processSync = processSync

  /* Expose. */
  return processor

  /* Create a new processor based on the processor
   * in the current scope. */
  function processor() {
    var destination = unified()
    var length = attachers.length
    var index = -1

    while (++index < length) {
      destination.use.apply(null, attachers[index])
    }

    destination.data(extend(true, {}, namespace))

    return destination
  }

  /* Freeze: used to signal a processor that has finished
   * configuration.
   *
   * For example, take unified itself.  It’s frozen.
   * Plug-ins should not be added to it.  Rather, it should
   * be extended, by invoking it, before modifying it.
   *
   * In essence, always invoke this when exporting a
   * processor. */
  function freeze() {
    var values
    var plugin
    var options
    var transformer

    if (frozen) {
      return processor
    }

    while (++freezeIndex < attachers.length) {
      values = attachers[freezeIndex]
      plugin = values[0]
      options = values[1]
      transformer = null

      if (options === false) {
        continue
      }

      if (options === true) {
        values[1] = undefined
      }

      transformer = plugin.apply(processor, values.slice(1))

      if (typeof transformer === 'function') {
        transformers.use(transformer)
      }
    }

    frozen = true
    freezeIndex = Infinity

    return processor
  }

  /* Data management.
   * Getter / setter for processor-specific informtion. */
  function data(key, value) {
    if (string(key)) {
      /* Set `key`. */
      if (arguments.length === 2) {
        assertUnfrozen('data', frozen)

        namespace[key] = value

        return processor
      }

      /* Get `key`. */
      return (own.call(namespace, key) && namespace[key]) || null
    }

    /* Set space. */
    if (key) {
      assertUnfrozen('data', frozen)
      namespace = key
      return processor
    }

    /* Get space. */
    return namespace
  }

  /* Plug-in management.
   *
   * Pass it:
   * *   an attacher and options,
   * *   a preset,
   * *   a list of presets, attachers, and arguments (list
   *     of attachers and options). */
  function use(value) {
    var settings

    assertUnfrozen('use', frozen)

    if (value === null || value === undefined) {
      /* Empty */
    } else if (typeof value === 'function') {
      addPlugin.apply(null, arguments)
    } else if (typeof value === 'object') {
      if ('length' in value) {
        addList(value)
      } else {
        addPreset(value)
      }
    } else {
      throw new Error('Expected usable value, not `' + value + '`')
    }

    if (settings) {
      namespace.settings = extend(namespace.settings || {}, settings)
    }

    return processor

    function addPreset(result) {
      addList(result.plugins)

      if (result.settings) {
        settings = extend(settings || {}, result.settings)
      }
    }

    function add(value) {
      if (typeof value === 'function') {
        addPlugin(value)
      } else if (typeof value === 'object') {
        if ('length' in value) {
          addPlugin.apply(null, value)
        } else {
          addPreset(value)
        }
      } else {
        throw new Error('Expected usable value, not `' + value + '`')
      }
    }

    function addList(plugins) {
      var length
      var index

      if (plugins === null || plugins === undefined) {
        /* Empty */
      } else if (typeof plugins === 'object' && 'length' in plugins) {
        length = plugins.length
        index = -1

        while (++index < length) {
          add(plugins[index])
        }
      } else {
        throw new Error('Expected a list of plugins, not `' + plugins + '`')
      }
    }

    function addPlugin(plugin, value) {
      var entry = find(plugin)

      if (entry) {
        if (plain(entry[1]) && plain(value)) {
          value = extend(entry[1], value)
        }

        entry[1] = value
      } else {
        attachers.push(slice.call(arguments))
      }
    }
  }

  function find(plugin) {
    var length = attachers.length
    var index = -1
    var entry

    while (++index < length) {
      entry = attachers[index]

      if (entry[0] === plugin) {
        return entry
      }
    }
  }

  /* Parse a file (in string or VFile representation)
   * into a Unist node using the `Parser` on the
   * processor. */
  function parse(doc) {
    var file = vfile(doc)
    var Parser

    freeze()
    Parser = processor.Parser
    assertParser('parse', Parser)

    if (newable(Parser)) {
      return new Parser(String(file), file).parse()
    }

    return Parser(String(file), file) // eslint-disable-line new-cap
  }

  /* Run transforms on a Unist node representation of a file
   * (in string or VFile representation), async. */
  function run(node, file, cb) {
    assertNode(node)
    freeze()

    if (!cb && typeof file === 'function') {
      cb = file
      file = null
    }

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb)

    function executor(resolve, reject) {
      transformers.run(node, vfile(file), done)

      function done(err, tree, file) {
        tree = tree || node
        if (err) {
          reject(err)
        } else if (resolve) {
          resolve(tree)
        } else {
          cb(null, tree, file)
        }
      }
    }
  }

  /* Run transforms on a Unist node representation of a file
   * (in string or VFile representation), sync. */
  function runSync(node, file) {
    var complete = false
    var result

    run(node, file, done)

    assertDone('runSync', 'run', complete)

    return result

    function done(err, tree) {
      complete = true
      bail(err)
      result = tree
    }
  }

  /* Stringify a Unist node representation of a file
   * (in string or VFile representation) into a string
   * using the `Compiler` on the processor. */
  function stringify(node, doc) {
    var file = vfile(doc)
    var Compiler

    freeze()
    Compiler = processor.Compiler
    assertCompiler('stringify', Compiler)
    assertNode(node)

    if (newable(Compiler)) {
      return new Compiler(node, file).compile()
    }

    return Compiler(node, file) // eslint-disable-line new-cap
  }

  /* Parse a file (in string or VFile representation)
   * into a Unist node using the `Parser` on the processor,
   * then run transforms on that node, and compile the
   * resulting node using the `Compiler` on the processor,
   * and store that result on the VFile. */
  function process(doc, cb) {
    freeze()
    assertParser('process', processor.Parser)
    assertCompiler('process', processor.Compiler)

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb)

    function executor(resolve, reject) {
      var file = vfile(doc)

      pipeline.run(processor, {file: file}, done)

      function done(err) {
        if (err) {
          reject(err)
        } else if (resolve) {
          resolve(file)
        } else {
          cb(null, file)
        }
      }
    }
  }

  /* Process the given document (in string or VFile
   * representation), sync. */
  function processSync(doc) {
    var complete = false
    var file

    freeze()
    assertParser('processSync', processor.Parser)
    assertCompiler('processSync', processor.Compiler)
    file = vfile(doc)

    process(file, done)

    assertDone('processSync', 'process', complete)

    return file

    function done(err) {
      complete = true
      bail(err)
    }
  }
}

/* Check if `func` is a constructor. */
function newable(value) {
  return typeof value === 'function' && keys(value.prototype)
}

/* Check if `value` is an object with keys. */
function keys(value) {
  var key
  for (key in value) {
    return true
  }
  return false
}

/* Assert a parser is available. */
function assertParser(name, Parser) {
  if (typeof Parser !== 'function') {
    throw new Error('Cannot `' + name + '` without `Parser`')
  }
}

/* Assert a compiler is available. */
function assertCompiler(name, Compiler) {
  if (typeof Compiler !== 'function') {
    throw new Error('Cannot `' + name + '` without `Compiler`')
  }
}

/* Assert the processor is not frozen. */
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      [
        'Cannot invoke `' + name + '` on a frozen processor.\nCreate a new ',
        'processor first, by invoking it: use `processor()` instead of ',
        '`processor`.'
      ].join('')
    )
  }
}

/* Assert `node` is a Unist node. */
function assertNode(node) {
  if (!node || !string(node.type)) {
    throw new Error('Expected node, got `' + node + '`')
  }
}

/* Assert that `complete` is `true`. */
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error(
      '`' + name + '` finished async. Use `' + asyncName + '` instead'
    )
  }
}


/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = bail

function bail(err) {
  if (err) {
    throw err
  }
}


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var VMessage = __webpack_require__(411);
var VFile = __webpack_require__(413);

module.exports = VFile;

var proto = VFile.prototype;

proto.message = message;
proto.info = info;
proto.fail = fail;

/* Slight backwards compatibility.  Remove in the future. */
proto.warn = message;

/* Create a message with `reason` at `position`.
 * When an error is passed in as `reason`, copies the stack. */
function message(reason, position, origin) {
  var filePath = this.path;
  var message = new VMessage(reason, position, origin);

  if (filePath) {
    message.name = filePath + ':' + message.name;
    message.file = filePath;
  }

  message.fatal = false;

  this.messages.push(message);

  return message;
}

/* Fail. Creates a vmessage, associates it with the file,
 * and throws it. */
function fail() {
  var message = this.message.apply(this, arguments);

  message.fatal = true;

  throw message;
}

/* Info. Creates a vmessage, associates it with the file,
 * and marks the fatality as null. */
function info() {
  var message = this.message.apply(this, arguments);

  message.fatal = null;

  return message;
}


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(412)

module.exports = VMessage

/* Inherit from `Error#`. */
function VMessagePrototype() {}
VMessagePrototype.prototype = Error.prototype
VMessage.prototype = new VMessagePrototype()

/* Message properties. */
var proto = VMessage.prototype

proto.file = ''
proto.name = ''
proto.reason = ''
proto.message = ''
proto.stack = ''
proto.fatal = null
proto.column = null
proto.line = null

/* Construct a new VMessage.
 *
 * Note: We cannot invoke `Error` on the created context,
 * as that adds readonly `line` and `column` attributes on
 * Safari 9, thus throwing and failing the data. */
function VMessage(reason, position, origin) {
  var parts
  var range
  var location

  if (typeof position === 'string') {
    origin = position
    position = null
  }

  parts = parseOrigin(origin)
  range = stringify(position) || '1:1'

  location = {
    start: {line: null, column: null},
    end: {line: null, column: null}
  }

  /* Node. */
  if (position && position.position) {
    position = position.position
  }

  if (position) {
    /* Position. */
    if (position.start) {
      location = position
      position = position.start
    } else {
      /* Point. */
      location.start = position
    }
  }

  if (reason.stack) {
    this.stack = reason.stack
    reason = reason.message
  }

  this.message = reason
  this.name = range
  this.reason = reason
  this.line = position ? position.line : null
  this.column = position ? position.column : null
  this.location = location
  this.source = parts[0]
  this.ruleId = parts[1]
}

function parseOrigin(origin) {
  var result = [null, null]
  var index

  if (typeof origin === 'string') {
    index = origin.indexOf(':')

    if (index === -1) {
      result[1] = origin
    } else {
      result[0] = origin.slice(0, index)
      result[1] = origin.slice(index + 1)
    }
  }

  return result
}


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var own = {}.hasOwnProperty

module.exports = stringify

function stringify(value) {
  /* Nothing. */
  if (!value || typeof value !== 'object') {
    return null
  }

  /* Node. */
  if (own.call(value, 'position') || own.call(value, 'type')) {
    return position(value.position)
  }

  /* Position. */
  if (own.call(value, 'start') || own.call(value, 'end')) {
    return position(value)
  }

  /* Point. */
  if (own.call(value, 'line') || own.call(value, 'column')) {
    return point(value)
  }

  /* ? */
  return null
}

function point(point) {
  if (!point || typeof point !== 'object') {
    point = {}
  }

  return index(point.line) + ':' + index(point.column)
}

function position(pos) {
  if (!pos || typeof pos !== 'object') {
    pos = {}
  }

  return point(pos.start) + '-' + point(pos.end)
}

function index(value) {
  return value && typeof value === 'number' ? value : 1
}


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var path = __webpack_require__(280);
var replace = __webpack_require__(414);
var buffer = __webpack_require__(415);

module.exports = VFile;

var own = {}.hasOwnProperty;
var proto = VFile.prototype;

proto.toString = toString;

/* Order of setting (least specific to most), we need this because
 * otherwise `{stem: 'a', path: '~/b.js'}` would throw, as a path
 * is needed before a stem can be set. */
var order = [
  'history',
  'path',
  'basename',
  'stem',
  'extname',
  'dirname'
];

/* Construct a new file. */
function VFile(options) {
  var prop;
  var index;
  var length;

  if (!options) {
    options = {};
  } else if (typeof options === 'string' || buffer(options)) {
    options = {contents: options};
  } else if ('message' in options && 'messages' in options) {
    return options;
  }

  if (!(this instanceof VFile)) {
    return new VFile(options);
  }

  this.data = {};
  this.messages = [];
  this.history = [];
  this.cwd = process.cwd();

  /* Set path related properties in the correct order. */
  index = -1;
  length = order.length;

  while (++index < length) {
    prop = order[index];

    if (own.call(options, prop)) {
      this[prop] = options[prop];
    }
  }

  /* Set non-path related properties. */
  for (prop in options) {
    if (order.indexOf(prop) === -1) {
      this[prop] = options[prop];
    }
  }
}

/* Access full path (`~/index.min.js`). */
Object.defineProperty(proto, 'path', {
  get: function () {
    return this.history[this.history.length - 1];
  },
  set: function (path) {
    assertNonEmpty(path, 'path');

    if (path !== this.path) {
      this.history.push(path);
    }
  }
});

/* Access parent path (`~`). */
Object.defineProperty(proto, 'dirname', {
  get: function () {
    return typeof this.path === 'string' ? path.dirname(this.path) : undefined;
  },
  set: function (dirname) {
    assertPath(this.path, 'dirname');
    this.path = path.join(dirname || '', this.basename);
  }
});

/* Access basename (`index.min.js`). */
Object.defineProperty(proto, 'basename', {
  get: function () {
    return typeof this.path === 'string' ? path.basename(this.path) : undefined;
  },
  set: function (basename) {
    assertNonEmpty(basename, 'basename');
    assertPart(basename, 'basename');
    this.path = path.join(this.dirname || '', basename);
  }
});

/* Access extname (`.js`). */
Object.defineProperty(proto, 'extname', {
  get: function () {
    return typeof this.path === 'string' ? path.extname(this.path) : undefined;
  },
  set: function (extname) {
    var ext = extname || '';

    assertPart(ext, 'extname');
    assertPath(this.path, 'extname');

    if (ext) {
      if (ext.charAt(0) !== '.') {
        throw new Error('`extname` must start with `.`');
      }

      if (ext.indexOf('.', 1) !== -1) {
        throw new Error('`extname` cannot contain multiple dots');
      }
    }

    this.path = replace(this.path, ext);
  }
});

/* Access stem (`index.min`). */
Object.defineProperty(proto, 'stem', {
  get: function () {
    return typeof this.path === 'string' ? path.basename(this.path, this.extname) : undefined;
  },
  set: function (stem) {
    assertNonEmpty(stem, 'stem');
    assertPart(stem, 'stem');
    this.path = path.join(this.dirname || '', stem + (this.extname || ''));
  }
});

/* Get the value of the file. */
function toString(encoding) {
  var value = this.contents || '';
  return buffer(value) ? value.toString(encoding) : String(value);
}

/* Assert that `part` is not a path (i.e., does
 * not contain `path.sep`). */
function assertPart(part, name) {
  if (part.indexOf(path.sep) !== -1) {
    throw new Error('`' + name + '` cannot be a path: did not expect `' + path.sep + '`');
  }
}

/* Assert that `part` is not empty. */
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty');
  }
}

/* Assert `path` exists. */
function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too');
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(280);

function replaceExt(npath, ext) {
  if (typeof npath !== 'string') {
    return npath;
  }

  if (npath.length === 0) {
    return npath;
  }

  var nFileName = path.basename(npath, path.extname(npath)) + ext;
  return path.join(path.dirname(npath), nFileName);
}

module.exports = replaceExt;


/***/ }),
/* 415 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var wrap = __webpack_require__(417)

module.exports = trough

trough.wrap = wrap

var slice = [].slice

/* Create new middleware. */
function trough() {
  var fns = []
  var middleware = {}

  middleware.run = run
  middleware.use = use

  return middleware

  /* Run `fns`.  Last argument must be
   * a completion handler. */
  function run() {
    var index = -1
    var input = slice.call(arguments, 0, -1)
    var done = arguments[arguments.length - 1]

    if (typeof done !== 'function') {
      throw new Error('Expected function as last argument, not ' + done)
    }

    next.apply(null, [null].concat(input))

    /* Run the next `fn`, if any. */
    function next(err) {
      var fn = fns[++index]
      var params = slice.call(arguments, 0)
      var values = params.slice(1)
      var length = input.length
      var pos = -1

      if (err) {
        done(err)
        return
      }

      /* Copy non-nully input into values. */
      while (++pos < length) {
        if (values[pos] === null || values[pos] === undefined) {
          values[pos] = input[pos]
        }
      }

      input = values

      /* Next or done. */
      if (fn) {
        wrap(fn, next).apply(null, input)
      } else {
        done.apply(null, [null].concat(input))
      }
    }
  }

  /* Add `fn` to the list. */
  function use(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Expected `fn` to be a function, not ' + fn)
    }

    fns.push(fn)

    return middleware
  }
}


/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = [].slice

module.exports = wrap

/* Wrap `fn`.  Can be sync or async; return a promise,
 * receive a completion handler, return new values and
 * errors. */
function wrap(fn, callback) {
  var invoked

  return wrapped

  function wrapped() {
    var params = slice.call(arguments, 0)
    var callback = fn.length > params.length
    var result

    if (callback) {
      params.push(done)
    }

    try {
      result = fn.apply(null, params)
    } catch (err) {
      /* Well, this is quite the pickle.  `fn` received
       * a callback and invoked it (thus continuing the
       * pipeline), but later also threw an error.
       * We’re not about to restart the pipeline again,
       * so the only thing left to do is to throw the
       * thing instea. */
      if (callback && invoked) {
        throw err
      }

      return done(err)
    }

    if (!callback) {
      if (result && typeof result.then === 'function') {
        result.then(then, done)
      } else if (result instanceof Error) {
        done(result)
      } else {
        then(result)
      }
    }
  }

  /* Invoke `next`, only once. */
  function done() {
    if (!invoked) {
      invoked = true

      callback.apply(null, arguments)
    }
  }

  /* Invoke `done` with one value.
   * Tracks if an error is passed, too. */
  function then(value) {
    done(null, value)
  }
}


/***/ }),
/* 418 */
/***/ (function(module, exports) {

var toString = Object.prototype.toString

module.exports = isString

function isString(obj) {
    return toString.call(obj) === "[object String]"
}


/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toString = Object.prototype.toString;

module.exports = function (x) {
	var prototype;
	return toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
};


/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unherit = __webpack_require__(421);
var xtend = __webpack_require__(226);
var Parser = __webpack_require__(422);

module.exports = parse;
parse.Parser = Parser;

function parse(options) {
  var Local = unherit(Parser);
  Local.prototype.options = xtend(Local.prototype.options, this.data('settings'), options);
  this.Parser = Local;
}


/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(226)
var inherits = __webpack_require__(10)

module.exports = unherit

/* Create a custom constructor which can be modified
 * without affecting the original class. */
function unherit(Super) {
  var result
  var key
  var value

  inherits(Of, Super)
  inherits(From, Of)

  /* Clone values. */
  result = Of.prototype

  for (key in result) {
    value = result[key]

    if (value && typeof value === 'object') {
      result[key] = 'concat' in value ? value.concat() : xtend(value)
    }
  }

  return Of

  /* Constructor accepting a single argument,
   * which itself is an `arguments` object. */
  function From(parameters) {
    return Super.apply(this, parameters)
  }

  /* Constructor accepting variadic arguments. */
  function Of() {
    if (!(this instanceof Of)) {
      return new From(arguments)
    }

    return Super.apply(this, arguments)
  }
}


/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(226);
var toggle = __webpack_require__(423);
var vfileLocation = __webpack_require__(424);
var unescape = __webpack_require__(425);
var decode = __webpack_require__(426);
var tokenizer = __webpack_require__(427);

module.exports = Parser;

function Parser(doc, file) {
  this.file = file;
  this.offset = {};
  this.options = xtend(this.options);
  this.setOptions({});

  this.inList = false;
  this.inBlock = false;
  this.inLink = false;
  this.atStart = true;

  this.toOffset = vfileLocation(file).toOffset;
  this.unescape = unescape(this, 'escape');
  this.decode = decode(this);
}

var proto = Parser.prototype;

/* Expose core. */
proto.setOptions = __webpack_require__(428);
proto.parse = __webpack_require__(431);

/* Expose `defaults`. */
proto.options = __webpack_require__(281);

/* Enter and exit helpers. */
proto.exitStart = toggle('atStart', true);
proto.enterList = toggle('inList', false);
proto.enterLink = toggle('inLink', false);
proto.enterBlock = toggle('inBlock', false);

/* Nodes that can interupt a paragraph:
 *
 * ```markdown
 * A paragraph, followed by a thematic break.
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the paragraph. */
proto.interruptParagraph = [
  ['thematicBreak'],
  ['atxHeading'],
  ['fencedCode'],
  ['blockquote'],
  ['html'],
  ['setextHeading', {commonmark: false}],
  ['definition', {commonmark: false}],
  ['footnote', {commonmark: false}]
];

/* Nodes that can interupt a list:
 *
 * ```markdown
 * - One
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the list. */
proto.interruptList = [
  ['atxHeading', {pedantic: false}],
  ['fencedCode', {pedantic: false}],
  ['thematicBreak', {pedantic: false}],
  ['definition', {commonmark: false}],
  ['footnote', {commonmark: false}]
];

/* Nodes that can interupt a blockquote:
 *
 * ```markdown
 * > A paragraph.
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the blockquote. */
proto.interruptBlockquote = [
  ['indentedCode', {commonmark: true}],
  ['fencedCode', {commonmark: true}],
  ['atxHeading', {commonmark: true}],
  ['setextHeading', {commonmark: true}],
  ['thematicBreak', {commonmark: true}],
  ['html', {commonmark: true}],
  ['list', {commonmark: true}],
  ['definition', {commonmark: false}],
  ['footnote', {commonmark: false}]
];

/* Handlers. */
proto.blockTokenizers = {
  newline: __webpack_require__(434),
  indentedCode: __webpack_require__(435),
  fencedCode: __webpack_require__(436),
  blockquote: __webpack_require__(437),
  atxHeading: __webpack_require__(438),
  thematicBreak: __webpack_require__(439),
  list: __webpack_require__(440),
  setextHeading: __webpack_require__(442),
  html: __webpack_require__(443),
  footnote: __webpack_require__(444),
  definition: __webpack_require__(445),
  table: __webpack_require__(446),
  paragraph: __webpack_require__(447)
};

proto.inlineTokenizers = {
  escape: __webpack_require__(448),
  autoLink: __webpack_require__(450),
  url: __webpack_require__(451),
  html: __webpack_require__(453),
  link: __webpack_require__(454),
  reference: __webpack_require__(455),
  strong: __webpack_require__(456),
  emphasis: __webpack_require__(458),
  deletion: __webpack_require__(461),
  code: __webpack_require__(463),
  break: __webpack_require__(465),
  text: __webpack_require__(467)
};

/* Expose precedence. */
proto.blockMethods = keys(proto.blockTokenizers);
proto.inlineMethods = keys(proto.inlineTokenizers);

/* Tokenizers. */
proto.tokenizeBlock = tokenizer('block');
proto.tokenizeInline = tokenizer('inline');
proto.tokenizeFactory = tokenizer;

/* Get all keys in `value`. */
function keys(value) {
  var result = [];
  var key;

  for (key in value) {
    result.push(key);
  }

  return result;
}


/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory

/* Construct a state `toggler`: a function which inverses
 * `property` in context based on its current value.
 * The by `toggler` returned function restores that value. */
function factory(key, state, ctx) {
  return enter

  function enter() {
    var context = ctx || this
    var current = context[key]

    context[key] = !state

    return exit

    function exit() {
      context[key] = current
    }
  }
}


/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Expose. */
module.exports = factory

/* Factory. */
function factory(file) {
  var contents = indices(String(file))

  return {
    toPosition: offsetToPositionFactory(contents),
    toOffset: positionToOffsetFactory(contents)
  }
}

/* Factory to get the line and column-based `position` for
 * `offset` in the bound indices. */
function offsetToPositionFactory(indices) {
  return offsetToPosition

  /* Get the line and column-based `position` for
   * `offset` in the bound indices. */
  function offsetToPosition(offset) {
    var index = -1
    var length = indices.length

    if (offset < 0) {
      return {}
    }

    while (++index < length) {
      if (indices[index] > offset) {
        return {
          line: index + 1,
          column: offset - (indices[index - 1] || 0) + 1,
          offset: offset
        }
      }
    }

    return {}
  }
}

/* Factory to get the `offset` for a line and column-based
 * `position` in the bound indices. */
function positionToOffsetFactory(indices) {
  return positionToOffset

  /* Get the `offset` for a line and column-based
   * `position` in the bound indices. */
  function positionToOffset(position) {
    var line = position && position.line
    var column = position && position.column

    if (!isNaN(line) && !isNaN(column) && line - 1 in indices) {
      return (indices[line - 2] || 0) + column - 1 || 0
    }

    return -1
  }
}

/* Get indices of line-breaks in `value`. */
function indices(value) {
  var result = []
  var index = value.indexOf('\n')

  while (index !== -1) {
    result.push(index + 1)
    index = value.indexOf('\n', index + 1)
  }

  result.push(value.length + 1)

  return result
}


/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory;

/* Factory to de-escape a value, based on a list at `key`
 * in `ctx`. */
function factory(ctx, key) {
  return unescape;

  /* De-escape a string using the expression at `key`
   * in `ctx`. */
  function unescape(value) {
    var prev = 0;
    var index = value.indexOf('\\');
    var escape = ctx[key];
    var queue = [];
    var character;

    while (index !== -1) {
      queue.push(value.slice(prev, index));
      prev = index + 1;
      character = value.charAt(prev);

      /* If the following character is not a valid escape,
       * add the slash. */
      if (!character || escape.indexOf(character) === -1) {
        queue.push('\\');
      }

      index = value.indexOf('\\', prev);
    }

    queue.push(value.slice(prev));

    return queue.join('');
  }
}


/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(226);
var entities = __webpack_require__(239);

module.exports = factory;

/* Factory to create an entity decoder. */
function factory(ctx) {
  decoder.raw = decodeRaw;

  return decoder;

  /* Normalize `position` to add an `indent`. */
  function normalize(position) {
    var offsets = ctx.offset;
    var line = position.line;
    var result = [];

    while (++line) {
      if (!(line in offsets)) {
        break;
      }

      result.push((offsets[line] || 0) + 1);
    }

    return {
      start: position,
      indent: result
    };
  }

  /* Handle a warning.
   * See https://github.com/wooorm/parse-entities
   * for the warnings. */
  function handleWarning(reason, position, code) {
    if (code === 3) {
      return;
    }

    ctx.file.message(reason, position);
  }

  /* Decode `value` (at `position`) into text-nodes. */
  function decoder(value, position, handler) {
    entities(value, {
      position: normalize(position),
      warning: handleWarning,
      text: handler,
      reference: handler,
      textContext: ctx,
      referenceContext: ctx
    });
  }

  /* Decode `value` (at `position`) into a string. */
  function decodeRaw(value, position, options) {
    return entities(value, xtend(options, {
      position: normalize(position),
      warning: handleWarning
    }));
  }
}


/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory;

var MERGEABLE_NODES = {
  text: mergeText,
  blockquote: mergeBlockquote
};

/* Check whether a node is mergeable with adjacent nodes. */
function mergeable(node) {
  var start;
  var end;

  if (node.type !== 'text' || !node.position) {
    return true;
  }

  start = node.position.start;
  end = node.position.end;

  /* Only merge nodes which occupy the same size as their
   * `value`. */
  return start.line !== end.line ||
      end.column - start.column === node.value.length;
}

/* Merge two text nodes: `node` into `prev`. */
function mergeText(prev, node) {
  prev.value += node.value;

  return prev;
}

/* Merge two blockquotes: `node` into `prev`, unless in
 * CommonMark mode. */
function mergeBlockquote(prev, node) {
  if (this.options.commonmark) {
    return node;
  }

  prev.children = prev.children.concat(node.children);

  return prev;
}

/* Construct a tokenizer.  This creates both
 * `tokenizeInline` and `tokenizeBlock`. */
function factory(type) {
  return tokenize;

  /* Tokenizer for a bound `type`. */
  function tokenize(value, location) {
    var self = this;
    var offset = self.offset;
    var tokens = [];
    var methods = self[type + 'Methods'];
    var tokenizers = self[type + 'Tokenizers'];
    var line = location.line;
    var column = location.column;
    var index;
    var length;
    var method;
    var name;
    var matched;
    var valueLength;

    /* Trim white space only lines. */
    if (!value) {
      return tokens;
    }

    /* Expose on `eat`. */
    eat.now = now;
    eat.file = self.file;

    /* Sync initial offset. */
    updatePosition('');

    /* Iterate over `value`, and iterate over all
     * tokenizers.  When one eats something, re-iterate
     * with the remaining value.  If no tokenizer eats,
     * something failed (should not happen) and an
     * exception is thrown. */
    while (value) {
      index = -1;
      length = methods.length;
      matched = false;

      while (++index < length) {
        name = methods[index];
        method = tokenizers[name];

        if (
          method &&
          /* istanbul ignore next */ (!method.onlyAtStart || self.atStart) &&
          (!method.notInList || !self.inList) &&
          (!method.notInBlock || !self.inBlock) &&
          (!method.notInLink || !self.inLink)
        ) {
          valueLength = value.length;

          method.apply(self, [eat, value]);

          matched = valueLength !== value.length;

          if (matched) {
            break;
          }
        }
      }

      /* istanbul ignore if */
      if (!matched) {
        self.file.fail(new Error('Infinite loop'), eat.now());
      }
    }

    self.eof = now();

    return tokens;

    /* Update line, column, and offset based on
     * `value`. */
    function updatePosition(subvalue) {
      var lastIndex = -1;
      var index = subvalue.indexOf('\n');

      while (index !== -1) {
        line++;
        lastIndex = index;
        index = subvalue.indexOf('\n', index + 1);
      }

      if (lastIndex === -1) {
        column += subvalue.length;
      } else {
        column = subvalue.length - lastIndex;
      }

      if (line in offset) {
        if (lastIndex !== -1) {
          column += offset[line];
        } else if (column <= offset[line]) {
          column = offset[line] + 1;
        }
      }
    }

    /* Get offset.  Called before the first character is
     * eaten to retrieve the range's offsets. */
    function getOffset() {
      var indentation = [];
      var pos = line + 1;

      /* Done.  Called when the last character is
       * eaten to retrieve the range’s offsets. */
      return function () {
        var last = line + 1;

        while (pos < last) {
          indentation.push((offset[pos] || 0) + 1);

          pos++;
        }

        return indentation;
      };
    }

    /* Get the current position. */
    function now() {
      var pos = {line: line, column: column};

      pos.offset = self.toOffset(pos);

      return pos;
    }

    /* Store position information for a node. */
    function Position(start) {
      this.start = start;
      this.end = now();
    }

    /* Throw when a value is incorrectly eaten.
     * This shouldn’t happen but will throw on new,
     * incorrect rules. */
    function validateEat(subvalue) {
      /* istanbul ignore if */
      if (value.substring(0, subvalue.length) !== subvalue) {
        /* Capture stack-trace. */
        self.file.fail(
          new Error(
            'Incorrectly eaten value: please report this ' +
            'warning on http://git.io/vg5Ft'
          ),
          now()
        );
      }
    }

    /* Mark position and patch `node.position`. */
    function position() {
      var before = now();

      return update;

      /* Add the position to a node. */
      function update(node, indent) {
        var prev = node.position;
        var start = prev ? prev.start : before;
        var combined = [];
        var n = prev && prev.end.line;
        var l = before.line;

        node.position = new Position(start);

        /* If there was already a `position`, this
         * node was merged.  Fixing `start` wasn’t
         * hard, but the indent is different.
         * Especially because some information, the
         * indent between `n` and `l` wasn’t
         * tracked.  Luckily, that space is
         * (should be?) empty, so we can safely
         * check for it now. */
        if (prev && indent && prev.indent) {
          combined = prev.indent;

          if (n < l) {
            while (++n < l) {
              combined.push((offset[n] || 0) + 1);
            }

            combined.push(before.column);
          }

          indent = combined.concat(indent);
        }

        node.position.indent = indent || [];

        return node;
      }
    }

    /* Add `node` to `parent`s children or to `tokens`.
     * Performs merges where possible. */
    function add(node, parent) {
      var children = parent ? parent.children : tokens;
      var prev = children[children.length - 1];

      if (
        prev &&
        node.type === prev.type &&
        node.type in MERGEABLE_NODES &&
        mergeable(prev) &&
        mergeable(node)
      ) {
        node = MERGEABLE_NODES[node.type].call(self, prev, node);
      }

      if (node !== prev) {
        children.push(node);
      }

      if (self.atStart && tokens.length !== 0) {
        self.exitStart();
      }

      return node;
    }

    /* Remove `subvalue` from `value`.
     * `subvalue` must be at the start of `value`. */
    function eat(subvalue) {
      var indent = getOffset();
      var pos = position();
      var current = now();

      validateEat(subvalue);

      apply.reset = reset;
      reset.test = test;
      apply.test = test;

      value = value.substring(subvalue.length);

      updatePosition(subvalue);

      indent = indent();

      return apply;

      /* Add the given arguments, add `position` to
       * the returned node, and return the node. */
      function apply(node, parent) {
        return pos(add(pos(node), parent), indent);
      }

      /* Functions just like apply, but resets the
       * content:  the line and column are reversed,
       * and the eaten value is re-added.
       * This is useful for nodes with a single
       * type of content, such as lists and tables.
       * See `apply` above for what parameters are
       * expected. */
      function reset() {
        var node = apply.apply(null, arguments);

        line = current.line;
        column = current.column;
        value = subvalue + value;

        return node;
      }

      /* Test the position, after eating, and reverse
       * to a not-eaten state. */
      function test() {
        var result = pos({});

        line = current.line;
        column = current.column;
        value = subvalue + value;

        return result.position;
      }
    }
  }
}


/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(226);
var escapes = __webpack_require__(429);
var defaults = __webpack_require__(281);

module.exports = setOptions;

function setOptions(options) {
  var self = this;
  var current = self.options;
  var key;
  var value;

  if (options == null) {
    options = {};
  } else if (typeof options === 'object') {
    options = xtend(options);
  } else {
    throw new Error(
      'Invalid value `' + options + '` ' +
      'for setting `options`'
    );
  }

  for (key in defaults) {
    value = options[key];

    if (value == null) {
      value = current[key];
    }

    if (
      (key !== 'blocks' && typeof value !== 'boolean') ||
      (key === 'blocks' && typeof value !== 'object')
    ) {
      throw new Error('Invalid value `' + value + '` for setting `options.' + key + '`');
    }

    options[key] = value;
  }

  self.options = options;
  self.escape = escapes(options);

  return self;
}


/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = escapes

var defaults = [
  '\\',
  '`',
  '*',
  '{',
  '}',
  '[',
  ']',
  '(',
  ')',
  '#',
  '+',
  '-',
  '.',
  '!',
  '_',
  '>'
]

var gfm = defaults.concat(['~', '|'])

var commonmark = gfm.concat([
  '\n',
  '"',
  '$',
  '%',
  '&',
  "'",
  ',',
  '/',
  ':',
  ';',
  '<',
  '=',
  '?',
  '@',
  '^'
])

escapes.default = defaults
escapes.gfm = gfm
escapes.commonmark = commonmark

/* Get markdown escapes. */
function escapes(options) {
  var settings = options || {}

  if (settings.commonmark) {
    return commonmark
  }

  return settings.gfm ? gfm : defaults
}


/***/ }),
/* 430 */
/***/ (function(module, exports) {

module.exports = ["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]

/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(226);
var removePosition = __webpack_require__(432);

module.exports = parse;

var C_NEWLINE = '\n';
var EXPRESSION_LINE_BREAKS = /\r\n|\r/g;

/* Parse the bound file. */
function parse() {
  var self = this;
  var value = String(self.file);
  var start = {line: 1, column: 1, offset: 0};
  var content = xtend(start);
  var node;

  /* Clean non-unix newlines: `\r\n` and `\r` are all
   * changed to `\n`.  This should not affect positional
   * information. */
  value = value.replace(EXPRESSION_LINE_BREAKS, C_NEWLINE);

  if (value.charCodeAt(0) === 0xFEFF) {
    value = value.slice(1);

    content.column++;
    content.offset++;
  }

  node = {
    type: 'root',
    children: self.tokenizeBlock(value, content),
    position: {
      start: start,
      end: self.eof || xtend(start)
    }
  };

  if (!self.options.position) {
    removePosition(node, true);
  }

  return node;
}


/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(241)

module.exports = removePosition

/* Remove `position`s from `tree`. */
function removePosition(node, force) {
  visit(node, force ? hard : soft)
  return node
}

function hard(node) {
  delete node.position
}

function soft(node) {
  node.position = undefined
}


/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visitParents

var is = __webpack_require__(282)

var CONTINUE = true
var SKIP = 'skip'
var EXIT = false

visitParents.CONTINUE = CONTINUE
visitParents.SKIP = SKIP
visitParents.EXIT = EXIT

function visitParents(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  one(tree, null, [])

  // Visit a single node.
  function one(node, index, parents) {
    var result

    if (!test || is(test, node, index, parents[parents.length - 1] || null)) {
      result = visitor(node, parents)

      if (result === EXIT) {
        return result
      }
    }

    if (node.children && result !== SKIP) {
      return all(node.children, parents.concat(node)) === EXIT ? EXIT : result
    }

    return result
  }

  // Visit children in `parent`.
  function all(children, parents) {
    var min = -1
    var step = reverse ? -1 : 1
    var index = (reverse ? children.length : min) + step
    var child
    var result

    while (index > min && index < children.length) {
      child = children[index]
      result = child && one(child, index, parents)

      if (result === EXIT) {
        return result
      }

      index = typeof result === 'number' ? result : index + step
    }
  }
}


/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(221);

module.exports = newline;

/* Tokenise newline. */
function newline(eat, value, silent) {
  var character = value.charAt(0);
  var length;
  var subvalue;
  var queue;
  var index;

  if (character !== '\n') {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  index = 1;
  length = value.length;
  subvalue = character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;

    if (character === '\n') {
      subvalue += queue;
      queue = '';
    }

    index++;
  }

  eat(subvalue);
}


/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(242);
var trim = __webpack_require__(255);

module.exports = indentedCode;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';

var CODE_INDENT_COUNT = 4;
var CODE_INDENT = repeat(C_SPACE, CODE_INDENT_COUNT);

/* Tokenise indented code. */
function indentedCode(eat, value, silent) {
  var index = -1;
  var length = value.length;
  var subvalue = '';
  var content = '';
  var subvalueQueue = '';
  var contentQueue = '';
  var character;
  var blankQueue;
  var indent;

  while (++index < length) {
    character = value.charAt(index);

    if (indent) {
      indent = false;

      subvalue += subvalueQueue;
      content += contentQueue;
      subvalueQueue = '';
      contentQueue = '';

      if (character === C_NEWLINE) {
        subvalueQueue = character;
        contentQueue = character;
      } else {
        subvalue += character;
        content += character;

        while (++index < length) {
          character = value.charAt(index);

          if (!character || character === C_NEWLINE) {
            contentQueue = character;
            subvalueQueue = character;
            break;
          }

          subvalue += character;
          content += character;
        }
      }
    } else if (
      character === C_SPACE &&
      value.charAt(index + 1) === character &&
      value.charAt(index + 2) === character &&
      value.charAt(index + 3) === character
    ) {
      subvalueQueue += CODE_INDENT;
      index += 3;
      indent = true;
    } else if (character === C_TAB) {
      subvalueQueue += character;
      indent = true;
    } else {
      blankQueue = '';

      while (character === C_TAB || character === C_SPACE) {
        blankQueue += character;
        character = value.charAt(++index);
      }

      if (character !== C_NEWLINE) {
        break;
      }

      subvalueQueue += blankQueue + character;
      contentQueue += character;
    }
  }

  if (content) {
    if (silent) {
      return true;
    }

    return eat(subvalue)({
      type: 'code',
      lang: null,
      value: trim(content)
    });
  }
}


/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(255);

module.exports = fencedCode;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_TILDE = '~';
var C_TICK = '`';

var MIN_FENCE_COUNT = 3;
var CODE_INDENT_COUNT = 4;

function fencedCode(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var length = value.length + 1;
  var index = 0;
  var subvalue = '';
  var fenceCount;
  var marker;
  var character;
  var flag;
  var queue;
  var content;
  var exdentedContent;
  var closing;
  var exdentedClosing;
  var indent;
  var now;

  if (!settings.gfm) {
    return;
  }

  /* Eat initial spacing. */
  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  indent = index;

  /* Eat the fence. */
  character = value.charAt(index);

  if (character !== C_TILDE && character !== C_TICK) {
    return;
  }

  index++;
  marker = character;
  fenceCount = 1;
  subvalue += character;

  while (index < length) {
    character = value.charAt(index);

    if (character !== marker) {
      break;
    }

    subvalue += character;
    fenceCount++;
    index++;
  }

  if (fenceCount < MIN_FENCE_COUNT) {
    return;
  }

  /* Eat spacing before flag. */
  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  /* Eat flag. */
  flag = '';
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (
      character === C_NEWLINE ||
      character === C_TILDE ||
      character === C_TICK
    ) {
      break;
    }

    if (character === C_SPACE || character === C_TAB) {
      queue += character;
    } else {
      flag += queue + character;
      queue = '';
    }

    index++;
  }

  character = value.charAt(index);

  if (character && character !== C_NEWLINE) {
    return;
  }

  if (silent) {
    return true;
  }

  now = eat.now();
  now.column += subvalue.length;
  now.offset += subvalue.length;

  subvalue += flag;
  flag = self.decode.raw(self.unescape(flag), now);

  if (queue) {
    subvalue += queue;
  }

  queue = '';
  closing = '';
  exdentedClosing = '';
  content = '';
  exdentedContent = '';

  /* Eat content. */
  while (index < length) {
    character = value.charAt(index);
    content += closing;
    exdentedContent += exdentedClosing;
    closing = '';
    exdentedClosing = '';

    if (character !== C_NEWLINE) {
      content += character;
      exdentedClosing += character;
      index++;
      continue;
    }

    /* Add the newline to `subvalue` if its the first
     * character.  Otherwise, add it to the `closing`
     * queue. */
    if (content) {
      closing += character;
      exdentedClosing += character;
    } else {
      subvalue += character;
    }

    queue = '';
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE) {
        break;
      }

      queue += character;
      index++;
    }

    closing += queue;
    exdentedClosing += queue.slice(indent);

    if (queue.length >= CODE_INDENT_COUNT) {
      continue;
    }

    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character !== marker) {
        break;
      }

      queue += character;
      index++;
    }

    closing += queue;
    exdentedClosing += queue;

    if (queue.length < fenceCount) {
      continue;
    }

    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE && character !== C_TAB) {
        break;
      }

      closing += character;
      exdentedClosing += character;
      index++;
    }

    if (!character || character === C_NEWLINE) {
      break;
    }
  }

  subvalue += content + closing;

  return eat(subvalue)({
    type: 'code',
    lang: flag || null,
    value: trim(exdentedContent)
  });
}


/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(223);
var interrupt = __webpack_require__(256);

module.exports = blockquote;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_GT = '>';

/* Tokenise a blockquote. */
function blockquote(eat, value, silent) {
  var self = this;
  var offsets = self.offset;
  var tokenizers = self.blockTokenizers;
  var interruptors = self.interruptBlockquote;
  var now = eat.now();
  var currentLine = now.line;
  var length = value.length;
  var values = [];
  var contents = [];
  var indents = [];
  var add;
  var index = 0;
  var character;
  var rest;
  var nextIndex;
  var content;
  var line;
  var startIndex;
  var prefixed;
  var exit;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    index++;
  }

  if (value.charAt(index) !== C_GT) {
    return;
  }

  if (silent) {
    return true;
  }

  index = 0;

  while (index < length) {
    nextIndex = value.indexOf(C_NEWLINE, index);
    startIndex = index;
    prefixed = false;

    if (nextIndex === -1) {
      nextIndex = length;
    }

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE && character !== C_TAB) {
        break;
      }

      index++;
    }

    if (value.charAt(index) === C_GT) {
      index++;
      prefixed = true;

      if (value.charAt(index) === C_SPACE) {
        index++;
      }
    } else {
      index = startIndex;
    }

    content = value.slice(index, nextIndex);

    if (!prefixed && !trim(content)) {
      index = startIndex;
      break;
    }

    if (!prefixed) {
      rest = value.slice(index);

      /* Check if the following code contains a possible
       * block. */
      if (interrupt(interruptors, tokenizers, self, [eat, rest, true])) {
        break;
      }
    }

    line = startIndex === index ? content : value.slice(startIndex, nextIndex);

    indents.push(index - startIndex);
    values.push(line);
    contents.push(content);

    index = nextIndex + 1;
  }

  index = -1;
  length = indents.length;
  add = eat(values.join(C_NEWLINE));

  while (++index < length) {
    offsets[currentLine] = (offsets[currentLine] || 0) + indents[index];
    currentLine++;
  }

  exit = self.enterBlock();
  contents = self.tokenizeBlock(contents.join(C_NEWLINE), now);
  exit();

  return add({
    type: 'blockquote',
    children: contents
  });
}


/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = atxHeading;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_HASH = '#';

var MAX_ATX_COUNT = 6;

function atxHeading(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var length = value.length + 1;
  var index = -1;
  var now = eat.now();
  var subvalue = '';
  var content = '';
  var character;
  var queue;
  var depth;

  /* Eat initial spacing. */
  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      index--;
      break;
    }

    subvalue += character;
  }

  /* Eat hashes. */
  depth = 0;

  while (++index <= length) {
    character = value.charAt(index);

    if (character !== C_HASH) {
      index--;
      break;
    }

    subvalue += character;
    depth++;
  }

  if (depth > MAX_ATX_COUNT) {
    return;
  }

  if (
    !depth ||
    (!settings.pedantic && value.charAt(index + 1) === C_HASH)
  ) {
    return;
  }

  length = value.length + 1;

  /* Eat intermediate white-space. */
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      index--;
      break;
    }

    queue += character;
  }

  /* Exit when not in pedantic mode without spacing. */
  if (
    !settings.pedantic &&
    queue.length === 0 &&
    character &&
    character !== C_NEWLINE
  ) {
    return;
  }

  if (silent) {
    return true;
  }

  /* Eat content. */
  subvalue += queue;
  queue = '';
  content = '';

  while (++index < length) {
    character = value.charAt(index);

    if (!character || character === C_NEWLINE) {
      break;
    }

    if (
      character !== C_SPACE &&
      character !== C_TAB &&
      character !== C_HASH
    ) {
      content += queue + character;
      queue = '';
      continue;
    }

    while (character === C_SPACE || character === C_TAB) {
      queue += character;
      character = value.charAt(++index);
    }

    while (character === C_HASH) {
      queue += character;
      character = value.charAt(++index);
    }

    while (character === C_SPACE || character === C_TAB) {
      queue += character;
      character = value.charAt(++index);
    }

    index--;
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += content + queue;

  return eat(subvalue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  });
}


/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = thematicBreak;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_ASTERISK = '*';
var C_UNDERSCORE = '_';
var C_DASH = '-';

var THEMATIC_BREAK_MARKER_COUNT = 3;

function thematicBreak(eat, value, silent) {
  var index = -1;
  var length = value.length + 1;
  var subvalue = '';
  var character;
  var marker;
  var markerCount;
  var queue;

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
  }

  if (
    character !== C_ASTERISK &&
    character !== C_DASH &&
    character !== C_UNDERSCORE
  ) {
    return;
  }

  marker = character;
  subvalue += character;
  markerCount = 1;
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character === marker) {
      markerCount++;
      subvalue += queue + marker;
      queue = '';
    } else if (character === C_SPACE) {
      queue += character;
    } else if (
      markerCount >= THEMATIC_BREAK_MARKER_COUNT &&
      (!character || character === C_NEWLINE)
    ) {
      subvalue += queue;

      if (silent) {
        return true;
      }

      return eat(subvalue)({type: 'thematicBreak'});
    } else {
      return;
    }
  }
}


/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable max-params */

var trim = __webpack_require__(223);
var repeat = __webpack_require__(242);
var decimal = __webpack_require__(240);
var getIndent = __webpack_require__(283);
var removeIndent = __webpack_require__(441);
var interrupt = __webpack_require__(256);

module.exports = list;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';
var C_PLUS = '+';
var C_DASH = '-';
var C_DOT = '.';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_PAREN_CLOSE = ')';
var C_X_LOWER = 'x';

var TAB_SIZE = 4;
var EXPRESSION_LOOSE_LIST_ITEM = /\n\n(?!\s*$)/;
var EXPRESSION_TASK_ITEM = /^\[([ \t]|x|X)][ \t]/;
var EXPRESSION_BULLET = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/;
var EXPRESSION_PEDANTIC_BULLET = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/;
var EXPRESSION_INITIAL_INDENT = /^( {1,4}|\t)?/gm;

/* Map of characters which can be used to mark
 * list-items. */
var LIST_UNORDERED_MARKERS = {};

LIST_UNORDERED_MARKERS[C_ASTERISK] = true;
LIST_UNORDERED_MARKERS[C_PLUS] = true;
LIST_UNORDERED_MARKERS[C_DASH] = true;

/* Map of characters which can be used to mark
 * list-items after a digit. */
var LIST_ORDERED_MARKERS = {};

LIST_ORDERED_MARKERS[C_DOT] = true;

/* Map of characters which can be used to mark
 * list-items after a digit. */
var LIST_ORDERED_COMMONMARK_MARKERS = {};

LIST_ORDERED_COMMONMARK_MARKERS[C_DOT] = true;
LIST_ORDERED_COMMONMARK_MARKERS[C_PAREN_CLOSE] = true;

function list(eat, value, silent) {
  var self = this;
  var commonmark = self.options.commonmark;
  var pedantic = self.options.pedantic;
  var tokenizers = self.blockTokenizers;
  var interuptors = self.interruptList;
  var markers;
  var index = 0;
  var length = value.length;
  var start = null;
  var size = 0;
  var queue;
  var ordered;
  var character;
  var marker;
  var nextIndex;
  var startIndex;
  var prefixed;
  var currentMarker;
  var content;
  var line;
  var prevEmpty;
  var empty;
  var items;
  var allLines;
  var emptyLines;
  var item;
  var enterTop;
  var exitBlockquote;
  var isLoose;
  var node;
  var now;
  var end;
  var indented;

  while (index < length) {
    character = value.charAt(index);

    if (character === C_TAB) {
      size += TAB_SIZE - (size % TAB_SIZE);
    } else if (character === C_SPACE) {
      size++;
    } else {
      break;
    }

    index++;
  }

  if (size >= TAB_SIZE) {
    return;
  }

  character = value.charAt(index);

  markers = commonmark ?
    LIST_ORDERED_COMMONMARK_MARKERS :
    LIST_ORDERED_MARKERS;

  if (LIST_UNORDERED_MARKERS[character] === true) {
    marker = character;
    ordered = false;
  } else {
    ordered = true;
    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (!decimal(character)) {
        break;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (!queue || markers[character] !== true) {
      return;
    }

    start = parseInt(queue, 10);
    marker = character;
  }

  character = value.charAt(++index);

  if (character !== C_SPACE && character !== C_TAB) {
    return;
  }

  if (silent) {
    return true;
  }

  index = 0;
  items = [];
  allLines = [];
  emptyLines = [];

  while (index < length) {
    nextIndex = value.indexOf(C_NEWLINE, index);
    startIndex = index;
    prefixed = false;
    indented = false;

    if (nextIndex === -1) {
      nextIndex = length;
    }

    end = index + TAB_SIZE;
    size = 0;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_TAB) {
        size += TAB_SIZE - (size % TAB_SIZE);
      } else if (character === C_SPACE) {
        size++;
      } else {
        break;
      }

      index++;
    }

    if (size >= TAB_SIZE) {
      indented = true;
    }

    if (item && size >= item.indent) {
      indented = true;
    }

    character = value.charAt(index);
    currentMarker = null;

    if (!indented) {
      if (LIST_UNORDERED_MARKERS[character] === true) {
        currentMarker = character;
        index++;
        size++;
      } else {
        queue = '';

        while (index < length) {
          character = value.charAt(index);

          if (!decimal(character)) {
            break;
          }

          queue += character;
          index++;
        }

        character = value.charAt(index);
        index++;

        if (queue && markers[character] === true) {
          currentMarker = character;
          size += queue.length + 1;
        }
      }

      if (currentMarker) {
        character = value.charAt(index);

        if (character === C_TAB) {
          size += TAB_SIZE - (size % TAB_SIZE);
          index++;
        } else if (character === C_SPACE) {
          end = index + TAB_SIZE;

          while (index < end) {
            if (value.charAt(index) !== C_SPACE) {
              break;
            }

            index++;
            size++;
          }

          if (index === end && value.charAt(index) === C_SPACE) {
            index -= TAB_SIZE - 1;
            size -= TAB_SIZE - 1;
          }
        } else if (character !== C_NEWLINE && character !== '') {
          currentMarker = null;
        }
      }
    }

    if (currentMarker) {
      if (!pedantic && marker !== currentMarker) {
        break;
      }

      prefixed = true;
    } else {
      if (!commonmark && !indented && value.charAt(startIndex) === C_SPACE) {
        indented = true;
      } else if (commonmark && item) {
        indented = size >= item.indent || size > TAB_SIZE;
      }

      prefixed = false;
      index = startIndex;
    }

    line = value.slice(startIndex, nextIndex);
    content = startIndex === index ? line : value.slice(index, nextIndex);

    if (
      currentMarker === C_ASTERISK ||
      currentMarker === C_UNDERSCORE ||
      currentMarker === C_DASH
    ) {
      if (tokenizers.thematicBreak.call(self, eat, line, true)) {
        break;
      }
    }

    prevEmpty = empty;
    empty = !trim(content).length;

    if (indented && item) {
      item.value = item.value.concat(emptyLines, line);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    } else if (prefixed) {
      if (emptyLines.length !== 0) {
        item.value.push('');
        item.trail = emptyLines.concat();
      }

      item = {
        value: [line],
        indent: size,
        trail: []
      };

      items.push(item);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    } else if (empty) {
      if (prevEmpty) {
        break;
      }

      emptyLines.push(line);
    } else {
      if (prevEmpty) {
        break;
      }

      if (interrupt(interuptors, tokenizers, self, [eat, line, true])) {
        break;
      }

      item.value = item.value.concat(emptyLines, line);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    }

    index = nextIndex + 1;
  }

  node = eat(allLines.join(C_NEWLINE)).reset({
    type: 'list',
    ordered: ordered,
    start: start,
    loose: null,
    children: []
  });

  enterTop = self.enterList();
  exitBlockquote = self.enterBlock();
  isLoose = false;
  index = -1;
  length = items.length;

  while (++index < length) {
    item = items[index].value.join(C_NEWLINE);
    now = eat.now();

    item = eat(item)(listItem(self, item, now), node);

    if (item.loose) {
      isLoose = true;
    }

    item = items[index].trail.join(C_NEWLINE);

    if (index !== length - 1) {
      item += C_NEWLINE;
    }

    eat(item);
  }

  enterTop();
  exitBlockquote();

  node.loose = isLoose;

  return node;
}

function listItem(ctx, value, position) {
  var offsets = ctx.offset;
  var fn = ctx.options.pedantic ? pedanticListItem : normalListItem;
  var checked = null;
  var task;
  var indent;

  value = fn.apply(null, arguments);

  if (ctx.options.gfm) {
    task = value.match(EXPRESSION_TASK_ITEM);

    if (task) {
      indent = task[0].length;
      checked = task[1].toLowerCase() === C_X_LOWER;
      offsets[position.line] += indent;
      value = value.slice(indent);
    }
  }

  return {
    type: 'listItem',
    loose: EXPRESSION_LOOSE_LIST_ITEM.test(value) ||
      value.charAt(value.length - 1) === C_NEWLINE,
    checked: checked,
    children: ctx.tokenizeBlock(value, position)
  };
}

/* Create a list-item using overly simple mechanics. */
function pedanticListItem(ctx, value, position) {
  var offsets = ctx.offset;
  var line = position.line;

  /* Remove the list-item’s bullet. */
  value = value.replace(EXPRESSION_PEDANTIC_BULLET, replacer);

  /* The initial line was also matched by the below, so
   * we reset the `line`. */
  line = position.line;

  return value.replace(EXPRESSION_INITIAL_INDENT, replacer);

  /* A simple replacer which removed all matches,
   * and adds their length to `offset`. */
  function replacer($0) {
    offsets[line] = (offsets[line] || 0) + $0.length;
    line++;

    return '';
  }
}

/* Create a list-item using sane mechanics. */
function normalListItem(ctx, value, position) {
  var offsets = ctx.offset;
  var line = position.line;
  var max;
  var bullet;
  var rest;
  var lines;
  var trimmedLines;
  var index;
  var length;

  /* Remove the list-item’s bullet. */
  value = value.replace(EXPRESSION_BULLET, replacer);

  lines = value.split(C_NEWLINE);

  trimmedLines = removeIndent(value, getIndent(max).indent).split(C_NEWLINE);

  /* We replaced the initial bullet with something
   * else above, which was used to trick
   * `removeIndentation` into removing some more
   * characters when possible.  However, that could
   * result in the initial line to be stripped more
   * than it should be. */
  trimmedLines[0] = rest;

  offsets[line] = (offsets[line] || 0) + bullet.length;
  line++;

  index = 0;
  length = lines.length;

  while (++index < length) {
    offsets[line] = (offsets[line] || 0) +
      lines[index].length - trimmedLines[index].length;
    line++;
  }

  return trimmedLines.join(C_NEWLINE);

  function replacer($0, $1, $2, $3, $4) {
    bullet = $1 + $2 + $3;
    rest = $4;

    /* Make sure that the first nine numbered list items
     * can indent with an extra space.  That is, when
     * the bullet did not receive an extra final space. */
    if (Number($2) < 10 && bullet.length % 2 === 1) {
      $2 = C_SPACE + $2;
    }

    max = $1 + repeat(C_SPACE, $2.length) + $3;

    return max + rest;
  }
}


/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(223);
var repeat = __webpack_require__(242);
var getIndent = __webpack_require__(283);

module.exports = indentation;

var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';

/* Remove the minimum indent from every line in `value`.
 * Supports both tab, spaced, and mixed indentation (as
 * well as possible). */
function indentation(value, maximum) {
  var values = value.split(C_NEWLINE);
  var position = values.length + 1;
  var minIndent = Infinity;
  var matrix = [];
  var index;
  var indentation;
  var stops;
  var padding;

  values.unshift(repeat(C_SPACE, maximum) + '!');

  while (position--) {
    indentation = getIndent(values[position]);

    matrix[position] = indentation.stops;

    if (trim(values[position]).length === 0) {
      continue;
    }

    if (indentation.indent) {
      if (indentation.indent > 0 && indentation.indent < minIndent) {
        minIndent = indentation.indent;
      }
    } else {
      minIndent = Infinity;

      break;
    }
  }

  if (minIndent !== Infinity) {
    position = values.length;

    while (position--) {
      stops = matrix[position];
      index = minIndent;

      while (index && !(index in stops)) {
        index--;
      }

      if (
        trim(values[position]).length !== 0 &&
        minIndent &&
        index !== minIndent
      ) {
        padding = C_TAB;
      } else {
        padding = '';
      }

      values[position] = padding + values[position].slice(
        index in stops ? stops[index] + 1 : 0
      );
    }
  }

  values.shift();

  return values.join(C_NEWLINE);
}


/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = setextHeading;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_EQUALS = '=';
var C_DASH = '-';

var MAX_HEADING_INDENT = 3;

/* Map of characters which can be used to mark setext
 * headers, mapping to their corresponding depth. */
var SETEXT_MARKERS = {};

SETEXT_MARKERS[C_EQUALS] = 1;
SETEXT_MARKERS[C_DASH] = 2;

function setextHeading(eat, value, silent) {
  var self = this;
  var now = eat.now();
  var length = value.length;
  var index = -1;
  var subvalue = '';
  var content;
  var queue;
  var character;
  var marker;
  var depth;

  /* Eat initial indentation. */
  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE || index >= MAX_HEADING_INDENT) {
      index--;
      break;
    }

    subvalue += character;
  }

  /* Eat content. */
  content = '';
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character === C_NEWLINE) {
      index--;
      break;
    }

    if (character === C_SPACE || character === C_TAB) {
      queue += character;
    } else {
      content += queue + character;
      queue = '';
    }
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += content + queue;

  /* Ensure the content is followed by a newline and a
   * valid marker. */
  character = value.charAt(++index);
  marker = value.charAt(++index);

  if (character !== C_NEWLINE || !SETEXT_MARKERS[marker]) {
    return;
  }

  subvalue += character;

  /* Eat Setext-line. */
  queue = marker;
  depth = SETEXT_MARKERS[marker];

  while (++index < length) {
    character = value.charAt(index);

    if (character !== marker) {
      if (character !== C_NEWLINE) {
        return;
      }

      index--;
      break;
    }

    queue += character;
  }

  if (silent) {
    return true;
  }

  return eat(subvalue + queue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  });
}


/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var openCloseTag = __webpack_require__(284).openCloseTag;

module.exports = blockHTML;

var C_TAB = '\t';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_LT = '<';

function blockHTML(eat, value, silent) {
  var self = this;
  var blocks = self.options.blocks;
  var length = value.length;
  var index = 0;
  var next;
  var line;
  var offset;
  var character;
  var count;
  var sequence;
  var subvalue;

  var sequences = [
    [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true],
    [/^<!--/, /-->/, true],
    [/^<\?/, /\?>/, true],
    [/^<![A-Za-z]/, />/, true],
    [/^<!\[CDATA\[/, /\]\]>/, true],
    [new RegExp('^</?(' + blocks.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true],
    [new RegExp(openCloseTag.source + '\\s*$'), /^$/, false]
  ];

  /* Eat initial spacing. */
  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    index++;
  }

  if (value.charAt(index) !== C_LT) {
    return;
  }

  next = value.indexOf(C_NEWLINE, index + 1);
  next = next === -1 ? length : next;
  line = value.slice(index, next);
  offset = -1;
  count = sequences.length;

  while (++offset < count) {
    if (sequences[offset][0].test(line)) {
      sequence = sequences[offset];
      break;
    }
  }

  if (!sequence) {
    return;
  }

  if (silent) {
    return sequence[2];
  }

  index = next;

  if (!sequence[1].test(line)) {
    while (index < length) {
      next = value.indexOf(C_NEWLINE, index + 1);
      next = next === -1 ? length : next;
      line = value.slice(index + 1, next);

      if (sequence[1].test(line)) {
        if (line) {
          index = next;
        }

        break;
      }

      index = next;
    }
  }

  subvalue = value.slice(0, index);

  return eat(subvalue)({type: 'html', value: subvalue});
}


/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(221);
var normalize = __webpack_require__(257);

module.exports = footnoteDefinition;
footnoteDefinition.notInList = true;
footnoteDefinition.notInBlock = true;

var C_BACKSLASH = '\\';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_CARET = '^';
var C_COLON = ':';

var EXPRESSION_INITIAL_TAB = /^( {4}|\t)?/gm;

function footnoteDefinition(eat, value, silent) {
  var self = this;
  var offsets = self.offset;
  var index;
  var length;
  var subvalue;
  var now;
  var currentLine;
  var content;
  var queue;
  var subqueue;
  var character;
  var identifier;
  var add;
  var exit;

  if (!self.options.footnotes) {
    return;
  }

  index = 0;
  length = value.length;
  subvalue = '';
  now = eat.now();
  currentLine = now.line;

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    subvalue += character;
    index++;
  }

  if (
    value.charAt(index) !== C_BRACKET_OPEN ||
    value.charAt(index + 1) !== C_CARET
  ) {
    return;
  }

  subvalue += C_BRACKET_OPEN + C_CARET;
  index = subvalue.length;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      break;
    } else if (character === C_BACKSLASH) {
      queue += character;
      index++;
      character = value.charAt(index);
    }

    queue += character;
    index++;
  }

  if (
    !queue ||
    value.charAt(index) !== C_BRACKET_CLOSE ||
    value.charAt(index + 1) !== C_COLON
  ) {
    return;
  }

  if (silent) {
    return true;
  }

  identifier = normalize(queue);
  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
  index = subvalue.length;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
    index++;
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  queue = '';
  content = '';
  subqueue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_NEWLINE) {
      subqueue = character;
      index++;

      while (index < length) {
        character = value.charAt(index);

        if (character !== C_NEWLINE) {
          break;
        }

        subqueue += character;
        index++;
      }

      queue += subqueue;
      subqueue = '';

      while (index < length) {
        character = value.charAt(index);

        if (character !== C_SPACE) {
          break;
        }

        subqueue += character;
        index++;
      }

      if (subqueue.length === 0) {
        break;
      }

      queue += subqueue;
    }

    if (queue) {
      content += queue;
      queue = '';
    }

    content += character;
    index++;
  }

  subvalue += content;

  content = content.replace(EXPRESSION_INITIAL_TAB, function (line) {
    offsets[currentLine] = (offsets[currentLine] || 0) + line.length;
    currentLine++;

    return '';
  });

  add = eat(subvalue);

  exit = self.enterBlock();
  content = self.tokenizeBlock(content, now);
  exit();

  return add({
    type: 'footnoteDefinition',
    identifier: identifier,
    children: content
  });
}


/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(221);
var normalize = __webpack_require__(257);

module.exports = definition;
definition.notInList = true;
definition.notInBlock = true;

var C_DOUBLE_QUOTE = '"';
var C_SINGLE_QUOTE = '\'';
var C_BACKSLASH = '\\';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_COLON = ':';
var C_LT = '<';
var C_GT = '>';

function definition(eat, value, silent) {
  var self = this;
  var commonmark = self.options.commonmark;
  var index = 0;
  var length = value.length;
  var subvalue = '';
  var beforeURL;
  var beforeTitle;
  var queue;
  var character;
  var test;
  var identifier;
  var url;
  var title;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);

  if (character !== C_BRACKET_OPEN) {
    return;
  }

  index++;
  subvalue += character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      break;
    } else if (character === C_BACKSLASH) {
      queue += character;
      index++;
      character = value.charAt(index);
    }

    queue += character;
    index++;
  }

  if (
    !queue ||
    value.charAt(index) !== C_BRACKET_CLOSE ||
    value.charAt(index + 1) !== C_COLON
  ) {
    return;
  }

  identifier = queue;
  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
  index = subvalue.length;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (
      character !== C_TAB &&
      character !== C_SPACE &&
      character !== C_NEWLINE
    ) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);
  queue = '';
  beforeURL = subvalue;

  if (character === C_LT) {
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (!isEnclosedURLCharacter(character)) {
        break;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (character === isEnclosedURLCharacter.delimiter) {
      subvalue += C_LT + queue + character;
      index++;
    } else {
      if (commonmark) {
        return;
      }

      index -= queue.length + 1;
      queue = '';
    }
  }

  if (!queue) {
    while (index < length) {
      character = value.charAt(index);

      if (!isUnclosedURLCharacter(character)) {
        break;
      }

      queue += character;
      index++;
    }

    subvalue += queue;
  }

  if (!queue) {
    return;
  }

  url = queue;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (
      character !== C_TAB &&
      character !== C_SPACE &&
      character !== C_NEWLINE
    ) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);
  test = null;

  if (character === C_DOUBLE_QUOTE) {
    test = C_DOUBLE_QUOTE;
  } else if (character === C_SINGLE_QUOTE) {
    test = C_SINGLE_QUOTE;
  } else if (character === C_PAREN_OPEN) {
    test = C_PAREN_CLOSE;
  }

  if (!test) {
    queue = '';
    index = subvalue.length;
  } else if (queue) {
    subvalue += queue + character;
    index = subvalue.length;
    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character === test) {
        break;
      }

      if (character === C_NEWLINE) {
        index++;
        character = value.charAt(index);

        if (character === C_NEWLINE || character === test) {
          return;
        }

        queue += C_NEWLINE;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (character !== test) {
      return;
    }

    beforeTitle = subvalue;
    subvalue += queue + character;
    index++;
    title = queue;
    queue = '';
  } else {
    return;
  }

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);

  if (!character || character === C_NEWLINE) {
    if (silent) {
      return true;
    }

    beforeURL = eat(beforeURL).test().end;
    url = self.decode.raw(self.unescape(url), beforeURL, {nonTerminated: false});

    if (title) {
      beforeTitle = eat(beforeTitle).test().end;
      title = self.decode.raw(self.unescape(title), beforeTitle);
    }

    return eat(subvalue)({
      type: 'definition',
      identifier: normalize(identifier),
      title: title || null,
      url: url
    });
  }
}

/* Check if `character` can be inside an enclosed URI. */
function isEnclosedURLCharacter(character) {
  return character !== C_GT &&
    character !== C_BRACKET_OPEN &&
    character !== C_BRACKET_CLOSE;
}

isEnclosedURLCharacter.delimiter = C_GT;

/* Check if `character` can be inside an unclosed URI. */
function isUnclosedURLCharacter(character) {
  return character !== C_BRACKET_OPEN &&
    character !== C_BRACKET_CLOSE &&
    !whitespace(character);
}


/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(221);

module.exports = table;

var C_BACKSLASH = '\\';
var C_TICK = '`';
var C_DASH = '-';
var C_PIPE = '|';
var C_COLON = ':';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';

var MIN_TABLE_COLUMNS = 1;
var MIN_TABLE_ROWS = 2;

var TABLE_ALIGN_LEFT = 'left';
var TABLE_ALIGN_CENTER = 'center';
var TABLE_ALIGN_RIGHT = 'right';
var TABLE_ALIGN_NONE = null;

function table(eat, value, silent) {
  var self = this;
  var index;
  var alignments;
  var alignment;
  var subvalue;
  var row;
  var length;
  var lines;
  var queue;
  var character;
  var hasDash;
  var align;
  var cell;
  var preamble;
  var count;
  var opening;
  var now;
  var position;
  var lineCount;
  var line;
  var rows;
  var table;
  var lineIndex;
  var pipeIndex;
  var first;

  /* Exit when not in gfm-mode. */
  if (!self.options.gfm) {
    return;
  }

  /* Get the rows.
   * Detecting tables soon is hard, so there are some
   * checks for performance here, such as the minimum
   * number of rows, and allowed characters in the
   * alignment row. */
  index = 0;
  lineCount = 0;
  length = value.length + 1;
  lines = [];

  while (index < length) {
    lineIndex = value.indexOf(C_NEWLINE, index);
    pipeIndex = value.indexOf(C_PIPE, index + 1);

    if (lineIndex === -1) {
      lineIndex = value.length;
    }

    if (pipeIndex === -1 || pipeIndex > lineIndex) {
      if (lineCount < MIN_TABLE_ROWS) {
        return;
      }

      break;
    }

    lines.push(value.slice(index, lineIndex));
    lineCount++;
    index = lineIndex + 1;
  }

  /* Parse the alignment row. */
  subvalue = lines.join(C_NEWLINE);
  alignments = lines.splice(1, 1)[0] || [];
  index = 0;
  length = alignments.length;
  lineCount--;
  alignment = false;
  align = [];

  while (index < length) {
    character = alignments.charAt(index);

    if (character === C_PIPE) {
      hasDash = null;

      if (alignment === false) {
        if (first === false) {
          return;
        }
      } else {
        align.push(alignment);
        alignment = false;
      }

      first = false;
    } else if (character === C_DASH) {
      hasDash = true;
      alignment = alignment || TABLE_ALIGN_NONE;
    } else if (character === C_COLON) {
      if (alignment === TABLE_ALIGN_LEFT) {
        alignment = TABLE_ALIGN_CENTER;
      } else if (hasDash && alignment === TABLE_ALIGN_NONE) {
        alignment = TABLE_ALIGN_RIGHT;
      } else {
        alignment = TABLE_ALIGN_LEFT;
      }
    } else if (!whitespace(character)) {
      return;
    }

    index++;
  }

  if (alignment !== false) {
    align.push(alignment);
  }

  /* Exit when without enough columns. */
  if (align.length < MIN_TABLE_COLUMNS) {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  /* Parse the rows. */
  position = -1;
  rows = [];

  table = eat(subvalue).reset({
    type: 'table',
    align: align,
    children: rows
  });

  while (++position < lineCount) {
    line = lines[position];
    row = {type: 'tableRow', children: []};

    /* Eat a newline character when this is not the
     * first row. */
    if (position) {
      eat(C_NEWLINE);
    }

    /* Eat the row. */
    eat(line).reset(row, table);

    length = line.length + 1;
    index = 0;
    queue = '';
    cell = '';
    preamble = true;
    count = null;
    opening = null;

    while (index < length) {
      character = line.charAt(index);

      if (character === C_TAB || character === C_SPACE) {
        if (cell) {
          queue += character;
        } else {
          eat(character);
        }

        index++;
        continue;
      }

      if (character === '' || character === C_PIPE) {
        if (preamble) {
          eat(character);
        } else {
          if (character && opening) {
            queue += character;
            index++;
            continue;
          }

          if ((cell || character) && !preamble) {
            subvalue = cell;

            if (queue.length > 1) {
              if (character) {
                subvalue += queue.slice(0, queue.length - 1);
                queue = queue.charAt(queue.length - 1);
              } else {
                subvalue += queue;
                queue = '';
              }
            }

            now = eat.now();

            eat(subvalue)({
              type: 'tableCell',
              children: self.tokenizeInline(cell, now)
            }, row);
          }

          eat(queue + character);

          queue = '';
          cell = '';
        }
      } else {
        if (queue) {
          cell += queue;
          queue = '';
        }

        cell += character;

        if (character === C_BACKSLASH && index !== length - 2) {
          cell += line.charAt(index + 1);
          index++;
        }

        if (character === C_TICK) {
          count = 1;

          while (line.charAt(index + 1) === character) {
            cell += character;
            index++;
            count++;
          }

          if (!opening) {
            opening = count;
          } else if (count >= opening) {
            opening = 0;
          }
        }
      }

      preamble = false;
      index++;
    }

    /* Eat the alignment row. */
    if (!position) {
      eat(C_NEWLINE + alignments);
    }
  }

  return table;
}


/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(223);
var decimal = __webpack_require__(240);
var trimTrailingLines = __webpack_require__(255);
var interrupt = __webpack_require__(256);

module.exports = paragraph;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';

var TAB_SIZE = 4;

/* Tokenise paragraph. */
function paragraph(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var commonmark = settings.commonmark;
  var gfm = settings.gfm;
  var tokenizers = self.blockTokenizers;
  var interruptors = self.interruptParagraph;
  var index = value.indexOf(C_NEWLINE);
  var length = value.length;
  var position;
  var subvalue;
  var character;
  var size;
  var now;

  while (index < length) {
    /* Eat everything if there’s no following newline. */
    if (index === -1) {
      index = length;
      break;
    }

    /* Stop if the next character is NEWLINE. */
    if (value.charAt(index + 1) === C_NEWLINE) {
      break;
    }

    /* In commonmark-mode, following indented lines
     * are part of the paragraph. */
    if (commonmark) {
      size = 0;
      position = index + 1;

      while (position < length) {
        character = value.charAt(position);

        if (character === C_TAB) {
          size = TAB_SIZE;
          break;
        } else if (character === C_SPACE) {
          size++;
        } else {
          break;
        }

        position++;
      }

      if (size >= TAB_SIZE) {
        index = value.indexOf(C_NEWLINE, index + 1);
        continue;
      }
    }

    subvalue = value.slice(index + 1);

    /* Check if the following code contains a possible
     * block. */
    if (interrupt(interruptors, tokenizers, self, [eat, subvalue, true])) {
      break;
    }

    /* Break if the following line starts a list, when
     * already in a list, or when in commonmark, or when
     * in gfm mode and the bullet is *not* numeric. */
    if (
      tokenizers.list.call(self, eat, subvalue, true) &&
      (
        self.inList ||
        commonmark ||
        (gfm && !decimal(trim.left(subvalue).charAt(0)))
      )
    ) {
      break;
    }

    position = index;
    index = value.indexOf(C_NEWLINE, index + 1);

    if (index !== -1 && trim(value.slice(position, index)) === '') {
      index = position;
      break;
    }
  }

  subvalue = value.slice(0, index);

  if (trim(subvalue) === '') {
    eat(subvalue);

    return null;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  now = eat.now();
  subvalue = trimTrailingLines(subvalue);

  return eat(subvalue)({
    type: 'paragraph',
    children: self.tokenizeInline(subvalue, now)
  });
}


/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(449);

module.exports = escape;
escape.locator = locate;

function escape(eat, value, silent) {
  var self = this;
  var character;
  var node;

  if (value.charAt(0) === '\\') {
    character = value.charAt(1);

    if (self.escape.indexOf(character) !== -1) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      if (character === '\n') {
        node = {type: 'break'};
      } else {
        node = {
          type: 'text',
          value: character
        };
      }

      return eat('\\' + character)(node);
    }
  }
}


/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('\\', fromIndex);
}


/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(221);
var decode = __webpack_require__(239);
var locate = __webpack_require__(286);

module.exports = autoLink;
autoLink.locator = locate;
autoLink.notInLink = true;

var C_LT = '<';
var C_GT = '>';
var C_AT_SIGN = '@';
var C_SLASH = '/';
var MAILTO = 'mailto:';
var MAILTO_LENGTH = MAILTO.length;

/* Tokenise a link. */
function autoLink(eat, value, silent) {
  var self;
  var subvalue;
  var length;
  var index;
  var queue;
  var character;
  var hasAtCharacter;
  var link;
  var now;
  var content;
  var tokenizers;
  var exit;

  if (value.charAt(0) !== C_LT) {
    return;
  }

  self = this;
  subvalue = '';
  length = value.length;
  index = 0;
  queue = '';
  hasAtCharacter = false;
  link = '';

  index++;
  subvalue = C_LT;

  while (index < length) {
    character = value.charAt(index);

    if (
      whitespace(character) ||
      character === C_GT ||
      character === C_AT_SIGN ||
      (character === ':' && value.charAt(index + 1) === C_SLASH)
    ) {
      break;
    }

    queue += character;
    index++;
  }

  if (!queue) {
    return;
  }

  link += queue;
  queue = '';

  character = value.charAt(index);
  link += character;
  index++;

  if (character === C_AT_SIGN) {
    hasAtCharacter = true;
  } else {
    if (
      character !== ':' ||
      value.charAt(index + 1) !== C_SLASH
    ) {
      return;
    }

    link += C_SLASH;
    index++;
  }

  while (index < length) {
    character = value.charAt(index);

    if (whitespace(character) || character === C_GT) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);

  if (!queue || character !== C_GT) {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  link += queue;
  content = link;
  subvalue += link + character;
  now = eat.now();
  now.column++;
  now.offset++;

  if (hasAtCharacter) {
    if (link.slice(0, MAILTO_LENGTH).toLowerCase() === MAILTO) {
      content = content.substr(MAILTO_LENGTH);
      now.column += MAILTO_LENGTH;
      now.offset += MAILTO_LENGTH;
    } else {
      link = MAILTO + link;
    }
  }

  /* Temporarily remove all tokenizers except text in autolinks. */
  tokenizers = self.inlineTokenizers;
  self.inlineTokenizers = {text: tokenizers.text};

  exit = self.enterLink();

  content = self.tokenizeInline(content, now);

  self.inlineTokenizers = tokenizers;
  exit();

  return eat(subvalue)({
    type: 'link',
    title: null,
    url: decode(link, {nonTerminated: false}),
    children: content
  });
}


/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var decode = __webpack_require__(239);
var whitespace = __webpack_require__(221);
var locate = __webpack_require__(452);

module.exports = url;
url.locator = locate;
url.notInLink = true;

var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_LT = '<';
var C_AT_SIGN = '@';

var HTTP_PROTOCOL = 'http://';
var HTTPS_PROTOCOL = 'https://';
var MAILTO_PROTOCOL = 'mailto:';

var PROTOCOLS = [
  HTTP_PROTOCOL,
  HTTPS_PROTOCOL,
  MAILTO_PROTOCOL
];

var PROTOCOLS_LENGTH = PROTOCOLS.length;

function url(eat, value, silent) {
  var self = this;
  var subvalue;
  var content;
  var character;
  var index;
  var position;
  var protocol;
  var match;
  var length;
  var queue;
  var parenCount;
  var nextCharacter;
  var exit;

  if (!self.options.gfm) {
    return;
  }

  subvalue = '';
  index = -1;
  length = PROTOCOLS_LENGTH;

  while (++index < length) {
    protocol = PROTOCOLS[index];
    match = value.slice(0, protocol.length);

    if (match.toLowerCase() === protocol) {
      subvalue = match;
      break;
    }
  }

  if (!subvalue) {
    return;
  }

  index = subvalue.length;
  length = value.length;
  queue = '';
  parenCount = 0;

  while (index < length) {
    character = value.charAt(index);

    if (whitespace(character) || character === C_LT) {
      break;
    }

    if (
      character === '.' ||
      character === ',' ||
      character === ':' ||
      character === ';' ||
      character === '"' ||
      character === '\'' ||
      character === ')' ||
      character === ']'
    ) {
      nextCharacter = value.charAt(index + 1);

      if (!nextCharacter || whitespace(nextCharacter)) {
        break;
      }
    }

    if (character === C_PAREN_OPEN || character === C_BRACKET_OPEN) {
      parenCount++;
    }

    if (character === C_PAREN_CLOSE || character === C_BRACKET_CLOSE) {
      parenCount--;

      if (parenCount < 0) {
        break;
      }
    }

    queue += character;
    index++;
  }

  if (!queue) {
    return;
  }

  subvalue += queue;
  content = subvalue;

  if (protocol === MAILTO_PROTOCOL) {
    position = queue.indexOf(C_AT_SIGN);

    if (position === -1 || position === length - 1) {
      return;
    }

    content = content.substr(MAILTO_PROTOCOL.length);
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  exit = self.enterLink();
  content = self.tokenizeInline(content, eat.now());
  exit();

  return eat(subvalue)({
    type: 'link',
    title: null,
    url: decode(subvalue, {nonTerminated: false}),
    children: content
  });
}


/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

var PROTOCOLS = ['https://', 'http://', 'mailto:'];

function locate(value, fromIndex) {
  var length = PROTOCOLS.length;
  var index = -1;
  var min = -1;
  var position;

  if (!this.options.gfm) {
    return -1;
  }

  while (++index < length) {
    position = value.indexOf(PROTOCOLS[index], fromIndex);

    if (position !== -1 && (position < min || min === -1)) {
      min = position;
    }
  }

  return min;
}


/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabetical = __webpack_require__(278);
var locate = __webpack_require__(286);
var tag = __webpack_require__(284).tag;

module.exports = inlineHTML;
inlineHTML.locator = locate;

var EXPRESSION_HTML_LINK_OPEN = /^<a /i;
var EXPRESSION_HTML_LINK_CLOSE = /^<\/a>/i;

function inlineHTML(eat, value, silent) {
  var self = this;
  var length = value.length;
  var character;
  var subvalue;

  if (value.charAt(0) !== '<' || length < 3) {
    return;
  }

  character = value.charAt(1);

  if (
    !alphabetical(character) &&
    character !== '?' &&
    character !== '!' &&
    character !== '/'
  ) {
    return;
  }

  subvalue = value.match(tag);

  if (!subvalue) {
    return;
  }

  /* istanbul ignore if - not used yet. */
  if (silent) {
    return true;
  }

  subvalue = subvalue[0];

  if (!self.inLink && EXPRESSION_HTML_LINK_OPEN.test(subvalue)) {
    self.inLink = true;
  } else if (self.inLink && EXPRESSION_HTML_LINK_CLOSE.test(subvalue)) {
    self.inLink = false;
  }

  return eat(subvalue)({type: 'html', value: subvalue});
}


/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(221);
var locate = __webpack_require__(287);

module.exports = link;
link.locator = locate;

var own = {}.hasOwnProperty;

var C_BACKSLASH = '\\';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_LT = '<';
var C_GT = '>';
var C_TICK = '`';
var C_DOUBLE_QUOTE = '"';
var C_SINGLE_QUOTE = '\'';

/* Map of characters, which can be used to mark link
 * and image titles. */
var LINK_MARKERS = {};

LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;

/* Map of characters, which can be used to mark link
 * and image titles in commonmark-mode. */
var COMMONMARK_LINK_MARKERS = {};

COMMONMARK_LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
COMMONMARK_LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;
COMMONMARK_LINK_MARKERS[C_PAREN_OPEN] = C_PAREN_CLOSE;

function link(eat, value, silent) {
  var self = this;
  var subvalue = '';
  var index = 0;
  var character = value.charAt(0);
  var pedantic = self.options.pedantic;
  var commonmark = self.options.commonmark;
  var gfm = self.options.gfm;
  var closed;
  var count;
  var opening;
  var beforeURL;
  var beforeTitle;
  var subqueue;
  var hasMarker;
  var markers;
  var isImage;
  var content;
  var marker;
  var length;
  var title;
  var depth;
  var queue;
  var url;
  var now;
  var exit;
  var node;

  /* Detect whether this is an image. */
  if (character === '!') {
    isImage = true;
    subvalue = character;
    character = value.charAt(++index);
  }

  /* Eat the opening. */
  if (character !== C_BRACKET_OPEN) {
    return;
  }

  /* Exit when this is a link and we’re already inside
   * a link. */
  if (!isImage && self.inLink) {
    return;
  }

  subvalue += character;
  queue = '';
  index++;

  /* Eat the content. */
  length = value.length;
  now = eat.now();
  depth = 0;

  now.column += index;
  now.offset += index;

  while (index < length) {
    character = value.charAt(index);
    subqueue = character;

    if (character === C_TICK) {
      /* Inline-code in link content. */
      count = 1;

      while (value.charAt(index + 1) === C_TICK) {
        subqueue += character;
        index++;
        count++;
      }

      if (!opening) {
        opening = count;
      } else if (count >= opening) {
        opening = 0;
      }
    } else if (character === C_BACKSLASH) {
      /* Allow brackets to be escaped. */
      index++;
      subqueue += value.charAt(index);
    /* In GFM mode, brackets in code still count.
     * In all other modes, they don’t.  This empty
     * block prevents the next statements are
     * entered. */
    } else if ((!opening || gfm) && character === C_BRACKET_OPEN) {
      depth++;
    } else if ((!opening || gfm) && character === C_BRACKET_CLOSE) {
      if (depth) {
        depth--;
      } else {
        /* Allow white-space between content and
         * url in GFM mode. */
        if (!pedantic) {
          while (index < length) {
            character = value.charAt(index + 1);

            if (!whitespace(character)) {
              break;
            }

            subqueue += character;
            index++;
          }
        }

        if (value.charAt(index + 1) !== C_PAREN_OPEN) {
          return;
        }

        subqueue += C_PAREN_OPEN;
        closed = true;
        index++;

        break;
      }
    }

    queue += subqueue;
    subqueue = '';
    index++;
  }

  /* Eat the content closing. */
  if (!closed) {
    return;
  }

  content = queue;
  subvalue += queue + subqueue;
  index++;

  /* Eat white-space. */
  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    subvalue += character;
    index++;
  }

  /* Eat the URL. */
  character = value.charAt(index);
  markers = commonmark ? COMMONMARK_LINK_MARKERS : LINK_MARKERS;
  queue = '';
  beforeURL = subvalue;

  if (character === C_LT) {
    index++;
    beforeURL += C_LT;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_GT) {
        break;
      }

      if (commonmark && character === '\n') {
        return;
      }

      queue += character;
      index++;
    }

    if (value.charAt(index) !== C_GT) {
      return;
    }

    subvalue += C_LT + queue + C_GT;
    url = queue;
    index++;
  } else {
    character = null;
    subqueue = '';

    while (index < length) {
      character = value.charAt(index);

      if (subqueue && own.call(markers, character)) {
        break;
      }

      if (whitespace(character)) {
        if (!pedantic) {
          break;
        }

        subqueue += character;
      } else {
        if (character === C_PAREN_OPEN) {
          depth++;
        } else if (character === C_PAREN_CLOSE) {
          if (depth === 0) {
            break;
          }

          depth--;
        }

        queue += subqueue;
        subqueue = '';

        if (character === C_BACKSLASH) {
          queue += C_BACKSLASH;
          character = value.charAt(++index);
        }

        queue += character;
      }

      index++;
    }

    subvalue += queue;
    url = queue;
    index = subvalue.length;
  }

  /* Eat white-space. */
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);
  subvalue += queue;

  /* Eat the title. */
  if (queue && own.call(markers, character)) {
    index++;
    subvalue += character;
    queue = '';
    marker = markers[character];
    beforeTitle = subvalue;

    /* In commonmark-mode, things are pretty easy: the
     * marker cannot occur inside the title.
     *
     * Non-commonmark does, however, support nested
     * delimiters. */
    if (commonmark) {
      while (index < length) {
        character = value.charAt(index);

        if (character === marker) {
          break;
        }

        if (character === C_BACKSLASH) {
          queue += C_BACKSLASH;
          character = value.charAt(++index);
        }

        index++;
        queue += character;
      }

      character = value.charAt(index);

      if (character !== marker) {
        return;
      }

      title = queue;
      subvalue += queue + character;
      index++;

      while (index < length) {
        character = value.charAt(index);

        if (!whitespace(character)) {
          break;
        }

        subvalue += character;
        index++;
      }
    } else {
      subqueue = '';

      while (index < length) {
        character = value.charAt(index);

        if (character === marker) {
          if (hasMarker) {
            queue += marker + subqueue;
            subqueue = '';
          }

          hasMarker = true;
        } else if (!hasMarker) {
          queue += character;
        } else if (character === C_PAREN_CLOSE) {
          subvalue += queue + marker + subqueue;
          title = queue;
          break;
        } else if (whitespace(character)) {
          subqueue += character;
        } else {
          queue += marker + subqueue + character;
          subqueue = '';
          hasMarker = false;
        }

        index++;
      }
    }
  }

  if (value.charAt(index) !== C_PAREN_CLOSE) {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  subvalue += C_PAREN_CLOSE;

  url = self.decode.raw(self.unescape(url), eat(beforeURL).test().end, {nonTerminated: false});

  if (title) {
    beforeTitle = eat(beforeTitle).test().end;
    title = self.decode.raw(self.unescape(title), beforeTitle);
  }

  node = {
    type: isImage ? 'image' : 'link',
    title: title || null,
    url: url
  };

  if (isImage) {
    node.alt = self.decode.raw(self.unescape(content), now) || null;
  } else {
    exit = self.enterLink();
    node.children = self.tokenizeInline(content, now);
    exit();
  }

  return eat(subvalue)(node);
}


/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(221);
var locate = __webpack_require__(287);
var normalize = __webpack_require__(257);

module.exports = reference;
reference.locator = locate;

var T_LINK = 'link';
var T_IMAGE = 'image';
var T_FOOTNOTE = 'footnote';
var REFERENCE_TYPE_SHORTCUT = 'shortcut';
var REFERENCE_TYPE_COLLAPSED = 'collapsed';
var REFERENCE_TYPE_FULL = 'full';
var C_CARET = '^';
var C_BACKSLASH = '\\';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';

function reference(eat, value, silent) {
  var self = this;
  var character = value.charAt(0);
  var index = 0;
  var length = value.length;
  var subvalue = '';
  var intro = '';
  var type = T_LINK;
  var referenceType = REFERENCE_TYPE_SHORTCUT;
  var content;
  var identifier;
  var now;
  var node;
  var exit;
  var queue;
  var bracketed;
  var depth;

  /* Check whether we’re eating an image. */
  if (character === '!') {
    type = T_IMAGE;
    intro = character;
    character = value.charAt(++index);
  }

  if (character !== C_BRACKET_OPEN) {
    return;
  }

  index++;
  intro += character;
  queue = '';

  /* Check whether we’re eating a footnote. */
  if (self.options.footnotes && value.charAt(index) === C_CARET) {
    /* Exit if `![^` is found, so the `!` will be seen as text after this,
     * and we’ll enter this function again when `[^` is found. */
    if (type === T_IMAGE) {
      return;
    }

    intro += C_CARET;
    index++;
    type = T_FOOTNOTE;
  }

  /* Eat the text. */
  depth = 0;

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_OPEN) {
      bracketed = true;
      depth++;
    } else if (character === C_BRACKET_CLOSE) {
      if (!depth) {
        break;
      }

      depth--;
    }

    if (character === C_BACKSLASH) {
      queue += C_BACKSLASH;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }

  subvalue = queue;
  content = queue;
  character = value.charAt(index);

  if (character !== C_BRACKET_CLOSE) {
    return;
  }

  index++;
  subvalue += character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);

  /* Inline footnotes cannot have an identifier. */
  if (type !== T_FOOTNOTE && character === C_BRACKET_OPEN) {
    identifier = '';
    queue += character;
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_BRACKET_OPEN || character === C_BRACKET_CLOSE) {
        break;
      }

      if (character === C_BACKSLASH) {
        identifier += C_BACKSLASH;
        character = value.charAt(++index);
      }

      identifier += character;
      index++;
    }

    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      referenceType = identifier ? REFERENCE_TYPE_FULL : REFERENCE_TYPE_COLLAPSED;
      queue += identifier + character;
      index++;
    } else {
      identifier = '';
    }

    subvalue += queue;
    queue = '';
  } else {
    if (!content) {
      return;
    }

    identifier = content;
  }

  /* Brackets cannot be inside the identifier. */
  if (referenceType !== REFERENCE_TYPE_FULL && bracketed) {
    return;
  }

  subvalue = intro + subvalue;

  if (type === T_LINK && self.inLink) {
    return null;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  if (type === T_FOOTNOTE && content.indexOf(' ') !== -1) {
    return eat(subvalue)({
      type: 'footnote',
      children: this.tokenizeInline(content, eat.now())
    });
  }

  now = eat.now();
  now.column += intro.length;
  now.offset += intro.length;
  identifier = referenceType === REFERENCE_TYPE_FULL ? identifier : content;

  node = {
    type: type + 'Reference',
    identifier: normalize(identifier)
  };

  if (type === T_LINK || type === T_IMAGE) {
    node.referenceType = referenceType;
  }

  if (type === T_LINK) {
    exit = self.enterLink();
    node.children = self.tokenizeInline(content, now);
    exit();
  } else if (type === T_IMAGE) {
    node.alt = self.decode.raw(self.unescape(content), now) || null;
  }

  return eat(subvalue)(node);
}


/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(223);
var whitespace = __webpack_require__(221);
var locate = __webpack_require__(457);

module.exports = strong;
strong.locator = locate;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';

function strong(eat, value, silent) {
  var self = this;
  var index = 0;
  var character = value.charAt(index);
  var now;
  var pedantic;
  var marker;
  var queue;
  var subvalue;
  var length;
  var prev;

  if (
    (character !== C_ASTERISK && character !== C_UNDERSCORE) ||
    value.charAt(++index) !== character
  ) {
    return;
  }

  pedantic = self.options.pedantic;
  marker = character;
  subvalue = marker + marker;
  length = value.length;
  index++;
  queue = '';
  character = '';

  if (pedantic && whitespace(value.charAt(index))) {
    return;
  }

  while (index < length) {
    prev = character;
    character = value.charAt(index);

    if (
      character === marker &&
      value.charAt(index + 1) === marker &&
      (!pedantic || !whitespace(prev))
    ) {
      character = value.charAt(index + 2);

      if (character !== marker) {
        if (!trim(queue)) {
          return;
        }

        /* istanbul ignore if - never used (yet) */
        if (silent) {
          return true;
        }

        now = eat.now();
        now.column += 2;
        now.offset += 2;

        return eat(subvalue + queue + subvalue)({
          type: 'strong',
          children: self.tokenizeInline(queue, now)
        });
      }
    }

    if (!pedantic && character === '\\') {
      queue += character;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }
}


/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var asterisk = value.indexOf('**', fromIndex);
  var underscore = value.indexOf('__', fromIndex);

  if (underscore === -1) {
    return asterisk;
  }

  if (asterisk === -1) {
    return underscore;
  }

  return underscore < asterisk ? underscore : asterisk;
}


/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(223);
var word = __webpack_require__(459);
var whitespace = __webpack_require__(221);
var locate = __webpack_require__(460);

module.exports = emphasis;
emphasis.locator = locate;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';

function emphasis(eat, value, silent) {
  var self = this;
  var index = 0;
  var character = value.charAt(index);
  var now;
  var pedantic;
  var marker;
  var queue;
  var subvalue;
  var length;
  var prev;

  if (character !== C_ASTERISK && character !== C_UNDERSCORE) {
    return;
  }

  pedantic = self.options.pedantic;
  subvalue = character;
  marker = character;
  length = value.length;
  index++;
  queue = '';
  character = '';

  if (pedantic && whitespace(value.charAt(index))) {
    return;
  }

  while (index < length) {
    prev = character;
    character = value.charAt(index);

    if (character === marker && (!pedantic || !whitespace(prev))) {
      character = value.charAt(++index);

      if (character !== marker) {
        if (!trim(queue) || prev === marker) {
          return;
        }

        if (!pedantic && marker === C_UNDERSCORE && word(character)) {
          queue += marker;
          continue;
        }

        /* istanbul ignore if - never used (yet) */
        if (silent) {
          return true;
        }

        now = eat.now();
        now.column++;
        now.offset++;

        return eat(subvalue + queue + marker)({
          type: 'emphasis',
          children: self.tokenizeInline(queue, now)
        });
      }

      queue += marker;
    }

    if (!pedantic && character === '\\') {
      queue += character;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }
}


/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = wordCharacter

var fromCode = String.fromCharCode
var re = /\w/

/* Check if the given character code, or the character
 * code at the first character, is a word character. */
function wordCharacter(character) {
  return re.test(
    typeof character === 'number' ? fromCode(character) : character.charAt(0)
  )
}


/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var asterisk = value.indexOf('*', fromIndex);
  var underscore = value.indexOf('_', fromIndex);

  if (underscore === -1) {
    return asterisk;
  }

  if (asterisk === -1) {
    return underscore;
  }

  return underscore < asterisk ? underscore : asterisk;
}


/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(221);
var locate = __webpack_require__(462);

module.exports = strikethrough;
strikethrough.locator = locate;

var C_TILDE = '~';
var DOUBLE = '~~';

function strikethrough(eat, value, silent) {
  var self = this;
  var character = '';
  var previous = '';
  var preceding = '';
  var subvalue = '';
  var index;
  var length;
  var now;

  if (
    !self.options.gfm ||
    value.charAt(0) !== C_TILDE ||
    value.charAt(1) !== C_TILDE ||
    whitespace(value.charAt(2))
  ) {
    return;
  }

  index = 1;
  length = value.length;
  now = eat.now();
  now.column += 2;
  now.offset += 2;

  while (++index < length) {
    character = value.charAt(index);

    if (
      character === C_TILDE &&
      previous === C_TILDE &&
      (!preceding || !whitespace(preceding))
    ) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      return eat(DOUBLE + subvalue + DOUBLE)({
        type: 'delete',
        children: self.tokenizeInline(subvalue, now)
      });
    }

    subvalue += previous;
    preceding = previous;
    previous = character;
  }
}


/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('~~', fromIndex);
}


/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(221);
var locate = __webpack_require__(464);

module.exports = inlineCode;
inlineCode.locator = locate;

var C_TICK = '`';

/* Tokenise inline code. */
function inlineCode(eat, value, silent) {
  var length = value.length;
  var index = 0;
  var queue = '';
  var tickQueue = '';
  var contentQueue;
  var subqueue;
  var count;
  var openingCount;
  var subvalue;
  var character;
  var found;
  var next;

  while (index < length) {
    if (value.charAt(index) !== C_TICK) {
      break;
    }

    queue += C_TICK;
    index++;
  }

  if (!queue) {
    return;
  }

  subvalue = queue;
  openingCount = index;
  queue = '';
  next = value.charAt(index);
  count = 0;

  while (index < length) {
    character = next;
    next = value.charAt(index + 1);

    if (character === C_TICK) {
      count++;
      tickQueue += character;
    } else {
      count = 0;
      queue += character;
    }

    if (count && next !== C_TICK) {
      if (count === openingCount) {
        subvalue += queue + tickQueue;
        found = true;
        break;
      }

      queue += tickQueue;
      tickQueue = '';
    }

    index++;
  }

  if (!found) {
    if (openingCount % 2 !== 0) {
      return;
    }

    queue = '';
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  contentQueue = '';
  subqueue = '';
  length = queue.length;
  index = -1;

  while (++index < length) {
    character = queue.charAt(index);

    if (whitespace(character)) {
      subqueue += character;
      continue;
    }

    if (subqueue) {
      if (contentQueue) {
        contentQueue += subqueue;
      }

      subqueue = '';
    }

    contentQueue += character;
  }

  return eat(subvalue)({
    type: 'inlineCode',
    value: contentQueue
  });
}


/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('`', fromIndex);
}


/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(466);

module.exports = hardBreak;
hardBreak.locator = locate;

var MIN_BREAK_LENGTH = 2;

function hardBreak(eat, value, silent) {
  var length = value.length;
  var index = -1;
  var queue = '';
  var character;

  while (++index < length) {
    character = value.charAt(index);

    if (character === '\n') {
      if (index < MIN_BREAK_LENGTH) {
        return;
      }

      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      queue += character;

      return eat(queue)({type: 'break'});
    }

    if (character !== ' ') {
      return;
    }

    queue += character;
  }
}


/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var index = value.indexOf('\n', fromIndex);

  while (index > fromIndex) {
    if (value.charAt(index - 1) !== ' ') {
      break;
    }

    index--;
  }

  return index;
}


/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = text;

function text(eat, value, silent) {
  var self = this;
  var methods;
  var tokenizers;
  var index;
  var length;
  var subvalue;
  var position;
  var tokenizer;
  var name;
  var min;
  var now;

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  methods = self.inlineMethods;
  length = methods.length;
  tokenizers = self.inlineTokenizers;
  index = -1;
  min = value.length;

  while (++index < length) {
    name = methods[index];

    if (name === 'text' || !tokenizers[name]) {
      continue;
    }

    tokenizer = tokenizers[name].locator;

    if (!tokenizer) {
      eat.file.fail('Missing locator: `' + name + '`');
    }

    position = tokenizer.call(self, value, 1);

    if (position !== -1 && position < min) {
      min = position;
    }
  }

  subvalue = value.slice(0, min);
  now = eat.now();

  self.decode(subvalue, now, function (content, position, source) {
    eat(source || content)({
      type: 'text',
      value: content
    });
  });
}


/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var squeezeParagraphs = __webpack_require__(469)

module.exports = function() {
  return squeezeParagraphs
}


/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var remove = __webpack_require__(470)

module.exports = squeeze

var whiteSpaceOnly = /^\s*$/

function squeeze(ast) {
  return remove(ast, {cascade: false}, isEmptyParagraph)
}

// Whether paragraph is empty or composed only of whitespace.
function isEmptyParagraph(node) {
  return node.type === 'paragraph' && node.children.every(isEmptyText)
}

function isEmptyText(node) {
  return node.type === 'text' && whiteSpaceOnly.test(node.value)
}


/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__(282)

module.exports = remove

function remove(ast, opts, test) {
  var cascade

  if (!test) {
    test = opts
    opts = {}
  }

  cascade = opts.cascade
  cascade = cascade === null || cascade === undefined ? true : cascade

  return preorder(ast, null, null)

  // Check and remove nodes recursively in preorder.
  // For each composite node, modify its children array in-place.
  function preorder(node, nodeIndex, parent) {
    var children
    var length
    var index
    var position
    var child

    if (is(test, node, nodeIndex, parent)) {
      return null
    }

    children = node.children

    if (!children || children.length === 0) {
      return node
    }

    // Move all living children to the beginning of the children array.
    position = 0
    length = children.length
    index = -1

    while (++index < length) {
      child = preorder(children[index], index, node)

      if (child) {
        children[position++] = child
      }
    }

    // Cascade delete.
    if (cascade && position === 0) {
      return null
    }

    // Drop other nodes.
    children.length = position

    return node
  }
}


/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

const visit = __webpack_require__(241)

module.exports = options => tree => {
  visit(tree, 'html', node => {
    node.type = node.mdxType || 'jsx'
  })

  return tree
}


/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

const toHAST = __webpack_require__(473)

module.exports = function mdxAstToMdxHast() {
  return (tree, file) => {
    const handlers = {
      // `inlineCode` gets passed as `code` by the HAST transform.
      // This makes sure it ends up being `inlineCode`
      inlineCode(h, node) {
        return Object.assign({}, node, {
          type: 'element',
          tagName: 'inlineCode',
          properties: {},
          children: [
            {
              type: 'text',
              value: node.value
            }
          ]
        })
      },
      import(h, node) {
        return Object.assign({}, node, {
          type: 'import'
        })
      },
      export(h, node) {
        return Object.assign({}, node, {
          type: 'export'
        })
      },
      jsx(h, node) {
        return Object.assign({}, node, {
          type: 'jsx'
        })
      }
    }

    const hast = toHAST(tree, {
      handlers
    })

    return hast
  }
}


/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(474)


/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = toHAST

var xtend = __webpack_require__(226)
var u = __webpack_require__(222)
var visit = __webpack_require__(241)
var position = __webpack_require__(288)
var generated = __webpack_require__(475)
var definitions = __webpack_require__(476)
var one = __webpack_require__(289)
var footer = __webpack_require__(477)
var handlers = __webpack_require__(478)

/* Factory to transform. */
function factory(tree, options) {
  var settings = options || {}
  var dangerous = settings.allowDangerousHTML

  h.dangerous = dangerous
  h.definition = definitions(tree, settings)
  h.footnotes = []
  h.augment = augment
  h.handlers = xtend(handlers, settings.handlers || {})

  visit(tree, 'footnoteDefinition', visitor)

  return h

  /* Finalise the created `right`, a HAST node, from
   * `left`, an MDAST node.   */
  function augment(left, right) {
    var data
    var ctx

    /* Handle `data.hName`, `data.hProperties, `hChildren`. */
    if (left && 'data' in left) {
      data = left.data

      if (right.type === 'element' && data.hName) {
        right.tagName = data.hName
      }

      if (right.type === 'element' && data.hProperties) {
        right.properties = xtend(right.properties, data.hProperties)
      }

      if (right.children && data.hChildren) {
        right.children = data.hChildren
      }
    }

    ctx = left && left.position ? left : {position: left}

    if (!generated(ctx)) {
      right.position = {
        start: position.start(ctx),
        end: position.end(ctx)
      }
    }

    return right
  }

  /* Create an element for a `node`. */
  function h(node, tagName, props, children) {
    if (
      (children === undefined || children === null) &&
      typeof props === 'object' &&
      'length' in props
    ) {
      children = props
      props = {}
    }

    return augment(node, {
      type: 'element',
      tagName: tagName,
      properties: props || {},
      children: children || []
    })
  }

  function visitor(definition) {
    h.footnotes.push(definition)
  }
}

/* Transform `tree`, which is an MDAST node, to a HAST node. */
function toHAST(tree, options) {
  var h = factory(tree, options)
  var node = one(h, tree)
  var footnotes = footer(h)

  if (node && node.children && footnotes) {
    node.children = node.children.concat(u('text', '\n'), footnotes)
  }

  return node
}


/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Expose. */
module.exports = generated

/* Detect if a node was available in the original document. */
function generated(node) {
  var position = optional(optional(node).position)
  var start = optional(position.start)
  var end = optional(position.end)

  return !start.line || !start.column || !end.line || !end.column
}

/* Return `value` if it’s an object, an empty object
 * otherwise. */
function optional(value) {
  return value && typeof value === 'object' ? value : {}
}


/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(241)

module.exports = getDefinitionFactory

var own = {}.hasOwnProperty

/* Get a definition in `node` by `identifier`. */
function getDefinitionFactory(node, options) {
  return getterFactory(gather(node, options))
}

/* Gather all definitions in `node` */
function gather(node, options) {
  var cache = {}

  if (!node || !node.type) {
    throw new Error('mdast-util-definitions expected node')
  }

  visit(node, 'definition', options && options.commonmark ? commonmark : normal)

  return cache

  function commonmark(definition) {
    var id = normalise(definition.identifier)
    if (!own.call(cache, id)) {
      cache[id] = definition
    }
  }

  function normal(definition) {
    cache[normalise(definition.identifier)] = definition
  }
}

/* Factory to get a node from the given definition-cache. */
function getterFactory(cache) {
  return getter

  /* Get a node from the bound definition-cache. */
  function getter(identifier) {
    var id = identifier && normalise(identifier)
    return id && own.call(cache, id) ? cache[id] : null
  }
}

function normalise(identifier) {
  return identifier.toUpperCase()
}


/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = generateFootnotes

var thematicBreak = __webpack_require__(290)
var list = __webpack_require__(291)
var wrap = __webpack_require__(228)

/* Transform all footnote definitions, if any. */
function generateFootnotes(h) {
  var footnotes = h.footnotes
  var length = footnotes.length
  var index = -1
  var listItems = []
  var def

  if (!length) {
    return null
  }

  while (++index < length) {
    def = footnotes[index]

    listItems[index] = {
      type: 'listItem',
      data: {hProperties: {id: 'fn-' + def.identifier}},
      children: def.children.concat({
        type: 'link',
        url: '#fnref-' + def.identifier,
        data: {hProperties: {className: ['footnote-backref']}},
        children: [{type: 'text', value: '↩'}]
      }),
      position: def.position
    }
  }

  return h(
    null,
    'div',
    {className: ['footnotes']},
    wrap(
      [
        thematicBreak(h),
        list(h, {
          type: 'list',
          ordered: true,
          children: listItems
        })
      ],
      true
    )
  )
}


/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  blockquote: __webpack_require__(479),
  break: __webpack_require__(480),
  code: __webpack_require__(481),
  delete: __webpack_require__(483),
  emphasis: __webpack_require__(484),
  footnoteReference: __webpack_require__(292),
  footnote: __webpack_require__(485),
  heading: __webpack_require__(486),
  html: __webpack_require__(487),
  imageReference: __webpack_require__(488),
  image: __webpack_require__(489),
  inlineCode: __webpack_require__(490),
  linkReference: __webpack_require__(491),
  link: __webpack_require__(492),
  listItem: __webpack_require__(493),
  list: __webpack_require__(291),
  paragraph: __webpack_require__(494),
  root: __webpack_require__(495),
  strong: __webpack_require__(496),
  table: __webpack_require__(497),
  text: __webpack_require__(498),
  thematicBreak: __webpack_require__(290),
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
}

/* Return nothing for nodes which are ignored. */
function ignore() {
  return null
}


/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = blockquote

var wrap = __webpack_require__(228)
var all = __webpack_require__(220)

/* Transform a block quote. */
function blockquote(h, node) {
  return h(node, 'blockquote', wrap(all(h, node), true))
}


/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = hardBreak

var u = __webpack_require__(222)

/* Transform an inline break. */
function hardBreak(h, node) {
  return [h(node, 'br'), u('text', '\n')]
}


/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = code

var detab = __webpack_require__(482)
var u = __webpack_require__(222)

/* Transform a code block. */
function code(h, node) {
  var value = node.value ? detab(node.value + '\n') : ''
  var lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/)
  var props = {}

  if (lang) {
    props.className = ['language-' + lang]
  }

  return h(node.position, 'pre', [h(node, 'code', props, [u('text', value)])])
}


/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = detab;

var repeat = __webpack_require__(242);

var TAB = 0x09;
var LF = 0x0A;
var CR = 0x0D;

/* Replace tabs with spaces, being smart about which
 * column the tab is at and which size should be used. */
function detab(value, size) {
  var string = typeof value === 'string';
  var length = string && value.length;
  var start = 0;
  var index = -1;
  var column = -1;
  var tabSize = size || 4;
  var results = [];
  var code;
  var add;

  if (!string) {
    throw new Error('detab expected string');
  }

  while (++index < length) {
    code = value.charCodeAt(index);

    if (code === TAB) {
      add = tabSize - ((column + 1) % tabSize);
      column += add;
      results.push(value.slice(start, index) + repeat(' ', add));
      start = index + 1;
    } else if (code === LF || code === CR) {
      column = -1;
    } else {
      column++;
    }
  }

  results.push(value.slice(start));

  return results.join('');
}


/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = strikethrough

var all = __webpack_require__(220)

/* Transform deletions. */
function strikethrough(h, node) {
  return h(node, 'del', all(h, node))
}


/***/ }),
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = emphasis

var all = __webpack_require__(220)

/* Transform emphasis. */
function emphasis(h, node) {
  return h(node, 'em', all(h, node))
}


/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = footnote

var footnoteReference = __webpack_require__(292)

/* Transform an inline footnote. */
function footnote(h, node) {
  var identifiers = []
  var identifier = 1
  var footnotes = h.footnotes
  var length = footnotes.length
  var index = -1

  while (++index < length) {
    identifiers[index] = footnotes[index].identifier
  }

  while (identifiers.indexOf(String(identifier)) !== -1) {
    identifier++
  }

  identifier = String(identifier)

  footnotes.push({
    type: 'footnoteDefinition',
    identifier: identifier,
    children: [{type: 'paragraph', children: node.children}],
    position: node.position
  })

  return footnoteReference(h, {
    type: 'footnoteReference',
    identifier: identifier,
    position: node.position
  })
}


/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = heading

var all = __webpack_require__(220)

/* Transform a heading. */
function heading(h, node) {
  return h(node, 'h' + node.depth, all(h, node))
}


/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = html

var u = __webpack_require__(222)

/* Return either a `raw` node, in dangerous mode, or
 * nothing. */
function html(h, node) {
  return h.dangerous ? h.augment(node, u('raw', node.value)) : null
}


/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = imageReference

var normalize = __webpack_require__(243)
var revert = __webpack_require__(293)

/* Transform a reference to an image. */
function imageReference(h, node) {
  var def = h.definition(node.identifier)
  var props

  if (!def) {
    return revert(h, node)
  }

  props = {src: normalize(def.url || ''), alt: node.alt}

  if (def.title !== null && def.title !== undefined) {
    props.title = def.title
  }

  return h(node, 'img', props)
}


/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var normalize = __webpack_require__(243)

module.exports = image

/* Transform an image. */
function image(h, node) {
  var props = {src: normalize(node.url), alt: node.alt}

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title
  }

  return h(node, 'img', props)
}


/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = inlineCode

var collapse = __webpack_require__(285)
var u = __webpack_require__(222)

/* Transform inline code. */
function inlineCode(h, node) {
  return h(node, 'code', [u('text', collapse(node.value))])
}


/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = linkReference

var normalize = __webpack_require__(243)
var revert = __webpack_require__(293)
var all = __webpack_require__(220)

/* Transform a reference to a link. */
function linkReference(h, node) {
  var def = h.definition(node.identifier)
  var props

  if (!def) {
    return revert(h, node)
  }

  props = {href: normalize(def.url || '')}

  if (def.title !== null && def.title !== undefined) {
    props.title = def.title
  }

  return h(node, 'a', props, all(h, node))
}


/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var normalize = __webpack_require__(243)
var all = __webpack_require__(220)

module.exports = link

/* Transform a link. */
function link(h, node) {
  var props = {href: normalize(node.url)}

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title
  }

  return h(node, 'a', props, all(h, node))
}


/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = listItem

var u = __webpack_require__(222)
var wrap = __webpack_require__(228)
var all = __webpack_require__(220)

/* Transform a list-item. */
function listItem(h, node, parent) {
  var children = node.children
  var head = children[0]
  var props = {}
  var single = false
  var result
  var container

  if (
    (!parent || !parent.loose) &&
    children.length === 1 &&
    head.type === 'paragraph'
  ) {
    single = true
  }

  result = all(h, single ? head : node)

  if (typeof node.checked === 'boolean') {
    if (!single && (!head || head.type !== 'paragraph')) {
      result.unshift(h(null, 'p', []))
    }

    container = single ? result : result[0].children

    if (container.length !== 0) {
      container.unshift(u('text', ' '))
    }

    container.unshift(
      h(null, 'input', {
        type: 'checkbox',
        checked: node.checked,
        disabled: true
      })
    )

    /* According to github-markdown-css, this class hides bullet. */
    props.className = ['task-list-item']
  }

  if (!single && result.length !== 0) {
    result = wrap(result, true)
  }

  return h(node, 'li', props, result)
}


/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = paragraph

var all = __webpack_require__(220)

/* Transform a paragraph. */
function paragraph(h, node) {
  return h(node, 'p', all(h, node))
}


/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = root

var u = __webpack_require__(222)
var wrap = __webpack_require__(228)
var all = __webpack_require__(220)

/* Transform a `root`. */
function root(h, node) {
  return h.augment(node, u('root', wrap(all(h, node))))
}


/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = strong

var all = __webpack_require__(220)

/* Transform importance. */
function strong(h, node) {
  return h(node, 'strong', all(h, node))
}


/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = table

var position = __webpack_require__(288)
var wrap = __webpack_require__(228)
var all = __webpack_require__(220)

/* Transform a table. */
function table(h, node) {
  var rows = node.children
  var index = rows.length
  var align = node.align
  var alignLength = align.length
  var result = []
  var pos
  var row
  var out
  var name
  var cell

  while (index--) {
    row = rows[index].children
    name = index === 0 ? 'th' : 'td'
    pos = alignLength
    out = []

    while (pos--) {
      cell = row[pos]
      out[pos] = h(cell, name, {align: align[pos]}, cell ? all(h, cell) : [])
    }

    result[index] = h(rows[index], 'tr', wrap(out, true))
  }

  return h(
    node,
    'table',
    wrap(
      [
        h(result[0].position, 'thead', wrap([result[0]], true)),
        h(
          {
            start: position.start(result[1]),
            end: position.end(result[result.length - 1])
          },
          'tbody',
          wrap(result.slice(1), true)
        )
      ],
      true
    )
  )
}


/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = text

var u = __webpack_require__(222)
var trimLines = __webpack_require__(499)

/* Transform text. */
function text(h, node) {
  return h.augment(node, u('text', trimLines(node.value)))
}


/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = trimLines

var ws = /[ \t]*\n+[ \t]*/g
var newline = '\n'

function trimLines(value) {
  return String(value).replace(ws, newline)
}


/***/ }),
/* 500 */
/***/ (function(module, exports) {

function toJSX(node, parentNode = {}, options = {}) {
  let children = ''

  if (node.type === 'root') {
    const importNodes = []
    const exportNodes = []
    const jsxNodes = []
    let layout
    for (const childNode of node.children) {
      if (childNode.type === 'import') {
        importNodes.push(childNode)
        continue
      }

      if (childNode.type === 'export') {
        if (childNode.default) {
          layout = childNode.value.replace(/^export default /, '')
          continue
        }

        exportNodes.push(childNode)
        continue
      }

      if (childNode.type === 'jsx') {
        childNode.value = childNode.value
          .replace('<!--', '{/*')
          .replace('-->', '*/}')
      }

      jsxNodes.push(childNode)
    }

    return (
      importNodes.map(childNode => toJSX(childNode, node)).join('\n') +
      '\n' +
      exportNodes.map(childNode => toJSX(childNode, node)).join('\n') +
      '\n' +
      (options.skipExport ? '' : 'export default ({components, ...props}) => ') +
      `<MDXTag name="wrapper" ${
        layout ? `Layout={${layout}} layoutProps={props}` : ''
      } components={components}>${jsxNodes
        .map(childNode => toJSX(childNode, node))
        .join('')}</MDXTag>`
    )
  }

  // recursively walk through children
  if (node.children) {
    children = node.children.map(childNode => toJSX(childNode, node)).join('')
  }

  if (node.type === 'element') {
    let props = ''

    if (Array.isArray(node.properties.className)) {
      node.properties.className = node.properties.className.join(' ')
    }

    if (Object.keys(node.properties).length > 0) {
      props = JSON.stringify(node.properties)
    }

    return `<MDXTag name="${node.tagName}" components={components}${
      parentNode.tagName ? ` parentName="${parentNode.tagName}"` : ''
    }${props ? ` props={${props}}` : ''}>${children}</MDXTag>`
  }

  // Wraps all text nodes except new lines inside template string, so that we don't run into escaping issues.
  if (node.type === 'text') {
    return node.value === '\n'
      ? node.value
      : '{`' + node.value.replace(/`/g, '\\`').replace(/\$/g, '\\$') + '`}'
  }

  if (node.type === 'import' || node.type === 'export' || node.type === 'jsx') {
    return node.value
  }
}

function compile(options = {}) {
  this.Compiler = tree => {
    return toJSX(tree, {}, options)
  }
}

module.exports = compile
exports = compile
exports.toJSX = toJSX
exports.default = compile


/***/ }),
/* 501 */
/***/ (function(module, exports) {

const IMPORT_REGEX = /^import/
const EXPORT_REGEX = /^export/
const EXPORT_DEFAULT_REGEX = /^export default/
const BLOCKS_REGEX = '[a-z\\.]+(\\.){0,1}[a-z\\.]'
const EMPTY_NEWLINE = '\n\n'

module.exports.EMPTY_NEWLINE = EMPTY_NEWLINE
module.exports.BLOCKS_REGEX = BLOCKS_REGEX
module.exports.isImport = text => IMPORT_REGEX.test(text)
module.exports.isExport = text => EXPORT_REGEX.test(text)
module.exports.isExportDefault = text => EXPORT_DEFAULT_REGEX.test(text)


/***/ }),
/* 502 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var callbacks = [];

function addScript(src, cb) {
  if (callbacks.length === 0) {
    callbacks.push(cb);
    var s = document.createElement('script');
    s.setAttribute('src', src);
    s.onload = function () {
      return callbacks.forEach(function (cb) {
        return cb();
      });
    };
    document.body.appendChild(s);
  } else {
    callbacks.push(cb);
  }
}

var TweetEmbed = function (_React$Component) {
  _inherits(TweetEmbed, _React$Component);

  function TweetEmbed() {
    _classCallCheck(this, TweetEmbed);

    return _possibleConstructorReturn(this, (TweetEmbed.__proto__ || Object.getPrototypeOf(TweetEmbed)).apply(this, arguments));
  }

  _createClass(TweetEmbed, [{
    key: 'loadTweetForProps',
    value: function loadTweetForProps(props) {
      var _this2 = this;

      var renderTweet = function renderTweet() {
        window.twttr.ready().then(function (_ref) {
          var widgets = _ref.widgets;

          // Clear previously rendered tweet before rendering the updated tweet id
          if (_this2._div) {
            _this2._div.innerHTML = '';
          }

          var options = props.options,
              onTweetLoadSuccess = props.onTweetLoadSuccess,
              onTweetLoadError = props.onTweetLoadError;

          widgets.createTweetEmbed(_this2.props.id, _this2._div, options).then(onTweetLoadSuccess).catch(onTweetLoadError);
        });
      };

      if (!(window.twttr && window.twttr.ready)) {
        var isLocal = window.location.protocol.indexOf('file') >= 0;
        var protocol = isLocal ? this.props.protocol : '';

        addScript(protocol + '//platform.twitter.com/widgets.js', renderTweet);
      } else {
        renderTweet();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadTweetForProps(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.id !== nextProps.id || this.props.className !== nextProps.className;
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (this.props.id !== nextProps.id) {
        this.loadTweetForProps(nextProps);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
        className: this.props.className,
        ref: function ref(c) {
          _this3._div = c;
        }
      });
    }
  }]);

  return TweetEmbed;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

TweetEmbed.propTypes = {
  id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  options: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  protocol: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  onTweetLoadSuccess: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onTweetLoadError: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

TweetEmbed.defaultProps = {
  protocol: 'https:',
  options: {},
  className: null
};

/* harmony default export */ __webpack_exports__["a"] = (TweetEmbed);


/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(245)


/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "code[class*=\"language-\"]": {
        "color": "#f8f8f2",
        "background": "none",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#f8f8f2",
        "background": "#272822",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#272822",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "slategray"
    },
    "prolog": {
        "color": "slategray"
    },
    "doctype": {
        "color": "slategray"
    },
    "cdata": {
        "color": "slategray"
    },
    "punctuation": {
        "color": "#f8f8f2"
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "#f92672"
    },
    "tag": {
        "color": "#f92672"
    },
    "constant": {
        "color": "#f92672"
    },
    "symbol": {
        "color": "#f92672"
    },
    "deleted": {
        "color": "#f92672"
    },
    "boolean": {
        "color": "#ae81ff"
    },
    "number": {
        "color": "#ae81ff"
    },
    "selector": {
        "color": "#a6e22e"
    },
    "attr-name": {
        "color": "#a6e22e"
    },
    "string": {
        "color": "#a6e22e"
    },
    "char": {
        "color": "#a6e22e"
    },
    "builtin": {
        "color": "#a6e22e"
    },
    "inserted": {
        "color": "#a6e22e"
    },
    "operator": {
        "color": "#f8f8f2"
    },
    "entity": {
        "color": "#f8f8f2",
        "cursor": "help"
    },
    "url": {
        "color": "#f8f8f2"
    },
    ".language-css .token.string": {
        "color": "#f8f8f2"
    },
    ".style .token.string": {
        "color": "#f8f8f2"
    },
    "variable": {
        "color": "#f8f8f2"
    },
    "atrule": {
        "color": "#e6db74"
    },
    "attr-value": {
        "color": "#e6db74"
    },
    "function": {
        "color": "#e6db74"
    },
    "keyword": {
        "color": "#66d9ef"
    },
    "regex": {
        "color": "#fd971f"
    },
    "important": {
        "color": "#fd971f",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};

/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glsl = __webpack_require__(506);

var _glsl2 = _interopRequireDefault(_glsl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;
exports.default = _glsl2.default;

/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = glsl
glsl.displayName = 'glsl'
glsl.aliases = []
function glsl(Prism) {
  Prism.languages.glsl = Prism.languages.extend('clike', {
    comment: [/\/\*[\s\S]*?\*\//, /\/\/(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/],
    number: /(?:\b0x[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ulf]*/i,
    keyword: /\b(?:attribute|const|uniform|varying|buffer|shared|coherent|volatile|restrict|readonly|writeonly|atomic_uint|layout|centroid|flat|smooth|noperspective|patch|sample|break|continue|do|for|while|switch|case|default|if|else|subroutine|in|out|inout|float|double|int|void|bool|true|false|invariant|precise|discard|return|d?mat[234](?:x[234])?|[ibdu]?vec[234]|uint|lowp|mediump|highp|precision|[iu]?sampler[123]D|[iu]?samplerCube|sampler[12]DShadow|samplerCubeShadow|[iu]?sampler[12]DArray|sampler[12]DArrayShadow|[iu]?sampler2DRect|sampler2DRectShadow|[iu]?samplerBuffer|[iu]?sampler2DMS(?:Array)?|[iu]?samplerCubeArray|samplerCubeArrayShadow|[iu]?image[123]D|[iu]?image2DRect|[iu]?imageCube|[iu]?imageBuffer|[iu]?image[12]DArray|[iu]?imageCubeArray|[iu]?image2DMS(?:Array)?|struct|common|partition|active|asm|class|union|enum|typedef|template|this|resource|goto|inline|noinline|public|static|extern|external|interface|long|short|half|fixed|unsigned|superp|input|output|hvec[234]|fvec[234]|sampler3DRect|filter|sizeof|cast|namespace|using)\b/
  })
  Prism.languages.insertBefore('glsl', 'comment', {
    preprocessor: {
      pattern: /(^[ \t]*)#(?:(?:define|undef|if|ifdef|ifndef|else|elif|endif|error|pragma|extension|version|line)\b)?/m,
      lookbehind: true,
      alias: 'builtin'
    }
  })
}


/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/mouthpiece.9ca81c4c.png";

/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/twitter.77875fd7.svg";

/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/daro.c31afc18.jpg";

/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/paj.7bcbb600.jpg";

/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bomberman.9edc6c74.png";

/***/ }),
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/splatoon-2.32b3fe98.jpg";

/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bombersplash.28db8d75.png";

/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/warcraft-3.d555c44f.jpg";

/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/counter-strike-1.6.a13bb9a1.jpg";

/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/diablo-3.f936eb69.jpg";

/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/overwatch.6da1ad26.jpg";

/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/webrtc.db25c0d8.svg";

/***/ }),
/* 519 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/jam-results.9be64a16.png";

/***/ }),
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/tiles.546cef49.png";

/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/map-grid.7d939122.png";

/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/map-bg.fae18f26.png";

/***/ }),
/* 524 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 525 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDi/gdz0I+3cvQcTQAAAABJRU5ErkJggg=="

/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/map.54c625e4.png";

/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bomb.641c360e.png";

/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/jam-splash.c9479c5b.png";

/***/ }),
/* 529 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZkAAAEFCAYAAAAxAZr2AAAL8npUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja3Zhblhu5EUT/sQovAcjEczl4JM7xDrx83yxSLXWPPGek8Y9NSk12sVgFZERGRHawf/3zhn/wUG0x5NJ6HbVGHnnkIZM3Pb4er9cU8/PzeYzxfpc+Hw+xvN8Kr8qrvj6o9npNk+Pl+xdafh9fn4+Htl9vpL8v9P6ACz8P9Tv7+/d5/X0hldfx9P49jPf3Zv5hO+//sj+28br2l99zoxincD2VIKZJIz+r30VZgXadfoyfoiJ+RJ8jg5++wp/WLny8/VK8qR9b/FS7ON9n6OdShFjfJ9QvNXofT+XL8W8X9Ar9uKIUP1D79AFFfJf3j7W79/R77bW7mSuVquG9qW8lfN5x4qKU+nyt8mz8L7xvz3Pw7Gxxc7PD7RbPHdJIQmVvyumkmW6y53WnzRKzmDReRbboc6xrkyH7ASX7M11pwHACGIluUFMOy8da0nPf8dxvp86dT+JMSVwsOZpfn+FnB3/n+XGhe722KXkxpz614qc4p1mGI+c/OQtA0n3XtDz1fZ7hA9bvDwdWQbA8Ze5scMb1usQq6Tu39MFZOa/EHOKrNVI77wtQIu5dWExSEIg1aUk1xSbSUqKOHXwmKxfNskAglSInhQs2qhVwuvi9+U5Lz7lS5HUYaQGIolUb0NAogJVzgT8tdzg0i5YcSim1tNLLKLNqzbXUWlt1jZpNW26l1dZab6PNrj330mtvvffR55ChSFgZdbQw+hhjTm46ufTk25Mz5lyydOVVVl1t9TXW3NBn51123W33PfY8cvTQ/qeeFk4/40xLBpUsW7FqzboNmxeuXb35lltvu/2OOz9Qe6P6GbX0Bbk/Ry29UXPE8nNe+44ah1v7donkclIcMxCTnEC8OQIQWhyz2FPO4sg5ZnEITVEE1FJxcE5yxEAwW5Jy0wd235H7U9xCyb+Em/wn5IJD999ALjh0b+T+iNtPUDvzcZRXN3oXek2jXoSNE6xP6dM96bdfw9+9wP/whU5e6SjkGwdel2VwIcmZbahBGdE6ju2cwr6pZEPpy+JL9cxzNmIte/a+S5tGh2ifEA1KGAdkzdVuVM47UKvCDd2aAiqWd9V8V9EBFYFz37iQrWHLNgzarRfNTWfZWpvG0VnkgiPD5Iw1Bp3ST9i5yTI0Jc+F2kWbuySri9w0Y78xW1/rLFVje62f1Vve1/TKKfCQMIN75WSh2WhknplbYomsWqXts5vuWAoMLDMRxZS2lXkS9VFuQQVy62JHmtdv3JLCmKYbYtNv1GRphP3VHbY1ucdsXeqjY0L+gpbUrYeu0lQsr+WpZoj02iRs1cHN7exCB7mR26a2ms8ZaYwiecR84kS2V9Ip27021eKSxUJslTksDZwWi6adFmivfo5DWtn4boJK4PRCkQtt2YqwAxmbmNldMqg3aCJskqviIpndZ7vz9LlsVRkn5QIjNM6HTfEvvoY/P+HAipOGtFU6XECFQDrPllPTOu9arR33OO0hIwkLqD3Z5bGHnE15+mg7nXqlbJtEFajpeUXSrnKsklKG3nhgQKI+C2aGaZvtH5Ujt0I/KrcAcPrbUpwvQLENY82JMzeR007ZqFWC9Guvkjs9IqHeVZM5daR3jtvoNs923vIsZ7MxbgqDVt2Dy1mhaTKR1eKNbdAH87R0QuXaE3NvWnDM561ajXcNmJI1rdyJXTPh52VfgDJXZMpnFd7IWM6i5VvD4iN3RfU3xNmIP8hlMj0Aw6hrZ21dUcrk836lauF7sxLhDIbQVJVN92D0hm950YLYjtHdDep1tNnbvOnye3PrRnXYE71z6RszYakwXir1zOcGNiuTy+B9ztThIUWAuuU8Zl71kB/H1HWZZhQPWYfun7Hme+iXicxwmXpzMOwLnmvF6GjGbO3CT7rizpyXQnvaqRzDbU7C1dZgUdj3xKA4N9GqsvCjgCggfhxXdxpapCzu0xAFVAXsO6DbBWMMN1e7m0oYhumdezqoDohCzQN73DQdIRjOJGdepqPW0NYqK8bo4OcZlN47ZyEDz7sc4+fX8PXAX3ilDS6FQAPTLOzDbqXXWO+qF/1de59rK2UCB3fdPuGN21gQ3ESyD5S/ybV+ltqpGdtL5aBCo+8ew5aJCCFklDG55BZQ4CpMVnNQz95qyaC9bRdIn4dh4riGHMyC22cacbhlnyPkF+fsgbUEKRZAQb9tpH8408wXA9oT92kEhEHH4VMjtbYiNQ/oAZU3n0SHuje5+Ovo1Ywss+9m40zEWk29pVQR/mKoORDkC8WJJqjrDmcRWzYLjysjKV3Whpjz5o480H1wc6x8FovUvD1K+7hCtFMMoNLdR3dt4wbYzlBTOr1926F6mYUgHP4UqDquSHbLWR0BltuiUoBD7sIEWz7MUmNfl1rYAQK5/zILPr+GH+mhpLW1gJl5Any38eDgvXiLt+YlwBltTJi9jCAXkQCZ0+apHV8bbh+M4oXfQQUFwTlxSfYCBeCI5VJZ9syU3EWEdgZfvUx2Rypum9ceYSV4tkmhA1Q99F1gROWEKHDcUAW1FPCZZMSIrqAsIy0e72L0/GqR4nMwb5BDsY09T+wL3nTau6GDm8Ep3obqt8pCGgaKbXX1KGIkWxrg8r0RUAf4xO7I46mCi5IT6HtS7c1Uazk9oA+RKBNhSTDkE1q7I1LCh7MhGdhrsNQ2++9+h9mxS2hXJ55DLQqRgwmCjO0bR8NouZqQuDxpIg8txSe263sMVBFKxL8JfuRCH+CzXLQ8d3YEzlgjgnA04VeEju6tDOVGjszq5sEnzwtf6GpmdLthNlg+cQjGkUgdlBG9M65gbHDY6EADsp0m2Smze+YRnSS2jSATzxGhsZhPakCpV6OPOUsMxUVcUl4URG2gN4l08rQnTbeoYanLiyHMKCWKxV18ddwsOEIkRdIcQWyhIHvaaVKfKOF/pfCtvziiJiVe4bAx2HATAgQpEkuhI4MqRsxYBp7uesx60z2o+XpyIWieTk+SFRodYsPHv8ouSBux+eRZCBu7MUG6HNA5+yWpdWKEdzIgEa6Ibn3irWQU4gTRZWNVsAvTwWbbnc5QjdU1c4RdHR4UEb/DSCuSY3hmpDmxHf+TIKZ1dq8bL5PDuEQKILgCxyUHkJDiRf5XIIZmhBA7eqqyZvZc8uuTRPjpB6R52iN1u0mIDRj6kYJeZmIlfkgWY1WdnI/N73VZ+gr0A1srbkiDFsIiE82bV89XjECSqSVF3u4dgiYNYmwEFiSoHIqOJKElKz56VIvDNlIipOLXsMTnmAblEE+g1kJTZ5IvPVzuSngbZTyyl1A3VGGl638+HFha6xS6ojErYn7sg/FUwMWLjXiQQZkkOikNJCguUwADKo3ERvbjH0Hiqlw9k/EJJMljhIdDyz76krxghCBo5jN15tLQhdmdoUQRglk4TCEOBmmHJZC0ZEat6JIRo+D1RoqoLaKZIEnDKRBc3AWzJ3SU5R+bep/hkAiohjG8UwWlz9j2jJ5ZaTX2tBQlIPdTamIdY3sfKDZTHCZfGYMSMwB0S3Cr7BX8D6koJM1OmmlVG07MCDI60zcgDu9d5q1ODt44HIFneqrFePkXuXm7oITTciJ2wpKnpxSkWA8ui3VTwe1kwSgB7NIgeC09ihcsGO1RlaGzMRFMzKAEICMDehWYFqAkhSAjRGZYVtNLbD1lRjIaZ0fzkGaegH24WqZ8l70xyh4NpCIlt1bSMjsyCIOykeuYM5AUzzLDpyd6lviy4VGtNpuJARn+jhawCOANm04YPgGjBywj+gqHD53qYopSsU3nyuuvR8SH5h1LvuSFdGkLg6rUKzAj3EHDD4JKipPVUkm3CXwK8/W4UMU6scPndaogxD4wVJi8SajIV69VWoALw5fUDjePDCNkMldz/yOND5rq4x/BNzaCo+uGyzt3YUcrIv6MOYjwrQHazc7M5MHNYlRvTzvHVRcsCWmHARSBPFDZV8jsQQ8d4juTBjG+QTUj2gfSPdMAQfhkknttrwFypfmLOSf8ticmQQ4R5M2qGNMCfg6pU6cLqcJimn61Sfowj7/2GvIvfuH/70Lt3jPCvwFxJK3HpDr54QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+IKFgsTAisuz5QAAAXLSURBVHja7d3BTRwxFAZgEqWKnLI10AIlUAL3HKmBI/eUkBK2ha0hOaUNckmQo/DgGc+M7ZnvO63Q7LJ4JJ7er2fP1RUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwsQ+WABjZ3ePt09/X375+9z9rMh8tAQCKDADT0XpCByIg66OTAQBFBoBRaUM5hKXil5bPKd9b6+evH8+vv3w+Vb137e+5VJwlItPJAIAiA8AYPlkCaJeJmMrIq0Xmc8pILfpuZSRVXpP5/PPDRZyFTgYARQaAnRKXwTvd3F9XRUxbir5P7WRa/N7Lm9ebFkMnA4AiA8CcxGUcQjRJlbn+yMqILLOG5TW1a2jNdTIAoMgAMAZxGYeT2YS418moaOos+nn0t7ecpYZOBgAUGQDGZpqDQ4imoWo3UZZndtWe9zWLaKKs3HzacnaZ6T6dDAAoMgCMTUvK4bTEXNEk1V7jstJSTxTNnKsmLtPJAIAiA0A/WlIOrZyY4nWZibKWKT5P29TJAIAiA8AYtKdMY43zxPa6oXINmTPKWibHPElTJwMAigwAY3DUP9OIjuivfWIj75OJE+NY7HL10j0SUepkAECRAWA8IgSGlpk4qj0Xq7zmCEf3r6F2WqyUuUclUadOBgAUGQC2ZbqM6WWiregaEVm7zBrW3qPMxk90MgAoMgCwDlMbTKPlGHnm4imZOhkAUGQA6EcbypRMhc0rMzkmItPJAIAiA0A/NmMyjWi6jHmJxXQyAKDIADAerSrTMFG2PybNdDIAoMgAMB7TZUA3tU/JRCcDAIoMAOsTlzGlTJxiAm38exdPjl2eX5VThSbNdDIAoMgAsD5xGdPIRCVltBJFamK0bUSx2N3j6emte4dOBgAUGQD6ManBbjnrbBy1mytNkelkAECRAaAf02UMLTNxJFoZXxRXnh8u7p1OBgAUGQAGo1VlaJkJMeeYzSu6dyJQnQwAKDIA9KMlZWgt51mJyOYlRtPJAIAiA0A/Wk92y9ll+5B7kiY6GQAUGQBYirPLGJrpMtDJAIAiA8C2xGVMQ/wFOhkAUGQAWJ+4DFhddBZZ7omZFwuokwEARQaADTkHiGk4i2wumTPHonvqvDKdDAAoMgD0Y7oMWEUZf5WxWBl/iT11MgCgyAAwHnEZ0E256fLm/vrJiuhkAECRAaA/cRmwusykmQ2YOhkAUGQAGIOWlKFlzrayoW9eIjKdDAAoMgCMx3QZQ4uPiD89x2iiM9DJAKDIAMByxGVMqYzRygm0WmXUFhHBgU4GAEUGgCMRl3E4mQ2ALRHcEdat1BInZmJPmzR1MgCgyACwLXEZU4qOi4+erpiZIovOSeN/UcwVnS9XKq8p75dYTCcDAIoMAGMQlzGN2mildoosE7uRl1nzzBMz0ckAgCIDwLbEZUzj/HBZNSKLPqeUmari9XUWS+pkAECRAWBsJjiYXstUUhTXRNFcJiLb65M6a6PIaGNmS4yJTgYAFBkA1qclZUpbRiu1EVCvqbMoplsjvmv52zPRGToZAFBkAOjHZkz4I3oy4xoRUyTzuzLxVzkdd/d4WnzDY+bMsXJyL/rO0XtNmulkAECRAaAfcRm8oHbDYGaqqvz5v3HW7YuxUiY+qp1ka5k0y8R9S/0u0ZlOBgAUGQD60XpyaEtFMdFkWiQTeWUebZCJy6JorkX0/WuvyXw+OhkAUGQA2JaWlMMZYVopEx/VTpdlPme0dRj5HqGTAUCRAeCotKGAeAqdDACKDAAoMgAoMgAoMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADP6DVRsrSZV0BtoAAAAAElFTkSuQmCC"

/***/ }),
/* 530 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 531 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/caniuse-wasm.9030f9a8.png";

/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/rust.f1d3c008.svg";

/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bombersplash.8a7ea2d7.mp4";

/***/ })
]));
//# sourceMappingURL=2.398e0a00.chunk.js.map