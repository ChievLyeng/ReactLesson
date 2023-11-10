import { useSelector } from "react-redux";


export const CarValue = () => {
    const totalCost = useSelector(({cars: { data,searchTerm}}) => 
        data
            .filter((car) => {
                return car.name.toLowerCase().includes(searchTerm.toLowerCase())
            })
            .reduce((acc,car) =>  acc + car.cost,0)

        // this another way
        // let cost = 0;
        // for (let car of filteredCars){
        //     cost += car.cost
        // }
        // return cost;


        // this another way
        // return filteredCars.reduce((acc,car) =>  acc + car.cost,0)
    )

    return (
        <div className="car-value">
            Total Cost: ${totalCost}
        </div>
    );
}