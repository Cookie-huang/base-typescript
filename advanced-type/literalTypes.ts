/* 字面类型 */
namespace LiteralTypes {
  /* 字符串 */
  type s = "a" | "b" | "c";
  function fn(value: s) {
    console.log(value);
  }
  //   fn("a"); // Right
  //   fn("d"); // Error

  /* 数字 */
  type n = 1 | 2 | 3;
  function fn2(value: n) {
    console.log(value);
  }
  // or
  function fn3(value: 1 | 2 | 3) {
    console.log(value);
  }
  //   fn2(1); // Right
  //   fn2(4); // Error
}
