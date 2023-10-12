import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";




export default function AuthLayout() {

    return (
        <>
            <Navbar />
            
            <div className="auth-wrapper" style={{backgroundColor:'white'}}>
                <div className="container">
                    <div className="row">
                        
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    )
}


