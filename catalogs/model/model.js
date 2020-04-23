const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema(
    {
        productName : {
            type : String
        },
        manufacturer : {
            type  : String
        },
        productImageLink : {
            type : String
        },
        category : {
            type : String,
            enum : ['grocery', 'electronics', 'medicine']
        },
        productDetails : {
            type : String
        },
        subCategory : {
            type : String
        },
        distributor : {
            type: String
        },
        InStock : {
            type: Boolean
        },
        price  : Number,
        IsDeleted : {
            type : Boolean,
            default : false
        }
    },{versionKey: false}
)
    

module.exports = mongoose.model("Catalog", productsSchema);