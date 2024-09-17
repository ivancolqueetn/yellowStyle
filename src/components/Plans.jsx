import { useContext } from "react"
import { TextContext } from "../context/TextContext"

import { Details } from "./Details"

export function Plans() {
    const {plans}=useContext(TextContext)
    const{title,subtitle,cards,checkIcon} = plans

    return (
        <section className="">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className=" flex flex-col gap-4 sm:grid sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                {
                    cards.map(card=>
                        <article className={`p-8 flex flex-col gap-4 justify-center items-start ${card.id%2===0 ? 'bg-pri': 'bg-white'} text-dark`} key={card.id}>
                            <h3 className="text-xl font-bold">{card.title}</h3>
                            <h1 className="text-7xl font-bold">${card.price}</h1>
                            <button className={`w-full py-4 ${ card.id % 2 === 0 ? 'text-white bg-dark':'bg-pri text-dark'}`}>{card.buttonLegend}</button>
                            <Details details={card.details} checkIcon={checkIcon}/>
                        </article>
                    )
                }
            </div>
        </section>
    )
}