const market = [
    {
        name: "Paperino",
        price: 1999,
    },
    {
        name: "Pluto",
        price: 999,
    },
    {
        name: "Pippo",
        price: 499,
    },
];
let minPrice = 0;
let minName = "";
let string = "";
market.forEach((element,index) => {
    if(minPrice > element.price || minPrice == 0){
        minPrice = element.price;
        minName = element.name;
        indice = index;
    }
    string += `
        <li><strong>Modello bici:</strong> ${element.name}</li>
        <li><strong>Prezzo :</strong> ${element.price}</li><br>
    `;    
});
document.getElementById("list").innerHTML =`
<h2>Elenco biciclette in negozio</h2>
${string}
<h3>la bicicletta che costa meno è ${minName} e costa solo ${minPrice} euro.</h3>
`;


