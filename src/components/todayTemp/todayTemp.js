import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import {Form} from 'react-bootstrap';
import tempImg from '../../assets/temp.png';
import './today.css'

function TodayTemp() {

    const [temps, setTemps] = useState([]);
    const [hours, setHours] = useState([]);

    const today = new Date();

    const cityTemp = useSelector(state => state.futureWeather);

    useEffect(() => {
        if (cityTemp) getTodayTemp()
      }, [cityTemp]);

    const getTodayTemp = () => {
        let findTodayData = cityTemp.filter(x => new Date(x.dt_txt).toDateString() === today.toDateString());
        if (findTodayData.length > 4) findTodayData.splice(4);
        setTodayData(findTodayData);
    }

    const setTodayData = (findTodayData) => {
        let temps = [];
        let hours = [];
        findTodayData.forEach(el => {
            el.main.temp = el.main.temp - 273.15; // formula per passare da gradi kelvin a celsius
            temps.push(Math.round(el.main.temp * 10) / 10);
            let h = new Date(el.dt_txt).getHours() 
            hours.push(h);
        });
        setTemps(temps);
        setHours(hours);
    }

    return (
        <div className="container">
            <Form.Label className='common-label ms-2'>Temperatura</Form.Label>
            <div className="bck br-25 w shadow">
                <div className='d-flex'>
                    <Form.Label className="now">°c</Form.Label>
                    <Form.Label className="now">h</Form.Label>
                </div>
                <div className="tempContainer">
                    <div className="column mt-05">
                        {
                            temps.map((temp, id) =>
                                <div className="mb-75" key={id}>{temp}</div>
                            )
                        }
                    </div>
                    <div className="flex-center">
                        <img className="w-75 mxw-50" src={tempImg}/>
                    </div>
                    <div className="column mt-05">
                        {
                            hours.map((hour, id) =>
                                <div className="mb-75" key={id}>{hour}:00</div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodayTemp;