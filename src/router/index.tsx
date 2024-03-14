import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/home"
import { Details } from "../pages/details"
import { Login } from "../pages/login"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product/:id/:name" element={<Details/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}