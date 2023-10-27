

                       /*****************
                       *!Exercice n°19
                       *****************/
let question19 = document.createElement("p");
document.body.appendChild(question19);
question19.innerText = "Question 19";

let titre = document.createElement("h1");
document.body.appendChild(titre);
titre.innerText = "D.O.M events";
titre.addEventListener("click",()=>{
    titre.innerText = "--:)--"
} );

let div19 = document.createElement("div");
 document.body.appendChild(div19);
 div19.appendChild(titre);

                       /*****************
                       *!Exercice n°20
                       *****************/
// Je crée l'élément paragraphe
let question20 = document.createElement("p");

// j'ajouter ma balise dans le body
document.body.appendChild(question20);

// grace a innerText je rajoute le texte dans ma balise
question20.innerText = "Question 20";

// je crée une div
 let div20 = document.createElement("div");


 document.body.appendChild(div20);


 let titre20 = document.createElement("h1");
 document.body.appendChild(titre20);
 titre20.innerText = "D.O.M events";

//  je crée une balise lien (a)
let ajoutClasse = document.createElement('a')
ajoutClasse.innerText = `Ajouter Classe `;

// quand un lien n'a pas de url on fait ça
ajoutClasse.setAttribute("href","");

let supClasse = document.createElement('a')
supClasse.innerText = `Supprimer Classe `;
supClasse.setAttribute("href","")

 let toogle = document.createElement('a');
 toogle.innerText ="toogle Classe";
toogle.setAttribute("href","");

 div20.append(titre20,ajoutClasse,supClasse,toogle);


 ajoutClasse.addEventListener("click",function(event){
    event.preventDefault();
    titre20.classList.add("ajouter")
} );

supClasse.addEventListener("click",function(eventSup){
    eventSup.preventDefault();
    titre20.classList.remove("ajouter")
});

toogle.addEventListener("click",function(eventToggle){
    eventToggle.preventDefault();
    titre20.classList.toggle("ajouter")
});


                       /*****************
                       *!correction n°20
                       *****************/
                    //   si on a utilise le html
const ajouter = document.getElementsByTagName("button")[0];
const supprimer = document.getElementsByTagName("button")[1];
const toggle = document.getElementsByTagName("button")[2];

ajouter.addEventListener("click",()=>{
    titre.classList.add("text");
})

supprimer.addEventListener("click",()=>{
    titre.classList.remove("text");
})

toggle.addEventListener("click",()=>{
    titre.classList.toggle("text");
})                      

                       /*****************
                       *!Exercice n°21
                       *****************/
document.addEventListener("click",(event)=>{
    console.log(event);
    let x = event.pageX;
    let y = event.pageY;
    const img = document.createElement("img");
    img.setAttribute("src","https://picsum.photos/200/300");
    document.body.appendChild(img);
    img.style.top = y+"px";
    img.style.left = x+"px";
})                      


                       /*****************
                       *!Exercice Bonus
                       *****************/
let raquette = document.querySelector("#raquette");

document.addEventListener("mousemove",(event)=>{
    console.log(event);
    raquette.style.top = (event.pageY-25)+"px";
    raquette.style.left = (event.pageX-50)+"px";
})  