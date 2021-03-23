var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname;

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/assets/img', express.static(__dirname + '/assets/img'));
app.use('/assets/svg', express.static(__dirname + '/assets/svg'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
    console.log("entering");
  res.sendFile(path + "/index.html");
});

app.use("/",router);

app.listen(18188 ,function(){
    console.log(path);
  console.log("Live at Port 3000");
});