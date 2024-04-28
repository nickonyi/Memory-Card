import Tilt from 'react-parallax-tilt';

function Card ({
    character,
    isFlipped,
    handleCardClick
}){
    return (
        <div className={isFlipped? 'card flipped':'card'}>
             <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.6}
                    glareColor="#ffffff"
                    glarePosition="bottom"
                    glareBorderRadius="20px"
                    className='tilt'></Tilt>

        </div>
    )

}

export default Card