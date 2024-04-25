import { useState,useEffect } from 'react'
import './styles/App.css'
import LoadingPage from './pages/LoadingPage';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import video from './assets/img/back_vid.mp4';
import clickSound from './assets/sounds/click.wav';


function App() {
  const [isLoading,setIsLoading] = useState(false);
  const [difficultyLevel,setDifficultyLevel] = useState([]);
  const [isSoundPlaying,setIsSoundPlaying] = useState(true);

  useEffect(()=>{
    setInterval(()=>{
      setIsLoading(true);
    },3700)
  },[]);

  const playClick = ()=> {
     if(isSoundPlaying){
       const audio = new Audio(clickSound);
       audio.volume = 0.07;
       audio.play();
     }
  }

  return (
    <>
    {
      !isLoading?<LoadingPage/>:(
        <>
        {
          !difficultyLevel[0]?
          <StartPage
           setDifficultyLevel={setDifficultyLevel}
           playClick={playClick}
          />:<GamePage/>
        }
        </>
      )
    }

    <video autoPlay muted loop id='my-video'>
       <source src={video} type='video/mp4'/>
    </video>
    </>
  )
}

export default App
