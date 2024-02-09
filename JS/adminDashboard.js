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
         <button onclick="editProduct('${product.name}')" class="editProduct">Edit Product</button>
         <button onclick="deleteProduct('${product.name}')" class="deleteProduct">Delete Product</button>
         `
 
 productList.appendChild(listItem)
     });
 }
 
 displayProduct();

 function deleteEmployee(id){
    const confirmAction = confirm("Are you sure you want to delete?");
    if(confirmAction){
        let employees = JSON.parse(localStorage.getItem("employees")) || [];
        employees = employees.filter((employee)=>employee.id !== id);
        localStorage.setItem("employees",JSON.stringify(employees));
        displayEmployee();
    }
}

function editEmployee(id){
    const confirmAction = confirm("Are you sure you want to make a change?");
    if(confirmAction){
        let employees = JSON.parse(localStorage.getItem("employees")) || [];
       const employee = employees.find((employee)=>employee.id === id);
       if(employee){
        const empName = prompt("enter the new employee name: ",employee.name);
        const newPosition = prompt("enter the new employee position: ",employee.position);

        if(empName && newPosition){
            employee.name = empName;
            employee.position = newPosition;
            localStorage.setItem("employees",JSON.stringify(employees));
            displayEmployee();
        }
       }else{
        alert("No such employee")
       }
    }
}