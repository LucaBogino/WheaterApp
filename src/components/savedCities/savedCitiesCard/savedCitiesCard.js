import { useSelector } from "react-redux";

function CityCard(props) {

    const today = useSelector(state => state.today);

    return(
        <div className="container">
            {today} - {props.city.cityName} - {props.city.temp} - {props.city.desc}
        </div>
    )
}

export default CityCard;