const express = require("express");
const app = express();
const port = 5001;

const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://JasonKim:!dmsxo1975@whattoeat.t4k9t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const collection = client.db("test").collection("devices");
  client.close();
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}`));
