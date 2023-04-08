import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe("Pruebas en authReducer", () => {
    test("should retourn default state", () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test("al llamar al login se debe autenticar", () => {
        const action = {
            type: types.login,
            payload: { name: "Brandon", id: "123" },
        };

        const state = authReducer({ logged: false }, action);

        expect(state).toEqual({
            logged: true,
            ...action.payload,
        });
    });

    test("al llamar logout debe borrar el usuario y cambuar el logged a false", () => {
        const state = {
            logged: true,
            name: "juan",
            id: "12345",
        };

        const action = {
            type: types.logout,
        };

        const newState = authReducer(state, action);

        expect(newState).toEqual({logged: false});
    });
});
