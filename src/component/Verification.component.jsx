import React, { useState } from 'react';
import {
    TextField,
} from '@mui/material';
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
import CircularProgress from "@mui/material/CircularProgress";
import {LABELS} from "../labels/interface-labels";

interface VerificationProps {
    id:string,
}

const VerificationComponent = (props:VerificationProps) => {
    const [verificationCode, setVerificationCode] = useState('');
    const [loading,setLoading] = useState(false);

    const handleVerification = () => {
        setLoading(true);
        const verificationInfos = {
            id:props.id,
            code:verificationCode,
        }
        axios.put(`http://localhost:8080/api/verification`, verificationInfos)
            .then((response) => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <div>
            <TextField
                id="standard-login-input"
                label="Code de vérification"
                autoComplete="current-login"
                variant="standard"
                onChange={(e) => {
                    setVerificationCode(e.target.value)
                }}
            />
            <LoadingButton
                onClick={handleVerification}
                loading={loading}
                loadingIndicator={<CircularProgress size={20} />}
            >
                {loading ? LABELS.LOADING : LABELS.VERIFICATION}
            </LoadingButton>
        </div>
    );
};

export default VerificationComponent;
