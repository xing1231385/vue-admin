const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router/user');
app.use(cors());
app.use(express.urlencoded({extended:false }))
app.use('/api',router)
app.listen(20080,function (){
    console.log('api server is running at localhost:20080')
})