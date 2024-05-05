import { FC, useState } from "react";

export var Button:FC = () => {
    var [count, setCount] = useState<number>(0)

    return(
        <button onClick={() => setCount(count => count + 1)}>{count}</button>
    )
}