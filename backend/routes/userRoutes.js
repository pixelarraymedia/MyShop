import express from 'express'
const router = express.Router()
import {
authUser,
 registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'
import { rateLimit } from 'express-rate-limit'

 const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many login attempts, please try again later"
 });


router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', limiter , authUser, (req, res) => {

}); 
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser)



export default router



