document.addEventListener("scroll",(event)=>{
    console.log(event);
    console.log(`
    Hauteur de page : ${document.body.scrollHeight}
    Hauteur d'Affichage : ${innerHeight}
    Position de scroll : ${scrollY}
    `)

    let scrollMax = document.body.scrollHeight - innerHeight;
    let onEstOu = scrollY/scrollMax;
    console.log(onEstOu);

    document.querySelector(".bar").style.width = (onEstOu*100)+"%";
})