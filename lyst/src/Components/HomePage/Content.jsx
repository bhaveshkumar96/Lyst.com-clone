import { Stack, Image, Text, HStack } from "@chakra-ui/react";
function Content() {
  return (
    <>
     <HStack border={"1px"}>
        <Stack textAlign={"left"} ml="80px" letterSpacing={"3px"} cursor="pointer">
          <Text fontSize={"2xl"}>SHOP THE LATEST</Text>
          <Image
            w={"80%"}
            src="https://cdna.lystit.com/cms/madison_beverly_hills_lyst_63f59bd7db.jpg"
          />
        </Stack>
        <Stack textAlign={"left"} letterSpacing={"3px"} cursor="pointer">
          <Text fontSize={"2xl"}>DESIGNER LEATHER GOODS</Text>
          <Image
            w={"80%"}
            src="https://cdna.lystit.com/cms/SZ_LYST_Hammock_Camel_1_bc0dd8c317.jpg"
          />
        </Stack>
        <Stack textAlign={"left"} letterSpacing={"3px"} cursor="pointer">
          <Text fontSize={"2xl"}>DISCOVER MADISON STORE</Text>
          <Image
            w={"80%"}
            src="https://cdna.lystit.com/cms/ssense_600_x_600_woman_a1d11da9ce.jpg"
          />
        </Stack>
      </HStack>
      <HStack border={"1px"}>
        <Stack textAlign={"left"} ml="80px" letterSpacing={"3px"} cursor="pointer">
          <Text fontSize={"2xl"}>WHAT TO WISHLIST NOW</Text>
          <Image
            w={"80%"}
            src="https://cdna.lystit.com/cms/5_C90_EA_3_D_C641_4_C59_AEE_7_729_E7036_BCF_1_ea93f2a099.PNG"
          />
        </Stack>
        <Stack textAlign={"left"} letterSpacing={"3px"} cursor="pointer">
          <Text fontSize={"2xl"}>CULT ITEMS ON SALE</Text>
          <Image
            w={"80%"}
            src="https://cdna.lystit.com/cms/40bf7c2d_2438_4682_8560_55283fbb7f6b_2b6ba13aa0.png"
          />
        </Stack>
        <Stack textAlign={"left"} letterSpacing={"3px"} cursor="pointer">
          <Text fontSize={"2xl"}>BEST OF BOOTS</Text>
          <Image
            w={"80%"}
            src="https://cdna.lystit.com/cms/774684bb_f807_4fa2_b802_507eb6c226a0_92a34933f0.png"
          />
        </Stack>
      </HStack>
    </>
  );
}

export default Content;
