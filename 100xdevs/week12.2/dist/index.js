"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: 'stains', age: 20 }, { name: 'leto', age: 22 });
console.log(age);
