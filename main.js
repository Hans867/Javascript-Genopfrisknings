// Øvelse 1: Avancerede Arrays

function findSumOfEvenNumbers(inputArray) {
    // Brug filter til at finde alle lige tal
    const evenNumbers = inputArray.filter(number => number % 2 === 0);

    // Brug reduce til at finde summen af de lige tal
    const sumOfEvenNumbers = evenNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sumOfEvenNumbers;
}

// Test funktionen med det givne array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = findSumOfEvenNumbers(numbers);

console.log("Summen af alle lige tal i arrayet er:", result);

// Øvelse 2: Arrow Funktioner

const greet = (name) => "Hello, " + name;

// Øvelse 3: DOM Manipulation

// Hent alle <p> elementer ved hjælp af querySelectorAll
const paragraphs = document.querySelectorAll("p");

// Gå igennem hvert <p> element og ændre tekstfarven til blå
paragraphs.forEach(paragraph => {
    paragraph.style.color = "blue";
});

// Øvelse 4: Avancerede Objekter

function createCar(brand, model, year) {
    const car = {
        brand: brand,
        model: model,
        year: year,
        getFullName: function() {
            return this.brand + " " + this.model;
        }
    };

    return car;
}

const myCar = createCar("Toyota", "Corolla", 2020);
console.log(myCar.getFullName()); // Output: "Toyota Corolla"

// Øvelse 5: Avancerede Loops

function convertToUpperCase(arr) {
    const result = [];

    for (const fruit of arr) {
        result.push(fruit.toUpperCase());
    }

    return result;
}

const fruits = ["apple", "banana", "cherry"];
const uppercaseFruits = convertToUpperCase(fruits);

console.log(uppercaseFruits); // Output: ["APPLE", "BANANA", "CHERRY"]

// Øvelse 6: Funktioner med Default Parametre

function multiply(a, b = 10) {
    return a * b;
}

// Eksempel på brug af funktionen med kun ét argument
const result1 = multiply(5); // b tager standardværdi på 10
console.log(result1); // Output: 50

// Eksempel på brug af funktionen med begge argumenter
const result2 = multiply(5, 3); // b får den specificerede værdi 3
console.log(result2); // Output: 15

// Øvelse 7: DOM Events

// Hent knappen ved hjælp af dens id
const myButton = document.getElementById("button");

// Tilføj en klikhændelse til knappen med en anonym funktion
myButton.addEventListener("click", function() {
    alert("364 days until pretzel day")
});

// Øvelse 8: Destructuring Arrays

function destructureArray(arr) {
    // Destructuring de første tre elementer i arrayet
    const [firstColor, secondColor, thirdColor] = arr;

    // Udskriv de individuelle variabler
    console.log("Første farve:", firstColor);
    console.log("Anden farve:", secondColor);
    console.log("Tredje farve:", thirdColor);
}

const colors = ["red", "green", "blue", "yellow", "purple"];
destructureArray(colors);

// Øvelse 9: Destructuring Objekter

function destructureObject(obj) {
    // Destructuring egenskaberne name og age fra objektet
    const { name, age } = obj;

    // Udskriv de individuelle variabler
    console.log("Navn:", name);
    console.log("Alder:", age);
}

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

destructureObject(person);

// Øvelse 10: Spread Operator

function combineArrays(arr1, arr2) {
    const combinedArray = [...arr1, ...arr2];
    return combinedArray;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = combineArrays(arr1, arr2);

console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Øvelse 11: Callback Funktioner

function callFunction(fn) {
    fn();
}

function greetings () {
    console.log("Hello!");
}

// Kalder funktionen callFunction og sender greet-funktionen som argument
callFunction(greetings); // Dette vil kalde greet-funktionen, og "Hello!" vil blive udskrevet i konsollen

// Øvelse 12: Promise og Async/Await

function waitForIt() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!");
        }, 2000);
    });
}

async function waitForPromise() {
    try {
        const result = await waitForIt();
        console.log(result); // "Done!" vil blive udskrevet efter 2 sekunder
    } catch (error) {
        console.error(error);
    }
}

// Kald funktionen waitForPromise for at starte venteprocessen
waitForPromise();

// Øvelse 13: DOM Manipulation med Arrays

const names = ["Alice", "Bob", "Charlie","Hans"];

function createNameList(namesArray) {
    const nameList = document.getElementById("nameList");

    namesArray.forEach(name => {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        nameList.appendChild(listItem);
    });
}

createNameList(names);

// Øvelse 14: Event Delegation

// Hent det overordnede element, hvor knapperne er inde i
const buttonContainer = document.getElementById("buttonContainer");

// Tilføj en klikhændelse til det overordnede element
buttonContainer.addEventListener("click", function (event) {
    // Tjek om det klikkede element er en knap (<button>)
    if (event.target.tagName === "BUTTON") {
        // Håndter klik på knappen her
        const buttonText = event.target.textContent;
        console.log("Knapklik: " + buttonText);
    }
});

// Øvelse 15: Avancerede Funktioner

function multiplier(factor) {
    // Den indre funktion, der multiplicerer tallet med faktoren
    function multiply(number) {
        return number * factor;
    }

    return multiply;
}

// Opret en funktion, der multiplicerer med faktoren 5
const multiplyBy5 = multiplier(5);

// Brug den oprettede funktion til at multiplicere et tal med faktoren 5
const resultOfMultiply = multiplyBy5(10); // Resultatet bliver 50 (10 * 5)

console.log(resultOfMultiply);




