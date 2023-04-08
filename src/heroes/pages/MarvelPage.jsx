import { HeroesList } from "../"

export const MarvelPage = () => {
  return (
    <>
        <h1 className="mt-4">MarvelPage</h1>
        <hr />
        <HeroesList publisher={["Marvel Comics"]}/>
    </>
  )
}
