import './nextDayCard.css';
import { useState, useEffect } from 'react';
import sun from '../../../assets/sole.png';
import clouds from '../../../assets/nuvolo.png';
import rain from '../../../assets/pioggia.png';
import snow from '../../../assets/sole-pioggia.png';
import sunAndClouds from '../../../assets/sole-nuvole.png';

function NextDayCard(props) {

    const [image, setImage] = useState();

    useEffect(() => {
        chooseImg();
    }, [props]);

    const chooseImg = () => {
        switch(props.dayData.weather) {
            case "Clear":
                setImage(sun);
            break;
            case "Clouds":
                setImage(clouds);
            break;
            case 'Rain':
                setImage(rain);
            break;
            case 'Snow':
                setImage(snow);
            break;
            default:
                setImage(sunAndClouds);
            break;
        }
    }

    return (
        <div className='f-column w br-25 n_d_card bck-card shadow reg-w'>
            <div>
                {props.dayData.dayName}
            </div>   
            <div>
                {props.dayData.media}
            </div>
            <div>
                <img className='img-w' src={image} alt="weather"/>
            </div>
        </div>
    )
}

export default NextDayCard;