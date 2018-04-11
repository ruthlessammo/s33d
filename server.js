const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const assert = require('assert');

const url = process.env.mLab_URL;
const dbName = 's33d';


MongoClient.connect('mongodb://ruthlessammo:s33d4LIFE@ds241869.mlab.com:41869/s33d', (err, client) => {
  if (err) return console.log(err);
  db = client.db('s33d');

  app.listen(3000, () => {
    console.log('listening on 3000')
  });
});

// const insertDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('s33d');
//   // Insert some documents
//   collection.insertMany([
//     {name : 'Will'}, {name : 'Ed'}, {name : 'Ed'}, {name: 'Max'}
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(4, result.result.n);
//     assert.equal(4, result.ops.length);
//     console.log("Inserted 4 documents into the collection");
//     callback(result);
//   });
// }
//
// const addUser = (req, res, db, callback) => {
//   const collection = db.collection('s33d');
//    collection.insertOne(req.body)
//    .then(() => {
//      console.log('Added users', req.body);
//    })
//    .catch((err) => {
//      console.log('err', err);
//    });
// }

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});


app.post('/users', (req, res) => {
  db.collection('s33d').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  });
});
