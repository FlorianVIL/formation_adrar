                       /*****************
                       *!Exercice n°12 
                       *****************/  
// 1) côté template html rajouter plein de <p></p>
// 2) On va récupérer TOUS les <p> de notre page dans une
// variable lesTxt via getElementsByTagName
// let lesTxt = document.getElementsByTagName("p");
// => lesTxt stocke un tableau.
// 3) On va faire un console log de lesTxt 
// TODO question 2
let lesTxt = document.getElementsByTagName("p");
// TODO question 3
console.log(lesTxt);


                       /*****************
                       *!Exercice n°13
                       *****************/ 
// 1) Avec la methode Array.from()  (serenseigner dessus), dans une nouvelle variable textesTab on va transformer notre htmlCollection (la variable lesTxt) en array
// 2) On console log la variables textesTab 
// => On vient de transformer le HTMLCollection(qui contient tous nos <p>) en Array classique

// TODO question 1
let textesTab = Array.from(lesTxt);;
// TODO question 2
console.log(textesTab);


                       /*****************
                       *!Exercice n°14
                       *****************/ 
// 1) Sur textesTab on va utiliser la fonction map() (se renseigner dessus),
// 2) dans map(), on va lui passer en param une fonction fléchée qui elle a en parametre une variable temporaire (auChoix)
// 3) cette fonction fléchée elle va modifier le innerHTML ou innerText de la variable temporaire

// note : innerHTML et innerText sont des propriété de votre objet p (cet objet est stocké dans votre variable temporaire à chaque tour de boucle de map() ) 

textesTab.map((temp) => {
    temp.innerText = "Je t'ai Hacké ! Wesh ma Gueule !"
});


                       /*****************
                       *!Exercice n°15
                       *****************/ 
// 1) Créer une variable tabEleves.
// 2) Assigner à tabEleves le tableau de note suivant  [[10,16,5],[20,18,16],[5,8,9],[12,13,14],[15,16,13]]
// 3) Faire en sorte d'afficher chaque note

 // TODO question 1
 let tabEleves = [[10,16,5],[20,18,16],[5,8,9],[12,13,14],[15,16,13]];
 for(let i = 0; i<tabEleves.length; i++){
    for(let j = 0; j<tabEleves[i]; i++){
        console.log(tabEleves[i][j]);
    };
 };

//Exemple avec forEach()
tabEleves.forEach((eleve) => {
    eleve.forEach(note => console.log(note))
})

//Exemple avec For Of
for(let eleve of tabEleves){``
    for(let note of eleve){
        console.log("FOR OF : "+note);
    }
}

//Exemple avec Map()
tabEleves.map(eleve => {
    eleve.map(note => console.log("MAP : "+note))
})

                       /*****************
                       *!Exercice n°15
                       *****************/
// 1) Reprendre la variable tabEleves de l'exercice précédent
// 2) Assigner lui le tableau d'objet élèves suivant [{nom : "Norauto", ninjutsu : 10, chakra : 16, math : 5},{nom : "Suskiki", ninjutsu : 20, chakra : 18, math : 16},{nom : "Horiblemaru", ninjutsu : 5, chakra : 8, math : 9},{nom : "Gros Sourcil", ninjutsu : 12, chakra : 13, math : 14},{nom : "Sakusaku", ninjutsu : 15, chakra : 16, math : 13}]
// 3) Faire en sorte d'afficher le nom de chaque élève et chacune de ses notes

//Dans le cas où on connait l'objet en question => pas très bien
tabEleves2.map(eleve => {
    console.log("nom : "+eleve.nom);
    console.log("ninjutsu : "+eleve.ninjutsu);
    console.log("chakra : "+eleve.chakra);
    console.log("math : "+eleve.math);
});

//Dans le cas où on ne connait pas à l'avance les détails de notre objet  => Meilleur choix
tabEleves2.map(eleve => {
    for(let element in eleve){
        console.log(`FOR IN  - ${element} : ${eleve[element]}`);
    }
});
