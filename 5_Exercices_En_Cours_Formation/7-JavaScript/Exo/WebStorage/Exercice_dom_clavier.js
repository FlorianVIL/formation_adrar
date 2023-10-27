document.querySelector("textarea").addEventListener("keyup",(event)=>{
    //console.log(event);
    let cibleText = document.querySelector("#cibleText");

    //cibleText.innerText = cibleText.innerText + event.key;
    cibleText.innerText = document.querySelector("textarea").value;
})

// Exercice sur le WebStorage

let monTxt = document.querySelector("textarea");

let rendu = document.querySelector("#cibleText");

monTxt.value = localStorage.getItem("monSuperTexte");

if(monTxt.value){
    rendu.innerText = localStorage.getItem("monSuperTexte");
}

monTxt.addEventListener("keyup",(event)=>{
    localStorage.setItem("monSuperTexte",monTxt.value);
    rendu.innerText = monTxt.value;
})