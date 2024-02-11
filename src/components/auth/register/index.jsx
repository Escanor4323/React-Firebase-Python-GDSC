import React, { useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { userLoggedIn } = useAuth();

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistering && password === confirmPassword) {
            setIsRegistering(true);
            try {
                await doCreateUserWithEmailAndPassword(email, password);
                navigate('/home');
            } catch (error) {
                setIsRegistering(false);
                setErrorMessage(error.message);
            }
        } else {
            setErrorMessage("Passwords don't match.");
        }
    };

    if (userLoggedIn) {
        return <Navigate to={'/home'} replace={true} />;
    }

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="card shadow" style={{ width: '400px' }}>
                <div className="card-body">
                    <h5 className="card-title text-center mb-4">Create a New Account</h5>
                    {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="emailInput" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="emailInput"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isRegistering}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="passwordInput" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="passwordInput"
                                autoComplete="new-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={isRegistering}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPasswordInput" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPasswordInput"
                                autoComplete="off"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                disabled={isRegistering}
                            />
                        </div>
                        <button type="submit" className={`btn ${isRegistering ? 'btn-secondary disabled' : 'btn-primary'} w-100`}>
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </form>
                    <div className="text-center mt-3">
                        Already have an account?{' '}
                        <Link to={'/login'} className="text-decoration-none">Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
