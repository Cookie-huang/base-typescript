"use strict";
var basicTypes;
(function (basicTypes) {
    /* 布尔值 */
    var bool = false;
    /* ===================================分割线=================================== */
    /* 字符串 */
    var str = "hello world";
    /* ===================================分割线=================================== */
    /* 数字 */
    var num = 10;
    num = 19;
    num = 19.99999;
    /* ===================================分割线=================================== */
    /* 数组 */
    var arr = [123, "Asdfadf"];
    var arr1 = ["a", "b"];
    // 利用原生Array接口 （官方定义了）
    var arr2 = [1, 2];
    // 元组 tuple 属于数组的一种 (限制个数)
    var arr3 = ["a", 1, true];
    // arr3.push("ddddd"); // 不报错 可以添加
    // arr3[3]; // 报错 不允许越界访问
    /* ===================================分割线=================================== */
    /* 对象 */
    var obj = { x: 1, y: "yyy" };
    obj.x = 2;
    /* ===================================分割线=================================== */
    /* Symbol */
    // let s1: symbol = Symbol();
    // let s2 = Symbol();
    // console.log("Symbol:", s1 === s2); // false
    /* ===================================分割线=================================== */
    // any 任意类型
    var anything = 123;
    anything = "ssssss";
    /* ===================================分割线=================================== */
    /* null ;  undefined 类型  （never类型的子类型） */
    var toBeNum;
    toBeNum = null;
    toBeNum = 1000;
    /* ===================================分割线=================================== */
    /* void类型 ：没有任何类型，一般用于定义方法的时候方法没有返回值 */
    function add() {
        // xxxx
    }
    add();
    // type All = Foo | Bar | Baz; //  Error
    /*
      然而他忘记了在 handleValue 里面加上针对 Baz 的处理逻辑，
      这个时候在 default branch 里面 val 会被收窄为 Baz，导致无法赋值给 never，产生一个编译错误。
      所以通过这个办法，你可以确保 handleValue 总是穷尽 (exhaust) 了所有 All 的可能类型。
    */
    function handleValue(val) {
        switch (val.type) {
            case "foo":
                // 这里 val 被收窄为 Foo
                break;
            case "bar":
                // val 在这里是 Bar
                break;
            default:
                /*
                  代码正确的情况下
                    无法到底的终点。
                    val 在这里是 never => val : never
                    声明 never 的变量只能被 never 类型所赋值
                */
                /*
                  假设加上了 All 联合了 Baz  导致代码错误的情况下
                    代码会运行到这个 default
                    val 在这里是 baz => val : Baz
                    声明 never 的变量只能被 never 类型所赋值 => 报错
                */
                var exhaustiveCheck = val;
                break;
        }
    }
    handleValue({
        type: "foo"
    });
})(basicTypes || (basicTypes = {}));
