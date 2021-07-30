import React, {useEffect} from 'react';
import {Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Row} from "reactstrap";
import defaultAvatar from "../../../assets/img/placeholder.jpg";
import {useFormik} from "formik";
import {queryServerApi} from "../../../utils/queryServerApi";
import * as Yup from "yup";

function EditProfileAdmin(props) {
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


    useEffect(() => {
        async function fetchDataForm() {
            const [res, err] = await queryServerApi("users/" + localStorage.getItem('id'));
            formik.setValues({
                "Id": res?._id,
                "Username": res.Username,
                "Cin": res.Cin,
                "FirstName": res.FirstName,
                "LastName": res.LastName,
                "Email": res.Email,
                "PhoneNumber": res.PhoneNumber,
                "Street": res.Street,
                "City": res.City,
                "State": res.State,
                "ZipCode": res.ZipCode,
            })
        }
        fetchDataForm().then(r => console.log("-> ","DONE"));
    }, []);

    return (
        <>
            <Col md="8">
                <Card>
                    <CardHeader>
                        <h5 className="title">Edit Profile</h5>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col className="pr-1" md="5">
                                    <FormGroup>
                                        <label>Id</label>
                                        <Input
                                            value={formik.values.Id}
                                            disabled
                                            placeholder="Company"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col className="px-1" md="3">
                                    <FormGroup>
                                        <label>Username</label>
                                        <Input
                                            name="Username"
                                            value={formik.values.Username}
                                            type="text"
                                            onChange={formik.handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="4">
                                    <FormGroup>
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
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <FormGroup>
                                        <label>First Name</label>
                                        <Input
                                            name="FirstName"
                                            value={formik.values.FirstName}
                                            type="text"
                                            onChange={formik.handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <FormGroup>
                                        <label>Last Name</label>
                                        <Input
                                            name="LastName"
                                            value={formik.values.LastName}
                                            type="text"
                                            onChange={formik.handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Address</label>
                                        <Input
                                            defaultValue="Melbourne, Australia"
                                            placeholder="Home Address"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="4">
                                    <FormGroup>
                                        <label>City</label>
                                        <Input
                                            defaultValue="Melbourne"
                                            placeholder="City"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col className="px-1" md="4">
                                    <FormGroup>
                                        <label>Country</label>
                                        <Input
                                            defaultValue="Australia"
                                            placeholder="Country"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="4">
                                    <FormGroup>
                                        <label>Postal Code</label>
                                        <Input placeholder="ZIP Code" type="number"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>About Me</label>
                                        <Input
                                            className="textarea"
                                            type="textarea"
                                            cols="80"
                                            rows="4"
                                            defaultValue="Oh so, your weak rhyme You doubt I'll bother,
                          reading into it"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
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
export default EditProfileAdmin;