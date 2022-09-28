import { useEffect, useRef, useState } from "react";
import "../../sass/square.scss";
import axios from "axios";
import { random } from "lodash";

function RedSquare({size, ziggy}) {

    const [text,setText] = useState('');
    const [color,setColor] = useState('#ffffff');
    const [squares, setSquares] = useState([]);

    useEffect(() => {
        axios.get(ziggy.url + '/get-square')
        .then(response => setSquares(response.data.squares))
    }, []);


    const refresh = useRef('_1');

    const reset = () => {
        axios.delete(ziggy.url + '/reset-square')
        setSquares([]);
        setText('');
        setColor('');
    }
    const add = () => {
        setSquares(s => [...s, {text,color}]);
        setText('');
        setColor('');
        axios.post(ziggy.url + '/add-square', {text,color})
        .then(res => {
            console.log(res);
        });
        refresh.current = '_' + random(0,10);
    }
    return (
        <>
            <div className="square-bin">
                {
                    squares.map((s, i) => <div
                    key={i + refresh.current}
                    className="square"
                    style={{
                        width: size + "px",
                        height: size + "px",
                        backgroundColor: s.color + '70',
                    }}
                >
                    {s.text}
                </div> )
                }
                
            </div>
            <div className="input-bin">
                <button onClick={add}>Add</button>
                <input type="text" value={text} onChange={event => setText(event.target.value)} />
                <input type="color" value={color} onChange={event => setColor(event.target.value)}/>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    );
}

export default RedSquare;
