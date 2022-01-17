// alert, prompt, confirm - 브라우저 환경에서 사용되는 최소한의 사용자 인터페이스들

// alert: 브라우저 상에서 메세지 창(모달창) 띄우기
alert("hello")

// prompt: 사용자가 값을 입력할 수 있는 모달창
// title: 사용자에게 보여줄 문자열
// default: 입력 필드의 초기값, []는 필수가 아닌 선택값이라는 것을 의미한다
result = prompt(title, [default]);

// 사용자가 원하는 값을 입력한 뒤 확인을 누를 수 있다
let age = prompt('나이를 입력해주세요.', 100);
alert('당신의 나이는 ${age}살 입니다.');

// confirm: 질문에 대한 확인과 취소가 있는 모달창
let isBoss = confirm('당신이 보스인가요');
alert(isBoss);