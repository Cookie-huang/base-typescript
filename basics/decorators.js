"use strict";
/*
    装饰器： 是一种特殊类型的声明，能够附加到类声明，方法，属性或参数上，可以修改类的行为。

    通俗的讲装饰器就是一个方法，可以注入到类，方法，属性，参数上来扩展类，属性，方法，参数的功能

    常见的装饰器有：类装饰器，属性装饰器，方法装饰器，参数装饰器

    装饰器的写法：普通装饰器（无法传参） 装饰器工厂（可传参）

*/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
    1. 类装饰器

    在类声明之前被声明（紧靠着类声明）
    装饰器应用于类构造函数，可以用来监视，修改或替换类定义。传入一个参数
 */
// 普通装饰器（无法传参）
function sleep_decorators_no(target) {
    //   console.log(target);
    target.prototype.sleep1 = function () {
        console.log("sleep1");
    };
}
// 装饰器工厂（可传参）
function sleep_decorators_have(params) {
    return function (target) {
        // console.log(target);
        target.prototype.sleep2 = function () {
            console.log("参数是：", params);
        };
    };
}
var Dog_decorators = /** @class */ (function () {
    function Dog_decorators() {
    }
    Dog_decorators.prototype.eat = function () { };
    Dog_decorators = __decorate([
        sleep_decorators_no,
        sleep_decorators_have("hello world")
    ], Dog_decorators);
    return Dog_decorators;
}());
var dog_decorator = new Dog_decorators();
// console.log(dog_decorator);
// dog_decorator.sleep1();
// dog_decorator.sleep2();
/*
  重载构造函数: 装饰器工厂
  如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
*/
function newConstructor(target) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiUrl = "我是替换后的apiUrl";
            return _this;
        }
        class_1.prototype.getUrl = function () {
            console.log(this.apiUrl + "----after");
        };
        return class_1;
    }(target));
}
var Http_decorators = /** @class */ (function () {
    function Http_decorators() {
        this.apiUrl = "我是一开始类里的apiUrl";
    }
    Http_decorators.prototype.getUrl = function () {
        console.log(this.apiUrl);
    };
    Http_decorators = __decorate([
        newConstructor
    ], Http_decorators);
    return Http_decorators;
}());
var http_decorator = new Http_decorators();
// console.log(http_decorator);
// http_decorator.getUrl(); // 我是替换后的apiUrl----after
// ========================分割线=======================================
/*
  2.属性装饰器:
    属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
    参数1: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    参数2: 成员的名字。（属性的名字）
*/
var test = null;
function newName_decorator(params) {
    return function (target, attr) {
        // console.log("装饰器传递的参数:", params);
        // console.log("类的构造函数:", target); //类的原型对象
        // console.log("成员的名字:", attr);
        target[attr] = params;
        test = target;
    };
}
var People_decorators = /** @class */ (function () {
    function People_decorators() {
        // console.log("constructor执行");
        // console.log("静态属性:", People_decorators.sex);
        this.name = "我是constructor的name";
    }
    People_decorators.sex = "F";
    __decorate([
        newName_decorator("我是装饰器的name")
    ], People_decorators.prototype, "name", void 0);
    __decorate([
        newName_decorator(20)
    ], People_decorators.prototype, "age", void 0);
    __decorate([
        newName_decorator("M")
    ], People_decorators, "sex", void 0);
    return People_decorators;
}());
var people_decorator = new People_decorators();
/*
    console.log("test", test);
    console.log(People_decorators.prototype);
    // 验证是类的原型对象
    console.log(test === People_decorators.prototype);  // true
*/
// console.log(people_decorator.name); // 我是constructor的name
// console.log(people_decorator.age); // 20 有改变了 age
// ========================分割线=======================================
/*
  3.方法装饰器
    会被应用到方法的属性描述符上，可以用来监视，修改或者方法定义

    运行时传入3个参数:
    1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2.成员的名字。
    3.成员的属性描述符。
*/
function add_decorator(params) {
    // console.log(params);
    return function (target, methodName, desc) {
        // console.log(target);
        // console.log(methodName);
        // console.log(desc);
        // console.log(desc.value);
        // 假设我们这个装饰器是功能是将所有参数变为字符串
        var oMethod = desc.value;
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (item) { return String(item); });
            oMethod.apply(this, args);
        };
    };
}
var Fn_decorator = /** @class */ (function () {
    function Fn_decorator() {
    }
    Fn_decorator.prototype.add = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
        console.log("我是原来的add");
    };
    __decorate([
        add_decorator("我是方法装饰器参数")
    ], Fn_decorator.prototype, "add", null);
    return Fn_decorator;
}());
var fn_decorator = new Fn_decorator();
// fn_decorator.add(123, "xxx");
// ========================分割线=======================================
/*
  4.方法参数装饰器

    参数装饰器表达式会在运行时当做函数被调用，可以使用参数装饰器为类的原型增加一些元素数据

    运行时传入3个参数:
    1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2.方法的名字。
    3.参数在函数参数列表中的索引。
*/
function minus_decorator(params) {
    // console.log(params);
    return function (target, methodName, paramsIndex) {
        // console.log(target);
        // console.log(methodName);
        // console.log(paramsIndex);
    };
}
var Params_decorator = /** @class */ (function () {
    function Params_decorator() {
    }
    Params_decorator.prototype.minus = function (name) { };
    __decorate([
        __param(0, minus_decorator("我是参数装饰器的参数"))
    ], Params_decorator.prototype, "minus", null);
    return Params_decorator;
}());
var params_decorator = new Params_decorator();
// console.log(params_decorator);
// ========================分割线=======================================
/* 装饰器执行顺序 */
//  属性  >  方法 >  方法参数 > 类
// 从右向左 从下往上
