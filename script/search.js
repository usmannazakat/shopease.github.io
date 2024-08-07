const productToSearch = [
    {
        image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
        name: 'athletic cotton socks 6 pairs',
        price: 18,
    },
    {
        image: 'images/products/blackout-curtains-black.jpg',
        name: 'blackout curtains black',
        price: 20,
    },
    {
        image: 'images/products/trash-can-with-foot-pedal-50-liter.jpg',
        name: 'trash can with foot pedal 50 liter',
        price: 13,
    },
    {
        image: 'images/products/black-2-slot-toaster.jpg',
        name: 'black 2 slot toaster',
        price: 15,
    },
    {
        image: 'images/products/cotton-bath-towels-teal.webp',
        name: 'cotton bath towels teal',
        price: 12,
    },
    {
        image: 'images/products/countertop-blender-64-oz.jpg',
        name: 'countertop blender 64 oz',
        price: 24,
    },
    {
        image: 'images/products/women-chunky-beanie-gray.webp',
        name: 'women chunky beanie gray',
        price: 9,
    },
    {
        image: '',
        name: 'Sun Glasses',
        price: 16,
    },
];




const searchInput = document.getElementById("search-input");
const smallSearchInput = document.getElementById("small-search-input");
const searchedHTML = document.querySelector(".search-area");
const searchedPage = document.querySelector(".serched-page");
const resultFor = document.querySelector(".result-for");

function toSearch()
{
    if(searchInput.value == "" && smallSearchInput.value == "")
    {
        alert("Fill input field!");
        return;
    }
    
    searchedPage.style.display = "block";
    document.body.style.overflow = 'hidden';
    document.title = `${searchInput.value}`;
    searchedHTML.innerHTML = "";

    // Search in Popular Products
    productToSearch.forEach((product) => 
    {
        if(product.name.toUpperCase().includes(searchInput.value.toUpperCase()) &&  product.name.toUpperCase().includes(smallSearchInput.value.toUpperCase()))
        {
            resultFor.innerHTML = `
                 <p>Results for <span>"${searchInput.value.toUpperCase()+ smallSearchInput.value.toUpperCase()}"</span>:
             `;
            searchedHTML.innerHTML += `
            <a class="search-product"  href="index.html">
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <p class="price">$${product.price}.00</p>
            </a>    
            `
        }
    });

    searchInput.value = "";
    smallSearchInput.value = "";

}

function closeSearchPage()
{
    // searchedPage.style.display = "none";
    // document.body.style.overflow = 'auto';
    const href = "index.html";
    window.location.href = href;

}

