import { HeroesList } from "../";

export const HomePage = () => {
    return (
        <>
            <h1 className="mt-4">Heores</h1>
            <hr />
            <HeroesList publisher={["DC Comics", "Marvel Comics"]} />
        </>
    );
};
