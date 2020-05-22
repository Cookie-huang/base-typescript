"use strict";
var functions;
(function (functions) {
    /* 定义 */
    // 函数声明
    function fn1() {
        return 1;
    }
    // 函数表达式 ，匿名函数
    var fn2 = function () {
        // xxx
    };
    //  箭头函数
    var fn3 = function () { };
    /* ===================================分割线=================================== */
    /* 可选参数 (必须配置到 必选参数 后面) */
    function add1(a, b) {
        return b ? a + b : a;
    }
    // console.log(add1(1));  //  1
    // console.log(add1(1, 2)); // 3
    /* ===================================分割线=================================== */
    /* 默认参数 */
    function add2(a, b, c) {
        if (b === void 0) { b = 100; }
        return a + b + c;
    }
    // console.log(add2(1, undefined, 2)); //  103
    // console.log(add2(1, 2, 3)); //  6
    /* ===================================分割线=================================== */
    /* 剩余参数 （数组） */
    function add3(a) {
        var b = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            b[_i - 1] = arguments[_i];
        }
        console.log(a, b);
        return a + b.reduce(function (total, cur) { return total + cur; });
    }
    // 第二步：函数实现
    function getInfo(name, age) {
        if (age) {
            if (typeof age === "number") {
                console.log("string类型的name，number类型的age:", name, age);
                return age;
            }
            else {
                console.log("string类型的name，string类型的age:", name, age);
                return age;
            }
        }
        else if (typeof name === "string") {
            console.log("只有string类型的name:", name);
            return name;
        }
    }
    getInfo("cooky");
    getInfo("cooky", 3000);
    getInfo("cooky", "3000");
})(functions || (functions = {}));
