/* 映射类型 */
namespace mappedTypes {
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

  //  origin
  interface Person {
    name: string;
    age: number;
  }

  /*   
    lib.es5.d.ts 里已经内置的几个映射

        type Partial<T> = {
        [P in keyof T]?: T[P];
        };

        type Readonly<T> = {
        readonly [P in keyof T]: T[P];
        };
        
        type Pick<T, K extends keyof T> = {
        [P in K]: T[P];
        };

        type Record<K extends string, T> = {
            [P in K]: T;
        };

        in 操作符
        类型变量 P，它会依次绑定到每个属性。
        字符串字面量联合的 K，它包含了要迭代的属性名的集合。
    */

  //  这3个类转换是 同态的，映射只作用于 T 的属性而没有其它的
  type PersonPartial = Partial<Person>;
  type ReadonlyPerson = Readonly<Person>;
  type PickPerson = Pick<Person, "age">;
  //  record 不是同态
  type RecordPerson = Record<"params1" | "params2", string>;

  let person: Person = {
    name: "Jarid",
    age: 35
  };
  //   person.age = 12; // Right

  let personPartial: PersonPartial = {
    name: "Jarid"
    // age: 35
  };

  let readonlyPerson: ReadonlyPerson = {
    name: "Jarid",
    age: 35
  };

  let pickPerson: PickPerson = {
    age: 35
  };

  let recordPerson: RecordPerson = {
    params1: "35",
    params2: "35"
  };
  //   readonlyPerson.age = 12; // Error，Cannot assign to 'age' because it is a read-only property.
}
