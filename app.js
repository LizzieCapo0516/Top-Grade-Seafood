var mainbody = document.getElementById ("mainBody");

var crabStore = 
[
    {"product": "Jumbo Crab", "price":"36.95"},
    {"product": "Blue Crab", "price":"33.95"},
    {"product": "Green Crab", "price":"23.95"},
    {"product": "Yellow Crab", "price":"43.95"},
    {"product": "Yellow Crab", "price":"43.95"},
    {"product": "Yellow Crab", "price":"43.95"},
];

var cardRow = "";

var cardDeck = "<div class='card-deck'>"
var card = "<div class='card'>"
var cardBody = "<div class='card-body'>"

var closeDiv = "</div>"

var num = 0;

crabStore.forEach(function(e){

    var cardOut = "";
    var newRow = "";

    var prod = "<h5 class='card-title'>" + e.product + "</h5>";
    var price =  "<p class='card-text'>Price: " + e.price + "</p>";

    num++;
    var rem = num % 3;
    console.log("remainder: " + rem);

    if (rem == 0){
        newRow =  "<div class='row'>"
        closeRow = "</div>";  
    }
    else {
        newRow = "";
        closeRow = "";
    }
 
    console.log("newRow: " + newRow);

    cardOut = card + cardBody + prod + price + closeDiv + closeDiv;
    cardRow = newRow + cardOut + closeRow;

    console.log("row: " + cardOut);
    
});

mainbody.innerHTML = cardDeck + cardOut + closeDiv;


