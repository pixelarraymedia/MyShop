import express from 'express'
const router = express.Router()
import generateToken from '../utils/generateToken.js'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  public

const authUser = asyncHandler (async (req, res) => {

    const {email, password} = req.body

    const user = await User.findOne({ email });


    // here we are matching plain text password with our encrypted password
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })

    } else {
        res.status(401)
        throw new Error('invalid email or password')
    }
})

    // @desc    Auth user & get token
    // @route   GET /api/users/profile
    // @access  Private

const getUserProfile = asyncHandler (async (req, res) => {

        res.send('success')

// const user = await User.findById( req.user._id )

    
//         if(user && (await user.matchPassword(password))) {
//             res.json({
//                 _id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 isAdmin: user.isAdmin,
//                 token: generateToken(user._id),
//             })

//         } else {
//             res.status(401)
//             throw new Error('invalid email or password')
//         }

    })




export { authUser, getUserProfile }