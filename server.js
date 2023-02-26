const express = require('express');
require('./config/mongoose')
const route = require('./config/route')

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.use(route);

let port = 3000;
app.listen(port,()=>{console.log(`app is on ${port}`)});