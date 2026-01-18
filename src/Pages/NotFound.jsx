import { useNavigate } from "react-router-dom";
import ErrorState from "../Components/ErrorState";
import { PageContainer } from "../Styles";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <ErrorState
        title="404 – Page Not Found"
        message="The page you’re looking for doesn’t exist."
        onRetry={() => navigate("/")}
      />
    </PageContainer>
  );
};

export default NotFound;
