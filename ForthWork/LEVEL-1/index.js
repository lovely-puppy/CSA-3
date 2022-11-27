function countDown(time) {
    let nowTime = +new Date();
    let inputTime = +new Date(time);
    let times = parseInt(inputTime - nowTime) / 1000;
    let d = parseInt(times / 60 / 60 / 24);
    d = d < 10 ? '0' + d : d;
    let h = parseInt(times / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    let m = parseInt(times / 60 % 60);
    m = m < 10 ? '0' + m : m;
    let s = parseInt(times % 60);
    s = s < 10 ? '0' + s : s;

    let cnt = document.getElementsByClassName('right')[0];
    let day = document.querySelector('#main .right h2 span');
    let all = document.querySelectorAll('#main .right h3 span');
    let hour = all[0];
    let minute = all[1];
    let second = all[2];

    day.innerText = d;
    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;

    return "离春节还有: " + d + "天" + h + "时" + m + "分" + s + "秒";
}
console.log(countDown('2023-1-1 00:00:00'));
setInterval(() => {
    countDown('2023-1-1 00:00:00');
}, 1000);