import React from "react";
import { Flex, Text, Icon } from "@chakra-ui/react";
import { RiCelsiusFill } from "react-icons/ri";
interface Props {
  value: string;
  isLoading: boolean;
}
export const Temperature: React.FC<Props> = (value, isLoading) => {
  return (
    <>
      {/* <Skeleton
        startColor="pink.500"
        endColor="orange.500"
        isLoaded={value.isLoading}
      > */}
      <Flex flexDirection="row">
        <Text fontSize="6rem" color="#313E57">
          {value.value}
        </Text>
        <Icon
          as={RiCelsiusFill}
          fontSize="2rem"
          marginTop={5}
          color="#313E57"
        />
      </Flex>
      {/* </Skeleton> */}
    </>
  );
};
