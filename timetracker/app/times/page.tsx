import '../global.css';
import CardBox from "../_components/CardBox.js";
import {getServerSession} from 'next-auth';
import {redirect} from 'next/navigation';

//localhost:3000/times

export default async function Times() {
    /*const session = await getServerSession();

    if(!session || !session.user) {
        redirect("/api/auth/signin");
    }*/
   
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