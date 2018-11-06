const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const posts = require('./routes/api/posts');


//Middleware
app.use(cors());

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/api/posts',posts);

if(process.env.NODE_ENV === 'production'){
    //static folder
    app.use(express.static(__dirname + '/public/'));

    //Handle SPA
    app.get('*',(req,res)=>{
        res.sendFile(__dirname + '/public/index.html');
    })
}

//Listen Port

const port = process.env.port || 3000;

app.listen(port,()=>{
    console.log('Server started on :' + port);
})



