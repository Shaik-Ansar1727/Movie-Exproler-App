import { useNavigate } from "react-router-dom";
import {
  AboutContainer,
  BackButton,
  AboutTitle,
  SectionTitle,
  AboutText,
  AboutList,
  AboutListItem
} from "../Styles";

const About = () => {
  const navigate = useNavigate();

  return (
    <AboutContainer>
      <BackButton onClick={() => navigate(-1)}>Back</BackButton>

      <AboutTitle>About Movie Explorer</AboutTitle>

      <AboutText>
        Movie Explorer is a React-based web application that allows users to
        discover popular movies, search for films, and view detailed information
        about individual movies.
      </AboutText>

      <SectionTitle>What this project demonstrates</SectionTitle>

      <AboutList>
        <AboutListItem>
          Modern React architecture using functional components and hooks
        </AboutListItem>
        <AboutListItem>
          Server-state management with React Query for data fetching, caching,
          and error handling
        </AboutListItem>
        <AboutListItem>
          Clean separation of concerns using a dedicated service layer for API
          communication
        </AboutListItem>
        <AboutListItem>
          Client-side routing with React Router, including dynamic routes for
          movie details
        </AboutListItem>
        <AboutListItem>
          Scalable styling approach using styled-components
        </AboutListItem>
      </AboutList>

      <SectionTitle>Data Source</SectionTitle>

      <AboutText>
        All movie data is fetched from the TMDb (The Movie Database) API. This
        includes movie posters, ratings, genres, and detailed metadata.
      </AboutText>

      <SectionTitle>Purpose</SectionTitle>

      <AboutText>
        This project was built to practice real-world React patterns, focusing
        on maintainability, scalability, and clean code structure rather than
        just UI design.
      </AboutText>

      <AboutText>
        It serves as a foundation that can be extended with features such as
        trailers, cast information, similar movies, and enhanced user
        experience improvements.
      </AboutText>
    </AboutContainer>
  );
};

export default About;
