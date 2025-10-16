 // berkomunikasi dengan database
 // kemudahan kalau mau ganti ORM edit file ini saja

 const prisma = require("./db");
const { getProductById } = require("./product.service");


 const findProducts = async () => {
    const products = await prisma.product.findMany()

    return products;
 }

 const findProductById = async (id)=> {
    const product = await prisma.product.findUnique({
        where: {
            id,
        }
    })

    return product
 }

 const findProductByName = async (name) => {
            const product = await prisma.product.findFirst({
        where: {
           name,
        }
    })

    return product
 }

 const insertProduct = async (newProductData) => {
        const product = await prisma.product.create({
        data: {
            name: newProductData.name,
            description: newProductData.description,
           image: newProductData.image,
             price: newProductData.price
        },
    });

    return product;
 }

 const deleteProduct = async (id) =>{

    await prisma.product.delete({
        where: {
            id,
        }
    })
 }


 const editProduct = async (id, productData) => {
    const product = await prisma.product.update({
        where : {
            id: parseInt(id),
        },
        data: {
            description: productData.description,
            description: productData.image,
            description: productData.name,
            description: productData.price,
        }
    })
}

 module.exports = {
    findProducts,
    findProductById,
    insertProduct,
    findProductByName,
    deleteProduct,
    editProduct
 }