import { useColorModeValue } from "@/components/ui/color-mode"
import { useProductStore } from "@/store/product"
import { Container, Heading, VStack, Box, Input, Button } from "@chakra-ui/react"
import { useState } from "react"
import { Toaster, toaster } from "@/components/ui/toaster"


function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name:"",
    price:"",
    image:""
  })
  const {createProduct} = useProductStore()
  const color = useColorModeValue("white", "blue.700")
   
  const handleAddProduct = async()=>{
   const{success, message } = await createProduct(newProduct)
   console.log("success",success)
   console.log("message",message)

   if(!success){
    toaster.create({
      title: "Error",
      description: message,
      status:"error"
    })
   }
   else{
    toaster.create({
      title: "Success",
      description: message,
      status:"success"
    })
   }
   

  }
  return(
    <Container  maxW={"container.sm"}  >
      <Toaster />

      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create a New Product
        </Heading>
        <Box w={"full"} bg={color}
        p={6} rounded={"lg"} shadow={"md"}
        >
          <VStack  spacing={4}>
            <Input
            placeholder="Product Name"
            name="name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
             <Input
            placeholder="Price"
            name="price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
             <Input
            placeholder="Image URL"
            name="image"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />
            <Button colorScheme={"blue"} onClick={handleAddProduct} w={"full"}>Add Product</Button>

          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage