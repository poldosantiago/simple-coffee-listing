import Coffee from "components/coffee";
import './CoffeeList.css';

interface CoffeListProps{
    coffeeList: ICoffeData[]
}

function CoffeList({ coffeeList }:CoffeListProps) {
    return ( 
        <ul>
            {
                coffeeList.map( coffee => <Coffee coffeeData={coffee} />)
            }
        </ul>
     );
}

export default CoffeList;