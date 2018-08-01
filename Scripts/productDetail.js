var qString = window.location.href;
// console.log("href:", qString);

var a = qString.split("?")[1];
// console.log("parm:",a);

var b = a.split("=")[1];
// console.log("value:", b);

var productItem = [];

seaFoodStore.forEach( el => {
    if (el.productID == b){
        productItem.push(el);
    }
});

var card = productItem[0];
var mainDiv = document.getElementById("mainDiv");
var template = mainDiv.innerHTML;
mainDiv.innerHTML = Mustache.render(template, card)
