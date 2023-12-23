export function AboutCard({ card }) {
    return (
        <article className="group min-w-[300px] relative flex flex-col bg-sec p-8 gap-8 hover:bg-pri hover:text-dark ">
            <img className="max-w-12" src="vite.svg" alt="" />
            <h2 className="text-start text-2xl font-bold">{card.title}</h2>
            <p className="text-start">{card.desc}</p>
            <svg className="group-hover:block hidden absolute top-8 right-8 " width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="19" r="18" fill="transparent" stroke="#07070A" strokeWidth="2" strokeLinejoin="round" />
                <path d="M13 25L25 13M25 13V25M25 13H13" stroke="#07070A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </article>
    )
}