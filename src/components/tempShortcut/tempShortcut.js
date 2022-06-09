import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import sun from '../../assets/sole.png';
import './tempShortcut.css';

function TempShortcut() {

    const cityTemp = useSelector(state => state.weather);
    const [temp, setTemp] = useState();

    useEffect(() => {
        if(cityTemp) formatCityTemp();
    }, [cityTemp]);

    const formatCityTemp = () => {
        let temp = cityTemp.main.temp - 273.15
        temp = Math.round(temp * 10) / 10;
        setTemp(temp);
    }

    return (
        <div className='shortcutCont bck w'>
            <div className='tempTxt mb-4 pt-5'>{temp}°</div>
            <img className='mb-5 w-75' src={sun}/>
        </div>
    )
}

export default TempShortcut;