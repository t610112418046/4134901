import React, {useState,useEffect} from "react";


function Hook() {
    const [color, setColor] = useState("red");
    const [count, setCount] = useState(0);
    const [multi, setMulti] = useState(1);
    const [car, setCar] = useState({
        brand:"Masda",
        year:2012,
        color:"red",       
    });

    const updateCarColor =  () => {
        setCar((previosState) => {
            return {...previosState,color: "green" };
        });
    };

    useEffect(() => {
        document.title = `change State ${count} : ${color}`;
        //setTimeout(() => {
            setMulti(() => count*2);
        //}, 1000);
    }, [count]);

    return (
        <>
            <p>Color is {color}</p> 
            <button onClick={() => setColor("blue")}>Change</button>

            <p>Count is {count}</p> 
            <p>multi of count is {multi}</p>
            <button onClick={() => setCount(count + 1)}>Inc</button>

            <p>
                {car.brand} Car color is {car.color}
            </p>
            <button onClick={updateCarColor}>Color</button>
        </>
    );
}

export default Hook;