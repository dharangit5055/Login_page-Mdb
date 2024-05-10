import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  return (
    <div className="home">
      <h3>Welcome {location.state.id}!! </h3>
      <h4>Hope you are good😊</h4>
    </div>
  );
}

export default Home;
