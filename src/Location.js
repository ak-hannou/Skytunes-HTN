import "./App.css";
import React, {Component, useEffect, useState} from 'react';
import { TextField } from "@mui/material";
import { Gradient } from "react-gradient";
import { Button } from "@mui/material";
import Logo from "./logo.svg";
import {Redirect} from "react-router-dom";
import  { SpotifyLogic }  from "./SpotifyLogic";


//export const authEndpoint = 'https://accounts.spotify.com/authorize';

export function Location(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [temperature, setTemperature] = useState(0);
  const [icon, setIcon] = useState('');
  const [id, setId] = useState(0);
  
  const [error, setError] = useState(null);
  
  const [danceability, setDanceability] = useState([0,1]);
  const [energy, setEnergy] = useState([0,1]);
  const [valence, setValence] = useState([0,1]);
  const [word, setWord] = useState("chill");
    // DANCEABILITY -------------
    function getDanceability(temp, conditionId) {

      let temperature = temp - 273.15

      //hot temperatures
      if (temperature >= 18) {

        //partial clouds
        if (conditionId >= 801 && conditionId <= 803) {
          setDanceability([0.6, 1])
        //overcast
        } else if (conditionId == 804) {
          setDanceability([0.6, 0.7])
        //rain
        } else if ((conditionId >= 500 && conditionId <= 531) || (conditionId >= 300 && conditionId <= 321)){
          setDanceability([0.5,0.8])
        //storm or tornado
        } else if ((conditionId >= 200 && conditionId <= 232) || conditionId == 781) {
          setDanceability([0.5,1])
        //clear conditions or others
        } else {
          setDanceability([0.7,1]) 
        }
      
      //cool temperatures
      } else if (temperature >= 0) {

        //partial clouds
        if (conditionId >= 801 && conditionId <= 803) {
          setDanceability([0.3, 0.7])
        //overcast
        } else if (conditionId == 804) {
          setDanceability([0.2, 0.6])
        //rain
        } else if ((conditionId >= 500 && conditionId <= 531) || (conditionId >= 300 && conditionId <= 321)){
          setDanceability([0.2,0.5])
        //clear conditions or others
        } else {
          setDanceability([0.4,1]) 
        }

      //cold temperatures
      } else {
        //partial clouds
        if (conditionId >= 801 && conditionId <= 803) {
          setDanceability([0.3, 0.6])
        //overcast
        } else if (conditionId == 804) {
          setDanceability([0.2, 0.5])
        //snow
        } else if (conditionId >= 600 && conditionId <= 622) {
          setDanceability([0.2,0.5])
        //clear conditions or others
        } else {
          setDanceability([0.6,0.8]) 
        }
      }
    }

    //ENERGY -------------------
    function getEnergy(temp, conditionId) {

      let temperature = temp - 273.15

      //hot temperatures
      if (temperature >= 18) {

        //partial clouds
        if (conditionId >= 801 && conditionId <= 803) {
          setEnergy([0.65, 0.7])
        //overcast
        } else if (conditionId == 804) {
          setEnergy([0.5, 0.7])
        //rain
        } else if ((conditionId >= 500 && conditionId <= 531) || (conditionId >= 300 && conditionId <= 321)){
          setEnergy([0.4,0.7])
        //storm or tornado
        } else if ((conditionId >= 200 && conditionId <= 232) || conditionId == 781) {
          setEnergy([0.7,1])
        //clear conditions or others
        } else {
          setEnergy([0.7,1]) 
        }
      
      //cool temperatures
      } else if (temperature >= 0) {

        //partial clouds
        if (conditionId >= 801 && conditionId <= 803) {
          setEnergy([0.3, 0.6])
        //overcast
        } else if (conditionId == 804) {
          setEnergy([0.2, 0.5])
        //rain
        } else if ((conditionId >= 500 && conditionId <= 531) || (conditionId >= 300 && conditionId <= 321)){
          setEnergy([0.1,0.4])
        //clear conditions or others
        } else {
          setEnergy([0.3,0.7]) 
        }

      //cold temperatures
      } else {
        //partial clouds
        if (conditionId >= 801 && conditionId <= 803) {
          setEnergy([0.4, 0.6])
        //overcast
        } else if (conditionId == 804) {
          setEnergy([0.3, 0.5])
        //snow
        } else if (conditionId >= 600 && conditionId <= 622) {
          setEnergy([0.3,0.5])
        //clear conditions or others
        } else {
          setEnergy([0.5,0.7]) 
        }
      }
    }

    //VALENCE -------------------------------------
    function getValence(temp, conditionId) {

      let temperature = temp - 273.15

      //hot temperatures
      if (temperature >= 18) {

        //partial clouds
        if (conditionId >= 801 && conditionId <= 803) {
          setValence([0.6, 1])
        //overcast
        } else if (conditionId == 804) {
          setValence([0.4, 0.6])
        //rain
        } else if ((conditionId >= 500 && conditionId <= 531) || (conditionId >= 300 && conditionId <= 321)){
          setValence([0.4,0.55])
        //storm or tornado
        } else if ((conditionId >= 200 && conditionId <= 232) || conditionId == 781) {
          setValence([0.2,0.7])
        //clear conditions or others
        } else {
          setValence([0.6,1]) 
        }
      
      //cool temperatures
      } else if (temperature >= 0) {

        //partial clouds
        if (conditionId >= 801 && conditionId <= 803) {
          setValence([0.3, 0.6])
        //overcast
        } else if (conditionId == 804) {
          setValence([0.1, 0.4])
        //rain
        } else if ((conditionId >= 500 && conditionId <= 531) || (conditionId >= 300 && conditionId <= 321)){
          setValence([0,0.4])
        //clear conditions or others
        } else {
          setValence([0.6,1]) 
        }

      //cold temperatures
      } else {
        //partial clouds
        if (conditionId >= 801 && conditionId <= 803) {
          setValence([0.2, 0.5])
        //overcast
        } else if (conditionId == 804) {
          setEnergy([0.2, 0.4])
        //snow
        } else if (conditionId >= 600 && conditionId <= 622) {
          setEnergy([0.2,0.5])
        //clear conditions or others
        } else {
          setEnergy([0.4,0.6]) 
        }
      }
    }

    //WORD ----------------------------

    function getWord(temp, conditionId) {

      let temperature = temp - 273.15

      //hot temperatures
      if (temperature >= 18) {

        //partial clouds
        if (conditionId >= 801 && conditionId <= 803) {
          setWord("happy")
        //overcast
        } else if (conditionId == 804) {
          setWord("chill")
        //rain
        } else if ((conditionId >= 500 && conditionId <= 531) || (conditionId >= 300 && conditionId <= 321)){
          setWord("mellow")
        //storm or tornado
        } else if ((conditionId >= 200 && conditionId <= 232) || conditionId == 781) {
          setWord("stormy")
        //clear conditions or others
        } else {
          setWord("happy") 
        }
      
      //cool temperatures
      } else if (temperature >= 0) {

        //partial clouds
        if (conditionId >= 801 && conditionId <= 803) {
          setWord("cool and happy")
        //overcast
        } else if (conditionId == 804) {
          setWord("chilly")
        //rain
        } else if ((conditionId >= 500 && conditionId <= 531) || (conditionId >= 300 && conditionId <= 321)){
          setWord("mellow and chilly")
        //clear conditions or others
        } else {
          setWord("cool and happy") 
        }

      //cold temperatures
      } else {
        //partial clouds
        if (conditionId >= 801 && conditionId <= 803) {
          setWord("fresh")
        //overcast
        } else if (conditionId == 804) {
          setWord("chilly and relaxed")
        //snow
        } else if (conditionId >= 600 && conditionId <= 622) {
          setWord("fluffy")
        //clear conditions or others
        } else {
          setWord("fresh")
      }
    }
    }

  useEffect(() => {
      //    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=a5c0db8f6adb10375ec56cd08ea0dc41&lat=${props.lat.toString()}&lon=${props.lon.toString()}`)
//    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=a5c0db8f6adb10375ec56cd08ea0dc41&lat=0&lon=0`)
      let lon = props.lon;
      let lat = props.lat;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            lon = (position.coords.longitude);
            lat= (position.coords.latitude);
  
        });
  
      } else {
        console.log("No location");
      }
      
       fetch(`https://api.openweathermap.org/data/2.5/weather?appid=a5c0db8f6adb10375ec56cd08ea0dc41&lat=${lat}&lon=${lon}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("latitude = "+lat)
          console.log("longitude = "+lon)
          console.log("temperature = " +(result.main.temp-273.15))
          console.log("weather id = "+result.weather[0].id)
          setIsLoaded(true);
          setTemperature(result.main.temp);
          setIcon(result.weather[0].icon);
          setId(result.weather[0].id);

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      ).then(
            getDanceability(temperature, id),
            getEnergy(temperature,id),
            getValence(temperature, id),
            getWord(temperature, id)
      )

  },[])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      
      <div>
          <SpotifyLogic dance={danceability} energy={energy} valence={valence} word={word} token={props.token}/>
      </div>
    );
  }


}
