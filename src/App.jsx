import { useState,useEffect } from 'react'
import './styles/App.css'
import LoadingPage from './pages/LoadingPage';
import video from './assets/img/back_vid.mp4';


function App() {
  const [isLoading,setIsLoading] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setIsLoading(true);
    },13700)
  },[]);

  return (
    <>
    {
      !isLoading?<LoadingPage/>:(
        <div></div>
      )
    }

    <video autoPlay muted loop id='my-video'>
       <source src={video} type='video/mp4'/>
    </video>
    </>
  )
}

export default App
