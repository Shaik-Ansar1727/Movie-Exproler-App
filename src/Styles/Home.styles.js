import styled from "styled-components";

export const PageTitle = styled.h1`
  margin-bottom: 1rem;
`;

export const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const MovieCard = styled.div`
  width: 150px;
  text-align: center;
`;

export const Poster = styled.img`
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
