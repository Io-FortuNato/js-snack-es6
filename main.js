const squadre = [
    { nome: "Realmadrid", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
];

//funzione numero random 
function getRandomNumber(min, max) {
    return Math.floor(Math.random() *
(max - min + 1)) + min;
}

// sostituzione dei numeri 0
for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = 
    getRandomNumber(0, 100);
    squadre[i].falliSubiti =
    getRandomNumber(0, 50);
}

//array nomi e falli subiti 
const squadreFalli = [];
for (let i = 0; i < squadre.length; i++) {
    squadreFalli.push({
        nome: squadre[i].nome,
        falliSubiti:
        squadre[i].falliSubiti
    });
}

//stampa in html 
const tutteSquadreDiv =
document.getElementById("tutteSquadre");
const soloFalliDiv = 
document.getElementById("soloFalli")

//stampa primo array
for (let i = 0; i < squadre.length; i++) {
    tutteSquadreDiv.innerHTML +=
    "<p>" +
    squadre[i].nome +
    " - Punti: " + 
    squadre[i].puntiFatti +
    " - Falli subiti: " +
    squadre[i].falliSubiti +
    "</p>";
}
//stampa secondo array
for (let i = 0; i < squadreFalli.length; i++) {
    soloFalliDiv.innerHTML +=
    "<p>" + 
        squadreFalli[i].nome +
        " - Falli subiti: " +
        squadreFalli[i].falliSubiti +
    "</p>";
}