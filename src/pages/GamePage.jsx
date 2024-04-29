import { useState,useEffect } from "react"
import { motion } from "framer-motion"
import Header from "../components/Header"
import Card from "../components/Card"
import '../styles/GamePage.css'


function GamePage({
    goBackToStartPage,
    playClick,
    score,
    bestScore,
    setScore,
    setBestScore,
    getCharactersToPlayWith,
    setCharactersToPlayWith,
    setCharactersToDisplay,
    charactersToPlayWith ,
    charactersToDisplay,
    stateRoundResult
}){

    const [isFlipped, setIsFlipped] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [result,setResult ] = useState('');
    useEffect(()=> {
        getCharactersToPlayWith();

        return ()=> {
               setCharactersToPlayWith([]);
               setScore(0);
               setBestScore(0);
               charactersToPlayWith.forEach(character => {
                   character.clicked = false;
               })
        }
    
    },[])

    const handleCardClick = (character)=> {
        setIsClicked(true);
        console.log(character.name);
        if(isClicked) return;
        
    }


    return (
        <>
        
        <Header
           goBackToStartPage = {goBackToStartPage}
           playClick = {playClick}
           score = {score}
           bestScore ={bestScore}
        />
         <motion.div 
            className='playGround'
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 0.5}}>
             <div className="card-section">
                 {
                    charactersToDisplay.map(character => {
                        return (
                            <Card
                                key={character.id}
                                character={character}
                                isFlipped={isFlipped}
                                handleCardClick={handleCardClick}
                            />
                        )
                    })
                 }
             </div>

        </motion.div>
        </>
    )
}

export default GamePage