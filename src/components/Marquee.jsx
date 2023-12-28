export function Marquee({children}) {
    return (
        <div className="w-full  py-4 whitespace-nowrap overflow-hidden">
            <div className="mx-0 animate-slider inline-block " >
                 {children}
            </div>
            <div className="mx-0 animate-slider inline-block " >
                 {children}
            </div>
        </div>
    )
}