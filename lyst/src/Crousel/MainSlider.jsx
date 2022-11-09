import { Box } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SlideData";

export default function MainSlider() {
  return (
    <Box w="100%" p={4} color="white" border={"black"}>
      <ImageSlider slides={SlideData} />
    </Box>
  );
}