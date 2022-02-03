import styles from "./Search.module.css"
import { FaSearch } from "react-icons/fa"
import { useHistory } from "react-router-dom";

export function Search({ search }){
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/?search=" + search)
    }

    return (
        <form className={ styles.searchContainer } onSubmit={handleSubmit} >
            <div className={ styles.searchBox }>
                <input
                 className={ styles.searchInput } type="text"
                 value={ search }
                 placeholder="Title"
                 aria-label="Search Movies"
                 onChange={(e) => {
                    const value = e.target.value;
                    history.push("/?search=" + value) 
                 }}
                />
                    <FaSearch size={20} color="black" className={ styles.searchButton } />
            </div>
        </form>
    )
}