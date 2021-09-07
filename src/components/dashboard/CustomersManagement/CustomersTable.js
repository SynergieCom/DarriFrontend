import React, {useState} from 'react';
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Modal, Row, Table, UncontrolledTooltip} from "reactstrap";
import {queryServerApi} from "../../../utils/queryServerApi";
import {useHistory} from "react-router";
import ReactBSAlert from "react-bootstrap-sweetalert";

export default function CustomersTable(props) {

    const role = localStorage.getItem('role');
    const history = useHistory();
    const [alert, setAlert] = React.useState(null);
    const [Deleted, setDeleted] = useState(false);

    const hideAlert = () => {
        if (Deleted) {
            setAlert(null);
            history.push("/admin/customers");
            history.go(0);
        } else {
            setAlert(null);
        }


    };

    const cancelDetele = () => {
        setAlert(
            <ReactBSAlert
                danger
                style={{display: "block", marginTop: "-100px"}}
                title="Cancelled"
                onConfirm={() => hideAlert(Deleted)}
                onCancel={() => hideAlert(Deleted)}
                confirmBtnBsStyle="info"
                btnSize=""
            >
                The Customer Data is safe
            </ReactBSAlert>
        );
    };


    const warningWithConfirmAndCancelMessage = (id) => {
        setAlert(
            <ReactBSAlert
                warning
                style={{display: "block", marginTop: "-100px"}}
                title="Are you sure?"
                onConfirm={() => successDelete(id)}
                onCancel={() => cancelDetele()}
                confirmBtnBsStyle="info"
                cancelBtnBsStyle="danger"
                confirmBtnText="Yes, delete it!"
                cancelBtnText="Cancel"
                showCancel
                btnSize=""
            >
                You will not be able to recover this customer!
            </ReactBSAlert>
        );
    }
    const successDelete = async (id) => {
        const [err] = await queryServerApi("customers/remove/" + id, {}, "DELETE");
        if (err) {
            console.log(err);
        }
        setDeleted(true);
        setAlert(
            <ReactBSAlert
                success
                style={{display: "block", marginTop: "-100px"}}
                title="Deleted!"
                onConfirm={() => hideAlert()}
                onCancel={() => hideAlert()}
                confirmBtnBsStyle="info"
                btnSize=""
            >
                Your Customer file has been deleted.
            </ReactBSAlert>
        );
    };

    const CustomerDetails = (id) => {
        history.push("/admin/customer/" + id)
    }

    const editUser = (id) => {
        history.push("/admin/updateCustomer/" + id);
    }

    return (
        <>
            {alert}
            <Col md="12">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Customers</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Table responsive>
                            <thead className="text-primary">
                            <tr>
                                <th/>
                                <th>Username</th>
                                <th>Role</th>
                                <th className="text-center">Since</th>
                                <th className="text-right">Email</th>
                                <th className="text-right">Actions</th>
                            </tr>
                            </thead>
                            <tbody>

                            {props.Users?.map((user, key) => (
                                <tr key={key}>
                                    <td className="img-row">
                                        <div className="img-wrapper">
                                            <img
                                                alt="..."
                                                className="img-raised"
                                                src={
                                                    process.env.REACT_APP_API_URL_UPLOADS + "/" + user.img
                                                }
                                            />
                                        </div>
                                    </td>
                                    <td>{user.Username}</td>
                                    <td>{user.Role}</td>
                                    <td className="text-center">{new Date(user.ActiveDate).toDateString()}</td>
                                    <td className="text-right">{user.Email}</td>
                                    <td className="text-right">

                                        {(role === "Admin") ? (
                                            <>
                                                <Button
                                                    className="btn-icon"
                                                    color="info"
                                                    id="tooltip264453216"
                                                    size="sm"
                                                    type="button"
                                                    onClick={() => CustomerDetails(user._id)}
                                                >
                                                    <i className="fa fa-user"/>
                                                </Button>{" "}
                                                <UncontrolledTooltip
                                                    delay={0}
                                                    target="tooltip264453216"
                                                >
                                                    Show User Details
                                                </UncontrolledTooltip>
                                                <Button
                                                    className="btn-icon"
                                                    color="success"
                                                    id="tooltip366246651"
                                                    size="sm"
                                                    type="button"
                                                    onClick={() => editUser(user._id)}
                                                >
                                                    <i className="fa fa-edit"/>
                                                </Button>{" "}
                                                <UncontrolledTooltip
                                                    delay={0}
                                                    target="tooltip366246651"
                                                >
                                                    Edit
                                                </UncontrolledTooltip>

                                                <Button
                                                    className="btn-icon"
                                                    color="danger"
                                                    id="tooltip476609793"
                                                    size="sm"
                                                    type="button"
                                                    onClick={() => warningWithConfirmAndCancelMessage(user._id)}
                                                >
                                                    <i className="fa fa-times"/>
                                                </Button>{" "}
                                                <UncontrolledTooltip
                                                    delay={0}
                                                    target="tooltip476609793"
                                                >
                                                    Delete Customer
                                                </UncontrolledTooltip>
                                            </>

                                        ) : (role === "Editor") && (
                                            <>
                                                <Button
                                                    className="btn-icon"
                                                    color="info"
                                                    id="tooltip264453216"
                                                    size="sm"
                                                    type="button"
                                                    onClick={() => CustomerDetails(user._id)}
                                                >
                                                    <i className="fa fa-user"/>
                                                </Button>{" "}
                                                <UncontrolledTooltip
                                                    delay={0}
                                                    target="tooltip264453216"
                                                >
                                                    Show User Details
                                                </UncontrolledTooltip>
                                                <Button
                                                    className="btn-icon"
                                                    color="success"
                                                    id="tooltip366246651"
                                                    size="sm"
                                                    type="button"
                                                    onClick={() => editUser(user._id)}

                                                >
                                                    <i className="fa fa-edit"/>
                                                </Button>{" "}
                                                <UncontrolledTooltip
                                                    delay={0}
                                                    target="tooltip366246651"
                                                >
                                                    Edit
                                                </UncontrolledTooltip>
                                            </>
                                        )}
                                    </td>
                                </tr>

                            ))}

                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </>
    );
}

