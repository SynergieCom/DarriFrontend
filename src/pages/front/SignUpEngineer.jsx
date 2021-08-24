import React, {useEffect} from 'react';
import Sidebar from "../../components/front/Sidebar";
import Action from '../../components/front/Action';
import Footer from '../../components/front/Footer';
import ScrollTop from '../../components/front/ScrollTop';
import Loader from '../../components/front/Loader';
import NavBarHome from "../../components/front/Home/NavBarHome";
import SignUpEngineerForm from "../../components/front/SingUpEngineerForm/SignUpEngineerFrom";

const SingUpEngineer = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Loader/>
            <NavBarHome/>
            <Sidebar/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>

            <SignUpEngineerForm/>

            <Action/>
            <Footer/>
            <ScrollTop/>
        </>
    );

}
export default SingUpEngineer;