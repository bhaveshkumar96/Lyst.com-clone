import Footer from "../Footer/Footer";
import Footer2 from "../Footer/Footer2";
import Footer3 from "../Footer/Footer3";
import LoginPage from "../Allpages/LoginPage";
import Navbar from "../Navbar/Navbar";
import { Image, Text } from "@chakra-ui/react";
import Content from "./Content";
function LandingPage() {
  return (
    <>
      <Navbar />
      <Content />
      <div>
        <Image cursor={"pointer"} src="https://i.ibb.co/B6Sc8ZZ/mainPage.png" />
        
      </div>
      <Text letterSpacing={"10px"} fontSize={"3xl"}>
        GET THE HOTTEST PRODUCTS
      </Text>
      <Footer3 />
      <Footer2 />
      <Footer />
    </>
  );
}
export default LandingPage;
