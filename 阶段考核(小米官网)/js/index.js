let containerDom = document.getElementsByClassName("container")[0];
let ulDom = document.getElementsByClassName("ul-img")[0];
let prevDom = document.getElementsByClassName("prev")[0].firstElementChild;
let nextDom = document.getElementsByClassName("next")[0].firstElementChild;
let numUlDom = document.getElementsByClassName("num-ul")[0];
let numList = numUlDom.getElementsByTagName("li");

let currentIndex = 0;
let timer = null;
numList[currentIndex].style.borderColor = "#ccc";

prevDom.addEventListener("click", prevFun);
nextDom.addEventListener("click", nextFun);
containerDom.addEventListener("mouseenter", stopAutoPlay);
containerDom.addEventListener("mouseleave", autoPlay);
numUlDom.addEventListener("click", numClick);

autoPlay();

function prevFun() {
    ulDom.style.transition = "0.5s";
    numList[currentIndex].style.backgroundColor = "";
    if (currentIndex === 0) {
        ulDom.style.transition = "0s";
        currentIndex = 4;
    } else {
        currentIndex -- ;
    }
    ulDom.style.left = `-${currentIndex*992}px`;
    numList[currentIndex].style.backgroundColor = "#ccc";
}
function nextFun() {
    ulDom.style.transition = "0.5s";
    numList[currentIndex].style.backgroundColor = "";
    if (currentIndex === 4) {
        ulDom.style.transition = "0s";
        currentIndex = 0;
    } else {
        currentIndex ++ ;
    }
    ulDom.style.left = `-${currentIndex*992}px`;
    numList[currentIndex].style.backgroundColor = "#ccc";
}
function numClick(e) {
    ulDom.style.transition = "0.5s";
    let index = e.target.dataset.index;
    if (index === undefined) {
        return;
    }
    numList[currentIndex].style.transition = "";
    currentIndex = Number(index);
    for (let i = 0; i < 4; i ++ ) {
        numList[i].style.backgroundColor = "";
    }
    numList[currentIndex].style.backgroundColor = "#ccc";
    ulDom.style.left = `-${currentIndex*992}px`;
}
function autoPlay() {
    timer = setInterval(nextFun, 3000);
}
function stopAutoPlay() {
    clearTimeout(timer);
}