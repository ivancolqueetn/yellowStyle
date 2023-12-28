import { useContext } from "react"
import { TextContext } from "../context/TextContext"

export function Process() {
    const{process} = useContext(TextContext)
    const{title,cards} = process
    return (
        <section className="flex flex-col justfy-center items-center p-8 lg:px-[120px]">
            <h1 className="text-2xl font-bold mb-12 ">{title}</h1>
            {/* md:grid md:gap-8 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] */}
            <div className="flex flex-col gap-8 grid grid-col sm:grid sm:gap-8 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
                {
                    cards.map(card=>
                        <article className="bg-sec flex flex-col gap-8 p-8" key={card.id}>
                            <h1 className="text-start text-[90px] font-extrabold text-pri">{card.number}</h1>
                            <h2 className="text-start text-3xl font-bold">{card.title}</h2>
                            <p className="text-start">{card.desc}</p>
                        </article>    
                    )
                }
            </div>
        </section>
    )
}