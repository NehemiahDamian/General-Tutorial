import http from "http";
const PORT = process.env.PORT
const server = http.createServer((req, res)=>{
  if(req.url === "/"){
    res.writeHead(200, {"Content-Type": "text/html"} )
    res.end("<h1>home</h1>")
  }
  else if(req.url === "/about"){
    res.writeHead(200, {"content-Type": "text/html"})
    res.end("<h1>About</h1>")

  }
  else{
    res.writeHead(404, {"Content-Type": "text/html"})
    res.end("<h1>not found</h1>")
  }
 
  // res.writeHead(500, {'Content-type': 'application/json'})
  // res.end(JSON.stringify({message:"Servedasdar Error"}))
})

server.listen(PORT,()=>{
  console.log("server is complete")
})
