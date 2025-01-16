import css from './Camper.module.css'

const Camper = ({ camper }) => {
  if (!camper) {
    return;
  }

  const { name, price, rating, location, description, gallery, reviews } =
    camper;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        {rating}({reviews.length} Reviews)
        <span>{location}</span>
      </p>
      <p>€{price.toFixed(2)}</p>
      <ul className={css.camperList}>
        {gallery?.map((item, idx) => (
          <li key={idx}>
            <img className={css.camperImg} src={item.thumb} alt={name} />
          </li>
        ))}
      </ul>
      <p>{description}</p>
    </div>
  );
};

export default Camper;
