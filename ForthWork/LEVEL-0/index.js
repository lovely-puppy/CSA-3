let val = document.getElementById("addContent");
let add = document.getElementById("addBtn");
let content = document.getElementsByClassName("content")[0];
let del = document.getElementsByClassName("delete");
for (let i = 0; i < del.length; i++) {
    del[i].onclick = function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
    }
}

add.onclick = function () {
    console.log(val.value == '');
    if (val.value == '') {
        alert("还未填写待办事项");
        return false;
    }
    let p = document.createElement("p");
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    p.appendChild(input);
    let text = document.createElement("span");
    text.innerText = val.value;
    val.value = '';
    p.appendChild(text);
    let span = document.createElement("span");
    span.setAttribute("class", "delete");
    span.innerText = "❎";
    p.appendChild(span);
    console.log(p);
    content.appendChild(p);

    let del = document.getElementsByClassName("delete");
    for (let i = 0; i < del.length; i++) {
        del[i].onclick = function () {
            this.parentNode.parentNode.removeChild(this.parentNode);
        }
    }
}

