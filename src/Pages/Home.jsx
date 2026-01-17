import { Link ,useNavigate} from "react-router-dom";


import { fetchPopularMovies, IMAGE_BASE_URL } from '../Services/tmdb';
import { useQuery } from "@tanstack/react-query";
import {
    PageTitle,
    MovieList,
    MovieCard,
    Poster,
} from "../Styles";

const navigate = useNavigate();

const Home = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["PopularMovies"],
        queryFn: fetchPopularMovies,
    });

    if (isLoading) {
        return <p> Loading ....</p>

    }
    if (error) {
        return <p>Error loading movies</p>
    }

    
    return (
        <>
            Home
            <Link to="/search">Search</Link>

            


            <div>
                <PageTitle>Popular Movies</PageTitle>

                <MovieList >
                    {data.results.map((movie) => (
                        <MovieCard key={movie.id} onClick={()=>{navigate(`/movies/${movie.id}`)}}>
                            <Poster
                                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <p>{movie.title}</p>
                        </MovieCard>
                    ))}
                </MovieList>
            </div>



        </>
    )
}

export default Home
