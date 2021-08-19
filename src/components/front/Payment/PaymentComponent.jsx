import React, {useEffect, useState} from 'react';
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {Box, Button, CircularProgress, Grid} from "@material-ui/core";
import PaymentIcon from '@material-ui/icons/Payment';
import {Form, Formik, FormikConfig, FormikValues, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";


import {TextField} from "formik-material-ui";
import {Label} from "reactstrap";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {queryServerApi} from "../../../utils/queryServerApi";
import {Alert} from "@material-ui/lab";


function PaymentComponent(props) {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [completed, setCompleted] = useState(false);


    return (
        <section className=" conatct pt-contact-form pt-section-overlap pt-12">
            <div className="container">
                <div className="pt-bg-overley pt-opacity1 "
                     style={{backgroundImage: "url('images/Archi5.jpg')", backgroundColor: "red"}}>
                </div>
                <div className="row no-gutters">
                    <div className="col-xl-12 z-index-1">
                        <div className="form p-5 pr-md-5 pt-bg-light">
                            <div className="pt-bg-overley pt-opacity1 "
                                 style={{backgroundImage: "url('images/ArchiPay2.jpg')"}}>
                            </div>
                            <div className="pt-section-title-box">
                                <span className="pt-section-sub-title">Payment</span>
                                <h2 className="pt-section-title">Pay your Subscription</h2>
                            </div>

                            <Formik initialValues={{
                                PaymentMethod: "",
                                NameOnCard: "",
                                Email: "",
                                Street: "",
                                City: "",
                                State: "",
                                ZipCode: "",
                                creditCard: "",
                                CardType: "",
                                SecurityCode: "",
                                ExpirationDate: "",
                                Country: "",
                                PhoneNumber: "",
                            }} onSubmit={async (values) => {
                                await setSubmitted(true);
                                setTimeout(async () => {
                                    setSubmitted(false);

                                    if (!stripe || !elements) {
                                        return;
                                    }
                                    const cardElement = elements.getElement(CardElement);
                                    console.log("-> cardElement", cardElement);
                                    console.log("-> values", values);

                                    const {error, paymentMethod} = await stripe.createPaymentMethod({
                                        type: "card",
                                        card: cardElement,
                                        billing_details: {
                                            email: values.Email,
                                            phone: values.PhoneNumber,
                                            name: values.NameOnCard,
                                            address: {
                                                city: values.City,
                                            },
                                        },
                                    });

                                    if (error) {
                                        console.log("[error]", error);
                                        setError(error);
                                    } else {
                                        const {id} = paymentMethod;
                                        const amount = props.amount * 100;
                                        console.log("-> amount", amount);
                                        const idUser = props.id;
                                        const response = await axios.post(
                                            "http://localhost:3000/payments/stripePayment",
                                            {
                                                amount,
                                                id,
                                                idUser,
                                            }
                                        );
                                        const newVal = {
                                            PaymentMethod: paymentMethod.type,
                                            NameOnCard: values.NameOnCard,
                                            Email: values.Email,
                                            Street: values.Street,
                                            City: values.City,
                                            ZipCode: values.ZipCode,
                                            creditCard: paymentMethod.card.last4,
                                            CardType: paymentMethod.card.brand,
                                            ExpirationDate: new Date(
                                                paymentMethod.card.exp_year +
                                                "/" +
                                                paymentMethod.card.exp_month +
                                                "/" +
                                                1
                                            ),
                                            Country: paymentMethod.card.country,
                                            PhoneNumber: values.PhoneNumber,
                                            Amount: amount,
                                            Role: props.userType
                                        };
                                        const [res, err] = await queryServerApi(
                                            "payments/addPayment/" + idUser,
                                            newVal,
                                            "POST",
                                            false
                                        );
                                        console.log(res);
                                        if (err) {
                                            setError(err);
                                        } else setSuccess(true);
                                        console.log("-> newVal", newVal);
                                    }


                                }, 3000)


                            }}
                                    validationSchema={YupSchema}
                            >
                                {!success ? (
                                    <>
                                        <Form>
                                            {submitted && !success && (
                                                // @ts-ignore
                                                <>
                                                    <Alert color="error" fade={false}>
                                                        <span><b>Fail !</b>Please check your card informations again</span>
                                                    </Alert>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                </>


                                            )}
                                            <Grid container spacing={2}>
                                                <Grid item xs={10}>
                                                    <h6>Personal informations</h6>
                                                </Grid>

                                                <Grid item xs={10}>
                                                    <Field fullWidth type="text" name="NameOnCard" component={TextField}
                                                           label="Name On Card"/>
                                                </Grid>

                                                <Grid item xs={10}>
                                                    <Field fullWidth type="email" name="Email" component={TextField}
                                                           label="Email"/>
                                                </Grid>

                                                <Grid item xs={10}>
                                                    <Field fullWidth type="Number" name="PhoneNumber"
                                                           component={TextField}
                                                           label="Phone Number"/>
                                                </Grid>

                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <Grid item xs={3}>

                                                    <Field fullWidth type="text" name="City" component={TextField}
                                                           label="City"
                                                           variant="outlined" InputLabelProps={{
                                                        shrink: true,
                                                    }}/>
                                                </Grid>

                                                <Grid item xs={3}>

                                                    <Field fullWidth type="text" name="Street" component={TextField}
                                                           label="Street"
                                                           variant="outlined" InputLabelProps={{
                                                        shrink: true,
                                                    }}/>
                                                </Grid>
                                                <Grid item xs={3}>

                                                    <Field fullWidth type="text" name="State" component={TextField}
                                                           label="State"
                                                           variant="outlined" InputLabelProps={{
                                                        shrink: true,
                                                    }}/>
                                                </Grid>
                                                <Grid item xs={3}>

                                                    <Field fullWidth type="number" name="ZipCode" component={TextField}
                                                           label="ZipCode"
                                                           variant="outlined" InputLabelProps={{
                                                        shrink: true,
                                                    }}/>
                                                </Grid>

                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <Grid item xs={10}>
                                                    <h6>Card informations</h6>
                                                </Grid>
                                                <Grid item xs={10}>
                                                    <CardElement options={cardOptions}/>
                                                </Grid>

                                            </Grid>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <Grid container spacing={10}>
                                                <Grid item>
                                                </Grid> <Grid item>
                                            </Grid> <Grid item>
                                            </Grid> <Grid item>
                                            </Grid> <Grid item>
                                            </Grid>
                                                <Grid item>

                                                    <Button variant="contained"
                                                            color="primary"
                                                            type="submit"
                                                            size="large"
                                                            disabled={submitted}
                                                        // @ts-ignore
                                                            endIcon={submitted ?
                                                                <CircularProgress size="1rem" color="default"/> :
                                                                // @ts-ignore
                                                                <PaymentIcon color="default"/>}
                                                    >
                                                        Pay
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Form>

                                    </>
                                ) : (

                                    // @ts-ignore
                                    <Alert color="success" fade={false}>
                                        <h5>Congratulations ! your payment is done successfully , Please Activate Your
                                            Account via the
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                                            confirmation mail , you'll receive an additional mail about payments
                                            details </h5>
                                    </Alert>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

const cardOptions = {
    style: {
        base: {
            fontSize: "20px",
            color: "#090961",
            "::placeholder": {
                color: "#1a1a21",
            },
        },
        invalid: {
            color: "#b63100",
        },
    },
};


const YupSchema = Yup.object({
    NameOnCard: Yup.string().required("Name is required"),
    Email: Yup.string()
        .email("No valid Email ")
        .required("email is Required"),
    PhoneNumber: Yup.number("Phone Number should be a number")
        .positive("Phone Number should be Positive")
        .required("phone number is Required"),
    Street: Yup.string().required("street is required"),
    State: Yup.string().required("street is required"),
    City: Yup.string().required("city is required"),
    ZipCode: Yup.number("Zip Code should be a number")
        .positive("Zip Code should be Positive")
        .required("Zip Code is Required"),
});
export default PaymentComponent;