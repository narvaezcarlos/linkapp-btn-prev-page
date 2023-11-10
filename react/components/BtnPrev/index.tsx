import React from 'react'
import styles from '../../styles.css';

const BtnPrev = () => {
    return (
        <a href="#" onClick={() => history.back()} className={styles.backBtn}>
            <svg fill="none" width="24" height="24" viewBox="0 0 16 16" color='#000'>
                <g id="nav-thin-caret--left">
                    <path d="M11 1L4 8L11 15" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
            </svg>
        </a>
    )
}

export default BtnPrev;
