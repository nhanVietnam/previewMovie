import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";

export default function MovieCredit() {
    const { movieId } = useParams();
    const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "credits"), fetcher);
    if (!data) return null;
    const { cast } = data;
    if (!cast || cast.length <= 0) return null;
    return (
        <div className="py-10">
            <h2 className="text-center text-white font-bold text-3xl mb-10">
                Casts
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {cast.slice(0, 4).map((item) => {
                    return (
                        <div className="cast-item" key={item.id}>
                            {!item.profile_path && (
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
                                    s
                                    className="w-full h-[350px] object-cover border border-primary  rounded-lg"
                                    alt=""
                                />
                            )}
                            {item.profile_path && (
                                <img
                                    src={tmdbAPI.imageOriginal(
                                        item.profile_path
                                    )}
                                    className="w-full h-[350px] object-cover rounded-lg"
                                    alt=""
                                />
                            )}
                            <h3 className="text-xl text-white font-medium">
                                {item.name}
                            </h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
