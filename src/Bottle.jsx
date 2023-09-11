import './Style.css'
const Bottle = ({water,bottleHandler}) => {
    const {name,img,price}=water
    return (
        <div className="bottle">
            <h3>Name: {name} </h3>
            <img src={img} alt="" />
            <h3>Price: {price} </h3>
            <button onClick={()=>bottleHandler(water)}>Purchase</button>
        </div>
    );
};

export default Bottle;