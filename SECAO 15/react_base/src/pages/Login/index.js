import React from "react";
import { useDispatch } from 'react-redux'


import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from './styled'
import * as exampleActions from '../../store/modules/example'




export default function Login() {

    const dispatch = useDispatch()

    function handleClick(e) {
        e.preventDefault();

        dispatch(exampleActions.clicaBotaoRequest());
    }
    return (
        <Container>
            <h1>Login</h1>
            <button type="button" onClick={handleClick}>Enviar</button>
        </Container>
    );
}
