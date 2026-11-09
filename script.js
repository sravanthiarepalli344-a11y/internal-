// Create Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add Product to Cart
function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart successfully!");
}

// Display Cart
function displayCart() {

    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    // Stop if not on cart page
    if (!cartItems || !totalPrice) {
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<h3>Your cart is empty.</h3>";
        totalPrice.innerHTML = "0";
        return;
    }

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `
        <div class="cart-item">
            <div>
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
            </div>

            <button onclick="removeItem(${index})">
                Remove
            </button>
        </div>
        `;
    });

    totalPrice.innerHTML = total;
}

// Remove Product
function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();
}

// Clear Cart
function clearCart(){

    cart=[];

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();
}

// Automatically Load Cart
displayCart();