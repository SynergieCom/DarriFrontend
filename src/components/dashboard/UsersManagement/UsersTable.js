import React, {useState} from 'react';
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Modal, Row, Table, UncontrolledTooltip} from "reactstrap";
import {queryServerApi} from "../../../utils/queryServerApi";
import {useHistory} from "react-router";

function UsersTable(props) {
    const role = localStorage.getItem('role');
    const history = useHistory();
    const [user, setUser] = useState({});
    const [modalNotice, setModalNotice] = React.useState(false);
    const toggleModalNotice = async (id) => {
        const [res, err] = await queryServerApi("users/" + id);
        setUser(res);
        setModalNotice(!modalNotice);

    };
    const toggleModalNotice1 = () => {
        setModalNotice(!modalNotice);
    }
    const DisableAccount = async (id) => {
        const [err] = await queryServerApi("users/remove/" + id, {}, "DELETE");
        if (err) {
            console.log(err);
        }
        history.push("/admin/users");
        history.go(0);
    };

    const editUser = (id) => {
        history.push("/admin/updateUser/" + id);
    }

    return (
        <>
            <Col md="12">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Active Users</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Table responsive>
                            <thead className="text-primary">
                            <tr>
                                <th/>
                                <th>Username</th>
                                <th>Role</th>
                                <th className="text-center">Since</th>
                                <th className="text-right">Salary</th>
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

                                        {(role === "Admin" && (user.Role === "Admin" || user.Role === "Editor")) ? (
                                            <>
                                                <Button
                                                    className="btn-icon"
                                                    color="info"
                                                    id="tooltip264453216"
                                                    size="sm"
                                                    type="button"
                                                    onClick={() => toggleModalNotice(user._id)}
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
                                                    onClick={() => DisableAccount(user._id)}
                                                >
                                                    <i className="fa fa-times"/>
                                                </Button>{" "}
                                                <UncontrolledTooltip
                                                    delay={0}
                                                    target="tooltip476609793"
                                                >
                                                    Delete Account
                                                </UncontrolledTooltip>
                                            </>

                                        ) : (role === "Editor" && (user.Role === "Admin" || user.Role === "Editor")) ? (
                                            <>
                                                <Button
                                                    className="btn-icon"
                                                    color="info"
                                                    id="tooltip264453216"
                                                    size="sm"
                                                    type="button"
                                                    onClick={() => toggleModalNotice(user._id)}
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
                                        ) : (user.Role !== "Admin" && user.Role !== "Editor") && (
                                            <>
                                                <>
                                                    <Button
                                                        className="btn-icon"
                                                        color="info"
                                                        id="tooltip264453216"
                                                        size="sm"
                                                        type="button"
                                                        onClick={() => toggleModalNotice(user._id)}
                                                    >
                                                        <i className="fa fa-user"/>
                                                    </Button>{" "}
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip264453216"
                                                    >
                                                        Show User Details
                                                    </UncontrolledTooltip>
                                                    {role === "Admin" && (
                                                        <>
                                                            <Button
                                                                className="btn-icon"
                                                                color="danger"
                                                                id="tooltip476609793"
                                                                size="sm"
                                                                type="button"
                                                                onClick={() => toggleModalNotice(user._id)}
                                                            >
                                                                <i className="fa fa-times"/>
                                                            </Button>{" "}
                                                            <UncontrolledTooltip
                                                                delay={0}
                                                                target="tooltip476609793"
                                                            >
                                                                Disable Account
                                                            </UncontrolledTooltip>
                                                        </>
                                                    )}

                                                </>
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
            <Modal isOpen={modalNotice} toggle={toggleModalNotice1}>
                <div className="modal-header">
                    <button
                        aria-hidden={true}
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={toggleModalNotice1}
                    >
                        <i className="nc-icon nc-simple-remove"/>
                    </button>
                    <h5 className="modal-title" id="myModalLabel">
                        How Do You Become an Affiliate?
                    </h5>
                </div>
                <div className="modal-body">
                    <div className="instruction">
                        <Row>
                            <Col md="8">
                                <strong>{user.Username}</strong>
                                <p className="description">
                                    {user.FirstName} {user.LastName}
                                    <br/>
                                    <a>
                                        {user.Role}
                                    </a>
                                    <br/>
                                    {user.Email}
                                </p>
                            </Col>
                            <Col md="4">
                                <div className="picture">
                                    <img
                                        alt="..."
                                        className="rounded img-raised"
                                        src={process.env.REACT_APP_API_URL_UPLOADS + "/" + user.img}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        {user.FirstName} {user.LastName} is an {user.Role} in our platform
                        you can contact him/her via his Email {user.Email} or his Phone Number {user.PhoneNumber}
                    </p>
                </div>
                <div className="modal-footer justify-content-center">
                    <Button
                        className="btn-round"
                        color="info"
                        data-dismiss="modal"
                        type="button"
                        onClick={toggleModalNotice1}
                    >
                        Sounds good!
                    </Button>
                </div>
            </Modal>

        </>
    );
}

export default UsersTable;