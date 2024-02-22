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
         <div class="button">
         <button onclick="editProduct('${product.name}')" class="edit">Edit Product</button>
         <button onclick="deleteProduct('${product.name}')" class="delete">Delete Product</button>
         </div>
         `
 
 productList.appendChild(listItem)
     });
 }
 
 displayProduct();

 function deleteProduct(name){
    const confirmAction = confirm("Are you sure you want to delete the product?");
    if(confirmAction){
        let products = JSON.parse(localStorage.getItem("products")) || [];
        products = products.filter((product)=>product.name !== name);
        localStorage.setItem("products",JSON.stringify(products));
        displayProduct();
    }
}

function editProduct(name){
    const confirmAction = confirm("Are you sure you want to edit the product?");
    if(confirmAction){
        let products = JSON.parse(localStorage.getItem("products")) || [];
       const product = products.find((product)=>product.name === name);
       if(product){
        const newName = prompt("Enter the new product name: ",product.name);
        const newQuantity = prompt("Enter the new product quantity: ",product.quantity);
        const newPrice = prompt("Enter the new product price: ",product.price);
        const newImage = prompt("Enter the new product image: ",product.image);

        if(newName && newQuantity && newPrice && newImage){
            product.name = newName;
            product.quantity = newQuantity
            product.price = newPrice
            product.image = newImage
            localStorage.setItem("products",JSON.stringify(products));
            displayProduct();
        }
       }else{
        alert("No such product found.")
       }
    }
}