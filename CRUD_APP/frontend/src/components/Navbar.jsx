/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Container, Flex, HStack, Text, Button, Box } from '@chakra-ui/react';
import { color } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { ColorModeButton, ColorModeProvider } from "@/components/ui/color-mode"


const Navbar = () => {

  return (
   <Container maxW={"1140px"} px={4}>
      <Flex
        paddingLeft={5}
        paddingRight={5}
        backgroundColor={'whiteAlpha.200'}
        marginTop={5}
        h={16}
        alignItems={"center"} 
        justifyContent={"space-between"}
        flexDir={{
          base:"column",
          sm:"row" 
        }}>
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          color={'blue.500'}>
        <Link to="/"> Nehemiah's CRUD/REST STORE 🛒</Link>
        </Text>
      <HStack spacing={2} alignItems={"center"}>
      <Link to={"/create"}>
        <Button backgroundColor={'blue.500'}>📝 </Button>
      </Link>
        <ColorModeButton>
          🌙
        </ColorModeButton>
      </HStack>
      </Flex>
   </Container>
  )
};

export default Navbar;
