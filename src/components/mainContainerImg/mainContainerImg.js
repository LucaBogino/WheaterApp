import './mainContainerImg.css';
import cityImg from '../../assets/city.jpg';
import { useSelector } from "react-redux";

function MainContainer() {

    const cityInfo = useSelector(state => state.city);

    return (
        <div className='w relative'>
            <img className='br-25 shadow max_img' src={cityImg} />
              <div className='containerContent'>{cityInfo ? cityInfo : 'Milano'}</div>
        </div>
    )
}

export default MainContainer;