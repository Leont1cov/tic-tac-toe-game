import "./table.css";
import {useRef, useState} from "react";
import Circle from "../ImgComponents/cirlce/Circle.jsx";
import Cross from "../ImgComponents/cross/Cross.jsx";
import { initialTable } from "../../state/initialTable.js";

const Table = ({ isVictory, tap }) => {
    const [drawingTd, setDrawingTd] = useState(initialTable);

    const renderSymbol = (cell) => {
        if (cell === "cross") return <Cross />;
        if (cell === "circle") return <Circle />;
        return null;
    }

    return (
        <table>
            <tbody>
                {drawingTd.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td onClick={() => tap(drawingTd, setDrawingTd, rowIndex, cellIndex)}
                                className={"td"} key={cellIndex}>
                                {renderSymbol(cell)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;