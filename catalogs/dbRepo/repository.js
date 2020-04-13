const mongoose = require('mongoose');
mongoose.set('debug', true)

const Catalog = mongoose.model("Catalog");

const createProduct = (data) => {
    const product = new Catalog(data);
    return product.save();
}

const getAllProducts = (params) => {
    return Catalog.find(params, {"IsDeleted" : 0});
}
const getProductById = (id) => {
    product = Catalog.findOne({ _id: id , IsDeleted : false}, {"IsDeleted" : 0});
    return product
}

const deleteProduct = (id) => {
    return Catalog.updateOne({_id : id}, {IsDeleted : true})
}

const editProduct = (productID, data) => Catalog.updateOne({"_id":productID}, {$set:data})


module.exports = { createProduct, getAllProducts, getProductById, deleteProduct, editProduct };