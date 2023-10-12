import React from "react";



export default function Dashboard () {


    return (
        <>
                <h1 className="heading">SELLER DASHBOARD</h1> 
            <div className="dashboard-home">
                <div className="left" style={{marginTop:'10vh'}}>

                    <h3 className="s-text">Here you can manage your whole seller's shop, your products</h3>

                    <h2 style={{marginTop:'2rem', fontSize:'24px', fontWeight:'700'}}>Your Products</h2>
                    <div className="products">

                    </div>
                </div>
                <div className="right" >
                    <div className="tips">
                        <h2 style={{ fontSize:'18px', color:'gray', fontWeight:'600'}}>Quick Tips</h2>
                    
                        <ul style={{listStyle:'none', marginTop:'1rem'}}>
                            <li style={{listStyle:"inside"}}>Here you will see some tips according </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}



