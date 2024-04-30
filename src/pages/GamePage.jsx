import { useState,useEffect } from "react"
import { motion } from "framer-motion"
import Header from "../components/Header"
import Card from "../components/Card"
import '../styles/GamePage.css'


function GamePage({
    goBackToStartPage,
    playClick,
    playFlip,
    countScore,
    score,
    bestScore,
    setScore,
    setBestScore,
    getCharactersToPlayWith,
    setCharactersToPlayWith,
    setCharactersToDisplay,
    charactersToPlayWith ,
    charactersToDisplay,
    stateRoundResult,
    shuffle
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
         // Prevents user from multiple clicks while card is flipping
        //after timeout below isClicked is false again and user can click
        //on the card
        setIsClicked(true);
        if(isClicked) return;

        let turnResult = stateRoundResult(character);
        // Prevents all actions from happening if user wins or looses
        if(turnResult !== ''){
            if(turnResult === 'win'){
                countScore();
                setIsClicked(false);
                return;
            }
        }
        countScore();

        setIsFlipped(true);
        playFlip();
        setTimeout(()=>{
            shuffle(charactersToPlayWith);
        },800)

        setTimeout(()=>{
            setIsFlipped(false);
            setIsClicked(false);
            playFlip();
            turnResult = '';
        },1300)
        
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