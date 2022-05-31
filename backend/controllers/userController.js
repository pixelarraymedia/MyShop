const router = express.Router()
import asyncHandler from 'express-async-handler'
import User from '../models/productModel.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  public

const authUser = asyncHandler (async (req, res) => {

const {email, password} = req.body
res.send(email,password)
})


export { authUser }