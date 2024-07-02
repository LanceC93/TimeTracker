import '../global.css';
import CardBox from "../_components/CardBox.js"

//localhost:3000/times

export default function Times() {
    return (
        <div>
            <div className="sub-head">
                <h1>Times</h1>
                <a href="./create">
                    <button className="time-button">+ Add Time</button>
                </a>
            </div>
            <div className="card-container">
                <CardBox/>
            </div>
        </div>
    );
}