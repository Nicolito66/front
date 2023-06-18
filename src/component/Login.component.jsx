import React, {useState} from "react";
import {TextField} from "@mui/material";
import type {User} from "../interfaces/User.interface";
import axios from "axios";

export function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let user: User = {
        id: "",
        username: username,
        password: password,
        mail: ""
    }

    const login = () => {
        axios.get(`http://localhost:8080/api/login`, user)
            .then(() => {

            })
    }
    return (
        <div><TextField
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
        </div>);
}