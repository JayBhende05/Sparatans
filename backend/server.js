import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import packageRoute from "./routes/packageRoute.js"
import adminRoute from "./routes/adminRoute.js"
import cors from 'cors'

//configure env 
dotenv.config()

//database config
connectDB();

//rest object
const app = express();

//middleware 
app.use(express.json())
app.use(cors())

//routes

app.use("/api/v1/auth", authRoutes)
app.use('/api/v1/package', packageRoute );
app.use('/api/v1/admin', adminRoute);

const PORT = process.env.PORT || 8000;

//run listen
app.listen(PORT, ()=>{
    console.log(`Server Running on ${PORT}`);
});