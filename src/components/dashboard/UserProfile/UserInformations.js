import React from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Row} from "reactstrap";

function UserInformations(props) {
    return (

        <Col md="4">
            <Card className="card-user">
                <div className="image">
                    <img
                        alt="..."
                        src={process.env.REACT_APP_API_URL_UPLOADS+"/"+props.user?.img}
                    />
                </div>
                <CardBody>
                    <div className="author">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                                alt="..."
                                className="avatar border-gray"
                                src={process.env.REACT_APP_API_URL_UPLOADS+"/"+props.user?.img}
                            />
                            <h5 className="title">{props.user?.FirstName} {props.user?.LastName}</h5>
                        </a>
                        <p className="description">@{props.user?.Username}</p>
                    </div>
                    <p className="description text-center">
                        {props.user?.Email}
                    </p>
                </CardBody>
                <CardFooter>
                    <hr/>
                    <div className="button-container">
                        <Row>
                            <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                                <h5>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                  "  {props.user?.Role} " Since : <br/>
                                    <small>{new Date(props.user?.ActiveDate).toDateString()}</small>
                                </h5>
                            </Col>
                        </Row>
                    </div>
                </CardFooter>
            </Card>
        </Col>
    );
}

export default UserInformations;