import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";



export default function SellerLayout() {

    return (
        <>
            <div className="seller-dashboard">
                <Sidebar />
            
                <div className="main-content">
                    <Outlet />
                </div>
            </div>

        </>
    )
}



