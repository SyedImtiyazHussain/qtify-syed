import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import { Link } from "react-router-dom";


function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <Logo />
            </Link>
            <Search />  
            <Button>Give Feedback</Button>
        </nav>
    )
}

export default Navbar;