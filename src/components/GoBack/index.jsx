import { useNavigate } from "react-router-dom";

export const GoBack = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate(-1)}>Go Back</button>;
};
