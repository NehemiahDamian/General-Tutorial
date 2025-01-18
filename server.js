import http from "http";
const PORT = process.env.PORT
const server = http.createServer((req, res)=>{
  // res.setHeader('Content-Type', 'text/html')
  // res.write("hello");
  // res.end('<h1>Hello world</h1>');
  //console.log("hello")
  res.writeHead(500, {'Content-type': 'application/json'})
  res.end(JSON.stringify({message:"Server Error"}))
})

server.listen(PORT,()=>{
  console.log("server is complete")
})
