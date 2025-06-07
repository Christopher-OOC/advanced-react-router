import { useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div>
      <div>Error: {error.message}</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default ErrorPage;
