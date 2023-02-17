const express = require('express');
const app = express();

const ProductRouter = require('./routes/ProductRoutes');
app.use(express.json({limit: '300mb'}));
app.use(express.urlencoded({limit: '300mb'}));

const cors = require('cors');
app.use(cors({
    origin: '*',
 }));

app.use('/api/v1/coffer',ProductRouter);

app.all("*",(req,res,next)=>
 {
 res
 .status(400)
 .json({
 status : "Fail",
 message : "Invalid request"
 })
 next();
 })

module.exports = app;