import "./retry.css";
import updateCounter from "../../../utils/updateCounter.js";

const Retry = () => {
    return (
        <>
            <button onClick={updateCounter} className={"retry-button"}>
                <i className="fa-solid fa-rotate retry-button-icon"></i>
            </button>
        </>
    )
}

export default Retry;