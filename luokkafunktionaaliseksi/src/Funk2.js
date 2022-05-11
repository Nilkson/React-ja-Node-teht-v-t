import React, { useState } from "react";

const Funk2 = () => {
    const [count, setCount] = useState(0)

const increaseCount = () => {
        setCount (count + 1)
    }

    return (
        <div className="marg">
            <h1>Funktiopohjainen laskuri:</h1>
            <h2>{count}</h2>
            <button onClick={() => increaseCount()}> klik </button>
            
        </div>
    )
}

export default Funk2;