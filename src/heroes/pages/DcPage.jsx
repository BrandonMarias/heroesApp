import { HeroesList } from "../";

export const DcPage = () => {
    return (
        <>
            <h1 className="mt-4">DcPage</h1>
            <hr />
            <HeroesList publisher={["DC Comics"]}/>
        </>
    );
};
