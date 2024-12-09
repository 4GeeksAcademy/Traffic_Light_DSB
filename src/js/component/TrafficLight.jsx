import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState(null); // Estado inicial para el color seleccionado

    return (
        <div className="traffic-light">
            <div
                className={`light red ${color === "red" ? "selected" : ""}`}
                onClick={() => setColor("red")}
            ></div>
            <div
                className={`light yellow ${color === "yellow" ? "selected" : ""}`}
                onClick={() => setColor("yellow")}
            ></div>
            <div
                className={`light green ${color === "green" ? "selected" : ""}`}
                onClick={() => setColor("green")}
            ></div>
        </div>
    );
};

export default TrafficLight;