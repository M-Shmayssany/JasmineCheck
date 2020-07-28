
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte1.concat(texte2);
}
let afficherCar5 =  (texte) => {
    return texte.charAt(6);
}
let afficher9Car =  (texte) => {
    return texte.slice(0, 9);
}
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    return texte.trim();
}
let IsString =  (texte) => {
    if(typeof texte === 'string'){ return true; };
}

let AfficherExtensionString =  (texte) => {
    return texte.split('.')[1];
}
let NombreEspaceString =  (texte) => {
    return texte.match(/ /g).length;
}
let InverseString =  (texte) => {
    return texte.split("").reverse().join("");
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x,y);
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    return array.map(Math.abs);
}
let sufaceCercle =  (rayon) => {
    return Math.round(Math.PI * Math.pow(rayon,2));
}
let hypothenuse =  (ab, ac) => {
    return Math.sqrt(Math.pow(ab,2) + Math.pow(ac,2));
}
let calculIMC =  (poids, taille) => {
    let IMC = (poids /(taille * taille));
    return Number(IMC.toFixed(2));
}
