import React,{ useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css';
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
    //state
    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])
    //title,fetchurl is props
    const opts = {
        height: "400",
        width: "100%",
        playerVars: {autoplay: 1},
    }
    const handleClick=(movie)=>{
        if (trailerUrl){
            setTrailerUrl('');
        }
        else{
            movieTrailer(movie?.name || "")
            .then((url)=>{
                const urlparams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlparams.get("v"));
            }).catch((error)=>{
                console.log(error);
            })
            
        }
    }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className={`row__posters ${isLargeRow && "row__posterlarge"}`}>
                {movies.map(movie=>(
                    <img 
                    key={movie.id}
                    className="row__poster"
                    onClick={()=>handleClick(movie)}
                    src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
                ))}

            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div> 
    )
}

export default Row

