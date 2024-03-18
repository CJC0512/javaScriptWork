/* 02 method-shorthand (메소드 단축) */

var dog = {
    name: '뽀삐',

    /* 익명 함수 */
    eat: function (food) {
        console.log(`${food}를 먹는다.`)
    }
};

dog.eat('바나나');

/* 
    - ES6 이후부터는 메소드를 정의할 때 콜론(:)과 function 키워드를 생략한 축약 표현을 사용할 수 있다.
    - dog2는 2개의 프로퍼티를 가지고 있다.(name과 eat) 
*/
var dog2 = {
    name: '뽀삐',
    /* 익명 함수 */
    eat(food) {
        console.log(`${food}를 먹는다.`)
    }
};

dog2.eat('키위');
