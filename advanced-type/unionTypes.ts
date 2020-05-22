/* 联合类型 */
namespace unionTypes {
  //   case 1
  let str: string | number;

  //   case 2   not good
  //   interface Info1 {
  //     age: number;
  //   }
  //   interface Info2 {
  //     name: string;
  //   }
  //   interface Info3 {
  //     birthday: number;
  //     fullName: string;
  //     info: string;
  //   }
  //   type Info = Info1 | Info2 | Info3;
  //   let i: Info;
  //   i = { age: 20 };
  //   i = { age: 20, fullName: "fullName" }; //  兼容性
  //   i = { info: "info" };

  //   case 3   可辨识联合（Discriminated Unions）
  /* 
    每个接口都有 kind属性但有不同的字符串字面量类型。
    kind属性称做 可辨识的特征或 标签 
  */
  interface Square {
    kind: "square";
    size: number;
  }
  interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
  }
  interface Circle {
    kind: "circle";
    radius: number;
  }
  type Shape = Square | Rectangle | Circle;
  let s: Shape;
  s = { kind: "square", size: 1 };
  s = { kind: "rectangle", width: 1, height: 1 };
  s = { kind: "circle", radius: 1 };
}
