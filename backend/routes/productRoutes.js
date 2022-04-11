import express from 'express'
const router = express.Router()
import asyncHandler from 'express-async-handler'

import Product from '../models/productModel.js'



// @desc Fetch all products
// @route GET /api/products
// @access Fetch all products

router.get('/',

asyncHandler(async (req, res) => {

    const products = await Product.find({})
 
    res.json(products)
})
)


// @desc Fetch all products
// @route GET /api/products
// @access Fetch all products

router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)



    if(product){
   
    res.json(product)
    } else {
        

        // custom error handler

        res.status(404)
        throw new Error( 'Product Not Found' )
    }
 
})
)




export default router



