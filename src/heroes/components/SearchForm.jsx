import { useNavigate } from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import PropTypes from "prop-types";
import { useRef } from "react";

export const SearchForm = ({ desactiveToggle }) => {
    const inputSearch = useRef();
    const navigate = useNavigate();
    const { searchText, handleChange, resetForm } = useForm({ searchText: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchText.trim().length < 2) return;
        desactiveToggle();
        navigate(`./search?q=${searchText.trim()}`);
    };
    const onIputClick = () => inputSearch.current.select();

    return (
        <form className="d-flex" onSubmit={handleSubmit} aria-label="form">
            <input
                ref={inputSearch}
                className="form-control me-2"
                type="search"
                autoComplete="off"
                placeholder="Search"
                aria-label="Search"
                name="searchText"
                value={searchText}
                onChange={handleChange}
                onClick={onIputClick}
            />
            <button className="btn btn-success me-2" type="submit">
                Search
            </button>
        </form>
    );
};

SearchForm.propTypes = {
    desactiveToggle: PropTypes.func.isRequired,
};
