import React, { useState } from "react";
import axios from 'axios';



export default function AddProduct () {

    const [pTitle, setPTitle] = useState('');
    const [pDesc, setProductDesc] = useState('');
    const [pCategory, setPCategory] = useState('');
    const [pQuantity, setQuantity] = useState('');
    const [pPrice , setPPrice] = useState('');
    const [message, setMessage] = useState('');


    const SubmitHandler =  (event) => {

        if (pTitle === '' || pDesc === '' || pCategory === '' || pQuantity === '' || pPrice === '' ) {
            setMessage("Please fill in all the fields");
        } else {

        setMessage('')
        let formfield = new FormData()

        formfield.append('title', pTitle)
        formfield.append('category', pCategory)
        formfield.append('quantity', pQuantity)
        formfield.append('price', pPrice)
        formfield.append('desc', pDesc)

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/create-product/',
            data : formfield
        }).then(response => {
            if (response.data.message === 'success') {

                console.log(response.data);
                setPCategory('')
                setPPrice('')
                setPTitle('')
                setProductDesc('')
                pQuantity('')
                setMessage('<span style={{color:"green"}}>Successfully added new product</span>');
            
            }
        }).catch(err => {
            setMessage("An error occured on the server while adding your ")
        })
    
    }
    }



    return (
        <>
            <h1 className="heading">Add a Product</h1> 
            
            <div className="add-products-wrapper">
                <form className="product-form">
                    <div className="d">
                        <span style={{color:'red', fontWeight:'700', fontFamily:'sans-serif', letterSpacing:'2px'}} className="message">
                            {message}
                        </span>
                    </div>

                    <div className="d">
                        <label htmlFor="">Product Title* </label>
                        <input type="text" value={pTitle} onChange={e => setPTitle(e.target.value)} />
                    </div>

                    <div className="d">
                        <label htmlFor="">Product Category* </label>
                        <input type="text" value={pCategory} onChange={e => setPCategory(e.target.value)} />
                    </div>
                    <div className="d">
                        <label htmlFor="">Product Price* (per item) </label>
                        <input type="number" value={pPrice} onChange={e => setPPrice(e.target.value)} />
                    </div>
                    <div className="d">
                        <label htmlFor="">Quantity Available*</label>
                        <input type="number" value={pQuantity} onChange={e => setQuantity(e.target.value)} />
                    </div>
                    <div className="d">
                        <label htmlFor="">Product Description... (optional)</label>
                        <textarea  id="" value={pDesc} onChange={e => setProductDesc(e.target.value)} cols="30" rows="10"></textarea>
                    </div>
                </form>

                <div className="btns">
                    <button onClick={SubmitHandler} type="submit" className="save">
                        Save
                    </button>
                    <button className="add-another">
                        Save and add another
                    </button>
                    <button className="cancel-btn">
                        Cancel
                    </button>
                </div>
            </div>
        </>
    )
}


