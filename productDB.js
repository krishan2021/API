require("dotenv").config();
const connectDB=require("./db/Connect");
const Product=require("./models/Product");

const ProductJson=require("./products.json"); 

const start=async()=>{
    try{
     await connectDB(process.env.MONGODB_URL);
     await Product.deleteMany();   //delete krdega purana data 
     await Product.create(ProductJson);
     console.log("success");
    }catch(error){
    console.log(error);
    }
}

start();