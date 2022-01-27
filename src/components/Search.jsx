import styles from "./Search.module.css"
import { FaSearch } from "react-icons/fa"
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { useEffect } from "react";

export function Search(){
    const [ searchText, setSearchtext ] = useState("");
    const history = useHistory();

    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {
        setSearchtext(search || "");
    }, [search])

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/?search=" + searchText)
    }

    return (
        <form className={ styles.searchContainer } onSubmit={handleSubmit} >
            <div className={ styles.searchBox }>
                <input className={ styles.searchInput } type="text" value={ searchText } onChange={(e) => setSearchtext(e.target.value)} />
                <button className={ styles.searchButton } type="submit" >
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    )
}