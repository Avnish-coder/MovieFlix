import React, { Component } from 'react';
import "./Css/NavBar.css";

class NavBar extends Component {
    render() {
        return (
            <div className='nav'>
                <div className='wrapper'>
                    <a  href='/#' className='nameOS' > MovieFlix</a>
                    <a  href='/#' className='fav'>Favourite</a>
                </div>
            </div>
        );
    }
}

export default NavBar;