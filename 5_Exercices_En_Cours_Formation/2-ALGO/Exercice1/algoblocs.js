/*
*****************************************************************************************************
                                               Algoblock-A
*****************************************************************************************************
// A1
// Initialisation
setPos(300,300);
faceDown();
changeColor(color.red);
setLineWidth(10);

// Réalisation
forward(200);
faceRight();
forward(100);


// A2
// Initialisation
setPos(300,300);
faceLeft();
changeColor(color.yellow);
setLineWidth(10)

// Réalisation
forward(100);
faceDown();
forward(100);
faceRight(),
forward(200);
faceUp(),
forward(200);


// A3
// Initialisation
setPos(300,300);
faceLeft();
changeColor(color.yellow);
setLineWidth(10);

// Réalisation
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceDown();
forward(100);
faceUp();
forward(200);


// A4
// initialisation
setPos(250,500);
faceRight();
changeColor(color.green);
setLineWidth(10);

// Réalisation
forward(100);
arcLeft(50,180);
forward(50);
arcRight(50,180);
forward(100);



// A5
// initialisation
setPos(300,200);
faceRight();
changeColor(color.fuchsia);
setLineWidth(10);

// Réalisation
arcRight(100,360);
arcRight(50,180);
arcLeft(50,180);


// A6
// Initialisation
setPos(300,300);
faceUp();
changeColor(color.blue);
setLineWidth(10);

// Réalisation
forward(50);
up(),
forward(50);
down();
forward(100);



// A7
// Initialisation
setPos(300,400);
faceDown();
changeColor(color.green);
setLineWidth(10);

// Réalisation
forward(100);
arcLeft(50,180)
forward(50),
up(),
forward(50),
down();
forward(100)
arcLeft(50,180);
forward(50);



// A8
// Initialisation
setPos(300,300);
faceUp();
changeColor(color.fuchsia);
setLineWidth(10);

// Réalisation
forward(50);
right(90)
forward(100);
right(90);
forward(200);
right(90);
forward(50);
up()
forward(50);
// Autre façon de faire(et surtout la vraie 90 ne marche que pour 60 ou 90)
right(180-90);
forward(50);
down();
forward(50);



// A9
// Initialisation
setPos(200,400);
faceRight();
changeColor(color.blue);
setLineWidth(10);

// Réalisation
arcLeft(50,180);
arcRight(50,180);
forward(200);
arcRight(50,180);
arcLeft(50,180);
faceLeft();
forward(200);

****************************************************************************************************************
                                        B-Utilisaton de For
*****************************************************************************************************************                                        

/*
// B1
// Initialisation
setPos(100,100);
changeColor(color.green);
faceRight();
setLineWidth(10);

// Réalisation
for(let i= 0; i< 4; i++) {
    forward(50);
    faceDown();
    forward(50);
    faceRight();
}



// B2
// Initialisation
setPos(100,100);
changeColor(color.red);
faceUp();
setLineWidth(10);

// Réalisation
for(let i= 0; i<4; i++) {
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceUp();
}



// B3
// Initialisation
setPos(300,300);
changeColor(color.fucshia);
faceRight();
setLineWidth(10);

// Réalisation
for(let i= 0; i< 4; i++) {
    forward(50);
    right(180-90);
}



// B4
// initialisation
setPos(300,300),
changeColor(color.blue);
faceRight();
setLineWidth(10);

// Réalisation
for(let i= 0; i< 3; i++) {
    forward(50);
    left(180-60);
}



// B5
// initialisation
setPos(300,300);
changeColor(color.yellow);
faceUp();
setLineWidth(10);

// Réalisation
forward(100);
changeColor(color.red);
for(let i= 0; i< 3; i++) {
    forward(50);
    right(180-60);
}



// B6
// Initialisation
setPos(200,400);
changeColor(color.red);
faceRight();
setLineWidth(10);

//Réalisation
for(let i= 0; i< 2; i++) {
    forward(50);
    faceUp();
    forward(50);
    faceRight();
}
changeColor(color.green);
for(let i= 0; i< 3; i++) {
    faceRight();
    forward(50);
    faceDown();
    forward(50);
}



// B7
// initialisation
setPos(300,300);
changeColor(color.yellow);
faceRight();
setLineWidth(10);

// Réalisation
for(let i= 0; i< 4; i++) {
    forward(100);
    right(90)
}
left(120-60);
for(let i=0; i<3; i++) {
    forward(100);
    right(180-60) 
}



// B8
// Initialisation
setPos(300,300);
changeColor(color.yellow);
faceRight();
setLineWidth(10);

// Réalisation
for(let i= 0; i< 8; i++) {
     forward(200);
     right(180-45);
}




// B9
// Initialisation
setPos(300,200);
changeColor(color.fuchsia);
faceRight();
setLineWidth(10);

// Réalisation
forward(50);
up();
forward(50);
down();
for(let i= 0; i< 3; i++) {
    forward(50);
    right(180-60);
}




// B10
// Initialisation
setPos(100,300);
changeColor(color.blue);
faceRight();
setLineWidth(3);

// Réalisation
for(let i= 0; i< 8; i++) {
    forward(100);
    right(180-45)
}
changeColor(color.yellow);
up();
forward(200);
down();

for(let i= 0; i< 8; i++) {
    forward(300);
    left(180-45);
}

changeColor(color.green);
up();
faceDown();
forward(100);
// faceLeft();
down();

for(let i= 0; i< 8; i++) {
   forward(100);
   right(180-45);
}




// B11
// Initialisation
setPos(300,300);
changeColor(color.red);
faceRight();
setLineWidth(5);

// Réalisation
for(let i= 0; i< 4; i++) {
    forward(50);
    left(180-90);
    forward(50);
    right(180-90);
    forward(50)
    right(180-90);
}

**********************************************************************************************************************************
                                              C-For dans des For
***********************************************************************************************************************************

/*
// C1
// Initialisation
setPos(100,300);
changeColor(color.aqua);
faceRight();
setLineWidth(5);

// Réalisation
for(let i= 0; i< 4; i++) {
    for(let j= 0; j< 3; j++) {
        forward(50)
        right(180-60);
    }
    forward(50);
}




// C2
// Initialisation
setPos(300,500);
changeColor(color.fuchsia);
faceUp();
setLineWidth(5);

// Réalisation
for(let i= 0;i< 4; i++) {
    for(let j= 0; j< 4; j++) {
        forward(50);
        right(180-90);
    }
    up();
    forward(100);
    down();
}




// C3
// Initialisation
setPos(100,300);
faceRight();
setLineWidth(5);
shiftColor(1/3)

// Réalisation
for(let i= 0; i< 3; i++) {
    for(let j= 0; j< 8; j++) {
        forward(100);
        left(180-45);
    }
    up();
    forward(200);
    down();
    shiftColor(0.20);
}




// C4
// Initialisation
setPos(50,300);
changeColor(color.red);
faceRight();
 setLineWidth(5);

// Réalisation
for(let i= 0; i< 5; i++) {
    for(let j= 0; j< 3; j++) {
        forward(50);
        left(180-60);
}
    changeColor(color.yellow);
    for(let j= 0; j< 4; j++){
        forward(50);
        right(180-90);
}
    up();
    forward(100);
    down();
    changeColor(color.red)
}




// C5 //
// Initialisation
setPos(300,300);
faceRight();
setLineWidth(5);
shiftColor(0.2);

// Réalisation
for(let i= 0; i< 4; i++) {
    for(let j= 0; j< 8; j++) {
        forward(100);
        left(180-45);
    }
right(180-90)
shiftColor(0.20)
}




// C6 //
// initialisation
setPos(200,400);
changeColor(color.yellow);
faceRight();
setLineWidth(5);

// Réalisation
for(let i= 0; i< 4; i++) {
    for(let j= 0; j< 4; j++){
        forward(100);
        left(180-60);
    }
    forward(100);
}




// C7 //
// Initialisation
setPos(300,400);
changeColor(color.yellow);
faceRight();
setLineWidth(5);

// Réalisation
for(let i= 0; i< 8; i++) {
    for(let j= 0; j< 3; j++) {
        forward(50);
        right(180-60);
    }
    forward(50);
    left(180-135);
}




// C8 //
// Initialisation
setPos(300,600);
changeColor(color.green);
faceUp();
setLineWidth(5);

// Réalisation
forward(200);
changeColor(color.yellow)
right(180-135);
forward(100);


*************************************************************************************************************************
                                         D-Utilisation des Variable et des Incrémentation
*************************************************************************************************************************

/*
setPos(100,300);
faceRight();

// Déclaration
// Création de la variable
let longueur;
// Affectation
// Affecter une valeur à une variable
// Écrire une valeur dans la variable
longueur = 100;
// Je mets 100 dans la variable longueur

// Lecture
// Regarder le contenu de la variable
longueur
// Par exemple, pour faire avancer la tortue de la valeur qui est dans la variable longueur :
forward(longueur);
faceDown();
longueur = 200;
forward(longueur);
faceRight();
longueur = 300;
forward(longueur);

// Bonus

// Initialisation
// Déclaration + affectation
let angle = 90;

// Incrémentation
// Lecture de la variable, puis une addition, puis une écriture.
longueur = longueur + 50;
longueur += 50; // Raccourci d'écriture, mais la même chose

// Dans le cas particulier où incrémente de 1 :
longueur = longueur + 1;
longueur += 1; // Pareil
longueur++; // Pareil


// D9 //

// Initialisation
setPos(300,300);
faceRight();

// Réalisation
let longueur = 50;
for(let i = 0 ; i < 6 ; i++) {
    forward(longueur);
    right(180-60);
    longueur += 50;
    // longueur = longueur + 100;
}

// D-10 : Grande spirale //

// Initialisation
setPos(300,300);
faceRight();

// Réalisation
let longueur = 50;
for(let i= 0; i< 10; i++) {
    forward(longueur);
    right(180-90);
    longueur += 25;
}



// D-11 : Décrémentation //

// Initialisation
setPos(200,300);
faceRight();

// Réalisation
let longueur =125;
for(let i= 0; i< 5; i++){
    for(let j= 0; j< 3; j++){
        forward(longueur);
        left(180-60);  
    }   
    forward(longueur);
    longueur -= 25;
}
*/


// D-12 : Escargot triangulaire //

// Initialisation