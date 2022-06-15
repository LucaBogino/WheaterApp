import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import NextDayCard from './nextDayCard/nextDayCard';
import './nextDaysTemp.css';

function NextDaysTemp() {

    const today = new Date();

    const nextDaysTemp = useSelector(state => state.futureWeather);

    const [nextDay, setNextDay] = useState({});
    const [nextNextDay, setNextNextDay] = useState({});
    const [nextNextNextDay, setNextNextNextDay] = useState({});

    useEffect(() => {
        if (nextDaysTemp) getNextDaysTemp();
    }, [nextDaysTemp]);

    const getNextDaysTemp = () => {
        incrementDay();
        let findNextDayData = nextDaysTemp.filter(x => new Date(x.dt_txt).toDateString() === today.toDateString());
        setMediaTemp(findNextDayData, 'next');

        incrementDay();
        let findNextNextDayData = nextDaysTemp.filter(x => new Date(x.dt_txt).toDateString() === today.toDateString());
        setMediaTemp(findNextNextDayData, 'nextNext');

        incrementDay();
        let findNextNextNextDayData = nextDaysTemp.filter(x => new Date(x.dt_txt).toDateString() === today.toDateString());
        setMediaTemp(findNextNextNextDayData, 'nextNextNext');
    }

    const setMediaTemp = (data, id) => {
        let media = 0;
        let day = new Date(data[0].dt_txt);
        let weather =   data.length > 4 ? data[4].weather[0].main :
                        data.length > 3 ? data[3].weather[0].main :
                        data.length > 2 ? data[2].weather[0].main :
                        data.length > 1 ? data[1].weather[0].main :
                        data[0].weather[0].main;
        data.forEach(el => {
            media += el.main.temp;
        });
        media = (media/data.length) - 273.15;
        media = Math.round(media * 10) / 10
        
        createObj(media, id, weather, day);
    }

    const createObj = (media, id, weather, day) => {
        switch(id) {
            case 'next':
                setNextDay({dayName: setDayName(day), media, weather})
            break;
            case 'nextNext':
                setNextNextDay({dayName: setDayName(day), media, weather})
            break;
            case 'nextNextNext':
                setNextNextNextDay({dayName: setDayName(day), media, weather})
            break;
        }
    }

    const setDayName = (day) => {
        switch(day.getDay()) {
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

    const incrementDay = () => {
        today.setDate(today.getDate() + 1);
    }

    return(
        <div className='shadow bck p-3 br-25'>
            <label className='common-label w ms-2'>Prossimi giorni</label>
            <div className='w ms-2 form-label'>temperature medie</div>
            <div className='d-flex'>
                <NextDayCard dayData={nextDay}/>
                <NextDayCard dayData={nextNextDay}/>
                <NextDayCard dayData={nextNextNextDay}/>
            </div>
        </div>
    )
}

export default NextDaysTemp;