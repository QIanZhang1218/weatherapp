import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Dropdown } from "./Dropdown";

const apiKey = "d3e47861daf225c45ca331bef012b46d";

export const ContainerBox: React.FC = () => {
  return (
    <Box
      borderWidth="1rem"
      borderRadius="lg"
      borderColor="red.400"
      w="25%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="6"
    ></Box>
  );
};
