import React from 'react';
import './Service.css'
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id,name,price,img,description}=service;

    const navigate = useNavigate();

    const handleSingleServiceData = (id) => {
      navigate(`/service/${id}`);
    };
    return (
      <div className="service">
        <Card>
          <Card.Img variant="top" src={img} alt="" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Title className="mb-4">Price :{price}</Card.Title>
            <Button className='w-100' onClick={()=>handleSingleServiceData(id)} variant="outline-dark">Hire Now</Button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default Service;