
import './App.css'
import { NavBar } from './components/NavBar'
import { TextProvider } from './context/TextProvider'
import { PagesProvider } from './routes/PagesProvider'

function App() {


  return (
    <>
      <TextProvider>
        <NavBar/>
        <PagesProvider />
      </TextProvider>
    </>
  )
}

export default App
