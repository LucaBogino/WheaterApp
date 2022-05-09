import {actions} from './dispatchActions';

const reducer = (state={}, data ) => {
    
    switch (data.type) {
        case actions.CHANGE_CITY:
            return {...state, city: data.selectedCity};

        case actions.SET_CITY_weather:
            return {...state, weather: data.weather};

        default:
            return state;
    }
}

export default reducer;