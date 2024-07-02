"use client";
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";
import styles from "../_styles/navbar.module.css";

function AuthButton() {
    const {data: session} = useSession();

    if(session) {
        return (
            <>
                <Link href = "/times">Times</Link>
                <button onClick={() => signOut()}>Sign Out</button>
            </>
        )
    }
    return (
        <>
            <button onClick={() => signIn()}>Sign In</button>
        </>
    );
}

export default function Navbar() {
    return(
    <div className={styles.bar}>
        <Link href = "/">Home</Link>
        <AuthButton/>
    </div>
    );
}