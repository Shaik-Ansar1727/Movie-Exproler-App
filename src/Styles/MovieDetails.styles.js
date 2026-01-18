import styled from "styled-components";



export const DetailsContainer = styled.div`
  min-height: 100vh;
  padding: 3rem 2rem;

  background: linear-gradient(
    135deg,
    #0f0f0f,
    #141414,
    #1c1c1c
  );

  color: #f1f1f1;
  font-family: 'Montserrat', sans-serif;
`;

export const DetailsContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const BackButton = styled.button`
  background: transparent;
  border: 1px solid #ff4757;
  color: #ff4757;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 2rem;

  &:hover {
    background: #ff4757;
    color: #fff;
  }
`;

export const MovieTitle = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3rem;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
`;

export const Tagline = styled.p`
  font-style: italic;
  color: #bbb;
  margin-bottom: 2rem;
`;

export const Poster = styled.img`
  width: 260px;
  border-radius: 12px;
  margin-bottom: 2rem;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

export const InfoItem = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
`;

export const SectionTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
`;

export const OverviewText = styled.p`
  line-height: 1.7;
  color: #ddd;
`;
