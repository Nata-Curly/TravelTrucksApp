import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchCamperById } from "../../redux/campersOps";
import { selectCamper, selectError, selectIsLoading } from "../../redux/selectors";
import Camper from "../../components/Camper/Camper";
import css from "./CamperDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);


  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [id, dispatch]);

  const getActiveClass = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : css.link;
  };

  return (
    <main className="container">
      <Camper camper={camper} />
      {isLoading && !error && <Loader/>}
      <ul className={css.wrapper}>
        <li>
          <NavLink className={getActiveClass} to="features">
            Features
          </NavLink>
        </li>
        <li>
          <NavLink className={getActiveClass} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default CamperDetailsPage;
