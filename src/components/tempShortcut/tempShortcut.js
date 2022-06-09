import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import sun from '../../assets/sole.png';
import clouds from '../../assets/nuvolo.png';
import rain from '../../assets/pioggia.png';
import snow from '../../assets/sole-pioggia.png';
import sunAndClouds from '../../assets/sole-nuvole.png';
import './tempShortcut.css';

function TempShortcut() {

    const cityTemp = useSelector(state => state.weather);
    const [temp, setTemp] = useState();
    const [image, setImage] = useState();

    useEffect(() => {
        if(cityTemp){
            formatCityTemp();
            chooseImage();
        }
    }, [cityTemp]);

    const formatCityTemp = () => {
        let temp = cityTemp.main.temp - 273.15
        temp = Math.round(temp * 10) / 10;
        setTemp(temp);
    }

    const chooseImage = () => {
        switch(cityTemp.weather[0].main) {
            case "Sun":
                setImage(sun);
            break;
            case "Clouds":
                setImage(clouds);
            break;
            case 'Rain':
                setImage(rain);
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
        <div className='shortcutCont bck w'>
            <div className='tempTxt mb-4 pt-5'>{temp}°</div>
            <img className='mb-5 w-75' src={image}/>
        </div>
    )
}

export default TempShortcut;