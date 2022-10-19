import React from 'react';

import { Container } from './styles/GlobalStyles';
import { Paragrafo, Title } from './pages/Login/styled';


export default function Login() {
    return (
        <Container>
            <Title>
                Login
            </Title>
            <Paragrafo>Lorem</Paragrafo>
            <button type='button'>Enviar</button>
        </Container>
    )
}
