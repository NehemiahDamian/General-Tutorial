/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-labels */
import { create } from "zustand";

// export const useProductStore = create((set) =>({
//   products:[],
//   setProducts: (products) => set({products}),
//   createProduct: async (newProduct) =>{

//     if(!newProduct.name || !newProduct.image || !newProduct.price )
//       return {success:false, message: "Enter please"}
//       const res = await fetch("/api/products",{
//       method: "POST",
//       headers:{
//         "Content-type":"application/json"
//       },
//       body:JSON.stringify(newProduct)
//     })

//     const data = await res.json()
//     set((state) => ({products:[...state.products, data.data]}))
//     return {success:true, message: "sucess"}

//   }
// }))

export const useProductStore = create( (set) => ({
 products:[],
 setProducts: (products) => set({ products}),
 createProducts: async (newProduct) =>{
    if(!newProduct.name || !newProduct.price|| !newProduct.image ){
      return {success:false, message: "Enter please"}
    }
    const res = await fetch("/api/products",
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newProduct)
    })
    const data = await res.json()
    set((state)=>{({products:[...state.products, data.data]})})
    return {success:true, message: "sucess"}

 }
}))