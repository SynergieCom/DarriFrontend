import React, {useEffect, useState, useRef} from 'react';
import * as faceapi from 'face-api.js';
import '../../../assets/VideoStyle.css';
import {queryServerApi} from "../../../utils/queryServerApi";
import {useHistory} from "react-router-dom";
import {UncontrolledAlert} from "reactstrap";


const SignInWithFace = () => {
    const [error, setError] = useState({visible: false, message: "", severity: ""});
    const history = useHistory();
    const videoHeight = 400;
    const videoWidth = 640;

    const [initializing, setInitializing] = useState(false);
    const videoRef = useRef();
    const canvasRef = useRef();


    useEffect(() => {

        const loadModels = async () => {
            const MODEL_URL = process.env.PUBLIC_URL + "/models";
            setInitializing(true);
            Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
                faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
                faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
                faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL)
            ]).then(startVideo)
        }
        loadModels();

    }, []);

    const startVideo = () => {
        navigator.getUserMedia(
            {video: {}},
            stream => videoRef.current.srcObject = stream,
            err => {
                setError({
                    visible: true,
                    message: "Please Make sure that your camera is activated and reload page",
                    severity: "danger"
                });
            }
        )

    }

    const loadImage = async () => {

        const [users, err] = await queryServerApi("users/usersAll", null, "GET", false);

        return Promise.all(
            users?.filter(user => user.Role !== "Promoter")?.map(async user => {
                const descriptions = []
                const imgSrc = process.env?.REACT_APP_API_URL_UPLOADS + "/" + user?.img;
                const img = await faceapi.fetchImage(imgSrc);
                const results = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
                descriptions.push(results.descriptor);

                return new faceapi.LabeledFaceDescriptors(user._id, descriptions);
            })
        )


    }

    const stopVideo = (e) => {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();

        for (let i = 0; i < tracks.length; i++) {
            let track = tracks[i];
            track.stop();
        }

        videoRef.current.srcObject = null;
        history.go(0);
    }


    const login = async (Email) => {
        const [user, err] = await queryServerApi("users/loginface/" + Email, null, "GET", false);
        if (err) {
            setError({
                visible: true,
                message: `You need to sing Up with this Facebook Account First !`,
                severity: 'info'
            });
        } else {
            if (user.Role === "Admin" || user.Role === "Editor") {
                localStorage.setItem('username', user.Username);
                localStorage.setItem('role', user.Role);
                localStorage.setItem('id', user._id);
                localStorage.setItem('email', user.Email);
                localStorage.setItem('img', user.img);
                history.push("/admin/dashboard");
                history.go(0);
            } else if (user.Role === "Promoter") {
                const [promoter, err] = await queryServerApi("promoters/" + user.RefUser, null, "GET", false);
                if (promoter.Subscribed) {
                    localStorage.setItem('username', user.Username);
                    localStorage.setItem('role', user.Role);
                    localStorage.setItem('id', user.RefUser);
                    localStorage.setItem('email', user.Email);
                    localStorage.setItem('img', user.img);
                    history.push('/');
                    history.go(0);

                } else {
                    setError({
                        visible: true,
                        message: "You are not Subscribed Please Update your subscription",
                        subscription: true,
                        id: user.RefUser,
                        severity: 'warning'
                    });

                }
            } else if (user.Role === "Architect") {
                const [architect, err] = await queryServerApi("architects/" + user.RefUser, null, "GET", false);
                if (architect.Subscribed) {
                    localStorage.setItem('username', user.Username);
                    localStorage.setItem('role', user.Role);
                    localStorage.setItem('id', user.RefUser);
                    localStorage.setItem('email', user.Email);
                    localStorage.setItem('img', user.img);
                    history.push('/');
                    history.go(0);

                } else {
                    setError({
                        visible: true,
                        message: "You are not Subscribed Please Update your subscription",
                        subscription: true,
                        id: user.RefUser,
                        severity: 'warning'
                    });

                }
            } else if (user.Role === "Engineer") {
                const [engineer, err] = await queryServerApi("engineers/" + user.RefUser, null, "GET", false);
                if (engineer.Subscribed) {
                    localStorage.setItem('username', user.Username);
                    localStorage.setItem('role', user.Role);
                    localStorage.setItem('id', user.RefUser);
                    localStorage.setItem('email', user.Email);
                    localStorage.setItem('img', user.img);
                    history.push('/');
                    history.go(0);

                } else {
                    setError({
                        visible: true,
                        message: "You are not Subscribed Please Update your subscription",
                        subscription: true,
                        id: user.RefUser,
                        severity: 'warning'
                    });

                }
            } else {
                localStorage.setItem('username', user.Username);
                localStorage.setItem('role', user.Role);
                localStorage.setItem('id', user.RefUser);
                localStorage.setItem('email', user.Email);
                localStorage.setItem('img', user.img);
                history.push("/");
                history.go(0);

            }
        }
    }

    const handleVideoOnPlay = () => {
        setInterval(async () => {
            if (initializing) {
                setInitializing(false);
            }

            const labeledFaceDescriptors = await loadImage()
            const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.4)

            canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
            const displaySize = {width: videoWidth, height: videoHeight}
            faceapi.matchDimensions(canvasRef.current, displaySize);

            const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions().withFaceDescriptors();
            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            canvasRef.current.getContext('2d').clearRect(0, 0, videoWidth, videoHeight);
            faceapi.draw.drawDetections(canvasRef.current, resizedDetections)
            //faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections)
            //faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections)
            // console.log(detections);


            const resultF = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor))
            resultF.forEach((result, i) => {
                const box = resizedDetections[i].detection.box
                faceapi.draw.DrawBox(box, {label: result.toString()})
                var resultText = result.toString().split('(')
                var resultClear = resultText[0].replaceAll(" ", "")
                console.log(resultClear);

                if (resultClear === "unknown") {
                    setError({
                        visible: true,
                        message: "Unknown user please stay stable or try another way to sing in",
                        severity: "danger"
                    });
                } else {
                    setError({
                        visible: true,
                        message: "Welcome , sign in ...",
                        severity: "success"
                    });
                    login(resultClear);
                }
            })

        }, 1000)
    }

    return (
        <div className="container">

            {error.visible ? (
                    <UncontrolledAlert color={error.severity} fade={false}>
                        <strong className="d-block">{error.message}</strong>
                    </UncontrolledAlert>
                ) :
                (
                    <span>
                {initializing ?
                    <UncontrolledAlert color="info" fade={false}>
                        <span>Please Wait ...</span>
                    </UncontrolledAlert>
                    :
                    <UncontrolledAlert color="success" fade={false}>
                        <strong className="d-block">Ready stay stable please!</strong>
                    </UncontrolledAlert>
                }
            </span>
                )}
            <div className="display-flex justify-content-center">
                <video ref={videoRef} autoPlay muted width={videoWidth} height={videoHeight}
                       onPlay={handleVideoOnPlay}/>
                <canvas ref={canvasRef} className="position-absolute"/>
            </div>
            <br/>
            <center>
                <button className="btn-outline-danger" onClick={stopVideo}>Close Camera</button>
            </center>
        </div>
    )
}
export default SignInWithFace;