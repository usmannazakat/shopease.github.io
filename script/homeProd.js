
const popularProduct = [
    {
        id: 'pop-Prod1',
        image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
        name: 'athletic cotton socks 6 pairs',
        price: 18,
    },
    {
        id: 'pop-Prod2',
        image: 'images/products/blackout-curtains-black.jpg',
        name: 'blackout curtains black',
        price: 20,
    },
    {
        id: 'pop-Prod3',
        image: 'images/products/trash-can-with-foot-pedal-50-liter.jpg',
        name: 'trash can with foot pedal 50 liter',
        price: 13,
    },
    {
        id: 'pop-Prod4',
        image: 'images/products/black-2-slot-toaster.jpg',
        name: 'black 2 slot toaster',
        price: 15,
    },
    {
        id: 'pop-Prod5',
        image: 'images/products/cotton-bath-towels-teal.webp',
        name: 'cotton bath towels teal',
        price: 12,
    },
    {
        id: 'pop-Prod6',
        image: 'images/products/countertop-blender-64-oz.jpg',
        name: 'countertop blender 64 oz',
        price: 24,
    },
    {
        id: 'pop-Prod7',
        image: 'images/products/women-chunky-beanie-gray.webp',
        name: 'women chunky beanie gray',
        price: 9,
    },

];



var popProductsHTML = '';


popularProduct.forEach((product) => {
    popProductsHTML +=`
    <div class="product">
    <a onclick="prodDetail('${product.name}')">
        <div class="p-img">
            <img src="${product.image}" alt="">
        </div>
        <div class="p-det">
            <p>${product.name}</p>
            <p>$${product.price}.00</p>
        </div>
    </a>
        <div class="p-btn">
            <button onclick="addToCart('${product.name}', '${product.price}', '${product.image}')">Add to Cart</button>
        </div>
    </div>
    `;
});

const popProductSec = document.querySelector('.popular-products');

popProductSec.innerHTML = popProductsHTML;




// UNDER 20 DOLLAR PRODUCTS

const under20prod = [
    
    {
        id: 'pop-Prod1',
        image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
        name: 'athletic cotton socks 6 pairs',
        price: 18,
    },
    {
        id: 'pop-Prod2',
        image: 'images/products/blackout-curtains-black.jpg',
        name: 'blackout curtains black',
        price: 20,
    },
    {
        id: 'pop-Prod3',
        image: 'images/products/trash-can-with-foot-pedal-50-liter.jpg',
        name: 'trash can with foot pedal 50 liter',
        price: 13,
    },
    {
        id: 'pop-Prod4',
        image: 'images/products/black-2-slot-toaster.jpg',
        name: 'black 2 slot toaster',
        price: 15,
    },
    {
        id: 'pop-Prod5',
        image: 'images/products/cotton-bath-towels-teal.webp',
        name: 'cotton bath towels teal',
        price: 12,
    },
    {
        id: 'pop-Prod6',
        image: 'images/products/countertop-blender-64-oz.jpg',
        name: 'countertop blender 64 oz',
        price: 24,
    },
    {
        id: 'pop-Prod7',
        image: 'images/products/women-chunky-beanie-gray.webp',
        name: 'women chunky beanie gray',
        price: 9,
    },
];

const under20Sec = document.querySelector('.under-20');

var under20HTML  = '';

under20prod.forEach((product) => {

    under20HTML += `
    <div class="product">
        <a href="productDetail.html">
            <div class="p-img">
                <img src="${product.image}" alt="">
            </div>
            <div class="p-det">
                <p>${product.name}</p>
                <p>$${product.price}.00</p>
            </div>
        </a>
            <div class="p-btn">
                <button onclick="addToCart('${product.name}', '${product.price}', '${product.image}')">Add to Cart</button>
            </div>
    </div>
    `;

});

under20Sec.innerHTML = under20HTML;