const express = require("express");
const app = express();
const PORT = 8383;

let data = 
  ["eat"]
   
 

app.use(express.json())

// Root endpoint
app.get("/", (req, res) => {
  res.sendStatus(200);
});

// Dashboard endpoint to display data
app.get("/dashboard", (req, res) => {
  res.send(`
    <body>
    <h1>DATA:</h1>
      <p>${JSON.stringify(data)}</p>
    </body>
  `);
});

// Get data API
app.get("/api/data", (req, res) => {
  res.send(data);
});

// Post data API
app.post("/api/data", (req, res) => {
  // Create a new data entry
  const newEntry = req.body;
  data.push(newEntry.name)

  res.status(201)
});

app.delete('/api/endpoint',(req,res)=>{
  data.pop()
  res.sendStatus(201)
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
