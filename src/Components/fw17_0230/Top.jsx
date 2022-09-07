import { Container, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
const Top = () => {
  return (
    <Container maxW="100%" style={{ height: "30pxpx" }} bgColor="#0398dc">
      <Stack
        direction="row"
        gap={2}
        justifyContent="center"
        paddingTop={1}
        color="white"
      >
        <Text>Mactches(8)</Text>
        <Text>ENG v SA(1)</Text>
        <Text>Asia Cup(1)</Text>
        <Text>Women's Hundred(1)</Text>
        <Text>6IXTY(M)(3)</Text>
        <Text>Men's Hundred(1)</Text>
        <Text>6IXTY(M)(3)</Text>
      </Stack>
    </Container>
  );
};

export default Top;
