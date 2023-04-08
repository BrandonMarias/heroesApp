import { fireEvent, render, screen } from "@testing-library/react";
import { SearchPage } from "../../../src/heroes";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { AppRouter } from "../../../src/router/AppRouter";

const MockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => MockedUseNavigate,
}));

describe("Pruebas en <SearchPage", () => {

    beforeEach(() => {
        MockedUseNavigate.mockClear();
    });

    test("snapshot", () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();

        screen.debug();
    });

    test("should batman and the query with the input string", () => {
        render(
            <MemoryRouter initialEntries={["/search?q=batman"]}>
                <SearchPage />
            </MemoryRouter>
        );

        const image = screen.getByRole("img");
        expect(image.src).toContain("batman");
        expect(screen.getByText("Batman")).toBeTruthy();
    });

    test("should show an error if there is no hero", () => {
        render(
            <MemoryRouter initialEntries={["/search?q=batman123"]}>
                <SearchPage />
            </MemoryRouter>
        );

        expect(
            screen.getByText("There is no a hero with batman123")
        ).toBeTruthy();
    });

    test("should call the getHeroByQuery with the correct argument", () => {
        const contextValue = {
            user: {
                logged: true,
                name: "Fernando",
            },
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/search?q=batman"]}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const input = screen.getByRole("searchbox");

        fireEvent.change(input, { target: { value: "superman" } });

        expect(input.value).toBe("superman");

        const form = screen.getByRole("form");

        fireEvent.submit(form);

        expect(MockedUseNavigate).toHaveBeenCalledWith( "./search?q=superman" );

        screen.debug();
    });
});
