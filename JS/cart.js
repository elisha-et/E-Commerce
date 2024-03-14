window.onload = function() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    updateCartItemCount(totalCount);
}

function updateCartItemCount(count) {
    document.getElementById("cart-counter").textContent = count;
}

function addCart(id) {
    const confirmAction = confirm("Are you sure you want to add to cart?");
    if (confirmAction) {
        const products = JSON.parse(localStorage.getItem("products")) || [];
        const product = products.find(p => p.id === id);

        if (product) {
            const cartItem = {
                id: product.id,
                image: product.image,
                name: product.name,
                price: product.price,
                quantity: 1
            };
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            const existingItemIndex = cart.findIndex(item => item.id === id);

            if (existingItemIndex !== -1) {
                cart[existingItemIndex].quantity++;
            } else {
                cart.push(cartItem);
            }
            localStorage.setItem("cart", JSON.stringify(cart));

            updateCartItemCount(cart.reduce((total, item) => total + item.quantity, 0));
            displayProduct();
        } else {
            console.log("Product not found.");
        }
    }
}