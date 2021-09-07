import React, {useEffect} from 'react';
import {Card, CardBody, CardFooter, Col, Row} from "reactstrap";
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CakeIcon from '@material-ui/icons/Cake';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export default function PromoterDetailsComp(props) {

    return (

        <Col md="4">
            <Card className="card-user">
                <div className="image">
                    <img
                        alt="..."
                        src={process.env.REACT_APP_API_URL_UPLOADS + "/" + props.user?.img}
                    />
                </div>
                <CardBody>
                    <div className="author">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                                alt="..."
                                className="avatar border-gray"
                                src={process.env.REACT_APP_API_URL_UPLOADS + "/" + props.user?.img}
                            />
                            <h5 className="title">{props.user?.Denomination}</h5>
                        </a>
                        <p className="description" style={{color: "black"}}><AccountBoxIcon/>
                            <strong>{props.user?.ResponsibleName}</strong></p>
                    </div>
                    <p className="description text-center" style={{color: "black"}}><EmailIcon/>
                        <strong>{props.user?.Email}</strong></p>
                    <p className="description text-center" style={{color: "black"}}><ContactPhoneIcon/>
                        <strong>{props.user?.PhoneNumber}</strong></p>
                    <p className="description text-center" style={{color: "black"}}><LocationOnIcon/>
                        <strong>{props.user?.HeadquartersAddress.Street} ,
                            {props.user?.HeadquartersAddress.City} , {props.user?.HeadquartersAddress.State}</strong>
                    </p>


                </CardBody>
                <CardFooter>
                    <hr/>
                    <div className="button-container">
                        <Row>
                            <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                                <p>{props.user?.Bio}</p>
                                <p>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <VerifiedUserIcon/> Since : <br/>
                                    <small>{new Date(props.user?.ActiveDate).toDateString()}</small>
                                </p>
                            </Col>
                        </Row>
                    </div>
                </CardFooter>
            </Card>
        </Col>
    );
}

