import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import google from '../../images/icons/google.png';
import { useContent } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const [loginInfo, setLoginInfo] = useContext(useContent);

    const handleLogin = e => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                const { email, displayName, photoURL } = result.user;
                const updateLoginInfo = { ...loginInfo };
                updateLoginInfo.email = email;
                updateLoginInfo.name = displayName;
                updateLoginInfo.photo = photoURL;
                sessionStorage.setItem('userInfo', JSON.stringify(updateLoginInfo));
                setLoginInfo(updateLoginInfo);
                history.replace(from);
            }).catch(function (error) {
                var errorMessage = error.message;
                const updateLoginInfo = { ...loginInfo };
                updateLoginInfo.error = errorMessage;
                console.log(errorMessage);
            });
    }

    



    return (
        <div className="login w-25 m-auto">
            <Link to='/'>
                <img style={{ margin: '30px auto', display: 'flex' }} className='w-50' src={logo} alt="" />
            </Link>
            <div className='border p-5 text-center '>
                <h2 className="mb-4">Login With</h2>
                <div className="login-with">
                    <button onClick={handleLogin} className="mb-4 btn btn-default border rounded"><img style={{ width: '30px' }} src={google} alt="" /> Continue with google</button>
                    <p>Did you have an account? <Link to='/login'>Create an account</Link></p>
                </div>
                {loginInfo.error && <p style={{ color: 'red' }}>{loginInfo.error}</p>}
            </div>
        </div>
    );
};

export default Login;