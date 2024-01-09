
import { useContext } from "react"
import { TextContext } from "../context/TextContext"
import { Banner } from "../components/Banner";
import { Marquee } from "../components/Marquee";
import { Plans } from "../components/Plans";
import { Process } from "../components/Process";
import { Reviews } from "../components/Reviews";


export function Home() {
    const {home,homeMarquee} = useContext(TextContext)
    return (
    <main className="px-2 sm:px-4  lg:px-[120px]">
        <section className="my-8 justify-center"> 
            <div className=" flex flex-col aling-center ">
                <div className="bg-radialHome h-screen flex flex-col justify-center items-center gap-16 lg:p-24 ">
                    <div className="gap-y-20 flex flex-row flex-wrap  items-center justify-center">
                        <h1 className=" mx-8 text-5xl sm:text-8xl lg:text-9xl ">{home.title[0]}</h1>
                        <img className="mx-8 h-12 w-[80px] lg:h-[100px]" src={home.imgTitle[0]} alt="" />
                        <h1 className="mx-8 text-5xl sm:text-8xl lg:text-7xl">{home.title[1]}</h1>
                        <h1 className="mx-8 text-5xl sm:text-8xl lg:text-7xl">{home.title[2]}</h1>
                        <img className="mx-8 h-12 w-[100px] lg:h-[100px]" src={home.imgTitle[1]} alt="" />
                        <div className="max-w-[300px]">
                            <h4 className="leading-10 mx-8 text-2xl">{home.subtitle[0]}</h4>
                        </div>
                    </div>

                    <div className="gap-8 flex flex-col items-center justify-center text-center ">
                        <h4 className="flex text-3xl w-9/12">{home.subtitle[1]}</h4>

                        <button className="gap-2 px-8 py-4 flex p-2  bg-pri items-center">
                            <span className="text-dark text-xl">Book a demo</span><svg width="38" height="38" viewBox="0 0 38 38" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                            <circle fill="transparent" cx="19" cy="19" r="18" stroke="#07070A" strokeWidth="2" strokeLinejoin="round"/>
                            <path d="M13 25L25 13M25 13V25M25 13H13" stroke="#07070A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>


                <div className="flex flex-col">
                <div className="flex flex-col  lg:flex-row lg:py-22">
                    <div className=" mt-32 lg:mt-0 flex flex-col  items-center lg:items-start sm:items-center  lg:h-[200px] w-full lg:w-3/6 p-4">
                        <h2 className=" leading-10 text-3xl text-center sm:text-5xl lg:text-7xl lg:text-left font-bold">{home.title[3]}</h2>
                        <img className="py-2 mt-14 bg-cover mx-8 h-15 w-[100px] lg:h-[150px]" src={home.icon[1]} alt="" />
                    </div>
                    <div className="flex flex-col items-center lg:items-start sm:items-center lg:h-32 w-full lg:w-3/6 p-4">
                        <h4 className=" sm:text-2xl lg:text-3xl w-9/12 text-2xl lg:text-left">{home.subtitle[2]}</h4>
                        <br />
                        <h4 className=" sm:text-2xl lg:text-3xl w-9/12 text-2xl lg:text-left">{home.subtitle[3]}</h4>
                    </div>
                    </div>                
                    <img className="flex py-40 bg-cover" src={home.imgTitle[2]} alt="" />

                    <div className="flex flex-col lg:flex-row lg:p-24 justify-center text-center">
                        <div className="lg:h-32 w-full lg:w-2/5 p-4 ">
                            <h2 className="leading-10 lg:text-start lg:text-6xl sm:text-4xl sm:text-center text-center text-4xl font-bold">{home.title[4]}</h2>
                        </div>
                        <div className="lg:h-32 w-full lg:w-3/5 p-4 lg:flex lg:place-content-around">
                            <div className="w-full mb-4">
                                <div className="flex flex-row justify-center"><h3 className="text-4xl sm:text-6xl lg:text-6xl font-bold">8.2</h3><h3 className="text-4xl sm:text-6xl lg:text-6xl text-pri font-bold">K</h3></div>
                                <h4 className="text-center text-1xl">{home.subtitle[4]}</h4>
                            </div>
                            <div className="w-full mb-4">
                                <div className="flex flex-row justify-center"><h3 className="text-4xl sm:text-6xl lg:text-6xl font-bold">120</h3><h3 className="text-4xl sm:text-6xl lg:text-6xl font-bold text-pri">+</h3></div>
                                <h4 className="text-center text-1xl">{home.subtitle[5]}</h4>
                            </div>
                            <div className="w-full">
                                <div className="flex flex-row justify-center"><h3 className="text-4xl sm:text-6xl lg:text-6xl font-bold">97</h3><h3 className="text-4xl sm:text-6xl lg:text-6xl font-bold text-pri">%</h3></div>
                                <h4 className="text-center text-1xl">{home.subtitle[6]}</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        
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
        </main>
    )
}