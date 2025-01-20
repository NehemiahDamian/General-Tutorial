import { createServer } from "http";

const user  = [
  {id:1, name :"METCHY DAMIAN"},
  {id:2, name :"MHY IAN"},
  {id:3, name :"MET IAN"}

]

const server = createServer((req, res)=>{
  if(req.url === '/api/users' && req.method === 'GET' ){
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(user))
    res.end()
  }
  else{
    res.setHeader('Content-Type', "application/json")
    res.end(JSON.stringify({"message":"Error nofound"}))
  }
})

server.listen(3000, ()=>{
  console.log("dsdsa")
});