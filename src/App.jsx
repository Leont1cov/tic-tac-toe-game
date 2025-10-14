import './assets/App.css';
import Table from "./assets/components/Table/Table.jsx";
import {useRef, useState} from "react";
import isVictory from "./utils/isVictory.js";

export default function App() {
    let count = useRef(0);
    let [victoryText, setVictoryText] = useState("");

    const tap = (arr, setArr, rowIndex, cellIndex) => {
        const copy = [...arr]
        copy[rowIndex] = [...copy[rowIndex]];
        let player = null;

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
            setVictoryText(`${player === "cross" ? "Cross" : "Circle"} WIN`);
        } else if (count.current === 8) setVictoryText("Game OVER!")

        count.current++;
        setArr(copy);
    }

  return (
    <>
      <div className={"container"}>
          <h1 className={"header"}>Tic-tac-toe</h1>
          {victoryText && <h2>{victoryText}</h2>}
          <Table isVictory={isVictory} tap={tap}/>
      </div>
    </>
  )
}


