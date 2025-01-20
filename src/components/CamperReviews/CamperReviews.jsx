import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/selectors";
import css from "./CamperReviews.module.css";
import Stars from "../Stars/Stars";
import { useEffect, useMemo } from "react";
import BookingForm from "../BookingForm/BookingForm";

const CamperReviews = () => {
  const camper = useSelector(selectCamper);
  const reviews = useMemo(() => camper?.reviews || [], [camper]);

  useEffect(() => {
    if (reviews.length > 0) {
      window.scrollBy({
        top: 600,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [reviews]);

  return (
    <div className={css.wrapper}>
      <ul className={css.reviewsList}>
        {reviews?.map((review, idx) => (
          <li key={idx}>
            <div className={css.reviewer}>
              <div className={css.avatar}>{review.reviewer_name[0]}</div>
              <div className={css.reviewWrapper}>
                <h3>{review.reviewer_name}</h3>
                <Stars rating={review.reviewer_rating} />
              </div>
            </div>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
      <BookingForm />
    </div>
  );
};

export default CamperReviews;
