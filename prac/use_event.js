/* 이벤트 사용 방법1111 */
let target = document.getElementById('btn');

function changeButtonOnclick() {
    /*클래스 추가*/
    target.classList.add('changeColor');
    /*텍스트 변경*/
    target.innerText = '버튼 클릭 성공!';
}

/*클릭 이벤트 - 아래 두줄은 같은 결과를 나타내는 코드*/
target.addEventListener('click', changeButtonOnclick);
target.onclick = changeButtonOnclick;

/* 이벤트 사용 방법2222 */
/* 마우스가 올라가면 해당 클래스에 해당하는 색이 채워지고, 내려가면 다시 없어진다. */
blockOne.addEventListener("mouseenter", () => blockOne.classList.add('red'));
blockTwo.addEventListener("mouseenter", () => blockTwo.classList.add('yellow'));
blockThree.addEventListener("mouseenter", () => blockThree.classList.add('green'));

blockOne.addEventListener("mouseleave", () => blockOne.classList.remove('red'));
blockTwo.addEventListener("mouseleave", () => blockTwo.classList.remove('yellow'));
blockThree.addEventListener("mouseleave", () => blockThree.classList.remove('green'));

/* 이벤트 매개변수를 활용해 event.target으로도 접근할 수 있다. 
여기서 e는 이벤트가 일어난 주체인 자기 자신을 말한다. 
즉, 첫째 줄에서 e는 blockOne.addEventListener를 말한다.
*/
blockOne.addEventListener("mouseenter", (e) => e.target.classList.add('red'));
blockTwo.addEventListener("mouseenter", (e) => e.target.classList.add('yellow'));
blockThree.addEventListener("mouseenter", (e) => e.target.classList.add('green'));
