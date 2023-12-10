import {getAllDoctors,getSingleDoctors, deleteDoctor ,updateDoctors} from "../Controllers/doctorController.js" 
import express from "express"
import { authenticate,restrict } from "../auth/verifyToken.js"
import reviewRouter from "./review.js"

const router = express.Router()


router.use('/:doctorId/reviews',reviewRouter)
router.get('/:id',getSingleDoctors)
router.get('/',getAllDoctors)
router.put('/:id',updateDoctors,authenticate,restrict(["doctor"]))
router.delete('/:id',deleteDoctor,restrict(["doctor"]),authenticate)

export default router