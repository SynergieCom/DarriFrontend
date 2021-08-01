import React from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
    Col,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";

function DisableUserAccount(props) {
    return (
        <>
            <Col md="6">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Disable</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Form action="#" method="#">
                            <label>Password</label>
                            <FormGroup>
                                <Input
                                    placeholder="Password"
                                    type="password"
                                    autoComplete="off"
                                />
                            </FormGroup>
                            <CardFooter>
                                <Button className="btn-round" color="info" type="submit">
                                    Disable
                                </Button>
                            </CardFooter>
                        </Form>
                    </CardBody>

                </Card>
            </Col>

        </>
    );
}

export default DisableUserAccount;