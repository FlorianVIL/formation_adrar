// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function displayLast(arr) {
    let lastIndex = arr.length - 1
    console.log(arr[lastIndex]);
}
let tabTest1 = [2, 5, 7, 1, 8, 1, 9, 6, 1];
displayLast(tabTest1);
let tabTest2 = [16, 12, 61, 18, 25, 38, 72, 12, 12, 12];
displayLast(tabTest2);

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function getLast(arr) {
    return (arr[arr.length - 1]);
}

console.log(getLast(tabTest1));
console.log(getLast(tabTest2));
//on peut
console.log(getLast([14, 2, -1]));
// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function tab(arrMin) {
    let plusPetit = arrMin[0]
    for (let i = 1; i < arrMin.length; i++) {
        if (arrMin[i] < plusPetit) {
            plusPetit = arrMin[i]
        } else {

        }
    }
    return plusPetit
}

console.log(tab(tabTest1));
console.log(tab(tabTest2));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function tab(arrMax) {
    let plusGRand = arrMax[0]
    for (let i = 1; i < arrMax.length; i++) {
        if (arrMax[i] > plusGRand) {
            plusGRand = arrMax[i]
        } else {

        }
    }
    return plusGRand
}

console.log(tab(tabTest1));
console.log(tab(tabTest2));
// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function count(array, nbrChoisi) {
    let nbrRepeat = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == nbrChoisi) {
            nbrRepeat++
        }
    }
    return nbrRepeat
}

console.log(count(tabTest1, 1));
console.log(count(tabTest2, 12));
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
function trueOrFalse(array, nombre) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == nombre) {
            return true
        }
    }
    return false
}
console.log(trueOrFalse(tabTest1, 1));
console.log(trueOrFalse(tabTest2, 1));
// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].
let tab3 = [];
for (let i = 1; i <= 7777; i++) {
    tab3.push(i);
}
console.log(tab3);
// Créer un tableau qui contient [10,20,30,...,77770].
let tab4 = [];
for (let i = 10; i <= 77770; i += 10) {
    tab4.push(i);
}
console.log(tab4);
// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let tab5 = [];
for (let i = 0; i < tab4.length; i++) {
    tab5.push(tab4[i] / 2);
}
console.log(tab5);
// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12]); // doit afficher [1,45,88,54]
let tab6 = [1, 45, 88, 54, 23, -100, 12]
function tabNombre(array) {
    let lastValeur = array[array.length - 1]

    while (lastValeur < 50) {
        array.pop();
        lastValeur = array[array.length - 1];
    }

    return array;
}

console.log(tabNombre(tab6))