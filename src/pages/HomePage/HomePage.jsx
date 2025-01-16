import { Link } from "react-router-dom";
import css from './HomePage.module.css'

const HomePage = () => {
  return (
    <main className={css.main}>
      <h1>Campers of your dreams</h1>
      <p>You can find everything you want in our catalog</p>
      <Link to={"/catalog"}>View Now</Link>
    </main>
  );
}

export default HomePage