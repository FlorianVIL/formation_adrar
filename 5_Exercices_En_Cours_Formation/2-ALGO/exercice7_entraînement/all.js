// Exercice all_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.
// Exemple : position_biggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1
function lePlusGrand(arrMax){
    let plusGrand = arrMax[0];
    let positionGrand = 0
    for(let i = 0; i < arrMax.length; i++){
        if (arrMax[i] > plusGrand) {
            plusGrand = arrMax[i];
            positionGrand = i;
        }    
    }
    return positionGrand
}
let tab = [1,7,23,102,2,6,888];
console.log(lePlusGrand(tab))

// Exercice all_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.
function sommeTab(arrTot){
    let result = 0;
    for(let i = 0; i < arrTot.length; i++){
        result += arrTot[i]
    }
    return result
}
let tab1 = [5,10,50,100,20,-3,70,-1,-20,-50];
console.log(sommeTab(tab1));
// Exercice all_3 : écrire une fonction qui retourne la somme des valeurs positives d'une liste.
function sommePos(arrPos){
    let sommePos = 0;
    for(let i = 0; i < arrPos.length; i++){
        if (arrPos[i] > 0) {
            sommePos += arrPos[i];
        }
    }
    return sommePos;
}
console.log(sommePos(tab1))

// Exercice all_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'une liste.
function sommeNeg(arrNeg){
    let sommeNeg = 0;
    for(let i = 0; i < arrNeg.length; i++){
        if (arrNeg[i] < 0) {
            sommeNeg += arrNeg[i];
        }
    }
    return sommeNeg;
}
console.log(sommeNeg(tab1))