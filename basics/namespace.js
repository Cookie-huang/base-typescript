"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 命名空间，避免命名冲突
var A;
(function (A) {
    var Dog_namespace = /** @class */ (function () {
        function Dog_namespace() {
            this.name = "name";
        }
        return Dog_namespace;
    }());
    A.Dog_namespace = Dog_namespace;
})(A || (A = {}));
var B;
(function (B) {
    var Dog_namespace = /** @class */ (function () {
        function Dog_namespace() {
            this.name = 123;
        }
        return Dog_namespace;
    }());
    B.Dog_namespace = Dog_namespace;
})(B || (B = {}));
var C;
(function (C) {
    var Dog_namespace = /** @class */ (function () {
        function Dog_namespace() {
            this.name = 123;
        }
        return Dog_namespace;
    }());
    C.Dog_namespace = Dog_namespace;
})(C = exports.C || (exports.C = {}));
var dog_namespace_a = new A.Dog_namespace();
var dog_namespace_b = new B.Dog_namespace();
console.log(dog_namespace_a);
console.log(dog_namespace_b);
