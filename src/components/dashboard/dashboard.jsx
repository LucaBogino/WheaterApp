import './dashboard.css';
import Search from '../search/search';
import TodayTemp from '../todayTemp/todayTemp';
import MainContainer from '../mainContainerImg/mainContainerImg';
import TempShortcut from '../tempShortcut/tempShortcut';
import Localization from '../localization/localization';
import SavedCities from '../savedCities/savedCities';
import NextDaysTemp from '../nextDaysTemp/nextDaysTemp';
import { useState } from 'react';
import { changeCity, setCityweather, setFutureWeather, setToday } from "../stateManager/dispatchActions";
import {Spinner} from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';
import store from '../stateManager/store';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DashBoard () {

    const commonUrl = 'https://api.openweathermap.org/';
    const geoStartUrl = 'geo/1.0/direct?q=';
    const geoEndUrl = '&limit=1&appid=';
    const APIkey = 'ee29e312e331595ae449d50e4912185b';

    const [city, setSelectedCity] = useState('milano'); // città scelta dall'utente nel component search
    const [isLoading, setLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
      const today = new Date();
      store.dispatch(setToday(getDay(today) + ' ' + today.getDate() + ', ' + getMonth(today)));
    }, []);

    useEffect(() => {
      getPosition();
    }, [city]);

    const getPosition = () => {
      setLoading(true);
      axios.get(commonUrl + geoStartUrl + city + geoEndUrl + APIkey)
      .then((res) => {
        if (res.data.length) {
          store.dispatch(changeCity(city));
          const lon = res.data[0].lon;
          const lat = res.data[0].lat;
          getweather(lon, lat);
          getFutureWeather(lon, lat);
        } else {
          setLoading(false);
          alert('Riprova, qualcosa è andato storto!');
        }

      })
      .catch((error) => {
        console.log(error);
      })
    }

    const getweather = (lon, lat) => {
      axios.get(commonUrl + `data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&lang=it`)
      .then((res) => {
        store.dispatch(setCityweather(res.data));
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      })
    }

    const getFutureWeather = (lon, lat)=> {
      axios.get(commonUrl + `data/2.5/forecast?lon=${lon}&lat=${lat}&appid=${APIkey}&lang=it`)
      .then((res) => {
        store.dispatch(setFutureWeather(res.data.list));
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      })
    }

    const setCity = (event) => {
      setSelectedCity(event);
    }

    const getDay = (today) => {
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

    const getMonth = (today) => {
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
        <>
            {
              isLoading? <Spinner className='loading' animation="border" variant="primary" /> : <span></span>
            }
            <TempShortcut setCity={setCity}/>
            <div className={isMobile ? "app_mobile mt-5" : "app mt-5"}>
                <Row className='mb-5 dashboard_row'>
                    <Col sm={8}>
                        <MainContainer />
                    </Col>
                    <Col sm={4}>
                        <SavedCities selectSaveCity={setCity}/>
                    </Col>
                </Row>
                <Row className='mb-5 dashboard_row'>
                    <Col sm>
                        <TodayTemp />
                    </Col>
                    <Col sm className={isMobile ? 'mt-5':""}>
                        <NextDaysTemp />
                    </Col>
                    <Col sm>
                        {
                            isMobile ?
                            <div></div>
                            :
                            <Search setCity={setCity}/>
                        }
                        <Localization />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default DashBoard;