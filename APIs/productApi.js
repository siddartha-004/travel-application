
//create mini-express app
const exp=require("express");
const productApp=exp.Router()

//CREATE PRODUCTS API
productApp.get("/get-products", (request, response) => {
  response.send({ message: "All Products" });
});

productApp.post("/create-product", (request, response) => {
  response.send({ message: "Product created" });
});

productApp.delete("/delete-product", (request, response) => {
  response.send({ message: "Product deleted" });
});


//export productApp
module.exports=productApp