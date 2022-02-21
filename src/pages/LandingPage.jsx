import { useSearchParams } from "react-router-dom";
import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";

export function LandingPage(){
    const [ query, setQuery ] = useSearchParams();
    const search = query.get("search");

    const debouncedSearch = useDebounce(search, 400);
    return (
    <div>
        <Search search={search} setQuery={setQuery} />
        <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
    )
}