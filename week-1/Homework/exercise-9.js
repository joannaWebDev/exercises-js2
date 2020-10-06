/*
E-commerce
You have to create an e-commerce shopping cart
First of all we need 2 arrays, 
the list of available products and the list of products introduced in the shopping cart.
/*1. Fill the products list with at least 4 products, what attributes de we have? 
at least should have:
var product = {
  id:
  name:
  price:
  stock:
}
id is a unique number that identifies each product*/
var product1 = {
  id: 1,
  name: "Toaster X56 Plus",
  price: 12.98,
  stock: 105
};
var product2 = {
  id: 2,
  name: "Watch Rocker",
  price: 9.99,
  stock: 2
};

var products = [];
// { id: 1, name: 'Toaster X56 Plus', price: 12.98, stock: 105 },
// { id: 2, name: 'Watch Rocker', price: 9.99, stock: 2 }

products.push(product1);
products.push(product2);

var shoppingCart = {
  totalPrice: 0,
  selectedProducts: []
};

/*3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice*/
function addToShoppingCart(id){
  let product = products.find((item) => {
    return item.id === id;
  });
/*4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore*/
function removeFromShoppingCart(id) {
  let product = products.find((item) => {
    return item.id === id;
  });
  shoppingCart.totalPrice -= product.price;

  let indexOfProduct = shoppingCart.selectedProducts.indexOf(product.name);
  shoppingCart.selectedProducts.splice(indexOfProduct, 1);
  shoppingCart.productsOnCart.splice(indexOfProduct, 1);
}
/*5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products*/
function shop() {
  shoppingCart.productsOnCart.forEach((item) => {
    item.stock--;
  });
  shoppingCart.totalPrice = 0;
  shoppingCart.selectedProducts = [];
  shoppingCart.productsOnCart = [];
}
/*6. If there is not enough stock, the product cannot be added to the shopping cart*/
if (product.stock > 0) {
  shoppingCart.totalPrice += product.price;
  shoppingCart.selectedProducts.push(product.name);
  shoppingCart.productsOnCart.push(product);
} else {
  console.log(
    `Sorry, the product ${product.name} is out of stock. Try a bit later.`
  );
}
}
//results
addToShoppingCart(1);
console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(2);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(4);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
removeFromShoppingCart(2);
console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));