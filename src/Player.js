import React, {Component} from 'react';
import * as $ from "jquery";
import { Gradient } from "react-gradient";
import { Button } from "@mui/material";
import  SpotifyPlayer from 'react-spotify-web-playback';
import Location from './Location';


const gradients = [
    ["#F8D770", "#E27AB2"],
    ["#574B95", "#2459B6", "#002966"],
  ];

export function Player(props) {
        

        return(
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
                    angle="0deg">
                       

                        <h3
                            style={{
                                marginLeft: 100,
                                marginTop: 100,
                                color: "#002966",
                            }}
                            >
                            {" "}
                            Here's some music for your weather
                            </h3>
                            <h1>{props.playlist_id}</h1>
                            <iframe src={`https://open.spotify.com/embed/playlist/${props.playlist_id}`} width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                    </Gradient>

                  
                </header>
            </div>
        )
    
}