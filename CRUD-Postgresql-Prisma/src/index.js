const express =require("express");
const dotenv = require("dotenv");
// const { PrismaClient } = require("./generated/prisma/client");

// const prisma = new PrismaClient();
const app = express();

dotenv.config();


const PORT = process.env.PORT

app.use(express.json());

app.get("/api", (req, res) => {
    res.send("Hello World!");
})

const productController = require("./product/product.controller")

app.use("/products", productController)

app.listen(PORT, () => {
    console.log("Express API running in port:" + PORT)
})