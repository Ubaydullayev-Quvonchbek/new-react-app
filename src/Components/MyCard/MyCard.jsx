import React, { useEffect, useState } from 'react';
import "./MyCard.css";
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import MyCardData from "./MyCard-data.js";

const MyCard = () => {
    const [Price, setPrice] = useState(0);
    const [Count, setCount] = useState(0);
    const purchase = (item, event) => {
        setPrice(Price + item);
        event.currentTarget.disabled = true;
        alert('salom')
    }
    return (
        <>
            <Container>
                <Row className='justify-content-evenly mt-4'>
                    {MyCardData?.map(item => {
                        return (
                            <Col lg={3}>
                                <Card>
                                    <Card.Img variant="top" src={item?.img} />
                                    <Card.Body>
                                        <Card.Title>{item?.productName}</Card.Title>
                                        <Card.Text>{item?.description}</Card.Text>
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <Button onClick={(e) => purchase(item?.price, e)} variant={'primary'}>{item?.price}</Button>
                                            </div>
                                            <div>
                                                <Button className='btn btn-success m-1 ml--' onClick={() => setCount(Count + 1)}><i className="fa-solid fa-arrow-up"></i></Button>
                                                <p className='count-text-poragraf'>{Count + 1}</p>
                                                <Button className='btn btn-success m-1' onClick={() => setCount(Count < 1 ? 0 : Count - 1)}><i className="fa-solid fa-arrow-down"></i></Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                    <Col lg={12} className='mt-4'>
                        <ListGroup>
                            <ListGroup.Item>Total price: {Count == 0 ? Price : Price * (Count + 1)}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default MyCard;