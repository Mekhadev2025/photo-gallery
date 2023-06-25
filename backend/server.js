
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const UploadRoute = require("./routes/UploadRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;



mongoose
.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Database is connected');
  // Continue with your code after successful connection
})
.catch((error) => {
  console.error('Error connecting to database:', error);
  // Handle the error appropriately
});

app.use(UploadRoute);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});



/* const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const UploadRoute=require("../backend/routes/UploadRoute")
dotenv.config()

const app =express()
app.use(cors())
app.use(express.json())
app.use(express.static("public"))//public folder statically hosted by express
const PORT =process.env.PORT || 5000;




//connection

mongoose
.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Database is connected');
  // Continue with your code after successful connection
})
.catch((error) => {
  console.error('Error connecting to database:', error);
  // Handle the error appropriately
});

 
 

app.use(UploadRoute)

app.listen(PORT,()=>{
    console.log(`Server started at port : ${PORT}`)//for writing js inside console.lo use backticks
}); */