'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".input-range {\n  display: block;\n  cursor: pointer;\n  width: 100%;\n  appearance: none;\n  z-index: 200;\n  border: 1px solid #e6e6e6;\n  background-color: #e6e6e6;\n  margin: 0;\n  padding: 0;\n}\n\n.input-range:focus{\n  border: 0 !important;\n  outline: none !important;\n}\n\n.input-range::disabled {\n  opacity: 0.9;\n}\n\n.input-range::-moz-range-thumb {\n  appearance: none;\n  width: 10px;\n  height: 10px;\n  background-color: #555;\n}\n\n.input-range::-ms-thumb {\n  appearance: none;\n  width: 10px;\n  height: 10px;\n  background-color: #555;\n}\n\n.input-range::-webkit-slider-thumb {\n  appearance: none;\n  width: 10px;\n  height: 10px;\n  background-color: #555;\n}\n\n.horizontal-lowest-first {\n  transform:rotate(0deg);\n}\n\n.input-range_vertical {\n  transform:rotate(90deg);\n}\n";
styleInject(css_248z);

var Range = function (_a) {
    var value = _a.value, _b = _a.min, min = _b === void 0 ? 0 : _b, _c = _a.max, max = _c === void 0 ? 100 : _c, step = _a.step, onChange = _a.onChange, _d = _a.vertical, vertical = _d === void 0 ? false : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e;
    var rangeRef = React.useRef(null);
    var onChangeHandler = function (event) {
        var inputValue = Number(event.target.value);
        onChange(inputValue);
    };
    return (React__default['default'].createElement("div", { className: "input-range-container" },
        React__default['default'].createElement("input", { ref: rangeRef, className: "input-range input-range_" + (vertical ? 'vertical' : 'horizontal'), type: "range", value: value, min: min, max: max, step: step, onChange: onChangeHandler, disabled: disabled })));
};

exports.Range = Range;
//# sourceMappingURL=index.js.map
