import React, {useState} from 'react';
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
    Label,
    Row, UncontrolledAlert
} from "reactstrap";
import {queryServerApi} from "../../../utils/queryServerApi";
import * as Yup from "yup";
import {useFormik} from "formik";

function ChangesPassword(props) {
    const [error, setError] = useState({visible: false, message: ""});
    const [success, setSuccess] = useState(false);


    const formik = useFormik({
        initialValues: {
            currentPassword: "",
            password: "",
            passwordConfirmation: "",
        }, validationSchema: YupSchema,
        onSubmit: async (values) => {
            console.log(values);
            const [res, err] = await queryServerApi("users/updatePassword/" + props.id, values, "PUT", false);
            if (res === "WrongPassword") {
                setError({
                    visible: true,
                    message: "Wrong Password",
                });
            } else if (res === "PasswordUpdated") {
                setSuccess(true);
            } else {
                setError({
                    visible: true,
                    message: JSON.stringify(err.errors, null, 2),
                });
            }
        }
    });


    return (
        <>
            <Col md="6">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Change Password</CardTitle>
                    </CardHeader>
                    <CardBody>
                        {!success ? (
                            <>
                                <Form onSubmit={formik.handleSubmit} className="form-horizontal">
                                    {error.visible && (
                                        <UncontrolledAlert color="danger" fade={false}>
                                            <span><b>Danger ! </b>{error.message}</span>
                                        </UncontrolledAlert>
                                    )}
                                    <Row>
                                        <Label md="3">Current Password</Label>
                                        <Col md="9">
                                            <FormGroup
                                                className={formik.errors.currentPassword && formik.touched.currentPassword ? "has-danger" : "has-success"}>
                                                <Input
                                                    name="currentPassword"
                                                    placeholder="Current Password"
                                                    type="password"
                                                    value={formik.values.currentPassword}
                                                    onChange={formik.handleChange}
                                                />
                                                {(formik.errors.currentPassword || formik.touched.currentPassword) &&
                                                <label className="error">
                                                    {formik.errors.currentPassword}
                                                </label>
                                                }
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Label md="3">New Password</Label>
                                        <Col md="9">
                                            <FormGroup
                                                className={formik.errors.password && formik.touched.password ? "has-danger" : "has-success"}>
                                                <Input
                                                    name="password"
                                                    placeholder="New Password"
                                                    type="password"
                                                    value={formik.values.password}
                                                    onChange={formik.handleChange}
                                                />
                                                {(formik.errors.password || formik.touched.password) &&
                                                <label className="error">
                                                    {formik.errors.password}
                                                </label>
                                                }
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Label md="3">Confirm Password</Label>
                                        <Col md="9">
                                            <FormGroup
                                                className={formik.errors.passwordConfirmation && formik.touched.passwordConfirmation ? "has-danger" : "has-success"}>
                                                <Input name="passwordConfirmation"
                                                       placeholder="Confirm Password"
                                                       type="password"
                                                       value={formik.values.passwordConfirmation}
                                                       onChange={formik.handleChange}
                                                />
                                                {(formik.errors.passwordConfirmation || formik.touched.passwordConfirmation) &&
                                                <label className="error">
                                                    {formik.errors.passwordConfirmation}
                                                </label>
                                                }
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <CardFooter>
                                        <Row>
                                            <Col md="3"/>
                                            <Col md="9">
                                                <Button className="btn-round" color="info" type="submit">
                                                    Validate
                                                </Button>
                                            </Col>
                                        </Row>
                                    </CardFooter>
                                </Form>
                            </>
                        ) : (
                            <>
                            <UncontrolledAlert color="success" fade={false}>
                                <span><b>Done ! </b>Password Changed Successfully </span>
                            </UncontrolledAlert>
                            </>
                        )

                        }
                    </CardBody>

                </Card>
            </Col>

        </>
    );
}

const YupSchema = Yup.object({
    currentPassword: Yup.string()
        .min(8 | " your password should be 8 characters at least")
        .max(15 | " longer than 15 characters")
        .required("password is Required"),
    password: Yup.string()
        .min(8 | " your password should be 8 characters at least")
        .max(15 | " longer than 15 characters")
        .required("password is Required"),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export default ChangesPassword;