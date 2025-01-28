import mongoose from "mongoose"

export const connectDB = async () =>{
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    // console.log(`connected on ${conn.connection.host}`)
  } catch (error) {
    console.log(error.message)
    process.exit(1); // process code 1 code means failure , 0 means success
  }
}