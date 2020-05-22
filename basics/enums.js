"use strict";
/* 枚举 */
// 一组有名字的常量集合
var enums;
(function (enums) {
    // 数字枚举
    var Num;
    (function (Num) {
        Num[Num["hello"] = 1] = "hello";
        Num[Num["world"] = 2] = "world";
    })(Num || (Num = {}));
    //  会累加
    // { 1: "hello", 2: "world", hello: 1, world: 2 };
    /* ===================================分割线=================================== */
    // 字符串枚举
    var Str;
    (function (Str) {
        Str["success"] = "\u6210\u529F\uFF01\uFF01";
        Str["error"] = "\u5931\u8D25\uFF01\uFF01";
    })(Str || (Str = {}));
    // {success: "成功！！", error: "失败！！"}
    /* ===================================分割线=================================== */
    // 异构枚举:  数字，字符串混用；  不建议使用
    var Heterogeneous;
    (function (Heterogeneous) {
        Heterogeneous[Heterogeneous["No"] = 0] = "No";
        Heterogeneous["Yes"] = "YES";
    })(Heterogeneous || (Heterogeneous = {}));
    // {0: "No", No: 0, Yes: "YES"}
    /* ===================================分割线=================================== */
    // 枚举成员： 分为 常量const 和 计算computed
    var FileAccess;
    (function (FileAccess) {
        // constant members
        FileAccess[FileAccess["None"] = 100] = "None";
        // computed member
        FileAccess[FileAccess["G"] = "123".length] = "G";
    })(FileAccess || (FileAccess = {}));
    var directions = [
        0 /* Up */,
        1 /* Down */,
        2 /* Left */,
        3 /* Right */
    ];
    //  directions：  [0, 1, 2, 3]
    // console.log(Directions); // 报错 not defined
    // 枚举类型
    //  枚举成员没初始值
    var X;
    (function (X) {
        X[X["a"] = 0] = "a";
        X[X["b"] = 1] = "b";
    })(X || (X = {}));
    var x = 5;
    // console.log(x);// 5
    // 枚举成员都是数字
    var Y;
    (function (Y) {
        Y[Y["a"] = 0] = "a";
        Y[Y["b"] = 1] = "b";
    })(Y || (Y = {}));
    var y = 5;
    // console.log(y);// 5
    // x === y 报错 不同类型不能比较
    // 枚举成员都是字符串
    var G;
    (function (G) {
        G["a"] = "apple";
        G["b"] = "banana";
    })(G || (G = {}));
    // 只能是成员
    var g1 = G.a;
    var g2 = G.a;
    // console.log(g1); //  apple
    // console.log(g2); //  apple
    /* ===================================分割线=================================== */
    var Flag;
    (function (Flag) {
        Flag[Flag["undefined_1"] = 0] = "undefined_1";
        Flag[Flag["success"] = 1] = "success";
        Flag[Flag["error"] = 999] = "error";
        Flag[Flag["undefined_2"] = 1000] = "undefined_2";
        Flag[Flag["undefined_3"] = 1001] = "undefined_3";
    })(Flag || (Flag = {}));
    var f = Flag.success;
    // console.log(f); //  1
    // console.log(Flag.error); // 999
    // 没有标识的 就显示索引（按照前一个的基准 + 1）
    // console.log("undefined_1", Flag.undefined_1); //  0
    // console.log("undefined_2", Flag.undefined_2); //  1000
    // console.log("undefined_2", Flag.undefined_3); //  1001
})(enums || (enums = {}));
