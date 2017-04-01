webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(32);

	var _reactDom = __webpack_require__(87);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _App = __webpack_require__(233);

	var _App2 = _interopRequireDefault(_App);

	var _Guest = __webpack_require__(236);

	var _Guest2 = _interopRequireDefault(_Guest);

	var _homeLayout = __webpack_require__(238);

	var _homeLayout2 = _interopRequireDefault(_homeLayout);

	var _restLogin = __webpack_require__(239);

	var _restLogin2 = _interopRequireDefault(_restLogin);

	var _WaitPage = __webpack_require__(242);

	var _WaitPage2 = _interopRequireDefault(_WaitPage);

	var _GuestOptions = __webpack_require__(243);

	var _GuestOptions2 = _interopRequireDefault(_GuestOptions);

	var _TablePage = __webpack_require__(246);

	var _TablePage2 = _interopRequireDefault(_TablePage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = document.getElementById('root');
	// var hashHistory = ReactRouter.hashHistory;
	_reactDom2.default.render(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.hashHistory },
	  _react2.default.createElement(_reactRouter.Route, { path: "/", component: _App2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: "/home", name: "home", component: _homeLayout2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: "/restaurants", name: "restaurants", component: _restLogin2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: "/guestWait", name: "guestWait", component: _WaitPage2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: "/guestOptions", name: "guestOptions", component: _GuestOptions2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: "/waitList", name: "waitList", component: _TablePage2.default })
	), app);

/***/ }
])