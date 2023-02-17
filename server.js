const mongoose = require('mongoose');
const app = require('./index');
mongoose.set("strictQuery", false);
//Handles the config.env files
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const DB = process.env.DATABASE_URL;
// This will return Promise object so we need to Handle it
const connection = mongoose.connect(DB);

app.listen(8080,async ()=>{
     try {
        await connection
        console.log('Connected to DB');
     } catch (err) {
        console.log('Error connecting')
     }
     console.log(`Server running at http://127.0.0.1:${8080}`);
})