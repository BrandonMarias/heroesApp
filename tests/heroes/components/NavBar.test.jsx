const { screen, render, fireEvent } = require("@testing-library/react");
const { NavBar } = require("../../../src/heroes");
const { AuthContext } = require("../../../src/auth/context/AuthContext");
const { MemoryRouter, useNavigate } = require("react-router-dom");

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));

describe("Pruebas en <NavBar/>", () => {
    const contextValue = {
        user: {
            logged: true,
            name: "Brandon",
        },
        logout: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("debe de mostrar el Logout", () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <NavBar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText("Logout")).toBeTruthy();
    });

    test("debe llamar el logout y navigate cuando se hace click en el boton", () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <NavBar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const button = screen.getByText("Logout");

        fireEvent.click(button);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockNavigate).toHaveBeenCalledWith("/login", { replace: true });
    });
});
