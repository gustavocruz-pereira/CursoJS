import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types'


export default function MyRoute({ component: Component, isClosed, ...rest }) {
    const isLoggedIn = false

    if (isClosed && !isLoggedIn) {
        return (
            <Redirect
                to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
            />
        )


    }

    // eslint disabled
    return <Route {...rest} component={Component} />
}

MyRoute.defaultProps = {
    isClosed: false,
}

MyRoute.prototypes = {
    component: PropTypes.oneOfType([PropTypes, PropTypes.func]).isRequired,
    isClosed: PropTypes.bool,
}
