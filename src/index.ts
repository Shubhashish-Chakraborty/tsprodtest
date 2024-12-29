import dotenv from 'dotenv';
dotenv.config();

import express from "express";

const app = express();
const PORT = process.env.PORT;

app.get('/' , (req , res) => {
    res.json({
        message: "EVERYTING WORKING FINE IN PRODUCTION!!"
    })
})

app.listen(PORT);