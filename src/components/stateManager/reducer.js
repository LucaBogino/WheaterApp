import {actions} from './dispatchActions';

const reducer = (state={}, data ) => {
    
    switch (data.type) {
        case actions.CHANGE_CITY: // Cambia la città selezionata dall'utente
            return {...state, city: data.selectedCity};

        case actions.SET_CITY_WEATHER: // setta le informazioni meteo attuali
            return {...state, weather: data.weather};

        case actions.FUTURE_WEATHER: // setta le informazioni per i prossimi 5 giorni (oggi compreso)
            return {...state, futureWeather: data.futureWeather};

        default:
            return state;
    }
}

export default reducer;