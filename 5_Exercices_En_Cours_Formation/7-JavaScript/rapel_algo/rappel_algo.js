console.log("Bonjour sur Javascrip");
console.error("fatal error!");
                              /*****************
                               *!Exercice n°1 
                              *****************/  
// Déclarer, initialiser et afficher en console plusieurs variable de chaque type.
// (chaine de caractères, nombre, nombre à virgule, tableau, objet) 

// *definition d'un nombre "int"
let monAge = 29;
console.log(monAge)

// *definition de chaine de caractères dit "string"
let monNom = "florian vilatte";
console.log(monNom);

// *définition d'un nombre a virgule
let maTuneSurmoi = 10.50;
console.log(maTuneSurmoi);


// *un Objet sur ma montre :
let maMontre = {
    couleur : "bleu et bronze"
};
console.log(maMontre)

// *Définition d'un tableau
let manga = ["naruto", "deadman wonderland", "jujutsu kaisen", "chainsaw man"]
console.log(manga);


                      /*****************
                       *!Exercice n°2 
                       *****************/  
//  Mettre en place un programme qui affiche en console le résultat de différent calculs (en utilisant tous les opérateurs de base et des nombre à virgule)
//  en plus faire un console log d'un calcule ultra complexe.
//  Mettre en place un compteur et utiliser tous les opérateur d'assignement composé.

console.log(42*675);
let unChiffre = 9;
let unNombre = 33;

console.log(unChiffre*unNombre);

let resultat = unChiffre*unNombre;
console.log(resultat);

console.log(2,9+1,3);

console.log(2.9+1.3);

console.log((1+1)-(2*3)/2);

console.log(10%2);


let unCompteur = 0;
console.log(unCompteur+1);
unCompteur = 0;
unCompteur = unCompteur+1;
console.log(unCompteur);
unCompteur = 0;
//* unCompteur = unCompteur + 1
unCompteur +=1;
console.log(unCompteur);
unCompteur = 0;
//* unCompteur + 1
unCompteur ++;
console.log(unCompteur);
//* unCompteur - 1
unCompteur --;
console.log(unCompteur);
//* unCompteur = unCompteur + 10
unCompteur +=10;
console.log(unCompteur);
//* unCompteur = unCompteur x 10
unCompteur *=10;
console.log(unCompteur);
//* unCompteur = unCompteur / 10
unCompteur /=10;
console.log(unCompteur);
//* unChiffre puissance 9
console.log(unChiffre**9);

                       /*****************
                        *!Exercice n°3 
                       *****************/
// 1) Créer 2 variables sacha et pierre
// 2) assigner à sacha la valeur "pikachu"
// 3) assigner à pierre la valeur "onyx"
// 4) sans réécrire directement les valeurs "pikachu" et "onyx", inverser la valeur des 2 variables.
// (sacha doit avoir "onyx" et pierre doit avoir "pikachu")
// 5) afficher en console la valeur de sacha et de pierre         

let sacha = "pikachu";

let pierre = "onyx";
console.log(sacha, pierre);
 
let tempo = "pikachu";
 sacha = pierre;
 pierre = tempo;
 console.log(sacha,pierre);




                       /*****************
                       *!Exercice n°4 
                       *****************/  
    let maPhrase = "Bonjour";
    console.log(maPhrase);
    maPhrase = "Aujourd'hui";
    console.log(maPhrase);

//*Problème en utilisant ""
//*maPhrase = "Aujourd'hui, je vais à "MacDonald".";

//*Solution 1 : anti-slash \
    maPhrase = "Aujourd'hui, je vais à \"MacDonald\".";

//*Solution 2 : simple quote '
    maPhrase = 'Aujourd\'hui, je vais à "MacDonald".';

//*Solution 3 : backtic ou template string ` (alt-gr + 7)
    maPhrase = `Aujourd'hui, je vais à "MacDonald".`;

//*Cerise sur le gâteau : les backtic reconnaissent les sauts de lignes
    maPhrase = `Aujourd'hui, 
    je vais à "MacDonald".`;

    let bonjour = "Bonjour !";
    let accueil = "Bienvenue Compagnon !";

//*concaténation
    maPhrase = bonjour + `
    ` + accueil;
    console.log(maPhrase);

//*Truc Génial avec les Template String : insérer des variables dans une string
    maPhrase = `Hello World. ${bonjour} ${accueil} Que puis-je faire pour vous ?`;
    console.log(maPhrase);

// Débrouillez vous pour afficher en console ces 2 Phrases EXACTEMENT : 
// Bonjour mr."GINGLE" 
// Bonjour, J'aime la quiche    

let monText = `bonjour mr."GINGLE".`;
let miamMiam = `bonjour, J'aime la quiche.`;
console.log(monText);
console.log(miamMiam);


                       /*****************
                       *!Exercice n°5 
                       *****************/
// 1) Créer 3 variables : 
// Le nom (vous assigner un nom de votre choix)
// L’age (vous assigner un âge de votre choix)
// la variable phrase qui contiendra les 2 précédentes variable dans une chaine de caractères
// 2) Créer une variable phrase de bienvenue  qui affiche dans la console du navigateur :
// "Bonjour Jean-Jacques (la variable pour le nom) tu as 57(la variable pour l’âge) ans aujourd’hui, c’est la fiesta !"
 
                       
let nom = "flo le bg";
let age = 29;
let phrase = nom + age
console.log(phrase);

