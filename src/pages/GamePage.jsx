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
    charactersToDisplay
}){
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

    console.log(charactersToDisplay);


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

             </div>

        </motion.div>
        </>
    )
}

export default GamePage