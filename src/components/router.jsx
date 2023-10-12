import { Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import CreateProfile from '../pages/createProfile'
import Home from '../pages/Home'
import Login from '../pages/login'
import Register from '../pages/register'
import AddProduct from '../pages/seller/addProduct'
import Dashboard from '../pages/seller/Dashboard'
import Products from '../pages/seller/products'
import Susan from '../pages/Susan'
import AuthLayout from './authLayout'
import SellerLayout from './sellerLayout'



export default function Router() {


    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Ask_Susan" element={<Susan />} />
                <Route path="/About_us" element={<About />} />

                <Route path='/authenticate' element={<AuthLayout />} >
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='create-profile' element={<CreateProfile />} />
                </Route>

                <Route path='/seller' element={<SellerLayout />} >
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='add-product' element={<AddProduct />} />
                    <Route path='products' element={<Products />} />
                </Route>
            </Routes>
        </>
    )
}