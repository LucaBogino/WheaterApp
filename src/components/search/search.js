import './search.css';
import { useState } from "react";
import {Form} from 'react-bootstrap';
import searchImg from '../../assets/search.png';

// COMPONENT PER LA RICERCA DELLA CITTà
function Search(props) {

    const[city, setSelectedCity] = useState('');

    const handleChangeCity = (e) => {
        setSelectedCity(e.target.value)
    }

    const changeSelectedCity = () => {
        props.setCity(city);
        setSelectedCity('');
    }

    return (
        <div className='container'>
            <Form.Label className='common-label ms-2'>Cerca</Form.Label>
            <div className='search_container common_b_radius'>
            <input className='w-100 inp common_b_radius' value={city} placeholder="ex: Milano" onChange={(e)=>handleChangeCity(e)}></input>
            <button className='btn_search' onClick={changeSelectedCity}>
                <img className="w-50 mxw-50" src={searchImg}/>
            </button>
            </div>
        </div>
    )
}

export default Search;