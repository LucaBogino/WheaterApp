import './mainContainerImg.css';
import { useSelector } from "react-redux";
import add from '../../assets/add.png';
import saved from '../../assets/saved.png';
import store from '../stateManager/store';
import { saveCity, deleteCity } from "../stateManager/dispatchActions";
import {useState, useEffect} from 'react'

function MainContainer() {

    const cityInfo = useSelector(state => state.city);
    const cityWeather = useSelector(state => state.weather);
    const today = useSelector(state => state.today);
    const cities = useSelector(state => state.savedCities);

    const [img, setImg] = useState(false);

    useEffect(() => {
        if (cities) {
            let find = cities.find(city => city.name.toLowerCase() == cityInfo.toLowerCase());
            if (find !== undefined) {
                setImg(true);
            } else {
                setImg(false);
            }
        }
    }, [cityInfo]);

    const saveNewCity = () => {
        store.dispatch(saveCity()); 
        setImg(true);
    }

    const deleteLastCity = () => {
        store.dispatch(deleteCity());
        setImg(false);
    }

    return (
        <div className='container'>
            <div className='w relative bckMainContainer br-25 shadow relative'>
                <img className='w-image pos pointer' src={img ? saved : add} onClick={img ? deleteLastCity : saveNewCity}/>
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