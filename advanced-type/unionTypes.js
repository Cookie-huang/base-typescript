"use strict";
/* 联合类型 */
var unionTypes;
(function (unionTypes) {
    //   case 1
    var str;
    var s;
    s = { kind: "square", size: 1 };
    s = { kind: "rectangle", width: 1, height: 1 };
    s = { kind: "circle", radius: 1 };
})(unionTypes || (unionTypes = {}));
