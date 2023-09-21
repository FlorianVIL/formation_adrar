CREATE DATABASE if not exists carloc;
USE carloc;


/*Les responsables d’agences ont pour attributs leurs noms, 
prénoms, téléphones et mails et ville de l’agence sous sa responsabilité.*/
CREATE TABLE if not exists responsable(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
nom VARCHAR(50) NOT NULL, 
prenom VARCHAR(50) NOT NULL, 
phone VARCHAR(12),
email VARCHAR(100),
ville VARCHAR(100)
);

/*Les locaux ont pour caractéristiques une adresse avec rue, ville et code postal.*/
CREATE TABLE if not exists agence (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
rue VARCHAR(100), 
ville VARCHAR(100) NOT NULL,
code_postal CHAR(5) NOT null
);

/*Les voitures peuvent être louées ou non, elles ont également une marque, une couleur et 
peuvent être prises et rendues dans n’importe laquelle de mes agences.*/
CREATE TABLE if not exists voiture(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
marque VARCHAR(50) NOT NULL,
couleur VARCHAR(50),
is_louee BOOLEAN DEFAULT FALSE
);

CREATE TABLE if not exists voiture_agence(
id_voiture INT, 
id_agence INT, 
date_depart DATE NOT NULL,
duree_location INT DEFAULT 0, 
FOREIGN KEY (id_voiture) REFERENCES voiture(id),
FOREIGN KEY (id_agence) REFERENCES agence(id),
PRIMARY KEY(id_voiture,id_agence,date_depart)
);

insert into agence(rue,ville,code_postal)
values("avenue bloblocar", "toukilou", "22222");
insert into responsable  