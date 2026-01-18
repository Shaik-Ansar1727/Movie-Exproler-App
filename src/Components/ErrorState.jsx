import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  color: #d32f2f;
  margin-bottom: 0.5rem;
`;

const Message = styled.p`
  font-size: 1rem;
  color: #555;
  max-width: 420px;
`;

const Button = styled.button`
  margin-top: 1.5rem;
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: #1976d2;
  color: white;

  &:hover {
    background: #1565c0;
  }
`;

const ErrorState = ({ 
  title = "Something went wrong", 
  message = "We couldn’t load the data. Please try again.", 
  onRetry 
}) => {
  return (
    <Wrapper role="alert">
      <Icon>⚠️</Icon>
      <Title>{title}</Title>
      <Message>{message}</Message>

      {onRetry && (
        <Button onClick={onRetry}>
          Try Again
        </Button>
      )}
    </Wrapper>
  );
};

export default ErrorState;
