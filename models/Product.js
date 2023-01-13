const mongoose=require("mongoose");


const productSchema=new mongoose.Schema(
//     {

//     name:{
//         type:String,
//         required:true
//     },
//     price:{
//         type:Number,
//         required:[true, "price must be provided"]
//     },
//     feature:{
//         type:Boolean, 
//         default:false
//     },
//     rating:{
//         type:Number,
//         default:2.5,
//     },
//     createdAt:{
//         type:Date, 
//         default:Date.now()
//     },
//     company:{
//         type:String,
//         enum:{
//             values:["apple","samsung", "dell", "mi", "nokia", "asus", "lenova", "rolex"],
//             message:'{VALUE} is not supported',
//         }
//     },
// }
{

    name:{
        type:String,
        required:true
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung", "dell", "mi", "nokia", "asus", "lenova", "rolex"],
            message:'{VALUE} is not supported',
        }
    },
    price:{
        type:Number,
        required:[true, "price must be provided"]
    },
    colors:{
        type:Array
    },
    image:{
       type:Array
    },
    description:{
        type:String
    },
    category:{
        type:String
    },
    featured:{
        type:Boolean, 
        default:false
    },
    shipping:{
        type:Boolean, 
        default:true
    },
    stars:{
        type:Number
    },
    reviews:{
        type:Number,
        
    },
    stock:{
        type:Number,
    },
    createdAt:{
        type:Date, 
        default:Date.now()
    },
   
}

)

module.exports = mongoose.model("Product", productSchema)