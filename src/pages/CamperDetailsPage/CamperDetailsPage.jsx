import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchCamperById } from "../../redux/campersOps";
import { selectCamper } from "../../redux/selectors";
import Camper from "../../components/Camper/Camper";
import css from "./CamperDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [id, dispatch]);

  const getActiveClass = ({ isActive }) => {
    return isActive ? css.active : "";
  };

  return (
    <div>
      <Camper camper={camper} />
      <ul>
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
    </div>
  );
};

export default CamperDetailsPage;