// *Utilisation des template string (${})
let phraseDeBienvenue =`Bonjour,je m'appelle ${nom} et j'ai ${age} ans.`
console.log(phraseDeBienvenue);


                       /*****************
                       *!Exercice n°6 
                       *****************/
// 1) Créer 1 variable pour un nom,
// 2) Créer une variable pour un âge,
// 3) Créer une variable passions qui est un tableau qui contient 2 chaînes de
// caractères (au choix)
// 4) Puis créer une variable tabUser qui est un tableau qui contient les variable du
// nom, de l'âge et passions
// 5) en Console on affiche le tabUser
// 6) en passant par tabUser on veut afficher en console uniquement les passions
// 7) en passant par tabUser on veut afficher en console uniquement la 2ème passion

// TODO question 1
let noms = "titouan";
// TODO question 2
let âge = 45;
// TODO question 3
let passions = ["manga", "jeux"];
// TODO question 4
let tabuser =[noms, âge, passions];
// TODO question 5
console.log(tabuser);
// TODO question 6
console.log(tabuser[2]);
// TODO question 7
console.log(tabuser[2][1]);


                       /*****************
                       *!Exercice n°7 
                       *****************/
// 1) créer un nouveau tableau qui contient des trucs
// 2) allez se renseigner la ƒonction push()
// 3)  utiliser push pour ajouter un nouveau truc au tableau
// 4) On affiche en console ce tableau
// 5) se renseigner sur la fonction unshift()
// 6) utiliser unshift pour ajouter 2 nouveaux trucs au début du tableau
// 7) On affiche en console ce tableau
// 8) se renseigner sur la fonction pop() et shift()
// 9) supprimer les 2 derniers éléments du tableau
// 10) On affiche en console ce tableau
// 11) supprimer le premier élément du tableau
// 12) On affiche en console ce tableau

// TODO question 1
let trucs =["machin", "bidule", "chouette","chose"];
// TODO question 2
trucs.push("alouette");
// TODO question 4
console.log(trucs);
// TODO question 6
trucs.unshift("bigbou","ouille");
// TODO question 7
console.log(trucs);
// TODO question 9
trucs.pop();
trucs.pop();
// TODO question 10
console.log(trucs);
// TODO question 11
trucs.shift();
// TODO question 12
console.log(trucs);


                       /*****************
                       *!Exercice n°8 
                       *****************/
// Une chose de particulier avec les STRING en JS, c'est qu'on peut obtenir leur taille et accéder à une lettre de la string, comme on le fait avec les tableaux

// 1)  Créer une variable qui contient un mot
// 2) Trouver un moyen d'afficher le nombre de lettre que contient ce mot dans la console du navigateur (faut trouver la longueur du mot en gros!)
// 3) Afficher en console uniquement la seconde lettre du mot
// 4) Afficher en console uniquement la dernière lettre du mot

// TODO question 1
let string ="oui";
// TODO question 2
console.log(string.length);
// TODO question 3
console.log(string.charAt(1));
// TODO question 4
console.log(string.charAt(2));
// TODO question 4 bonus (même question mais si tu ne connait pas le mots ou la taille du mots)
console.log(string[string.length-1]);

                       /*****************
                       *!Exercice n°9 
                       *****************/
// 1) Créer 2 variables leNom et lePrénom
// 2) Créer un tableau laPhrase et on y ajoute via push, Le nom ,Le prénom Les
// initiales
// 3)  Afficher le tableau dans la console, puis afficher le nom le prénom et les initiales

// TODO question 1
let leNom = "lemaire";
let lePrenom = "titouan";
// TODO question 2
let laPhrase =[];
laPhrase.push(leNom, lePrenom, leNom.charAt(0)+lePrenom[0]);
// TODO question 3
console.log(laPhrase);
console.log(laPhrase[0],laPhrase[1],laPhrase[2]);


                       /*****************
                       *!Exercice n°10 
                       *****************/
// 1) Faire l'exo avec le User et les passions (l'exercice 6) en mode objet
// (un objet user avec des propriétés pour le nom age et passions
// qui est lui aussi un objet avec 2 propriétés) 
// TODO question 1
 let user = {
    nom : "titouan",
    age : 45,
    passions :{
        manga : "naruto",
        jeuxVideo : "rocket league"
    },
 };
 console.log(user);

                       /*****************
                       *!Exercice n°11 
                       *****************/
// 1)  Créer une fonction qui reçoit un tableau de 3 notes et qui calcule une moyenne
// entre ces 3 notes
// 2) Dans cette ƒonction, SI la moyenne est supérieure ou égale à 15 on renvoi une string
// (très Bien)
// 3) Dans cette ƒonction, SINON SI la moyenne est supérieure ou égale à 10 on renvoi une
// string (assez Bien)
// 4) Dans cette ƒonction, SINON renvoi une string (refus)                     
// TODO question 1
// let moyenne =0;


function tabNote(tab) {
      let moyenne = (tab[0]+tab[1]+tab[2])/3

// TODO question 2
    if(moyenne>= 15){
        console.log("tres bien");
    }
// TODO question 3
    else if (moyenne >= 10) {
         console.log("assez bien");
    }
// TODO question 4
    else {
        console.log("refus");
    }
};

let tab =[18,2,8];
tabNote(tab);


