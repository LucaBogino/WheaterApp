import './App.css';
import { Provider } from 'react-redux';
import store from './components/stateManager/store';
import Search from './components/search/search';
import TodayTemp from './components/todayTemp/todayTemp';
import { useState } from 'react';
import { changeCity, setCityweather } from "./components/stateManager/dispatchActions";
import {Spinner} from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';

function App() {  

  const commonUrl = 'https://api.openweathermap.org/';
  const geoStartUrl = 'geo/1.0/direct?q=';
  const geoEndUrl = '&limit=1&appid=';
  const APIkey = 'ee29e312e331595ae449d50e4912185b';

  const [city, setSelectedCity] = useState('milano'); // città scelta dall'utente nel component search
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    getPosition();
  }, [city]);

  const getPosition = () => {
    axios.get(commonUrl + geoStartUrl + city + geoEndUrl + APIkey)
    .then((res) => {
      getweather(res.data[0].lon, res.data[0].lat);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const getweather = (lon, lat) => {
    axios.get(commonUrl + `data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)
    .then((res) => {
      store.dispatch(setCityweather(res.data));
    })
    .catch((error) => {
      console.log(error);
    })
  }
  const setCity = (event) => {
    setSelectedCity(event);
    store.dispatch(changeCity(event));
  }

  return (
    <>
      {
        isLoading? <Spinner className='loading' animation="border" variant="primary" /> : <span></span>
      }
      <Provider store={store}>
        <div className="App col-md-24">
          <div className='secondRowContainer'>
            <div className='col-md-3'>
              <TodayTemp />
            </div>
            <div className='col-md-16'></div>
            <div className='col-md-5'>
              <Search setCity={setCity}/>
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
