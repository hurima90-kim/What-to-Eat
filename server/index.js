const express = require("express");
const app = express();
const port = 5001;
const bodyParser = require("body-parser");
const { User } = require("./models/User");

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// application/json
app.use(bodyParser.json());

// const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://JasonKim:!dmsxo1975@whattoeat.t4k9t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Mongo DB Connected...!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/register", (req, res) => {
  // When you get the infomation need to sign up from the client, put them in the Database

  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
