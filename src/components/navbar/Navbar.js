import React from 'react';
import {NavLink} from 'react-router-dom';

import Container from '../helperComponents/Container';
import styles from './Style.module.css';


const Navbar = ()=>{
    return (
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.nav}>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink  to="/catalog">Catalog</NavLink></li>
                    <li><NavLink  to="/about">About</NavLink></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;