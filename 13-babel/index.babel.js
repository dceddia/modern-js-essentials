'use strict';

var _ = _interopRequireWildcard(require('lodash'));

var _moment = _interopRequireDefault(require('moment'));

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
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

function plainFn() {
  console.log('test');
}

var arrowFn = function arrowFn() {
  return true;
};

var nums = [1, 2, 3];
var a = nums[0];
var user = {
  id: 1,
  firstName: 'Dave',
  lastName: 'Ceddia'
};
var copy = {
  ...user,
  fullName: ''.concat(user.firstName, ' ').concat(user.lastName)
};
