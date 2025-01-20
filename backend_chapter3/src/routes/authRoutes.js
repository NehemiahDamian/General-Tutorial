import express, { Router } from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import db from "../db.js"

const router = express.Router()


router.post("/register",(req, res)=>{
  const {username, password} = req.body
  console.log(username,password)

  const hashPassword  = bcrypt.hashSync(password,8)
  try {
    // first thing first to put a item on a database is to prepare it.
    const insertUser = db.prepare(` INSERT INTO users (username, password)
      VALUES (?,?)`)
    const result = insertUser.run(username, hashPassword)

    //add a sample todo for them
    const defaultTodo = `Hello Add your first Todo`
    const insertTodo = db.prepare(` INSERT INTO todos (user_id, task)
      VALUES (?,?)`)
    insertTodo.run(result.lastInsertRowid, defaultTodo)

    // create a Token

    const token = jwt.sign({ id: result.lastInsertRowid }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.json({token})
  } catch (error) {
  console.log(error.message);
  res.status(503).json({ error: error.message });
}

})

router.post("/login", () => {});



export default router