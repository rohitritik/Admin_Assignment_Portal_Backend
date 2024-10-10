import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from './routes/userRouter.js';
import assignmentRoutes from './routes/assignmentRoutes.js';
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();
dotenv.config({path: "./config/config.env"}); 

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods:["GET", "POST", "DELETE", "PUT"],
    credentials:true,
}));

app.use(cookieParser());
app.use(express.json());   //only pass json format otherwise neglect
app.use(express.urlencoded({extended:true})); //string to json format

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/assignment', assignmentRoutes);


dbConnection();

app.use(errorMiddleware);

export default app;



 