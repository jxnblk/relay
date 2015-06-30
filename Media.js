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

var Media = (function (_React$Component) {
  function Media() {
    _classCallCheck(this, Media);

    _get(Object.getPrototypeOf(Media.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(Media, _React$Component);

  _createClass(Media, [{
    key: 'render',
    value: function render() {
      var style = {
        marginTop: _defaults.space[2],
        marginBottom: _defaults.space[2]
      };
      return _react2['default'].createElement(
        'div',
        { style: style },
        this.props.children
      );
    }
  }]);

  return Media;
})(_react2['default'].Component);

var Img = (function (_React$Component2) {
  function Img() {
    _classCallCheck(this, Img);

    _get(Object.getPrototypeOf(Img.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(Img, _React$Component2);

  _createClass(Img, [{
    key: 'render',
    value: function render() {
      var style = {
        display: 'table-cell',
        paddingLeft: this.props.right ? _defaults.space[2] : null,
        paddingRight: this.props.right ? null : _defaults.space[2]
      };
      if (this.props.middle) {
        style.verticalAlign = 'middle';
      } else if (this.props.bottom) {
        style.verticalAlign = 'bottom';
      } else {
        style.verticalAlign = 'top';
      }

      return _react2['default'].createElement(
        'div',
        { style: style },
        this.props.children
      );
    }
  }]);

  return Img;
})(_react2['default'].Component);

Img.propTypes = {
  right: _react2['default'].PropTypes.bool,
  middle: _react2['default'].PropTypes.bool,
  bottom: _react2['default'].PropTypes.bool
};

var Body = (function (_React$Component3) {
  function Body() {
    _classCallCheck(this, Body);

    _get(Object.getPrototypeOf(Body.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(Body, _React$Component3);

  _createClass(Body, [{
    key: 'render',
    value: function render() {
      var style = {
        display: 'table-cell',
        width: 99999
      };
      if (this.props.middle) {
        style.verticalAlign = 'middle';
      } else if (this.props.bottom) {
        style.verticalAlign = 'bottom';
      } else {
        style.verticalAlign = 'top';
      }

      return _react2['default'].createElement(
        'div',
        { style: style },
        this.props.children
      );
    }
  }]);

  return Body;
})(_react2['default'].Component);

Body.propTypes = {
  right: _react2['default'].PropTypes.bool,
  middle: _react2['default'].PropTypes.bool,
  bottom: _react2['default'].PropTypes.bool
};

Media.Img = Img;
Media.Body = Body;

exports['default'] = Media;
module.exports = exports['default'];
// Bootstrap has overflow hidden - look into this
//overflow: 'hidden'