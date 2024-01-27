import React from "react";
import styles from "./Search.module.css";
import {ReactComponent as SearchIcon} from "../../assets/Search icon.svg";


function Search() {
    return (
        <form className={styles.wrapper}>
            <input className={styles.search} placeholder="Search a song of your choice"></input>
            <button className={styles.searchButton} type="submit">
                <SearchIcon />
            </button>
        </form>
    )
}

export default Search;