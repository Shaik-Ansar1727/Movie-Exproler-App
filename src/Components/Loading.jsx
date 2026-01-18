import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Overlay = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #ffffff; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #e0e0e0;
  border-top-color: #1976d2;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

const Text = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`;

const Loading = () => {
  return (
    <Overlay role="status" aria-live="polite">
      <Spinner />
      <Text>Loading...</Text>
    </Overlay>
  );
};

export default Loading;
