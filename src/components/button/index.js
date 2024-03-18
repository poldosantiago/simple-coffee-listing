import './Button.css';

function Button({ children, execute, isActive }) {
    return ( 
        <button className={isActive} onClick={execute}>{children}</button>
     );
}

export default Button;