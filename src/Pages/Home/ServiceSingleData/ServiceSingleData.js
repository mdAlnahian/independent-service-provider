import { useParams } from 'react-router-dom';
import React from "react";

const services = [
  {
    id: 1,
    name: "CRIMINAL CASE",
    price: "$599",
    description:
      "i belive that law is equal to all its cant vary to poor and rich above all we have to respect law",
    img: "https://i.ibb.co/TPk9c0d/bg3.jpg",
  },
  {
    id: 2,
    name: "GANG RAPE CASE",
    price: "$599",
    description:
      "i belive that law is equal to all its cant vary to poor and rich above all we have to respect law",
    img: "https://i.ibb.co/FnppQTT/services1.jpg",
  },
  {
    id: 3,
    name: "ACID THOROWING CASE",
    price: "$599",
    description:
      "i belive that law is equal to all its cant vary to poor and rich above all we have to respect law",
    img: "https://i.ibb.co/KVt3jsL/services2.jpg",
  },
  {
    id: 4,
    name: "SOCIAL INSECURITY CASE",
    price: "$599",
    description:
      "i belive that law is equal to all its cant vary to poor and rich above all we have to respect law",
    img: "https://i.ibb.co/vhgvrxs/services3.jpg",
  },
  {
    id: 5,
    name: "GOVT. RULE BREAKER CASE",
    price: "$599",
    description:
      "i belive that law is equal to all its cant vary to poor and rich above all we have to respect law",
    img: "https://i.ibb.co/h8c36d6/services4.jpg",
  },
  {
    id: 6,
    name: "CELEBREITY CASE",
    price: "$599",
    description:
      "i belive that law is equal to all its cant vary to poor and rich above all we have to respect law",
    img: "https://i.ibb.co/ww9QGnG/services5.jpg",
  },
];

const ServiceSingleData = () => {
    const { serviceId } = useParams();

     const singleOne = services.find((s) => s.id === serviceId);

    return (
      <div>
        <h2 className="text-center">
          welcome to single service data :{serviceId}
        </h2>
        <h5>{singleOne}</h5>
      </div>
    );
};

export default ServiceSingleData;