const express= require('express')
const app = express();
const port = process.env.PORT ||3000;

app.get('/', (req, res) =>{
    res.send('ok server is running')
})

app.listen(port,()=>{
    console.log('app started on port '+port);
})