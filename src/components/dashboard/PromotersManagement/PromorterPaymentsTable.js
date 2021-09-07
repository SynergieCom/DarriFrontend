import React from 'react';
import {
    Button, ButtonGroup,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Table, UncontrolledTooltip
} from "reactstrap";

import {useHistory} from "react-router";

export default function PromoterPaymentsTable(props) {

    function total() {
        return props.payments?.reduce(function (total, item) {
            total += item.Amount / 100;
            console.log("total", total);
            return total
        }, 0)
    }

    return (
        <>
            <Col md="8">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Payments</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Table className="table-shopping" responsive>
                            <thead>
                            <tr>
                                <th className="text-center"/>
                                <th>User</th>
                                <th className="text-right">Credit Card</th>
                                <th className="text-right">Expiration Date</th>
                                <th className="text-right">Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            {props?.payments?.map((payment, key) => (
                                <tr key={key}>
                                    <td>
                                        <div className="img-container">
                                            {payment.CardType === "mastercard" ? (
                                                <>
                                                    <img
                                                        alt="..."
                                                        src={require("../../../assets/img/mastercard.png").default}

                                                    />
                                                </>
                                            ) : payment.CardType === "visa" ? (
                                                <>
                                                    <img
                                                        alt="..."
                                                        src={require("../../../assets/img/visa-512.png").default}

                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    <img
                                                        alt="..."
                                                        src={require("../../../assets/img/discover-credit-debit-card-bank-transaction-32285.png").default}

                                                    />
                                                </>
                                            )}

                                        </div>
                                    </td>
                                    <td className="td-name">
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            {payment.NameOnCard}
                                        </a>
                                        <br/>
                                        <small>{payment.Email}</small><br/>
                                        <small>{payment.Address.City}, {payment.Address.State}</small>
                                    </td>

                                    <td className="td-number">
                                        **** **** **** {payment.creditCard}
                                    </td>
                                    <td className="td-number">
                                        {Date.parse(payment.ExpirationDate) > Date.now() ? (
                                                <ButtonGroup className="btn-group-sm">
                                                    <Button className="btn-success">
                                                        Unexpired
                                                    </Button>
                                                </ButtonGroup>
                                            ) :
                                            <ButtonGroup className="btn-group-sm">
                                                <Button className="btn-danger">
                                                    Expired
                                                </Button>
                                            </ButtonGroup>
                                        }
                                    </td>
                                    <td className="td-number">
                                        <small>TND</small>
                                        {Math.round(payment.Amount.toFixed(2) / 100)}
                                    </td>
                                </tr>

                            ))
                            }

                            <tr>
                                <td colSpan="3"/>
                                <td className="td-total">Total</td>
                                <td className="td-price">
                                    <small>TND</small>
                                    {total()}
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


