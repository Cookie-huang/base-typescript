"use strict";
// 如果 类 实现泛型接口规范，这个类也应该是泛型类
// 简单模拟数据库 1
var MysqlDb_demo = /** @class */ (function () {
    function MysqlDb_demo() {
    }
    MysqlDb_demo.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb_demo.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb_demo.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb_demo.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDb_demo;
}());
// 简单模拟数据库 2
var MongoDb_demo = /** @class */ (function () {
    function MongoDb_demo() {
    }
    MongoDb_demo.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MongoDb_demo.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MongoDb_demo.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MongoDb_demo.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MongoDb_demo;
}());
var User_demo = /** @class */ (function () {
    function User_demo() {
    }
    return User_demo;
}());
var u_demo = new User_demo();
u_demo.username = "cooky";
u_demo.password = "123";
var mysql_ = new MongoDb_demo();
mysql_.add(u_demo);
var mongo_ = new MongoDb_demo();
mongo_.add(u_demo);
