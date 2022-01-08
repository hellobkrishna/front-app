const express =require('express');
const app=express();
const morgan=require('morgan')
const bodyParser = require('body-parser');

const conversations = require("./api/routes/conversations")
const getMessage =require('./api/routes/getMessage')
const listContact=require('./api/routes/listContact')
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
// app.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept, Authorization')
// })
//Routes
app.use("/api", conversations)
app.use("/api",getMessage)
app.use("/api",listContact)

module.exports = app