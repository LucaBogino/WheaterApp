import { useSelector } from "react-redux";
import {Form} from 'react-bootstrap';
import tempImg from '../../assets/temp.png';
import './today.css'

function TodayTemp() {

    const cityInfo = useSelector(state => state.city);
    const cityTemp = useSelector(state => state.weather);

    const temps = [22, 20, 28, 16];
    const hours = ['15', '13', '11', '09'];

    return (
        <div className="container">
            <Form.Label className='common-label ms-2'>Oggi a {cityInfo}</Form.Label>
            <div className="bck br-25 w shadow">
                <Form.Label className="now">Adesso</Form.Label>
                <div className="tempContainer">
                    <div className="column">
                        {
                            temps.map((temp, id) =>
                                <div className="mb-75" key={id}>{temp}</div>
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