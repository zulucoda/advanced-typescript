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
//# sourceMappingURL=decorators.js.map