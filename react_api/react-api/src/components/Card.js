import './Card.css';

const Card = (props) => {
    return (
        <div className="list">
            {props.children}
        </div>
    );
};

export default Card;