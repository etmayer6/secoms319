
const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "FoodieForecast";
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

app.get("/foods", async (req, res) => {
  await client.connect();
  console.log("Node connected successfully to GET MongoDB");
  const query = {};
  const results = await db
  .collection("FoodieForecast")
  .find(query)
  .limit(100)
  .toArray();
  console.log(results);
  res.status(200);
  res.send(results);
  });


  app.get("/images", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB View");
    const query = {};
    const results = await db
    .collection("View")
    .find(query)
    .limit(100)
    .toArray();
    console.log(results);
    res.status(200);
    res.send(results);
    });


  app.post("/addFood", async (req, res) => {
    await client.connect();
    const keys = Object.keys(req.body);
    const values = Object.values(req.body);
    const id = values[0]; 
    const food = values[1]; 
    const drink = values[2]; 
    const vegetarian = values[3];
    const dairy = values[4];
    const name = values[5];
    const url = values[6];
    const desc= values[7];
    const recipe = values[8];

    console.log(keys, values, id, food, drink, vegetarian, dairy, name, url, desc, recipe);

    const newDocument = {
      "id": id,
      "food": food,
      "drink": drink,
      "vegetarian": vegetarian,
      "dairy": dairy,
      "name": name,
      "url": url,
      "desc": desc,
      "recipe": recipe
    };
    const results = await db.collection("FoodieForecast").insertOne(newDocument);
    res.status(200);
    res.send(results);
    });



    app.delete("/deleteFood", async (req, res) => {
      await client.connect();
      // const keys = Object.keys(req.body);
      const values = Object.values(req.body);
      const id = values[0]; // id
      console.log("Food to delete :",id);
      const query = { "_id": new ObjectId(id) };
      const results = await db.collection("FoodieForecast").deleteOne(query);
      res.status(200);
      res.send(results);
      });

      // app.put("/api/update", (req, res) => {
      //   const values = Object.values(req.body);
      //   const id = values[0]; 
      //   const food = values[1]; 
      //   const drink = values[2]; 
      //   const vegetarian = values[3];
      //   const dairy = values[4];
      //   const name = values[5];
      //   const url = values[6];
      //   const desc= values[7];
      //   const recipe = values[8];
    
      //   console.log(keys, values, id, food, drink, vegetarian, dairy, name, url, desc, recipe);

      //   });

  app.listen(port, () => {
      console.log("App listening at http://%s:%s", host, port);
      });
