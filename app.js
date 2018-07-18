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

var cardOut = "";

var cardDeck = "<div class='card-deck'>"
var card = "<div class='card'>"
var cardBody = "<div class='card-body'>"

var closeDiv = "</div>"

crabStore.forEach(function(e){
    var prod = "<h5 class='card-title'>" + e.product + "</h5>";
    var price =  "<p class='card-text'>Price: " + e.price + "</p>";
    cardOut = cardOut + card + cardBody + prod + price + closeDiv + closeDiv;
    
});

// var htmlOutput = jumboCrabOutput + blueCrabOut;

mainbody.innerHTML = cardDeck + cardOut + closeDiv;


