const express = require("express");
const path = require("path");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/signupSchema");
const Login=require("./models/loginSchema")
const app = express();
dotenv.config();
app.use(express.json());
mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch((err) => {
    console.log("MongoDb connection unsuccessful", err);
  });
app.get("/", (req, res) => {
  res.send("Welcome to Backend friends");
});
app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.post("/signup", async(req, res) => {
  const { firstname, lastname, username, email, password } = req.body;
  console.log(firstname, lastname, username, email, password);
  try {
    console.log("inside try");
    const newCustomer =  new Signup({
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: password,
    });
    console.log(newCustomer);
    await newCustomer.save();
    res.status(200).json({ "values received": true });
  } catch (err) {
    console.log(err)
    res.status(400).json({ "Signup unsuccessfull": err });
  }
});
app.post('/login',(req,res)=>{
    var{userName,password}=req.body
    try{
        const newLogin=new Login({
        userName:userName,
        password:password
    })
    newLogin.save()
    res.status(201).send("Login Successful")
    }
    catch(err) {
        res.status(400).send("Login Unsuccessful",err)
    }
    })

app.get('/getsignupdet',async(request,res)=>{
    varsignUpdet=await Signup.find()
    res.status(200).json(signUpdet)
})
app.listen(3001, () => {
  console.log("server connected");
});
