var originalFlavors = ["Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
   "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond"]

// Task 1: Confirm that the array is exactly 31 flavors. Your function should accept:

// console.log(originalFlavors.length)
// if (originalFlavors.length == 31) {
//     console.log("True!");
//   }
//   else { console.log("False!"); 
//        }

function is31Flavors(originalFlavors) {
    if (originalFlavors.length == 31 ) {
        return true; 
    }
    else {
        return false;
    }
}

console.log(is31Flavors(originalFlavors));

// Task 2: Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor. 

// function addFlavor(flavor, originalFlavors) {
//     originalFlavors.unshift(flavor);
// }
// addFlavor("Rainbow Sherbert", originalFlavors);
// console.log(originalFlavors);

// This one asks for the name of the flavor, so it's more versatile.

var newFlavor = prompt("What is the name of the new flavor?");

function addFlavor(flavor, originalFlavors) {
    originalFlavors.unshift(flavor);
}

addFlavor(newFlavor, originalFlavors);

console.log(originalFlavors);

// Task 3: Houston, we have a problem! There are now 32 flavors in the array! Your task is to remove an item from the end of the array. 

function removeLastFlavor(originalFlavors){
    originalFlavors.pop()
}

removeLastFlavor(originalFlavors);

console.log(originalFlavors); //Goodbye, Vanilla Burnt Almond!

// Task 4: Write a function that returns a flavor at a given index in the array.

var flavorPicker = prompt("What number do you pick? 0-30");

function getFlavorByIndex(arr, i) {
    var arr = originalFlavors;
}

console.log(originalFlavors[flavorPicker]);

// Task 5: As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that flavor from the array. 

var flavorRemoval = prompt("What flavor would you like to remove?"); 

function removeFlavorByName(arr, flavor) {
    for(let i = 0; i < arr.length; i++) {
        if(flavor === arr[i]) {
            arr.splice(i, 1)
        }
    }
    return arr;
}
console.log("You chose to remove " + flavorRemoval);
console.log("The remaining flavors are: " + removeFlavorByName(originalFlavors, flavorRemoval)); //Looks ugly due to no spaces.

// Task 6: With all of these changes going on, we don't want to lose track of the actual, original 31 flavors. Write a function called copy that makes a copy of the array. 

//Can be done without a function? Can't figure out how to get the newFlavors out to console.log of a function.

newFlavors = [...originalFlavors];
console.log(newFlavors);



// Task 7: July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. Write a function that checks every item in the array for a given string and returns a new array called filteredArray with just these values. Rather than hardcoding "chocolate" into your function, pass a string as a parameter, and invoke with the argument "chocolate". This way you could also filter for "Vanilla", "Sherbert", etc. when those holidays roll around.

var flavorTown = prompt("What flavor are you looking for?");

function filterByWord(originalFlavors, chosenWord) {
  
    filteredFlavors = [];
    for(let i = 0; i < originalFlavors.length; i++) {
      
      if(originalFlavors[i].includes(chosenWord)) {
        
      filteredFlavors.push(originalFlavors[i]);
        
      }
    }
    return filteredFlavors;
  }
  
console.log("You searched for: " + flavorTown);
console.log(filterByWord(originalFlavors, flavorTown));



/* 🧁🍦🍨 STRETCH 🍨🍦🍫*/ 

/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with originalFlavors.

Your function should accept: 

(1) an array

and should return the average number of words per item in the array. 

For example, getAverageWordLength(originalFlavors) should return a number between 0 and 3. */

function getAverageWordLength(/*code here*/){

    /*code here*/

}


/* STRETCH 2: Baskin Robins now offers new flavors, seasonal flavors, and even regional flavors. Write a function that will randomly select a total of 31 flavors from originalFlavors, currentFlavors, seasonalFlavors, and regionalFlavors.

Your function should accept 4 different arrays,

and should return a new array called randomFlavors with a length 31.

forExample, getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors) might return ["Strawberry Cheesecake", "Eggnog,"..."Chocolate"].*/

// Data ⬇️
var newFlavors = ["Date night",
    "U.S.S Butterscotch (Stranger Things special)",
    "Honey Almond",
    "Mint Chocolate Chip",
    "Chocolate",
    "Oreo® Cookies'n Cream",
    "Chocolate Chip",
    "Pralines 'n Cream",
    "Very Berry Strawberry",
    "Chocolate Chip Cookie Dough",
    "Old Fashioned Butter Pecan",
    "Jamoca®",
    "Jamoca® Almond Fudge",
    "Reese's® Peanut Butter Cup",
    "Rocky Road",
    "Peanut Butter ’n Chocolate",
    "Gold Medal Ribbon®",
    "World Class® Chocolate",
    "Cherries Jubilee",
    "Chocolate Fudge",
    "Daiquiri Ice",
    "Rainbow Sherbet",
    "Rainbow Swirl"] 
var seasonalFlavors = ["America's Birthday Cake",
    "Baseball Nut®",
    "Blueberry Cheesecake",
    "Bourbon Street Pecan Pie",
    "Brownie Bar Mashup",
    "Cherry Cordial with Kisses",
    "Chocolate Mousse Royale",
    "French Vanilla",
    "Eggnog",
    "German Chocolate Cake",
    "Icing on the Cake",
    "Love Potion #31",
    "New York Cheesecake",
    "Nutty Coconut",
    "Peppermint",
    "Strawberry Cheesecake",
    "Rock ’n Pop Swirl",
    "Reese’s Peanut Butter Cup",
    "Trick Oreo Treat",
    "Winter White Chocolate",
    "made with Snickers®",
    "made with M&M's®",
    "Heath®",
    "Mango Tango",]
var regionalFlavors = ["Pink Bubblegum",
    "Caramel Macchiato",
    "York Peppermint Pattie",
    "Cotton Candy",
    "Orange Sherbet",
    "Grape Ice",
    "Watermelon Ice",
    "Miami Vice Sorbet",
    "Splish Splash®",
    "Wild 'n Reckless Sherbet",
    "Lemon Custard",
    "Oregon Blackberry",
    "Bananas ‘n Strawberries",
    "Mississippi Mud",
    "Rum Raisin",
    "Creole Cream Cheese",
    "Chocolate Almond",
    "Fudge Brownie",
    "Banana Nut",
    "Black Walnut",
    "Cotton Candy Crackle",
    "Quarterback Crunch",
    "Chocolate Chocolate Chip Cheesecake",
    "Caramel 'n' Cookies"]

function getRandomFlavors(/*code here*/){

    /*code here*/

}
