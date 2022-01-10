//importexpress,mongose,routes dan cors
import express from "express";
import mongoose from "mongoose";
import route from "./routes/indexapi.js"
import cors from "cors";
const app = express();

mongoose.connect("mongodb://127.0.0.1:27018/restful_db",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error',(error) => (console.error(error)),
db.once('open', () => console.log('Database connected :) ')),

//midware
app.use(cors()),
app.use(express.json()),
app.use('/product', route),
app.use(express.urlencoded({extended: true})),

app.listen(3000 , () =>{ console.log("Server is running on port 3000")})


