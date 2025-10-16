// Layer untuk handle request dan respons
// handle validasi body
const express =require('express');
const prisma = require("./db");
const { getAllProducts, getProductById, createProduct, deleteProductById, editProductById } = require('./product.service');

const router = express.Router();

router.get("/", async (req, res)=> {
    const products = await getAllProducts();

    res.send(products)
})

router.get("/:id", async (req, res)=>{
    try {
        const productId = parseInt(req.params.id)
       const product = await getProductById(parseInt(productId));
    
    res.send(product);
        
    } catch (err) {
        res.status(400).send(err.massage);
    }

});

router.post("/", async (req, res) => {
    
    try {
        const newProductData = req.body;

        const product = await createProduct(newProductData);
    
        res.send({
            data: product,
            massage: "create product success!"
        })
        
    } catch (error) {
        res.status(400).send(error.massage);
    }


})

router.delete("/:id", async (req, res) => {

    try {
        const productId = req.params.id;
       
        await deleteProductById(parseInt(productId))
       
        res.send("Product Deleted!")
        
    } catch (error) {
        res.status(400).send("Product not found!");
    }
})

router.put("/:id", async (req, res)=> {;
    const productId = req.params.id;
    const productData = req.body;

    if(!(
        productData.image &&
        productData.description &&
        productData.name &&
        productData.price
    )) {
        return res.status(400).send("Some field are missing!")
    }


   const product = await editProductById(parseInt(productId), productData);

    res.send({
        data: product,
        massage: "Edit product succses!"
    })
})

router.patch("/:id", async (req, res)=>{ 

    try {
        const productId = req.params.id;
     const productData = req.body;
    
     const product = await editProductById(parseInt(productId), productData);
             
    
     res.send({
         data: product,
         massage: "Edit product succses!"
     })
        
    } catch (err) {
       res.status(400).send(err.massage) 
    }
})

module.exports = router;