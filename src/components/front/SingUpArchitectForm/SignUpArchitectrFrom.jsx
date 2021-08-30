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
    InputLabel, MenuItem,
    Radio
} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import {FormikStep} from "../FormikStep";
import {makeStyles} from "@material-ui/core/styles";
import defaultAvatar from "../../../assets/img/placeholder.jpg";
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import {queryServerApi} from "../../../utils/queryServerApi";
import NotificationAlert from "react-notification-alert";
import {FormikStepperArchitect} from "./FormikStepperArchitect";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import {Select} from 'formik-material-ui';
import {useHistory} from "react-router";
import {Button, Col} from "reactstrap";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

export default function SignUpArchitectFrom(props) {
    const history = useHistory();
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
    const [PdfError, setPdfError] = useState({
        visible: false,
        message: "",
    });


    const [fileState, setFileState] = React.useState(null);
    const [PdfFileState, setPdfFileState] = React.useState(null);
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
    const classes3 = useStyles3();


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


    const CustomFileUploadPdf = (props: SimpleFileUploadProps) => (
        <FormControl>
            {props.label && (
                <InputLabel shrink error={!!props.form.error}>
                    {props.label}
                </InputLabel>
            )}
            <Input
                error={!!props.form.error || PdfError.visible}
                inputProps={{
                    type: 'file',
                    disabled: props.disabled || props.form.isSubmitting,
                    name: props.field.name,
                    onChange: (event: any) => {
                        const file = event.currentTarget.files[0];
                        const fileType = ['application/pdf'];
                        if (file) {
                            if (file && fileType.includes(file.type)) {
                                props.form.setFieldValue(props.field.name, file);
                                event.preventDefault();
                                let reader = new FileReader();
                                reader.readAsDataURL(file);
                                reader.onloadend = () => {
                                    setPdfFileState(file);
                                    setPdfError({visible: false, message: ''})
                                };
                            } else {
                                setPdfFileState(null);
                                setPdfError({visible: true, message: 'please choose valid pdf file'})
                            }
                        } else {
                            console.log("choose your file");
                        }
                    }
                    ,

                }
                }
                ref={fileInput}
                className={classes2.input} id="icon-button-file"

            />
            <label htmlFor="icon-button-file">
                <Button
                    component="span"
                    variant="contained"
                    color="secondary"
                    className={classes3.button}
                    startIcon={<PictureAsPdfIcon/>}
                >
                    Upload Your CV
                </Button>
            </label>
            {props.form.error && (
                <FormHelperText error>{props.form.error}</FormHelperText>
            )}
            {PdfError.visible
            && (
                <FormHelperText error>{PdfError.message
                }</FormHelperText>
            )}
            {PdfFileState != null
            && (
                <FormHelperText success>{PdfFileState.name}</FormHelperText>
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
                        Done your form has submitted successfully <br/>
                        <strong>next step after 10 seconds ...</strong>
                        now choose your subscription and continue the payment process to profit of our service
                    </div>
                </div>
            ),
            type: type,
            icon: "now-ui-icons ui-1_bell-53",
            autoDismiss: 10,
        };
        notificationAlert.current.notificationAlert(options);
    };


    const notifyGoogle = (place, email, name) => {
        var color = 2;
        var type = "danger";
        var options = {};
        options = {
            place: place,
            message: (
                <div>
                    <div>
                        Great ! your registry is almost done successfully with your google
                        account {email} , <strong> {name} Please complete the missing fields to finish your
                        registration </strong>
                    </div>
                </div>
            ),
            type: type,
            icon: "now-ui-icons ui-1_bell-53",
            autoDismiss: 10,
        };
        notificationAlert.current.notificationAlert(options);
    };
    const notifyFacebook = (place, email, name) => {
        var color = 2;
        var type = "info";
        var options = {};
        options = {
            place: place,
            message: (
                <div>
                    <div>
                        Great ! your registry is almost done successfully with your facebook
                        account {email} , <strong> {name} Please complete the missing fields to finish your
                        registration </strong>
                    </div>
                </div>
            ),
            type: type,
            icon: "now-ui-icons ui-1_bell-53",
            autoDismiss: 10,
        };
        notificationAlert.current.notificationAlert(options);
    };

    const [Username, setUsername] = useState("");
    const [FirsName, setFirsName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const responseGoogle = (response) => {
        console.log(response);
        setUsername(response.profileObj.name);
        setFirsName(response.profileObj.familyName);
        setLastName(response.profileObj.givenName);
        setEmail(response.profileObj.email);
        notifyGoogle("tr", response.profileObj.email, response.profileObj.name);
    }

    const responseErrorGoogle = (response) => {

    }

    const responseFacebook = (response) => {
        console.log(response);
        setUsername(response.name);
        setEmail(response.email);
        notifyFacebook("tr", response.email, response.name);

    }

    return (
        <>
            <NotificationAlert ref={notificationAlert}/>
            <section className=" conatct pt-contact-form pt-section-overlap pt-12">
                <div className="container">
                    <div className="pt-bg-overley pt-opacity1 "
                         style={{backgroundImage: "url('images/Archi5.jpg')", backgroundColor: "red"}}>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-xl-12 z-index-1">
                            <div className="form p-5 pr-md-5 pt-bg-light">
                                <div className="pt-bg-overley pt-opacity1 "
                                     style={{backgroundImage: "url('images/Archi6.jpg')", backgroundColor: "red"}}>
                                </div>

                                <Grid container spacing={4}>
                                    <Grid item xs={7}>
                                        <div className="pt-section-title-box">
                                            <span className="pt-section-sub-title">Sign Up</span>
                                            <h2 className="pt-section-title">Sign Up as Architecture</h2>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                    </Grid>
                                    <Grid>
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
                                    </Grid>
                                    <Grid>
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
                                    </Grid>
                                    <Grid>
                                        <Button className="btn-icon btn-round" color="linkedin">
                                            <i className="fa fa-linkedin"/>
                                        </Button>
                                    </Grid>
                                    <Grid>
                                        <Button className="btn-icon btn-round" color="github">
                                            <i className="fa fa-github"/>
                                        </Button>
                                    </Grid>
                                </Grid>
                                <FormikStepperArchitect initialValues={{
                                    Username: Username,
                                    Cin: "",
                                    FirstName: FirsName,
                                    LastName: LastName,
                                    Password: "",
                                    PasswordConfirmation: "",
                                    Email: Email,
                                    PhoneNumber: "",
                                    Street: "",
                                    City: " ",
                                    State: "",
                                    ZipCode: "",
                                    Gender: "Male",
                                    DayOfBirth: "",
                                    Role: "Architect",
                                    NationalEngineeringId: "",
                                    Bio: "",
                                    Type: "",
                                    NbExperienceYears: "",
                                }}
                                                        enableReinitialize
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

                                                                const [res, err] = await queryServerApi("architects/Add", values, "POST", true);
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
                                                                    setTimeout(async () => {
                                                                        history.push(`/Pricing?id=${res}`);
                                                                        history.go(0);
                                                                    }, 10000);
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
                                                        <div className={"thumbnail img-circle"}
                                                             style={{backgroundColor: "black"}}>
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


                                    <FormikStep label="Architect Details" validationSchema={YupSchemaStep3}>
                                        <Grid container spacing={4}>

                                            <Grid item xs={5}>
                                                <Field
                                                    name="cv"
                                                    label=""
                                                    component={CustomFileUploadPdf}
                                                />
                                            </Grid>


                                            <Grid item xs={7}>
                                                <Field fullWidth type="Number" name="NationalEngineeringId"
                                                       component={TextField}
                                                       label="National Engineering Id"/>
                                            </Grid>


                                            <Grid item xs={6}>
                                                <br/>
                                                <br/>
                                                <Field fullWidth type="Number" name="NbExperienceYears"
                                                       component={TextField}
                                                       label="Nb Experience Years"/>
                                            </Grid>

                                            <Grid item xs={7}>
                                                <InputLabel
                                                    id="demo-simple-select-placeholder-label-label">Type</InputLabel>
                                                <Field
                                                    labelId="demo-simple-select-placeholder-label-label"
                                                    id="demo-simple-select-placeholder-label"
                                                    fullWidth
                                                    displayEmpty
                                                    component={Select}
                                                    name="Type"
                                                    inputProps={{
                                                        id: 'age-simple',
                                                    }}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value="Intérieur">Intérieur</MenuItem>
                                                    <MenuItem value="Urbaniste">Urbaniste</MenuItem>
                                                    <MenuItem value="Paysagiste">Paysagiste</MenuItem>
                                                    <MenuItem value="Extérieur">Extérieur</MenuItem>
                                                </Field>
                                            </Grid>

                                            <Grid item xs={6}>

                                                <Field fullWidth name="Bio" component={TextField}
                                                       id="Bio"
                                                       label="Bio"
                                                       multiline
                                                       rows={4}
                                                       variant="filled"/>
                                            </Grid>

                                        </Grid>
                                        <br/>
                                        <br/>
                                        <br/>
                                    </FormikStep>


                                    {/* Third Step */}

                                    <FormikStep
                                        label={error.visible ? "Error" : completed ? "Completed" : success ? "Success" : "Address"}
                                        validationSchema={YupSchemaStep4}>
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
                                </FormikStepperArchitect>
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
        NationalEngineeringId: Yup.number("National Engineering Id should be a number")
            .positive("the National Engineering Id Number should be positive")
            .required("National Engineering Id is required"),
        NbExperienceYears: Yup.number("Nb Experience Years Code should be a number")
            .positive("Nb Experience Years Code should be Positive"),
    }
);
const YupSchemaStep4 = Yup.object(
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

const useStyles3 = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));