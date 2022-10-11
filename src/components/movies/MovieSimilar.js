import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import MovieCard from "./MovieCard";

export default function MovieSimilar() {
    const { movieId } = useParams();
    const { data, error } = useSWR(
        tmdbAPI.getMovieMeta(movieId, "similar"),
        fetcher
    );
    console.log(data);

    if (!data) return null;
    const { results } = data;
    if (!results && results.length <= 0) return null;
    return (
        <div className="py-10 page-container-fluid">
            <h2 className="text-3xl font-medium mb-10 text-white">
                Similar movies
            </h2>
            <div className="movie-list">
                <Swiper
                    grabCursor={"true"}
                    spaceBetween={40}
                    slidesPerView={"auto"}>
                    {results.length > 0 &&
                        results.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <MovieCard item={item}></MovieCard>
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
            </div>
        </div>
    );
}
