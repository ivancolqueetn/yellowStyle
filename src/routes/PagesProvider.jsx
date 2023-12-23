import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Works } from "../pages/Works";
import { Contact } from "../pages/Contact";

export function PagesProvider() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/works" element={<Works/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}