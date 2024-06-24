import '../global.css';
import Card from "../_components/Card.js"

//localhost:3000/times

export default function Times() {
    return (
        <div>
            <h1>Times</h1>
            <div className="card-container">
                <Card/>
                <Card/>
            </div>
        </div>
    );
}