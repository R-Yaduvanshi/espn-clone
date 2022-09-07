import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import SubNavbar from "./SubNavbar";

const LiveScorefw17 = () => {
  const liveScore = [
    {
      label: "Live Score Home",
      href: "/livescore",
    },
    {
      label: "Week view",
      href: "#",
    },
    {
      label: "Month view",
      href: "#",
    },
    {
      label: "Season view",
      href: "#",
    },
    {
      label: "International Calender",
      href: "#",
    },
    {
      label: "Desktop Scoreboard",
      href: "#",
    },
  ];
  return (
    <Box w="100px" h="30px" _hover={{ borderBottom: "3px solid #006cb7" }}>
      <Popover trigger={"hover"} placement={"bottom-end"}>
        <PopoverTrigger>
          <Link
            href="#"
            color={"white"}
            p={2}
            fontSize={"13px"}
            fontWeight={500}
            _hover={{
              textDecoration: "none",
              align: "center",
            }}
          >
            Live Score
          </Link>
        </PopoverTrigger>
        <PopoverContent fontSize="14px" bg="#f5f5f5" p={6}>
          <Stack spacing={0}>
            {liveScore.map((content) => {
              return <SubNavbar key={content.label} {...content} />;
            })}
          </Stack>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default LiveScorefw17;
