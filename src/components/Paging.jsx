import React, { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function Paging() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getRepo = async () => {
      const response = await fetch(
        "https://api.github.com/users/wonuola-y/repos?_page=1&_limit=5"
      );
      const data = await response.json();
      setItems(data);
    };
    getRepo();
  }, []);
  console.log(items);

  const fetchComments = async (currentPage) => {
    const response = await fetch(
      `https://api.github.com/users/wonuola-y/repos?_page=${currentPage}&_limit=5`
    );
    const data = await response.json();
    return data;
  };

  const handlePage = async (data) => {
    // console.log(data.selected);
    let currentPage = data.selected + 1;
    let notes = await fetchComments(currentPage);
    setItems(notes);
  };
  return (
    <div className="row m-2">
      {items.map((item) => {
        return (
          <Card className="row m-2" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.avatar_url} />
            <Card.Body>
              <Card.Title className="title">Card Title: {item.name}</Card.Title>
              <Card.Text>Description: {item.description}</Card.Text>
              <Button variant="primary">
                <a className="link" href="https://github.com/wonuola-y">
                  Go to repo
                </a>
              </Button>
              {/* <Button><Link to='/paging'> Join</Link></Button> */}
            </Card.Body>
          </Card>
        );
      })}
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={7}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePage}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
      {/* <button><Link to="/">Home</Link></button> */}
     
    </div>
  );
}

export default Paging;
