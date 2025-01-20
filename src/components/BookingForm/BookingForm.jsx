import { useRef, useState } from "react";
import css from "./BookingForm.module.css";
import toast from "react-hot-toast";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Your booking request was sent successfully!");
      setFormData({ name: "", email: "", bookingDate: "", comment: "" });
    }, 2000); 
  };

  const toastDisplayed = useRef(false);


  return (
    <div className={css.bookingFormContainer}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name*"
          required
          className={css.input}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email*"
          required
          className={css.input}
        />
        <input
          type="date"
          name="bookingDate"
          value={formData.bookingDate}
          placeholder="Booking date*"
          onChange={handleChange}
          required
          className={css.input}
        />
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Comment"
          className={css.textarea}
        />
        <button
          type="submit"
          className={`redBtn ${css.submitBtn}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
      {successMessage && !toastDisplayed.current &&
     toast.success(successMessage)&&
     (toastDisplayed.current = true)
   }
    </div>
  );
};

export default BookingForm;
