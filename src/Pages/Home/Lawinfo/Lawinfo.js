import React from 'react';
import "./Lawinfo.css";
import bg from "../../../images/bg.jpg"

const Lawinfo = () => {
    return (
      <div className="w-75 mx-auto text-center">
        <h2 className="mt-4">Why Law is So important!!</h2>
        <div className="w-75 mx-auto mt-5 lawinfo-data">
          <h3 className="lawinfo-data-text">
            The world is nothing without the law that we should always try to
            maintain .
          </h3>
          <img className="w-100 lawinfo-data-image" src={bg} alt="" srcset="" />
        </div>
      </div>
    );
};

export default Lawinfo;