"use strict";
/* 交叉类型 */
var intersectionTypes;
(function (intersectionTypes) {
    var pet = {
        // 要包含
        run: function () { },
        jump: function () { }
    };
    //   pet 是一个 value
    console.log(pet);
})(intersectionTypes || (intersectionTypes = {}));
