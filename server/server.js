import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import products from './data/products.js'
const port = process.env.PORT || 8000;

const app = express();

app.get('/api/products',(req,res)=>{
    res.json(products);
});

app.get('/api/products/:id',(req,res)=>{
    const product = products.find(product=>product._id===req.params.id)
    res.json(product);
});

app.listen(port,()=>console.log(`API is running....in port ${port}`));