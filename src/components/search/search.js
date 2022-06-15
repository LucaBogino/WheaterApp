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
        if(city) {
            props.setCity(city);
            setSelectedCity('');
        } else {
        }
    }

    const enterPress = (event) => {
        if (event.key === "Enter") {
            changeSelectedCity();
        }
    }

    return (
        <div className='container'>
            <Form.Label className='common-label ms-2'>Cerca</Form.Label>
            <div className='search_container common_b_radius'>
            <input className='w-100 inp common_b_radius' value={city} placeholder="ex: Milano" onChange={(e)=>handleChangeCity(e)} onKeyDown={(e)=>enterPress(e)}></input>
            <button className='btn_search' onClick={changeSelectedCity} >
                <img className="w-50 mxw-50" src={searchImg} alt="search"/>
            </button>
            </div>
        </div>
    )
}

export default Search;