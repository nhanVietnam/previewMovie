import React from "react";
import { LoadingSkeleton } from "../utils/LoadingSkeleton";

export const MovieCardLoading = () => {
    return (
        <div className="movie-card rounded-lg p-3 bg-slate-800 select-none overflow-hidden ">
            <LoadingSkeleton
                height={"250px"}
                className="bg-slate-200"></LoadingSkeleton>
            {/* <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
                s
                className="w-full h-[250px] object-cover rounded-lg mb-5"
                alt=""
            /> */}
            <h3 className="text-white text-xl font-bold mb-3 truncate overflow-hidden pt-3">
                <LoadingSkeleton height="30px"></LoadingSkeleton>
            </h3>
            <div className="flex items-center justify-between text-sm text-gray-100 mb-10">
                <span>
                    <LoadingSkeleton
                        height="20px"
                        width="50px"></LoadingSkeleton>
                </span>
                <div className="flex items-center gap-x-2">
                    <span>
                        <LoadingSkeleton
                            height="20px"
                            width="30px"></LoadingSkeleton>
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-9 h-9 -mt-1">
                        <path
                            className="text-[#FEAA01]"
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            <button className="py-3 rounded-lg capitalize w-full text-xl text-white text-bold">
                <LoadingSkeleton height="50px"></LoadingSkeleton>
            </button>
        </div>
    );
};
