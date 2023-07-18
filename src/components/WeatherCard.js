import React from 'react';
import { Card } from '@mui/material';
import { styled } from '@mui/system';
import Sunny from '@mui/icons-material/WbSunny';
import Cloudy from '@mui/icons-material/WbCloudy';
import Rainy from '@mui/icons-material/Thunderstorm';

const MyCustomCardComponent = styled(Card)({
  height: '300px',
  width: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  borderRight: 'solid grey',
  '&:last-child': {
    borderRight: 'none'
  }
});

const MinTemp = styled('p')({
  color: 'grey'
})

const MaxTemp = styled('p')({
  fontWeight: 'bold'
})

const Weekday = styled('p')({
  fontSize: '20px'
})

const weatherIconContainer = styled('div')({
  justifyContent: 'center'
})

const WeatherCard = ({ weatherData }) => {
  const { date, temperatureMax, temperatureMin, weathercode } = weatherData;
  let weatherIcon = <Sunny color="primary" />
  if (weathercode >= 1 && weathercode <= 3) {
    weatherIcon = <Cloudy color="primary" />
  } else if (weathercode >= 95) {
    weatherIcon = <Rainy color="primary" />
  }

  return (
      <MyCustomCardComponent>
        <Weekday>{date}</Weekday>
        {/* <svg data-testid='weatherIcon'></svg>
         */}
         <weatherIconContainer>{weatherIcon}</weatherIconContainer>
        <MaxTemp>{temperatureMax}°F</MaxTemp>
        <MinTemp>{temperatureMin}°F</MinTemp>
      </MyCustomCardComponent>
  )

};

export default WeatherCard;