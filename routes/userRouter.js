import express from "express";
import { register, login, upload, getAllAdmins } from  "../controllers/userController.js";
// import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.post("/upload", upload);  
router.get("/admin",getAllAdmins);


// router.get("/logout",logout);  //isAuthorize


export default router;