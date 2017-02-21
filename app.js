var express = require("express");
var app = express();
var http = require("http").Server(app);
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.connect("mongodb://kimth6617:88Bytes!@ds157469.mlab.com:57469/noticeboard");
var db = mongoose.connection;

db.once("open", function() {
  console.log("DB connected!");
});
db.on("error", function(err) {
  console.log("DB error : ", err);
});

var postSchema = mongoose.Schema({
  title: {type:String, required:true},
  body: {type:String, required:true},
  createAt: {type:Date, default:Date.now},
  updateAt: Date
});
var Post = mongoose.model("post", postSchema);
/*Data.findOne({name:"myData"}, function(err, data) {
  if(err) {
    return console.log("Data ERROR", err);
  }
  if(!data) {
    Data.create({
      name:"myData",
      count:0,
      msg:"힣"
    }, function(err, data) {
      if(err) {
        return console.log("Data ERROR", err);
      }
      console.log("Counter initialized : ", data);
    });
  }
});*/

var port = process.env.PORT || 8000;

http.listen(port, function() {
  console.log("server on!");
});

app.set("view engine", "ejs");
//app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.render("test.ejs");
  console.log("Hello World!");
});
