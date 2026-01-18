import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { searchMovies, IMAGE_BASE_URL } from "../Services/tmdb";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import ErrorState from "../Components/ErrorState";
import {
    PageContainer,
    PageTitle,
    MovieList,
    MovieCard,
    Poster,
    MovieTitle,
    BackButton,
} from "../Styles";
import { getPosterUrl } from "../utils/getPosterUrl";



const Search = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["search", query],
        queryFn: () => searchMovies(query),
        enabled: !!query,
        gcTime: 1000 * 60 * 2,
        refetchOnWindowFocus: false,
    });

    if (isLoading) {
        return (<Loading />);
    }
    if (error) {
        return (
            <ErrorState
                title="Movie not found"
                message="The movie you’re looking for doesn’t exist or was removed."
                onRetry={() => navigate(-1)}
            />
        );
    }



    if (!data?.results?.length) {
        return (
            <ErrorState
                title="No movies found"
                message="Try searching with a different keyword."
            />
        );
    }

    return (

        <PageContainer>
            <BackButton onClick={() => navigate(-1)}>Back</BackButton>

            <PageTitle>{`Results for ${query}`}</PageTitle>

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

    );
};

export default Search;
