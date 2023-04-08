import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByQuery } from "../";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
    const location = useLocation();
    const { q = "" } = queryString.parse(location.search);
    const heroes = getHeroesByQuery(q);

    return (
        <>
            <h1 className="mt-4">Results</h1>
            <hr />

            <div className="row">
                <div className="col-md-7">
                    {q === "" && (
                        <div className="alert alert-info animate__animated animate__fadeIn">
                            Search a hero
                        </div>
                    )}

                    {q !== "" && heroes.length === 0 && (
                        <div className="alert alert-danger animate__animated animate__fadeIn">
                            There is no a hero with {q}
                        </div>
                    )}

                    {heroes.map((hero) => (
                        <HeroCard {...hero} key={hero.id} />
                    ))}
                </div>
            </div>
            <br />
        </>
    );
};
