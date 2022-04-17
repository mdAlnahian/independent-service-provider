import React from 'react';
import './Home.css'
import Services from '../Services/Services';
import bg from "../../../images/bg.jpg"
import Lawinfo from '../Lawinfo/Lawinfo';

const Home = () => {
    return (
      <div>
        <div id="home" className="banner-data">
          <img className="w-100 background-banner" src={bg} alt="" srcset="" />
          <div className="bannner-text">As human being we should always follow the law.Nothing is above the law . </div>
        </div>
        <Lawinfo></Lawinfo>
        <Services></Services>
      </div>
    );
};

export default Home;