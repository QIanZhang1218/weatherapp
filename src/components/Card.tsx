import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { FiSunrise, FiWind, FiDroplet } from "react-icons/fi";

interface Props {
  dataType: "sunrise" | "humid" | "wind";
  value: string;
  isLoading: boolean;
}
export const Card: React.FC<Props> = ({ dataType, value, isLoading }) => {
  let icon: any;
  switch (dataType) {
    case "sunrise": {
      icon = <Icon as={FiSunrise} w={8} h={8} color="#313E57" />;
      break;
    }
    case "wind": {
      icon = <Icon as={FiWind} w={8} h={8} color="#313E57" />;
      break;
    }
    case "humid": {
      icon = <Icon as={FiDroplet} w={8} h={8} color="#313E57" />;
      break;
    }
  }
  return (
    <Flex flexDirection="column" w="70px" alignItems="center" margin={5}>
      {icon}
      <Text color="#313E57">{value}</Text>
    </Flex>
  );
};
