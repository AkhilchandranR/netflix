import axios from 'axios';
import React,{ useEffect, useState } from 'react'
import requests from './request';

function Banner() {
    const [movie,setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending)
            console.log("requestttt",request)
        //     setMovie(request.data.results[
        //         Math.floor(Math.random()*request.data.results.length-1)
        //     ]);
        //     return request;
        // }
        // fetchData();
        }
        fetchData();
    },[]);
    return (
        <header className="banner"
        style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_image}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1>
                    {movie?.title || movie?.name || movie.original_name }
                </h1>
            </div>
        </header>
    )
}

export default Banner
