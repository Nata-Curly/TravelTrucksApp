import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <h1>Campers of your dreams</h1>
      <p>You can find everything you want in our catalog</p>
      <Link to={"/catalog"}>View Now</Link>
    </main>
  );
}

export default HomePage