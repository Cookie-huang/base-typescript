// 命名空间，避免命名冲突
namespace A {
  interface Animal_namespace {
    name: string;
  }

  export class Dog_namespace implements Animal_namespace {
    public name: string;
    constructor() {
      this.name = "name";
    }
  }
}

namespace B {
  interface Animal_namespace {
    name: number;
  }

  export class Dog_namespace implements Animal_namespace {
    public name: number;
    constructor() {
      this.name = 123;
    }
  }
}

export namespace C {
  interface Animal_namespace {
    name: number;
  }

  export class Dog_namespace implements Animal_namespace {
    public name: number;
    constructor() {
      this.name = 123;
    }
  }
}

const dog_namespace_a = new A.Dog_namespace();
const dog_namespace_b = new B.Dog_namespace();
console.log(dog_namespace_a);
console.log(dog_namespace_b);
