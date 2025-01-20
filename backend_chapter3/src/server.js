import express from 'express'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'

const app = express()
const PORT = process.env.PORT || 5000

// for getting URLPath
const __filename = fileURLToPath(import.meta.url)
// converting the URLPath to a directory for the joining of files
const __dirname = dirname(__filename)

//Middlewares
//Middleware for public folder to see the static files
app.use(express.static(path.join(__dirname, "../public")))
//middleware to handle JSON request
app.use(express.json())

app.get('/',(req, res)=>{
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

//Routes
app.use('/auth', authRoutes)
app.use('/todos', todoRoutes)

app.listen(PORT,(req, res)=>{
  console.log(`${PORT} Running`)
})