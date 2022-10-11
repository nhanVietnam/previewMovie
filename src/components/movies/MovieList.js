import React /*useEffect, useState */ from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import MovieCard from "./MovieCard";
import { MovieListLoading } from "./MovieListLoading";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

const MovieList = ({ type = "now_playing" }) => {
    // const [movies, setMovies] = useState([]);
    const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher);
    const movies = data?.results || []; // Not re-render
    // if (!movies && movies.length <= 0) return null;
    // console.log(data);
    // useEffect(() => {
    //     if (data && data.results) {
    //         setMovies(data.results);
    //     }
    // }, [data]);
    return (
        <div className="movie-list page-container-fluid">
            {!movies.length && (
                <div className="grid grid-cols-4 gap-x-8">
                    <MovieListLoading></MovieListLoading>
                </div>
            )}
            <Swiper
                grabCursor={"true"}
                spaceBetween={40}
                slidesPerView={"auto"}>
                {movies.length > 0 &&
                    movies.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <MovieCard item={item}></MovieCard>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </div>
    );
};

MovieList.propTypes = {
    type: PropTypes.string.isRequired,
};

function FallbackComponent() {
    return (
        <p className="bg-red-500 text-red-400">
            Something went wrong with this component
        </p>
    );
}

// const ComponentWithErrorBoundary = withErrorBoundary(ComponentThatMayError, {
//     FallbackComponent,
//     onError(error, info) {
//         // Do something with the error
//         // E.g. log to an error logging client here
//     },
// });

export default withErrorBoundary(MovieList, {
    FallbackComponent,
});
