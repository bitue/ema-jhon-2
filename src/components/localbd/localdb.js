
let objectOfKeys ={}
const cartToLocal = (arrayOfCart) => {
    if (arrayOfCart.length) {
        let array_of_cart_JSON = JSON.stringify(arrayOfCart)
        localStorage.setItem('shopping_cart', array_of_cart_JSON)


    }


}





const check_local_storage = () => {
    if (localStorage.getItem('shopping_cart')) {
        let cart = JSON.parse(localStorage.getItem('shopping_cart'))
        return cart
    }
    else {
        return {}
    }
}

export { cartToLocal, check_local_storage }
