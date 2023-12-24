import { useContext, useState } from "react"
import { TextContext } from "../context/TextContext"
import { Button } from "../components/Button"

const INITIAL_FORM = {
    name:'',
    email:'',
    phone:'',
    subject:'',
    message:''
}

export function Contact() {
    const { contact } = useContext(TextContext)
    const [formData, setFormData] = useState(INITIAL_FORM)
    const { img, title, subtitle, form, txtButton } = contact
    function handleChange(e) {
        const {name,value } = e.target
        setFormData({ ...formData, [name]: value });
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData);
    }
    return (
        <section onSubmit={handleSubmit} className=" flex flex-col justify-center align-center gap-4 pt-4 py-8 px-6">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <div className=" flex flex-col gap-8 items-center sm:flex-row md:px-8">
                <form className="w-full sm:w-1/2  lg:grid lg:grid-cols-2 lg:gap-4" action="">
                    {
                        form.map(item =>
                            <div className={item.name === 'message' ? 'w-full  lg:col-span-2 mb-2' : 'w-full'} key={item.name}>
                                <label className="text-start" htmlFor={item.name}>{item.text}</label>
                                {item.name === 'message' ? 
                                    <textarea className="border-solid border-b-2 border-pri w-full" value={formData[item.name]} name={item.name} id={item.name} onChange={handleChange} cols="30" rows="10"></textarea> : 
                                    <input id={item.name} className=" w-full border-solid border-b-2 border-pri" name={item.name} type={item.type} value={formData[item.name]} onChange={handleChange} required/>}
                            </div>
                        )
                    }
                    <Button>{txtButton}</Button>
                </form>
                <img className="min-h-[480px] w-full h-full  sm:w-1/2  sm:h-full   object-content" src={img} alt="" />
            </div>
        </section>
    )
}