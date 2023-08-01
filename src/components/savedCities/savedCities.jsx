import { useSelector } from "react-redux";
import CityCard from './savedCitiesCard/savedCitiesCard';

function SavedCities(props) {

    const cities = useSelector(state => state.savedCities);

    const selectSaveCity = (event) => {
        props.selectSaveCity(event);
    }

    return (
        <>
            {
                (cities?.length && cities) ? 
                <div className="">
                    <label className="common-label">Città salvate</label>
                </div>
                :
                <div></div>
            }
            
            { 
                ((cities?.length && cities) || []).map((city, i)=>(
                    <div key={i} className="">
                        <CityCard city={city} selectSaveCity={selectSaveCity}/>
                    </div>
                ))
            }
        </>
    )
}

export default SavedCities;