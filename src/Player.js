import "./App.css";
import React, {Component} from 'react';
import * as $ from "jquery";
import { Button } from "@mui/material";
import  SpotifyPlayer from 'react-spotify-web-playback';
import Location from './Location';

export function Player(props) {
        

        console.log(`https://open.spotify.com/embed/playlist/${props.playlist_id}`);
        //api call here for most recent playlist? -- populate iframe that way instead
        return(
            <div className="App">

            <h3
              style={{
                textAlign: "center",
                color: "#f8f0e3",
                fontSize: 20
              }}
            >
              It's 32°C and sunny. Here's your weather music!
            </h3>
            <div>

                <iframe src={`https://open.spotify.com/embed/playlist/00KbS09A5bGPaNxoHgeaqh`} width= "760" height="340" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

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