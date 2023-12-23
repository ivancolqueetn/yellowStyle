import { useContext } from "react"
import { TextContext } from "../context/TextContext"
import { WorkCard } from "../components/WorkCard"
import { Button } from "../components/Button"

export function Works() {
    const {work} = useContext(TextContext)
    const {works,title,subtitle,workButton} = work 
    
    return (
        <section className="py-8 max-w-4xl m-auto flex flex-col justify-center items-center">
            <h1 className="w-full text-center text-1xl">{title}</h1>
            <p className="w-full text-center text-md">{subtitle}</p>
            <div className="w-full grid place-items-center grid-cols-[repeat(auto-fit,minmax(250px,1fr))] p-5 gap-8">
                {
                    works.map((work) => {
                        return(
                            <WorkCard work={work} key={work.id}/>
                        )
                    })
                }
            </div>
            <Button>{workButton}</Button>
        </section>
    )
}