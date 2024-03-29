import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "../pages/dashboard"
import { Details } from "../pages/details"
import { Cadastro } from "../pages/cadastro"
import { Home } from "../pages/home"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard/:idUser" element={<Dashboard/>}/>
                <Route path="/:user/:id/:name" element={<Details/>}/>
                <Route path="/login" element={<Cadastro/>}/>
            </Routes>
        </BrowserRouter>
    )
}