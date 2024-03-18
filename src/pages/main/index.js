import { useState } from 'react';
import ButtonContent from 'components/button-content/index';
import './main.css';
import 'components/button-content/index';
import CoffeList from 'components/coffee-list';
import coffesList from '../../json/coffees.json'; //JSON

function Main() {
    const { coffees } = coffesList;

    const [availableNow, setAvailableNow] = useState(false);

    return ( 
        <main>
            <article className="main_panel">
                <header>
                    <h1>Our Collection</h1>
                    <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
                    <ButtonContent buttonNames={['All Products','Available Now']} setAvailableNow={setAvailableNow}/>
                </header>
                
                <CoffeList coffeeList={
                    availableNow ? 
                    coffees.filter(coffee => !coffee.sold_out):coffees
                }/>
                
            </article>
        </main>
);
}

export default Main;