const axios = require('axios');
let Planet = require('./planet');
let promesse = new Promise((resolve, reject) => {
    const planet =[] ;
    let url = 'https://swapi.co/api/planets/';
        axios.get(url)
        .then((response) => {
            let resultas = response.data.results; 
            resultas.forEach(plan => {
                planet.push(new Planet({name: plan.name,population: plan.population }));   
            });
            resolve(planet);
        })
        .catch(function (error) {
            console.log(error);
        })
});
promesse.then((data) => {
    // affichage souhaiter
    data.forEach(planet =>{
         console.log(`Planet: ${planet.name} - Population: ${planet.population}`);
      });
      //affichage objet data qui a que name et population. 
    // console.log(data);
    console.log(`Population total : ${Planet.countPlanetsPopulation(data)}`);    
});