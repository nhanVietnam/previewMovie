import React, { Fragment, lazy, Suspense } from "react";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layouts/Main";
// import HomePage from "./pages/HomePage";
// import MoviePage from "./pages/MoviePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";

//Dynamic import
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));

const App = () => {
    return (
        <>
            <Suspense fallback={<></>}>
                <Routes>
                    <Route element={<Main></Main>}>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Banner></Banner>
                                    <HomePage></HomePage>
                                </>
                            }></Route>
                        <Route
                            path="/movies"
                            element={<MoviePage></MoviePage>}></Route>
                        <Route
                            path="/movies/:movieId"
                            element={
                                <MovieDetailsPage></MovieDetailsPage>
                            }></Route>
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
};

export default App;
