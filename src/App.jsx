import './assets/App.css';
import Table from "./assets/components/Table/Table.jsx";
import {useRef, useState} from "react";
import isVictory from "./utils/isVictory.js";
import Modal from "./assets/components/modal/Modal.jsx";

export default function App() {
    let count = useRef(0);
    let [victoryText, setVictoryText] = useState("");
    let player = null;

    const tap = (arr, setArr, rowIndex, cellIndex) => {
        const copy = [...arr]
        copy[rowIndex] = [...copy[rowIndex]];

        if(copy[rowIndex][cellIndex] !== null) return;
        if (victoryText) return;

        if (count.current % 2 === 0) {
            copy[rowIndex][cellIndex] = "cross";
            player = "cross";
        } else {
            copy[rowIndex][cellIndex] = "circle";
            player = "circle";
        }

        if(isVictory(player, copy)) {
            setVictoryText(`${player === "cross" ? "Cross" : "Circle"} is win`);
        } else if (count.current === 8) setVictoryText("Game over")

        count.current++;
        setArr(copy);
    }

  return (
    <>
        <div className={"container"}>
            <h1 className={"header"}>Tic-tac-toe</h1>
            <Table isVictory={isVictory} tap={tap}/>
            {victoryText && <Modal player={victoryText}/>}
        </div>
    </>
  )
}


