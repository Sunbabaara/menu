import React from 'react';

function Footer() {
    return (
        <footer className="container">
         <h4>copyright &copy; {new Date().getFullYear()}</h4> 
         <a href= "mailto:csunbabaara@gmail.com">csunbabaara@gmail.com</a>  
        </footer>
    )
}

export default Footer;
