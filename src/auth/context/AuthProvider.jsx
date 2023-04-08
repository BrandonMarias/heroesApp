import React, { useReducer } from "react";
import { AuthContext } from "../context/AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const init = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return {
        logged: !!user,
        ...user,
    };
};

export const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(authReducer, {}, init);

    const login = (name = "") => {
        const user = { id: "ABC", name };
        const action = { type: types.login, payload: user };
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(action);
    };

    const logout = () => {
        localStorage.removeItem("user");
        const action = { type: types.logout}
        console.log(action)
        dispatch(action)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
