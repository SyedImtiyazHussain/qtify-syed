import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";


function Navbar(){
    return (
        <nav className={styles.navbar}>
            <a href="/">
                <Logo />
            </a>
            <Search />  
            <Button>Give Feedback</Button>
        </nav>
    )
}

export default Navbar;