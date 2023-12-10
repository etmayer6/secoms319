const { MongoClient } = require("mongodb");


const url = "mongodb://127.0.0.1:27017";
const dbName = "reactdata";
const client = new MongoClient(url);
const db = client.db(dbName);


var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
const port = "8081";
const host = "localhost";



app.get("/catalog", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");
    const query = {};
    const results = await db
    .collection("fakestore_catalog")
    .find(query)
    .limit(100)
    .toArray();
    console.log(results);
    res.status(200);
    res.send(results);
    });
  
  
    app.post("/addProduct", async (req, res) => {
      await client.connect();

      const keys = Object.keys(req.body);
      const values = Object.values(req.body);
      let id = values[0]; 
      const title = values[1]; 
      let price = values[2]; 
      const description = values[3];
      const category = values[4];
      const image = values[5];
      const rating = values[6];

      id = parseFloat(id);
      price = parseFloat(price);
  
      console.log(id, title, price, description, category, image, rating);
  
      const newDocument = {
        "id": id,
        "title": title,
        "price": price,
        "description": description,
        "category": category,
        "image": image,
        "rating": rating
      };
      const results = await db.collection("fakestore_catalog").insertOne(newDocument);
      res.status(200);
      res.send(results);
      });
  
  
  
      app.delete("/deleteProduct", async (req, res) => {
        await client.connect();
        // const keys = Object.keys(req.body);
        const values = Object.values(req.body);
        const id = values[0]; // id
        console.log("Product to delete:",id);
        const query = { "id": id };
        const results = await db.collection("fakestore_catalog").deleteOne(query);
        res.status(200);
        res.send(results);
        });














app.listen(port, () => {
console.log("App listening at http://%s:%s", host, port);
});