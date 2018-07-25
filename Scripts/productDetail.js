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

var imgTag = document.getElementById("productImg");
imgTag.src = productItem[0].image;

var product = productItem[0].product;
document.getElementById("prodTitle").innerHTML = product;

var price = productItem[0].price;
document.getElementById("prodPrice").innerHTML = price;