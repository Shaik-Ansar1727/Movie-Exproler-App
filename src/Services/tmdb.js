const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export { BASE_URL, IMAGE_BASE_URL };



export const fetchPopularMovies = async() => {

    const response = await fetch (
       `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    
    if(!response.ok){
        throw new Error("Failed to load popular movies")
    }

    const data = await response.json();
    return data;
};


export const fetchMovieById = (id) => {

};


export const searchMovies = (query) => {

};