import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  return <p onClick={() => navigate(-1)}>Go Back</p>;
};

export default GoBack;
