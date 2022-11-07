import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



function Pagination({ items, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className='row m-4'>
    {items.map(item => (
         <div className="pad" >
             
             <Card.Body className="dark">
               <Card.Title className="title">Card Title: <br/>{item.name}</Card.Title>
                <Card.Text>
                 Description: {item.description}
                </Card.Text>
               <Button variant="primary" ><Link to="/Repo/Api">Details</Link> </Button>
            </Card.Body>
          </div>
    ))}
  </div>
  )
}
// remaining
// seo
// good ui
// next page
export default Pagination