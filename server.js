//create express app
const exp = require("express");
const app = exp();
require('dotenv').config()
//assign port numnrt
const port=process.env.PORT||4000;
app.listen(port, () => console.log("server listening on port 4000..."));



const path=require("path")
//connect express with react build
app.use(exp.static(path.join(__dirname,'./build')))

//Get mongo client
const mclient=require("mongodb").MongoClient;

//connect to MongoDB server
mclient.connect('mongodb://0.0.0.0:27017')
.then(dbRef=>{
  //get database obj
  let dbObj=dbRef.db('demodb')
  //create collection objects
  let userCollection=dbObj.collection("userscollection")
  let productCollection=dbObj.collection("productscollection")

  //share collections objects to APIs
  app.set("userCollection",userCollection)
  app.set("productCollection",productCollection)

  console.log("Connected to DB successfully")
})
.catch(err=>console.log("database connection err is ",err))




//import userApp and productApp
const userApp = require("./APIs/userApi");
const productApp = require("./APIs/productApi");

//forward request to userApi when url path starts with /user-api
app.use("/user-api", userApp);
//forward request to productApi when url path starts with /product-api
app.use("/product-api", productApp);


//middleware to deal with page refresh
const pageRefresh=(request,response,next)=>{
  response.sendFile(path.join(__dirname,'./build/index.html'))
}
app.use("*",pageRefresh)




//create a middleware to handle invalid path
const invalidPathHandlingMiddleware = (request, response, next) => {
  response.send({ message: "Invalid path" });
};

app.use(invalidPathHandlingMiddleware);

//create err handling middleware
const errHandler = (error, request, response, next) => {
  response.send({ "error-message": error.message });
};
app.use(errHandler);
