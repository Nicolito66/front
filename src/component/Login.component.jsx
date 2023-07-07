import React, {useState} from "react";
import {TextField} from "@mui/material";
import type {User} from "../interfaces/User.interface";
import axios from "axios";
import VerificationComponent from "./Verification.component";
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';
import {LABELS} from "../labels/interface-labels";
import styles from './Login.module.css';

export function LoginComponent() {
    const moment = require('moment');
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showVerificationPage, setShowVerificationPage] = useState(false);
    const [registerUserId,setRegisterUserId] = useState("");
    const [loading,setLoading] = useState(false);

    let user: User = {
        id: "",
        username: username,
        password: password,
        mail: ""
    }

    const login = () => {
        setLoading(true);
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
        }).finally(() => {
            setLoading(false);
        });
    }
    return (
        <div className={styles.page}>
            {showVerificationPage ?
                (<VerificationComponent
                    id={registerUserId}
                />) : (
                    <div className={styles.login}>
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
                        <LoadingButton
                            onClick={login}
                            loading={loading}
                            loadingIndicator={<CircularProgress size={20} />}
                        >
                            {loading ? LABELS.LOADING : LABELS.LOGIN}
                        </LoadingButton>
                    </div>
                )}
        </div>);
}