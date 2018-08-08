
function gotoProduct(cat){
    window.location.href = "../Views/product.html?cat=" + cat;
};

function gotoDetail(pid){
    window.location.href = "../Views/productDetail.html?pid=" + pid;
};

// // function expression
// function addToCart(){

// };

var data = {
  cardList: [
    {
      pid: "cr01",
      qty: "2",
      product: "Medium Soft Shell Crab",
      price: "25.00"
    },
    {
      pid: "oy02",
      qty: "4",
      product: "Half Shell Oysters",
      price: "43.95"
    },
    {
      pid: "sc02",
      qty: "1",
      product: "Orange Scallops",
      price: "43.95"
    }
  ],
  cartDetails: {
    totalQty: 0,
    totalPrice: 0
    }
};

// function declaration
var addToCart = function(pid){
    console.log('productId:', pid);

    seaFoodStore.forEach((el) => {
        if (el.productID == pid){

            var cardObj = {
                pid: pid,
                qty: '1',
                product: el.product,
                price: el.price
            }
            data.cardList.push(cardObj);        
        }
    });
};

data.cardList.forEach((el)=>{
    data.cartDetails.totalQty += parseInt(el.qty);
    data.cartDetails.totalPrice += parseInt(el.qty) * parseFloat(el.price);    
});

