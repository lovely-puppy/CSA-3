let erji = document.querySelector('#root #display #show .box-hd .more .tab-list .erji');
let chuandai = document.querySelector('#root #display #show .box-hd .more .tab-list .chuan');
let ulDom1 = document.querySelector('#root #display #show .box-bd .span16 ul');
let liNodes1 = ulDom1.getElementsByTagName('li');
console.log(liNodes1);

erji.addEventListener("mouseenter", () => {
    for (let i = 8; i < 16; i ++ ) {
        liNodes1[i].style.display = "none";
    }
    for (let i = 0; i < 8; i ++ ) {
        liNodes1[i].style.display = "";
    }
});
chuandai.addEventListener("mouseenter", () => {
    for (let i = 0; i < 8; i ++ ) {
        liNodes1[i].style.display = "none";
    }
    for (let i = 8; i < 16; i ++ ) {
        liNodes1[i].style.display = "";
    }
});