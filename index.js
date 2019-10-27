const express = require ('express');


const app = express();


app.get('/', (req,res)=>{
  res.send("this is an express backend")
})



app.listen(3002);
