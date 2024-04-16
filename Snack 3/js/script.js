const automobili = [
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
    { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
    { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
    { marca: "Audi", modello: "A3", alimentazione: "diesel" },
    { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
  ];


// const autoBenzina = automobili.filter((curAuto) => curAuto.alimentazione === "benzina");
// const autoDiesel = automobili.filter((curAuto) => curAuto.alimentazione === "diesel");
// const autoResto = automobili.filter((curAuto) => curAuto.alimentazione != "benzina" || curAuto.alimentazione !="diesel");
// non corretto perche cosi scorriamo l'array tutte le volte per ogni filter piu corretto forEach


let autoBenzina=[];
let autoDiesel=[];
let autoResto=[];
automobili.forEach((curAuto) => {
    switch (curAuto.alimentazione) {
        case "benzina":{
            autoBenzina.push(curAuto);break;
        };
        case "diesel":{
            autoDiesel.push(curAuto);break;
        };
        case "elettrico":{
            autoResto.push(curAuto);break;
        };
        case "gpl":{
            autoResto.push(curAuto);break;
        };
        case "metano":{
            autoResto.push(curAuto);break;   // usare 3 case per pushare in autoResto. non esistono case con condizioni multiple.
        };
    };
});

console.log(autoBenzina);
console.log(autoDiesel);
console.log(autoResto);

