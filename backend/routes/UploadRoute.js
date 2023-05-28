const {Router}=require("express")
const uploadMiddleWare =require("../middlewares/MulterMiddleware")

const UploadModel =require("../models/UploadModel")

router.get("/api/get",async(req,res)=>{
    const allPhotos=await UploadModel.find().sort({createdAt:"descending"})
    res.send(allPhotos)
})


const router =Router();
router.post("/api/save",uploadMiddleWare.single("photo"),(req,res)=>{
   const photo =req.file.filename;

    console.log(photo);

UploadModel.create(photo)
    .then((data)=>{
        console.log("Uploaded succesfully")
        console.log(data)
        res.send(data)
    })
    .catch((err)=>{
        console.log("err")
    })

}

)


module.exports=router