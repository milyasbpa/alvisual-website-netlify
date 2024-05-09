import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleClickAboutUs = () => {
    navigate("/about-us");
  };
  return (
    <>
      <button onClick={handleClickAboutUs}>route to about us</button>
    </>
  );
}

export default App;
