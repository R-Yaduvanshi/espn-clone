import { Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import React from "react";

const Edition = () => {
  return (
    <div>
      <Popover trigger={"hover"} placement={"bottom-start"}>
        <PopoverTrigger>ClickMe</PopoverTrigger>
        <PopoverContent>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Edition;
