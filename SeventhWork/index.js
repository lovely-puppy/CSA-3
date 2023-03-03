const register = document.querySelector("#register");
const login = document.querySelector("#login");
const post = document.querySelector("#send-msg");
const getAll = document.querySelector('#all-mes');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const input3 = document.querySelector('#input3');
const xhr = new XMLHttpRequest();

register.addEventListener('click', () => {
    xhr.open('post', 'http://runninglili.club:8080/register');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`username=${input1.value}`);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                const data = JSON.parse(xhr.response);
                success_register(data.code, data.mes);
            }
        }
    }
});

login.addEventListener('click', () => {
    xhr.open('post', 'http://runninglili.club:8080/login');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`username=${input2.value}`);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                const data = JSON.parse(xhr.response);
                // document.cookie = data.token;
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.data.username);
                localStorage.setItem('avatar', data.data.avatar);
                add_msg(data.data.username, data.data.avatar, '登录成功');
                // success_register(data.code, data.mes);
            }
        }
    }
})


getAll.onclick = function() {
    xhr.open('GET', 'http://runninglili.club:8080/getAllMessages');
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                const data = JSON.parse(xhr.response)
                for (let i = 0; i < data.length; i ++ ) {
                    add_msg(data[i].username, data[i].avatar, data[i].words);
                }
            }
        }
    }
}

post.onclick = function() {
    xhr.open('POST', 'http://runninglili.club:8080/sendMes');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', `${localStorage.getItem('token')}`);
    xhr.send(`words=${input3.value}`);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                const data = JSON.parse(xhr.response);
                console.log(data);
                add_msg(localStorage.getItem('username'), localStorage.getItem('avatar'), input3.value);
                // success_register(data.code, data.mes);
            }
        }
    }
}

