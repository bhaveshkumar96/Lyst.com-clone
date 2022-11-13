
import {
  Input,
  Stack,
  Icon,
  Image,
  Text,
  HStack,
  Button,
  Flex,
  Grid,
} from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <>
    <hr  />
      
      <HStack border={"1px"} h="400px" textAlign={"left"} gap="5">
      
        <Stack width={"50%"} spacing="2" ml={"10%"}>
          <Image
            width={"15%"}
            src="https://roi4cio.com/uploads/roi/company/Trustpilot__logo_.PNG"
          />
          <Image
            width={"15%"}
            src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"
          />
          <Text>
            Trust Score <b>4.4</b>
          </Text>
          <Text>
            {" "}
            <b>2,918</b> reviews{" "}
          </Text>
          <HStack>
            <Image
              width={"4%"}
              src="https://i.ibb.co/wKcSCHK/icons8-twitter-50.png"
            />
            <Image
              width={"4%"}
              src="https://i.ibb.co/8NM3GQz/icons8-facebook-50.png"
            />
            <Image
              width={"4%"}
              src="https://i.ibb.co/D4msFhZ/icons8-instagram-50.png"
            />
          </HStack>
          <Image
            width={"30%"}
            src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png"
          />
          <Text fontSize={"14px"} >Learn about the Lyst app for iPhone, iPad and Android.</Text>
          <Text>© 2022 Lyst</Text>
        </Stack>
    
        
        <Stack spacing={1} justifyItems={"flex-start"} >
          <Text fontSize={"20px"} fontFamily="Helvetica">
            INTERNATIONAL
          </Text>
          <Text cursor={"pointer"} fontSize={"14px"}>Lyst - AU</Text>
          <Text cursor={"pointer"} fontSize={"14px"}>Lyst - CA</Text>
          <Text cursor={"pointer"} fontSize={"14px"} >Lyst - UK</Text>
          <Text cursor={"pointer"} fontSize={"14px"}>Lyst - Österreich</Text>
          <Text cursor={"pointer"} fontSize={"14px"}>Lyst - Schweiz</Text>
          <Text cursor={"pointer"} fontSize={"14px"}>Lyst - Deutschland</Text>
          <Text cursor={"pointer"} fontSize={"14px"}>Lyst - España</Text>
          <Text cursor={"pointer"} fontSize={"14px"}>Lyst - France</Text>
          <Text cursor={"pointer"} fontSize={"14px"}>Lyst - Italia</Text>
          <Text cursor={"pointer"} fontSize={"14px"}>Lyst - 日本</Text>
          <Text cursor={"pointer"} fontSize={"14px"}>Lyst - België</Text>
          <Text cursor={"pointer"} fontSize={"14px"}>Lyst - Nederland</Text>
        </Stack>
       
        <Stack spacing={1}>
          <Text fontSize={"20px"} fontFamily="Helvetica">
            HELP AND INFO
          </Text>
          <Text fontSize={"14px"}>Help center</Text>
          <Text fontSize={"14px"}>About us</Text>
          <Text fontSize={"14px"}>Shipping policy</Text>
          <Text fontSize={"14px"}>Returns policy</Text>
          <Text fontSize={"14px"}>Payments</Text>
          <Text fontSize={"14px"}>Refund policy</Text>
          <Text fontSize={"14px"}>Developers</Text>
          <Text fontSize={"14px"}>Careers</Text>
          <Text fontSize={"14px"}></Text>
          <Text fontSize={"14px"}>Contact</Text>
          <Text fontSize={"14px"}>Terms & conditions</Text>
          <Text fontSize={"14px"}>Privacy & cookie policy</Text>
          <Text fontSize={"14px"}>Intellectual property</Text>
          {/* <Text fontSize={"14px"}>Categories</Text> */}
          {/* <Text fontSize={"14px"}>Become a partner</Text>
          <Text fontSize={"14px"}>Lyst Insights</Text>
          <Text fontSize={"14px"}>Lyst News</Text> */}
        </Stack>
      </HStack>
    </>
  );
}

export default Footer;
