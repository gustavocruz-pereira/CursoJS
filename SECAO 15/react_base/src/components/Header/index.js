import React from "react";
import Nav from './styled'
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function Header() {
    const botaoClicado = useSelector

    return (
        <Nav>
            <Link to="/"><FaHome size={24} /></Link>
            <Link to="login"><FaSignInAlt size={24} /></Link>
            <Link to="asasasd"><FaUserAlt size={24} /></Link>
        </Nav>
    )
}
