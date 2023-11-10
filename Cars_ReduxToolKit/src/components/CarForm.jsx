import { useDispatch,useSelector } from 'react-redux';
import { changeName,changeCost,addCar } from '../store';

export const CarForm = () => {
    const dispatch = useDispatch();
    const {name,cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        };
    });

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value))
    };

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0

        dispatch(changeCost(carCost));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // dispatch(addCar({name: name, cost: cost}));
        if(name && cost){
            dispatch(addCar({name,cost}));
        }
        else{
            alert("Input Data !!!")
        }
    }

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3"> Add Car </h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <lable className="label"> Name </lable>
                        <input
                            className="input is-expanded"
                            type='text'
                            value={name}
                            onChange={handleNameChange}
                        />  
                    </div>
                </div>
                
                <div className="field-group">
                    <div className="field">
                        <lable className="label"> Cost </lable>
                        <input
                            className="input is-expanded"
                            type='number'
                            value={cost || ''}
                            onChange={handleCostChange}
                        />  
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}