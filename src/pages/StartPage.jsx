import { motion } from "framer-motion"
import logo from '../assets/img/logo.png'
import '../styles/StartPage.css'

function StartPage({setDifficultyLevel, playClick}){
    const variants = {
        hidden: {scale: 0},
        visible: {
            scale: 1, 
            transition: {duration: 0.5}
        }
    }
    return (
       <>
        <div className="start-page">
                <motion.img 
                    src={logo} alt="Logo"
                    className='logo'

                    variants={variants}
                    initial='hidden'
                    animate='visible'/>

                <motion.h1
                    variants={variants}
                    initial='hidden'
                    animate='visible'>
                        Memory Game
                </motion.h1>
                   
                <motion.div 
                    className="difficulty-levels"
                    variants={variants}
                    initial='hidden'
                    animate='visible'>
                    <button onClick={()=>{
                         // The first number indicates the amount of characters
                        //the user is going to interact with during the whole game.
                        // The second number indicates the amount of
                        //characters the user will see on the playground.
                        // The same happens in other buttons.
                        setDifficultyLevel([5,3]);
                        playClick();
                    }}>
                      Easy
                   </button>
                   <button onClick={()=>{
                        setDifficultyLevel([10,4]);
                        playClick();
                    }}>
                      Medium
                   </button>
                   <button onClick={()=>{
                        setDifficultyLevel([16,5]);
                        playClick();
                    }}>
                      Hard
                   </button>
                </motion.div>

        </div>

       </>
    )
}

export default StartPage