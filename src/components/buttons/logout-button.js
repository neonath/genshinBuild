import React from "react";
import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "react-bootstrap";

export const LogoutButton = () => {
    const {logout} = useAuth0();

    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            },
        });
    };

    return(
        <Button className="d-flex" variant="primary" onClick={handleLogout}>
            Log Out
        </Button>
    );
};