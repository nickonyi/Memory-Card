import { useState,useEffect } from 'react'
import './styles/App.css'
import LoadingPage from './pages/LoadingPage';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import Footer from './components/Footer';
import video from './assets/img/back_vid.mp4';
import clickSound from './assets/sounds/click.wav';
import flipSound from './assets/sounds/flip.mp3';
import characters from './characters';


function App() {
  const [isLoading,setIsLoading] = useState(false);
  const [difficultyLevel,setDifficultyLevel] = useState([]);
  const [isSoundPlaying,setIsSoundPlaying] = useState(true);
  const [isMusicPlaying,setIsMusicPlaying] = useState(false);
  const [charactersToPlayWith,setCharactersToPlayWith] = useState([]);
  const [charactersToDisplay,setCharactersToDisplay] = useState([]);
  const [score,setScore] = useState(0);
  const [bestScore,setBestScore] = useState(0);

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

  const playFlip = ()=> {
      if(isSoundPlaying){
        const audio = new Audio(flipSound);
        audio.volume = 0.7;
        audio.play();
      }
  }

  const goBackToStartPage = ()=> {
    setDifficultyLevel([]);
    charactersToPlayWith.forEach(character => {
      character.click = false;
    })
  }

  const getCharactersToPlayWith = ()=>{
    const randomCharacters = [];

    while(randomCharacters.length < difficultyLevel[0]){
      const randomNum = Math.floor(Math.random() * characters.length);
      if(!randomCharacters.includes(characters[randomNum])){
         randomCharacters.push(characters[randomNum])
      }
    }
    setCharactersToPlayWith(randomCharacters);
    shuffle(randomCharacters);
  }

  const shuffle = (array)=> {
    let shuffledCharacters = [];
    let clicked = 0;

    while (shuffledCharacters.length <  difficultyLevel[1]) {
        const randomNum = Math.floor(Math.random() * array.length);
        const character = array[randomNum];

        if(!shuffledCharacters.includes(character) && (clicked < difficultyLevel[1] - 1 || !character.clicked)){
          shuffledCharacters.push(character);
          clicked += +character.clicked;
        }
    }
    setCharactersToDisplay(shuffledCharacters);
  }

  const stateRoundResult=(character)=>{
    if(character.clicked){
      return 'lose';
    }
    if(score === difficultyLevel[0] - 1){
      return 'win';
    } else {
      return ''
    }
  }
  const countScore = ()=> {
    setScore(score + 1);
    if(score >= bestScore){
      setBestScore(score + 1);
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
          />:<GamePage
             goBackToStartPage = {goBackToStartPage}
             playClick={playClick}
             playFlip={playFlip}
             countScore={countScore}
             score = {score}
             bestScore = {bestScore}
             setScore = {setScore}
             setBestScore = {setBestScore}
             getCharactersToPlayWith = {getCharactersToPlayWith}
             setCharactersToPlayWith={setCharactersToPlayWith}
             setCharactersToDisplay={setCharactersToDisplay}
             charactersToPlayWith = {charactersToPlayWith}
             charactersToDisplay={charactersToDisplay}
             stateRoundResult={stateRoundResult}
             shuffle = {shuffle}
           />
        }

        <Footer
          isMusicPlaying={isMusicPlaying}
          setIsMusicPlaying={setIsMusicPlaying}
          isSoundPlaying={isSoundPlaying}
          setIsSoundPlaying={setIsSoundPlaying}
          playClick={playClick}
        />
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
