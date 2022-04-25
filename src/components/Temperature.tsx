import React from "react";
import { Flex, Text } from "@chakra-ui/react";
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
        <Text fontSize="7rem" color="">
          {value.value}
        </Text>
        <RiCelsiusFill className={"temp-icon"} />
      </Flex>
      {/* </Skeleton> */}
    </>
  );
};
