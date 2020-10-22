export const isObject = val => Object.prototype.toString.call(val) === '[object Object]';

export const isBoolean = val => 'boolean' === typeof val;