function hello() {
    document.write("<h3>hello,js!</h3>");
}
function hello2() {
    alert("警告框");
}
function hello3() {
    confirm("你确认吗？");
}
function hello4() {
    prompt("你的年龄？", "23");
}


//结合for循环，实现多个学生成绩分等
var students = [50, 71, 93, 44, 65];

function convert(score) {
    let str = '其他';
    if (score >= 90) {
        str = ('优秀');
    } else if (score >= 80) {
        str = ('良好');
    } else {
        str = ('其他');
    }
    return str;
}

var students = [50, 71, 93, 44, 65];

for (let i = 0; i < students.length; i++) {
    let result = convert(students[i]);
    console.log(i + '\t' + result);
}

for (let i = 0; i < students.length; i++) {
    if (students[i] >= 90) {
        console.log('优秀');
    } else if (students[i] >= 80) {
        console.log('良好');
    } else {
        console.log('其他');
    }
}


//用if/if-else实现单个成绩分等
var student = 90;
if (student >= 90) {
    console.log('优秀');
} else if (student >= 80) {
    console.log('良好');
} else {
    console.log('其他');
}




//用switch-case实现单个成绩分等
var stu = 70;
switch (true) {
    case (stu >= 90):
        console.log('优秀');
        alert('优秀');
        break;
    case (stu >= 80):
        console.log('良好');
        alert('良好');
        break;
    default:
        console.log('其他');
        alert('其他');
        break;
}