const userData = {
	name: 'John delavega',
	email: 'john.doe@example.com',
	age: 25,
	dob: '08/02/1989',
	active: true,
	img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
	};

//Création de chaque élément HTML dont j'aurai besoin
let card = document.createElement("article");
let avatar = document.createElement("img");
let nom = document.createElement("h1");
let mail = document.createElement("p");
let age = document.createElement("p");
let birth = document.createElement("p");
let active = document.createElement("p");

//Placer nos éléments dans leur parent HTML
card.append(avatar, nom, mail, age, birth, active);
document.body.appendChild(card);

//Insérer les données dans les balises
//src de l'image :
avatar.src = userData.img;
//insérer du texte dans mes autres éléments
nom.innerText = userData.name;
mail.textContent = userData.email;
age.innerText = userData.age;
birth.innerText = userData.dob;
active.innerText = userData.active;

//TODO Mise en forme de nos éléments
// card.style.width = "300px";
// card.style.background = "linear-gradient(0.6turn,#e66465, #9198e5)";
// card.style.padding = "15px";
// card.style.color = "white";
// card.style.margin = "0 auto";
// card.style.boxShadow = "-15px 15px 15px grey";
// avatar.style.width = "100%";

// document.body.className = "article container switch";

//TODO Ajouter une class
// document.body.classList.add("wrapper");

//TODO Supprimer une class
// document.body.classList.remove("container");

//TODO Remplacer une class par une autre
// document.body.classList.replace("article","section");

//TODO Toggle d'une class : si elle existe elle la supprimer, si elle n'existe pas, elle l'ajoute
// document.body.classList.toggle("switch");

//TODO Modifier la class de ma card
// card.setAttribute("class","profil");

// avatar.setAttribute("src","https://picsum.photos/200/300");


                       /*****************
                       *!Exercice n°17
                       *****************/
// Reprendre l'exercice 17, et au lieu d'utiliser la propriété style directement en JS pour mettre en forme, définissez des règles de style dans un fichier .css (appliqué sur des class), et modifier les class de vos éléments en JS pour leur appliquer le style défini en CSS.					  

card.classList.add("card");
avatar.classList.add("avatar");