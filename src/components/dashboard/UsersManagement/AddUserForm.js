import React, {useEffect, useState} from 'react';
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
import {useHistory} from "react-router";

function AddUserForm() {
    const history = useHistory();
    const role = localStorage.getItem('Role');
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
            "ZipCode": "",
            "Role": "Editor",
        }, validationSchema: YupSchema,
        onSubmit: async (values) => {
            console.log("Values", values);
            const [res, err] = await queryServerApi("users", values, "POST", true);
            console.log(err);
            console.log('res = ', res);
            if (err) {
                console.log('error', err);
            } else {
                history.push(`/admin/users?username=${formik.values.Username}`);
            }
        }
    });


    return (
        <>
            <Col md="12">
                {role === "Admin " ? (
                    <>
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
                                            <FormGroup
                                                className={formik.errors.Cin && formik.touched.Cin ? "has-danger" : "has-success"}>
                                                <Input
                                                    name="Cin"
                                                    type="number"
                                                    value={formik.values.Cin}
                                                    onChange={formik.handleChange}
                                                />
                                                {(formik.errors.Cin || formik.touched.Cin) &&
                                                <label className="error">
                                                    {formik.errors.Cin}
                                                </label>
                                                }
                                            </FormGroup>
                                        </Col>
                                        <Col className="label-on-right" tag="label" sm="3">
                                            <code>*</code>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Label sm="2">Username </Label>
                                        <Col sm="7">
                                            <FormGroup
                                                className={formik.errors.Username && formik.touched.Username ? "has-danger" : "has-success"}>
                                                <Input
                                                    name="Username"
                                                    type="text"
                                                    value={formik.values.Username}
                                                    onChange={formik.handleChange}
                                                />
                                                {(formik.errors.Username || formik.touched.Username) &&
                                                <label className="error">
                                                    {formik.errors.Username}
                                                </label>
                                                }
                                            </FormGroup>
                                        </Col>
                                        <Col className="label-on-right" tag="label" sm="3">
                                            <code>*</code>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Label sm="2">First name </Label>
                                        <Col sm="7">
                                            <FormGroup
                                                className={formik.errors.FirstName && formik.touched.FirstName ? "has-danger" : "has-success"}>
                                                <Input
                                                    name="FirstName"
                                                    type="text"
                                                    value={formik.values.FirstName}
                                                    onChange={formik.handleChange}
                                                />
                                                {(formik.errors.FirstName || formik.touched.FirstName) &&
                                                <label className="error">
                                                    {formik.errors.FirstName}
                                                </label>
                                                }
                                            </FormGroup>
                                        </Col>
                                        <Col className="label-on-right" tag="label" sm="3">
                                            <code>*</code>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Label sm="2">Last name</Label>
                                        <Col sm="7">
                                            <FormGroup
                                                className={formik.errors.LastName && formik.touched.LastName ? "has-danger" : "has-success"}>
                                                <Input
                                                    name="LastName"
                                                    type="text"
                                                    value={formik.values.LastName}
                                                    onChange={formik.handleChange}
                                                />
                                                {(formik.errors.LastName || formik.touched.LastName) &&
                                                <label className="error">
                                                    {formik.errors.LastName}
                                                </label>
                                                }
                                            </FormGroup>
                                        </Col>
                                        <Col className="label-on-right" tag="label" sm="3">
                                            <code>*</code>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Label sm="2">Email</Label>
                                        <Col sm="7">
                                            <FormGroup
                                                className={formik.errors.Email && formik.touched.Email ? "has-danger" : "has-success"}>
                                                <Input
                                                    name="Email"
                                                    type="email"
                                                    value={formik.values.Email}
                                                    onChange={formik.handleChange}
                                                />
                                                {(formik.errors.Email || formik.touched.Email) &&
                                                <label className="error">
                                                    {formik.errors.Email}
                                                </label>
                                                }
                                            </FormGroup>
                                        </Col>
                                        <Col className="label-on-right" tag="label" sm="3">
                                            <code>*</code>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Label sm="2">Password</Label>
                                        <Col sm="7">
                                            <FormGroup
                                                className={formik.errors.Password && formik.touched.Password ? "has-danger" : "has-success"}>
                                                <Input
                                                    name="Password"
                                                    type="password"
                                                    value={formik.values.Password}
                                                    onChange={formik.handleChange}
                                                />
                                                {(formik.errors.Password || formik.touched.Password) &&
                                                <label className="error">
                                                    {formik.errors.Password}
                                                </label>
                                                }
                                            </FormGroup>
                                        </Col>
                                        <Col className="label-on-right" tag="label" sm="3">
                                            <code>*</code>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Label sm="2">Confirm Password</Label>
                                        <Col sm="7">
                                            <FormGroup
                                                className={formik.errors.PasswordConfirmation && formik.touched.PasswordConfirmation ? "has-danger" : "has-success"}>
                                                <Input
                                                    name="PasswordConfirmation"
                                                    type="password"
                                                    value={formik.values.PasswordConfirmation}
                                                    onChange={formik.handleChange}
                                                />
                                                {(formik.errors.PasswordConfirmation || formik.touched.PasswordConfirmation) &&
                                                <label className="error">
                                                    {formik.errors.PasswordConfirmation}
                                                </label>
                                                }
                                            </FormGroup>
                                        </Col>
                                        <Col className="label-on-right" tag="label" sm="3">
                                            <code>*</code>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Label sm="2">Phone number</Label>
                                        <Col sm="7">
                                            <FormGroup
                                                className={formik.errors.PhoneNumber && formik.touched.PhoneNumber ? "has-danger" : "has-success"}>
                                                <Input
                                                    name="PhoneNumber"
                                                    type="number"
                                                    value={formik.values.PhoneNumber}
                                                    onChange={formik.handleChange}
                                                />
                                                {(formik.errors.PhoneNumber || formik.touched.PhoneNumber) &&
                                                <label className="error">
                                                    {formik.errors.PhoneNumber}
                                                </label>
                                                }
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Label sm="2">Address</Label>
                                        <Col sm="2">
                                            <FormGroup
                                                className="has-success">
                                                <Input
                                                    id="Street"
                                                    name="Street"
                                                    type="text"
                                                    value={formik.values.Street}
                                                    onChange={formik.handleChange}
                                                />
                                                <label className="error">
                                                    Street
                                                </label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="2">

                                            <FormGroup className="has-success">
                                                <Input
                                                    id="City"
                                                    name="City"
                                                    type="text"
                                                    value={formik.values.City}
                                                    onChange={formik.handleChange}
                                                />
                                                <label className="error">
                                                    City
                                                </label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="2">
                                            <FormGroup className="has-success">
                                                <Input
                                                    id="State"
                                                    name="State"
                                                    type="text"
                                                    value={formik.values.State}
                                                    onChange={formik.handleChange}
                                                />
                                                <label className="error">
                                                    State
                                                </label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="2">
                                            <FormGroup
                                                className={formik.errors.ZipCode && formik.touched.ZipCode ? "has-danger" : "has-success"}>
                                                <Input
                                                    id="ZipCode"
                                                    name="ZipCode"
                                                    type="number"
                                                    value={formik.values.ZipCode}
                                                    onChange={formik.handleChange}
                                                />
                                                {(formik.errors.ZipCode || formik.touched.ZipCode) ?
                                                    <label className="error">
                                                        {formik.errors.ZipCode}
                                                    </label>
                                                    :
                                                    <label className="error">
                                                        ZipCode
                                                    </label>
                                                }
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
                                        Add
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Form>

                    </>
                ) : (
                    <>
                        <h1> Only Admin can add another User (Admin/Editor) </h1>
                    </>
                )}

            </Col>
        </>
    );
}


const YupSchema = Yup.object({
    Cin: Yup.number("CIN should be a number")
        .positive("the CIN Number should be positive")
        .required("CIN is required"),
    FirstName: Yup.string()
        .required("First Name is Required"),
    Username: Yup.string()
        .required("Username is Required"),
    LastName: Yup.string()
        .required("Last Name is Required"),
    Email: Yup.string()
        .email("No valid Email ")
        .required("email is Required"),
    PhoneNumber: Yup.number("Phone Number should be a number")
        .positive("Phone Number should be Positive")
        .required("phone number is Required"),
    ZipCode: Yup.number("Zip Code should be a number")
        .positive("Zip Code should be Positive"),
    Password: Yup.string()
        .min(8 | " your password should be 8 characters at least")
        .max(15 | " longer than 15 characters")
        .required("password is Required"),
    PasswordConfirmation: Yup.string()
        .oneOf([Yup.ref('Password'), null], 'Passwords must match')
        .required("You need to confirm your password"),
});

export default AddUserForm;