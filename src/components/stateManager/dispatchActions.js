export const actions = {
    CHANGE_CITY: "CHANGE_CITY",
    SET_CITY_WEATHER: "SET_CITY_WEATHER",
    FUTURE_WEATHER: "FUTURE_WEATHER",
    TODAY: "TODAY",
    SAVE_CITY: "SAVE_CITY",
    DELETE_CITY: "DELETE_CITY"
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

export const setToday = (today) => ({
    today,
    type: actions.TODAY,
})

export const saveCity = () => ({
    type: actions.SAVE_CITY,
})

export const deleteCity = () => ({
    type: actions.DELETE_CITY,
})
