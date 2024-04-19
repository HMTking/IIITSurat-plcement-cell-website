const mongoose =require("mongoose");
mongoose.connect("mongodb+srv://dattpatel2020:DattNamra%40123@cluster0.69kkh.mongodb.net/Node-API?w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


// To load view 
const express=require("express");
const app=express();

app.use(express.static("./public"));
//calling  route  file
const userRoute =require("./routes/userRouts");
app.use('/',userRoute)


const adminRoute =require("./routes/adminRouts");
app.use('/admin',adminRoute)

const hostname='0.0.0.0';
app.listen(3000,hostname,function(){
    console.log("Server is Running .. at port 3000");
})