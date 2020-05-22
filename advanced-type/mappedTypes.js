"use strict";
/* 映射类型 */
var mappedTypes;
(function (mappedTypes) {
    // 我们想要映射的目标：
    //   1. 可选
    //   interface PersonPartial {
    //     name?: string;
    //     age?: number;
    //   }
    //   2.只读
    //   interface PersonReadonly {
    //     readonly name: string;
    //     readonly age: number;
    //   }
    var person = {
        name: "Jarid",
        age: 35
    };
    //   person.age = 12; // Right
    var personPartial = {
        name: "Jarid"
        // age: 35
    };
    var readonlyPerson = {
        name: "Jarid",
        age: 35
    };
    var pickPerson = {
        age: 35
    };
    var recordPerson = {
        params1: "35",
        params2: "35"
    };
    //   readonlyPerson.age = 12; // Error，Cannot assign to 'age' because it is a read-only property.
})(mappedTypes || (mappedTypes = {}));
