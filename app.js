


function loadPage(cat){
    var crabs = [];
    console.log("hello filter");

    seaFoodStore.forEach(
        el => {
            console.log("category: ", el.category);
            if (el.category === cat)
            {
                crabs.push(el);
            } 
            console.log("crab count: ", crabs.length);
        }   
    );
    
    renderPage(crabs);

};

function renderPage(crabs){

    var num = 0;
    var stack = "";
    var cardOut = "";
    var closeDiv = "</div>"
    var cardTag = "<div class='card col-3'>"
    var cardDeckTag = "<div class='card-deck mt-4'>"
    var cardBodyTag = "<div class='card-body'>"
    var mainbody = document.getElementById ("mainBody");
    
    crabs.forEach(function(el){
    
        var prod = "<h5 class='card-title'>" + el.product + "</h5>";
        var price =  "<p class='card-text'>Price: " + el.price + "</p>";
        cardOut = cardOut + cardTag + cardBodyTag + prod + price + closeDiv + closeDiv;
    
        num++;
        var rem = num % 3;
        // console.log("remainder: " + rem);
    
        if (rem == 0 || crabs.length == num){
            stack = stack + cardDeckTag + cardOut + closeDiv;
            cardOut = "";
        }
        
    });
    
    mainbody.innerHTML = stack;
};


