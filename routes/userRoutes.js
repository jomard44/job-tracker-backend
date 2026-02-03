import express from "express"
import {login,logout,register} from "../controllers/userController.js";
import auth from "../midlware/auth.js"
const userRoutes = express.Router()

userRoutes.post("/login",login)
userRoutes.post("/register",register)
userRoutes.post("/logout",auth,logout)

userRoutes.get("/me",auth,(req,res)=>{
    res.json({user: req.user})
})

export default userRoutes