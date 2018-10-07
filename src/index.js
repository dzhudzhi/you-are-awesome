// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return propertyName;
};
const createNotEnumerableProperty = (propertyName) => {
    return Symbol(propertyName);
};
const createProtoMagicObject = () => {
    const fun = () => {};
    fun.prototype = fun.__proto__;
    return fun;
};
let counter = 0;
const incrementor = () => {
    counter++;
    const fun = () => {
        counter++;
        return fun;
    }
    fun.toString = () => {
        return counter;
    }
    return fun;
};
let asyncCounter = 0;
const asyncIncrementor = () => {
    return new Promise(resolve => {
        resolve(++asyncCounter);
    });
}
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;