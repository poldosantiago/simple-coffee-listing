import { formatCurrency } from "formatter/currency";

import './Coffee.css';
import star from './Star.svg';
import starFill from './Star_fill.svg';

interface CoffeeProps{
    coffeeData: ICoffeData
}

function Coffee({ coffeeData }:CoffeeProps) {

    const { name, popular, price, rating, votes, sold_out:soldOut, path } = coffeeData;

    return ( 
        <li>
            <img className={'coffee_image'} src={`${process.env.PUBLIC_URL}${path}`} alt="imagem" />
            <div className='content'>
                <h1>{name}</h1>
                <span className="price">{formatCurrency(Number(price), 'en-US')}</span>
            </div>

            <div className='content'>
                <div className='rating_content'>
                    <img src={starFill} alt="star"/>
                    {Number(rating) > 0 &&
                        <div>
                            <span>{rating}</span> ({votes} votes)
                        </div>
                    }
                    {Number(rating) <= 0 &&
                        <div>
                            No ratings
                        </div>
                    }
                </div>
                <span className='sold_out'>{ soldOut ? 'SOLD OUT': '' }</span>
            </div>
            
            {popular &&
                <div className='popular'>Popular</div> //position absolute
            }

        </li>
     );
}

export default Coffee;