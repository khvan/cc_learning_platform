const express = require ('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const knex = require ('./db/client');

const app = express ();

app.use (bodyParser.json ());
app.use (cors ());

app.get ('/', (req, res) => {
  res.send ('this is an express backend');
});

app.post ('/streams', (req, res) => {
  console.log(req.body)
  const streamsParams = {
    title: req.body.title,
    description: req.body.description,
    userId: req.body.userId,
  };

  knex ('streams').insert (streamsParams).returning ('*').then (data => {
    res.redirect ('/');
  });
});

app.get ('/streams', (req, res) => {
  knex ('streams').select ('*').returning ('*').then (data => {
    res.send (data);
  });
});

app.patch('/streams/:id', (req,res)=>{
  console.log(req.body)
  knex ('streams')
  .where({id: req.params.id})
  .update({
   title: req.body.title,
   description: req.body.description,
   likes_count: req.body.likes_count
  }
  ).returning("*")
  .then (data =>{
    res.send("")
  })

})

app.delete('/streams/:id', (req,res)=>{
  knex('streams')
  .where({id: req.params.id})
  .delete()
  .returning("*")
  .then (data =>{
    res.send(data)
  })
})




app.listen (3002);
