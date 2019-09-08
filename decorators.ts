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

/**
 * Logger Decorator
 * @param target
 */
export function logger<TFunction extends Function>(target: TFunction): TFunction {
    const newConstructor: Function = function () {
        console.log(`Creating new instance.`);
        console.log(target);
    };

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return <TFunction>newConstructor;
}

/**
 * writeable methods decorator
 * @param isWriteable
 */
export function writeable(isWriteable: boolean) {
    return function (target: Object,
                    propertyKey: string,
                    descriptor: PropertyDescriptor) {
        const settingTo = isWriteable ? '' : 'to be read-only.';
        console.log(`Setting ${propertyKey} ${settingTo}`);
        descriptor.writable = isWriteable;
    }
}