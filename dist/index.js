"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const greeting = () => {
  const userName = _readlineSync.default.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
};

var _default = greeting;
exports.default = _default;