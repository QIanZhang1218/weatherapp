import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Dropdown } from "./Dropdown";
import { Temperature } from "./Temperature";
import { apiKey } from "../authenKey";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export const ContainerBox: React.FC = () => {
  const [location, setLocation] = useState("Auckland, NZ");
  const [weather, setWeather] = useState({
    temp: "",
    sunrise: "",
    wind: "",
    tzone: "",
    humid: "",
    isLoading: true,
  });
  const getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    );
    return await response.json();
  };
  useEffect(() => {
    setWeather({
      humid: "",
      sunrise: "",
      temp: "",
      tzone: "",
      wind: "",
      isLoading: true,
    });
    getWeather().then((res) => {
      setWeather({
        temp: res.main.temp,
        sunrise: res.sys.sunrise,
        wind: res.wind.speed,
        tzone: res.timezone,
        humid: res.main.humidity,
        isLoading: false,
      });
    });
  }, [location]);
  return (
    <Box
      borderWidth="1rem"
      borderRadius="lg"
      overflow="hidden"
      borderColor="red.400"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Flex p="6" flexDirection="column">
        <Dropdown city={location} setCity={setLocation} />
        <Temperature
          value={(parseFloat(weather.temp) - 273.15).toFixed(1)}
          isLoading
        />
      </Flex>
    </Box>
  );
};
