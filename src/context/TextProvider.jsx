
import { TextContext } from "./TextContext";

export function TextProvider({children}) {
    const value={
        header:{
            links:[{name:'Home',path:'/'},{name:'About',path:'/'},{name:'Works',path:'/works'},{name:'Blog',path:'/'},{name:'Contact',path:'/'}],
            getInButton: 'Get in touch'
        },
        work:{
            title:'SELECTED WORK',
            subtitle:'Our excepcional design services',
            works:[
                {
                    id:1,
                    img:'https://images.unsplash.com/photo-1589254065909-b7086229d08c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400',
                    title:'Boston  RealEstate App',
                    desc:'Branding & UI'
                },
                {
                    id:2,
                    img:'https://images.unsplash.com/photo-1589254066213-a0c9dc853511?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400',
                    title:'Boston  RealEstate App',
                    desc:'Branding & UI'
                },
                {
                    id:3,
                    img:'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400',
                    title:'Boston  RealEstate App',
                    desc:'Branding & UI'
                },{
                    id:4,
                    img:'https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=400',
                    title:'Boston  RealEstate App',
                    desc:'Branding & UI'
                }
            ]
        }
    }
    return (
        <TextContext.Provider value={value}>{children}</TextContext.Provider>
    )
}