import crypto from 'crypto'
//create hash
const hash  = crypto.createHash('sha256')
hash.update('password')
console.log(hash.digest('hex'))

//randomBytes
crypto.randomBytes(16,(err, buff)=>{
  if (err) throw err;
  console.log(buff.toString('hex'))
})


