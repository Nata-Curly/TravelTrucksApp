import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <main className={css.notFound}>
      <div className={css.wrapper}>
        <h1>Oops! Something went wrong...</h1>
        <Link className="redBtn" to="/">
          Home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
