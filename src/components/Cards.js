import React, { useState } from "react";
import Cardsdata from "./Cardsdata";
import { dataAddData } from "../redux/actions/addData";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./styles.css";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);

  const dispatch = useDispatch();

  const collectData = (e) => {
    dispatch(dataAddData(e));
  };

  return (
    <>
    <div className="container mt-3">
      <h2 className="text-center">Add your favourites</h2>
      <div className="row d-flex justify-content-center align-items-center">
      {
      data.map((element, index) => {
        return (
          <Card
            style={{ width: "22rem", border: "none" }}
            className="mx-2 mt-4 card_style "
          >
            <Card.Img
              variant="top"
              src={element.imgdata}
              style={{ height: "16rem", padding:"10px"}}
              className="mt-3"
            />
            <Card.Body>
              <Card.Title>{element.rname}</Card.Title>
              <Card.Text>Price : ₹ {element.price}</Card.Text>
              <div className="button_div d-flex justify-content-center">
                <Button
                  variant="primary"
                  onClick={() => collectData(element)}
                  className="col-lg-12"
                >
                  Add to Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        );
      })
      }
      </div>
      </div>
    </>
  );
};

export default Cards;
