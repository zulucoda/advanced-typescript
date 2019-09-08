"use strict";
/**
 * class decorators
 * This is a class decorator because it takes single a parameter which is a Function
 * @param target
 */
Object.defineProperty(exports, "__esModule", { value: true });
function sealed(name) {
    return function (target) {
        console.log("Sealing the constructor: " + name);
        Object.seal(target);
        Object.seal(target.prototype);
    };
}
exports.sealed = sealed;
/**
 * Logger Decorator
 * @param target
 */
function logger(target) {
    var newConstructor = function () {
        console.log("Creating new instance.");
        console.log(target);
    };
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return newConstructor;
}
exports.logger = logger;
/**
 * writeable methods decorator
 * @param isWriteable
 */
function writeable(isWriteable) {
    return function (target, propertyKey, descriptor) {
        var settingTo = isWriteable ? '' : 'to be read-only.';
        console.log("Setting " + propertyKey + " " + settingTo);
        descriptor.writable = isWriteable;
    };
}
exports.writeable = writeable;
//# sourceMappingURL=decorators.js.map