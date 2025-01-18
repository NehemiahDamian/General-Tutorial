
sum(calls,1,2)
function sum (callback, x, y){
  let result = x + y 

  calls(result)
}

function calls(ta){
  console.log(`${"gagi"},${ta}`)
}


let tae = () =>{
  console.log("tae")
}
tae()