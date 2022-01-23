// map과 forEach 활용하기

/*지시사항에 따라 작성해주세요.*/
const students = [
    {
        name: 'john',
        studentId: 2020123456,
        major: 'business'
    },
    {
        name: 'elice',
        studentId: 2015111111,
        major: 'statistics'
    },
    {
        name: 'jennifer',
        studentId: 2017000000,
        major: 'visual design'
    }
  ]
  
/*1. elice를 찾아 전공을 'computer science'로 바꿔주세요.*/
students.map(student => {
    if(student.name === 'elice') {
        student.major = 'computer science';
        // 객체 반환 방법
        // return {
        //     ...student,
        //     major: 'computer science',
        // };
    } else return student;
});
  
/*2. 웹 화면에 students 정보를 출력해 제대로 수정되었는지 확인해보세요.*/
students.forEach(student => {
    document.write(`${student.name}'s major: ${student.major}<br>`);
});