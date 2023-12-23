import { useContext } from "react"
import { TextContext } from "../context/TextContext"

export function Footer() {
    const { footer } = useContext(TextContext)
    const { copyright, dir, icons, info, links ,iconsLegend} = footer

    return (
        <footer className="flex flex-col justify-center align-center bg-pri text-dark font-bold leading-6">
            <div className="w-full flex flex-wrap gap-8 text-start p-8 justify-evenly align-center">
                <div className="flex flex-col gap-[65px] min-w-[200px]">
                    <img src="logoDark.png" alt="" />
                    <div className="flex">
                        <h3>{iconsLegend}</h3>
                        {
                            icons.map((el)=>
                                <img key={el} src={el}></img>
                            )
                        }
                    </div>
                </div>
                <div className="min-w-[180px]">
                    {
                        links.map((link) =>
                            <h3 key={link.name}>{link.name}</h3>
                        )
                    }
                </div>
                <div className="min-w-[180px]">
                    {
                        info.map((el) =>
                            <h3 key={el}>{el}</h3>
                        )
                    }
                </div>
                <div className="min-w-[180px]">
                    {
                        dir.map((el) =>
                            <h3 key={el}>{el}</h3>
                        )
                    }
                </div>
            </div>
            <p className="pb-4">{copyright}</p>
        </footer>
    )
}