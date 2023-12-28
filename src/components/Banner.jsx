import { useContext } from "react"
import { TextContext } from "../context/TextContext"

export function Banner() {
    const {banner} = useContext(TextContext)
    const {title,desc,buttonLegend,details}= banner
    return (
        <section className="mt-8 flex gap-4 sm:gap-8 flex-col justify-center items-center p-8 bg-pri text-dark">
            <h1 className="text-3xl lg:text-6xl lg:px-24 sm:text-4xl font-bold p-4">{title}</h1>
            <p>{desc}</p>
            <button className="bg-dark text-white px-6 py-2 ">{buttonLegend}</button>
            <div className="whitespace-nowrap">
                {
                    details.map(item=>
                       <div className="inline-block mx-2" key={item.id}>
                        <img className="inline-block" src={item.icon} alt={item.legend} />
                        <h3 className="inline-block">{item.legend}</h3>
                       </div> 
                    )
                }
            </div>
        </section>
    )
}