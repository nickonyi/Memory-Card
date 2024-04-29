import Tilt from 'react-parallax-tilt';

function Card ({
    character,
    isFlipped,
    handleCardClick
}){
    return (
        <div className={isFlipped? 'card flipped':'card'}
        onClick={()=> handleCardClick(character)}
        >
             <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.6}
                    glareColor="#ffffff"
                    glarePosition="bottom"
                    glareBorderRadius="20px"
                    className='tilt'>
                  <div className="card-face">
                     <div className="character-holder" style={{backgroundImage: `url(${character.src})`}} />
                         <div className="name">{character.name}</div>
                  </div>
                  <div className="card-back"></div>
            </Tilt>

        </div>
    )

}

export default Card