
var lsData = ShoppingCart.getShoppingCartFromLocalStorage();

var lsCart = {
    cardList: lsData,
    cartDetails: ShoppingCart.calcTotal(lsData)
};

var mainDiv = document.getElementById("mainDiv");
var template = mainDiv.innerHTML;
mainDiv.innerHTML = Mustache.render(template, lsCart);
