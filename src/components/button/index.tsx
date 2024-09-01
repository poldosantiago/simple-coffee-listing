import './Button.css';

interface ButtonProps{
    children: string,
    execute: () => void,
    isActive: string
}

function Button({ children, execute, isActive }:ButtonProps) {
    return ( 
        <button className={isActive} onClick={execute}>{children}</button>
     );
}

export default Button;