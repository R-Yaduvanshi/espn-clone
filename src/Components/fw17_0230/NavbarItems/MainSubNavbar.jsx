import {
  Box,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Link,
} from "@chakra-ui/react";
import React from "react";
import LiveScorefw17 from "./LiveScorefw17";
import SubNavbar from "./SubNavbar";

const MainSubNavbar = ({ NAV_ITEMS }) => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navITEMS) => {
        return (
          <Box key={navITEMS.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Box style={{ color: "white" }}>{navITEMS.label}</Box>
              </PopoverTrigger>

              {navITEMS.children && (
                <PopoverContent
                  border={0}
                  boxShadow="xs"
                  //   bg={popoverContentBgColor}
                  // p={4}
                  // rounded={"xl"}
                  // minW={"sm"}
                  fontSize="13px"
                  //   style={{ border: "1px solid black" }}
                >
                  <Flex>
                    <Stack
                      direction={"column"}
                      spacing={0}
                      p="0"
                      h="max-content"
                      w="max-content"
                      style={{ width: "100%" }}
                    >
                      {navITEMS.children.map((child) => {
                        return <SubNavbar key={child.label} {...child} />;
                      })}
                    </Stack>
                  </Flex>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        );
      })}
    </Stack>
  );
};

export default MainSubNavbar;
