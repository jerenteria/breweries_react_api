import "./Input.css";

const Input = () => {
    return (
        <div className="input-box">
            <form className='search'>
            <input className="input" type="text" placeholder="Search Breweries In Your Area!" /> 
            </form>
        </div>
    );
};

export default Input;