import React from 'react';

import styles from './Header.module.css'

const Header = ()=>{
    return (
        <div>
        <h2 className={styles.header}>Welcome to a daily, responsive Corona Tracker web app.</h2>
        <h4>Try it out!</h4>
        <ul className={styles.dashed}>
            <li>
                Click the graph
            </li>
            <li>
                Change the Countries
            </li>
        </ul>
        </div>
    )
}

export default Header;