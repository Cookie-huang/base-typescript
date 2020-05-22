"use strict";
/* 类型兼容性 */
var typeCompatibility;
(function (typeCompatibility) {
    /* X 兼容 Y ：  X （目标类型） = Y （源类型） */
    /*
      结构之间兼容：成员少的兼容成员多的
      函数之间兼容：参数多的兼容参数少的
    */
    /* ===================================分割线=================================== */
    var str = "xxxx";
    var x = { a: 1 };
    var y = { a: 1, b: 2 };
    function hof(handler) {
        return handler;
    }
    // 参数是可忽略的， 小于等于
    //   let handler1 = () => {};
    //   hof(handler1); //  Right
    //   let handler2 = (a: number) => {};
    //   hof(handler2); //  Right
    //   let handler3 = (a: number, b: number) => {};
    //   hof(handler3); //  Right
    //   let handler4 = (a: number, b: number, c: number) => {};
    //   hof(handler4); //  Error
    /*  可选参数 和 剩余参数 兼容性 */
    var fn1 = function (a, b) { };
    var fn2 = function (a, b) { };
    var fn3 = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    //   fn1 = fn2; //  Right 固定参数兼容可选参数
    //   fn1 = fn3; //  Right 固定参数兼容剩余参数
    //   fn2 = fn1; //  Error 可选不兼容固定      strictFunctionTypes : false 下是right
    //   fn2 = fn3; //  Error 可选不兼容剩余参数  strictFunctionTypes : false 下是right
    //   fn3 = fn1; //  Right 剩余兼容固定参数
    //   fn3 = fn2; //  Right 剩余兼容可选参数
    //  2.参数类型
    var handler5 = function (a) { };
    // hof(handler5); //  Error
    //  3.返回值类型
    var f = function () { return ({ name: "cooky" }); };
    var g = function () { return ({ name: "cooky", age: 20 }); };
    // f = g; //  Right  g > f
    // g = f; //  Error
    /* ===================================分割线=================================== */
    /* 枚举兼容性 */
    // 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的。
    /* ===================================分割线=================================== */
    /* 类兼容性 */
    /*
      类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型。
      比较两个类类型的对象时，只有实例的成员会被比较。 静态成员和构造函数不在比较的范围内。
    */
    /*
      类的私有成员和受保护成员会影响兼容性。 当检查类实例的兼容时，如果目标类型包含一个私有成员，那么源类型必须包含来自同一个类的这个私有成员。 同样地，这条规则也适用于包含受保护成员实例的类型检查。 这允许子类赋值给父类，但是不能赋值给其它有同样类型的类。
    */
    var Animal = /** @class */ (function () {
        function Animal(name, numFeet) {
        }
        return Animal;
    }());
    var Size = /** @class */ (function () {
        function Size(numFeet) {
        }
        return Size;
    }());
    var a;
    var s;
    var e1;
    var e2;
    var n1;
    var n2;
    // n1 = n2; // Error
})(typeCompatibility || (typeCompatibility = {}));
