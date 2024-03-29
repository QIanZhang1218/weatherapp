import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Box, Flex } from "@chakra-ui/react";
import { apiKey } from "../authenKey";
import { Dropdown } from "./Dropdown";
import { Temperature } from "./Temperature";
import { Card } from "./Card";

export const ContainerBox: React.FC = () => {
  const [location, setLocation] = useState("Auckland, NZ");
  const [refresh, setRefresh] = useState(false);
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
  const timeout = () =>
    setTimeout(() => {
      setRefresh(!refresh);
    }, 60000);

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
    timeout();
    return () => clearTimeout(timeout());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, refresh]);
  return (
    <Box
      borderWidth="1rem"
      borderRadius="lg"
      overflow="hidden"
      borderColor="red.400"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Flex p="5" flexDirection="column">
        <Dropdown city={location} setCity={setLocation} />
        <Temperature
          value={(parseFloat(weather.temp) - 273.15).toFixed(1)}
          isLoading={weather.isLoading}
        />
      </Flex>
      <Flex>
        <Card
          isLoading={weather.isLoading}
          dataType="sunrise"
          value={format(
            new Date(
              Number(
                weather.sunrise +
                  weather.tzone +
                  new Date().getTimezoneOffset() * 60
              ) * 1000
            ),
            "HH:mm",
            {}
          )}
        />
        <Card
          isLoading={weather.isLoading}
          dataType="wind"
          value={`${weather.wind}m/s`}
        />
        <Card
          isLoading={weather.isLoading}
          dataType="humid"
          value={weather.humid + "%"}
        />
      </Flex>
    </Box>
  );
};
