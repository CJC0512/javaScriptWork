/* 01_dynamically-typed-language */
var test;
console.log(typeof test);

test = 1;
console.log(typeof test);

test = 'JavaScript';
console.log(typeof test);

test = true;
console.log(typeof test);

test = null;
console.log(test);

test = Symbol();
console.log(typeof test);

test = {};
console.log(typeof test);

test = [];
console.log(typeof test);

test = function () { };         // 1급 객체 (함수 지향언어적 특징을 반영하고 있음)
console.log(typeof test);
