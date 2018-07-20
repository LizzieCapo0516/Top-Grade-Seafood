function loadPage(cat){
    document.title = cat + " | Top Grade Seafood";
    var productArr = [];
    // console.log("hello filter");

    seaFoodStore.forEach(
        el => {
            // console.log("category: ", el.category);
            if (el.category === cat)
            {
                productArr.push(el);
            } 
            // console.log("crab count: ", productArr.length);
        }   
    );
    
    renderPage(productArr);

};

function renderPage(productArr){

    var num = 0;
    var stack = "";
    var cardOut = "";
    var closeDiv = "</div>";
    var cardTag = "<div class='card col-4'>";
    var cardDeckTag = "<div class='card-deck mt-4'>";
    var cardBodyTag = "<div class='card-body'>";
    var mainbody = document.getElementById ("mainBody");
    
    productArr.forEach(function(el){
    
        var prod = "<h5 class='card-title'>" + el.product + "</h5>";
        var price =  "<p class='card-text'>Price: " + el.price + "</p>";
        var productDetailLink = "<a href='productDetail.html?pid=" + el.productID + "'>Details</a>";
        var cardImg = "<img class='card-img-top' src='" + el.image + "' alt='Card image cap'>";
        cardOut = cardOut + cardTag + cardImg + cardBodyTag + prod + price + productDetailLink + closeDiv + closeDiv;
    
        num++;
        var rem = num % 3;
        // console.log("remainder: " + rem);
    
        if (rem == 0 || productArr.length == num){
            stack = stack + cardDeckTag + cardOut + closeDiv;
            cardOut = "";
        }
        
    });
    
    mainbody.innerHTML = stack;
};


