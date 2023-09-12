// https://pydefis.callicode.fr/defis/VitesseLumiere/txt
let x = 997;
let y = 312;
let z = 663;
let counter = 0;

while(10*x > y) {
    x = (y*z)%10000;
    y = (3*z)%10000;
    z = (7*z)%10000;
    counter++;
}

console.log(x, y, z);
console.log("J'ai fait", counter, "tours de boucle.");

// https://pydefis.callicode.fr/defis/SpymasterBomb/txt
function findStarkCode(n) {
    let total = 0;

    // Pour i qui compte de 0 à n (de 1 en 1)
    for(let i = 0 ; i < n ; i++) {
        if(i%3 == 0 || i%5 == 0) {
            total += i;
        }
    }
    return total;
}

console.log("Test");
console.log("Le résultat est", findStarkCode(20));
console.log("La bonne réponse est 78");

console.log("Vrai problème");
console.log("Le résultat est", findStarkCode(1435));