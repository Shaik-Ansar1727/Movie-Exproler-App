import { useNavigate } from "react-router-dom";
import { fetchPopularMovies, IMAGE_BASE_URL } from '../Services/tmdb';
import { useQuery } from "@tanstack/react-query";
import {
    PageContainer,
    PageTitle,
    MovieList,
    MovieCard,
    Poster,
    MovieTitle
} from "../Styles";


const Home = () => {
    const navigate = useNavigate();

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


          
                <PageContainer>
                    <PageTitle>Popular Movies</PageTitle>

                    <MovieList >
                        {data.results.map((movie) => (
                            <MovieCard key={movie.id} onClick={() => { navigate(`/movie/${movie.id}`) }}>
                                <Poster
                                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <MovieTitle>{movie.title}</MovieTitle>
                            </MovieCard>
                        ))}
                    </MovieList>
                </PageContainer>


        </>
    )
}

export default Home
