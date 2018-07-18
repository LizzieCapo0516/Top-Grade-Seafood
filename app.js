var mainbody = document.getElementById ("mainBody");

var crabStore = 
[
    {"product": "Jumbo Crab", "price":"36.95"},
    {"product": "Blue Crab", "price":"33.95"},
    {"product": "Green Crab", "price":"23.95"},
    {"product": "Yellow Crab", "price":"43.95"},
    {"product": "Yellow Crab", "price":"43.95"},
    {"product": "Yellow Crab", "price":"43.95"},
    {"product": "Yellow Crab", "price":"44.95"},
    {"product": "Yellow Crab", "price":"44.95"},
];

var num = 0;
var stack = "";
var cardOut = "";
var closeDiv = "</div>"
var cardTag = "<div class='card col-3'>"
var cardDeckTag = "<div class='card-deck mt-4'>"
var cardBodyTag = "<div class='card-body'>"

crabStore.forEach(function(e){

    var prod = "<h5 class='card-title'>" + e.product + "</h5>";
    var price =  "<p class='card-text'>Price: " + e.price + "</p>";
    cardOut = cardOut + cardTag + cardBodyTag + prod + price + closeDiv + closeDiv;

    num++;
    var rem = num % 3;
    console.log("remainder: " + rem);

    if (rem == 0 || crabStore.length == num){
        stack = stack + cardDeckTag + cardOut + closeDiv;
        cardOut = "";
    }
    
});

mainbody.innerHTML = stack;
