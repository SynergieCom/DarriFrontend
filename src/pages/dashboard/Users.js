import React, {useEffect} from "react";
import {
    Row,
} from "reactstrap";
import {useServerApi} from "../../hooks/useServerApi";
import UsersTable from "../../components/dashboard/UsersManagement/UsersTable";

function Users() {
    const [users] = useServerApi('users/usersAll');


    useEffect(() => {
        console.log("-> users", users);

    }, []);


    return (
        <>
            <div className="content">
                <Row>
                    <UsersTable Users={users}/>

                </Row>

            </div>
        </>
    );
}

export default Users;
