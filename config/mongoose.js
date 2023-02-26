const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://islam:MyDataBase2023@cluster0.a329xfq.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{console.log('db is connected')})
.catch((err)=>{console.log(err)});