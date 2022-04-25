import React from "react";
import { Select } from "@chakra-ui/react";

interface Props {
  setCity(value: string): void;
  city: string;
}
const cities: string[] = [
  "Beijing, CN",
  "Auckland, NZ",
  "London, UK",
  "New Delhi, IN",
  "New York, US",
];

export const Dropdown: React.FC<Props> = ({ city, setCity }) => {
  return (
    <Select
      size="lg"
      bg="red.400"
      borderColor="red.400"
      color="white"
      value={city}
      onChange={(e) => {
        setCity(e.target.value);
      }}
    >
      {cities.map((item) => {
        return (
          <option value={item} key={item}>
            {item}
          </option>
        );
      })}
    </Select>
  );
};
