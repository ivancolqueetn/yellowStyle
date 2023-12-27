
import { TextContext } from "./TextContext";

export function TextProvider({children}) {
    const value={
        header:{
            links:[{name:'Home',path:'/'},{name:'About',path:'/about'},{name:'Works',path:'/works'},{name:'Blog',path:'/'},{name:'Contact',path:'/contact'}],
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
            ],
            workButton:'View More'
        },
        footer:{
            iconsLegend:'Follow us',
            icons:['face.svg','insta.svg','yt.svg','x.svg'],
            links:[{name:'Home',path:'/'},{name:'About',path:'/'},{name:'Works',path:'/works'},{name:'Blog',path:'/'},{name:'Contact',path:'/'}],
            info:['Integrations','Careers','Privacy Policy','Terms & Conditios','Cookie police'],
            dir:['+1 (0) 911 18 27 16 ','INFO@BOLTZSHIFT.COM','Based in San Francisco','United Kingdom'],
            copyright:'Copyright @2023 All Rights Reserved'
        },
        contact:{
            img:'https://images.unsplash.com/photo-1625217527288-93919c99650a?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=600',
            title:'CONTACT US',
            subtitle:'Consign offers a number of pricing plans to help you find one the your business needs best',
            form:[
                { type:'text',name:'name',text:'Name'},
                { type:'email',name:'email',text:'Email'},
                { type:'text',name:'phone',text:'Phone No'},
                { type:'text',name:'subject',text:'Subject'},
                { type:'text',name:'message',text:'what you need?'}
            ],
            txtButton: 'Send'
        },
        about:{
            title:'KNOW OUR SERVICES',
            subtitle:'Our exceptional desing services',
            cards:[
                {
                    id:1,
                    title:'Branding',
                    icon:'vite.svg',
                    desc:'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.'
                },
                {
                    id:2,
                    title:'Branding',
                    icon:'vite.svg',
                    desc:'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.'
                },
                {
                    id:3,
                    title:'Branding',
                    icon:'vite.svg',
                    desc:'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.'
                },
                {
                    id:4,
                    title:'Branding',
                    icon:'vite.svg',
                    desc:'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.'
                }

            ]
        },
        marquee:[
            {icon:'phone.svg', text:'Entel'},
            {icon:'phone.svg', text:'Cemento Viacha'},
            {icon:'phone.svg', text:'Tigo'},
            {icon:'phone.svg', text:'Axes'},
            {icon:'phone.svg', text:'Pil'},
        ]
    }
    return (
        <TextContext.Provider value={value}>{children}</TextContext.Provider>
    )
}