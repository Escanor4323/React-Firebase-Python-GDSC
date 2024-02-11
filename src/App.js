// App.js
import React from 'react';
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header";
import Home from "./components/home";
import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
    const routesArray = [
        { path: "*", element: <Login /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/home", element: <Home /> },
    ];

    let routesElement = useRoutes(routesArray);

    return (
        <AuthProvider>
            <div className="container-fluid p-0">
                <Header />
                <main className="mt-4">
                    {routesElement}
                </main>
            </div>
        </AuthProvider>
    );
}

export default App;
