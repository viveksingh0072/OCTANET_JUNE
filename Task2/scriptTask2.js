const inputbox=document.getElementById("inpbox");
const listcont=document.getElementById("listcont");
function addtask(){
    if(inputbox.value===''){
        confirm("You must write atleast something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcont.appendChild(li);
        // let li2=document.createElement("input");
        // li2.innerHTML="medium priority";
        // li2.placeholder="Enter priority";
        // listcont.appendChild(li2);
        let span=document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
        // let span2=document.createElement("spanish");
        // spannish.innerHTML='\u00d7';
        // li.appendChild(span);
        let btn=document.createElement("button2");
        btn.innerHTML="low";
        li.appendChild(btn);
        let btn1=document.createElement("input");
        btn1.placeholder="01/01/2024";
        li.appendChild(btn1);
    }
    inputbox.value='';
    savedata();
}
listcont.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
    else if(e.target.tagName==="BUTTON2"){
        if(e.target.innerHTML==="low"){
            e.target.innerHTML="medium";
            e.target.style.background="rgb(255,136,0)";
            savedata();
        }
        else if(e.target.innerHTML==="medium"){
            e.target.innerHTML="high";
            e.target.style.background="red";
            savedata();
        }
        else if(e.target.innerHTML==="high"){
            e.target.innerHTML="low";
            e.target.style.background="rgb(14, 194, 62)";
            savedata();
        }
    }
},false);
function savedata(){
    localStorage.setItem("data",listcont.innerHTML);
}
function show(){
    listcont.innerHTML=localStorage.getItem("data");
}
show();
