/* 01_in-operators(in 연산자) */
/* 프로퍼티 존재 여부 확인하기 */

var student = {
    name: '유관순',
    age: 16,
    test: undefined
};

console.log('name' in student);
console.log('height' in student);
console.log('test' in student);

/* for-in 문 */
/* 객체의 모든 프로퍼티 키 순회 */
for (var key in student) {
    console.log(`key: ${key}`);
    
    /* 대괄호 표기법으로 접근하지만 key는 변수이므로 홀따옴표(')를 붙이지 않는다. */
    console.log(`student[${key}]: ${student[key]}`);

}

