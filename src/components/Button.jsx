import { useContext } from "react"
import { TextContext } from "../context/TextContext"

export function Button() {
    const {header} = useContext(TextContext)
    const {getInButton} = header
    console.log(getInButton);
    return (
        <button className="bg-pri text-sm text-dark px-6 py-2.5">{getInButton}</button>
    )
}