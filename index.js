let fcAktobe= { 
    coach: "Carlo Ancelotti",
    captain: "Carles Puyol",
    stadium: "Central Stadium",
    capacity: 100000,
    players: ["Lionel Messi", "Cristiano Ronaldo", "Neymar", "Ronaldinho", "Xavi", "Zinnedine Zidane", "Andreas Iniesta", "Sergio Busquets", "Carles Puyol", "Virgil Van Dijk", "Roberto Carlos", "Dani Alves", "Neuer"],
    league: "KPL",
    president: "Samat Smakov",
}

fcAktobe.captain = "Xavi";
delete fcAktobe.capacity;

console.log(fcAktobe);


let vehicle = {};
vehicle.brandName = "BMW";
vehicle.model = "X5";
vehicle.model = "M1";
delete vehicle.model;



let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}
let result = 0;
for (let key in salaries){
    result += salaries[key]
}
console.log(result);
