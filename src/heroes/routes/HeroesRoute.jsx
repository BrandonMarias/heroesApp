import { Route, Routes } from "react-router-dom";
import { DcPage, NavBar, MarvelPage, SearchPage, HeroPage, HomePage } from "..";

export const HeroesRoute = () => {
    return (
        <>
            <NavBar />

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:heroId" element={<HeroPage />} />
                </Routes>
            </div>
        </>
    );
};
