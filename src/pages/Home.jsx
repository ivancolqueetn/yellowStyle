import { useContext } from "react"

import { TextContext } from "../context/TextContext"
import { Button } from "../components/Button"

export function Home() {
    const {home} = useContext(TextContext)
    return (


    <>
        <section className="my-8 justify-center"> 
            <div className=" flex flex-col aling-center ">
                <div className="bg-radialHome h-screen flex flex-col justify-center items-center gap-16 lg:p-24 ">
                    <div className="gap-y-20 flex flex-row flex-wrap  items-center justify-center">
                        <h1 className=" mx-8 text-5xl sm:text-8xl lg:text-9xl lg:text-pri">{home.title[0]}</h1>
                        <img className="mx-8 h-12 w-[80px] lg:h-[100px]" src={home.imgTitle[0]} alt="" />
                        <h1 className="mx-8 text-5xl sm:text-8xl lg:text-9xl">{home.title[1]}</h1>
                        <h1 className="mx-8 text-5xl sm:text-8xl lg:text-9xl">{home.title[2]}</h1>
                        <img className="mx-8 h-12 w-[100px] lg:h-[100px]" src={home.imgTitle[1]} alt="" />
                        <div className="max-w-[300px]">
                            <h4 className="leading-10 mx-8 text-2xl">{home.subtitle[0]}</h4>
                        </div>
                    </div>

                    <div className="gap-8 flex flex-col items-center justify-center text-center ">
                        <h4 className="text-3xl w-9/12">{home.subtitle[1]}</h4>
                        {/* <Button>{home.homeButton}</Button>                */}
                        <button className="gap-2 px-8 py-4 flex p-2  bg-pri items-center">
                            <span className="text-dark text-xl">Book a demo</span><svg width="38" height="38" viewBox="0 0 38 38" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                            <circle fill="transparent" cx="19" cy="19" r="18" stroke="#07070A" strokeWidth="2" strokeLinejoin="round"/>
                            <path d="M13 25L25 13M25 13V25M25 13H13" stroke="#07070A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>


                <div className="flex flex-col">
                    <div className="flex">
                        <div className="flex flex-col ">
                            <h2>{home.title[3]}</h2>
                            <img src="" alt="" />
                        </div>
                        <div className="flex flex-col ">
                            <h4>{home.subtitle[2]}</h4>
                            <h4>{home.subtitle[3]}</h4>
                        </div>
                    </div>                   
                    <img src={home.imgTitle[2]} alt="" />
                    <div className="flex">
                        <div className="flex flex-col">
                            <h2>{home.title[4]}</h2>
                        </div>
                        <div className="flex ">
                            <div>
                                <div className="flex flex-row justify-center"><h3>8.2</h3><h3>K</h3></div>
                                <h4>{home.subtitle[4]}</h4>
                            </div>
                            <div>
                                 <div className="flex flex-row justify-center"><h3>120</h3><h3>+</h3></div>
                                <h4>{home.subtitle[5]}</h4>
                            </div>
                            <div>
                                <div className="flex flex-row justify-center"><h3>97</h3><h3>%</h3></div>
                                <h4>{home.subtitle[6]}</h4>
                            </div>
                        </div>                            
                    </div>
                </div>
            </div>
        </section>
        </>
       

    )
}