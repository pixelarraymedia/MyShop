import express from 'express'
const router = express.Router()
import {
authUser,
} from '../controllers/productController.js'


router.route('/login', authUser)


export default router



