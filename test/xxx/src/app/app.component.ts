import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
var xmlHttp = null;
const frm = {
  iptUserName: null,
  iptPassword: null,
  pUserNameErr: null,
  pPasswordErr: null,
  pFrmErr: null
};


function onResponse() {
  if (xmlHttp.readyState == 4) {
    if (xmlHttp.status == 200) {
      const resp = xmlHttp.responseText;
      console.log(resp);
      const obj = JSON.parse(resp);
      if (obj.success) {
        console.log('登录成功！');
        const page = document.getElementsByClassName('page');
        page[0].className = 'page login-page hide';
        page[1].className = 'page';
        //window.location.href = "https://www.baidu.com";
      } else {
        frm.pFrmErr.innerText = '错误的用户名或者密码';
      }
    }

  } else {
    frm.pFrmErr.innerText = '服务器无响应';
  }

}


function sendLogin(name, password) {
  xmlHttp.onreadystatechange = onResponse;
  xmlHttp.open('POST', 'http://127.0.0.1:8080/user', true);
  xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlHttp.send('name=' + name + '&password=' + password);
}

function onLogin() {
  frm.pUserNameErr.innerText = '';
  frm.pPasswordErr.innerText = '';
  frm.pFrmErr.innerText = '';

  const userName = frm.iptUserName.value;
  let fmt = true;
  console.log(userName);

  if (userName.trim().length <= 0) {
    frm.pUserNameErr.innerText = "用户名不能为空";
    fmt = false;
  }
  else if (userName.trim().length < 3) {
    frm.pUserNameErr.innerText = "用户名长度不能少于3位";
    fmt = false;
  }

  const password = frm.iptPassword.value;
  if (password.trim().length <= 0) {
    frm.pPasswordErr.innerText = "密码不能为空";
    fmt = false;
  } else if (password.trim().length < 6) {
    frm.pPasswordErr.innerText = "密码不能小于6位";
    fmt = false;
  }

  if (!fmt) {
    return;
  } else {
    sendLogin(userName.trim(), password.trim());
    /*if (userName === 'admin' && password === '123456') {
        window.location.href = 'https://www.baidu.com';
    } else {
        frm.pFrmErr.innerText = '用户名或密码错误';
    }*/

  }
}

function onFocusAndInput(evt) {
  const obj = evt.target;
  frm.pFrmErr.innerText = '';
  if (obj === frm.iptUserName) {
    frm.pUserNameErr.innerText = '';
    const userName = frm.iptUserName.value;

    console.log(userName);
    if (userName.trim().length <= 0) {
      frm.pUserNameErr.innerText = "用户名不能为空";
      obj.className = 'ipt-error';
    } else if (userName.trim().length < 3) {
      frm.pUserNameErr.innerText = "用户名长度不能少于3位";
      obj.className = 'ipt-error';
    } else {
      obj.className = '';
    }

  }

}
function onFocusAndInput1(evt) {
  const obj = evt.target;
  frm.pFrmErr.innerText = '';
  if (obj === frm.iptPassword) {
    frm.pPasswordErr.innerText = '';
    const password = frm.iptPassword.value;

    console.log(password);
    if (password.trim().length <= 0) {
      frm.pPasswordErr.innerText = "密码不能为空";
      obj.className = 'ipt-error';
    } else if (password.trim().length < 6) {
      frm.pPasswordErr.innerText = "密码长度不能少于6位";
      obj.className = 'ipt-error';
    } else {
      obj.className = '';
    }
  }
}





window.onload = function () {
  const btnLogin = document.getElementById('btnLogin')
  btnLogin.addEventListener('click', function (evt) {
    onLogin();
    evt.returnValue = false;
  });

  frm.iptUserName = document.getElementById('userName');
  frm.iptUserName.addEventListener('focus', function (evt) {
    onFocusAndInput(evt);
  });
  frm.iptUserName.addEventListener('input', function (evt) {
    onFocusAndInput(evt);
  });

  frm.iptPassword = document.getElementById('password');
  frm.iptPassword.addEventListener('focus', function (evt) {
    onFocusAndInput1(evt);
  });
  frm.iptPassword.addEventListener('input', function (evt) {
    onFocusAndInput1(evt);
  });


  frm.iptUserName = document.getElementById('userName');
  frm.iptPassword = document.getElementById('password');
  frm.pUserNameErr = document.getElementById('userNameErr');
  frm.pPasswordErr = document.getElementById('passwordErr');
  frm.pFrmErr = document.getElementById('frmErr');


  xmlHttp = new XMLHttpRequest();
}
}
