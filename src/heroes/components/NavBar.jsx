import { useContext } from "react";
import { useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { ButtonNavToggler, SearchForm } from "./";

const activeLink = ({ isActive }) => {
    return `nav-item nav-link ${isActive ? "active" : ""}`;
};

export const NavBar = () => {
    const buttonToggle = useRef();
    const { user, logout} = useContext(AuthContext);
    const desactiveToggle = () => {
        if (screen.width < 768) buttonToggle.current.click();
    };

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate("/login", { replace: true });
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand h1" to="/">
                    Heroes App
                </Link>
                <ButtonNavToggler refButtonToggler={buttonToggle} />
                <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbar"
                >
                    <div className="navbar-nav" onClick={desactiveToggle}>
                        <NavLink className={activeLink} to="marvel">
                            Marvel
                        </NavLink>
                        <NavLink className={activeLink} to="dc">
                            Dc
                        </NavLink>
                    </div>

                    <span className="navbar-text text-white">{user?.user}</span>

                    <div className="navbar-nav">
                        <SearchForm desactiveToggle={desactiveToggle} />
                        <button
                            className="btn btn-outline-secondary me-2 mt-2 mt-md-0"
                            type="submit"
                            onClick={onLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
