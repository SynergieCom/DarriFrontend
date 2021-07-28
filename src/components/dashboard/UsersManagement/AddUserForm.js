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
import * as Yup from "yup";
import {useFormik} from "formik";
import {queryServerApi} from "../../../utils/queryServerApi";
import defaultAvatar from "../../../assets/img/placeholder.jpg";
import defaultImage from "../../../assets/img/image_placeholder.jpg";

function AddUserForm() {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState({
        visible: false,
        message: "",
        CinErr: false,
        UserNameErr: false,
        EmailExist: false
    });


    const [fileState, setFileState] = React.useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = React.useState(defaultAvatar);
    const fileInput = React.useRef();
    const handleImageChange = (e) => {
        e.preventDefault();
        formik.setFieldValue("img", e.target.files[0]);
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setFileState(file);
            setImagePreviewUrl(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // fileState is the file/image uploaded
        // in this function you can save the image (fileState) on form submit
        // you have to call it yourself
    };
    const handleClick = () => {
        console.log("-> fileInput.current.click()", fileInput.current.click());
        fileInput.current.click();
        fileInput.current.click();
    };
    const handleRemove = () => {
        fileInput.current.value = null;
        setFileState(null);
        setImagePreviewUrl(defaultAvatar);
    };


    const formik = useFormik({
        initialValues: {
            "Username": "",
            "Cin": "",
            "FirstName": "",
            "LastName": "",
            "Password": "",
            "PasswordConfirmation": "",
            "Email": "",
            "PhoneNumber": "",
            "Street": "",
            "City": " ",
            "State": "",
            "ZipCode": " ",
            "Role": "",
        }, validationSchema: YupSchema,
        onSubmit: async (values) => {
            console.log("Values", values);
            const [res, err] = await queryServerApi("users", values, "POST", true);
            console.log(err);
            console.log('res = ', res);
            if (err) {
                console.log('error', err)
                setError({
                    visible: true,
                    message: JSON.stringify(err.errors, null, 2),
                });
            } else {
                console.log("add");
                //history.push("/");
                setSuccess(true);
            }
        }
    });


    return (
        <Col md="12">
            <Form onSubmit={formik.handleSubmit} className="form-horizontal" method="get">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Add Admin / Editor</CardTitle>
                    </CardHeader>
                    <div className="fileinput text-center">
                        <input type="file" onChange={handleImageChange} ref={fileInput}/>
                        <div className={"thumbnail img-circle"}>
                            <img src={imagePreviewUrl} alt="..."/>
                        </div>
                        <div>
                            {fileState === null ? (
                                <Button className="btn-round" type="file" onClick={(event) => {
                                    handleClick();
                                }}>
                                    Add Photo
                                </Button>
                            ) : (
                                <span>
                                         <Button className="btn-round" onClick={(event) => {
                                             handleClick();
                                         }}>
                                               Change
                                                         </Button>
                                     <br/>
                                            <Button
                                                color="danger"
                                                className="btn-round"
                                                onClick={(event) => {
                                                    handleRemove();
                                                }}>
                                                <i className="fa fa-times"/>
                                                Remove
                                            </Button>
                                        </span>
                            )}
                        </div>
                    </div>


                    <CardBody>
                        <Row>
                            <Label sm="2">CIN</Label>
                            <Col sm="7">
                                <FormGroup className="has-success">
                                    <Input
                                        name="Cin"
                                        type="number"
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
                            <Label sm="2">Username </Label>
                            <Col sm="7">
                                <FormGroup className="has-success">
                                    <Input
                                        name="Username"
                                        type="text"
                                        value={formik.values.Username}
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
                            <Label sm="2">First name </Label>
                            <Col sm="7">
                                <FormGroup className="has-success">
                                    <Input
                                        name="FirstName"
                                        type="text"
                                        value={formik.values.FirstName}
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
                            <Label sm="2">Last name</Label>
                            <Col sm="7">
                                <FormGroup className="has-success">
                                    <Input
                                        name="LastName"
                                        type="text"
                                        value={formik.values.LastName}
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
                            <Label sm="2">Email</Label>
                            <Col sm="7">
                                <FormGroup className="has-success">
                                    <Input
                                        name="Email"
                                        type="email"
                                        value={formik.values.Email}
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
                            <Label sm="2">Password</Label>
                            <Col sm="7">
                                <FormGroup className="has-success">
                                    <Input
                                        name="Password"
                                        type="password"
                                        value={formik.values.Password}
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
                            <Label sm="2">Confirm Password</Label>
                            <Col sm="7">
                                <FormGroup className="has-success">
                                    <Input
                                        name="PasswordConfirmation"
                                        type="password"
                                        value={formik.values.PasswordConfirmation}
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
                            <Label sm="2">Phone number</Label>
                            <Col sm="7">
                                <FormGroup className="has-success">
                                    <Input
                                        name="PhoneNumber"
                                        type="number"
                                        value={formik.values.PhoneNumber}
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
                            <Label sm="2">Address</Label>
                            <Col sm="2">
                                <FormGroup className="success">
                                    <Input
                                        name="Street"
                                        placeholder="Street"
                                        type="text"
                                        value={formik.values.Street}
                                        onChange={formik.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm="2">
                                <FormGroup className="success">
                                    <Input
                                        name="City"
                                        placeholder="City"
                                        type="text"
                                        value={formik.values.City}
                                        onChange={formik.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm="2">
                                <FormGroup className="success">
                                    <Input
                                        name="State"
                                        placeholder="State"
                                        type="text"
                                        value={formik.values.State}
                                        onChange={formik.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm="2">
                                <FormGroup className="success">
                                    <Input
                                        name="ZipCode"
                                        placeholder="ZipCode"
                                        type="text"
                                        value={formik.values.ZipCode}
                                        onChange={formik.handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <br/>
                        <br/>

                        <Row>
                            <Label sm="2">User Role</Label>
                            <Col className="checkbox-radios" sm="10">
                                <div className="form-check-radio">
                                    <Label check>
                                        <Input
                                            value="Admin"
                                            id="exampleRadios11"
                                            name="Role"
                                            type="radio"
                                            onChange={() => formik.setFieldValue("Role", "Admin")}

                                        />
                                        Admin <span className="form-check-sign"/>
                                    </Label>
                                </div>
                                <div className="form-check-radio">
                                    <Label check>
                                        <Input
                                            defaultChecked
                                            value="Editor"
                                            id="exampleRadios12"
                                            name="Role"
                                            type="radio"
                                            onChange={() => formik.setFieldValue("Role", "Editor")}
                                        />
                                        Editor <span className="form-check-sign"/>
                                    </Label>
                                </div>
                            </Col>
                        </Row>

                    </CardBody>
                    <CardFooter className="text-center">
                        <Button color="primary">
                            Validate Inputs
                        </Button>
                    </CardFooter>
                </Card>
            </Form>

        </Col>
    );
}


const YupSchema = Yup.object({})

export default AddUserForm;