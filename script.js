const container = document.getElementById('product-container');

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        
        container.innerHTML = ''; 
        
        products.forEach(item => {
            const card = `
                <div class="card">
                    <span class="card-category">${item.category}</span>
                    <img src="${item.image}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p class="price">$${item.price}</p>
                    <button class="btn-buy">Add to Cart</button>
                </div>
            `;
            container.innerHTML += card;
        });
    } catch (error) {
        container.innerHTML = '<div class="loader">Gagal memuat produk. Periksa koneksi internet Anda.</div>';
        console.error("Error:", error);
    }
}

fetchProducts();