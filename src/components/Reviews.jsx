import { useContext } from "react"
import { TextContext } from "../context/TextContext"

export function Reviews() {
    const { reviews } = useContext(TextContext)
    const { title, cards, logo, enterprise } = reviews
    return (
        <section className=" my-8 flex flex-col gap-8 justify-center items-center">
            <h1 className="text-xl font-bold">{title}</h1>
            <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
                {
                    cards.map(card =>
                        <article className="text-start bg-white text-dark flex gap-8 flex-col justify-center items-center p-4" key={card.id}>
                            <h1 className="text-2xl font-bold">{card.title}</h1>
                            <p>{card.desc}</p>
                            <div className="self-start flex">
                                <img className="h-[50px] w-[50px] rounded-3xl " src={card.userImg} alt="" />
                                <div>
                                    <h3 className="font-bold">{card.userName}</h3>
                                    <h4 className="font-light">{card.userJob}</h4>
                                </div>
                            </div>
                            <div className="whitespace-nowrap">
                                <img  className="inline-block" src={logo} alt="" />
                                <h4 className="inline-block ml-2" >{enterprise}</h4>
                            </div>
                        </article>
                    )
                }
            </div>
        </section>
    )
}