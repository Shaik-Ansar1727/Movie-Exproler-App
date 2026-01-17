import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { searchMovies, IMAGE_BASE_URL } from "../Services/tmdb";
import { useNavigate } from "react-router-dom";
import {
    PageContainer,
    PageTitle,
    MovieList,
    MovieCard,
    Poster,
    MovieTitle
} from "../Styles";


const Search = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");

    const { data, isLoading, error } = useQuery({
        queryKey: ["search", query],
        queryFn: () => searchMovies(query),
        enabled: !!query,
    });

    if (isLoading) return <p>Loading movies...</p>;
    if (error) return <p>Error loading movies</p>;

    if (!data?.results?.length) {
        return <p>No movies found</p>;
    }

    return (

        <PageContainer>
            <PageTitle>{`Results for ${query}`}</PageTitle>

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

    );
};

export default Search;
