import React, { useState } from 'react';
import {
    TextField,
    Button,
} from '@mui/material';
import axios from "axios";

interface VerificationProps {
    id:string,
}

const VerificationComponent = (props:VerificationProps) => {
    const [verificationCode, setVerificationCode] = useState('');

    const handleVerification = () => {
        const verificationInfos = {
            id:props.id,
            code:verificationCode,
        }
        axios.put(`http://localhost:8080/api/verification`, verificationInfos)
            .then((response) => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
        });
    };

    return (
        <div>
            <TextField
                id="standard-login-input"
                label="Login"
                autoComplete="current-login"
                variant="standard"
                onChange={(e) => {
                    setVerificationCode(e.target.value)
                }}
            />
            <Button variant="outlined" onClick={handleVerification}>Envoyer</Button>
        </div>
    );
};

export default VerificationComponent;
