import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={`container ${css.main}`}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.slogan}>
        You can find everything you want in our catalog
      </p>
      <Link className="redBtn" to={"/catalog"}>
        View Now
      </Link>
    </main>
  );
};

export default HomePage;
