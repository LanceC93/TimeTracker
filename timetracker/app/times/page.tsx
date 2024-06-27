import '../global.css';
import CardBox from "../_components/CardBox.js"

//localhost:3000/times

export default function Times() {
    return (
        <div>
            <h1>Times</h1>
            <div className="card-container">
                <CardBox/>
            </div>
        </div>
    );
}