const express=require('express')

const aicontroler=require("../controller/ai.controller")


const router=express.Router()

router.post("/get-review",aicontroler.getreview)

module.exports=router