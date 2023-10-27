document.querySelector("textarea").addEventListener("keyup",(event)=>{
    //console.log(event);
    let cibleText = document.querySelector("#cibleText");

    //cibleText.innerText = cibleText.innerText + event.key;
    cibleText.innerText = document.querySelector("textarea").value;
})