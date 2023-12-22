import { useNavigate} from 'react-router-dom'


export function HeaderLink({link}) {
    const navigate = useNavigate();
    function handleNavigate(path) {
        navigate(path)  
    }
    return (
        <li onClick={()=>handleNavigate(link.path)} className=" flex items-center px-1  bg-white text-dark text-md  px-3.5 py-auto h-11 hover:bg-pri cursor-pointer">{link.name}</li>
    )
}