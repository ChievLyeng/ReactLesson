import { useDispatch,useSelector } from "react-redux";
import { changeSearchTerm } from "../store/slices/carsSlice";

export const CarSearch = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm
    })

    const handleSearchTermChange = (event) => {
        dispatch(changeSearchTerm(event.target.value));
    }

    return (
        <div className="list-header">
            <h3 className="titll is-3"> My Cars </h3>
            <div className="search field is-horizontal">
                <label className="label">Search</label>
                <input 
                    type="text"
                    className="input"
                    value={searchTerm}
                    onChange={handleSearchTermChange} 
                 />
            </div>
        </div>
    );
}