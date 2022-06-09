import './mainContainerImg.css';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';

function MainContainer() {

    const cityInfo = useSelector(state => state.city);
    const cityWeather = useSelector(state => state.weather);
    const [todayDate, setToday] = useState('');
    const today = new Date();

    useEffect(() => {
        setToday(getDay() + ' ' + today.getDate() + ', ' + getMonth());
    }, []);

    const getDay = () => {
        switch(today.getDay()) {
            case 1 : 
                return 'Lunedì';
            case 2 : 
                return 'Martedì';
            case 3 : 
                return 'Mercoledì';
            case 4 : 
                return 'Giovedì';
            case 5 : 
                return 'Venerdì';
            case 6 : 
                return 'Sabato';
            case 0 : 
                return 'Domenica';
        }
    }

    const getMonth = () => {
        switch(today.getMonth()) {
            case 1 : 
                return 'Febbraio';
            case 2 : 
                return 'Marzo';
            case 3 : 
                return 'Aprile';
            case 4 : 
                return 'Maggio';
            case 5 : 
                return 'Giugno';
            case 6 : 
                return 'Luglio';
            case 7 : 
                return 'Agosto';
            case 8 : 
                return 'Settembre';
            case 9 : 
                return 'Ottobre';
            case 10 : 
                return 'Novembre';
            case 11 : 
                return 'Dicembre';
            case 0 : 
                return 'Gennaio';
        }
    }

    return (
        <div className='w relative bckMainContainer br-25 shadow'>
                <div className='containerContent'>
                    <div className='cityText'>{cityInfo ? cityInfo : 'Milano'}</div>
                    <div>{todayDate}</div>
                    <div>{cityWeather?.weather[0].description.charAt(0).toUpperCase() + cityWeather?.weather[0].description.slice(1)}</div>
                </div>
        </div>
    )
}

export default MainContainer;