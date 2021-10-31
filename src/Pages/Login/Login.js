import React from 'react';
import { ButtonGroup,Button } from 'react-bootstrap';
import { useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle,setUser}=useAuth();
    const history=useHistory();
    const location=useLocation();
    const url=location.state?.from || "/home"
    const signIn=()=>{
        signInUsingGoogle().then(result => {
            setUser(result.user);
            history.push(url)
            console.log(result.user);
        }).catch(err=>console.log(err))
    }
    return (
        <div className="border p-5 m-5 border-danger">
        <h2 className="text-danger pb-4">Please Login First!</h2>
            <Button onClick={signIn} variant="outline-primary">Sign in with google</Button>
        </div>
    );
};

export default Login;