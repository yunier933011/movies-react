import styles from "./Search.module.css"
import { FaSearch } from "react-icons/fa"

export function Search({ search, setQuery }){

    return (
        <form className={ styles.searchContainer } >
            <div className={ styles.searchBox }>
                <input
                 className={ styles.searchInput } type="text"
                 value={ search }
                 placeholder="Title"
                 aria-label="Search Movies"
                 onChange={(e) => {
                    const value = e.target.value;
                    setQuery({search: value});
                 }}
                />
                    <FaSearch size={20} color="black" className={ styles.searchButton } />
            </div>
        </form>
    )
}