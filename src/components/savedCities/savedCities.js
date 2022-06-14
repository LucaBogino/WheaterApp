import { useSelector } from "react-redux";
import CityCard from './savedCitiesCard/savedCitiesCard';

function SavedCities() {

    const cities = useSelector(state => state.savedCities);

    return (
        <>
            { 
                ((cities?.length && cities) || []).map((city, i)=>(
                    <div key={i}>
                        <CityCard city={city}/>
                    </div>
                ))
            }
        </>
    )
}

export default SavedCities;