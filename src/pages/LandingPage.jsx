import { useState } from "react"
import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";

export function LandingPage(){
    const [movies, setMovie] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ page, setPage ] = useState(1);
    const [ hasMore, setHasMore] = useState(true);

    return (
    <div>
        <Search setHasMore={setHasMore} setMovie={setMovie} setPage={setPage}/>
        <MoviesGrid setHasMore={setHasMore} setMovie={setMovie} setPage={setPage} hasMore={hasMore} page={page} movies={movies}/>
    </div>
    )
}