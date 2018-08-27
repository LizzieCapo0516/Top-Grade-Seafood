
// Function literal
var ShoppingCart = {

        getShoppingCartFromLocalStorage: _ => {
            return JSON.parse(localStorage.getItem('cart'));
        },

        addToCart: pid => {

            var cartLS = [];
        
            seaFoodStore.forEach((el) => { // refactor this forEach => use arryay.filter() or array.find()
                if (el.productID == pid){
        
                    var cardObj = {
                        pid: pid,
                        qty: '1',
                        product: el.product,
                        price: el.price
                    }

                    var ls = ShoppingCart.getShoppingCartFromLocalStorage();
                    if (ls)
                    {
                        cartLS = ShoppingCart.getShoppingCartFromLocalStorage();
                    }
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
