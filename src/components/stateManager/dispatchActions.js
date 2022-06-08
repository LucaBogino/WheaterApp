export const actions = {
    CHANGE_CITY: "CHANGE_CITY",
    SET_CITY_WEATHER: "SET_CITY_WEATHER",
    FUTURE_WEATHER: 'FUTURE_WEATHER'
}

export const changeCity = (city) => ({
    selectedCity: city,
    type: actions.CHANGE_CITY,
});

export const setCityweather = (info) => ({
    weather: info,
    type: actions.SET_CITY_WEATHER,
});

export const setFutureWeather = (info) => ({
    futureWeather: info,
    type: actions.FUTURE_WEATHER,
});
