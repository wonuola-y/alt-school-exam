import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Api({ items, loading }) {
  if (loading) {
    return <h2>Loading!...</h2>;
  }
  return (
    <div className='row m-4'>
    {items.map(item => (
         <div className="pad" >
              <h1>
              uj
            </h1>
            <h2>Card Title: <br/>{item.name}</h2>
             <Card.Body className="dark">
               <Card.Title className="title">Card Titlesssssssssssss: <br/>{item.name}</Card.Title>
                <Card.Text>
                 Description: {item.description}
                </Card.Text>
               <Button variant="primary" ><Link to="/">Go to Checkout Repo</Link> </Button>
            </Card.Body>
           
          </div>
         
    ))}
  </div>
  )
}

export default Api;