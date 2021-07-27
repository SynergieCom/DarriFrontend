import React, {useState} from 'react';
import {
    Button,
    Card,
    CardBody, CardFooter,
    CardHeader,
    CardTitle,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Row
} from "reactstrap";
import ImageUpload from "../CustomUpload/ImageUpload";
import * as Yup from "yup";
import {useFormik} from "formik";
import {queryServerApi} from "../../../utils/queryServerApi";

function AddUserForm() {

    const [error, setError] = useState({
        visible: false,
        message: "",
        CinErr: false,
        UserNameErr: false,
        EmailExist: false
    });


    const formik = useFormik({
        initialValues: {
            "Username": "",
            "Cin": "",
            "FirstName": "",
            "LastName": "",
            "Password": "",
            "Email": "",
            "PhoneNumber": "",
            "Address": {
                "Street": "",
                "City": " ",
                "State": "",
                "ZipCode": " "
            },
            "Role": "",
        }, validationSchema: YupSchema,
        onSubmit: async (values) => {
            console.log("Values", values);
            const [res, err] = await queryServerApi("users", values, "POST", true);
            console.log(err);
            console.log('res = ', res);
        }
    });


    return (
        <Col md="12">
            <Card>
                <CardHeader>
                    <CardTitle tag="h4">Add User</CardTitle>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={formik.handleSubmit} className="form-horizontal" method="get">
                        <Row>
                            <Label sm="2">CIN</Label>
                            <Col sm="7">
                                <FormGroup className="has-success">
                                    <Input
                                        name="Cin"
                                        type="text"
                                        value={formik.values.Cin}
                                        onChange={formik.handleChange}
                                    />
                                    <label className="error">
                                        This field is required.
                                    </label>
                                </FormGroup>
                            </Col>
                            <Col className="label-on-right" tag="label" sm="3">
                                <code>required</code>
                            </Col>
                        </Row>


                        <Row>
                            <Label sm="2">Required Text</Label>
                            <Col sm="7">
                                <FormGroup className="has-success">
                                    <Input
                                        name="required"
                                        type="text"
                                    />
                                    <label className="error">
                                        This field is required.
                                    </label>
                                </FormGroup>
                            </Col>
                            <Col className="label-on-right" tag="label" sm="3">
                                <code>required</code>
                            </Col>
                        </Row>


                        <Row>
                            <Label sm="2">Required Text</Label>
                            <Col sm="7">
                                <FormGroup className="has-success">
                                    <Input
                                        name="required"
                                        type="text"
                                    />
                                    <label className="error">
                                        This field is required.
                                    </label>
                                </FormGroup>
                            </Col>
                            <Col className="label-on-right" tag="label" sm="3">
                                <code>required</code>
                            </Col>
                        </Row>


                        <Row>
                            <Label sm="2">Required Text</Label>
                            <Col sm="7">
                                <FormGroup className="has-success">
                                    <Input
                                        name="required"
                                        type="text"
                                    />
                                    <label className="error">
                                        This field is required.
                                    </label>
                                </FormGroup>
                            </Col>
                            <Col className="label-on-right" tag="label" sm="3">
                                <code>required</code>
                            </Col>
                        </Row>


                        <Row>
                            <Label sm="2">Required Text</Label>
                            <Col sm="7">
                                <FormGroup className="has-success">
                                    <Input
                                        name="required"
                                        type="text"
                                    />
                                    <label className="error">
                                        This field is required.
                                    </label>
                                </FormGroup>
                            </Col>
                            <Col className="label-on-right" tag="label" sm="3">
                                <code>required</code>
                            </Col>
                        </Row>

                        <Row>
                            <Label sm="2">User Role</Label>
                            <Col className="checkbox-radios" sm="10">
                                <div className="form-check-radio">
                                    <Label check>
                                        <Input
                                            defaultValue="option1"
                                            id="exampleRadios11"
                                            name="exampleRadioz"
                                            type="radio"
                                        />
                                        Admin <span className="form-check-sign"/>
                                    </Label>
                                </div>
                                <div className="form-check-radio">
                                    <Label check>
                                        <Input
                                            defaultChecked
                                            defaultValue="option2"
                                            id="exampleRadios12"
                                            name="exampleRadioz"
                                            type="radio"
                                        />
                                        Editor <span className="form-check-sign"/>
                                    </Label>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Label sm="2">Address</Label>
                            <Col sm="2">
                                <FormGroup className="success">
                                    <Input
                                        id="idSource"
                                        placeholder="#idSource"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm="2">
                                <FormGroup className="success">
                                    <Input
                                        id="idDestination"
                                        placeholder="#idDestination"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm="2">
                                <FormGroup className="success">
                                    <Input
                                        id="idDestination"
                                        placeholder="#idDestination"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm="2">
                                <FormGroup className="success">
                                    <Input
                                        id="idDestination"
                                        placeholder="#idDestination"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>


                        <CardFooter>
                            <Button className="btn-round" color="info" type="submit">
                                Submit
                            </Button>
                        </CardFooter>

                    </Form>
                </CardBody>
            </Card>
        </Col>
    );
}


const YupSchema = Yup.object({})

export default AddUserForm;