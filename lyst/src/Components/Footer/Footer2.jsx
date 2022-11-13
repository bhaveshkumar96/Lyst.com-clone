import { HStack, Stack, Text } from "@chakra-ui/react";

function Footer2() {
  return (
    <>
      <HStack gap="5" mt={"5%"} mb="5%" justifyContent={"center"}>
        <Stack ml={"40px"} textAlign={"left"}  >
            <Text fontSize={"25px"} as="i">MEN'S CLOTHING</Text>
        <Text>Beach-wear</Text>
          <Text>Sweaters and knitwear</Text>
          <Text>pants,slacks and chinos</Text>
          <Text>underwear</Text>
          <Text>Suits</Text>
          <Text>Nightwaer and sleepwear</Text>
          <Text>T-shirts</Text>
          <Text>Coats</Text>
        </Stack>
        <Stack textAlign={"left"} >
        <Text fontSize={"25px"} as="i">WOMEN'S SHOES</Text>
        <Text>Hats</Text>
          <Text>Sneakers</Text>
          <Text>Boots</Text>
          <Text>Heels</Text>
          <Text>underwear</Text>
          <Text>Flats and flat shoes</Text>
          <Text>T-shirts</Text>
          <Text>Coats</Text>
          {/* <Text>Scarves and Mufflers</Text>
          <Text>Watches</Text>
          <Text>Wallets and Cardholders</Text> */}
        </Stack>
        <Stack textAlign={"left"} >
        <Text fontSize={"25px"} as="i">MEN'S SHOES</Text>
        <Text>Hats</Text>
          <Text>Phone Cases</Text>
          <Text>Belts</Text>
          <Text>Sunglasses</Text>
          <Text>Umbrella</Text>
          <Text>Scarves and Mufflers</Text>
          <Text>Watches</Text>
          <Text>Wallets and Cardholders</Text>
        </Stack>
        <Stack textAlign={"left"} >
        <Text fontSize={"25px"} as="i">WOMEN'S CLOTHING</Text>
        <Text>Boots</Text>
          <Text>Slip-on shoes</Text>
          <Text>lace - ups</Text>
          <Text>Sandals,slides and flip flops</Text>
          <Text>Sneakers</Text>
          <Text>Belts</Text>
          <Text>Sunglasses</Text>
          
          <Text>Scarves and Mufflers</Text>
         
        </Stack>
        <Stack textAlign={"left"} >
        <Text fontSize={"25px"} as="i">WOMEN'S ACCESSORIES</Text>
          <Text>Hats</Text>

          <Text>Belts</Text>
          <Text>Sunglasses</Text>
          <Text>Umbrella</Text>
          <Text>Scarves and Mufflers</Text>
          <Text>Watches</Text>
          <Text>Wallets and Cardholders</Text>
          <Text>Slip-on shoes</Text>
          
        </Stack>
      </HStack>
    </>
  );
}
export default Footer2;
