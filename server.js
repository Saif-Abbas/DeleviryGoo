const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use("/", express.static(__dirname + "/DeleviryGoo"));
app.get("/", (req, res) => { res.sendFile(__dirname + "/DeleviryGoo/home.html"); });
app.post("/contact", (req, res, next) => {
    console.log(req.body);
    res.send("Your feedback has been sent.");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/my-route', (req, res) => {
    const formData = req.body;
    
  });