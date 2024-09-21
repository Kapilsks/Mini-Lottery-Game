import { useState } from "react";
import { genticket,sum } from "./genticket";
import "./Lottery.css";
export default function Lottery({wincondition}) {
    let [ticket, setticket] = useState(genticket(3));
    let isWinning = wincondition(ticket);
    let buyticket = () => {
        setticket(genticket(3));
    }
    return (
        <>
        <h1>Lottery Game!</h1>
        <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button onClick={buyticket}>Buy Ticket</button>
            <h3>{isWinning && "Congratulations you won!"}</h3>
        </>
    );
}