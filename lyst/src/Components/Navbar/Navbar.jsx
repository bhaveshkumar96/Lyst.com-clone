import {
  Input,
  Stack,
  Image,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import CountryModal from "./CountryModal";

function Test() {
  return (
    <>
      <div>
        <div>
          <Stack>
            <HStack gap={5} marginLeft={"80%"}>
              <CountryModal/>
              <Button
                colorScheme="teal"
                variant="solid"
                bg={"black"}
                h={"30px"}
                borderRadius="none"
              >
                <Text>Sign up or login</Text>
              </Button>
            </HStack>
            <HStack spacing={"35px"}>
              <Image
                boxSize="8%"
                src="https://i.ibb.co/wgT9wpn/Untitled-design.png"
                alt="LYST-LOGO"
                
              />
              <Stack spacing={3}>
                <Text fontSize="18px">WOMEN</Text>
              </Stack>
              <Stack spacing={3}>
                <Text fontSize="18px">MEN</Text>
              </Stack>
              <Input
                placeholder="SEARCH (e.g. Acne jeans)"
                size="md"
                borderRadius={"none"}
                marginLeft={"25%"}
                h="43px"
                focusBorderColor='black'
              />
            </HStack>
          </Stack>
        </div>
      </div>
      
    </>
  );
}

export default Test;
