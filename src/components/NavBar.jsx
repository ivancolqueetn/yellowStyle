import { useContext } from "react"
import { TextContext } from "../context/TextContext"
import { HeaderLink } from "./HeaderLink"
import { Button } from "./Button"

export function NavBar() {
    const { header } = useContext(TextContext)
    const {links }= header
    return (
        <header className="flex justify-between items-center w-full h-11 border border-solid border-pri ">
            <img src="mainLogo.svg" alt="" />
            <ul className="flex">
                {
                    links.map((link) => {
                        return(
                            <HeaderLink link={link} key={link}/>    
                        )
                    })
                }
            </ul> 
            <Button/>   
        </header>
    )
}