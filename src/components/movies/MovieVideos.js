import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";

export default function MovieVideos() {
    const { movieId } = useParams();
    const { data, error } = useSWR(
        tmdbAPI.getMovieMeta(movieId, "videos"),
        fetcher
    );
    // console.log(data);
    if (!data) return null;
    const { results } = data;
    if (!results && results.length <= 0) return null;
    return (
        <div className="py-10">
            <div className="flex flex-col gap-10">
                {results.slice(0, 2).map((item) => {
                    return (
                        <div key={item.id}>
                            <h3 className="mb-5 p-3 text-xl font-medium text-white bg-secondary inline-block">
                                {item.name}
                            </h3>
                            <div className="w-full aspect-video">
                                <iframe
                                    width="864"
                                    height="486"
                                    src={`https://www.youtube.com/embed/${item.key}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full object-fill"></iframe>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
