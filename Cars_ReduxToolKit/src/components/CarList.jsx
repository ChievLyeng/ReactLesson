import { useSelector,useDispatch } from "react-redux";
import { removeCar } from "../store";

export const CarList = () => {
    const dispatch = useDispatch();

    // const cars = useSelector((state) => {
    //     return state.cars.data
    // });
    const { cars,name }= useSelector(({form,cars: {data,searchTerm}}) => {
        const filteredCars = data.filter((car) => 
            car.name.toLowerCase().includes(searchTerm.toLowerCase()));

        return {
            cars: filteredCars,
            name: form.name
        }
    });

    const handleCarDelete = (car) => {
         dispatch(removeCar(car.id))
    }

    const renderedCars = cars.map((car) => {

        // decide if this car should be bold
        // state.form.name

        const bold = name && car.name.toLowerCase().includes(name.toLowerCase())


        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <div>
                <button className="button is-danger" onClick={() => handleCarDelete(car)}>
                    Delete
                </button>
                </div>
            </div>
            
        )
    })

    return (
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    );
}