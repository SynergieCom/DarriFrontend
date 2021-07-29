import React, {useEffect} from "react";
import {
    Row,
} from "reactstrap";
import {useServerApi} from "../../hooks/useServerApi";
import UsersTable from "../../components/dashboard/UsersManagement/UsersTable";
import NotificationAlert from "react-notification-alert";
import {useLocation} from "react-router";
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Users() {
    const [users] = useServerApi('users/usersAll');
    const notificationAlert = React.useRef();
    const query = useQuery();
    let username = query.get("username");

    const notify = (place) => {
        var color = 2;
        var type= "success";
        var options = {};
        options = {
            place: place,
            message: (
                <div>
                    <div>
                       User Added Successfully  <b>{username}</b> will be notified with an Email to join the Admin dashboard
                    </div>
                </div>
            ),
            type: type,
            icon: "now-ui-icons ui-1_bell-53",
            autoDismiss:  10,
        };
        notificationAlert.current.notificationAlert(options);
    };


    useEffect(() => {
        if(username != null)
        {
            notify("tr");
        }

    }, []);


    return (
        <>
            <NotificationAlert ref={notificationAlert} />
            <div className="content">
                <Row>
                    <UsersTable Users={users}/>

                </Row>

            </div>
        </>
    );
}

export default Users;
