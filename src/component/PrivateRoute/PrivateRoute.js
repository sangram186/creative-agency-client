import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useContent } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const [loginInfo, setLoginInfo] = useContext(useContent);

    const infoFromSession = sessionStorage.getItem('userInfo');

    const isLoggedIn = () => {
        // const userInfoFromSession =(infoFromSession, JSON.parse(infoFromSession));
        // if(!userInfoFromSession.email) {
        //     return false;
        // }
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
            (loginInfo.email || infoFromSession) ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;