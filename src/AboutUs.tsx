import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <button onClick={handleClick}>route to home</button>
    </>
  );
}

export default AboutUs;
