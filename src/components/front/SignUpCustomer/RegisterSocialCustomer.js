import React, {useEffect} from 'react';
import {Button, Col} from "reactstrap";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

function RegisterSocialCustomer(props) {
    let Formik = props.form;
    const responseGoogle = (response) => {
        console.log(response);
        Formik.setValues({
            Username: response.profileObj.name,
            Cin: "",
            FirstName: response.profileObj.familyName,
            LastName: response.profileObj.givenName,
            Password: "",
            ConfirmationPassword: "",
            Email: response.profileObj.email,
            PhoneNumber: "",
            Street: "",
            City: " ",
            State: "",
            ZipCode: "",
            Gender: "Male",
            DayOfBirth: "",
            Role: "Customer",
        });

    }
    useEffect(() => {
        console.log("-> Formik", Formik);
    }, []);


    const responseErrorGoogle = (response) => {

    }

    const responseFacebook = (response) => {
        console.log(response);
        Formik.setValues({
            ResponsibleCin: "",
            ResponsibleName: response.name,
            CreationYear: "",
            CommercialName: "",
            Activity: "",
            Street: "",
            City: "",
            ZipCode: "",
            RegisterStatus: "",
            RegionalOffice: "",
            Denomination: "",
            TaxSituation: "",
            Email: response.email,
            Password:"",
            passwordConfirmation: "",
            PhoneNumber: ""
        });
    }
    return (
        <>
            <Col md="1" sm="1" xs="3">
                <Button className="btn-icon btn-round" color="facebook">
                    <FacebookLogin
                        size="Small"
                        appId="430902411432071"
                        autoLoad={false}
                        fields="name,email,picture"
                        cssClass="btnFacebook"
                        icon="fa fa-facebook-f"
                        textButton=""
                        callback={responseFacebook}
                    />
                </Button>
            </Col>
            <Col md="1" sm="1" xs="3">
                <GoogleLogin
                    clientId="211469900619-2p5n681boi9123tb9tqohej9b5186mr6.apps.googleusercontent.com"
                    render={renderProps => (
                        <Button
                            className="btn-icon btn-round"
                            color="google"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                        >
                            <i className="fa fa-google"/>
                        </Button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseErrorGoogle}
                />
            </Col>
            <Col md="1" sm="1" xs="3">
                <Button className="btn-icon btn-round" color="linkedin">
                    <i className="fa fa-linkedin"/>
                </Button>
            </Col>
            <Col md="1" sm="1" xs="3">
                <Button className="btn-icon btn-round" color="github">
                    <i className="fa fa-github"/>
                </Button>
            </Col>

        </>
    );
}

export default RegisterSocialCustomer;