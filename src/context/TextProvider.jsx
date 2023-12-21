
import { TextContext } from "./TextContext";

export function TextProvider({children}) {
    const value={
        header:{
            links:['Home','About','Works','Blog','Contact'],
            getInButton: 'Get in touch'
        }
    }
    return (
        <TextContext.Provider value={value}>{children}</TextContext.Provider>
    )
}