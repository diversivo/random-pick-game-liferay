var participants = [
    "Nasir Poole",
    "Matilda Burns",
    "Latoya Monaghan",
    "Bethan Mohamed",
    "Yvette Mccarty",
    "Ellise Knox",
    "Stevie Sargent",
    "Isabella-Rose Blackwell",
    "Marcus Dunlap",
    "Aman Chaney","Nasir Poole",
    "Matilda Burns",
    "Latoya Monaghan",
    "Bethan Mohamed",
    "Yvette Mccarty",
    "Ellise Knox",
    "Stevie Sargent",
    "Isabella-Rose Blackwell",
    "Marcus Dunlap",
    "Aman Chaney",
    "Nasir Poole",
    "Matilda Burns",
    "Latoya Monaghan",
    "Bethan Mohamed",
    "Yvette Mccarty",
    "Ellise Knox",
    "Stevie Sargent",
    "Isabella-Rose Blackwell",
    "Marcus Dunlap",
    "Aman Chaney",
    "Jaydn Tucker",
    "Kris Grey",
    "Mack Plummer",
    "Franco Gibbs",
    "Gracie-May Peterson",
    "Lucinda Kennedy",
];

var participant = document.getElementById('js-participant')
var winner = document.getElementById('js-winner');

// Dentro de esta variable se inyectará a los concursantes
var counter = 0;

function change() {
    participant.innerHTML = `
    <p class="text--participant">${participants[counter]}</p>
    `
    counter++;
    if (counter >= participants.length) {
      counter = 0;
      //clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
};

var ganador = Math.floor(Math.random() * participants.length);

function escoger() {
    winner.innerHTML = `
    <p class="text--participant">${participants[ganador]}</p>
    `
    participant.classList.add("ocult");
    winner.classList.add("text--participant--select");
}

var ejecutar = function ejecutar() {
    var inst = setInterval(change, 90);
    var isnt2 = setInterval(escoger, 8000);
}


var adios = function adios(){
    var stageOne = document.getElementById('js-stage--one');
    stageOne.classList.add("ocult");
    console.log('adios')
};