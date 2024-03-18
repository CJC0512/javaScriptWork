/* 02. method */
/* 자바 스크립트의 함수는 객체이다. 함수는 값으로 취급할 수 있고 프로퍼티 값으로 사용할 수도 있다. */

var name = '달마시안'

var dog = {
    /* 프로퍼티들 */
    name: '뽀삐',

    /* 함수를 가진 프로퍼티 = 메소드 */
    eat: function (food) {
        // console.log(`${name}(은)는 ${food}를 맛있게 먹어요.`);     // 'this.' 이 없으면 전역변수를 뜻한다.
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요.`);     // 메소드에서의 'this'는 **메소드를 호출한 객체**

        return '잘 먹었네';
    }
};

console.log(dog.eat);       // method 확인
console.log(dog.eat());     // method 실행
console.log(dog.eat('고구마'));     // method 매개변수 포함 실행
