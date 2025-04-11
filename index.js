import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectionDb } from "./db/db.js";
import tradeRoutes from "./routes/trade.route.js"
import userRoutes from "./routes/user.route.js"
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json())
app.use(cors({
    origin: "http://localhost:4200", // Replace with your frontend URL
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
  }));


app.use("/trade",tradeRoutes)
app.use("/user",userRoutes)

app.listen(PORT,()=>{
    connectionDb();
    console.log(`listening on port ${PORT}`);
})