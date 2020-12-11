import { useHistory } from 'react-router-dom';
import './App.css';

const Header = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/home`);
        window.location.reload();
    };

    return (
        <div className='row'>
            <div className='row'>
                <button onClick={handleClick} type="button" className="jugada margin-options alineacion">
                    <img src="/image.png" className="sacar-borde" />
                </button>
            </div>
        </div>

    );
}

export default Header;

