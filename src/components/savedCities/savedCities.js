import { useSelector } from "react-redux";
import CityCard from './savedCitiesCard/savedCitiesCard';

function SavedCities() {

    const cities = useSelector(state => state.savedCities);

    return (
        <>
            {
                (cities?.length && cities) ? 
                <div className="container">
                    <label className="common-label">Città salvate</label>
                </div>
                :
                <div></div>
            }
            
            { 
                ((cities?.length && cities) || []).map((city, i)=>(
                    <div key={i} className="container">
                        <CityCard city={city}/>
                    </div>
                ))
            }
        </>
    )
}

export default SavedCities;