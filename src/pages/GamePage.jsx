import { useState,useEffect } from "react"
import Header from "../components/Header"
import Card from "../components/Card"
import '../styles/GamePage.css'


function GamePage({
    goBackToStartPage,
    playClick,
    score,
    bestScore,
    charactersToDisplay
}){


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