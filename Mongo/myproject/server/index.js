import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import './db'
import Product from './models/Product'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})

app.get('/api/products', async(req, res) => {
    try{
        const products = await Product.find({})
        res.json(products)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

app.get('/api/products/:id', async(req, res) => {
    try{
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

app.post('/api/products', async(req, res) => {
    try{
        const product = new Product(req.body)
        await product.save()
        res.json(product)
    } catch (err) {
        res.status(500).json
    }
})