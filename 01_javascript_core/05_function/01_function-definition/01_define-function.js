/* 01_define-function */

/* function-declaration(함수 선언문) */
function hello(name) {
    return `${name}님 안녕하세요!`;
}           // ; 없음

console.log(hello);
console.log(hello('고길동'));

/* function-expression(함수 표현식) */

/* 
    자바스크립트의 함수는 객체 타입의 값으로 값의 성질을 갖는 객체를 일급 객체라고 한다.
    함수는 일급 객체이므로 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다.
*/
var hello2 = function abc(name) {       // abc는 해석되지 않아 무용지물이다.
    return `${name}님 안녕하세요!`;
};          // ; 있음

console.log(hello2);
console.log(hello2('둘리'));

