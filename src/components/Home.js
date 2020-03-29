import React from 'react';
import NavBar from "./NavBar";
import MainBodyView from "./MainBodyView";
import './main.scss';

const Home = (props) => {

    return (

        <>
            <div className="custom-bg"></div>
            <NavBar/>
            <MainBodyView/>
        </>
    )
};



export default Home;
