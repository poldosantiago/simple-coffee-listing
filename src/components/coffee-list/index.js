import Coffee from "components/coffee";
import './CoffeeList.css';

function CoffeList({coffeeList}) {
    console.log('aki:', coffeeList );
    return ( 
        <ul>
            {
                coffeeList.map( coffee => <Coffee coffeeData={coffee} />)
            }
        </ul>
     );
}

export default CoffeList;