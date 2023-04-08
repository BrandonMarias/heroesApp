import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {
    const characterByHero = alter_ego !== characters && (
        <p className="card-text">{characters}</p>
    );
    return (
        <div className="col animate__animated animate__fadeIn mt-3">
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img
                            src={`./assets/${id}.jpg`}
                            className="card-img"
                            alt={superhero}
                        />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body d-flex align-items-start flex-column h-100">
                            <div className="mb-auto ">
                                <h5 className="card-title">{superhero}</h5>
                                <p className="card-text">{alter_ego}</p>
                                {characterByHero}
                                <p className="card-text">
                                    <small className="text-muted">
                                        {first_appearance}
                                    </small>
                                </p>
                            </div>
                            <div className="">
                                <Link
                                    className="btn btn-outline-primary"
                                    to={`/hero/${id}`}
                                >
                                    More...
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

HeroCard.propTypes = {
    id: PropTypes.string.isRequired,
    superhero: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    alter_ego: PropTypes.string.isRequired,
    first_appearance: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired,
};
