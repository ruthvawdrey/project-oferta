  // Product data
        const products = [

            { id: 2, title: "Smartphone 128GB", category: "electronics", price: 699.99, rating: 4.3, reviews: 856, image: require('./images/bathLearn.png') },
            { id: 3, title: "Cotton T-Shirt", category: "clothing", price: 19.99, rating: 4.2, reviews: 432, image: require('./images/GoAway.png') },
            { id: 4, title: "Running Shoes", category: "clothing", price: 129.99, rating: 4.6, reviews: 789, image: require('./images/Esquizo.png') },
            { id: 5, title: "Programming Cookbook", category: "books", price: 45.99, rating: 4.8, reviews: 234, image: require('./images/Esquizo.png')},
            { id: 6, title: "Mystery Novel", category: "books", price: 12.99, rating: 4.1, reviews: 567, image: require('./images/Esquizo.png') },
            { id: 7, title: "Coffee Maker", category: "home", price: 89.99, rating: 4.4, reviews: 345, image: require('./images/Esquizo.png')},
            { id: 8, title: "Plant Pot Set", category: "home", price: 24.99, rating: 4.7, reviews: 123, image: require('./images/Esquizo.png') },
            { id: 9, title: "Laptop Stand", category: "electronics", price: 39.99, rating: 4.3, reviews: 678, image: require('./images/Esquizo.png')},
            { id: 10, title: "Denim Jeans", category: "clothing", price: 59.99, rating: 4.0, reviews: 456, image: require('./images/Esquizo.png')},
            { id: 11, title: "Cookbook Collection", category: "books", price: 29.99, rating: 4.5, reviews: 321, image: require('./images/Esquizo.png') },
            { id: 12, title: "LED Desk Lamp", category: "home", price: 34.99, rating: 4.6, reviews: 234,image: require('./images/Esquizo.png') }
        ];

        let cart = [];
        let currentProducts = [...products];

        // Initialize the page
        function init() {
            displayProducts(currentProducts);
            updateCartDisplay();
        }

        // Display products
        function displayProducts(productsToShow) {
            const grid = document.getElementById('productsGrid');
            grid.innerHTML = productsToShow.map(product => `
                <div class="product-card">
                    <div class="product-image">${product.image}</div>
                    <div class="product-title">${product.title}</div>
                    <div class="product-rating">
                        <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</div>
                        <div class="rating-count">(${product.reviews})</div>
                    </div>
                    <div class="product-price">$${product.price}</div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            `).join('');
        }

        // Search products
        function searchProducts() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            currentProducts = products.filter(product => 
                product.title.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
            displayProducts(currentProducts);
        }

        // Filter by category
        function filterByCategory(category) {
            if (category === 'all') {
                currentProducts = [...products];
            } else {
                currentProducts = products.filter(product => product.category === category);
            }
            displayProducts(currentProducts);
        }

        // Sort products
        function sortProducts() {
            const sortBy = document.getElementById('sortSelect').value;
            
            switch(sortBy) {
                case 'price-low':
                    currentProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    currentProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'rating':
                    currentProducts.sort((a, b) => b.rating - a.rating);
                    break;
                default:
                    currentProducts = [...products];
            }
            displayProducts(currentProducts);
        }

        // Filter by price
        function filterByPrice() {
            const maxPrice = document.getElementById('priceRange').value;
            document.getElementById('priceValue').textContent = `$${maxPrice}`;
            
            currentProducts = products.filter(product => product.price <= maxPrice);
            displayProducts(currentProducts);
        }

        // Add to cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            updateCartDisplay();
            showAddedToCartAnimation();
        }

        // Update cart display
        function updateCartDisplay() {
            const cartCount = document.getElementById('cartCount');
            const cartItems = document.getElementById('cartItems');
            const totalPrice = document.getElementById('totalPrice');
            
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            cartCount.textContent = totalItems;
            totalPrice.textContent = `Total: $${total.toFixed(2)}`;
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 40px;">Your cart is empty</p>';
                return;
            }
            
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">${item.image}</div>
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-price">$${item.price}</div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                            <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="margin-left: 10px; color: red;">🗑️</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Update quantity
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCartDisplay();
                }
            }
        }

        // Remove from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartDisplay();
        }

        // Toggle cart sidebar
        function toggleCart() {
            const sidebar = document.getElementById('cartSidebar');
            const overlay = document.getElementById('overlay');
            
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
        }

        // Show added to cart animation
        function showAddedToCartAnimation() {
            const cartElement = document.querySelector('.cart');
            cartElement.style.transform = 'scale(1.1)';
            cartElement.style.transition = 'transform 0.2s';
            
            setTimeout(() => {
                cartElement.style.transform = 'scale(1)';
            }, 200);
        }

        // Checkout function
        function checkout() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            alert(`Thank you for your purchase! Total: $${total.toFixed(2)}\n\nThis is a demo - no actual payment processed.`);
            cart = [];
            updateCartDisplay();
            toggleCart();
        }

        // Allow Enter key for search
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });

        // Initialize the page when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);
  