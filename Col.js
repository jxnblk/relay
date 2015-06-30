'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _defaults = require('./defaults');

var Col = (function (_React$Component) {
  function Col() {
    _classCallCheck(this, Col);

    _get(Object.getPrototypeOf(Col.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(Col, _React$Component);

  _createClass(Col, [{
    key: 'render',
    value: function render() {
      var style = {
        float: this.props.right ? 'right' : 'left',
        boxSizing: 'border-box',
        width: this.props.width * 100 / 12 + '%',
        paddingLeft: _defaults.space[2],
        paddingRight: _defaults.space[2]
      };

      return _react2['default'].createElement(
        'div',
        { style: style },
        this.props.children
      );
    }
  }]);

  return Col;
})(_react2['default'].Component);

Col.propTypes = {
  right: _react2['default'].PropTypes.bool,
  width: _react2['default'].PropTypes.number
};

exports['default'] = Col;
module.exports = exports['default'];