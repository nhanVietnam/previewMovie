import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import MovieCredit from "components/movies/MovieCredit";
import MovieSimilar from "components/movies/MovieSimilar";
import MovieVideos from "components/movies/MovieVideos";
import { fetcher, tmdbAPI } from "../config";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { data, error } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);
    // console.log(
    //     "🚀 ~ file: MovieDetailsPage.js ~ line 9 ~ MovieDetailsPage ~ data",
    //     data
    // );
    if (!data) return null;
    const { backdrop_path, poster_path, title, genres, overview } = data;
    return (
        <>
            <div className="py-10">
                <div className="w-full sm:hidden lg:block h-[600px] relative mb-10">
                    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                    <div
                        style={{
                            backgroundImage: `url(${tmdbAPI.imageWidth500(
                                backdrop_path
                            )})`,
                        }}
                        className="w-full h-full bg-cover bg-no-repeat"></div>
                </div>
                <div className="w-full h-[400px] max-w-[800px] mx-auto sm:mt-0 lg:-mt-[200px] relative z-10 pb-10">
                    <img
                        src={tmdbAPI.imageOriginal(poster_path)}
                        className="w-full h-full object-cover"
                        alt=""
                    />
                </div>
                <h1 className="text-center text-4xl font-bold text-white mb-10">
                    {title}
                </h1>
                {genres.length > 0 && (
                    <div className="flex items-center justify-center gap-x-5 mb-10">
                        {genres.map((item) => {
                            return (
                                <span
                                    key={item.id}
                                    className="border border-secondary text-secondary py-2 px-4 rounded-lg">
                                    {item.name}
                                </span>
                            );
                        })}
                    </div>
                )}
                <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10 text-white">
                    {overview}
                </p>
            </div>
            <MovieCredit></MovieCredit>
            <MovieVideos></MovieVideos>
            <MovieSimilar></MovieSimilar>
        </>
    );
};

export default MovieDetailsPage;
