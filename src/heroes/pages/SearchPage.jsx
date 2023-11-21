// import { HeroCard } from "../components/HeroCard"
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm"
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });



  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSearchSubmit} method="get">  {/*  EL METHOD EN EL FORM SIRVE PARA ENVIAR EL CONTENIDO DEL INPUT A LA URL */}


            <input value={searchText} onChange={onInputChange} type="text" placeholder="Search a Hero" className="form-control" name="searchText" autoComplete="off" />

            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            (q === '')
              ? <div className="alert alert-primary">Search a Hero</div>
              : (heroes.length === 0) && <div className="alert alert-danger">No Hero with <b>{q}</b></div>
          }
          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>


      </div>
    </>
  )
}
