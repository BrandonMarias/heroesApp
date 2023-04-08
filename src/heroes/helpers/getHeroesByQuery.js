import { heroes } from "../data/heroes";

export const getHeroesByQuery = (name = "") => {
    name = name.toLocaleLowerCase().trim();
    if (name === "") return [];
    return heroes.filter(
        (hero) =>
            hero.superhero.toLocaleLowerCase().includes(name) ||
            hero.characters.toLocaleLowerCase().includes(name)
    );
};
 