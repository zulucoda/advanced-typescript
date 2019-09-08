/**
 * class decorators
 * This is a class decorator because it takes single a parameter which is a Function
 * @param target
 */

export function sealed(name: string) {
    return function(target: Function): void {
        console.log(`Sealing the constructor: ${name}`);
        Object.seal(target);
        Object.seal(target.prototype);
    }
}

