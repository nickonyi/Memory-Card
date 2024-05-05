import {motion,AnimatePresence  } from "framer-motion";
import { useState } from "react";
import Volume from "../assets/img/volume.svg?react";
import VolumeOff from "../assets/img/volume_off.svg?react";
import Music from "../assets/img/music_sign.svg?react";
import MusicOff from "../assets/img/music_off.svg?react";
import QuestionMark from "../assets/img/question_mark.svg?react";
import Cross from "../assets/img/cross.svg?react";
import '../styles/Footer.css';

function Footer({ isMusicPlaying, setIsMusicPlaying, isSoundPlaying, setIsSoundPlaying, playClick }) {
    const [isInfoNeeded, setIsInfoNeeded] = useState(false);

    return ( 
        <motion.footer
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.7}}>
        <div className="footer-container">
            <div className="sound-section">
                <button>
                    {isSoundPlaying ? <Volume className='svg' /> : <VolumeOff className='svg' />}
                </button>
                <button>
                    {isMusicPlaying ? <Music className='svg' /> : <MusicOff className='svg' />}
                </button>
                </div>
                <button>
                  {isInfoNeeded ? <Cross className='svg' /> : <QuestionMark className='svg' />}
                </button>
                </div>
        </motion.footer>        
        
    )
}

export default Footer;