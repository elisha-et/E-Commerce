function addProduct(event) {
    event.preventDefault();
    const productName = document.getElementById("productName").value.trim();
    const productQuantity = document.getElementById("productQuantity").value.trim();
    const productPrice = document.getElementById("productPrice").value.trim();
    const productImage = document.getElementById("productImage").value.trim();
if(productName && productQuantity && productPrice && productImage ){

const product = {
name: productName,
quantity: productQuantity,
price: productPrice,
image: productImage,
}

let products = JSON.parse(localStorage.getItem("products")) || [];
products.push(product);
localStorage.setItem("products",JSON.stringify(products));
document.getElementById("productForm").reset();
alert("Product added successfully");
displayProduct();
}else{
    alert("All fields are required")
}
}


document.addEventListener('DOMContentLoaded', function() {
    // This code will run when the DOM is fully loaded

    const productForm = document.getElementById("productForm");

    if (productForm) {
        // Check if the element exists before adding an event listener
        productForm.addEventListener("submit", addProduct);
    }
});


function displayProduct(){
    let  productList =  document.getElementById("productList");

    productList.innerHTML = "";
     let products = JSON.parse(localStorage.getItem("products"))|| [];
     products.forEach(product => {
         const listItem = document.createElement("li");
         listItem.innerHTML = `
         <img src="img/${product.image}.jpg">
         <p class = "pname">${product.name}</p>
         <p class = "pprice">$${product.price}</p>
         <p class = "pstock">Stock: ${product.quantity}</p>
         `
 
 productList.appendChild(listItem)
     });
 }
 
 displayProduct();