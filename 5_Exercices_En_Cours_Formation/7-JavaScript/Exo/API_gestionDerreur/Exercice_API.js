fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(resultat => {
        console.log(resultat);
        
        for(let i = 0; i<20; i++){
            console.log(resultat.results[i].name);
            let pokemon = document.createElement("p");
            pokemon.innerText = resultat.results[i].name;
            document.body.appendChild(pokemon);
        }
})