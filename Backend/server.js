const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const bp = require("body-parser")
app.use(bp.json())
app.use(express.json());
app.use(cors());


const mongoose = require("mongoose");
mongoose.pluralize(null);
mongoose
  .connect(
    "mongodb://127.0.0.1:27017/question"
  )
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
 email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("datas", UserSchema);

app.post("/data",async(req,res)=>{
  try{
    const {name,email,password}= req.body;
    const p1 = new User({name,email,password})
    await p1.save()
    res.send()
  }
  catch(err){
    console.log(err)
    res.send(err)
  }
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'User not found. Please sign up.' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Successful login
    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


const finalSchema = new mongoose.Schema({
  num : {
    type : Number,
  },
  question : {
    type : String,
    required : true
  },
  options : {
    type : Object
  },
  correct_option : {
    type : String
  }
})
const final = mongoose.model("final",finalSchema)

app.get('/finalQuestion',async(req,res)=>{
  final.find()
  .then(quizData => res.json(quizData))
  .catch(err => res.json(err))
})

const level1Schema = new mongoose.Schema({
  num : {
    type : Number,
  },
  question : {
    type : String,
    required : true
  },
  options : {
    type : Object
  },
  correct_option : {
    type : String
  }
})
const level1 = mongoose.model("level1",level1Schema)

app.get('/level1Question',async(req,res)=>{
  level1.find()
  .then(level1 => res.json(level1))
  .catch(err => res.json(err))
})

const level2Schema = new mongoose.Schema({
  num : {
    type : Number,
  },
  question : {
    type : String,
    required : true
  },
  options : {
    type : Object
  },
  correct_option : {
    type : String
  }
})
const level2 = mongoose.model("level2",level2Schema)

app.get('/level2Question',async(req,res)=>{
  level2.find()
  .then(level2 => res.json(level2))
  .catch(err => res.json(err))
})

const logicalSchema = new mongoose.Schema({
  num : {
    type : Number,
  },
  question : {
    type : String,
    required : true
  },
  options : {
    type : Object
  },
  correct_option : {
    type : String
  }
})
const logical = mongoose.model("logical",logicalSchema)

app.get('/logicalQuestion',async(req,res)=>{
  logical.find()
  .then(logical => res.json(logical))
  .catch(err => res.json(err))
})

const trickySchema = new mongoose.Schema({
  num : {
    type : Number,
  },
  question : {
    type : String,
    required : true
  },
  options : {
    type : Object
  },
  correct_option : {
    type : String
  }
})
const tricky = mongoose.model("tricky",trickySchema)

app.get('/trickyQuestion',async(req,res)=>{
  tricky.find()
  .then(tricky => res.json(tricky))
  .catch(err => res.json(err))
})


app.listen(5000,()=>{
    console.log("server is running successfully on port no 5000")
})