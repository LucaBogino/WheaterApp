import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import sun from '../../assets/sole.png';
import clouds from '../../assets/nuvolo.png';
import rain from '../../assets/pioggia.png';
import snow from '../../assets/sole-pioggia.png';
import sunAndClouds from '../../assets/sole-nuvole.png';
import searchImg from '../../assets/search.png';
import Modal from 'react-bootstrap/Modal';
import './tempShortcut.css';

function TempShortcut({setCity}) {

    const cityTemp = useSelector(state => state.weather);
    const [temp, setTemp] = useState();
    const [image, setImage] = useState();
    const [showSearch, setShowSearch] = useState(false);
    const[city, setSelectedCity] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
            case "Clear":
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

    const handleChangeCity = (e) => {
        setSelectedCity(e.target.value)
    }

    const enterPress = (event) => {
        if (event.key === "Enter") {
            changeSelectedCity();
        }
    }

    const changeSelectedCity = () => {
        if(city) {
            setCity(city);
            setSelectedCity('');
            setShowSearch(false)
        }
    }

    return (
        <div className='shortcutCont bck w'>
            <div className='tempTxt mb-4 pt-5'>{temp}°</div>
            <img className='mb-4 w-75' src={image}/>
            {
                isMobile?
                <img className="w-50 mxw-50 mb-4" src={searchImg} alt="search" onClick={()=>{setShowSearch(!showSearch)}}/>
                :
                <div></div>
            }
            <Modal show={showSearch} onHide={()=>{setShowSearch(false)}} centered>
              <Modal.Body>
                <div className='search_container common_b_radius'>
                    <input className='w-100 inp common_b_radius' value={city} placeholder="Cerca città" onChange={(e)=>handleChangeCity(e)} onKeyDown={(e)=>enterPress(e)}></input>
                    <button className='btn_search' onClick={changeSelectedCity} >
                        <img className="w-50 mxw-50" src={searchImg} alt="search"/>
                    </button>
                </div>
              </Modal.Body>
            </Modal>
        </div>
    )
}

export default TempShortcut;