import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";


const ServiceSingleData = () => {
  const { serviceId } = useParams();

  const [singleServices, setSingleServices] = useState([]);

        useEffect(() => {
          fetch("services.json")
            .then((res) => res.json())
            .then((data) => setSingleServices(data));
        }, []);

  // uanble to use find method in react js

  const shit = singleServices.find(
    (singleService) => singleService.id === serviceId
  )
  
  return (
    <div className="about">
      <h2 className="w-75 mx-auto text-center mt-4">
        Single Service data :{serviceId}
      </h2>
      <h1 className="w-75 mx-auto text-center mt-5">
        Thanks for selected service number {serviceId} .
      </h1>
    </div>
  );
};

export default ServiceSingleData;

