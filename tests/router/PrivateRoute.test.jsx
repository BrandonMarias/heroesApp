import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe("prueba en el <PrivateRoute/>", () => {
    test("necesita mostar el children si el usuario esta autenticado", () => {
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            user: {
                logged: true,
            },
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/marvel"]}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText("Ruta privada")).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith(
            "lastPath",
            "/marvel"
        );
    });
});
