let MatTypes = [
    [1,1,1,1,1,1,1,1,1,1,1,1,0.5,0,1,1,0.5,1],              // normal
    [1,0.5,0.5,2,1,2,1,1,1,1,1,2,0.5,1,0.5,1,2,1],          // feu
    [1,2,0.5,0.5,1,1,1,1,2,1,1,1,2,1,0.5,1,1,1],            // eau
    [1,0.5,2,0.5,1,1,1,0.5,2,0.5,1,0.5,2,1,0.5,1,0.5,1],    // plante
    [1,1,2,0.5,0.5,1,1,1,0,2,1,1,1,1,0.5,1,1,1],            // electric
    [1,0.5,0.5,2,1,0.5,1,1,2,2,1,1,1,1,2,1,0.5,1],          // glace
    [2,1,1,1,1,2,1,0.5,1,0.5,0.5,0.5,2,0,1,2,2,0.5],        // combat
    [1,1,1,2,1,1,1,0.5,0.5,1,1,1,0.5,0.5,1,1,0,2],          // poison
    [1,2,1,0.5,2,1,1,2,1,0,1,0.5,2,1,1,1,2,1],              // sol
    [1,1,1,2,0.5,1,2,1,1,1,1,2,0.5,1,1,1,0.5,1],            // vol
    [1,1,1,1,1,1,2,2,1,1,0.5,1,1,1,1,0,0.5,1],              // psy
    [1,0.5,1,2,1,1,0.5,0.5,1,0.5,2,1,1,0.5,1,2,0.5,0.5],    // insect
    [1,2,1,1,1,2,0.5,1,0.5,2,1,2,1,1,1,1,0.5,1],            // roche
    [0,1,1,1,1,1,1,1,1,1,2,1,1,2,1,0.5,1,1],                // spectre
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,0.5,0],                // dragon
    [1,1,1,1,1,1,0.5,1,1,1,2,1,1,2,1,0.5,1,0.5],            // tenebre
    [1,0.5,0.5,1,0.5,2,1,1,1,1,1,1,2,1,1,1,0.5,2],          // acier
    [1,0.5,1,1,1,1,2,0.5,1,1,1,1,1,1,2,2,0.5,1],            // fee
];
let TabTypes = ["normal","feu","eau","plante","electric","glace","combat","poison","sol","vol","psy","insect","roche","spectre","dragon","tenebre","acier","fee"];


function TypeToIndex(type){
    return TabTypes.findIndex(name => name === type);
}

function GetFactorWithName(attaquant, defenseur){
    if(Array.isArray(defenseur)){
        let sum = 1;
        defenseur.forEach(elem => {
            sum = sum * MatTypes[TypeToIndex(attaquant)][TypeToIndex(elem)];
        });
        return sum;
    }
    return MatTypes[TypeToIndex(attaquant)][TypeToIndex(defenseur)];
}

function GetFactorWithId(attaquantID, defenseurID){
    if(Array.isArray(defenseurID)){
        let sum = 1;
        defenseurID.forEach(elem => {
            sum = sum * MatTypes[attaquantID][elem];
        });
        return sum;
    }
    return MatTypes[attaquantID][defenseurID];
}

function FactorToString(factor){
    switch(factor){
        case 0:
            return "n'affecte pas";
        case 0.5:
            return "pas très efficace";
        case 1:
            return "efficace";
        case 2:
            return "super efficace";
        default:
            return factor;
    }
}