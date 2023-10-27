class Imc {
    constructor(nom, poids, taille){
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
    }

    calculImc(){
        let imc = this.poids/(this.taille*this.taille);
        return imc;
    }

    display(){
        let string = `${this.nom} (${this.poids}kg, ${this.taille}m) a un IMC de : ${this.calculImc()}`;
        console.log(string);
    }
}

let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
];

function imcTab(tab){
    tab.forEach((object)=>{
        object.display();
    })
}

imcTab(list);

//          Exercice 22 : Les PME.



class Pme{
    constructor(nom,tabEmployee,revenu, fraisFixe, fraisAchat){
        this.nom = nom;
        this.tabEmployee = tabEmployee;
        this.revenu = revenu;
        this.fraisFixe = fraisFixe;
        this.fraisAchat = fraisAchat;
    }

    bilan(){
        let bilan = this.revenu - this.fraisFixe - this.fraisAchat - this.bilanEmployee();
        return bilan;
    }

    bilanEmployee(){
        let somme = 0;
        this.tabEmployee.forEach((object)=>{
            somme += object.fraisEmployee();
        })
        return somme;
    }

    bilanCalculed(){
        let coutInitial = this.fraisFixe + this.fraisAchat;
        let string=`
----------------MA PME----------------
${this.nom} : Cout Initial : ${coutInitial}
${this.nom} : Cout Total Equipe : ${this.bilanEmployee()}
${this.nom} : VENTES : ${this.revenu}
${this.nom} : BILAN : ${this.bilan()}
        `;
        console.log(string);
    }

}

class Employee{
    constructor(nom,prenom,age,salaire,mois = 12, charge = 90){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaire = salaire;
        this.mois = mois;
        this.charge = charge;
    }

    fraisEmployee(){
        //FRAIS 1 EMPLOYE = salaire*mois + salaire*mois*(charge/100)
        //                = salaire*mois*(1+(charge/100))
        let frais = this.salaire*this.mois*(1+(this.charge/100));
        return frais;
    }
}

const pme = new Pme ("Ma Petite Entreprise - ",
[new Employee ("Duval", "Paul", 30, 2000),
new Employee ("Durand", "Alain", 40, 3000),
new Employee ("Dois", "Sylvia", 50, 4000)],
300000,20000,50000);


let duval = new Employee ("Duval", "Paul", 30, 2000);
console.log(pme);

console.log(duval.fraisEmployee());
console.log(pme.bilanEmployee());
console.log(pme.bilan());

pme.bilanCalculed();
