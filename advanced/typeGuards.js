"use strict";
/* 类型保护 */
/*
  typescript 能够在特定的区块中保证变量属于某种确定的类型。
  可以在此区块中放心地引用此类型的属性，或者调用此类型的方法。
*/
var advancedType;
(function (advancedType) {
    // demo
    var Type;
    (function (Type) {
        Type[Type["Strong"] = 0] = "Strong";
        Type[Type["Week"] = 1] = "Week";
    })(Type || (Type = {}));
    var Java = /** @class */ (function () {
        function Java() {
        }
        Java.prototype.helloJava = function () {
            console.log("Hello Java");
        };
        return Java;
    }());
    var JavaScript = /** @class */ (function () {
        function JavaScript() {
        }
        JavaScript.prototype.helloJavaScript = function () {
            console.log("Hello JavaScript");
        };
        return JavaScript;
    }());
    function getLanguage(type, x) {
        var lang = type === Type.Strong ? new Java() : new JavaScript();
        /* 没类型保护之前、 重复的类型断言 不方便。 */
        // if ((lang as Java).helloJava) {
        //   (lang as Java).helloJava();
        // } else {
        //   (lang as JavaScript).helloJavaScript();
        // }
        /* 类型保护 */
        // 1.  instanceof  ， 实例对象 instanceof 类
        // if (lang instanceof Java) {
        //   lang.helloJava();
        // } else {
        //   lang.helloJavaScript();
        // }
        // 2.  in , 属性 in 实例对象
        // if ("Java" in lang) {
        //   lang.helloJava();
        // } else {
        //   lang.helloJavaScript();
        // }
        // 3. typeof
        // if (typeof x === "string") {
        //   // 这个区块可以使用 String 类型的属性，方法
        //   x.length;
        // } else {
        //   // 这个区块可以使用 Number 类型的属性，方法
        //   x?.toFixed();
        // }
        // 4. 类型保护函数来判断
        if (isJava(lang)) {
            lang.helloJava();
        }
        else {
            lang.helloJavaScript();
        }
    }
    getLanguage(Type.Strong);
    function isJava(lang) {
        return lang.helloJava !== undefined;
    }
})(advancedType || (advancedType = {}));
