
import './App.css'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { TextProvider } from './context/TextProvider'
import { PagesProvider } from './routes/PagesProvider'

function App() {


  return (
    <>
      <TextProvider>
        <NavBar/>
        <PagesProvider />
        <Footer></Footer>
      </TextProvider>
    </>
  )
}

export default App
