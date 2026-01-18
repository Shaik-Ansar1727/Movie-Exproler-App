import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieById, IMAGE_BASE_URL } from "../Services/tmdb";
import Loading from "../Components/Loading";
import ErrorState from "../Components/ErrorState";

import {
  DetailsContainer,
  DetailsContent,
  BackButton,
  MovieTitle,
  Tagline,
  Poster,
  InfoGrid,
  InfoItem,
  SectionTitle,
  OverviewText
} from "../Styles/MovieDetails.styles";

import { getPosterUrl } from "../utils/getPosterUrl";


const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieById(id),
  });

  if (isLoading) {
    return (<Loading />);
  }

  if (error) {
    const isNotFound = error.message === "NOT_FOUND";

    return (
      <ErrorState
        title={isNotFound ? "Movie not found" : "Something went wrong"}
        message={
          isNotFound
            ? "The movie you’re looking for doesn’t exist."
            : "Please try again later."
        }
        onRetry={() => navigate("/")}
      />
    );
  }



  const releaseYear = data.release_date
    ? data.release_date.split("-")[0]
    : "N/A";

  const runtime = data.runtime
    ? `${Math.floor(data.runtime / 60)}h ${data.runtime % 60}m`
    : "N/A";

  const genres =
    data.genres?.length > 0
      ? data.genres.map((g) => g.name).join(", ")
      : "N/A";

  return (
    <DetailsContainer>
      <DetailsContent>
        <BackButton onClick={() => navigate(-1)}>Back</BackButton>

        <MovieTitle>
          {data.title} ({releaseYear})
        </MovieTitle>

        {data.tagline && <Tagline>{data.tagline}</Tagline>}

        {data.poster_path && (
          <Poster
            src={getPosterUrl(data.poster_path)}
            alt={data.title}
          />

        )}

        <InfoGrid>
          <InfoItem>⭐ <strong>Rating:</strong> {data.vote_average} / 10</InfoItem>
          <InfoItem>🗳 <strong>Votes:</strong> {data.vote_count}</InfoItem>
          <InfoItem>⏱ <strong>Runtime:</strong> {runtime}</InfoItem>
          <InfoItem>🎭 <strong>Genres:</strong> {genres}</InfoItem>
          <InfoItem>📅 <strong>Status:</strong> {data.status}</InfoItem>
          <InfoItem>🌐 <strong>Language:</strong> {data.original_language.toUpperCase()}</InfoItem>

          {data.budget > 0 && (
            <InfoItem>💰 <strong>Budget:</strong> ${data.budget.toLocaleString()}</InfoItem>
          )}

          {data.revenue > 0 && (
            <InfoItem>💵 <strong>Revenue:</strong> ${data.revenue.toLocaleString()}</InfoItem>
          )}
        </InfoGrid>

        <SectionTitle>Overview</SectionTitle>
        <OverviewText>
          {data.overview || "No description available."}
        </OverviewText>
      </DetailsContent>
    </DetailsContainer>
  );
};

export default MovieDetails;
