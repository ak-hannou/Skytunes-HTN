import "./App.css";
import React, {Component, useState, useEffect} from 'react';
import * as $ from "jquery";
import { Button } from "@mui/material";
import  SpotifyPlayer from 'react-spotify-web-playback';
import Location from './Location';
import Cookies from "js-cookie";
export function Player(props) {
        

        //console.log(`https://open.spotify.com/embed/playlist/${props.playlist_id}`);
        //api call here for most recent playlist? -- populate iframe that way instead
        const token = Cookies.get("spotifyAuthToken");
        let code = '';
        console.log(props.token)
        const [id, setId] = useState([])
        useEffect(()=>{

            const playlist_id = fetch("https://api.spotify.com/v1/me/playlists?limit=1", {
                'method': 'GET', 
                'headers': {'Authorization': 'Bearer ' + token}
                }).then(res => res.json()).then(data=>{return data.items[0].id});
    
            console.log(playlist_id)
    
            const printAddress = async () => {
                const a = await playlist_id;
                let temp = []
                temp.push(a)
                setId(temp)
              };
    
              printAddress();
        }, [])
        
       

        return(
            <div className="App">

            <h3
              style={{
                textAlign: "center",
                color: "#f8f0e3",
                fontSize: 20
              }}
            >
              It's {(props.conditions.main.temp - 273.15).toFixed(1)}°C and {props.conditions.weather[0].description}. Here's your weather music!
            </h3>
            <div>
                <iframe src={`https://open.spotify.com/embed/playlist/${id[0]}`} width= "760" height="340" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                </div>


            
                            {/* <h1>{props.playlist_id}</h1> */}
                            <p

                                style = {{
                                    alignContent: "center",
                                    color: "#000000",
                                    position: "relative",
                                    top: 555,
                                }}
                            >
                            {" "}
                            ________________________________________________________________________________________________________________________________________________________________
                            </p>
            </div>
        )
    
}