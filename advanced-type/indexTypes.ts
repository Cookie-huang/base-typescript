/* 索引类型 */
// 作用：使用索引类型，编译器就能够检查使用了动态属性名的代码。
/* 
    操作符:
        1.  keyof T， 索引类型查询操作符。 
            对于任何类型 T， keyof T 的结果为 T 上已知的公共属性名的联合。
        2.  T[K]， 索引访问操作符。
*/
namespace indexTypes {
  function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
  }
  interface Person {
    name: string;
    age: number;
  }
  let person: Person = {
    name: "Jarid",
    age: 35
  };
  let strings1: string[] = pluck(person, ["name"]); // ok, string[]
  //   message 不在 （"name"|"age"） 里， 自动转为 string   , ("name"|"age")[] 不兼容 string[]
  //   let strings2: string[] = pluck(person, ["message"]); // Error
  let strings3: (string | number)[] = pluck(person, ["name", "age"]); // ok

  //    解析：  T => Person        K => "name" | "age"
  let p: keyof Person; //  "name" | "age"
  p = "age";
  console.log(p);

  //  相当于是字面量数组
  //  K 限定了 ("name" | "age")[]   , 只有下面四种组合满足。
  let names: ("name" | "age")[];
  names = [];
  names = ["name"];
  names = ["age"];
  names = ["name", "age"];

  /* ===================================分割线=================================== */

  /* 索引类型和字符串索引签名 */
  interface Map<T> {
    [key: string]: T;
  }
  let m: Map<number>;
  //   number 会提升为 string
  m = { value: 1, 1: 2 };
  console.log(m);

  let keys: keyof Map<number>; // string | number
  keys = "ddd";
  keys = 123;

  //   指向的是 {key : value} 中的 value
  let value: Map<number>["foo"]; // number
  //   value = "123"; //  Error
  //   value = 123; //    Right
}
