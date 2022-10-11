export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "ac13c0de6c73a250c0462b6aa561e874";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
    getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
    getMovieDetails: (movieId) =>
        `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
    getMovieMeta: (movieId, type) =>
        `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
    imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
    imageWidth500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
// `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}`,
// `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
