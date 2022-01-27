import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles  from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import { useQuery } from "../hooks/useQuery";
import InfiniteScroll from "react-infinite-scroll-component";

export function MoviesGrid() {
  const [movies, setMovie] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ page, setPage ] = useState(1);
  const [ hasMore, setHasMore] = useState(true);
  
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
    ? "/search/movie?query=" + search + "&page=" + page 
    : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovie((preMovies) => preMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    })
  }, [search, page]);

  return (
    <InfiniteScroll
     dataLength={movies.length}
     hasMore={hasMore}
     next={() => setPage((prevPage) => prevPage + 1)}
     loader={<Spinner />} 
      >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
