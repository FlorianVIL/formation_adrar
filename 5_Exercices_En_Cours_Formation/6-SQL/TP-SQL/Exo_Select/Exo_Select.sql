-- Question 1

SELECT ville_nom, ville_population_2012
FROM villes_france_free
ORDER BY ville_population_2012 DESC
LIMIT 10
;

-- Question 2

SELECT ville_nom, ville_surface
FROM villes_france_free
ORDER BY ville_surface ASC
limit 50;


-- Question 3

SELECT departement_nom, departement_code
FROM departement
where departement_code LIKE "97%";


-- Question 4


SELECT departement_nom, ville_nom, ville_population_2012 
FROM departement 
INNER JOIN villes_france_free ON departement.departement_code = villes_france_free.ville_departement
ORDER BY ville_population_2012 DESC
LIMIT 10;

-- question 5
 
 /*SELECT departement_nom, departement_code,ville_nom
 FROM departement dep
 INNER JOIN villes_france_free ville ON dep.departement_code = ville.ville_departement;*/
 
 SELECT departement_nom, departement_code,count(ville_nom) AS nb_total_villes
 FROM departement dep
 INNER JOIN villes_france_free ville ON dep.departement_code = ville.ville_departement
 GROUP BY departement_code
 ORDER BY nb_total_villes 
 ;
 
 -- Question 6
 
 SELECT * from departement;
 SELECT * FROM villes_france_free LIMIT 50;
 
 SELECT dep.*, SUM(ville_surface) AS superficie
 FROM departement dep
 INNER JOIN villes_france_free ville ON dep.departement_code = ville.ville_departement
 GROUP BY departement_code
 ORDER BY superficie desc
 LIMIT 10;
 
 -- question 7
 
 SELECT COUNT(*) 
 FROM villes_france_free
 WHERE ville_nom LIKE 'saint%'
 ORDER BY ville_nom asc
 
 