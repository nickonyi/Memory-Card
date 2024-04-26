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
  const [charactersToPlayWith,setCharactersToPlayWith] = useState([]);
  const [charactersToDisplay,setCharactersToDisplay] = useState([]);
  const [score,setScore] = useState(0);
  const [bestScore,setBestScore] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setIsLoading(true);
    },3700)
  },[]);

  console.log(difficultyLevel);

  const playClick = ()=> {
     if(isSoundPlaying){
       const audio = new Audio(clickSound);
       audio.volume = 0.07;
       audio.play();
     }
  }

  const goBackToStartPage = ()=> {
    setDifficultyLevel([]);
    charactersToPlayWith.forEach(character => {
      character.click = false;
    })
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
          />:<GamePage
             goBackToStartPage = {goBackToStartPage}
             playClick={playClick}
             score = {score}
             bestScore = {bestScore}
          
           />
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
