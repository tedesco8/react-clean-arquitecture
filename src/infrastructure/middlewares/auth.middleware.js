import { Fragment, useEffect, useState } from "react";
import AuthService from "../../application/services/auth.service";
import AuthRepository from "../repositories/auth.repository";
import { Outlet, useNavigate } from "react-router-dom";

const AuthMiddleware = () => {
    const navigate = useNavigate();
    const authService = new AuthService(new AuthRepository());
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => !isLogged && getPing(), []);

    function getPing() {
        authService.ping({
            onSuccess: (res) => setIsLogged(() => res),
            onError: () => navigate('/sign-in')
        })
    }
    return (
        <div><Outlet /></div>
    )
}

export default AuthMiddleware   