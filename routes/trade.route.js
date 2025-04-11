import express from "express";
import { addTrade,  getAllTradesForUser } from "../controllers/trade.controller.js";
const app = express();
const router = express.Router();
app.use(express.json())
router.post("/add",addTrade);
router.get("/getAllForUser/:traderId",getAllTradesForUser);


export default router;