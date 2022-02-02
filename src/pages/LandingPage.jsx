import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage(){
    const query = useQuery();
    const search = query.get("search");

    const debouncedSearch = useDebounce(search, 400);
    return (
    <div>
        <Search search={search} />
        <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
    )
}