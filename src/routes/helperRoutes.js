import { Redirect, Route } from "react-router-dom";

// TODO: Update when authentication service is available
/**
 * Create a private Routes
 * @param {component, options} param
 * @returns 
 */
export const PrivateRoute = ({component, ...options}) => {
    const isAuth = true;
    if (!isAuth) return <Route {...options} component={component}/>
    return <Redirect to="/login"/>
}

/**
 * Create a public Routes
 * @param {component, options} param
 * @returns 
 */
export const PublicRoute = ({component, ...options}) => {
    const isAuth = false;
    if (!isAuth) return <Route {...options} component={component}/>
    return <Redirect to="/"/>
}