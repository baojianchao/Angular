function onBtnClick() {
    var id = document.getElementById('userid');
    var idVal = id.value.trim();
    var pwd = document.getElementById('userpwd');
    var pwdVal = pwd.value.trim();
    const p1 = document.getElementById('t1');
    const p2 = document.getElementById('t2');
    if (idVal == "") {
        p1.innerText = "用户名不为空！";
    }
    else if (idVal.length < 3) {
        p1.innerText = "用户名长度不能少于3位！";
    }
    else {
        p1.innerText = '';
    }
    if (pwdVal == "") {
        p2.innerText = "密码不为空！";
    }
    else if (pwdVal.length < 6) {
        p2.innerText = "密码长度不能少于6位！";
    }
    else {
        p2.innerText = '';
    }
    if (idVal == 'bjc' && pwdVal == '123456') {
        location.href = "https://www.baidu.com";
    }
}