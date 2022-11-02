import movieTrailer from 'movie-trailer';
import React, {useState, useEffect} from 'react'
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            //console.log(request)
            setMovies(request.data.results);
            return request;
        };
        fetchData();
    }, [fetchUrl]);

    //console.log(movies,fetchUrl)
    const opts ={
        height:"390",
        width:"100%",
        playerVars : {
            autoplay:1,
        },
    }

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || movie?.title || "")
            .then(url => {
                const urlParam = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParam.get('v'));
            })
            .catch(err => console.log(err))
        }
    }
  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className="row_posters">
            {movies.map( x => {
               return <img 
                        key={x.id} 
                        onClick={() => handleClick(x)}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                        src={`${base_url}${isLargeRow ? x.poster_path : x.backdrop_path}`} 
                        alt={x.name} 
                      />;
            })}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row