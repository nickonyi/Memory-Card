import loading from '../assets/img/Ghazan.gif'
import '../styles/LoadingPage.css';

function LoadingPage(){
return (
    <div className='loading-page'>
        <img src={loading} alt="ghazan bending" />
        <p>Loading...</p>
    </div>
)
}

export default LoadingPage;