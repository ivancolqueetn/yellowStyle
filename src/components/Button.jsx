
export function Button({children,...props}) {
    return (
        <button className=" max-w-32 bg-pri text-sm text-dark px-6 py-2.5" {...props}>{children}</button>
    )
}