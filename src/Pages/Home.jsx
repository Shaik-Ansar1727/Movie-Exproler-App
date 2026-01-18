import { useNavigate } from "react-router-dom";
import { fetchPopularMovies, IMAGE_BASE_URL } from '../Services/tmdb';
import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading";
import ErrorState from "../Components/ErrorState";
import {
    PageContainer,
    PageTitle,
    MovieList,
    MovieCard,
    Poster,
    MovieTitle,
} from "../Styles";

import { getPosterUrl } from "../utils/getPosterUrl";



const Home = () => {
    const navigate = useNavigate();

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["PopularMovies"],
        queryFn: fetchPopularMovies,
    });

    if (isLoading) {
        return (
            <PageContainer>
                <PageTitle>Popular Movies</PageTitle>
                <Loading />
            </PageContainer>
        );
    }

    if (error) {
        return (
            <ErrorState
                title="Failed to load movies"
                message="Please check your internet connection and try again."
                onRetry={refetch}
            />
        );
    }



    return (
        <>



            <PageContainer>
                <PageTitle>Popular Movies</PageTitle>

                <MovieList >
                    {data.results.map((movie) => (
                        <MovieCard key={movie.id} onClick={() => { navigate(`/movie/${movie.id}`) }}>
                            <Poster
                                src={getPosterUrl(movie.poster_path)}
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
