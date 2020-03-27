import React, { Component, useState } from 'react';
import Field from '../../components/form/Field';

import "../../../css/login.css";

import AuthApi from '../../api/AuthApi';
import MaterialField from '../../components/form/MaterialField';

const LoginPage = props => {

    const [user, setUser] = useState({
        "username": "",
        "password": "",
        "remember": false
    });

    const [errors, setErrors] = useState({
        "username": "",
        "password": "",
        "remember": ""
    });

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await AuthApi.login(user);
            setErrors("");
            props.history.push("/");
            
        } catch(error) {
            const { violations } = error.response.data;

            if (violations) {
                const apiErrors = {};
                violations.forEach(violation => {
                    apiErrors[violation.propertyPath] = violation.message;
                });

                setErrors(apiErrors);
            }
        }
    };

    const handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setUser({ ...user, [name]: value });
    }

    return (
        <React.Fragment>
            <div className="row">
                <div id="info-section" className="col-sm-12 col-md-6">
                    <div >
                        <h1>info</h1>
                    </div>
                </div>
                <div id="login-section" className="col-sm-12 col-md-6">
                    <div className="">
                        <h1 className="text-login">Login</h1>
                        <div className="form-login-box">
                            <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 align-self-center">
                                <form onSubmit={handleSubmit}>
                                    <MaterialField 
                                        type="text"
                                        label="Email"
                                        name="username"
                                        value={user.username}
                                        onChange={handleChange}
                                        error={errors.username}
                                        placeholder=""
                                        required
                                    />
                                    <MaterialField 
                                        type="password"
                                        label="Mot de passe"
                                        name="password"
                                        value={user.password}
                                        onChange={handleChange}
                                        error={errors.password}
                                        placeholder=""
                                        required
                                    />
                                    <div className="form-check">
                                        <input 
                                            name="remember"
                                            type="checkbox" 
                                            className="form-check-input" 
                                            id="remember" 
                                            onChange={handleChange}
                                            checked={user.remember}
                                        />
                                        <label className="form-check-label" htmlFor="remember">
                                            Se souvenir de moi
                                        </label>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <button className="btn btn-primary btn-block">Connexion</button>
                                    </div>
                                </form>
                                <div id="forgotten-password">
                                    <p>Vous avez perdu votre mot de passe ? <a href="#">Cliquez ici</a></p>
                                </div>
                                <a className="nav-link text-center" href="#">Créer un compte</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginPage;