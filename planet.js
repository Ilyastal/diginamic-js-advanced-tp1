'use strict'
module.exports = class Planet{
    constructor({name, population}){
        this.name = name;
        this.population = population;
    }
    static countPlanetsPopulation(planet){
        let somme = 0 ;
        planet.forEach(plan => {
            if (plan.population !== 'unknown'){
                somme += parseInt(plan.population);
            }
        });
        return somme;
    }
}