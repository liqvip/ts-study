 /**
  * 
  * interface 可以表示对象的各种语法，它的成员有5种形式。
  * 1. 对象属性
  * 2. 对象的属性索引
  * 3. 对象方法
  * 4. 函数
  * 5. 构造函数
  */

//  使用 type 命令定义一个函数类型
 type Fun = (name: string, fn: (age: number) => void) => void;

interface Person {
  name: string;
  age?: number;
  // 属性索引
  [propName: string]: any;
  say(): string;
  walk?: () => string;
  eat?: { (x: boolean): string }
}

// 箭头函数
const getPersonName = (person: Person) => {
  console.log(person.name)
}

const setPersonName = (person: Teacher, name: string) => {
  person.name = name;
}

class User implements Person {
  name = 'dell';

  say(){
    return 'hello'
  }
}

const person = {
  name: 'dell',
  sex: 'male',
  say(){
    return 'say hello';
  },
  walk(){
    return 'go walk';
  },
  teach(){
    return 'teach'
  }
}

interface Teacher extends Person {
  teach: () => string;
}

// interface 也可以用来声明独立的函数类型
interface SayHi {
  (word: string): string;
}

getPersonName(person);
setPersonName(person, 'lee');
getPersonName(person);

