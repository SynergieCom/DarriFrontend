import React, {useEffect} from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {useFormik} from "formik";
import {queryServerApi} from "../../../utils/queryServerApi";
import * as Yup from "yup";
import {useHistory} from "react-router";

function EditUserForm(props) {
    const history = useHistory();
    const [fileState, setFileState] = React.useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = React.useState("");
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
        setImagePreviewUrl(imagePreviewUrl);
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
            "Role": ""
        }, validationSchema: YupSchema,
        onSubmit: async (values) => {
            console.log("Values", values);
            const [res, err] = await queryServerApi("users/update/" + props.id, values, "PUT", true);
            console.log(err);
            if (err) {
                console.log('error', err);
            } else {
                history.push("/admin/users");
            }
        }
    });


    useEffect(() => {
        async function fetchDataForm() {
            const [res, err] = await queryServerApi("users/" + props.id);
            formik.setValues({
                "Id": res?._id,
                "Username": res.Username,
                "Cin": res.Cin,
                "FirstName": res.FirstName,
                "LastName": res.LastName,
                "Email": res.Email,
                "PhoneNumber": res.PhoneNumber,
                "Street": res.Address.Street,
                "City": res.Address.City,
                "State": res.Address.State,
                "ZipCode": res.Address.ZipCode,
                "Role": res.Role
            })
            setImagePreviewUrl(process.env.REACT_APP_API_URL_UPLOADS + "/" + res.img)
        }

        fetchDataForm().then(r => console.log("-> ", "DONE"));
    }, []);

    return (
        <>
            <Col md="8">
                <Form onSubmit={formik.handleSubmit} className="form-horizontal" method="get">

                    <Card>
                        <CardHeader>
                            <h5 className="title">Edit User</h5>
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
                            <Form>
                                <Row>
                                    <Col className="pr-1" md="4">
                                        <FormGroup>
                                            <label>Id</label>
                                            <Input
                                                value={formik.values.Id}
                                                disabled
                                                type="number"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="px-1" md="2">
                                        <FormGroup
                                            className={formik.errors.Cin && formik.touched.Cin ? "has-danger" : "has-success"}>
                                            <label>Cin</label>
                                            <Input
                                                name="Cin"
                                                value={formik.values.Cin}
                                                type="number"
                                                onChange={formik.handleChange}
                                            />
                                            {(formik.errors.Cin || formik.touched.Cin) &&
                                            <label className="error">
                                                {formik.errors.Cin}
                                            </label>
                                            }
                                        </FormGroup>
                                    </Col>
                                    <Col className="px-1" md="2">
                                        <FormGroup
                                            className={formik.errors.Username && formik.touched.Username ? "has-danger" : "has-success"}>
                                            <label>Username</label>
                                            <Input
                                                name="Username"
                                                value={formik.values.Username}
                                                type="text"
                                                onChange={formik.handleChange}
                                            />
                                            {(formik.errors.Username || formik.touched.Username) &&
                                            <label className="error">
                                                {formik.errors.Username}
                                            </label>
                                            }
                                        </FormGroup>
                                    </Col>
                                    <Col className="pl-1" md="4">
                                        <FormGroup
                                            className={formik.errors.Email && formik.touched.Email ? "has-danger" : "has-success"}>
                                            <label htmlFor="exampleInputEmail1">
                                                Email address
                                            </label>
                                            <Input
                                                name="Email"
                                                placeholder="Email"
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
                                </Row>
                                <Row>
                                    <Col className="pr-1" md="6">
                                        <FormGroup
                                            className={formik.errors.FirstName && formik.touched.FirstName ? "has-danger" : "has-success"}>
                                            <label>First Name</label>
                                            <Input
                                                name="FirstName"
                                                value={formik.values.FirstName}
                                                type="text"
                                                onChange={formik.handleChange}
                                            />
                                            {(formik.errors.FirstName || formik.touched.FirstName) &&
                                            <label className="error">
                                                {formik.errors.FirstName}
                                            </label>
                                            }
                                        </FormGroup>
                                    </Col>
                                    <Col className="pl-1" md="6">
                                        <FormGroup
                                            className={formik.errors.LastName && formik.touched.LastName ? "has-danger" : "has-success"}>
                                            <label>Last Name</label>
                                            <Input
                                                name="LastName"
                                                value={formik.values.LastName}
                                                type="text"
                                                onChange={formik.handleChange}
                                            />
                                            {(formik.errors.LastName || formik.touched.LastName) &&
                                            <label className="error">
                                                {formik.errors.LastName}
                                            </label>
                                            }
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <FormGroup
                                            className={formik.errors.PhoneNumber && formik.touched.PhoneNumber ? "has-danger" : "has-success"}>
                                            <label>Phone Number</label>
                                            <Input
                                                name="PhoneNumber"
                                                value={formik.values.PhoneNumber}
                                                type="text"
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
                                    <Col className="pr-1" md="3">
                                        <FormGroup>
                                            <label>City</label>
                                            <Input
                                                name="City"
                                                value={formik.values.City}
                                                type="text"
                                                onChange={formik.handleChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="pr-1" md="3">
                                        <FormGroup>
                                            <label>Street</label>
                                            <Input
                                                name="Street"
                                                value={formik.values.Street}
                                                type="text"
                                                onChange={formik.handleChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="px-1" md="3">
                                        <FormGroup>
                                            <label>State</label>
                                            <Input
                                                name="State"
                                                value={formik.values.State}
                                                type="text"
                                                onChange={formik.handleChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="pl-1" md="3">
                                        <FormGroup
                                            className={formik.errors.ZipCode && formik.touched.ZipCode ? "has-danger" : "has-success"}>
                                            <label>Zip Code</label>
                                            <Input
                                                name="ZipCode"
                                                value={formik.values.ZipCode}
                                                type="number"
                                                onChange={formik.handleChange}
                                            />
                                            {(formik.errors.ZipCode || formik.touched.ZipCode) &&
                                            <label className="error">
                                                {formik.errors.ZipCode}
                                            </label>
                                            }
                                        </FormGroup>
                                    </Col>
                                </Row>


                                {localStorage.getItem('role') ==="Admin" && (
                                    <Row>
                                        <Label sm="2">User Role</Label>
                                        <Col className="checkbox-radios" sm="10">
                                            <div className="form-check-radio">
                                                <Label check>
                                                    {formik.values.Role === "Admin" ? (
                                                        <>
                                                            <Input
                                                                defaultChecked
                                                                value="Admin"
                                                                id="exampleRadios11"
                                                                name="Role"
                                                                type="radio"
                                                                onChange={() => formik.setFieldValue("Role", "Admin")}
                                                            />
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Input
                                                                value="Admin"
                                                                id="exampleRadios11"
                                                                name="Role"
                                                                type="radio"
                                                                onChange={() => formik.setFieldValue("Role", "Admin")}
                                                            />
                                                        </>
                                                    )
                                                    }

                                                    Admin <span className="form-check-sign"/>
                                                </Label>
                                            </div>
                                            <div className="form-check-radio">
                                                <Label check>
                                                    {formik.values.Role === "Editor" ? (
                                                        <>
                                                            <Input
                                                                defaultChecked
                                                                value="Editor"
                                                                id="exampleRadios12"
                                                                name="Role"
                                                                type="radio"
                                                                onChange={() => formik.setFieldValue("Role", "Editor")}
                                                            />
                                                        </>

                                                    ) : (
                                                        <>
                                                            <Input
                                                                value="Editor"
                                                                id="exampleRadios12"
                                                                name="Role"
                                                                type="radio"
                                                                onChange={() => formik.setFieldValue("Role", "Editor")}
                                                            />
                                                        </>
                                                    )
                                                    }

                                                    Editor <span className="form-check-sign"/>
                                                </Label>
                                            </div>
                                        </Col>
                                    </Row>

                                )}

                            </Form>
                        </CardBody>
                        <CardFooter className="text-center">
                            <Button color="primary">
                                Edit
                            </Button>
                        </CardFooter>
                    </Card>
                </Form>
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
});
export default EditUserForm;