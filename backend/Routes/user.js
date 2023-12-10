import {updateUser ,getAllUser,getSingleUser,deleteUser} from "../Controllers/userController.js" 
import express from "express"
import { authenticate , restrict } from "../auth/verifyToken.js"

const router = express.Router()
router.get('/:id',authenticate,restrict(["patient"]),getSingleUser)
router.get('/',getAllUser,restrict(["admin"]))
router.put('/:id',updateUser,restrict(["patient"]))
router.delete('/:id',deleteUser,restrict(["patient"]))

export default router