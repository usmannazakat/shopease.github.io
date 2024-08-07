
let cart = [];


// Function to display cart items
function loadCartItems() {
    var cartSecion = document.querySelector('.cart-sec');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    var cartSecHTML = '';
    // Clear the cart items div
    cartSecion.innerHTML = '';
    // Display each item in the cart
    cart.forEach((item, index) => {
        cartSecHTML += `
            <div class="item-in-Cart"> 
                <div class="cart-item-img">
                    <img src="${item.Image}" alt="${item.name}" class="item-image">
                </div>
                <p class="item-name">${item.name}</p>
                <span class="item-price">$${item.price}.00</span>
                <button class="delete-btn custom-button" onclick="deleteItemFromCart(${index})">Delete</button>
            </div>
        `;

        cartSecion.innerHTML = cartSecHTML;
    });

    if (cart.length === 0) {
        cartSecion.innerHTML = `
            <div class="cart-empty">
            <p>Your Cart is Empty! <br> Start Shopping from the home page</p>
            </div>
        `;
        
    }
    updateTotalPrice();
}


// Function to add items 
function addToCart(productName, price, imageUrl) 
{
    // Initialize the cart if it doesn't exist in local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Add the item to the cart
    
  
    cart.push({ name: productName, price: price, Image: imageUrl, quantity: 1 });

    // Store the updated cart in local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    // Update the cart badge and total price
    // alert(productName + ' has been added to your cart.');
    updateCartBadge();
    updateTotalPrice();
    loadCartItems();
}

// Function to delete an item from the cart
function deleteItemFromCart(itemIndex) 
{
    // Retrieve the cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Check if the itemIndex is valid
    if (itemIndex >= 0 && itemIndex < cart.length) 
    {
        // Remove the item from the cart array
        cart.splice(itemIndex, 1);
        // Update the cart in local storage
        localStorage.setItem('cart', JSON.stringify(cart));
        // Update the cart badge and total price
        updateCartBadge();
        updateTotalPrice();
        // Reload the cart items
        loadCartItems();
    }
}






// Function to update the cart badge
function updateCartBadge() {
    const cartBadge = document.getElementById('cart-badge');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Update the badge content with the number of items in the cart
    cartBadge.textContent = cart.length.toString();
}

// Function to calculate the total price of items in the cart
function calculateTotalPrice(cart) {
    let totalPrice = 0;
    for (const item of cart) {
        totalPrice += parseFloat(item.price); // Parse the price as a float
    }
    return totalPrice;
}

// Function to update and display the total price
function updateTotalPrice() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalDiv = document.querySelector('.cart-items-price');

    let totalPrice = 0;
    const delivery = 6;

    for (const item of cart) {
        totalPrice += (parseFloat(item.price)); // Parse the price as a float and consider quantity
    }

    if (totalPrice > 0) {
        totalDiv.innerHTML = ` 
            <h3>Price of Items: $${totalPrice.toFixed(2)}</h3><br>
            <h3>Delivery: $${delivery.toFixed(2)}</h3><br>
            <h1>Total: $${(totalPrice + delivery).toFixed(2)}</h1> <br>
            <a>Check Out</a>
        `;
    } 
    else {
        totalDiv.innerHTML = ` 
            <h1>Price of Items: $${totalPrice.toFixed(2)}</h1><br>
            <h3>No Item in your Cart</h3> <br>
            <h2><a href="index.html">Start Shopping</a></h2>
            `;
    }
} 








// Call the function to update the cart badge, total price, and load cart items when the page loads
window.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    updateTotalPrice();
    loadCartItems();
});











// <select id="quantity-select-${index}" onchange="updateQuantity(${index}, this.value)">
// <option value="1">1</option>
// <option value="2">2</option>
// <option value="3">3</option>
// <option value="4">4</option>
// <option value="5">5</option>
// </select>