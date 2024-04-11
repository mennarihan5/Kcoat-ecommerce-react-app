const jwt = require('jsonwebtoken');

const secret = "kcoat"
const users = {
    userid: 1,
    userName: ""
}
const home = async(req, res)=>{
    res.status(200).json({message: "message"})
}

const about = async(req, res)=>{
    res.status(200).json({message: "about page"})
}

const login = async(req,res)=>{
    //return login status
    const token = jwt.sign(users,secret)
    console.log(token)
}
const details = async(req,res)=>{
    console.log({message:"details"})
}

module.exports = {home, about, login, details}