"use strict";
/*
  软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。
  组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

  在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。
  这样用户就可以以自己的数据类型来使用组件。


  同一个组件（接口，类，函数...)，可以同时支持不同类型（提前规范好所支持的类型）

  比如 fn1 支持接收 string , 我们想拥有一个接收 number 且实现 fn1 同样功能的函数
  我们可能就想 string | number
  但是假设 我需要另一个 string | number 的函数 fn3
  重复 string | number 不好， 这时我们可以想到定义一个接口， （vlaue:string|number):void
  假设我们又需要一个支持接收布尔值的函数 fn4  , 这时候我们定义的接口又不够强大了。

  这时我们就可以使用泛型  <T>(value:T):T

  泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定

*/
var generics;
(function (generics) {
    /* 泛型函数 */
    function identity(arg) {
        return arg;
    }
    identity(123); // 类型推断
    identity("aaa"); // 类型推断
    identity("aaa"); // 显式的声明
    /* 泛型类 */
    var Log = /** @class */ (function () {
        function Log() {
        }
        Log.prototype.add = function (value) {
            // ...
        };
        return Log;
    }());
    var m1 = new Log();
    var m2 = new Log();
    var i1 = {
        name: "1",
        age: "1"
    };
    var i2 = {
        name: 1,
        age: 1
    };
    console.log(i1);
    console.log(i2);
    function getData(value) {
        return value;
    }
    // 泛型类型“ConfigFn1<T>”需要 1 个类型参数
    var myGetData;
    myGetData = getData;
    var myGetData2;
    myGetData2 = getData;
    /*
      myGetData2("!212"); // right
      myGetData2<string>("!212"); // right
      myGetData2(123); // right
    */
    /* ===================================分割线=================================== */
    /* 把类作为参数来约束数据传入的类型 */
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    var ArticleCate = /** @class */ (function () {
        function ArticleCate(params) {
            this.title = params.title;
            this.status = params.status;
        }
        return ArticleCate;
    }());
    var MysqlDb = /** @class */ (function () {
        function MysqlDb() {
        }
        MysqlDb.prototype.add = function (value) {
            console.log(value);
            return true;
        };
        return MysqlDb;
    }());
    var u = new User();
    u.username = "cooky";
    u.password = "123";
    var a = new ArticleCate({ title: "title" });
    // 类作为参数的泛类型
    var Db1 = new MysqlDb();
    Db1.add(u);
    var Db2 = new MysqlDb();
    Db2.add(a);
    // 必须有 length 属性
    function log(value) {
        console.log(value.length);
        return value;
    }
    log("xxx");
    log(["xxxx", "yyyy"]);
    log([1, 2, 3]);
    // log<number>(1); // 类型“number”不满足约束“Length”。
})(generics || (generics = {}));
