import { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import logo from './logo.svg';
import './App.css';
import ToDoListPage from './Page/ToDoListPage';
// import {
//   TextField, 
//   Button,
//   Card
// } from '@mui/material';
// import { styled } from '@mui/system';
// import WeatherCard from './components/WeatherCard';
// import Sunny from '@mui/icons-material/WbSunny';
// import Cloudy from '@mui/icons-material/WbCloudy';
// import Rainy from '@mui/icons-material/Thunderstorm';


// Weather App requirements

// Input field -> user can type in a location
// Submit button -> user can submit the location

// display the weather for the next week in cards

// each card should contain the following information:
// date
// current temperature


// open-meteo

// openCage geocoding 

// const geoCodeKey = '08ba6c4c317c4e23b20baaa68d17999f';

// const MyContainer = styled('div')({
//   display: 'flex',
//   justifyContent: 'center',
// });

// const TodaysDate = styled('div')({
//   display: 'flex',
//   justifyContent: 'space-between',
//   margin: '0 10%'
// });

// const MainContainer = styled('div')({
//   display: 'flex',
//   flexDirection: 'column',
//   margin: '10%'
// })

// const TodayStyle = styled('p')({
//   fontSize: '45px',
// })

// const FormContainer = styled('div')({
//   margin: '5% 0'
// })

function App() {

  // const [userName, setUserName] = useState('Lukas');

  // const [userInput, setUserInput] = useState('');
  // const [temperature, setTemperature] = useState([]);

  // const currentDate = new Date(); // https://momentjs.com/
  // //const currentDay = moment(currentDate).format('ddd').toUpperCase();
  // const formatDate = moment(currentDate).format('MM DD YYYY');
  // const dayMonth = moment(currentDate).format('DD MMM');
  // const month = moment(currentDate).month();

  // const handleSubmit = () => {
  //   console.log(userInput)
  //   // make the api call to convert location to lat/long
  //   axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${userInput}&key=${geoCodeKey}`)
  //     .then((response) => {
  //       console.log('location response:', response)
  //       const newLat = response.data.results[0].geometry.lat;
  //       const newLng = response.data.results[0].geometry.lng;
  //       const timeZone = response.data.results[0].annotations.timezone.name
        
  //       // make the api call to get the weather
  //       // https://open-meteo.com/en/docs#latitude=29.7633&longitude=-95.3633&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=America%2FChicago
  //       axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${newLat}&longitude=${newLng}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=${timeZone}&forecast_days=7&temperature_unit=fahrenheit`)
  //       .then((response)=>{
  //         console.log('open-meteo response:', response)

  //         const result = [];
  //         const { temperature_2m_max, temperature_2m_min, time, weathercode } = response.data.daily;
  //         console.log('time:', time)
  //         time.forEach((date, index) => {
  //           // formatting date to just show day
  //           const currentDay = moment(date).format('ddd').toUpperCase();
  //           // setting weathercode to corresponding icon
  //           result.push({
  //             date: currentDay,
  //             temperatureMax: temperature_2m_max[index],
  //             temperatureMin: temperature_2m_min[index],
  //             weathercode: weathercode[index]
  //           })
  //         })
  //         console.log('result:', result)
  //         setTemperature(result);

  //       })
  //     })
  // }

  // setting weather icon for current day
  // let todayIcon = <Sunny color="primary" />
  // if (temperature[0]?.weathercode >= 1 && temperature[0]?.weathercode <= 3) {
  //   todayIcon = <Cloudy color="primary" />
  // } else if (temperature[0]?.weathercode >= 95) {
  //   todayIcon = <Rainy color="primary" />
  // }

  return (
    <div className="App">
      {/* <FormContainer>
        <TextField 
          id="outlined-basic"
          label="Input"
          variant="outlined"
          autoFocus
          value={userInput}
          size="small"
          onChange={(event) => {
            setUserInput(event.target.value);
          }}
        />      
        <Button variant="contained" onClick={handleSubmit} size="medium">
          Search
        </Button>
      </FormContainer>
      
      <MainContainer>
        <TodaysDate>
          <div>
            <TodayStyle>
              {todayIcon} {temperature[0]?.date}
            </TodayStyle>
          </div>
          <div>
            <TodayStyle>{temperature[0]?.temperatureMax}°F</TodayStyle>
          </div>
        </TodaysDate>

        <MyContainer>
          {temperature.map((dayMetrics, index) => {

            console.log('dayMetrics:', dayMetrics)

            // <MyCustomCardComponent variant="outlined" key={index} >
            //   <div>{day.date}</div>
            //   <div>{day.temperature}</div>
            //   <div>{day.weathercode}</div>
            // </MyCustomCardComponent>
            if (index > 0) {
              return (
                <WeatherCard weatherData={dayMetrics} key={index}/>
                )
              }
          }
          )}
        </MyContainer>
      </MainContainer> */}
      
      <ToDoListPage />


    </div>
  );
}

export default App;
