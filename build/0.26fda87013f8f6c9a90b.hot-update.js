webpackHotUpdate(0,{

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
			value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var WaitListPatron = function (_Component) {
			_inherits(WaitListPatron, _Component);

			function WaitListPatron() {
					_classCallCheck(this, WaitListPatron);

					return _possibleConstructorReturn(this, (WaitListPatron.__proto__ || Object.getPrototypeOf(WaitListPatron)).apply(this, arguments));
			}

			_createClass(WaitListPatron, [{
					key: "render",
					value: function render() {
							var _props = this.props,
							    patron = _props.patron,
							    cell = _props.cell;


							return _react2.default.createElement(
									"tr",
									null,
									_react2.default.createElement(
											"td",
											null,
											" ",
											patron,
											" "
									),
									_react2.default.createElement(
											"td",
											null,
											" ",
											cell,
											" "
									),
									_react2.default.createElement(
											"button",
											{ onClick: this.props.deletePatron.bind(this, this.props.patron) },
											" Delete "
									),
									_react2.default.createElement(
											"button",
											{ onClick: "" },
											" Notify "
									)
							);
					}

					//need to add function to handle Notify. Should use cell number of patron to text that their table is ready.
					/*renderAction() {
	    	return ( 
	    		<div>
	    		<td>
	    				<button onClick = {this.props.deletePatron.bind(this, this.props.patron)}> Delete </button>
	    		</td>
	    		
	    		<td>
	    				<button onClick = ""> Notify </button>  
	    		</td>
	    		</div>
	    	);
	    }*/

					/*render() {
	       return (
	         <tr>
	           {this.renderList()}
	           {this.renderAction()}
	         </tr>
	       );
	     }*/

			}]);

			return WaitListPatron;
	}(_react.Component);

	exports.default = WaitListPatron;

/***/ }

})