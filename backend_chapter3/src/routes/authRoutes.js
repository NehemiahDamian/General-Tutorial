import express, { Router } from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import db from "../db.js"

const router = express.Router()


router.post("/register",(req, res)=>{

const {username, password} = req.body
const hashedPassword = bcrypt.hashSync(password, 8)
try {
  const inputUsername = db.prepare(`INSERT INTO users (username, password) VALUES(?,?)`)
  const result = inputUsername.run(username, hashedPassword)

  const defaultTodo = "Hello add your first Todo"

  const inputTodo = db.prepare(`INSERT INTO todos (user_id, task) VALUES(?,?)`)

  inputTodo.run(result.lastInsertRowid, defaultTodo)

  const token = jwt.sign({id:result.lastInsertRowid}, process.env.JWT_SECRET, {expiresIn:'24h'})

  res.json(token)
  
} catch (error) {
  console.log(error.message)
  res.sendStatus(503).json({message:"error"})
}




})

router.post("/login", (req,res) => {
  const {username, password} = req.body

  try {
    const getUser = db.prepare(`SELECT * FROM users WHERE username = ?`)

     const result = getUser.get(username)
     if (!result ){return res.status(404).send({message:"users Not found"})}

     const passwordIsValid = bcrypt.compareSync(password, result.password)

     if(!passwordIsValid){return res.status(404).send({message:"password is not found"})}

     const token = jwt.sign({id:result.id}, process.env.JWT_SECRET, {expiresIn: '24h'})
     res.json(token)


    
  } catch (error) {
    console.log(error.message)
  }

  
});



export default router