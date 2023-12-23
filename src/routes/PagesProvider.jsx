import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Works } from "../pages/Works";
import { Contact } from "../pages/Contact";
import { About } from "../pages/About";

export function PagesProvider() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/works" element={<Works/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    )
}