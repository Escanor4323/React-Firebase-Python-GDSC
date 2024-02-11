import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { useAuth } from '../../../contexts/authContext';

const Login = () => {
    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
            } catch (error) {
                setIsSigningIn(false);
                setErrorMessage(error.message);
            }
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithGoogle();
            } catch (error) {
                setIsSigningIn(false);
                setErrorMessage(error.message);
            }
        }
    };

    if (userLoggedIn) {
        return <Navigate to={'/home'} replace={true} />;
    }

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="card w-100" style={{maxWidth: '400px'}}>
                <div className="card-body">
                    <h5 className="card-title text-center">Welcome Back!</h5>
                    {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="emailInput">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="emailInput"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group mb-3"> {/* Added mb-3 for spacing */}
                            <label htmlFor="passwordInput">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="passwordInput"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className={`btn btn-primary w-100 ${isSigningIn ? 'disabled' : ''}`}>{isSigningIn ? 'Signing In...' : 'Sign In'}</button>
                    </form>
                    <div className="text-center mt-3">
                        <span className="text-muted">Don't have an account? </span>
                        <Link to={'/register'}>Sign up</Link>
                    </div>
                    <hr />
                    <button
                        onClick={onGoogleSignIn}
                        disabled={isSigningIn}
                        className="btn btn-outline-secondary w-100 mt-3"> {/* Alternatively, mt-3 could be used here for spacing */}
                        {isSigningIn ? 'Signing In...' : 'Continue with Google'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
