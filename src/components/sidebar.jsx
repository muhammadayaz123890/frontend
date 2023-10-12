import React from "react";
import { Link } from "react-router-dom";



export default function Sidebar () {


    return (
        <>
            <div className="sidebar">
                <div className="logo">
                    <h2>BODYDATE.AI</h2>
                </div>
                <hr />
                <ul className="navs mx-5">
                    <li><Link>Dashboard</Link></li>
                </ul>
                <hr />
                <label htmlFor="">Manage Products</label>
                <ul className="navs mx-5">
                    <li><Link to='/seller/products'>See Products</Link></li>
                    <li><Link to='/seller/add-product'>Add a Product</Link></li>
                </ul>
                <hr />
                <label htmlFor="">Manage Updates</label>
                <ul className="navs mx-5">
                    <li><Link to='/seller/add-product'>Notifications</Link></li>
                    <li><Link to='/seller/products'>Orders</Link></li>
                </ul>
                
            </div>
        </>
    )
}





