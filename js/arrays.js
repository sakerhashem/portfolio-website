/*const languages = [
  "PHP",
  "C++",
  "JavaScript",
  "Python",
  "Java"
];

console.log(languages);

console.log(`Aantal talen: ${languages.length}`);
console.log(`Eerste taal: ${languages[0]}`);
console.log(`Laatste taal: ${languages[languages.length - 1]}`);

for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}

languages.push("TypeScript");

console.log("Na push():");

for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}

const films = [ 
    "The Wolf of Wall Street",
    "The Godfather",
    "The Dark Knight",
    "Inception",
    "Pulp Fiction",
    "Forrest Gump",
    "The Matrix"
];

console.log(films);
films.forEach(film => {
    console.log(film);
});

films.forEach((film, index) => {
    console.log(`${index + 1}. ${film}`);
});

films.forEach((film, index) => {
    if ((index + 1) % 2 === 0) {
        console.log(`${index + 1}. ${film}`);
    }
});


// map
const prices = [15, 22, 8, 49, 30];
const pricesHigher = prices.map((price) => price + 10);
console.log(prices);
console.log(pricesHigher);
const pricesWithTax = prices.map(price =>
    Number((price * 1.21).toFixed(2))
);
console.log(pricesWithTax);

const languages = [
    "php",
    "javascript",
    "python",
    "java"
];
const upperCaseLanguages = languages.map(language => language.toUpperCase());
console.log(upperCaseLanguages);

const numberedLanguages = languages.map((language, index) => {
    return `${index + 1}. ${language.toUpperCase()}`;
});

console.log(numberedLanguages);


// filters
// oefening 1
const ages = [12, 17, 18, 25, 14, 31, 65];
const adults = ages.filter(age => age >= 18);
console.log(adults);
// oefening 2
const scores = [55, 82, 91, 40, 67, 100, 73];
const higherScores = scores.filter(score => score >= 70);
console.log(higherScores);
// oefening 3
const languages = [
    "PHP",
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "C++"
];

const startWithJ = languages.filter(language => language.startsWith('J'));
console.log(startWithJ);
const longLanguages = languages.filter(language => language.length > 4);
console.log(longLanguages);
// extra uitdaging
const prices = [15, 22, 8, 49, 30];
const increasedPrices = prices
    .filter(price => price >= 20)
    .map(price => price + 10);

console.log(increasedPrices);

// find
// oefening 1
const ages = [12, 17, 18, 25, 14, 31, 65];
const firstAdult = ages.find(age => age >= 18);
console.log(firstAdult);

// oefening 2
const scores = [55, 82, 91, 40, 67, 100, 73];
const firstHighScore = scores.find(score => score > 90);
console.log(firstHighScore);

// oefening 3
const languages = [
    "PHP",
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "C++"
];
const firstLanguageWithJ = languages.find(language => language.startsWith('J'));
const firstLongLanguage = languages.find(language => language.length > 8);
console.log(firstLanguageWithJ);
console.log(firstLongLanguage);

// extra uitdaging
const prices = [15, 22, 8, 49, 30];
const firstPriceAbove25 = prices.find(price => price > 25);
console.log(`Gevonden prijs: ${firstPriceAbove25}`);


// objects
// oefening 1
const person = {
    firstName: "Tom",
    lastName: "Smith",
    age: 20,
    city: "Brussels"
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.city);

// oefening 2
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person["city"]);

// oefening 3
person.age = 40;
console.log(person);

// oefening 4
person.profession = "Full Stack Developer";
console.log(person);

// extra uitdaging
const car = {
    brand: "BMW",
    model: "320i",
    year: 2022,
    electric: false
};
console.log(`De ${car.brand} ${car.model} is gebouwd in ${car.year}.`);
console.table(car);
*/

// arrays van objecten
// oefening 1
const users = [
    {
        id: 1,
        name: "Tom",
        age: 40,
        active: true
    },
    {
        id: 2,
        name: "Lisa",
        age: 28,
        active: false
    },
    {
        id: 3,
        name: "John",
        age: 35,
        active: true
    },
    {
        id: 4,
        name: "Emma",
        age: 22,
        active: true
    }
];
users.forEach(user => {
    console.log(`${user.name} (${user.age})`);
});

// oefening 2
const names = users.map(user => user.name);
console.log(names);

// oefening 3
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);

// oefening 4
const specificUser = users.find(user => user.id ===3);
console.log(`Gebruiker gevonden: ${specificUser.name}`);

// extra uitdaging
users.forEach(user => {
    console.log(`${user.name} is ${user.age} jaar oud.`);
});