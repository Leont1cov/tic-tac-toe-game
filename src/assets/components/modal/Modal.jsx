import "./modal.css";
import updateCounter from "../../../utils/updateCounter.js";
import Retry from "../retry/Retry.jsx";

const Modal = (player) => {
    console.log(player);
    return (
        <div className="modal-overlay">
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>{`${player.player}`}</h2>
                <button onClick={updateCounter}>
                    <i className="fa-solid fa-rotate retry-button-icon"></i>
                    Play Again
                </button>
            </div>
        </div>
    )
}

export default Modal;