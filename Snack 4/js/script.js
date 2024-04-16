const persone = [
    {
        nome: "pippo",
        cognome: "rossi",
        eta: "17",
    },
    {
        nome: "pluto",
        cognome: "verdi",
        eta: "21",
    },
    {
        nome: "paperino",
        cognome: "gialli",
        eta: "10",
    },
];
let personeMagg=[];
let personeMin=[];
persone.forEach((curElem) => {
    if(curElem.eta >= 18){
        personeMagg.push(curElem);
    } else{
        personeMin.push(curElem);
    }
});
console.log("persone che possono guidare",personeMagg);
console.log("persone che non possono guidare",personeMin);