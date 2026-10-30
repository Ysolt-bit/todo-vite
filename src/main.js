import {save,load}from "./storage.js";
import "./style.css";

const input=document.querySelector("#word");
const add=document.querySelector("#add");
const list=document.querySelector(".list");
const stat=document.querySelector("#stat");

let todos=load();

function render(){
    list.innerHTML="";
    const N=todos.length;
    const M=todos.filter(function(item){
        return item.done;
    }).length;
    stat.textContent="共"+N+"项，已完成"+M+"项";
    for(let i=0;i<todos.length;i++){
        const li=document.createElement("li");
        li.textContent=todos[i].text;
        if(todos[i].done){
            li.classList.add("done");
        }
        li.dataset.index=i;
        list.appendChild(li);
    }
}

add.addEventListener("click",function(){
    if(input.value===""){
        return;
    }
    todos.push({text:input.value,done:false});
    input.value="";
    save(todos);
    render();
});


list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        const i=Number(e.target.dataset.index);
        todos[i].done=!todos[i].done;
        save(todos);
        render();
    }
});

render();