import { Input, Button } from "@chakra-ui/react";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

function CountryModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button bg={"white"} onClick={onOpen} size="15px"> IN - US$ </Button>

      <Modal
        CountryModalRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select your Country</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              
              <Select placeholder="Country">
                <option value="option1">INDIA</option>
                <option value="option2">US</option>
                <option value="option3">EUR</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CountryModal;
