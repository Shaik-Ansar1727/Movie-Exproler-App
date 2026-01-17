import styled from "styled-components";


export const PageContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;



export const PageTitle = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.6rem;
  letter-spacing: 1.8px;
  /* color: #ffffff; */
  margin-bottom: 1.2rem;
  margin-left: 3rem;

`;

export const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;

`;

export const MovieCard = styled.div`
  width: 150px;
  text-align: center;
  
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover  {
    transform: scale(1.05);
  }
`;


export const Poster = styled.img`
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  


`;

export const MovieTitle = styled.p`
  margin-top: 0.6rem;             
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;

  text-align: center;
  line-height: 1.3;
`;




//components for about page



export const AboutContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;

  background: radial-gradient(
    circle at top,
    #1f1f1f,
    #0f0f0f
  );

  color: #f1f1f1;
  font-family: 'Montserrat', sans-serif;
  border-radius: 12px;
`;

export const BackButton = styled.button`
  background: transparent;
  border: 1px solid #ff4757;
  color: #ff4757;
  padding: 0.4rem 0.9rem;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 2rem;

  &:hover {
    background: #ff4757;
    color: #fff;
  }
`;

export const AboutTitle = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.6rem;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
`;

export const AboutText = styled.p`
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #ddd;
`;

export const AboutList = styled.ul`
  padding-left: 1.2rem;
  margin-top: 1rem;
`;

export const AboutListItem = styled.li`
  margin-bottom: 0.6rem;
  line-height: 1.6;
`;