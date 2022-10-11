import React, { useEffect, useState } from "react";
import useSWR from "swr";
import MovieCard from "components/movies/MovieCard";
import { MovieListLoading } from "components/movies/MovieListLoading";
import { apiKey, fetcher } from "../config";
import useDebounce from "hook/useDebounce";
import ReactPaginate from "react-paginate";

const itemsPerPage = 20;

const MoviePage = () => {
    //Paginate

    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    //
    const [nextPage, setNextPage] = useState(1);
    const [filter, setFilter] = useState("");
    const [url, setUrl] = useState(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
    );
    const handleFilter = (e) => {
        setFilter(e.target.value);
    };
    const filterDebounce = useDebounce(filter, 500);
    const { data, error } = useSWR(url, fetcher);
    const loading = !data && !error;
    useEffect(() => {
        if (filterDebounce) {
            return setUrl(
                `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filterDebounce}&page=${nextPage}`
            );
        } else {
            return setUrl(
                `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
            );
        }
    }, [filterDebounce, nextPage]);
    const movies = data?.results || [];
    console.log(data);

    useEffect(() => {
        if (!data || !data.total_results) return;
        setPageCount(Math.ceil(data.total_results / itemsPerPage));
        // Fetch items from another resources.
    }, [data, itemOffset]);
    // if (!data) return null;
    // const { page, total_pages } = data;

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.total_pages;
        setItemOffset(newOffset);
        setNextPage(event.selected + 1);
    };
    return (
        <div className="py-10 page-container-fluid">
            <div className="flex w-full mb-10">
                <input
                    type="text"
                    className="w-full p-4 bg-slate-800 text-white outline-none "
                    placeholder="Type here to search..."
                    value={filter}
                    onChange={handleFilter}
                />
                <button className="p-4 bg-primary text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </button>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center">
                {/* Loading */}
                {loading && <MovieListLoading></MovieListLoading>}
                {/* Show */}
                {!loading &&
                    movies.length > 0 &&
                    movies.map((item) => {
                        return (
                            <MovieCard key={item.id} item={item}></MovieCard>
                        );
                    })}
            </div>
            <div className="mt-10">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    className="pagination"
                />
            </div>
            {/* <div className="flex items-center justify-center mt-10 gap-x-2 hidden">
                <span
                    className="cursor-pointer"
                    onClick={() =>
                        setNextPage(nextPage > 1 ? nextPage - 1 : nextPage)
                    }>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="white"
                        className="w-6 h-6 pointer-events-none">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </span>
                <span className="cursor-pointer inline-block p-2 px-4 rounded bg-white leading-none text-slate-900">
                    {nextPage}
                </span>
                <span
                    className="cursor-pointer"
                    onClick={() => setNextPage(nextPage + 1)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="white"
                        className="w-6 h-6 pointer-events-none">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </span>
            </div> */}
        </div>
    );
};

export default MoviePage;
