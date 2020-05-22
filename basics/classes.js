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
var classes;
(function (classes) {
    var People = /** @class */ (function () {
        function People(name) {
            this.p1 = "我是公有"; // 类里，子类，类外 都能访问
            this.p2 = "我是保护"; // 类里，子类 能访问， 类外无法访问
            this.p3 = "我是私有"; // 类里能访问， 子类，类外无法访问
            this.name = name;
            this.p4 = 10;
        }
        People.prototype.run = function () {
            console.log(this.name);
        };
        People.prototype.test_public = function () {
            console.log(this.p1);
        };
        People.prototype.test_protected = function () {
            console.log(this.p2);
        };
        People.prototype.test_private = function () {
            console.log(this.p3);
        };
        People.p5 = "static"; //  静态
        return People;
    }());
    // 继承  extends 、super
    var Children = /** @class */ (function (_super) {
        __extends(Children, _super);
        function Children(name, age) {
            var _this = _super.call(this, name) || this;
            _this.age = age;
            _this.age = age;
            _this.run();
            return _this;
        }
        Children.prototype.test_public = function () {
            console.log(this.p1);
        };
        Children.prototype.test_protected = function () {
            console.log(this.p2);
        };
        Children.prototype.test_private = function () {
            // 报错
            // console.log(this.p3);
        };
        return Children;
    }(People));
    // static
    // console.log(People.p5);
    // console.log(Children.p5);
    var p = new People("cooky");
    // console.log(p);
    // p.p4 = 4; // 报错
    // p.p5 = "dddd"; // 报错
    // p.run();
    var c = new Children("Jay", 20);
    // console.log(c);
    // console.log(c.p3);// 报错 私有
    // c.run();
    /* 测试 公有 p1 */
    p.test_public(); // 类里可以访问
    c.test_public(); // 子类可以访问
    console.log(p.p1); // 类外可以访问
    console.log(c.p1); // 类外可以访问
    console.log("===========================分割线=====================");
    /* 测试 保护 p2 */
    p.test_protected(); // 类里可以访问
    c.test_protected(); // 子类可以访问
    // console.log(p.p2); // 报错 ； 类外不能访问
    // console.log(c.p2); // 报错 ； 类外不能访问
    console.log("===========================分割线=====================");
    /* 测试 私有 p3 */
    p.test_private();
    // console.log(p.p3); // 报错 ； 类外不能访问
    // console.log(c.p3); // 报错 ； 类外不能访问
    /* 私有属性 私有方法 */
    // 比如 $.get(url,function(){})
    /* 多态 */
    // 父类定义了一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
    // 多态属于继承
    var Animal = /** @class */ (function () {
        function Animal() {
        } //  只能被继承，不能被实例化
        Animal.prototype.eat = function () {
            return "吃";
        };
        return Animal;
    }());
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super.call(this) || this;
        }
        Cat.prototype.eat = function () {
            return "吃老鼠";
        };
        return Cat;
    }(Animal));
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super.call(this) || this;
        }
        Dog.prototype.eat = function () {
            return "吃肉";
        };
        return Dog;
    }(Animal));
    /* 抽象类 ： 一种标准（基类）*/
    // 提供其他类继承的基类，不能直接被实例化
    // 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
    // abstract 抽象方法只能放在抽象类中
    var Color = /** @class */ (function () {
        function Color(name) {
            this.name = name;
        }
        return Color;
    }());
    var Sky = /** @class */ (function (_super) {
        __extends(Sky, _super);
        function Sky(name) {
            return _super.call(this, name) || this;
        }
        Sky.prototype.showColor = function () {
            console.log("blue");
            return "blue";
        };
        return Sky;
    }(Color));
    var Tree = /** @class */ (function (_super) {
        __extends(Tree, _super);
        function Tree(name) {
            return _super.call(this, name) || this;
        }
        Tree.prototype.showColor = function () {
            console.log("green");
            return "green";
        };
        return Tree;
    }(Color));
    var sky = new Sky("蓝天");
    var tree = new Tree("绿树");
    console.log(sky);
    console.log(tree);
})(classes || (classes = {}));
