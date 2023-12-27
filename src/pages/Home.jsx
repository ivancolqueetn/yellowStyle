import { useContext } from "react";
import { Banner } from "../components/Banner";
import { Marquee } from "../components/Marquee";
import { Plans } from "../components/Plans";
import { Process } from "../components/Process";
import { Reviews } from "../components/Reviews";
import { TextContext } from "../context/TextContext";

export function Home() {
    const {homeMarquee} = useContext(TextContext)
    return (
        <>
        <h1 className="text-green-500 text-5xl">Home</h1>
        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus facilis eius iure quia quam amet delectus ducimus. Omnis fuga, blanditiis amet, vitae hic aut laborum neque ex aspernatur nemo quaerat.</h2>
        <p>push de datos desde mi rama </p>

        <Process/>
        <Plans/>
        <Reviews/>
        <Banner/>
        <Marquee>
            {
                homeMarquee.map(item=>
                    <h1 className="inline-block mx-20 text-xl font-bold" key={item.id}><span className="text-sm">{item.number}</span>{item.legend}</h1>
                )
            }
        </Marquee>
        </>
    )
}