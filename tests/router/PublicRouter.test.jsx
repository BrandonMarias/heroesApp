import { screen, render } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRoute } from "../../src/router/PublicRoute";
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe("describe en public route", () => {
    test("debe mostarr el children si no esta autenticado", () => {
        const contextValue = { logged: false };
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText("ruta publica")).toBeTruthy();
    });

    test("should navegar si esta autenticado", () => {
        const contextValue = {
            user: {
                logged: true,
            },
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/login"]}>
                    <Routes>
                        <Route path="marvel" element={<h1>Pagina marvel</h1>} />
                        <Route
                            path="login"
                            element={
                                <PublicRoute>
                                    <h1>ruta publica</h1>
                                </PublicRoute>
                            }
                        />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText("Pagina marvel")).toBeTruthy();
    });
});
