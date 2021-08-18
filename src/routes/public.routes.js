import { Redirect, Switch } from "react-router-dom"
import EditEmployee from "../views/EditEmployee/EditEmployee"
import Home from "../views/Home/Home"
import RegisterEmployee from "../views/RegisterEmployee/RegisterEmployee"
import { PublicRoute } from "./helperRoutes"

/**
 * Return Public Routes
 * @param {}
 * @returns 
 */
const PublicRoutes = () => {
    return (
        <Switch>
            <PublicRoute exact path="/" component={Home} />
            <PublicRoute exact path="/registrar" component={RegisterEmployee} />
            <PublicRoute exact path="/editar/:id" component={EditEmployee} />
            <Redirect path="/**" to="/" />
        </Switch>
    )
}

export default PublicRoutes