webpackHotUpdate(0,{

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _addList = __webpack_require__(248);

	var _addList2 = _interopRequireDefault(_addList);

	var _listOfNames = __webpack_require__(249);

	var _listOfNames2 = _interopRequireDefault(_listOfNames);

	var _lodash = __webpack_require__(251);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _axios = __webpack_require__(253);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var waitlist = [{
		patron: 'Jennifer Simpson',
		cell: '456-4545'
	}, {
		patron: 'Jason Rodgers',
		cell: '753-9543'
	}];

	var config = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	};

	var WaitList = function (_Component) {
		_inherits(WaitList, _Component);

		function WaitList(props) {
			_classCallCheck(this, WaitList);

			var _this = _possibleConstructorReturn(this, (WaitList.__proto__ || Object.getPrototypeOf(WaitList)).call(this, props));

			_this.state = {
				waitlist: waitlist
			};
			return _this;
		}

		//add getInitialState of list of customers signed up from database.

		_createClass(WaitList, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						'h1',
						null,
						'Add Your Name to Our Waitlist'
					),
					_react2.default.createElement(_addList2.default, { waitlist: this.state.waitlist, addToList: this.addToList.bind(this) }),
					_react2.default.createElement(_listOfNames2.default, { waitlist: this.state.waitlist, deletePatron: this.deletePatron.bind(this) })
				);
			}
		}, {
			key: 'addToList',
			value: function addToList(patron, cell) {
				console.log('this the patron', patron);
				this.state.waitlist.push({
					patron: patron,
					cell: cell
				});
				this.setState({ waitlist: this.state.waitlist });

				var newRequest = new XMLHttpRequest();
				newRequest.open('Post', '/users');
				newRequest.onload = function () {
					console.log(newRequest.responseText);
					// console.log(JSON.parse(newRequest.responseText));
				};
				newRequest.send(JSON.stringify({ name: patron,
					cell: cell }));
				// fetch('/users',{
				// 	method: 'Post',
				// 	headers: new Headers({
				// 		'Content-Type': 'application/JSON'
				// 	}),
				// 	body: JSON.stringify({
				// 		name: patron,
				// 		cell: cell
				// 	})
				// }).then(res => {
				// 	  return res.json();
				// }).then((data) => {
				// 	console.log(data);	
				// }).catch((err) => {
				// 	console.log('testing', err);
				// })
			}
		}, {
			key: 'deletePatron',
			value: function deletePatron(patronToDelete) {
				_lodash2.default.remove(this.state.waitlist, function (waitlist) {
					return waitlist.patron === patronToDelete;
				});
				this.setState({ waitlist: this.state.waitlist });

				// 	Axios.get('/removeOne', {
				//     name: this.state.waitlist.patron,
				//     cell: this.state.waitlist.cell
				//   }).then(res => {
				//     console.log(res);
				//   })
			}
		}]);

		return WaitList;
	}(_react.Component);

	exports.default = WaitList;

/***/ }

})