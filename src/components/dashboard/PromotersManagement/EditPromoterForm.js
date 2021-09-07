import React, {useEffect, useState} from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {useFormik} from "formik";
import {queryServerApi} from "../../../utils/queryServerApi";
import * as Yup from "yup";
import {useHistory} from "react-router";
import defaultAvatar from "../../../assets/img/placeholder.jpg";
import Select from "react-select";

export default function EditPromoterForm(props) {
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

    const [PdfError, setPdfError] = useState({
        visible: false,
        message: "",
    });

    const handleImageChangePDF = (e) => {
        const fileType = ['application/pdf'];
        let file = e.target.files[0];
        if (file) {
            if (file && fileType.includes(file.type)) {
                formik.setFieldValue("cv", e.target.files[0]);
                e.preventDefault();
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
            "ResponsibleCin": "",
            "ResponsibleName": "",
            "CreationYear": "",
            "CommercialName": "",
            "Activity": "",
            "RegisterStatus": "",
            "RegionalOffice": "",
            "Denomination": "",
            "TaxSituation": "",
            "Email": "",
            "PhoneNumber": "",
            "Street": "",
            "City": "",
            "State": "",
            "ZipCode": "",
        }, validationSchema: YupSchema,
        onSubmit: async (values) => {
            console.log("Values", values);
            const [res, err] = await queryServerApi("promoters/update/" + props.id, values, "PUT", true);
            console.log(err);
            if (err) {
                console.log('error', err);
            } else {
                history.push("/admin/promoters");
            }
        }
    });


    useEffect(() => {
        async function fetchDataForm() {
            const [res, err] = await queryServerApi("promoters/" + props.id);
            formik.setValues({
                "ResponsibleCin": res.ResponsibleCin,
                "ResponsibleName": res.ResponsibleName,
                "CreationYear": res.CreationYear,
                "CommercialName": res.CommercialName,
                "Activity": res.Activity,
                "RegisterStatus": res.RegisterStatus,
                "RegionalOffice": res.RegionalOffice,
                "Denomination": res.Denomination,
                "TaxSituation": res.TaxSituation,
                "Email": res.Email,
                "PhoneNumber": res.PhoneNumber,
                "Street": res.HeadquartersAddress.Street,
                "City": res.HeadquartersAddress.City,
                "State": res.HeadquartersAddress.State,
                "ZipCode": res.HeadquartersAddress.ZipCode,
            })
            console.log("-> res", res);
            if (res.img != null) {
                setImagePreviewUrl(process.env.REACT_APP_API_URL_UPLOADS + "/" + res.img);
            } else {
                setImagePreviewUrl(defaultAvatar);
            }
        }

        fetchDataForm().then(r => console.log("-> ", "DONE"));
    }, []);

    return (
        <>
            <Col md="8">
                <Form onSubmit={formik.handleSubmit} className="form-horizontal" method="get">

                    <Card>
                        <CardHeader>
                            <h5 className="title">Edit Customer</h5>
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
                                    <Col className="pr-1" md="3">
                                        <FormGroup
                                            className={formik.errors.ResponsibleCin && formik.touched.ResponsibleCin ? "has-danger" : "has-success"}>
                                            <label>ResponsibleCin</label>
                                            <Input
                                                name="ResponsibleCin"
                                                value={formik.values.ResponsibleCin}
                                                type="number"
                                                onChange={formik.handleChange}
                                            />
                                            {(formik.errors.ResponsibleCin || formik.touched.ResponsibleCin) &&
                                            <label className="error">
                                                {formik.errors.ResponsibleCin}
                                            </label>
                                            }
                                        </FormGroup>
                                    </Col>
                                    <Col className="px-1" md="4">
                                        <FormGroup
                                            className={formik.errors.Username && formik.touched.ResponsibleName ? "has-danger" : "has-success"}>
                                            <label>Responsible Name</label>
                                            <Input
                                                name="ResponsibleName"
                                                value={formik.values.ResponsibleName}
                                                type="text"
                                                onChange={formik.handleChange}
                                            />
                                            {(formik.errors.ResponsibleName || formik.touched.ResponsibleName) &&
                                            <label className="error">
                                                {formik.errors.ResponsibleName}
                                            </label>
                                            }
                                        </FormGroup>
                                    </Col>
                                    <Col className="pl-1" md="5">
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
                                            className={formik.errors.Denomination && formik.touched.Denomination ? "has-danger" : "has-success"}>
                                            <label>Denomination</label>
                                            <Input
                                                name="Denomination"
                                                value={formik.values.Denomination}
                                                type="text"
                                                onChange={formik.handleChange}
                                            />
                                            {(formik.errors.Denomination || formik.touched.Denomination) &&
                                            <label className="error">
                                                {formik.errors.Denomination}
                                            </label>
                                            }
                                        </FormGroup>
                                    </Col>
                                    <Col className="pl-1" md="6">
                                        <FormGroup
                                            className={formik.errors.CommercialName && formik.touched.CommercialName ? "has-danger" : "has-success"}>
                                            <label>Commercia Name</label>
                                            <Input
                                                name="CommercialName"
                                                value={formik.values.CommercialName}
                                                type="text"
                                                onChange={formik.handleChange}
                                            />
                                            {(formik.errors.CommercialName || formik.touched.CommercialName) &&
                                            <label className="error">
                                                {formik.errors.LastName}
                                            </label>
                                            }
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pr-1" md="6">
                                        <FormGroup
                                            className={formik.errors.CreationYear && formik.touched.CreationYear ? "has-danger" : "has-success"}>
                                            <label>CreationYear</label>
                                            <Input
                                                name="CreationYear"
                                                value={formik.values.CreationYear}
                                                type="date"
                                                onChange={formik.handleChange}
                                            />
                                            {(formik.errors.CreationYear || formik.touched.CreationYear) &&
                                            <label className="error">
                                                {formik.errors.CreationYear}
                                            </label>
                                            }
                                        </FormGroup>
                                    </Col>

                                    <Col className="pL-1" md="6">

                                        <FormGroup
                                            className={formik.errors.PhoneNumber && formik.touched.PhoneNumber ? "has-danger" : "has-success"}>
                                            <label>Phone Number</label>
                                            <Input
                                                name="PhoneNumber"
                                                value={formik.values.PhoneNumber}
                                                type="number"
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


                                <br/>


                                <Row>
                                    <Col className="pr-1" md="3">
                                        <Select
                                            className="react-select primary"
                                            classNamePrefix="react-select"
                                            name="TaxSituation"
                                            value={formik.values.TaxSituation}
                                            onChange={(value) => formik.setFieldValue("TaxSituation", value.value)}
                                            options={[
                                                {value: "Intérieur", label: "Intérieur"},
                                                {value: "Urbaniste", label: "Urbaniste"},
                                                {value: "Paysagiste", label: "Paysagiste"},
                                                {value: "Extérieur", label: "Extérieur"},

                                            ]}
                                            placeholder={formik.values.TaxSituation}
                                        />
                                    </Col>
                                    <br/>

                                    <Label sm="2">Gender</Label>
                                    <Col className="checkbox-radios" sm="2">
                                        <div className="form-check-radio">
                                            <Label check>
                                                {formik.values.Activity === "Deactivated" ? (
                                                    <>
                                                        <Input
                                                            defaultChecked
                                                            value="Deactivated"
                                                            id="exampleRadios11"
                                                            name="Activity"
                                                            type="radio"
                                                            onChange={() => formik.setFieldValue("Activity", "Deactivated")}
                                                        />
                                                    </>
                                                ) : (
                                                    <>
                                                        <Input
                                                            value="Deactivated"
                                                            id="exampleRadios11"
                                                            name="Activity"
                                                            type="radio"
                                                            onChange={() => formik.setFieldValue("Activity", "Deactivated")}
                                                        />
                                                    </>
                                                )
                                                }

                                                Deactivated <span className="form-check-sign"/>
                                            </Label>
                                        </div>
                                        <div className="form-check-radio">
                                            <Label check>
                                                {formik.values.Activity === "Activated" ? (
                                                    <>
                                                        <Input
                                                            defaultChecked
                                                            value="Activated"
                                                            id="exampleRadios12"
                                                            name="Activity"
                                                            type="radio"
                                                            onChange={() => formik.setFieldValue("Activity", "Activated")}
                                                        />
                                                    </>

                                                ) : (
                                                    <>
                                                        <Input
                                                            value="Activated"
                                                            id="exampleRadios12"
                                                            name="Activity"
                                                            type="radio"
                                                            onChange={() => formik.setFieldValue("Activity", "Activated")}
                                                        />
                                                    </>
                                                )
                                                }

                                                Activated <span className="form-check-sign"/>
                                            </Label>
                                        </div>
                                    </Col>
                                </Row>


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
    Email: Yup.string()
        .email("No valid Email ")
        .required("email is Required"),
    PhoneNumber: Yup.number("Phone Number should be a number")
        .positive("Phone Number should be Positive")
        .required("phone number is Required"),
    ZipCode: Yup.number("Zip Code should be a number")
        .positive("Zip Code should be Positive"),
});
