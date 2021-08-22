import React, {useEffect, useState} from 'react';
import {Form, Formik, FormikConfig, FormikValues} from "formik";
import {Button, CircularProgress, Grid, Step, StepLabel, Stepper} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PropTypes from 'prop-types';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import StepConnector from '@material-ui/core/StepConnector';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import {Alert} from "@material-ui/lab";


export function FormikStepperPromoter({children, ...props}: FormikConfig<FormikValues>) {
    const arrayChildren = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
    const [step, setStep] = useState(0);
    // @ts-ignore
    const submitted = props.submitted;
    // @ts-ignore
    const completed2 = props.completed;
    // @ts-ignore
    const success = props.success;
    // @ts-ignore
    const error = props.error;
    const currentChild = arrayChildren[step];
    const isLastStep = () => {
        return step === arrayChildren.length - 1;
    }

    const ColorlibConnector = withStyles({
        alternativeLabel: {
            top: 22,
        },
        active: {
            '& $line': {
                backgroundImage:
                    'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
            },
        },
        completed: {
            '& $line': {
                backgroundImage:
                    'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
            },
        },
        line: {
            height: 3,
            border: 0,
            backgroundColor: '#07074e',
            borderRadius: 1,
        },
    })(StepConnector);

    const useColorlibStepIconStyles = makeStyles({
        root: {
            backgroundColor: '#090950',
            zIndex: 1,
            color: '#fff',
            width: 50,
            height: 50,
            display: 'flex',
            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        active: {
            backgroundImage:
                'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
            boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        },
        completed: {
            backgroundImage:
                'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        },
    });

    function ColorlibStepIcon(props) {
        const classes = useColorlibStepIconStyles();
        const {active, completed} = props;
        const check = () => {
            if (error.visible) {
                return <ErrorIcon/>
            } else if (completed2 || success) {
                return <CheckCircleIcon/>
            }
            return <PersonPinCircleIcon/>
        }
        const icons = {
            1: <AssignmentIndIcon/>,
            2: <AccountCircleIcon/>,
            3: <RecentActorsIcon/>,
            4: check(),
        };

        return (
            <div
                className={clsx(classes.root, {
                    [classes.active]: active,
                    [classes.completed]: completed,
                })}
            >
                {icons[String(props.icon)]}
            </div>
        );
    }


    ColorlibStepIcon.propTypes = {
        /**
         * Whether this step is active.
         */
        active: PropTypes.bool,
        /**
         * Mark the step as completed. Is passed to child components.
         */
        completed: PropTypes.bool,
        /**
         * The label displayed in the step icon.
         */
        icon: PropTypes.node,
    };

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
        },
        button: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    }));

    return (
        <Formik {...props}
                validationSchema={currentChild.props.validationSchema}
                onSubmit={async (values, helpers) => {
                    if (isLastStep()) {
                        await props.onSubmit(values, helpers);
                    } else {
                        setStep(s => s + 1);
                    }
                }}>


            <Form autoComplete="off">
                <Stepper alternativeLabel activeStep={step} connector={<ColorlibConnector/>}>
                    {arrayChildren.map((child, index) => (
                        // @ts-ignore
                        <Step key={child.props.label}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>
                                {child.props.label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <br/>
                {!success ?
                    <div>
                        {error.visible && (
                            // @ts-ignore
                            <Alert color="error" fade={false}>
                                <span><b>Fail !</b>{error.message}</span>
                            </Alert>
                        )}
                        <br/>
                        <br/>
                        {currentChild}

                        <Grid container spacing={10}>
                            {step > 0 &&
                            <Grid item>
                                <Button
                                    disabled={submitted}
                                    variant="contained"
                                    color="primary"
                                    // @ts-ignore
                                    startIcon={<ArrowBackIcon color="default"/>}
                                    onClick={() => setStep(s => s - 1)}
                                >
                                    Back
                                </Button>
                            </Grid>
                            }
                            <Grid item>
                                <Button
                                    disabled={submitted}
                                    variant="contained"
                                    color="primary"
                                    // @ts-ignore
                                    endIcon={submitted ? <CircularProgress size="1rem" color="default"/> :
                                        // @ts-ignore
                                        <ArrowForwardIosIcon color="default"/>}
                                    type="submit"
                                >
                                    {submitted ? 'Registering' : isLastStep() ? 'Register' : 'Next'}
                                </Button>
                            </Grid>
                        </Grid>

                    </div>
                    :
                    // @ts-ignore
                    <Alert color="success" fade={false}>
                        <h1>Done your form has submitted successfully <br/>
                            <strong>next step after 10 seconds ...</strong>
                            now choose your subscription and continue the payment process to profit of our service</h1>
                    </Alert>
                }


            </Form>

        </Formik>
    );

}

export interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
    label: String
}


