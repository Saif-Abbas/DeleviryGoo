const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { insertData, selectData } = require("./databases");
app.use("/", express.static(__dirname + "/DeleviryGoo"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/DeleviryGoo/home.html");
});
app.post("/contact", (req, res, next) => {
  if (!req.body) return res.sendStatus(400).send("No data received");
  const { name, email, phone, message } = req.body;
  insertData(name, email, phone, message);
  res.sendFile(__dirname + "/DeleviryGoo/thanks.html");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/admin", (req, res) => {
  selectData((data) => {
    // Render the data in the template
    ejs.renderFile(
      __dirname + "/DeleviryGoo/adminDashBoard.ejs",
      { data: data },
      (err, html) => {
        if (err) throw err;
        res.send(html);
      }
    );
  });
});
