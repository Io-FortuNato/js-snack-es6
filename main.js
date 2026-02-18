// array di oggetti (bici)
const bici = [
    { nome: "Bianchi", peso: 7 },
    { nome: "Rossi", peso: 8 },
    { nome: "Verdi", peso: 9 },
    { nome: "Brancaleone", peso: 6 },
];

// bici più leggera 
let biciLight = bici[0];
for (let i = 1; i < bici.length; i++) {
    if (bici[i].peso < biciLight.peso) {
        biciLight = bici[i];
    }
}

// risultato 
 const risultato =
    document.getElementById("risultato");
    risultato.innerHTML = `
    <p>La bici più leggera è <strong>${
        biciLight.nome
    }</strong></p>
    <p>Peso: ${biciLight.peso} kg</p>
    `;
