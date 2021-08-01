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
    Label, Modal, UncontrolledAlert
} from "reactstrap";
import {useHistory} from "react-router";
import {useFormik} from "formik";
import * as Yup from "yup";
import {queryServerApi} from "../../../utils/queryServerApi";

function DisableUserAccount(props) {
    const history = useHistory();
    const [error, setError] = useState({visible: false, message: ""});
    const [success, setSuccess] = useState(false);
    const [modalClassic, setModalClassic] = React.useState(false);
    const toggleModalClassic = async () => {
        setModalClassic(!modalClassic);
    };

    const disableAccount = async () => {
        const [res, err] = await queryServerApi("users/DisableAccount/" + props.id, {password: formik.values.password}, "PUT", false);
        if (res === "WrongPassword") {
            setError({
                visible: true,
                message: "Wrong Password",
            });
            await toggleModalClassic();
        } else if (res === "Deleted") {
            setSuccess(true);
            await toggleModalClassic();
            Logout();
        } else {
            setError({
                visible: true,
                message: JSON.stringify(err.errors, null, 2),
            });
        }
    }

    const Logout = () => {
        setTimeout(() => {
            localStorage.clear();
            history.push("/");
            history.go(0);
        }, 3000);

    };

    const formik = useFormik({
        initialValues: {
            password: "",
        }, validationSchema: YupSchema,
        onSubmit: async (values) => {
            await toggleModalClassic();
        }
    });

    return (
        <>
            <Col md="6">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Disable</CardTitle>
                    </CardHeader>
                    <CardBody>
                        {!success ? (
                            <>
                                <Form onSubmit={formik.handleSubmit} action="#" method="#">
                                    {error.visible && (
                                        <UncontrolledAlert color="danger" fade={false}>
                                            <span><b>Danger ! </b>{error.message}</span>
                                        </UncontrolledAlert>
                                    )}
                                    <br/>
                                    <label>Password</label>
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
                                    <CardFooter>
                                        <Button className="btn-round" color="info" type="submit">
                                            Disable
                                        </Button>
                                    </CardFooter>
                                </Form>

                            </>
                        ) : (
                            <>
                                <UncontrolledAlert color="success" fade={false}>
                                    <span><b>Done ! </b>Account Disabled , Logout ...</span>
                                </UncontrolledAlert>
                            </>
                        )}
                    </CardBody>

                </Card>
                <Modal isOpen={modalClassic} toggle={toggleModalClassic}>
                    <div className="modal-header justify-content-center">
                        <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={toggleModalClassic}
                        >
                            <i className="nc-icon nc-simple-remove"/>
                        </button>
                        <h4 className="title title-up">DISABLE ACCOUNT</h4>
                    </div>
                    <div className="modal-body">
                        <p>
                            Would you like to disable your account?
                            to confirm your decision press on disable
                        </p>
                    </div>
                    <div className="modal-footer">
                        <div className="left-side">
                            <Button
                                className="btn-link"
                                color="default"
                                data-dismiss="modal"
                                type="button"
                                onClick={toggleModalClassic}
                            >
                                Back
                            </Button>
                        </div>
                        <div className="divider"/>
                        <div className="right-side">
                            <Button
                                className="btn-link"
                                color="danger"
                                type="button"
                                onClick={disableAccount}
                            >
                                Disable
                            </Button>
                        </div>
                    </div>
                </Modal>

            </Col>

        </>
    );
}

const YupSchema = Yup.object({
    password: Yup.string()
        .min(8 | " your password should be 8 characters at least")
        .max(15 | " longer than 15 characters")
        .required("password is Required"),

});


export default DisableUserAccount;