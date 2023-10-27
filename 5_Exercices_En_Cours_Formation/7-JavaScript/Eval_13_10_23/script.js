/*RECUPERATION ET AFFICHAGE DE LA METEO

Fichiers fournis :
- index.html
- style.css
- script.js vide

Tâches à effectuer :
1) Installer la librairie FontAwesome (https://fontawesome.com/)
2) Placer dans le html l'icône Cloud-sun (https://fontawesome.com/icons/cloud-sun?s=solid) juste avant le bouton Charger
3) Installer la librairie Animate on Scroll (https://github.com/michalsnik/aos)
4) Animer la div cardMeteo avec une durée de 1 seconde (soit 1000ms)

La suite sera uniquement réalisée en Javascript :
5) Créer une div que vous stockerez dans une variable info
6) Donner à cette div les propriétés CSS suivantes
    - une hauteur de 300px
    - une largeur de 200px
    - un margin en haut et en bas de 16px
    - un border de 3px, solid, en gris
    - un padding en haut de 16px, à droite et à gauche de 12px, et en bas de 24px
7) Insérer cette div dans la div cardMeteo, avant le bouton
8) Créer une fonction addInfo() qui va ajouter du texte à la div précédement créée
9) Créer une fonction bouton() qui ajoute la class "button__cardMeteo" à notre bouton html
10) Faire en sorte que lorsqu'on maintien le click de la souris (event mousedown) sur le bouton charger, sa couleur de fond devient orange
11) Faire en sorte que lorsqu'on relâche le click de la souris (event mouseup) n'importe où, cela annule la couleur précedente
12) Faire en sorte que lorsqu'on clique (event click) sur le bouton charger, cela interroge l'API météo (https://prevision-meteo.ch/services/json/toulouse) et nous affiche les informations météos suivantes :
    - La condition actuelle
    - La température actuelle
    - La température maximum du jour 0
    - La température minimum du jour 0
NOTE : vous afficherez les informations dans la div précédement créé en appelant la fonction addInfo(). Si vous n'avez pas réussi à la créer et la placer, affichez les informations dans un console.log
13) Au moment où vous affichez les informations météos, appelez la fonction bouton() 
*/

//5) Créer une div que vous stockerez dans une variable info
const info = document.createElement("div");

/*6) Donner à cette div les propriétés CSS suivantes
    - une hauteur de 300px
    - une largeur de 200px
    - un margin en haut et en bas de 16px
    - un border de 3px, solid, en gris
    - un padding en haut de 16px, à droite et à gauche de 12px, et en bas de 24px*/

info.style.height = "300px";
info.style.width = "200px";
/*info.style.marginBottom = "16px";
info.style.marginTop = "16px";*/
info.style.margin = "16px 0";
info.style.border = "3px solid grey";
/*info.style.borderWidth = "3px";
info.style.borderStyle = "solid";
info.style.borderColor = "grey";*/
info.style.padding = "16px 12px 24px";

//7) Insérer cette div dans la div cardMeteo, avant le bouton
const parent = document.querySelector('.cardMeteo');
const child = document.querySelector('button');
parent.insertBefore(info,child);

//8) Créer une fonction addInfo() qui va ajouter du texte à la div précédement créée
function addInfo(text){
    info.innerText = text;
}

//9) Créer une fonction bouton() qui ajoute la class "button__cardMeteo" à notre bouton html
function bouton(){
    //child.className = "button__cardMeteo";
    //child.setAttribute("class","button__cardMeteo");
    child.classList.add("button__cardMeteo");
}

//10) Faire en sorte que lorsqu'on maintien le click de la souris (event mousedown) sur le bouton charger, sa couleur de fond devient orange
child.addEventListener("mousedown",event =>{
    child.style.background = "orange";
})

//11) Faire en sorte que lorsqu'on relâche le click de la souris (event mouseup) n'importe où, cela annule la couleur précedente
document.addEventListener("mouseup",event=>{
    child.style.background = "";
})

/*12) Faire en sorte que lorsqu'on clique (event click) sur le bouton charger, cela interroge l'API météo (https://prevision-meteo.ch/services/json/toulouse) et nous affiche les informations météos suivantes :
    - La condition actuelle
    - La température actuelle
    - La température maximum du jour 0
    - La température minimum du jour 0
NOTE : vous afficherez les informations dans la div précédement créé en appelant la fonction addInfo(). Si vous n'avez pas réussi à la créer et la placer, affichez les informations dans un console.log*/

child.addEventListener("click",event=>{
    //SYNTAXE FETCH() .THEN()
    fetch('https://prevision-meteo.ch/services/json/toulouse')
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data =>{
            console.log(data);

            let string =`
            La condition actuelle : ${data.current_condition.condition}

            La température actuelle : ${data.current_condition.tmp}

            La température maximum : ${data.fcst_day_0.tmax}

            La température minimum : ${data.fcst_day_0.tmin}
            `;

            addInfo(string);

            //13) Au moment où vous affichez les informations météos, appelez la fonction bouton() 
            bouton();
        })
        .catch(error => {
            addInfo(error);
        })

        //SYNTAXE ASYNC... AWAIT
        /*async function meteo(){
            try{
                let response = await fetch('https://prevision-meteo.ch/services/json/toulouse');

                let data = await response.json();

                let string =`
                La condition actuelle : ${data.current_condition.condition}

                La température actuelle : ${data.current_condition.tmp}

                La température maximum : ${data.fcst_day_0.tmax}

                La température minimum : ${data.fcst_day_0.tmin}
                `;

                addInfo(string);

                //13) Au moment où vous affichez les informations météos, appelez la fonction bouton() 
                bouton();
            } catch(error){
                addInfo(error);
            }
        }

        meteo();*/
})