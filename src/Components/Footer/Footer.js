import React from 'react';
import './Footer.css';

const Footer=() => {
   return(
        <footer>
            &copy; 1997-{new Date().getFullYear()} Netflix, Inc.
        </footer>
    )
};

export default Footer;