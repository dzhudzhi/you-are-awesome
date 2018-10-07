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
const incrSet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const createIncrementer = () => {
    return incrSet.values();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(param);
          }, 1000);
    });
};
let deepPropertiesCounter = 0;
func = (obj) => {
    Object.values(obj).forEach(x => {
        deepPropertiesCounter++;
        func(x);
    });
} 
const getDeepPropertiesCount = (obj) => {
    deepPropertiesCounter = 0;
    func(obj);
    return deepPropertiesCounter;
};
const createSerializedObject = () => {
    return null;
};
const toBuffer = () => {};
const sortByProto = (arr) => {
    const countProtos = (x) => {
        let count = 0;
        while (x.__proto__ != null) {
            count++;
            x = x.__proto__;
        }
        return count;
    }
    return arr.sort((a,b) => {
        return countProtos(a) - countProtos(b);
    })
};

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