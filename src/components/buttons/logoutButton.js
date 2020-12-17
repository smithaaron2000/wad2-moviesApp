import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0();
    return(
        <button 
        type="button"
        className="btn w-100 btn-primary"
        onClick= {() => logout()}>
            Log Out
        </button>
        )
}

export default LogoutButton;