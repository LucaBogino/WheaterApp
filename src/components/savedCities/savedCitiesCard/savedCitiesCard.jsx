import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import './savedCitiesCard.css';
import sun from '../../../assets/sole.png';
import clouds from '../../../assets/nuvolo.png';
import rain from '../../../assets/pioggia.png';
import snow from '../../../assets/sole-pioggia.png';
import sunAndClouds from '../../../assets/sole-nuvole.png';

function CityCard(props) {

    const today = useSelector(state => state.today);
    const cityInfo = useSelector(state => state.city);

    const [image, setImage] = useState();
    const [bck, setBck] = useState();
    const [day, setDay] = useState();
    const [month, setMonth] = useState();

    useEffect(() => {
        chooseImage();
    }, [props]);

    useEffect(() => {
        let t = today;
        let charIndex = t.indexOf(',');
        let day = today.slice(0, charIndex + 1);
        let month = today.slice(charIndex + 2);
        setDay(day);
        setMonth(month);
    }, [today]);

    const chooseImage = () => {
        switch(props.city.weather[0].main) {
            case "Clear":
                setImage(sun);
                setBck('sunny');
            break;
            case "Clouds":
                setImage(clouds);
                setBck('clouds');
            break;
            case 'Rain':
                setImage(rain);
                setBck('rain');
            break;
            case 'Snow':
                setImage(snow);
                setBck('snow');
            break;
            default:
                setImage(sunAndClouds);
                setBck('sunAndClouds');
            break;
        }
    }

    return(
        <div className={'city_card w mt-2 shadow pointer ' + bck} onClick={()=>props.selectSaveCity(props.city.name)}> 
            <div>
                <label>{props.city.name}</label>
                <div className="fs-10">{day}</div>
                <div className="fs-10">{month}</div>
            </div>
            <img className='img-w' src={image}/>
            <div>
                {(Math.round((props.city.main.temp - 273.15) * 10) / 10)}
            </div>
        </div>                
    )
}

export default CityCard;