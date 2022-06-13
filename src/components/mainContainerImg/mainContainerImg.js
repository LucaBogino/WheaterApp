import './mainContainerImg.css';
import { useSelector } from "react-redux";

function MainContainer() {

    const cityInfo = useSelector(state => state.city);
    const cityWeather = useSelector(state => state.weather);
    const today = useSelector(state => state.today);

    return (
        <div className='container'>
            <div className='w relative bckMainContainer br-25 shadow'>
                <div className='containerContent'>
                    <div className='cityText'>{cityInfo ? cityInfo : 'Milano'}</div>
                    <div>{today}</div>
                    <div>{cityWeather?.weather[0].description.charAt(0).toUpperCase() + cityWeather?.weather[0].description.slice(1)}</div>
                </div>
            </div>
        </div>
    )
}

export default MainContainer;