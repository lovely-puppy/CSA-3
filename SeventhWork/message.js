function add_msg(username, avatar, words) {
    const board = document.querySelector('#msg-board');
    let out_div = document.createElement('div');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let span = document.createElement('span');

    div.style.fontSize = 18+'px';
    div.style.fontWeight = 500;
    div.innerText = username;

    img.style.height = 40 + 'px';
    img.style.width = 40 + 'px';
    img.src = avatar;

    span.innerText = words;

    out_div.appendChild(div);
    out_div.appendChild(img);
    out_div.appendChild(span);
    board.appendChild(out_div);
}

function success_register(code, mes) {
    const reg_log = document.querySelector('#reg-log');
    let p = document.createElement('p');
    p.innerText = mes;
    reg_log.appendChild(p);
}