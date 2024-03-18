import { useState } from 'react';
import './ButtonContent.css';
import Button from 'components/button';

function ButtonContent({ buttonNames, setAvailableNow }) {
    
    const [active, setActive] = useState(0);

    return ( 
        <div className="buttons_content">
            {
                buttonNames.map((buttonName, index) => 
                    <Button 
                        execute={() => {
                            setActive(index);
                            if(buttonName === 'Available Now'){
                                setAvailableNow(true);
                            }else{
                                setAvailableNow(false);
                            }
                        }} 
                        isActive={ active === index ? 'button active': 'button'} 
                        key={buttonName}
                    >
                        {buttonName}
                    </Button>
                )
            }
        </div>
     );
}



export default ButtonContent;