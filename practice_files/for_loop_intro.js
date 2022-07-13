// Set an array
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

// Set function to have iterations from 0 through i ('i' being how long the array's length is)
// Then tell the function to print out the 'ith' value from the array
function listLoop(userList) {
    for (var i=0; i<userList.length; i++) {
        console.log(userList[i]);
    }
};

function foodLoop(namesList, foodList) {
    for (var i=0; i<namesList.length; i++) {
        console.log(namesList[i] + " loves " + foodList[i] + "!");
    }
};

// Set a for loop to print "I love []" from the vegetables array
for (var j=0; j<vegetables.length; j++) {
    console.log("I love " + vegetables[j]);
};

// Call the listLoop function with the 'friends' array
listLoop(friends);

// Call veggieLoop using names from the 'friends' array and food from the 'vegetables' array
foodLoop(friends, vegetables);

// Set a for loop that prints out a set amount of variations
for (var i=3; i<10; i++) {
    console.log("Iteration " + i);
};