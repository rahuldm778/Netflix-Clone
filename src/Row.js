import React, {useState, useEffect} from 'react'
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

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
  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className="row_posters">
            {movies.map( x => {
               return <img key={x.id} className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${isLargeRow ? x.poster_path : x.backdrop_path}`} alt={x.name} />;
            })}
        </div>
    </div>
  )
}

export default Row