
// Function literal
var ShoppingCart = {

        getShoppingCartFromLocalStorage: _ => {
            return JSON.parse(localStorage.getItem('cart'));
        },

        addToCart: pid => {

            var cartLS = [];
            console.log('productId:', pid);
        
            seaFoodStore.forEach((el) => {
                if (el.productID == pid){
        
                    var cardObj = {
                        pid: pid,
                        qty: '1',
                        product: el.product,
                        price: el.price
                    }
                    cartLS = ShoppingCart.getShoppingCartFromLocalStorage();
                    cartLS.push(cardObj);  
                    localStorage.setItem('cart',JSON.stringify(cartLS));      
                }
            });
        },
    
        calcTotal: cart => {

            var totalQty = 0;
            var totalPrice = 0;

            cart.forEach((el)=>{
                totalQty += parseInt(el.qty);
                totalPrice += parseInt(el.qty) * parseFloat(el.price);    
            });  
            
            return {
                'totalQty': totalQty,
                'totalPrice': totalPrice
            }
        }
}
