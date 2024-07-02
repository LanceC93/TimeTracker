"use client";

import './global.css';
import {signIn,useSession} from 'next-auth/react';
//localhost:3000

function HomeButton() {
    const {data:session} = useSession();

    if(session) {
        return (
            <>
                <a href="./create">
                    <button className="time-button">+ Add Time</button>
                </a>
            </>
        );
    }
    return (
        <>
            <button onClick={() => signIn()} className="time-button">Sign In</button>
        </>
    );
}
export default function HomePage() {
    return (
        <div className = "home-body">
            <h1>Time Tracker</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac aliquam nibh, sed blandit nisi. Nam aliquet lacus id orci maximus, porta lacinia sem faucibus. Vivamus ac nibh metus. Donec ultricies, velit sed rutrum imperdiet, nisl velit suscipit arcu, quis sodales felis elit ac urna. Duis vel maximus magna, nec molestie magna. Vestibulum a velit eget diam fringilla gravida. In in erat a purus elementum laoreet nec eleifend sapien. Mauris a velit vel eros accumsan dictum. Quisque ac enim cursus libero bibendum aliquet vitae pulvinar quam. Sed ut est euismod, tempor enim sed, commodo ante. Maecenas a varius ex, ut venenatis sapien. Curabitur vitae ex quam. Aenean euismod semper mi et pulvinar. 
            </p>
        </div>
    );
}