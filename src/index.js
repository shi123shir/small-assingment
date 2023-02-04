const express = require("express")
const route = require("./router/route")
const mongoose = require("mongoose")
const dotenv = require('dotenv').config({path:"../.env"})
const app = express()
 


app.use(express.json())

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MongoDB_url,{
    useNewUrlParser: true,
}).then(()=> console.log("mongodb connected successfully"))
.catch((err) => err)


app.use("/", route)


app.listen(process.env.PORT || 3000, function(){
    console.log("express is running on Port " + (process.env.PORT || 3000))
})