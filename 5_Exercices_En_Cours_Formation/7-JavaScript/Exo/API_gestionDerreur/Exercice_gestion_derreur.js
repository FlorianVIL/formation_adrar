class Bank {
    constructor(name, count){
        this.name = name;
        this.count = count;
    }

    afficherCompte(){
        console.log(`
    ----------------------------
        compte : ${this.name}
        solde : ${this.count} dollars
    ----------------------------
        `);
    }

    versementCompte(montant){
        try{
            if(montant < 0){
                throw new Error("Votre montant négatif");
            }
            this.count = this.count + montant;
        }catch(error){
            console.error(error);
        }
        finally{
            this.afficherCompte();
        }
    }

    retraitCompte(montant){
        try{
            if(this.count < montant){
                throw new Error("Vous n'avez pas assez d'argent pour retirer ce montant.");
            }
            this.count = this.count - montant;
            this.afficherCompte();
        }catch(error){
            console.error(error);
            document.body.append(error);
        }
    }
}

const elon = new Bank("Elon Musk", 10000);
elon.afficherCompte();
elon.versementCompte(5200);
elon.retraitCompte(2200);
elon.retraitCompte(1000000);