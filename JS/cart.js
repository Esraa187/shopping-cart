let users = JSON.parse(localStorage.getItem('users')) || [];
let addToCartBtn = document.querySelectorAll(".add-to-cart");
let items = document.getElementById("items-count")
let userName = document.getElementById("user-name")
let userEmail = document.getElementById("user-email")


userName.innerHTML = `${currentUser.name}`
userEmail.innerHTML = `${currentUser.email}`

let products = [
    { id: 1, img: "products/f1.jpg", name: 'Astrounts T-shirt', price: 10, quantity: 1 },
    { id: 2, img: "products/f2.jpg", name: 'Flower T-shirt', price: 25, quantity: 1 },
    { id: 3, img: "products/f3.jpg", name: 'Cartoon T-shirt', price: 15, quantity: 1 },
    { id: 4, img: "products/f4.jpg", name: 'Cardigan T-shirt', price: 20, quantity: 1 },
    { id: 5, img: "products/n1.jpg", name: 'Astrounts T-shirt', price: 10, quantity: 1 },
    { id: 6, img: "products/n2.jpg", name: 'Flower T-shirt', price: 25, quantity: 1 },
    { id: 7, img: "products/n3.jpg", name: 'Cartoon T-shirt', price: 15, quantity: 1 },
    { id: 8, img: "products/n5.jpg", name: 'Cardigan T-shirt', price: 20, quantity: 1 },
    { id: 9, img: "products/look-1.jpg", name: 'Astrounts T-shirt', price: 10, quantity: 1 },
    { id: 10, img: "products/look-2.jpg", name: 'Flower T-shirt', price: 25, quantity: 1 },
    { id: 11, img: "products/f6.jpg", name: 'Cartoon T-shirt', price: 15, quantity: 1 },
    { id: 12, img: "products/n8.jpg", name: 'Cardigan T-shirt', price: 20, quantity: 1 },
    { id: 13, img: "products/f8.jpg", name: 'Astrounts T-shirt', price: 10, quantity: 1 },
    { id: 14, img: "products/f5.jpg", name: 'Flower T-shirt', price: 25, quantity: 1 },
    { id: 15, img: "products/n7.jpg", name: 'Cartoon T-shirt', price: 15, quantity: 1 },
    { id: 16, img: "products/n4.jpg", name: 'Cardigan T-shirt', price: 20, quantity: 1 },
    { id: 17, img: "products/product-1.jpg", name: 'Top-Cup', price: 50, quantity: 1 },
    { id: 18, img: "products/look-5.jpg", name: 'Suit', price: 70, quantity: 1 },
    { id: 19, img: "products/product-3.jpg", name: 'Skirt', price: 30, quantity: 1 },
];

let updateLocalStorage = (user) => {
    let updateUser = users.map(us => us.email === user.email ? user : us);
    localStorage.setItem('users', JSON.stringify(updateUser));

}
let addToCart = (productId) => {

    if (currentUser) {
        let product = products.find(pro => pro.id === productId)
        let productInCart = currentUser.cart.find(item => item.id === productId);
        currentUser.items += 1
        items.innerHTML = `${currentUser.items}`
        if (productInCart) {
            productInCart.quantity += 1;
            alert("Product quantity updated in cart");
        }
        else {
            currentUser.cart.push({ ...product })
            alert(`${product.name} added to cart`);
        }
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateLocalStorage(currentUser)
    } else {
        alert("You need to sign in first!");
    }
}
addToCartBtn.forEach((btn) => {
    btn.onclick = () => {
        let parentProduct = btn.closest('.product');
        let productId = parseInt(parentProduct.getAttribute("data-id"))
        addToCart(productId)
    }
})
items.innerHTML = `${currentUser.items}`

const img1 = document.getElementById('Image2');
const img2 = document.getElementById('Image1');
const img3 = document.getElementById('Image3');
img1.onmouseover = function () {
    img1.src = 'products/look-5-1.jpg';
}
img1.onmouseout = function () {
    img1.src = 'products/look-5.jpg';
}
img2.onmouseover = function () {
    img2.src = 'products/product-1-3.jpg';
}
img2.onmouseout = function () {
    img2.src = 'products/product-1.jpg';
}
img3.onmouseover = function () {
    img3.src = 'products/product-3-3.jpg';
}
img3.onmouseout = function () {
    img3.src = 'products/product-3.jpg';
}