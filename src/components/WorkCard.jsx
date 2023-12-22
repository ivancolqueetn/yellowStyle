export function WorkCard({work}) {

    return (
        <article className="flex flex-col w-full max-h-[70vh]">
            <img  className="object-cover h-1/2" src={work.img} alt="" />
            <h1 className="text-lg text-start" >{work.title}</h1>
            <p className="text-md text-start" >{work.desc}</p>
        </article>
    )
}