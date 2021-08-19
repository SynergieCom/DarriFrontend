import React, {useState} from 'react';
import {Field,} from "formik";
import * as Yup from "yup";
import {RadioGroup, TextField} from "formik-material-ui";
import {
    Box,
    FormControl,
    FormControlLabel, FormHelperText,
    Grid,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    Radio
} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import {FormikStepperCustomer} from "./FormikStepperCustomer";
import {FormikStep} from "../FormikStep";
import {makeStyles} from "@material-ui/core/styles";
import defaultAvatar from "../../../assets/img/placeholder.jpg";
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import {queryServerApi} from "../../../utils/queryServerApi";
import NotificationAlert from "react-notification-alert";

export default function SignUpCustomerFrom(props) {
    const [submitted, setSubmitted] = useState(false);
    const [completed, setCompleted] = useState(false);
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

    const classes = useStyles();
    const classes2 = useStyles2();


    const CustomFileUpload = (props: SimpleFileUploadProps) => (
        <FormControl>
            {props.label && (
                <InputLabel shrink error={!!props.form.error}>
                    {props.label}
                </InputLabel>
            )}
            <Input
                error={!!props.form.error}
                inputProps={{
                    type: 'file',
                    disabled: props.disabled || props.form.isSubmitting,
                    name: props.field.name,
                    onChange: (event: any) => {
                        const file = event.currentTarget.files[0];
                        props.form.setFieldValue(props.field.name, file);
                        event.preventDefault();
                        let reader = new FileReader();
                        reader.onloadend = () => {
                            setFileState(file);
                            setImagePreviewUrl(reader.result);
                        };
                        if (file) {
                            reader.readAsDataURL(file);
                        }
                    },

                }}
                ref={fileInput}
                className={classes2.input} id="icon-button-file"

            />
            <label htmlFor="icon-button-file">
                <IconButton color="default" aria-label="upload picture" component="span">
                    Avatar
                    <AddPhotoAlternateIcon/>
                </IconButton>
            </label>
            {props.form.error && (
                <FormHelperText error>{props.form.error}</FormHelperText>
            )}
        </FormControl>
    );
    const notificationAlert = React.useRef();
    const notify = (place) => {
        var color = 2;
        var type = "success";
        var options = {};
        options = {
            place: place,
            message: (
                <div>
                    <div>
                        Congratulations ! your registry is done successfully , <strong> Please Activate Your Account via
                        the
                        confirmation Email </strong>
                    </div>
                </div>
            ),
            type: type,
            icon: "now-ui-icons ui-1_bell-53",
            autoDismiss: 10,
        };
        notificationAlert.current.notificationAlert(options);
    };


    return (
        <>
            <NotificationAlert ref={notificationAlert}/>
            <section className=" conatct pt-contact-form pt-section-overlap pt-12">
                <div className="pt-bg-overley pt-opacity1 "
                     style={{backgroundImage: "url('images/Archi5.jpg')",backgroundColor: "red"}}>
                </div>
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-xl-12 z-index-1">
                            <div className="form p-5 pr-md-5 pt-bg-light">
                                <div className="pt-bg-overley pt-opacity1 "
                                     style={{backgroundImage: "url('images/Archi.jpg')",backgroundColor: "red"}}>
                                </div>
                                <div className="pt-section-title-box">
                                    <span className="pt-section-sub-title">Sign Up</span>
                                    <h2 className="pt-section-title">Sign Up as customer</h2>
                                </div>
                                <FormikStepperCustomer initialValues={{
                                    Username: "",
                                    Cin: "",
                                    FirstName: "",
                                    LastName: "",
                                    Password: "",
                                    ConfirmationPassword: "",
                                    Email: "",
                                    PhoneNumber: "",
                                    Street: "",
                                    City: " ",
                                    State: "",
                                    ZipCode: "",
                                    Gender: "Male",
                                    DayOfBirth: "",
                                    Role: "Customer",
                                }}
                                                       submitted={submitted}
                                                       completed={completed}
                                                       success={success}
                                                       error={error}
                                                       onSubmit={async (values) => {
                                                           await setSubmitted(true);
                                                           setTimeout(async () => {
                                                               console.log("-> values", values);
                                                               setSubmitted(false);
                                                               setCompleted(true);

                                                               const [res, err] = await queryServerApi("customers/add", values, "POST", true);
                                                               console.log(err);
                                                               console.log('res = ', res);
                                                               if (res === "UserNameExist") {
                                                                   setError({
                                                                       visible: true,
                                                                       message: "Username already exist",
                                                                       UserNameErr: true
                                                                   });
                                                               } else if (res === "CinExist") {
                                                                   setError({
                                                                       visible: true,
                                                                       message: "Cin  already exist",
                                                                       CinErr: true
                                                                   });
                                                               } else if (res === "EmailExist") {
                                                                   setError({
                                                                       visible: true,
                                                                       message: "This email address is already registered. If it belongs to you, \n" +
                                                                           "log in above or visit our account recovery page to get access to this account.",
                                                                       EmailExist: true
                                                                   });
                                                               } else if (err) {
                                                                   console.log('error', err)
                                                                   setError({
                                                                       visible: true,
                                                                       message: JSON.stringify(err.errors, null, 2),
                                                                   });
                                                               } else {
                                                                   notify("tr");
                                                                   setSuccess(true);
                                                                   setError({visible: false});
                                                               }

                                                           }, 3000);
                                                       }}
                                >
                                    {/* First Step */}
                                    <FormikStep label="About" validationSchema={YupSchemaStep1}>
                                        <div className={classes.root}>

                                            <Grid container spacing={2}>
                                                <Grid item xs={5}>
                                                    <div className="fileinput text-center">
                                                        <div className={"thumbnail img-circle"} style={{backgroundColor: "black"}}>
                                                            <img src={imagePreviewUrl} alt="..."/>
                                                        </div>
                                                    </div>
                                                    <br/>
                                                    <Field
                                                        name="img"
                                                        label=""
                                                        component={CustomFileUpload}
                                                    />
                                                </Grid>


                                                <Grid item xs={5}>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <Field fullWidth type="Number" name="Cin" component={TextField}
                                                           label="CIN"/>
                                                </Grid>
                                                <Grid item xs={10}>

                                                    <Field fullWidth type="text" name="FirstName" component={TextField}
                                                           label="First Name"/>
                                                </Grid>
                                                <Grid item xs={10}>

                                                    <Field fullWidth type="text" name="LastName" component={TextField}
                                                           label="Last Name"/>
                                                </Grid>
                                                <Grid item xs={6}>

                                                    <Field type="Date" name="DayOfBirth" component={TextField}
                                                           label="Day Of Birth"
                                                           InputLabelProps={{
                                                               shrink: true,
                                                           }}/>
                                                </Grid>
                                                <Grid item xs={6}>

                                                    <Field component={RadioGroup} name="Gender">
                                                        <FormControlLabel
                                                            defaultChecked
                                                            value="Male"
                                                            control={<Radio/>}
                                                            label="Male"
                                                        />
                                                        <FormControlLabel
                                                            value="Female"
                                                            control={<Radio/>}
                                                            label="Female"
                                                        />
                                                    </Field>
                                                </Grid>

                                                <br/>
                                            </Grid>
                                        </div>

                                    </FormikStep>

                                    {/* Second Step */}
                                    <FormikStep label="Account & Security" validationSchema={YupSchemaStep2}>
                                        <Box paddingBottom={2}>
                                            <Field fullWidth type="text" name="Username" component={TextField}
                                                   label="Username"
                                                   InputProps={{
                                                       startAdornment: (
                                                           <InputAdornment position="start">
                                                               <AccountCircle/>
                                                           </InputAdornment>
                                                       ),
                                                   }}/>
                                        </Box>
                                        <Box paddingBottom={2}>
                                            <Field fullWidth type="email" name="Email" component={TextField}
                                                   label="Email"/>
                                        </Box>
                                        <Box paddingBottom={2}>
                                            <Field fullWidth type="Number" name="PhoneNumber" component={TextField}
                                                   label="Phone Number"/>
                                        </Box>

                                        <Box paddingBottom={2}>

                                            <Field fullWidth type="password" name="Password" component={TextField}
                                                   label="Password"/>
                                        </Box>

                                        <Box paddingBottom={2}>

                                            <Field fullWidth type="password" name="PasswordConfirmation"
                                                   component={TextField}
                                                   label="Confirm Password"/>
                                        </Box>
                                        <br/>
                                        <br/>
                                    </FormikStep>
                                    {/* Third Step */}

                                    <FormikStep
                                        label={error.visible ? "Error" : completed ? "Completed" : success ? "Success" : "Address"}
                                        validationSchema={YupSchemaStep3}>
                                        <Box paddingBottom={2}>

                                            <Field fullWidth type="text" name="City" component={TextField} label="City"
                                                   variant="outlined" InputLabelProps={{
                                                shrink: true,
                                            }}/>
                                        </Box>
                                        <Box paddingBottom={2}>

                                            <Field fullWidth type="text" name="Street" component={TextField}
                                                   label="Street"
                                                   variant="outlined" InputLabelProps={{
                                                shrink: true,
                                            }}/>
                                        </Box>
                                        <Box paddingBottom={2}>

                                            <Field fullWidth type="text" name="State" component={TextField}
                                                   label="State"
                                                   variant="outlined" InputLabelProps={{
                                                shrink: true,
                                            }}/>
                                        </Box>
                                        <Box paddingBottom={2}>

                                            <Field fullWidth type="text" name="ZipCode" component={TextField}
                                                   label="ZipCode"
                                                   variant="outlined" InputLabelProps={{
                                                shrink: true,
                                            }}/>
                                        </Box>
                                    </FormikStep>
                                </FormikStepperCustomer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


const YupSchemaStep1 = Yup.object({
    Cin: Yup.number("CIN should be a number")
        .positive("the CIN Number should be positive")
        .required("CIN is required"),
    FirstName: Yup.string()
        .required("First Name is Required"),
    LastName: Yup.string()
        .required("Last Name is Required"),
    DayOfBirth: Yup.date()
        .required("Creation Date is required")
        .max(new Date(), "you can't choose a future date"),
});


const YupSchemaStep2 = Yup.object(
    {
        Username: Yup.string()
            .required("Username is Required"),
        Email: Yup.string()
            .email("No valid Email ")
            .required("email is Required"),
        PhoneNumber: Yup.number("Phone Number should be a number")
            .positive("the Phone Number Number should be positive")
            .required("PhoneNumber is required"),
        Password: Yup.string()
            .min(8 | " your password should be 8 characters at least")
            .max(15 | " longer than 15 characters")
            .required("password is Required"),
        PasswordConfirmation: Yup.string()
            .oneOf([Yup.ref('Password'), null], 'Passwords must match')
            .required("You need to confirm your password"),
    });


const YupSchemaStep3 = Yup.object(
    {
        ZipCode: Yup.number("Zip Code should be a number")
            .positive("Zip Code should be Positive"),
    }
);


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const useStyles2 = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));