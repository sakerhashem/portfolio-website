const naam = "Saker";
const beroep = "Full Stack Developer";
let leeftijd = 35;

console.log(naam);
console.log(beroep);
console.log(leeftijd);

leeftijd = leeftijd + 1;

console.log(leeftijd);

const land = "België";
const favorieteTaal = "PHP";
const heeftWerk = true;

console.log(land);
console.log(favorieteTaal);
console.log(heeftWerk);

function toonNaam() {
    console.log("Mijn naam is Saker");
}

toonNaam();

function toonLeeftijd() {
    console.log("Ik ben " + leeftijd + " jaar oud.");
}

toonLeeftijd();

function begroet(naam) {
    console.log("Hallo " + naam);
}

begroet("Saker");
begroet("Jan");
begroet("Marie");

leeftijd = 20;

if (leeftijd >= 18) {
    console.log("Je mag autorijden.");
} else { 
    console.log("Je bent nog te jong.");
}

if (heeftWerk) {
    console.log("Ik heb een job.");
} else {
    console.log("Ik zoek werk.");
}

const programmeertaal = "PHP";

if (programmeertaal === "PHP") {
    console.log("Goede keuze.");
} else {
    console.log("Laten we verder leren.");
}

for (let i = 1; i <= 10; i++) { // numbers from 1 to 10
    console.log(i);
}

for (let i = 2; i <= 10; i+=2) {  // even numbers from 2 to 10
    console.log(i);
}

for (let i = 1; i <= 5; i++) {  // print string 5 times
    console.log("Ik word Full Stack Developer.");
}

for (let i = 10; i > 0; i--) { // numbers from 10 to 1
    console.log(i);
}
console.log("Start!");