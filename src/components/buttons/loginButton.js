import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect} = useAuth0();
    return(
        <button
        type="button"
        className="btn w-100 btn-primary" 
        onClick= {() => loginWithRedirect()}>
            Log In
        </button>
        )
}

export default LoginButton;