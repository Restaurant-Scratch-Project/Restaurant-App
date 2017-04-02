webpackHotUpdate(0,{

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isomorphicFetch = __webpack_require__(234);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _reactRouter = __webpack_require__(32);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _WaitList = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Transfers/components/WaitList\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _WaitList2 = _interopRequireDefault(_WaitList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TablePage = function (_React$Component) {
	    _inherits(TablePage, _React$Component);

	    function TablePage(props) {
	        _classCallCheck(this, TablePage);

	        return _possibleConstructorReturn(this, (TablePage.__proto__ || Object.getPrototypeOf(TablePage)).call(this, props));
	    }

	    _createClass(TablePage, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_WaitList2.default, null)
	            );
	        }
	    }]);

	    return TablePage;
	}(_react2.default.Component);

	exports.default = TablePage;

/***/ }

})