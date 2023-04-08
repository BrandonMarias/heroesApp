import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { AppRouter } from "../../src/router/AppRouter";

describe("pruebas en <AppRouter", () => {
    test("debe mostrar el login en caso de que no este autenticado", () => {
        const contextValue = {
            user: {
                logged: false,
            },
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/marvel"]}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText("Login")).toBeTruthy();
    });

    test("debe mostrar el componente marvel si esta autenticado", () => {
        const contextValue = {
            user: {
                logged: true,
                name: "Fernando",
            },
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/marvel"]}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText("Marvel")).toBeTruthy();
    });
});
