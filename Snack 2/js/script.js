let team =[
    {
        name: "Boolean Fc",
        fouls: 0,
        point: 0,
    },
    {
        name: "Team124 Fc",
        fouls: 0,
        point: 0,
    },
    {
        name: "Bonvecchio Fc",
        fouls: 0,
        point: 0,
    },
];
let teams=[];
// generetate rnd number fot point and foul
team.forEach((element,index) =>{
    team[index].point = rndNumber();
    team[index].fouls = rndNumber();
    teams.push("nome squadra: ",team[index].name,"falli :",team[index].fouls);
});
//create new array with name and fouls key
const arrayprezzo = Prodotti.map((curProduct) => curProduct.price);
const newArrayTeam = team.map(({name,fouls}) => ({name,fouls}));
// print in console newArray
console.log(newArrayTeam, typeof newArrayTeam);
console.log(...teams);