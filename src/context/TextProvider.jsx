
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

        home:{
            title:['WE ARE','CREATIVE','AGENCIES','ABOUT THE BOLTZSHIFT AGENCY','GET AQUANTED WITH OUR KEY FATCS' ],
            subtitle:['Award-winning studio Based in San Francisco','Boltzshift Studio is a design & develop agency of the future with 120+ successful projects in their portfolio.olt','SDF Boltzshift is a distinguished design and development agency based in the United Kingdom, known for our commitment to crafting exceptional digital experiences.','Since  2018 Boltzshift has been reshaping the web & mobile apps with top-notch design and the power of no code.',"Trusted Users","Project Completed","Clients Satisfaction"],
            imgTitle:["https://time.com/personal-finance/static/84016af8afe9681354d097200e07945e/57e17/history-of-credit-cards.jpg","https://www.shutterstock.com/image-vector/play-button-icon-red-simple-260nw-2083646875.jpg","https://www.lacamaradesanmartin.com.ar/wp-content/uploads/2021/04/Escuela-de-Negocios-idc-1.jpg"],
            icon:'arrow.svg',
            homeButton:'Book a demo'     
        }


        marquee:[
            {icon:'phone.svg', text:'Entel'},
            {icon:'phone.svg', text:'Cemento Viacha'},
            {icon:'phone.svg', text:'Tigo'},
            {icon:'phone.svg', text:'Axes'},
            {icon:'phone.svg', text:'Pil'},
        ],
        process:{
            title:'OUR PROCESS',
            cards:[
                {
                    id:1,
                    number:'01',
                    title:'Research & Plan',
                    desc:'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.'
                },
                {
                    id:2,
                    number:'02',
                    title:'Research & Plan',
                    desc:'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.'
                },
                {
                    id:3,
                    number:'03',
                    title:'Research & Plan',
                    desc:'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.'
                },
                {
                    id:4,
                    number:'04',
                    title:'Research & Plan',
                    desc:'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.'
                }
            ]
        },
        plans:{
            title:'CHOOSE YOUR PLAN',
            subtitle:'Consign offers a number of pricing plans to help you find one the your business needs best.',
            checkIcon:'check.svg',
            cards:[
                {
                    id:1,
                    title:'PRO',
                    price:249,
                    buttonLegend:'Get Start',
                    details:[
                        {id:1,legend:'Daily updates1'},
                        {id:2,legend:'Daily updates2'},
                        {id:3,legend:'Daily updates3'},
                        {id:4,legend:'Daily updates4'},
                        {id:5,legend:'Daily updates5'},
                        {id:6,legend:'Daily updates6'}
                    ]
                },
                {
                    id:2,
                    title:'PRO',
                    price:349,
                    buttonLegend:'Get Start',
                    details:[
                        {id:1,legend:'Daily updates1'},
                        {id:2,legend:'Daily updates2'},
                        {id:3,legend:'Daily updates3'},
                        {id:4,legend:'Daily updates4'},
                        {id:5,legend:'Daily updates5'},
                        {id:6,legend:'Daily updates6'}
                    ]
                },
                {
                    id:3,
                    title:'PRO',
                    price:549,
                    buttonLegend:'Get Start',
                    details:[
                        {id:1,legend:'Daily updates1'},
                        {id:2,legend:'Daily updates2'},
                        {id:3,legend:'Daily updates3'},
                        {id:4,legend:'Daily updates4'},
                        {id:5,legend:'Daily updates5'},
                        {id:6,legend:'Daily updates6'}
                    ]
                }
            ]
        },
        reviews:{
            title:'TESTIMONIALS',
            logo:'pacman.svg',
            enterprise:'Converkit',
            cards:[
                {
                    id:1,
                    title:'I’m looking forward to work with them again.',
                    desc:'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.',
                    userName:'Dora Exploradora',
                    userImg:'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=110',
                    userJob:'Ceo & Founder Conpany',
                },
                {
                    id:2,
                    title:'I’m looking forward to work with them again.',
                    desc:'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.',
                    userName:'Dora Exploradora',
                    userImg:'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=110',
                    userJob:'Ceo & Founder Conpany',
                }
            ]
        },
        banner:{
            title:'Innovative web & mobile Product Solutions',
            desc:'Join today and experience the difference, Don’t miss out the opportunity to transform your business. Let’s grow together',
            buttonLegend:'Get a free quotation',
            details:[
                {
                    id:1,
                    icon:'check.svg',
                    legend:'Afordable plans for All'
                },
                {
                    id:2,
                    icon:'check.svg',
                    legend:'Secure and reliable'
                }
            ]
        },
        homeMarquee:[
            {id:1, number:'01',legend:'Developing'},
            {id:2, number:'02',legend:'Design'},
            {id:3, number:'03',legend:'UX'},
            {id:4, number:'04',legend:'Strategy'},
            {id:5, number:'05',legend:'Consulting'},
            {id:6, number:'06',legend:'Copiwriting'},
        ]

    }
    return (
        <TextContext.Provider value={value}>{children}</TextContext.Provider>
    )
}