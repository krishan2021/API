const Product=require("../models/Product")

const getAllProducts = async(req, res)=>{
let {_id, company, name, price, rating, select}=req.query
const queryObject={};
if(_id){
    queryObject._id=_id;
}
if(company){
    queryObject.company=company;
}
if(name){
    queryObject.name=name;
}
if(price){
    queryObject.price=price;
}
if(rating){
    queryObject.rating=rating;
}

let apiData=Product.find(queryObject)

    // const myData=await Product.find({})
    //curly bracket me name:"iphone dal denge to vhi milega bs means filteration"
    // const myData=await Product.find({})
    if(select){
        let selectFix=select.split(",").join(" ");
        apiData=apiData.select(selectFix);
       
    }
    const myData=await apiData
    res.status(200).json(myData)
   
}

const getAllProductsTesting=async(req, res)=>{
    const myData=await Product.find(req.query)
    res.status(200).json({myData})
}

module.exports={getAllProducts, getAllProductsTesting }