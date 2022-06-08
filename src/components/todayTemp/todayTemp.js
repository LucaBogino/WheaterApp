import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import {Form} from 'react-bootstrap';
import tempImg from '../../assets/temp.png';
import './today.css'

function TodayTemp() {

    const [temps, setTemps] = useState([]);
    const [hours, setHours] = useState([]);

    const today = new Date();

    const cityInfo = useSelector(state => state.city);
    const cityTemp = useSelector(state => state.futureWeather);

    useEffect(() => {
        if (cityTemp) getTodayTemp()
      }, [cityTemp]);

    const getTodayTemp = () => {
        let findTodayData = cityTemp.filter(x => new Date(x.dt_txt).toDateString() === today.toDateString());
        setTodayData(findTodayData);
    }

    const setTodayData = (findTodayData) => {
        let temps = [];
        let hours = [];
        findTodayData.forEach(el => {
            el.main.temp = el.main.temp - 273.15; // formula per passare da gradi kelvin a celsius
            temps.push(Math.round(el.main.temp * 10) / 10);
            let h = new Date(el.dt_txt).getHours() < 12 ?
                new Date(el.dt_txt).getHours() + ' a.m.' : 
                new Date(el.dt_txt).getHours() + ' p.m.'
            hours.push(h);
        });
        setTemps(temps);
        setHours(hours);
    }

    return (
        <div className="container">
            <Form.Label className='common-label ms-2'>Oggi a {cityInfo ? cityInfo : 'Milano'}</Form.Label>
            <div className="bck br-25 w shadow">
                <Form.Label className="now">Temperatura</Form.Label>
                <div className="tempContainer">
                    <div className="column">
                        {
                            temps.map((temp, id) =>
                                <div className="mb-75" key={id}>{temp}°</div>
                            )
                        }
                    </div>
                    <div className="flex-center">
                        <img className="w-50 mxw-50" src={tempImg}/>
                    </div>
                    <div className="column">
                        {
                            hours.map((hour, id) =>
                                <div className="mb-75" key={id}>{hour}</div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodayTemp;