import React, { useState, useEffect } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Room({room, fromdate, todate}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="row m-3 p-3 bs">
            <div className="col-md-4">
                <img src={room.imageurls[0]} className="img-fluid" />
            </div>

            <div className="col-md-8">
                <h1>{room.name}</h1>
                <p>Parking , Reception , Free Wifi</p>
                <b>
                    <p>Max Count: {room.maxcount}</p>
                    <p>Phone Number: {room.phonenumber}</p>
                    <p>Type: {room.type}</p>
                </b>

                <div style={{float: 'right'}}>
                {(fromdate && todate) && (<Link to={`/book/${room._id}/${fromdate}/${todate}`}>
                    <button className="btn btn-dark m-2">Book Now</button>
                </Link>)}
                    <button className='btn btn-primary' onClick={handleShow}>View Details</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size='lg' data--aos='zoom-in'>
                <Modal.Header closeButton>
                    <Modal.Title>{room.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Carousel>
                        {room.imageurls.map(url => {
                            return <Carousel.Item>
                                <img
                                    className="img-fluid"
                                    src={url}
                                    style={{ height: "400px" }}
                                />
                            </Carousel.Item>
                        })}
                    </Carousel>
                    <p>{room.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>
    )
}

export default Room
