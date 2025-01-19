import CampersList from "../../components/CampersList/CampersList"
import SearchForm from "../../components/SearchForm/SearchForm"
import css from './CatalogPage.module.css'

const CatalogPage = () => {
  return (
    <main className="container">
      <div className={css.catalogContainer}>
        <SearchForm />
        <CampersList />
      </div>
    </main>
  );
}

export default CatalogPage