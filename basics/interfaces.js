"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    接口 vs. 类型别名
    像我们提到的，类型别名可以像接口一样；然而，仍有一些细微差别。

    其一，接口创建了一个新的名字，可以在其它任何地方使用。
    类型别名并不创建新名字—比如，错误信息就不会使用别名。
    
    在下面的示例代码里，在编译器中将鼠标悬停在 interfaced上，显示它返回的是 Interface，但悬停在 aliased上时，显示的却是对象字面量类型。

    type Alias = { num: number }
    interface Interface {
      num: number;
    }
    declare function aliased(arg: Alias): Alias;
    declare function interfaced(arg: Interface): Interface;

    另一个重要区别是类型别名不能被 extends和 implements（自己也不能 extends和 implements其它类型）。
    因为 软件中的对象应该对于扩展是开放的，但是对于修改是封闭的，你应该尽量去使用接口代替类型别名。

    另一方面，如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名。
*/
var interfaces;
(function (interfaces) {
    function showFullName(name) {
        console.log("\u59D3\uFF1A" + name.lastName + " \u540D\uFF1A" + name.firstName);
        return "\u59D3\uFF1A" + name.lastName + " \u540D\uFF1A" + name.firstName;
    }
    // 等价于 =>  别名 type
    // type Add = (a: number, b: number) => boolean;
    var addFn;
    addFn = function (x, y) {
        return x + y > 0;
    };
    var test_array_Indexable = [2, "aaa", true];
    var test_object_Indexable = { open: false, 1: true }; // number1会转为string“1”
    var test_object_Indexable1 = {
        open: "a",
        1: "b"
    };
    console.log(test_array_Indexable);
    console.log(test_object_Indexable);
    console.log(test_object_Indexable1);
    var Dogs = /** @class */ (function () {
        function Dogs(name) {
            this.name = name;
        }
        Dogs.prototype.eat = function () {
            return this.name;
        };
        return Dogs;
    }());
    var Cats = /** @class */ (function () {
        function Cats(name) {
            this.name = name;
        }
        Cats.prototype.eat = function (a) {
            return this.name + a;
        };
        return Cats;
    }());
    var testClassTypesDog = new Dogs("啊黑");
    console.log(testClassTypesDog.eat());
    var testClassTypesCat = new Cats("啊花");
    console.log(testClassTypesCat.eat("aaaaaaaaaaaa"));
    // 类: 程序员
    var Programmer_interfaces = /** @class */ (function () {
        function Programmer_interfaces(name) {
            this.name = name;
        }
        Programmer_interfaces.prototype.code = function (code) {
            console.log(this.name + code);
        };
        return Programmer_interfaces;
    }());
    // 类： 程序员 -> 前端
    var web_interfaces = /** @class */ (function (_super) {
        __extends(web_interfaces, _super);
        function web_interfaces(name) {
            return _super.call(this, name) || this;
        }
        web_interfaces.prototype.eat = function () { };
        web_interfaces.prototype.work = function () { };
        return web_interfaces;
    }(Programmer_interfaces));
    var w = new web_interfaces("cooky");
    w.code("写代码");
    function render(result) {
        result.data.forEach(function (value) {
            // value.id++; // 报错  readonly
            value.name = "my name is " + value.name; // 可以修改
            console.log(value.id, value.name);
            if (value.age) {
                console.log(value.age);
            }
        });
    }
    var result = {
        data: [
            { id: 1, name: "A", sex: "male" },
            { id: 2, name: "B", age: 20 }
        ]
    };
    render(result);
})(interfaces || (interfaces = {}));
