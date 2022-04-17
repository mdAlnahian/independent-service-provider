import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css"



const Services = () => {
    const [services,setServices]=useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
      <div id="services" className="w-75 mx-auto mt-4">
        <h1 className="mb-4 services-title">My Services</h1>
        <div className="services-container">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    );
};

export default Services;