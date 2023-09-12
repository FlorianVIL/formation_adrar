// Créer un tableau (une variable qui va contenir plusieurs valeurs)
let t = [14,85,36,123,-7];

// Les cases sont numérotées automatiquement
// La première est la numéro 0
// La deuxième est la numéro 1
// Le troisième est la numéro 2
// La quatrième est la numéro 3
// La cinquième est la numéro 4
// On peut se servir de ce numéro pour accéder à une case en particulier
// Cette case se comporte comme une variable
// Modifier la case numéro 1
t[1] = 77;
// Lire le contenu de la case numéro 3 (et l'afficher dans la console)
console.log(t[3]);

console.log(t);

// Ajouter une case à la fin du tableau
t.push(4); // Ajouter 4 à la fin du tableau t

console.log(t);

// Retirer la dernière case du tableau
t.pop();
// La fonction pop retourne une valeur -> la valeur qui a été supprimée
let sauvegarde = t.pop();
console.log("J'ai supprimé la dernière case, elle contenait :", sauvegarde);
console.log(t);

// Taille du tableau
console.log("Nombre de cases du tableau :", t.length); // Variable à lire qui correspond au nombre de cases du tableau


                    //********************************* EXEMPLE********************************//

function displayMessage(age) {
    if(age < 18) {
        console.log("Mineure");
    } else {
        console.log("Majeure");
    }
}

/*
let age1 = 13;
let age2 = 50;
let age3 = 5;
*/
let ages = [13,50,5,40,-2];

/*
displayMessage(age1);
displayMessage(age2);
displayMessage(age3);
*/

/*
displayMessage(ages[0]);
displayMessage(ages[1]);
displayMessage(ages[2]);
*/

for(let i = 0 ; i < ages.length ; i++) {
    displayMessage(ages[i]);
}