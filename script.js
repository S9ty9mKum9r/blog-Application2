const inputField = document.getElementById("input-box");
const container = document.getElementById("list-container");
const inputBox = document.getElementById("box");
function takeInput(){
    if(inputField.value === '')
        alert("Please add your task first")
    else {
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        let li = document.createElement("li");
        h1.innerHTML = inputField.value;
        div.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.append(span);
        li.append(h1);
        li.append(div);
        container.append(li)
        inputField.value = "";
        inputBox.value = "";
    }
}
container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);