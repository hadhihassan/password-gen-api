import './App.css'
import DotPattern from './UI/bg'
import Genpassword from './UI/gen-passwords'
import Header from './UI/head'
import HistoryPassowrd from './UI/history-pass'
import { cn } from "@/lib/utils";


function App() {
  return (
    <>

      <DotPattern className={cn(
        "[mask-image:radial-gradient(300px_circle_at_left,white,transparent)]",
      )} />
      <Header />
      <div className='flex pt-20 items-center justify-around'>
        <Genpassword />
        <HistoryPassowrd />
      </div>
      <DotPattern className={cn(
        "[mask-image:radial-gradient(300px_circle_at_right,white,transparent)]",
      )} />
    </>
  )
}

export default App
