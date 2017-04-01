webpackHotUpdate(0,{

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(87);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Restaurant2 = function (_React$Component) {
	    _inherits(Restaurant2, _React$Component);

	    function Restaurant2(props) {
	        _classCallCheck(this, Restaurant2);

	        return _possibleConstructorReturn(this, (Restaurant2.__proto__ || Object.getPrototypeOf(Restaurant2)).call(this, props));
	    }

	    _createClass(Restaurant2, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'form',
	                    { onSubmit: '' },
	                    _react2.default.createElement(
	                        'button',
	                        null,
	                        _react2.default.createElement(
	                            'a',
	                            { href: '#guestWait' },
	                            'Restaurant 2'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Restaurant2;
	}(_react2.default.Component);

	exports.default = Restaurant2;

/***/ }

})