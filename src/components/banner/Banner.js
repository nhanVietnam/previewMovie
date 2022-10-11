import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/scss";

import "swiper/css/autoplay";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import { useNavigate } from "react-router-dom";
import Button from "components/button/Button";

const Banner = () => {
    const navigate = useNavigate();
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=ac13c0de6c73a250c0462b6aa561e874`,
        fetcher
    );

    const movies = data?.results || []; // Not re-render
    if (!movies && movies.length <= 0) return null;
    return (
        <section className="banner h-[500px] page-container mb-10 overflow-hidden">
            <Swiper
                modules={[Autoplay]}
                grabCursor={"true"}
                slidesPerView="auto"
                autoplay={{
                    disableOnInteraction: "true",
                    delay: "3500",
                }}>
                {movies.length > 0 &&
                    movies.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <BannerItem item={item}></BannerItem>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </section>
    );
};

const BannerItem = ({ item }) => {
    const { title, poster_path, id } = item;

    const navigate = useNavigate();
    return (
        <div className="w-full h-full rounded-ld relative ">
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
            <img
                src={tmdbAPI.imageWidth500(poster_path)}
                alt=""
                className="w-full h-full object-cover rounded-lg object-center"
            />
            <div className="absolute left-5 bottom-5 w-full text-white">
                <h2 className="font-bold text-3xl mb-5">{title}</h2>
                <div className="flex items-center gap-x-3 mb-8">
                    <span className="border border-white rounded-md py-2 px-4">
                        Action
                    </span>
                    <span className="border border-white rounded-md py-2 px-4">
                        Adventure
                    </span>
                    <span className="border border-white rounded-md py-2 px-4">
                        Drama
                    </span>
                </div>
                <Button
                    className="w-auto"
                    onClick={() => navigate(`/movies/${id}`)}
                    bgColor="secondary">
                    Watch Now
                </Button>
            </div>
        </div>
    );
};

export default Banner;
