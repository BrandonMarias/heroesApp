import PropTypes from "prop-types";
import { getHeroesByPublisher, HeroCard } from "../";
import { useMemo } from "react";
export const HeroesList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <div className="row row-cols-1 row-cols-md-3 g-3 mt-5">
            {heroes.map((hero) => (
                <HeroCard {...hero} key={hero.id} />
            ))}
        </div>
    );
};

HeroesList.propTypes = {
    publisher: PropTypes.array.isRequired,
};
