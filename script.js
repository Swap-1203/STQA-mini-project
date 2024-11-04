document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});

const products = [
    { id: 1, name: 'Organic Apples', category: 'fruits', price: 3.5, popularity: 4.7, img: 'img2.jpg', rating: 4.5 },
    { id: 2, name: 'Organic Carrots', category: 'vegetables', price: 2.0, popularity: 4.2, img: 'img3.jpg', rating: 4.0 },
    { id: 3, name: 'Organic Milk', category: 'dairy', price: 5.0, popularity: 4.8, img: 'img4.jpg', rating: 4.6 },
    { id: 4, name: 'Organic Granola Bars', category: 'snacks', price: 1.5, popularity: 4.3, img: 'img5.jpg', rating: 4.2 },
    // Add more products as needed
];

function loadProducts() {
    displayProducts(products);
}

function displayProducts(products) {
    const gallery = document.getElementById('product-gallery');
    gallery.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <p class="rating">Rating: ${product.rating} ★</p>
            <button class="quick-view" onclick="showQuickView(${product.id})">Quick View</button>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        gallery.appendChild(productElement);
    });
}

function filterProducts() {
    const category = document.getElementById('category').value;
    const filteredProducts = products.filter(product => category === 'all' || product.category === category);
    displayProducts(filteredProducts);
}

function searchProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const searchedProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    displayProducts(searchedProducts);
}

function sortProducts() {
    const sortBy = document.getElementById('sort').value;
    const sortedProducts = [...products];
    if (sortBy === 'price-asc') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else {
        sortedProducts.sort((a, b) => b.popularity - a.popularity);
    }
    displayProducts(sortedProducts);
}

function showQuickView(id) {
    const product = products.find(p => p.id === id);
    alert(`Quick View: ${product.name}\nPrice: $${product.price.toFixed(2)}\nRating: ${product.rating} ★`);
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    alert(`${product.name} has been added to your cart.`);
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-GJGWJ5T07J');
