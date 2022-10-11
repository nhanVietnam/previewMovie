import React from "react";
import MovieList from "components/movies/MovieList";

const HomePage = () => {
    return (
        <>
            <section className="movies-layout page-container-fluid pb-10">
                <h2 className="capitalize text-white mb-5 font-bold text-2xl">
                    Top Rated
                </h2>
                <MovieList type={"top_rated"}></MovieList>
            </section>
            <section className="movies-layout page-container-fluid pb-10">
                <h2 className="capitalize text-white mb-5 font-bold text-2xl">
                    Trending
                </h2>
                <MovieList type={"popular"}></MovieList>
            </section>
            <section className="movies-layout page-container-fluid pb-10">
                <h2 className="capitalize text-white mb-5 font-bold text-2xl">
                    Now Playing
                </h2>
                <MovieList type={"now_playing"}></MovieList>
            </section>
        </>
    );
};

export default HomePage;
