import './localization.css';
import {Form} from 'react-bootstrap';
import localizzazione from '../../assets/localizzazione.png';

function Localization () {

    return(
        <div className="container mt-5">
            <Form.Label className='common-label ms-2'>Localizzazione</Form.Label>
            <div className="bck br-25 w shadow flex pt-3 pb-3">
                <img className='loca_img pointer' src={localizzazione}/>
                <Form.Label className='loca-txt pt-3 pointer'>Attiva localizzazione</Form.Label>
            </div>
        </div>
    )
}

export default Localization;