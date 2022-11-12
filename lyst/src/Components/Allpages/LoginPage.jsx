import { HStack, Stack, Image, Text, Button,Input } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function LoginPage() {
  return (
    <>
      <Navbar />
      <HStack gap={"20%"} >

        <Stack width={"35%"} ml="100px">
           <Text fontSize={"4xl"} textAlign="centre" fontFamily={"cursive"}>The only fashion site you need</Text>
        <Input variant='flushed' placeholder='Enter Your Email to Login' textAlign={"center"} fontSize="xl"/>
            <Button bg={"black"} borderRadius={"none"} colorScheme="white" >Continue</Button>
            <hr />
            <br />
          <Button bg={"white"} border="1px"  borderRadius={"none"} columnGap="10">
            {" "}
            <Image
              src="https://i.ibb.co/kKVfTqh/icons8-google-48.png"
              width={"8%"}
              
            />
            <Text as={"b"} fontFamily="Helvetica">
              Continue With Google{" "}
            </Text>{" "}
          </Button>
          <Button bg={"white"} border="1px"  borderRadius={"none"} columnGap="10">
          <Image
              src="https://i.ibb.co/QYLH2s2/icons8-apple-logo-50.png"
              width={"8%"}
              
            />
            {" "}
            <Text as={"b"} fontFamily="Helvetica">
              Continue With Apple{" "}
            </Text>{" "}
          </Button>
          <Button bg={"white"} border="1px"  borderRadius={"none"} columnGap="10">
          <Image
              src="https://i.ibb.co/dJS70Mj/icons8-facebook-48.png"
              width={"8%"}
              
            />
            {" "}
            <Text as={"b"} fontFamily="Helvetica">
              Continue With Facebook{" "}
            </Text>{" "}
          </Button>
          <Text >
            By creating an account, you consent to Lyst’s{" "}
            <Text as={"u"}>Terms & Conditions.</Text> To learn more about how
            Lyst uses and protects your personal data, please read Lyst’s{" "}
            <Text as={"u"}>Privacy Policy.</Text>{" "}
          </Text>
        </Stack>
        <Stack>
          <Image src="https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </Stack>
      </HStack>
      <Footer/>
    </>
  );
}

export default LoginPage;
