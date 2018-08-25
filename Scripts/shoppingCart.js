
var test123 = '123';

// iffy
// iife - Immediately Invoked Function Expression
var ShoppingCart = (function(){
    testabc: 'abc';

    addToCart: pid => {
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

    calcTotal: _ => {
        data.cardList.forEach((el)=>{
            data.cartDetails.totalQty += parseInt(el.qty);
            data.cartDetails.totalPrice += parseInt(el.qty) * parseFloat(el.price);    
        });        
    }

    return {
        addToCart: addToCart,
        calcTotal: calcTotal 
    }
})()
