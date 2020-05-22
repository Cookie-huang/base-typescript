"use strict";
/* 字面类型 */
var LiteralTypes;
(function (LiteralTypes) {
    function fn(value) {
        console.log(value);
    }
    function fn2(value) {
        console.log(value);
    }
    // or
    function fn3(value) {
        console.log(value);
    }
    //   fn2(1); // Right
    //   fn2(4); // Error
})(LiteralTypes || (LiteralTypes = {}));
