import "./App.css";
import React, { Component, useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Gradient } from "react-gradient";
import { Button } from "@mui/material";
import Logo from "./logo.svg";
import { Redirect } from "react-router-dom";
import { Waves } from "./Components/Waves";
import { Location } from "./Location";
import spotifyLogo from "./spotifyLogo.svg";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import "react-spotify-auth/dist/index.css"; // if using the included styles
import Cookies from "js-cookie";
import { SpotifyApiContext } from "react-spotify-api";

//export const authEndpoint = 'https://accounts.spotify.com/authorize';

let latitude;
let longitude;
const clientId = "2707363467a54d36b4f113d79313df97";
const redirectUri = "http://localhost:3000/";
//scopes required from spotify
const scopes = [
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-library-read",
  "user-library-modify",
  "user-top-read",
  "playlist-modify-public",
  "playlist-modify-private",
  "playlist-read-collaborative",
  "playlist-read-private"
  
];

const gradients = [
  ["#F8D770", "#E27AB2"],
  ["#574B95", "#2459B6", "#002966"],
];

function Welcome() {
    
    const [lon, setLon] = useState(0)
    const [lat, setLat] = useState(0)

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            setLon(position.coords.longitude);
            setLat(position.coords.latitude);
            
  
        });
  
      } else {
        console.log("No location");
      }
  useEffect(() => {
      
    
  }, []);

  const token = Cookies.get("spotifyAuthToken");

  console.log("Token " + token);

  return (
    <div className="App">
      <header className="App-header">
        <Gradient
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            alignItems: "center",
          }}
          gradients={gradients} // required
          property="background"
          duration={9000}
          angle="0deg"
        >
          {/* <Waves/> */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              style={{ height: 250, width: 250 }}
              src={Logo}
              alt="skytunes logo"
            />
            <h3
              style={{
                marginLeft: 100,
                textAlign: "right",
                color: "#002966",
                letterSpacing: 5,
              }}
            >
              {" "}
              nature's <br /> music
            </h3>
          </div>
          <div style={{ justifyContent: "space-between" }}>
            <p
              style={{
                marginTop: 40,
                textAlign: "centre",
                color: "#f8f0e3",
                zIndex: 100,
              }}
            >
              Connect your Spotify and location to get started
            </p>

            <div style={{ display: "flex", flexDirection: "column"}}>
              
              <Button
                variant="contained"
                style={{
                  height: 50,
                  position: "relative",
                  top: 25,
                  borderRadius: 25,
                  textTransform: "none",
                  backgroundColor: "#f8f0e3",
                  color: "#002966",
                  fontSize: 15,
                }}
                startIcon={
                  <img style={{ height: 50, width: 50 }} src={spotifyLogo} />
                }
              >
                Connect to Spotify
              </Button>
            </div>
          </div>
         
         
          {/* <SpotifyAuth
              redirectUri="http://localhost:3000/Welcome"
              clientID="2707363467a54d36b4f113d79313df97"
              scopes={scopes}
              //btnClassName={'spotify-button'}
               // either style will work
            /> */}
            
          {token ? (
             <Location lat={lat} lon={lon} token={token}/>
            // <Redirect push to={{pathname: "/player", state: {token: token}}}/>
          ) : (
            // Display the login page
            <SpotifyAuth
              redirectUri="http://localhost:3000/Welcome"
              clientID="2707363467a54d36b4f113d79313df97"
              scopes={scopes}
              //btnClassName={'spotify-button'}
               // either style will work
            />
          )}
          {/* <Button  variant="contained"
                style={{
                  height: 50,
                  marginTop: 15,
                  borderRadius: 25,
                  textTransform: "none",
                  backgroundColor: "#f8f0e3",
                  color: "#002966",
                  fontSize: 15,
                }}><SpotifyAuth
              redirectUri="http://localhost:3000/Welcome"
              clientID="2707363467a54d36b4f113d79313df97"
              scopes={scopes}
              noLogo={true}
               // either style will work
            /></Button> */}

        </Gradient>
      </header>
      <footer></footer>
    </div>
  );
}
export default Welcome;
