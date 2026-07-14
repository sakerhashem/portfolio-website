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