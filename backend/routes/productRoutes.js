import express from 'express'
const router = express.Router()
import AsyncHandler from 'express-async-handler'

import Product from '../models/productModel.js'



// @desc Fetch all products
// @route GET /api/products
// @access Fetch all products

router.get('/',

AsyncHandler(async (req, res) => {

    const products = await Product.findById(req.params.id)

    res.json(products)
})
)


// @desc Fetch all products
// @route GET /api/products
// @access Fetch all products

router.get('/:id', AsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)



    if(product){
   
    res.json(product)
    } else {

        res.status(404)
        throw new Error( 'Product Not Found' )
    }
 
})
)




export default router



