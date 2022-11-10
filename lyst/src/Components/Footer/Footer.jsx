import {
  Input,
  Stack,
  Icon,
  Image,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <>
      <h1>Footer</h1>
      
      <HStack>
        <Stack width={"50%"} spacing="2">
          <Image
            width={"20%"}
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
          <Text>Learn about the Lyst app for iPhone, iPad and Android.</Text>
          <Text>© 2022 Lyst</Text>
        </Stack>
        <Stack spacing={1}>
          <Text as="b" fontSize={"20px"}>
            INTERNATIONAL
          </Text>
          <Text fontSize={"14px"}>Lyst - AU</Text>
          <Text fontSize={"14px"}>Lyst - CA</Text>
          <Text fontSize={"14px"}>Lyst - UK</Text>
          <Text fontSize={"14px"}>Lyst - Österreich</Text>
          <Text fontSize={"14px"}>Lyst - Schweiz</Text>
          <Text fontSize={"14px"}>Lyst - Deutschland</Text>
          <Text fontSize={"14px"}>Lyst - España</Text>
          <Text fontSize={"14px"}>Lyst - France</Text>
          <Text fontSize={"14px"}>Lyst - Italia</Text>
          <Text fontSize={"14px"}>Lyst - 日本</Text>
          <Text fontSize={"14px"}>Lyst - België</Text>
          <Text fontSize={"14px"}>Lyst - Nederland</Text>
        </Stack>
        <Stack spacing={1}>
          <Text as="b" fontSize={"20px"}>
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
          <Text fontSize={"14px"}>Categories</Text>
          <Text fontSize={"14px"}>Become a partner</Text>
          <Text fontSize={"14px"}>Lyst Insights</Text>
          <Text fontSize={"14px"}>Lyst News</Text>
        </Stack>
      </HStack>
    </>
  );
}

export default Footer;
