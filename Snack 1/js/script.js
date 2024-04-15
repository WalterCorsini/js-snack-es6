const market = [
    {
        name: "Paperino",
        weight: 1999,
    },
    {
        name: "Bonvecchio",
        weight: 299,
    },
    {
        name: "Pluto",
        weight: 999,
    },
    {
        name: "Pippo",
        weight: 499,
    },
];

//  save and call function createList
let stringList = createList(market);
let index = minWeightSearch(market);

// print list on DOM
document.getElementById("list").innerHTML =`
<h2>Elenco biciclette in negozio</h2>
${stringList}
`;
// print result on DOM
document.getElementById("result").innerHTML += `<span>la bici che pesa di meno nel negozio:<strong> ${market[index].name}</strong><br>pesa soltanto: <strong>${market[index].weight} kg</strong></span>`;


