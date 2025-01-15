import CategoriesList from "../CategoriesList/CategoriesList";

const CamperItem = ({ camper }) => {
  const { id, name, price, rating, location, description, gallery, reviews } = camper;
  
  return (
    <li id={id}>
      <img src={gallery[0].thumb} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{price.toFixed(2)}</p>
      </div>
      <div>
        <p>{rating}({reviews.length} Reviews)
          <span>{ location}</span>
        </p>
        <p>{description}</p>
        <CategoriesList camper={ camper} />
      </div>
    </li>
  );
}

export default CamperItem