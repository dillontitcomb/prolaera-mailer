'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactHtmlEmail = require('react-html-email');

var _complianceReport = require('./complianceReport');

var _complianceReport2 = _interopRequireDefault(_complianceReport);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, enumerable: false, writable: true, configurable: true }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass);
}

var ComplianceReports = (function(_React$Component) {
  _inherits(ComplianceReports, _React$Component);

  function ComplianceReports() {
    _classCallCheck(this, ComplianceReports);

    return _possibleConstructorReturn(
      this,
      (ComplianceReports.__proto__ || Object.getPrototypeOf(ComplianceReports)).apply(this, arguments)
    );
  }

  _createClass(ComplianceReports, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          flatComplianceDict = _props.flatComplianceDict,
          complianceDict = _props.complianceDict,
          regulatorsDict = _props.regulatorsDict;

        return React.createElement(
          _reactHtmlEmail.Box,
          { width: '100%', height: '100%', style: { backgroundColor: '#F7F7F7' } },
          React.createElement(
            _reactHtmlEmail.Item,
            null,
            React.createElement(
              _reactHtmlEmail.Box,
              { cellSpacing: 20, align: 'center' },
              Object.keys(complianceDict).map(function(key, index) {
                return React.createElement(_complianceReport2.default, {
                  key: index,
                  flatCompliance: flatComplianceDict[key][0],
                  compliance: complianceDict[key],
                  regulator: regulatorsDict[key],
                  index: index
                });
              })
            )
          )
        );
      }
    }
  ]);

  return ComplianceReports;
})(React.Component);

exports.default = ComplianceReports;