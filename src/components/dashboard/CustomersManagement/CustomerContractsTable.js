import React, {useEffect} from 'react';
import {
    Button, ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
    Col,
    Form,
    FormGroup,
    Input,
    Row,
    Table, UncontrolledTooltip
} from "reactstrap";
import {useFormik} from "formik";
import {queryServerApi} from "../../../utils/queryServerApi";
import * as Yup from "yup";
import {useHistory} from "react-router";

function CustomerConctracts(props) {
    const history = useHistory();

    return (
        <>
            <Col md="8">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">CONTRACTS</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Table className="table-shopping" responsive>
                            <thead>
                            <tr>
                                <th className="text-center" />
                                <th>Product</th>
                                <th />
                                <th />
                                <th className="text-right">Price</th>
                                <th className="text-right">Qty</th>
                                <th className="text-right">Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div className="img-container">
                                        <img
                                            alt="..."
                                            src={require("../../../assets/img/agenda.png").default}
                                        />
                                    </div>
                                </td>
                                <td className="td-name">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        Get Shit Done Notebook
                                    </a>
                                    <br />
                                    <small>Most beautiful agenda for the office.</small>
                                </td>
                                <td />
                                <td />
                                <td className="td-number">
                                    <small>€</small>
                                    3,390
                                </td>
                                <td className="td-number">
                                    1{" "}
                                    <ButtonGroup className="btn-group-sm">
                                        <Button className="btn-round" color="default" outline>
                                            <i className="nc-icon nc-simple-delete" />
                                        </Button>
                                        <Button className="btn-round" color="default" outline>
                                            <i className="nc-icon nc-simple-add" />
                                        </Button>
                                    </ButtonGroup>
                                </td>
                                <td className="td-number">
                                    <small>€</small>
                                    549
                                </td>
                                <td className="td-actions">
                                    <Button
                                        className="btn-neutral"
                                        color="default"
                                        data-placement="left"
                                        id="tooltip848814788"
                                        title=""
                                        type="button"
                                    >
                                        <i className="nc-icon nc-simple-remove" />
                                    </Button>
                                    <UncontrolledTooltip
                                        delay={0}
                                        placement="left"
                                        target="tooltip848814788"
                                    >
                                        Remove item
                                    </UncontrolledTooltip>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="img-container">
                                        <img
                                            alt="..."
                                            src={require("../../../assets/img/stylus.jpg").default}
                                        />
                                    </div>
                                </td>
                                <td className="td-name">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        Stylus
                                    </a>
                                    <br />
                                    <small>
                                        Design is not just what it looks like and feels like.
                                        Design is how it works
                                    </small>
                                </td>
                                <td />
                                <td />
                                <td className="td-number">
                                    <small>€</small>
                                    499
                                </td>
                                <td className="td-number">
                                    2{" "}
                                    <ButtonGroup className="btn-group-sm">
                                        <Button className="btn-round" color="default" outline>
                                            <i className="nc-icon nc-simple-delete" />
                                        </Button>
                                        <Button className="btn-round" color="default" outline>
                                            <i className="nc-icon nc-simple-add" />
                                        </Button>
                                    </ButtonGroup>
                                </td>
                                <td className="td-number">
                                    <small>€</small>
                                    998
                                </td>
                                <td className="td-actions">
                                    <Button
                                        className="btn-neutral"
                                        color="default"
                                        data-placement="left"
                                        id="tooltip822160608"
                                        title=""
                                        type="button"
                                    >
                                        <i className="nc-icon nc-simple-remove" />
                                    </Button>
                                    <UncontrolledTooltip
                                        delay={0}
                                        placement="left"
                                        target="tooltip822160608"
                                    >
                                        Remove item
                                    </UncontrolledTooltip>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="img-container">
                                        <img
                                            alt="..."
                                            src={require("../../../assets/img/evernote.png").default}
                                        />
                                    </div>
                                </td>
                                <td className="td-name">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        Evernote iPad Stander
                                    </a>
                                    <br />
                                    <small>
                                        A groundbreaking Retina display. All-flash
                                        architecture. Fourth-generation Intel processors.
                                    </small>
                                </td>
                                <td />
                                <td />
                                <td className="td-number">
                                    <small>€</small>
                                    200
                                </td>
                                <td className="td-number">
                                    1{" "}
                                    <ButtonGroup className="btn-group-sm">
                                        <Button className="btn-round" color="default" outline>
                                            <i className="nc-icon nc-simple-delete" />
                                        </Button>
                                        <Button className="btn-round" color="default" outline>
                                            <i className="nc-icon nc-simple-add" />
                                        </Button>
                                    </ButtonGroup>
                                </td>
                                <td className="td-number">
                                    <small>€</small>
                                    799
                                </td>
                                <td className="td-actions">
                                    <Button
                                        className="btn-neutral"
                                        color="default"
                                        data-placement="left"
                                        id="tooltip799358710"
                                        title=""
                                        type="button"
                                    >
                                        <i className="nc-icon nc-simple-remove" />
                                    </Button>
                                    <UncontrolledTooltip
                                        delay={0}
                                        placement="left"
                                        target="tooltip799358710"
                                    >
                                        Remove item
                                    </UncontrolledTooltip>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3" />
                                <td className="td-total">Total</td>
                                <td className="td-price">
                                    <small>€</small>
                                    7,479
                                </td>
                                <td className="text-right" colSpan="3">
                                    <Button
                                        className="btn-round"
                                        color="default"
                                        id="tooltip861527148"
                                        outline
                                        title=""
                                        type="button"
                                    >
                                        Complete Purchase{" "}
                                        <i className="nc-icon nc-minimal-right" />
                                    </Button>
                                    <UncontrolledTooltip
                                        delay={0}
                                        target="tooltip861527148"
                                    >
                                        Buy now
                                    </UncontrolledTooltip>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>

            </Col>

        </>
    );
}


export default CustomerConctracts;