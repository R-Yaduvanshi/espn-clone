import { Box, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const SubNavbar = ({ label, href }) => {
  const navigate = useNavigate();
  return (
    <Link
      href={"#"}
      // p={1}
      _hover={{
        textDecoration: "none",
      }}
      style={{ padding: "5px" }}
    >
      <Stack align={"center"}>
        <Box
          _hover={{
            bg: "blue.200",
          }}
          style={{
            width: "100%",
            height: "40px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingLeft: "5px",
            fontSize: "14px",
            lineHeight: "20px",
          }}
        >
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#006cb7" }}
            fontWeight={500}
            color="blackAlpha.700"
            onClick={() => navigate(href)}
          >
            {label}
          </Text>
        </Box>
      </Stack>
    </Link>
  );
};

export default SubNavbar;
