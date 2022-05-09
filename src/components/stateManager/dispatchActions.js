export const actions = {
    CHANGE_CITY: "CHANGE_CITY",
    SET_CITY_weather: "SET_CITY_weather"
}

export const changeCity = (city) => ({
    selectedCity: city,
    type: actions.CHANGE_CITY,
});

export const setCityweather = (info) => ({
    weather: info,
    type: actions.SET_CITY_weather,
});
