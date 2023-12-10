

import Doctor from "../models/DoctorSchema.js"

export const updateDoctors = async(req,res)=>{
    const id = req.params.id

    try {
       const updatedDoctors = await User.findByIdAndUpdate(id,{$set:req.body},{new:true})
       return res.status(200).json({success:true,message:"Successfully Updated",data:updatedDoctors})



    } 
    catch (error) {
        return res.status(500).json({success:false,message:"Failed to Update"})
    }
}

export const deleteDoctor = async(req,res)=>{
    const id = req.params.id

    try {
         await User.findByIdAndDelete(id)
       return res.status(200).json({success:true,message:"Successfully Deleted"})



    } catch (error) {
        return res.status(500).json({success:false,message:"Failed to Delete"})
    }
}

export const  getSingleDoctors= async(req,res)=>{
    const id = req.params.id

    try {
       const doctor = await Doctor.findById(id).populate("reviews").select("-password")
       return res.status(200).json({success:true,message:"User Found",data:doctor})



    } catch (error) {
        return res.status(404).json({success:false,message:"User not Found"})
    }
}
export const  getAllDoctors= async(req,res)=>{


    try {

        const {query}  =req.query
        let doctors;
        if(query){
            doctors = await Doctor.find({isApproved:'approved', $or:[{name:{$regex:query,$options:"i"}}, {specialization:{$regex:query,$options:"i"}}]}).select("-password")
        }
        else{
        doctors = await Doctor.find({isApproved:'approved'}).select("-password")
       

        }
        return res.status(200).json({success:true,message:"Users Found",data:doctors})
    } catch (error) {
        return res.status(404).json({success:false,message:"Users not Found"})
    }
}
