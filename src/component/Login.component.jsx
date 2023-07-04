import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import type {User} from "../interfaces/User.interface";
import axios from "axios";
import VerificationComponent from "./Verification.component";

export function LoginComponent() {
    const moment = require('moment');
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showVerificationPage, setShowVerificationPage] = useState(false);
    const [registerUserId,setRegisterUserId] = useState("");

    let user: User = {
        id: "",
        username: username,
        password: password,
        mail: ""
    }

    const login = () => {

            axios.post(`http://localhost:8080/api/login`, user)
                .then((response) => {
                    console.log(response.data)
                    if(response) {
                        if (response.data.status === 200) {
                            //FIXME: Passer le cookie dans le header au lieu du body
                            const cookies = response.data.object.code;
                            const expires = moment.utc().add(20, "minute").format('ddd, DD MMM YYYY HH:mm:ss [UTC]')
                            document.cookie = `auth=${cookies}; expires=${expires}; path=/`;
                        } else if (response.data.status === 201) {
                            setRegisterUserId(response.data.object.id)
                            setShowVerificationPage(true);
                        }
                    }
                }).catch(error => {
                    //FIXME: ICI afficher une pop-up avec l'erreur correspondante en fonction du status
                    console.error(error);
            })
    }
    return (
        <div>

            {showVerificationPage ?
                (<VerificationComponent
                    id={registerUserId}
                />) : (
                    <>
                        <TextField
                            id="standard-login-input"
                            label="Login"
                            autoComplete="current-login"
                            variant="standard"
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                        />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                        <Button variant="outlined" onClick={login}>Envoyer</Button>
                    </>
                )}
        </div>);
}