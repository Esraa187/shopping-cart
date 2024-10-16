let cartItemsDiv = document.getElementById('cart-items');
let totalItems = document.getElementById('total-items');
let items = document.getElementById("items-count")
let userName = document.getElementById("user-name")
let userEmail = document.getElementById("user-email")


userName.innerHTML = `${currentUser.name}`
userEmail.innerHTML = `${currentUser.email}`

let displayCart = () => {
    cartItemsDiv.innerHTML = ''
items.innerHTML=`${currentUser.items}`
    if (currentUser && currentUser.cart.length > 0) {
        currentUser.cart.forEach((item, index) => {
            let cartElemnet = document.createElement("div");
            cartElemnet.classList.add("row");
            cartElemnet.classList.add("align-items-center");
            cartElemnet.classList.add("cart-elemnet");
            cartElemnet.innerHTML =
            `
            <img src=${item.img} class="col-md-2 col-sm-3 col-3">
            <h3 class="col-md-4 col-sm-4 col-5">${item.name}</h3>
            <p class="col-md-3 col-sm-2 text-center col-2">$${item.price}</p>
            <p class="col-md-2 col-sm-2 text-center col-1">${item.quantity}</p>
            <i class="fa-solid fa-xmark col-md-1 col-1 text-center remove-from-cart" data-index=${index}></i>
            
            `
            cartItemsDiv.appendChild(cartElemnet)

        })
        updateTotalPrice()
        totalItems.innerHTML = `${currentUser.items} items`
    }
    else {
        cartItemsDiv.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        totalItems.innerHTML = ``
    }
}
let updateTotalPrice = () => {
    let totalPrice = currentUser.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    document.getElementById('total-price').textContent = `Total Price: $${totalPrice}`;
};
let removeFromCart = (index) => {
    currentUser.items-=parseInt(currentUser.cart[index].quantity)
    currentUser.cart.splice(index, 1)
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let updatedUsers = users.map(u => u.email === currentUser.email ? currentUser : u);
    localStorage.setItem('users', JSON.stringify(updatedUsers));  // Update users in localStorage
    displayCart();
    updateTotalPrice();
}
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-from-cart')) {
        let index = parseInt(e.target.getAttribute('data-index'));
        removeFromCart(index);
    }
});
displayCart()