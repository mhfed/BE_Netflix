import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import productRouter from "./routes/product"
const app = express();
// middleware
app.use(express.json());
app.use(cors());

//routing
app.use('/api', productRouter);

//connect
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`App dang chay cong ${PORT}`);
});