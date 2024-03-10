import React from 'react';
import Navbar from '../Nav-bar/Navbar';



const Layout = ({ children }:{children:React.JSX.Element}) => {
    return (
        <div>
            <Navbar />
            <div className="container">
                {children}
            </div>
        </div>
    );
};

export default Layout;
