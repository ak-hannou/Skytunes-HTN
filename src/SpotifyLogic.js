import "./App.css";
import React, {Component, useEffect, useState} from 'react';
import { TextField } from "@mui/material";
import { Gradient } from "react-gradient";
import { Button } from "@mui/material";
import Logo from "./logo.svg";
import {Redirect} from "react-router-dom";
import { Player } from "./Player";
let playlist_id ='';

export function SpotifyLogic(props) {

        let user_id ='';
        let danceability = [0.7,1]
        let valence = [0.6, 1];
        let energy = [0.7,1];
        let artist = []
        let tracksForNewPlaylist = [];
        console.log(props)
    useEffect( async ()=>{
            const getId = await fetch("https://api.spotify.com/v1/me", {
                'method': 'GET', 
                'headers': {'Authorization': 'Bearer ' + props.token}
            }).then(res => res.json()).then(data=>{user_id=data.id});

            const getTopArtists = await fetch("https://api.spotify.com/v1/me/top/artists", {
                'method': 'GET', 
                'headers': {'Accept': 'application/.json', 'Content-Type': 'application/json','Authorization': 'Bearer ' + props.token}}).then(res => res.json()).then((result) => {
                   
                     let data = result.items;
                     for(let i =0; i <5; i++){
                         console.log(data[i])
                         artist.push(data[i].id);
                     }
                   });
            const makePlaylist = await  fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, { 
                'method': 'POST', 
                'headers': {'Content-Type': 'application/json','Authorization': 'Bearer ' + props.token},
                'body': JSON.stringify({name: 'My Weather Music'})
           }).then(res => res.json()).then((result) => {
            playlist_id=result.id
          });

          const getRecommendations = await fetch(`https://api.spotify.com/v1/recommendations?limit=10&market=US&seed_artists=${artist[0]},${artist[1]},${artist[2]},${artist[3]},${artist[4]}&min_danceability=${danceability[0]}&max_danceability=${danceability[1]}&min_energy=${energy[0]}&max_energy=${energy[1]}&min_valence=${valence[0]}&max_valence${valence[1]}`,{
            'method': 'GET', 
            'headers': {'Accept': 'application/.json', 'Content-Type': 'application/json','Authorization': 'Bearer ' + props.token}
         }).then(res => res.json()).then(data=>{
             console.log(data)
             let tracks = data.tracks;
             for(let i=0;i<10;i++){
                 tracksForNewPlaylist.push(tracks[i].uri)
             }
        });

        const buildPlaylist = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, { //INSERT PLAYLIST ID 
        'method': 'POST', 
        'headers': {'Accept': 'application/.json', 'Content-Type': 'application/json','Authorization': 'Bearer ' + props.token},
        'body': JSON.stringify(tracksForNewPlaylist) //INSERT SONG URIS HERE    
        
    })   })

    return(
        <div>
            <Player conditions={props.weather} playlist_id={playlist_id} token={props.token}/>
        </div>
        )
}