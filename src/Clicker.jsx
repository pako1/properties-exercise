import { useState } from "react";
export default function Clicker() {
    const [number, changeNumber] = useState(0)
    const increase = () => { changeNumber(number + 1); }
    return (<div>
        <p>We counted {number} tomatoes</p>
        <button onClick={increase}>Click</button>
    </div>);
}