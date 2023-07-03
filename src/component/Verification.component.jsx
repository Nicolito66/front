import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
    Typography,
    TextField,
    Button,
    Container,
    Paper,
} from '@mui/material';
import axios from "axios";

const RootContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
});

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    maxWidth: 400,
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
}));

const Title = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

const FormContainer = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
});

const StyledTextField = styled(TextField)({
    backgroundColor: '#fff',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#fff',
        },
        '&:hover fieldset': {
            borderColor: '#fff',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#fff',
        },
    },
});

const StyledButton = styled(Button)({
    backgroundColor: '#fff',
    color: '#333',
});

const VerificationComponent = () => {
    const [verificationCode, setVerificationCode] = useState('');

    const handleVerification = (e) => {
        axios.put(`http://localhost:8080/api/verification`, verificationCode)
            .then((response) => {
                console.log(response.data);
            });
    };

    return (
        <RootContainer>
            <Container>
                <StyledPaper elevation={3}>
                    <Title variant="h5">
                        Vérification du code envoyé par e-mail
                    </Title>

                    <FormContainer onSubmit={handleVerification}>
                        <StyledTextField
                            type="text"
                            id="verificationCode"
                            label="Code de vérification"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            required
                            variant="outlined"
                        />

                        <StyledButton type="submit" variant="contained">
                            Vérifier
                        </StyledButton>
                    </FormContainer>
                </StyledPaper>
            </Container>
        </RootContainer>
    );
};

export default VerificationComponent;
