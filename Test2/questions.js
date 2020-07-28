let CreationTableauLangages =  () => {
    let table = [ 'Html', 'CSS', 'Java', 'PHP' ];
    return  table;
}

let CreationTableauNombres =  () => {
 let numbers = [0,1,2,3,4,5];
 return numbers;
}

let RemplacementElement =  (langages) => {
    langages[2] = 'Javascript';
    return langages;
}

let AjoutElementLangages =  (langages) => {
    langages.push("Ruby","Python");
    return langages;
}

let AjoutElementNombres =  (nombres) => {
    var other = [-2, -1];

    return other.concat(nombres);
}

let SuppressionPremierElement =  (langages) => {
    langages.shift();
    return langages;
}

let SuppressionDernierElement =  (langages) => {
    langages.pop();
    return langages;

}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    let reseaux_sociaux =  reseaux_sociaux_chaine.split(",");
    return reseaux_sociaux;
}

let ConversionTableauChaine =  (langages) => {
    let langages_chaine =  langages.toString();
    return langages_chaine;
}

let TriTableau =  (reseaux_sociaux) => {

    return reseaux_sociaux.sort();
}

let InversionTableau =  (reseaux_sociaux) =>{
 return reseaux_sociaux.reverse();
}
