import { Input, Stack } from "@chakra-ui/react";
import React from "react";
function Test() {
  return (
    <>
      <div>
        <h1>HELLO</h1>
        <div>
          <Stack spacing={3}>
            <Input placeholder="medium size" size="md" />
          </Stack>
        </div>
      </div>
    </>
  );
}

export default Test;
