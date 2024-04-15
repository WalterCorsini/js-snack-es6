const market = [
    {
        name: "Paperino",
        price: 1999,
    },
    {
        name: "Bonvecchio",
        price: 299,
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
// declaration vavariable
let string = "";

//  save and call function createList
let stringList = createList(market);
let index = minPriceSearch(market);

// print list on DOM
document.getElementById("list").innerHTML =`
<h2>Elenco biciclette in negozio</h2>
${stringList}
`;
// print result on DOM
document.getElementById("result").innerHTML += `<span>la bici che costa meno nel negozio:<strong> ${market[index].name}</strong> al solo costo di: <strong>${market[index].price},00</strong>  euro</span>`;


