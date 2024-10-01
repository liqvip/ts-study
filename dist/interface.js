"use strict";
/**
 *
 * interface 可以表示对象的各种语法，它的成员有5种形式。
 * 1. 对象属性
 * 2. 对象的属性索引
 * 3. 对象方法
 * 4. 函数
 * 5. 构造函数
 */
// 箭头函数
var getPersonName = function (person) {
    console.log(person.name);
};
var setPersonName = function (person, name) {
    person.name = name;
};
var User = /** @class */ (function () {
    function User() {
        this.name = 'dell';
    }
    User.prototype.say = function () {
        return 'hello';
    };
    return User;
}());
var person = {
    name: 'dell',
    sex: 'male',
    say: function () {
        return 'say hello';
    },
    walk: function () {
        return 'go walk';
    },
    teach: function () {
        return 'teach';
    }
};
getPersonName(person);
setPersonName(person, 'lee');
getPersonName(person);
