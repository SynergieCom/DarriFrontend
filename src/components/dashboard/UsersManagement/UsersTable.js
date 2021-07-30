import React from 'react';
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Table, UncontrolledTooltip} from "reactstrap";
import {queryServerApi} from "../../../utils/queryServerApi";
import {useHistory} from "react-router";

function UsersTable(props) {
    const role = localStorage.getItem('role');
    const history = useHistory();
    const DisableAccount = async (id) => {
        const [err] = await queryServerApi("users/remove/" + id, {}, "DELETE");
        if (err) {
            console.log(err);
        }
        history.push("/admin/users");
        history.go(0);
    };

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
                                        ) : (
                                            <>
                                                <>
                                                    <Button
                                                        className="btn-icon"
                                                        color="info"
                                                        id="tooltip264453216"
                                                        size="sm"
                                                        type="button"
                                                    >
                                                        <i className="fa fa-user"/>
                                                    </Button>{" "}
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip264453216"
                                                    >
                                                        Show User Details
                                                    </UncontrolledTooltip>
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
        </>
    );
}

export default UsersTable;