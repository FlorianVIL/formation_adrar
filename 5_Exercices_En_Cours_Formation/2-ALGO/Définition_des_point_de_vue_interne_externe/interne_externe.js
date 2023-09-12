// Point de vue interne
// Créer une fonction qui s'appelle sayHello
function sayHello() {
    console.log("Hello");
}

// Point de vue externe
// J'appelle la fonction (je démarre, je la lance, je l'exécute, je l'utilise, j'appuie sur le bouton GO, ...)
sayHello();

// Point de vue interne
// On peut créer une fonction qui s'attend à recevoir une ou plusieurs informations.
// Pour ça, on met une variable dans les parenthèses. Cette variable sera créée automatiquement, et stockera la valeur transmise par l'utilisateur lors de l'appel de la fonction.
function sayHi(name) {
    console.log("Hi", name);
}
// Cette variable s'appelle un argument. On parle aussi d'entrée de la fonction.

// Point de vue externe
// J'appelle la fonction en lui donnant une valeur particulière :
sayHi("Pierre");
sayHi("Bob");

// On peut aussi créer une fonction qui donne un résultat
function triple(n) {
    return 3*n;
}
// Le return veut dire :
// - la fonction est terminée
// - le résultat est :

// Point de vue externe
triple(50); // Vaut 150
150;

console.log(triple(50));
console.log(149);



function test(n) {
    console.log("On m'a donné", n);
    let result = n+10;
    return result;
    console.log("La réponse est", result);
}

console.log("Bonjour");
test(3);
let n = 100;
test(n);
console.log(test(n));

console.log(test(test(1000)));
console.log("Au revoir");
 
