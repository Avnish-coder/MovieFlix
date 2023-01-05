import React, { Component } from 'react';
import NavBar from './NavBar';
import "./Css/Home.css"
import Banner from './Banner';
import Trending from './Trending';
class Home extends Component {
    render() {
        return (
            <>
            <NavBar />
            <Banner/>
            <Trending/>
            </>
        );
    }
}

export default Home;